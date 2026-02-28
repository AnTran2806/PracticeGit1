import {test} from "@playwright/test"

test("Practice File Upload", async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    // await page.locator("#filesToUpload").setInputFiles("to-upload/file1.txt")
    await page.locator("#filesToUpload").setInputFiles(["to-upload/file1.txt","to-upload/file2.xlsx","to-upload/file3.docx"])
    await page.locator("#filesToUpload").setInputFiles([]);
})

test("Practice File Upload 2", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    const fileChosserPromise = page.waitForEvent("filechooser");
    await page.locator("#drag-drop-upload").click()
    const filechooserResovled = await fileChosserPromise;
    await filechooserResovled.setFiles(["to-upload/file1.txt", "to-upload/file2.xlsx", "to-upload/file3.docx"]);
})