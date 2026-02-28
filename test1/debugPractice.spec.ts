import { test, expect } from "@playwright/test";

test("Title verification", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await expect(page).toHaveTitle("nopCommerce demo store. Login");
});

test("Successfull Login Verification", async ({ page, browserName }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  const url = page.url();
  await page.getByRole('textbox', { name: 'Email:' }).fill("testcodeautomate@gmail.com");
  await page.getByRole('textbox', { name: 'Password:' }).fill("testcodeautomate");
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator(".ico-logout")).toBeVisible();
  await page.locator(".ico-logout").click();
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
});
