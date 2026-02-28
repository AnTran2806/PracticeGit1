import { test } from "@playwright/test";

test("Handle Iframe with Name", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const w3Frame = page.frame("iframeResult");
    await w3Frame.locator('#fname').fill("Test code Automate");

});

test("Handle Iframe with URL", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const w3Frame2 = page.frame({url:"https://www.w3schools.com/html/default.asp"});
    await w3Frame2.getByLabel('Button to open search field').click();
    await w3Frame2.getByPlaceholder('Search...').fill("Test Code Automate");
});

test("Handle Iframe with frameLocator Method", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const w3Frame3 = page.frameLocator("[title='W3Schools HTML Tutorial']");
    await w3Frame3.getByLabel('Button to open search field').click();
    await w3Frame3.getByPlaceholder('Search...').fill("Test Code Automate");

    // await page.frameLocator('iframe[title="W3Schools HTML Tutorial"]').getByLabel('Button to open search field').click();
    // const loginButton = page.frameLocator('iframe[title="W3Schools HTML Tutorial"]').getByLabel('Sign in to your account');
    // loginButton.click();

});
