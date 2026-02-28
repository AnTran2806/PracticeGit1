// ReadDataFromExternalJsonFile.spec.ts
import { test, expect } from '@playwright/test';
import dataArray from "../testdata/testdata1.json";
import logindata from "../testdata/logindata.json"

test.beforeEach(async ({ page }) => {
    // Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.username);
    await page.getByPlaceholder('Password').fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Verify timesheet card navigation on Dashboard page', async ({ page, context }) => {
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
});

dataArray.forEach((data) => {
    test(`Add Candidate for Recruitment ${data.fname}`, async ({ page }) => {
        await page.getByRole('link', { name: 'Recruitment' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await expect(page.locator('#app')).toContainText('Add Candidate');
        await page.getByPlaceholder('First Name').fill(data.fname);
        await page.getByPlaceholder('Last Name').fill(data.fname);
        await page.getByPlaceholder('Middle Name').fill(data.mname);
        await page.getByPlaceholder('Type here').first().fill(data.email);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByText('Application Stage')).toBeVisible({ timeout: 10000 });
    })
})


// for (const data of dataArray) {
//     test(`Add Candidate for Recruitment ${data.fname}`, async ({ page }) => {
//         await page.getByRole('link', { name: 'Recruitment' }).click();
//         await page.getByRole('button', { name: ' Add' }).click();
//         await expect(page.locator('#app')).toContainText('Add Candidate');
//         await page.getByPlaceholder('First Name').fill(data.fname);
//         await page.getByPlaceholder('Last Name').fill(data.fname);
//         await page.getByPlaceholder('Middle Name').fill(data.mname);
//         await page.getByPlaceholder('Type here').first().fill(data.email);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await expect(page.getByText('Application Stage')).toBeVisible({ timeout: 7000 });
//     })
// }