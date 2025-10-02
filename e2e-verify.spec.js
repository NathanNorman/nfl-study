import { test, expect } from '@playwright/test';

test.describe('NFL Study App - Complete Verification', () => {
  test('Flashcard Mode - Load and verify content', async ({ page }) => {
    const consoleLogs = [];
    page.on('console', msg => {
      const text = msg.text();
      consoleLogs.push(text);
      console.log('BROWSER:', text);
    });

    // Navigate to app
    await page.goto('http://localhost:8080');

    // Wait for app to load
    await page.waitForSelector('#root', { timeout: 10000 });
    await page.waitForTimeout(3000); // Give time for data to load

    // Take screenshot
    await page.screenshot({ path: '/tmp/nfl-study-home.png', fullPage: true });

    // Check for console logs about card generation
    const generationLogs = consoleLogs.filter(log => log.includes('Generated') || log.includes('Difficulty breakdown'));
    console.log('\n=== GENERATION LOGS ===');
    generationLogs.forEach(log => console.log(log));

    // Verify stats cards are visible
    const totalCards = await page.locator('text=Total Cards').locator('..').locator('.text-5xl').textContent();
    const dueCards = await page.locator('text=Due Today').locator('..').locator('.text-5xl').textContent();

    console.log('\n=== STATS VERIFICATION ===');
    console.log('Total Cards:', totalCards);
    console.log('Due Today:', dueCards);

    // Verify it's not zero
    expect(parseInt(totalCards)).toBeGreaterThan(200);
    expect(parseInt(dueCards)).toBeGreaterThan(200);

    // Check if Start Studying button exists
    const studyButton = page.locator('button:has-text("Start Studying")');
    await expect(studyButton).toBeVisible();

    // Click Start Studying
    await studyButton.click();
    await page.waitForTimeout(1000);

    // Verify flashcard appeared
    await expect(page.locator('text=Question')).toBeVisible();

    // Check for difficulty badge (look for emoji indicators)
    const hasDifficultyBadge = await page.locator('text=/🌱|⚡|🔥/').count() > 0;
    const badgeText = await page.locator('text=/🌱|⚡|🔥/').first().textContent().catch(() => 'not found');
    console.log('\n=== DIFFICULTY BADGE ===');
    console.log('Difficulty badge present:', hasDifficultyBadge);
    console.log('Badge text:', badgeText);
    expect(hasDifficultyBadge).toBe(true);

    // Take screenshot of flashcard
    await page.screenshot({ path: '/tmp/nfl-study-flashcard.png', fullPage: true });

    // Click Reveal Answer
    await page.locator('button:has-text("Reveal Answer")').click();
    await page.waitForTimeout(500);

    // Verify answer is shown
    await expect(page.locator('text=Answer')).toBeVisible();

    // Verify rating buttons appeared
    await expect(page.locator('button:has-text("Again")')).toBeVisible();
    await expect(page.locator('button:has-text("Good")')).toBeVisible();

    // Take screenshot of revealed answer
    await page.screenshot({ path: '/tmp/nfl-study-answer.png', fullPage: true });

    // Click Good rating
    await page.locator('button:has-text("Good")').click();

    // Wait for next card to load (card ID change triggers useEffect)
    await page.waitForTimeout(2000);

    // Verify next card loaded (answer should be hidden again)
    // Check if "Reveal Answer" button is visible (means answer is hidden)
    const revealButtonVisible = await page.locator('button:has-text("Reveal Answer")').isVisible();
    console.log('\n=== CARD RESET TEST ===');
    console.log('Reveal Answer button visible (answer hidden):', revealButtonVisible);
    expect(revealButtonVisible).toBe(true);

    console.log('\n✅ FLASHCARD MODE: ALL TESTS PASSED');
  });

  test('MCQ Mode - Load and verify', async ({ page }) => {
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push(msg.text());
      console.log('BROWSER:', msg.text());
    });

    // Navigate to MCQ mode
    await page.goto('http://localhost:8080/mcq.html');

    // Wait for app to load
    await page.waitForSelector('#root', { timeout: 10000 });
    await page.waitForTimeout(3000);

    // Check console for MCQ generation
    const mcqLogs = consoleLogs.filter(log => log.includes('MCQ'));
    console.log('\n=== MCQ GENERATION LOGS ===');
    mcqLogs.forEach(log => console.log(log));

    // Take screenshot
    await page.screenshot({ path: '/tmp/nfl-study-mcq-home.png', fullPage: true });

    // Verify stats
    const totalCards = await page.locator('text=Total Cards').locator('..').locator('.text-5xl').textContent();
    console.log('\n=== MCQ STATS ===');
    console.log('Total MCQ Cards:', totalCards);

    // Start quiz
    const quizButton = page.locator('button:has-text("Start MCQ Quiz")');
    await expect(quizButton).toBeVisible();
    await quizButton.click();
    await page.waitForTimeout(1000);

    // Verify MCQ card with 4 options
    await expect(page.locator('span:has-text("Multiple Choice")').first()).toBeVisible();

    // Count option buttons (A, B, C, D)
    const optionCount = await page.locator('button:has(div:has-text("A")), button:has(div:has-text("B")), button:has(div:has-text("C")), button:has(div:has-text("D"))').count();
    console.log('\n=== MCQ OPTIONS ===');
    console.log('Number of options:', optionCount);
    expect(optionCount).toBe(4);

    // Take screenshot
    await page.screenshot({ path: '/tmp/nfl-study-mcq-question.png', fullPage: true });

    // Click first option
    await page.locator('button').filter({ hasText: 'A' }).first().click();
    await page.waitForTimeout(500);

    // Verify feedback appears (check for result message text)
    const feedbackVisible = await page.locator('text=Correct!,text=Not quite!').first().isVisible().catch(() => false);
    const correctFeedback = await page.locator('text=Correct!').isVisible().catch(() => false);
    const incorrectFeedback = await page.locator('text=Not quite!').isVisible().catch(() => false);

    console.log('\n=== MCQ FEEDBACK ===');
    console.log('Feedback shown:', feedbackVisible || correctFeedback || incorrectFeedback);
    console.log('Correct feedback:', correctFeedback);
    console.log('Incorrect feedback:', incorrectFeedback);
    expect(feedbackVisible || correctFeedback || incorrectFeedback).toBe(true);

    // Take screenshot of result
    await page.screenshot({ path: '/tmp/nfl-study-mcq-result.png', fullPage: true });

    console.log('\n✅ MCQ MODE: ALL TESTS PASSED');
  });

  test('Verify difficulty distribution', async ({ page }) => {
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push(msg.text());
    });

    await page.goto('http://localhost:8080');
    await page.waitForSelector('#root', { timeout: 10000 });
    await page.waitForTimeout(3000);

    // Find difficulty breakdown in console
    const difficultyLog = consoleLogs.find(log => log.includes('Difficulty breakdown'));

    console.log('\n=== DIFFICULTY DISTRIBUTION ===');
    if (difficultyLog) {
      console.log('FOUND:', difficultyLog);

      // Extract numbers
      const beginnerMatch = difficultyLog.match(/beginner[:\s]+(\d+)/i);
      const intermediateMatch = difficultyLog.match(/intermediate[:\s]+(\d+)/i);
      const advancedMatch = difficultyLog.match(/advanced[:\s]+(\d+)/i);

      if (beginnerMatch) console.log('✅ Beginner cards:', beginnerMatch[1]);
      if (intermediateMatch) console.log('✅ Intermediate cards:', intermediateMatch[1]);
      if (advancedMatch) console.log('✅ Advanced cards:', advancedMatch[1]);

      // Verify we have all three levels
      expect(beginnerMatch).toBeTruthy();
      expect(intermediateMatch).toBeTruthy();
      expect(advancedMatch).toBeTruthy();
      expect(parseInt(beginnerMatch[1])).toBeGreaterThan(50);
      expect(parseInt(intermediateMatch[1])).toBeGreaterThan(200);
      expect(parseInt(advancedMatch[1])).toBeGreaterThan(30);
    } else {
      console.log('❌ Difficulty breakdown not found in console');
      throw new Error('Difficulty breakdown not logged');
    }

    console.log('\n✅ DIFFICULTY LEVELS: VERIFIED');
  });
});
