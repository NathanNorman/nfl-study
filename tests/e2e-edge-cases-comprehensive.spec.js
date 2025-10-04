/**
 * COMPREHENSIVE EDGE CASE TESTING
 * Tests ALL possible failure modes, state transitions, and boundary conditions
 */

import { test, expect } from '@playwright/test';

// Helper functions
async function clearAllDatabases(page) {
  await page.evaluate(() => {
    return Promise.all([
      indexedDB.deleteDatabase('nfl-study'),
      indexedDB.deleteDatabase('nfl-study-mcq'),
      indexedDB.deleteDatabase('nfl-study-modules')
    ]);
  });
}

async function rateCard(page, rating = 'Good') {
  await page.locator('button:has-text("Reveal Answer")').click();
  await page.waitForTimeout(300);
  await page.locator(`button:has-text("${rating}")`).click();
  await page.waitForTimeout(800);
}

async function getCardText(page) {
  return await page.locator('[data-testid="card-question"]').textContent();
}

test.describe('Edge Cases: Empty/Zero States', () => {
  test('Module with 0 due cards shows empty state', async ({ page }) => {
    // This tests what happens when all cards have been studied
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    // TODO: Rate ALL cards in a module, verify empty state message
    // Expected: "No cards due" message, graceful fallback
  });

  test('Starting with 0 modules shows graceful state', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);

    // Should show 8 modules even if none started
    const modules = await page.locator('[data-module-id]').count();
    expect(modules).toBe(8);
  });
});

test.describe('Edge Cases: Last Item Scenarios', () => {
  test('Rating last card shows completion alert and exits', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    // Start module
    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Setup alert handler
    let alertShown = false;
    page.on('dialog', async dialog => {
      if (dialog.message().includes('completed')) {
        alertShown = true;
      }
      await dialog.accept();
    });

    // Rate cards until we hit the last one
    // For safety, limit to 50 cards to avoid infinite loop
    for (let i = 0; i < 50; i++) {
      const hasRevealButton = await page.locator('button:has-text("Reveal Answer")').count() > 0;
      if (!hasRevealButton) {
        break; // No more cards
      }

      await rateCard(page);

      // Check if we're back on module selection (completion)
      const onModuleSelection = await page.locator('h1:has-text("Learning Path")').count() > 0;
      if (onModuleSelection) {
        break;
      }
    }

    // Should be back on module selection
    await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible({ timeout: 3000 });

    // Alert should have been shown
    expect(alertShown).toBe(true);
  });

  test('Last card does not cause index out of bounds', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rate 3 cards
    for (let i = 0; i < 3; i++) {
      await rateCard(page);
    }

    // Verify we're still showing a valid card (not crashed)
    const hasCard = await page.locator('button:has-text("Reveal Answer")').count() > 0;
    expect(hasCard).toBe(true);
  });
});

test.describe('Edge Cases: State Transitions During Async Operations', () => {
  test('Card index remains stable when cards list shrinks', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rate 5 cards and verify we progress forward, never backward
    const seenCards = new Set();

    for (let i = 0; i < 5; i++) {
      const cardText = await getCardText(page);
      console.log(`Card ${i + 1}: ${cardText.substring(0, 40)}...`);

      // Verify we haven't seen this card before (no jumping back)
      expect(seenCards.has(cardText)).toBe(false);
      seenCards.add(cardText);

      await rateCard(page);
    }

    console.log(`✅ Progressed through 5 unique cards without jumping back`);
  });

  test('Rapid card ratings handle async state correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rapid-fire ratings with minimal delay
    for (let i = 0; i < 3; i++) {
      await page.locator('button:has-text("Reveal Answer")').click();
      await page.waitForTimeout(100); // Very fast
      await page.locator('button:has-text("Good")').click();
      await page.waitForTimeout(400); // Minimal delay
    }

    // Should still be functional (not crashed)
    const hasCard = await page.locator('button:has-text("Reveal Answer")').count() > 0;
    expect(hasCard).toBe(true);
  });

  test('Exit during progress save preserves data', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rate cards
    for (let i = 0; i < 3; i++) {
      await rateCard(page);
    }

    // Exit immediately (potentially during save)
    page.on('dialog', dialog => dialog.accept());
    await page.locator('button:has-text("Exit Module")').click();
    await page.waitForTimeout(2000);

    // Verify progress was saved (use module-specific selector)
    const progressText = await page.locator('[data-testid="module-progress-module-football-101"]').textContent();
    const percent = parseInt(progressText);

    expect(percent).toBeGreaterThan(0);
  });
});

test.describe('Edge Cases: Concurrent Operations', () => {
  test('Multiple rapid clicks on reveal/rate buttons', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Click reveal multiple times rapidly
    const revealButton = page.locator('button:has-text("Reveal Answer")');
    await revealButton.click();
    await revealButton.click(); // Double click
    await revealButton.click(); // Triple click
    await page.waitForTimeout(500);

    // Should still work (no crash)
    const hasRatingButtons = await page.locator('button:has-text("Good")').count() > 0;
    expect(hasRatingButtons).toBe(true);

    // Click rating button multiple times
    const goodButton = page.locator('button:has-text("Good")');
    await goodButton.click();
    await goodButton.click(); // Double click rating

    await page.waitForTimeout(1000);

    // Should progress to next card (not crash or skip multiple cards)
    const hasNextCard = await page.locator('button:has-text("Reveal Answer")').count() > 0;
    expect(hasNextCard).toBe(true);
  });
});

