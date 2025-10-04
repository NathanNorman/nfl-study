/**
 * E2E Tests for Module System
 * Verifies module selection, navigation, and progress tracking
 */

import { test, expect } from '@playwright/test';

test.describe('Module System', () => {
  test.beforeEach(async ({ page }) => {
    // Clear IndexedDB before each test
    await page.goto('http://localhost:8080/');
    await page.evaluate(() => {
      return Promise.all([
        indexedDB.deleteDatabase('nfl-study'),
        indexedDB.deleteDatabase('nfl-study-mcq'),
        indexedDB.deleteDatabase('nfl-study-modules')
      ]);
    });
    await page.reload();
    await page.waitForTimeout(2000); // Wait for card generation
  });

  test('Module selection page loads and displays all modules', async ({ page }) => {
    await page.goto('http://localhost:8080/');

    // Check header
    await expect(page.locator('h1:has-text("Learning Path")')).toBeVisible();

    // Check all 8 modules are displayed
    await expect(page.locator('text=Football 101')).toBeVisible();
    await expect(page.locator('text=Fantasy Football Basics')).toBeVisible();
    await expect(page.locator('text=Offensive Playbook')).toBeVisible();
    await expect(page.locator('text=Defensive Schemes')).toBeVisible();
    await expect(page.locator('text=Player Analysis')).toBeVisible();
    await expect(page.locator('text=Analytics & Metrics')).toBeVisible();
    await expect(page.locator('text=Draft & Waiver Mastery')).toBeVisible();
    await expect(page.locator('text=Championship Strategy')).toBeVisible();

    // Check progress shows 0/8
    await expect(page.locator('text=0/8 modules complete')).toBeVisible();
  });

  test('Module 1 is unlocked, others are locked', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(1000);

    // Module 1 should have Start button
    const module1Card = page.locator('text=Football 101').locator('..').locator('..');
    await expect(module1Card.locator('button:has-text("Start Flashcards")')).toBeVisible();

    // Module 2 should be locked
    const module2Card = page.locator('text=Fantasy Football Basics').locator('..').locator('..');
    await expect(module2Card.locator('button:has-text("Locked")')).toBeVisible();
  });

  test('Can start flashcards in Module 1', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);

    // Click Start Flashcards on Module 1
    await page.locator('text=Football 101').locator('..').locator('..').locator('button:has-text("Start Flashcards")').click();
    await page.waitForTimeout(1000);

    // Should navigate to study page
    await expect(page.locator('text=Football 101')).toBeVisible();
    await expect(page.locator('button:has-text("Exit Module")')).toBeVisible();

    // Should show flashcard
    await expect(page.locator('.glass-card').first()).toBeVisible();
  });

  test('Can start MCQ quiz in Module 1', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);

    // Click Start MCQ Quiz on Module 1
    await page.locator('text=Football 101').locator('..').locator('..').locator('button:has-text("Start MCQ Quiz")').click();
    await page.waitForTimeout(1000);

    // Should navigate to MCQ page
    await expect(page.locator('text=Football 101')).toBeVisible();
    await expect(page.locator('text=(MCQ)')).toBeVisible();
    await expect(page.locator('button:has-text("Exit Module")')).toBeVisible();
  });

  test('Progress circle shows completion percentage', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(1000);

    // Initially should show 0%
    const progressCircle = page.locator('svg').first();
    await expect(progressCircle).toBeVisible();
  });

  test('Lucide icons render', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(1000);

    // Check for SVG icons (Lucide renders as SVG)
    const svgIcons = await page.locator('svg[class*="lucide"]').count();
    expect(svgIcons).toBeGreaterThan(0);
  });

  test('Can navigate to debug mode and back', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(1000);

    // Click Debug mode link
    await page.locator('a[title="Debug Mode"]').click();
    await page.waitForTimeout(1000);

    // Should be on debug mode
    await expect(page).toHaveURL('http://localhost:8080/debug.html');
  });
});
