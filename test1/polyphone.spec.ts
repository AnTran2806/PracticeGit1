import { test, expect } from "@playwright/test"

test.use({ ignoreHTTPSErrors: true });

test.beforeEach("Access the page", async({page}) =>{
    await page.goto("https://10.188.8.155/");
    await page.locator("//*[@name='masked-input']").fill("777");
    await page.locator("text=Login").click(); 
})

// General Settings
test("Enable the Background Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Background").click();
    
    const enableBackgroundToggleSwitch = page.locator('#bg\\.background\\.enabled');
    
    let backgroundEnabled = false;
    
    await page.waitForTimeout(2000);
    if (!(await enableBackgroundToggleSwitch.isChecked())) {
        await enableBackgroundToggleSwitch.click();
        backgroundEnabled = true;
    }
    
    if (backgroundEnabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})
test("Disable the Background Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Background").click();
    
    const disableBackgroundToggleSwitch = page.locator('#bg\\.background\\.enabled');
    
    let backgroundEnabled = true;
    
    await page.waitForTimeout(2000);
    if ((await disableBackgroundToggleSwitch.isChecked())) {
        await disableBackgroundToggleSwitch.click();
        backgroundEnabled = false;
    }
    
    if (!backgroundEnabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})
test("Enable the Phone Lock Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Phone Lock").click();
    
    const enablePhoneLockToggleSwitch = page.locator('#phoneLock\\.enabled');
    
    let phoneLockDisabled = false;
    
    await page.waitForTimeout(2000);
    if (!(await enablePhoneLockToggleSwitch.isChecked())) {
        await enablePhoneLockToggleSwitch.click();
        phoneLockDisabled = true;
    }
    
    if (phoneLockDisabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})
test("Disable the Phone Lock Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Phone Lock").click();
    
    const disablePhoneLockToggleSwitch = page.locator('#phoneLock\\.enabled');
    
    let phoneLockEnabled = true;
    
    await page.waitForTimeout(2000);
    if ((await disablePhoneLockToggleSwitch.isChecked())) {
        await disablePhoneLockToggleSwitch.click();
        phoneLockEnabled = false;
    }
    
    if (!phoneLockEnabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})
test("Enable the Presence Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Presence").click();
    
    const enablePresenceToggleSwitch = page.locator('#feature\\.presence\\.enabled');
    
    let presenceDisabled = false;
    
    await page.waitForTimeout(2000);
    if (!(await enablePresenceToggleSwitch.isChecked())) {
        await enablePresenceToggleSwitch.click();
        presenceDisabled = true;
    }
    
    if (presenceDisabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})
test("Disable the Presence Feature", async ({ page }) => {
    await page.locator("text=General Settings").click();
    await page.locator("text=Presence").click();
    
    const disablePresenceToggleSwitch = page.locator('#feature\\.presence\\.enabled');
    
    let presenceEnabled = true;
    
    await page.waitForTimeout(2000);
    if ((await disablePresenceToggleSwitch.isChecked())) {
        await disablePresenceToggleSwitch.click();
        presenceEnabled = false;
    }
    
    if (!presenceEnabled) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
})

// Security 
test("Change Admin Password", async ({ page }) => {
    await page.getByRole('link', { name: 'Security' }).click();
    await page.locator("text=Passwords").click();
    await page.getByLabel('Admin').getByPlaceholder('New Password').fill("777");
    await page.waitForTimeout(1000);
    await page.getByLabel('Admin').getByPlaceholder('Confirm Password').fill("777");
    await page.waitForTimeout(1000);
    await page.getByLabel('Admin').getByRole('button', { name: 'Change Password' }).click();

})

// Diagnostic
test("Ping Test", async ({ page }) => {
    // await page.goto("https://10.188.8.155/");
    // await page.locator("//*[@name='masked-input']").fill("777");
    // await page.locator("text=Login").click();
    await page.locator("text=Diagnostics").click();
    await page.locator("text=Ping / Traceroute Test").click();
    await page.getByRole('textbox', { name: 'IP/Hostname' }).fill("www.google.com");
    await page.getByRole('button', { name: 'Run' }).click();
})
test("Traceroute Test", async ({ page }) => {
    // await page.goto("https://10.188.8.155/");
    // await page.locator("//*[@name='masked-input']").fill("777");
    // await page.locator("text=Login").click();
    await page.locator("text=Diagnostics").click();
    await page.locator("text=Ping / Traceroute Test").click();
    await page.getByRole('radio', { name: 'Traceroute' }).click();
    await page.getByRole('textbox', { name: 'IP/Hostname' }).fill("www.google.com");
    await page.getByRole('button', { name: 'Run' }).click();
})
test("Capture the screen", async ({ page }) => {
    // await page.goto("https://10.188.8.155/");
    // await page.locator("//*[@name='masked-input']").fill("777");
    // await page.locator("text=Login").click();
    await page.locator("text=Diagnostics").click();
    await page.locator("text=Screen Capture").click();

    const enableScreenCaptureCheckbox = page.locator('#up\\.screenCapture\\.enabled');

    let changed = false;

    await page.waitForTimeout(2000);
    if (!(await enableScreenCaptureCheckbox.isChecked())) {
        await enableScreenCaptureCheckbox.click();
        changed = true;
    }

    if (changed) {
        await page.locator('button:has-text("Submit")').click();
        await page.waitForTimeout(2000);
    }

    await page.locator('#perform-screen-capture-1 button:has-text("Capture")').click();
})
test("Reboot The Phone", async ({ page }) => {
    await page.locator("text=Diagnostics").click();
    await page.locator("text=Reboot System / Reset").click();
    await page.locator('button[aria-label="Reboot"]').click();
    await page.locator('button[aria-label="Yes"]').click();
})
test("Cancel System Reset", async ({ page }) => {
    await page.locator("text=Diagnostics").click();
    await page.locator("text=Reboot System / Reset").click();
    await page.locator('button[aria-label="Reset all system configurations"]').click();
    await page.locator('button[aria-label="No"]').click();
})

// Servers
test("Enable Data Collection", async({page})=>{
    await page.locator("text=Servers").click();
    await page.locator("text=Poly Lens").click();

    const enableDataCollectionToggleSwitch = page.locator('#feature\\.da\\.enabled')

    let dataCollectionEnabled = false;

    page.waitForTimeout(2000);
    if(!(await enableDataCollectionToggleSwitch.isChecked())){
        await enableDataCollectionToggleSwitch.click();
        dataCollectionEnabled = true;
    }

    if(dataCollectionEnabled){
        await page.locator('button:has-Text("Submit")').click();
    } 
})
test("Disable Data Collection", async({page})=>{
    await page.locator("text=Servers").click();
    await page.locator("text=Poly Lens").click();

    const disableDataCollectionToggleSwitch = page.locator('#feature\\.da\\.enabled');

    let dataCollectionEnabled = true
    if((await disableDataCollectionToggleSwitch.isChecked())){
        await disableDataCollectionToggleSwitch.click();
        dataCollectionEnabled = false
    }

    await page.waitForTimeout(2000);
    if(!dataCollectionEnabled){
        await page.locator('button:has-Text("Submit")').click();
    }
})