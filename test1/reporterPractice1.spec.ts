import { test, expect } from "@playwright/test";

// Test Case 1
test("Reporter Practice 1", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

// Test Case 2
test("Reporter Practice 2", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

// Test Case 3
test("Reporter Practice 3", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});