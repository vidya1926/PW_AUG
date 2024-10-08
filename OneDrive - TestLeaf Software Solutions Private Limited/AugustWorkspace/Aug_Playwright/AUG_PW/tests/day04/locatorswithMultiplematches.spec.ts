import test, { chromium } from "@playwright/test";

test('Learn Basic Locators', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //talk to the element to do specific actions
    //type ,click,clear  ->respect to the webelement
    //pw understand the element based on definition/design/position of it
    //enter data into the username text field
    const textField = page.locator(".inputLogin")
    await textField.first().fill("demosalesManager")
    await textField.nth(1).fill("demosalesManager")
    //attribute based relative xapth
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(3000)
    
})