import { test as baseTest } from "@playwright/test"

type MyHooksFixtures = {
    loginlogutfixture: any;
}


export const test = baseTest.extend<MyHooksFixtures>({
    loginlogutfixture: async ({ page }, use) => {
        const loginlogutfixture = undefined;
        // Login
        await page.goto("https://www.saucedemo.com/");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();

        await use(loginlogutfixture);

        // Logout
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    }
})

export {expect} from "@playwright/test"