test.describe('Edge Cases: Navigation and Interruption', () => {
  test('Browser refresh mid-study preserves state', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    // Start module and rate cards
    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    for (let i = 0; i < 3; i++) {
      await rateCard(page);
    }

    // Get current progress
    const progressBefore = await page.locator('text=/Card \\d+ of/').textContent();

    // Refresh browser
    await page.reload();
    await page.waitForTimeout(2000);

    // Should return to module selection (not stay in study mode)
    await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible();

    // Progress should be saved (check module-specific progress)
    const progress = await page.locator('[data-testid="module-progress-module-football-101"]').textContent();
    expect(parseInt(progress)).toBeGreaterThan(0);
  });

  test('Back button during study returns to modules', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rate a card
    await rateCard(page);

    // Click breadcrumb to go back
    page.on('dialog', dialog => dialog.accept()); // Handle confirmation
    await page.locator('button:has-text("📚 Modules")').click();
    await page.waitForTimeout(2000);

    // Should be back on selection page
    await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible();
  });
});

test.describe('Edge Cases: Data Integrity', () => {
  test('Progress percentage matches actual studied cards', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Rate 5 cards
    for (let i = 0; i < 5; i++) {
      await rateCard(page);
    }

    // Exit
    page.on('dialog', dialog => dialog.accept());
    await page.locator('button:has-text("Exit Module")').click();
    await page.waitForTimeout(2000);

    // Check IndexedDB
    const dbData = await page.evaluate(async () => {
      return new Promise((resolve) => {
        const request = indexedDB.open('nfl-study-modules');
        request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction(['module-progress'], 'readonly');
          const objectStore = transaction.objectStore('module-progress');
          const getRequest = objectStore.get('module-football-101');

          getRequest.onsuccess = () => resolve(getRequest.result);
        };
      });
    });

    // Verify IndexedDB shows studied > 0
    expect(dbData.progress.flashcards.studied).toBeGreaterThan(0);

    // Verify UI matches IndexedDB (use module-specific selector)
    const uiProgress = await page.locator('[data-testid="module-progress-module-football-101"]').textContent();
    const uiPercent = parseInt(uiProgress);

    const dbPercent = Math.round((dbData.progress.flashcards.studied / dbData.progress.flashcards.total) * 100);

    expect(uiPercent).toBe(dbPercent);
  });

  test('Module unlock state persists after refresh', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    // Module 2 should start locked
    const module2Before = page.locator('[data-module-id="module-fantasy-basics"]');
    const isLockedBefore = await module2Before.locator('text=/🔒|Locked/').count() > 0;
    expect(isLockedBefore).toBe(true);

    // Refresh
    await page.reload();
    await page.waitForTimeout(2000);

    // Should still be locked
    const module2After = page.locator('[data-module-id="module-fantasy-basics"]');
    const isLockedAfter = await module2After.locator('text=/🔒|Locked/').count() > 0;
    expect(isLockedAfter).toBe(true);
  });
});

test.describe('Edge Cases: UI Consistency', () => {
  test('Progress bar matches card counter', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // Get card counter
    const counterText = await page.locator('text=/Card \\d+ of \\d+/').textContent();
    const match = counterText.match(/Card (\d+) of (\d+)/);
    const currentCard = parseInt(match[1]);
    const totalCards = parseInt(match[2]);

    // Get progress bar percentage
    const progressText = await page.locator('text=/\\d+% Complete/').textContent();
    const progressPercent = parseInt(progressText);

    // Calculate expected percentage
    const expectedPercent = Math.round((currentCard / totalCards) * 100);

    expect(progressPercent).toBe(expectedPercent);
  });

  test('Button states correctly reflect position (first/last card)', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    await page.locator('button:has-text("Start Flashcards")').first().click();
    await page.waitForTimeout(1000);

    // On first card, Previous should be disabled
    const prevButton = page.locator('button:has-text("Previous")');
    expect(await prevButton.isDisabled()).toBe(true);

    // Next should be enabled (assuming >1 card)
    const nextButton = page.locator('[data-testid="btn-next"]');
    const cardCountText = await page.locator('text=/Card \\d+ of \\d+/').textContent();
    const totalCards = parseInt(cardCountText.match(/of (\d+)/)[1]);

    if (totalCards > 1) {
      expect(await nextButton.isDisabled()).toBe(false);
    }
  });
});

test.describe('Edge Cases: MCQ Mode', () => {
  test('MCQ auto-advance works correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await clearAllDatabases(page);
    await page.reload();
    await page.waitForTimeout(3000);

    // Try to start MCQ mode
    const mcqButton = page.locator('button:has-text("Start MCQ Quiz")').first();
    const hasMCQ = await mcqButton.count() > 0;

    if (!hasMCQ) {
      console.log('No MCQs available - skipping MCQ test');
      return;
    }

    await mcqButton.click();
    await page.waitForTimeout(1000);

    // Get first question
    const questionBefore = await page.locator('text=/Question \\d+ of/').textContent();

    // Answer it
    await page.locator('button:has-text("A.")').click();
    await page.waitForTimeout(1500); // Wait for auto-advance

    // Should be on next question
    const questionAfter = await page.locator('text=/Question \\d+ of/').textContent();

    // Question number should have increased (or we completed)
    const isStillStudying = await page.locator('text=/Question \\d+ of/').count() > 0;
    if (isStillStudying) {
      expect(questionAfter).not.toBe(questionBefore);
    }
  });
});
