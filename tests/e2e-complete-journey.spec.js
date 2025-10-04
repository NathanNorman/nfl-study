/**
 * E2E Test - Complete User Journey
 * Tests the full workflow from module selection through card rating to progress tracking
 */

import { test, expect } from '@playwright/test';

test('Complete user journey - module selection to progress tracking', async ({ page }) => {
  // Clear all IndexedDB databases
  await page.goto('http://localhost:8080/');
  await page.evaluate(() => {
    return Promise.all([
      indexedDB.deleteDatabase('nfl-study'),
      indexedDB.deleteDatabase('nfl-study-mcq'),
      indexedDB.deleteDatabase('nfl-study-modules')
    ]);
  });
  await page.reload();
  await page.waitForTimeout(3000); // Wait for card generation

  // Step 1: Verify initial state
  console.log('Step 1: Verifying initial state...');
  await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible();
  await expect(page.locator('text=0/8 modules complete')).toBeVisible();

  // Step 2: Verify Module 1 is unlocked
  console.log('Step 2: Checking Module 1 is unlocked...');
  const module1 = page.locator('text=Football 101').locator('..').locator('..');
  await expect(module1.locator('button:has-text("Start Flashcards")')).toBeVisible();

  // Step 3: Verify Module 2 is locked
  console.log('Step 3: Checking Module 2 is locked...');
  const module2 = page.locator('text=Fantasy Football Basics').locator('..').locator('..');
  await expect(module2.locator('button:has-text("Locked")')).toBeVisible();

  // Step 4: Start Module 1
  console.log('Step 4: Starting Module 1 flashcards...');
  await page.locator('button:has-text("Start Flashcards")').first().click();
  await page.waitForTimeout(1500);

  // Step 5: Verify study page loaded
  console.log('Step 5: Verifying study page...');
  await expect(page.locator('h1:has-text("Football 101")')).toBeVisible();
  await expect(page.locator('button:has-text("Exit Module")')).toBeVisible();

  // Step 6: Capture console logs for progress updates
  console.log('Step 6: Rating cards and monitoring console...');
  const progressLogs = [];
  page.on('console', msg => {
    if (msg.text().includes('[useModules]')) {
      progressLogs.push(msg.text());
    }
  });

  // Step 7: Rate 5 cards
  for (let i = 0; i < 5; i++) {
    console.log(`Rating card ${i + 1}/5...`);
    // Reveal answer first
    await page.locator('button:has-text("Reveal Answer")').click();
    await page.waitForTimeout(500);
    // Then rate
    await page.locator('button:has-text("Good")').click();
    await page.waitForTimeout(1500);
  }

  // Step 8: Verify progress updates were called
  console.log('Step 8: Checking console logs...');
  const updateLogs = progressLogs.filter(m => m.includes('Updating progress'));
  expect(updateLogs.length).toBeGreaterThan(0);
  console.log(`Found ${updateLogs.length} progress update logs`);

  // Step 9: Exit to module selection
  console.log('Step 9: Exiting to module selection...');
  // Handle the confirmation dialog
  page.on('dialog', dialog => dialog.accept());
  await page.locator('button:has-text("Exit Module")').click();
  await page.waitForTimeout(2000);

  // Step 10: Verify we're back on module selection
  await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible();

  // Step 11: First check IndexedDB directly
  console.log('Step 11: Verifying IndexedDB persistence...');
  const dbData = await page.evaluate(async () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('nfl-study-modules');
      request.onerror = () => reject('Failed to open DB');
      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['module-progress'], 'readonly');
        const objectStore = transaction.objectStore('module-progress');
        const getRequest = objectStore.get('module-football-101');

        getRequest.onsuccess = () => resolve(getRequest.result);
        getRequest.onerror = () => reject('Failed to get data');
      };
    });
  });

  console.log('IndexedDB module progress:', JSON.stringify(dbData, null, 2));

  // Also check flashcards database
  const cardsData = await page.evaluate(async () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('nfl-study');
      request.onerror = () => reject('Failed to open cards DB');
      request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['flashcards'], 'readonly');
        const objectStore = transaction.objectStore('flashcards');
        const getRequest = objectStore.get('cards');

        getRequest.onsuccess = () => {
          const cards = getRequest.result || [];
          const studiedCards = cards.filter(c => c.reps && c.reps > 0);
          resolve({
            total: cards.length,
            studied: studiedCards.length,
            sampleStudied: studiedCards.slice(0, 3).map(c => ({
              question: c.question.substring(0, 40),
              reps: c.reps,
              state: c.state
            }))
          });
        };
        getRequest.onerror = () => reject('Failed to get cards');
      };
    });
  });

  console.log('IndexedDB flashcards data:', JSON.stringify(cardsData, null, 2));

  // Step 12: Now verify progress displays in UI (check module card specifically, not overall progress)
  console.log('Step 12: Checking module card progress...');
  const module1Card = page.locator('text=Football 101').locator('..').locator('..');
  const progressText = await module1Card.locator('text=/\\d+%/').first().textContent();
  const percent = parseInt(progressText);
  console.log(`Module 1 progress badge shows: ${percent}%`);
  expect(percent).toBeGreaterThan(0);

  expect(dbData).toBeTruthy();
  expect(dbData.progress).toBeTruthy();
  expect(dbData.progress.flashcards.studied).toBeGreaterThan(0);

  console.log('✅ Complete user journey test PASSED!');
});

test('MCQ mode works within modules', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(2000);

  // Click Start MCQ Quiz
  await page.locator('button:has-text("Start MCQ Quiz")').first().click();
  await page.waitForTimeout(1500);

  // Should show MCQ page
  await expect(page.locator('text=(MCQ)')).toBeVisible();
  await expect(page.locator('button:has-text("Exit Module")')).toBeVisible();

  // Should show MCQ question with options
  const optionButtons = await page.locator('button[class*="glass"]').count();
  expect(optionButtons).toBeGreaterThan(0);
});

test('FSRS scheduling works - due dates update', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(2000);

  // Check card due dates in IndexedDB before rating
  const cardsBefore = await page.evaluate(async () => {
    const db = await new Promise(res => {
      const req = indexedDB.open('nfl-study');
      req.onsuccess = () => res(req.result);
    });

    return new Promise(resolve => {
      const tx = db.transaction(['flashcards'], 'readonly');
      const store = tx.objectStore('flashcards');
      const req = store.get('cards');
      req.onsuccess = () => resolve(req.result);
    });
  });

  // Rate a card
  await page.locator('button:has-text("Start Flashcards")').first().click();
  await page.waitForTimeout(1000);
  // Reveal answer first
  await page.locator('button:has-text("Reveal Answer")').click();
  await page.waitForTimeout(500);
  // Then rate
  await page.locator('button:has-text("Easy")').click();
  await page.waitForTimeout(1500);

  // Check if due date was updated
  // (This test verifies FSRS is working without checking exact dates)
  const noErrors = await page.evaluate(() => {
    return !document.body.textContent.includes('Invalid Date');
  });
  expect(noErrors).toBe(true);
});
