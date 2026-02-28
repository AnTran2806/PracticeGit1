import { chromium, test } from "@playwright/test";


test("Basic steps start with Playwright",async({page})=>{

    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://www.google.com/?hl=en")
    await page.getByLabel('Google apps').click();
    console.log("My First Test") //

})

test("My 2nd Test Script", () => {
    console.log("2nd Test Script");

})


