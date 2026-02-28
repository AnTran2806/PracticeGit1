import { test, expect } from "@playwright/test";

// Test Case 4
test("Reporter Practice 4", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

// Test Case 5
test("Reporter Practice 5", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

// Test Case 6
test("Reporter Practice 6", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});