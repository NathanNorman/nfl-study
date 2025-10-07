/**
 * MODULE PROGRESS TESTS
 * Prevent regressions in module completion tracking
 */

import { test, expect } from '@playwright/test';

test.describe('Module Progress Tracking', () => {
  test.beforeEach(async ({ page }) => {
    // Clear IndexedDB before each test
    await page.goto('http://localhost:8080/');
    await page.evaluate(() => {
      return new Promise((resolve) => {
        const deleteDb1 = indexedDB.deleteDatabase('nfl-study');
        const deleteDb2 = indexedDB.deleteDatabase('nfl-study-modules');
        Promise.all([
          new Promise(r => { deleteDb1.onsuccess = () => r(); deleteDb1.onerror = () => r(); }),
          new Promise(r => { deleteDb2.onsuccess = () => r(); deleteDb2.onerror = () => r(); })
        ]).then(resolve);
      });
    });
    await page.reload();
    await page.waitForLoadState('networkidle');
  });

  test('module completion counts BOTH flashcards AND MCQs', async ({ page }) => {
    // Navigate to modules page
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    // Find Football 101 module card
    const moduleCard = page.locator('[data-module-id="module-football-101"]');
    await expect(moduleCard).toBeVisible();

    // Initially should show 0% or "Not Started"
    const initialProgress = await moduleCard.locator('text=/\\d+%|Not Started/').first().textContent();
    console.log('Initial progress:', initialProgress);

    // Click "Practice MCQs" button
    const mcqButton = moduleCard.locator('button:has-text("Practice MCQs")');
    await mcqButton.click();

    // Answer 5 MCQs
    for (let i = 0; i < 5; i++) {
      await page.waitForSelector('text=/Question \\d+ of \\d+/', { timeout: 5000 });

      // Click first option (we don't care if correct/incorrect for this test)
      const optionA = page.locator('button:has-text("A")').first();
      await optionA.click();

      // Wait for auto-advance
      await page.waitForTimeout(1500);
    }

    // Exit module
    await page.click('button:has-text("Exit Module")');
    await page.waitForLoadState('networkidle');

    // Module should now show progress > 0% (since we answered 5/14 MCQs)
    const updatedProgress = await moduleCard.locator('text=/\\d+%/').first().textContent();
    const progressPercent = parseInt(updatedProgress.match(/(\d+)%/)?.[1] || '0');

    console.log('Progress after 5 MCQs:', progressPercent + '%');

    // With 5 MCQs answered out of ~56 total cards (41 flashcards + 14 MCQs)
    // Expected: roughly 9% (5/56)
    expect(progressPercent).toBeGreaterThan(0);
    expect(progressPercent).toBeLessThan(20); // Should be around 5-10%
  });

  test('MCQ page shows only due/unanswered questions', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    const moduleCard = page.locator('[data-module-id="module-football-101"]');
    const mcqButton = moduleCard.locator('button:has-text("Practice MCQs")');
    await mcqButton.click();

    // Check initial count
    const initialCount = await page.locator('text=/Question 1 of (\\d+)/')
      .first()
      .textContent();
    const totalMCQs = parseInt(initialCount?.match(/of (\d+)/)?.[1] || '0');

    console.log('Initial MCQ count:', totalMCQs);
    expect(totalMCQs).toBeGreaterThan(10); // Should have ~14 MCQs

    // Answer 3 questions
    for (let i = 0; i < 3; i++) {
      const optionA = page.locator('button:has-text("A")').first();
      await optionA.click();
      await page.waitForTimeout(1500);
    }

    // Exit and re-enter
    await page.click('button:has-text("Exit Module")');
    await page.waitForLoadState('networkidle');

    await mcqButton.click();
    await page.waitForTimeout(1000);

    // Should now show fewer MCQs (answered ones filtered out)
    const secondCount = await page.locator('text=/Question 1 of (\\d+)/')
      .first()
      .textContent();
    const remainingMCQs = parseInt(secondCount?.match(/of (\d+)/)?.[1] || '0');

    console.log('Remaining MCQs:', remainingMCQs);

    // Should have 3 fewer MCQs than before
    expect(remainingMCQs).toBeLessThan(totalMCQs);
    expect(remainingMCQs).toEqual(totalMCQs - 3);
  });

  test('MCQ list does not shrink during study session', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    const moduleCard = page.locator('[data-module-id="module-football-101"]');
    const mcqButton = moduleCard.locator('button:has-text("Practice MCQs")');
    await mcqButton.click();

    // Get initial total
    const initialText = await page.locator('text=/Question 1 of (\\d+)/')
      .first()
      .textContent();
    const initialTotal = parseInt(initialText?.match(/of (\d+)/)?.[1] || '0');

    // Answer 5 questions and check total stays same
    for (let i = 0; i < 5; i++) {
      const currentText = await page.locator('text=/Question (\\d+) of (\\d+)/')
        .first()
        .textContent();
      const [_, current, total] = currentText?.match(/Question (\d+) of (\d+)/) || [];

      console.log(`After answering ${i} questions: Question ${current} of ${total}`);

      // Total should remain constant during session
      expect(parseInt(total || '0')).toEqual(initialTotal);

      // Current question should increment properly (no jumping)
      expect(parseInt(current || '0')).toEqual(i + 1);

      // Answer the question
      const optionA = page.locator('button:has-text("A")').first();
      await optionA.click();
      await page.waitForTimeout(1500);
    }

    // After answering 5, should be on question 6 of original total
    const finalText = await page.locator('text=/Question (\\d+) of (\\d+)/')
      .first()
      .textContent();
    const [_, finalCurrent, finalTotal] = finalText?.match(/Question (\d+) of (\d+)/) || [];

    expect(parseInt(finalCurrent || '0')).toEqual(6);
    expect(parseInt(finalTotal || '0')).toEqual(initialTotal);
  });

  test('no duplicate MCQs exist in data', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    // Get all MCQ data from the app
    const duplicateCheck = await page.evaluate(() => {
      return new Promise((resolve) => {
        // Access IndexedDB to get all MCQs
        const request = indexedDB.open('nfl-study');
        request.onsuccess = () => {
          const db = request.result;
          const transaction = db.transaction(['localforage'], 'readonly');
          const store = transaction.objectStore('localforage');
          const getRequest = store.get('mcq-cards');

          getRequest.onsuccess = () => {
            const mcqs = getRequest.result || [];

            // Check for duplicate questions
            const questionCounts = new Map();
            mcqs.forEach(card => {
              const count = questionCounts.get(card.question) || 0;
              questionCounts.set(card.question, count + 1);
            });

            const duplicates = Array.from(questionCounts.entries())
              .filter(([_, count]) => count > 1)
              .map(([question, count]) => ({ question, count }));

            resolve({
              totalMCQs: mcqs.length,
              duplicates: duplicates
            });
          };
        };
      });
    });

    console.log('MCQ duplicate check:', duplicateCheck);

    // Should have no duplicates
    expect(duplicateCheck.duplicates).toHaveLength(0);
  });

  test('module shows accurate progress with mixed study (flashcards + MCQs)', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    const moduleCard = page.locator('[data-module-id="module-football-101"]');

    // Answer 3 flashcards
    const flashcardButton = moduleCard.locator('button:has-text("Practice Flashcards")');
    await flashcardButton.click();

    for (let i = 0; i < 3; i++) {
      await page.waitForSelector('text=/Question/', { timeout: 5000 });
      // Show answer and rate
      await page.click('button:has-text("Show Answer")');
      await page.waitForTimeout(500);
      await page.click('button:has-text("Good")');
      await page.waitForTimeout(500);
    }

    await page.click('button:has-text("Exit")');
    await page.waitForLoadState('networkidle');

    // Check progress after flashcards
    let progressText = await moduleCard.locator('text=/\\d+%/').first().textContent();
    const progressAfterFlashcards = parseInt(progressText?.match(/(\d+)%/)?.[1] || '0');
    console.log('Progress after 3 flashcards:', progressAfterFlashcards + '%');

    // Answer 3 MCQs
    const mcqButton = moduleCard.locator('button:has-text("Practice MCQs")');
    await mcqButton.click();

    for (let i = 0; i < 3; i++) {
      await page.waitForTimeout(500);
      const optionA = page.locator('button:has-text("A")').first();
      await optionA.click();
      await page.waitForTimeout(1500);
    }

    await page.click('button:has-text("Exit Module")');
    await page.waitForLoadState('networkidle');

    // Check final progress
    progressText = await moduleCard.locator('text=/\\d+%/').first().textContent();
    const finalProgress = parseInt(progressText?.match(/(\d+)%/)?.[1] || '0');
    console.log('Progress after 3 flashcards + 3 MCQs:', finalProgress + '%');

    // Final should be higher than after just flashcards
    expect(finalProgress).toBeGreaterThan(progressAfterFlashcards);

    // With 6 cards studied out of ~56 total, should be around 10%
    expect(finalProgress).toBeGreaterThan(5);
    expect(finalProgress).toBeLessThan(20);
  });
});
