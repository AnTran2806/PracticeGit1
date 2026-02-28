import {test} from "@playwright/test"

test("Handle Multiple Environments", async({page})=>{
    console.log(process.env.URL)
    console.log(process.env.USERNAME1)
    console.log(process.env.PASSWORD)
    // const urlVal = <string> process.env.URL
    const urlVal = process.env.URL as string
    await page.goto(urlVal)
    await page.getByTestId('username').fill(<string> process.env.USERNAME1)
    await page.getByTestId('password').fill(process.env.PASSWORD as string)
    await page.waitForTimeout(7000)
})