import { test } from '@playwright/test'

test("Practice Different Type of click operations", async({page})=>{
    // await page.goto("http://the-internet.herokuapp.com/add_remove_elements/");
    // await page.getByRole('button', { name: 'Add Element' }).dblclick();

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    // await page.getByText('right click me', {exact: true}).click({button:'right'});
    await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({button:'right'});
})