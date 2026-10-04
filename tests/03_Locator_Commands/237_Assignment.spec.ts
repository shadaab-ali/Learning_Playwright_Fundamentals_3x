import {test,expect} from '@playwright/test';

test('Tc-2 verify the appointment page title',async({page})=>{
await page.goto("https://katalon-demo-cura.herokuapp.com/",{
    waitUntil: 'domcontentloaded',
    timeout: 3000,   
});

    let makeAppointmentButton=page.locator("#btn-make-appointment");
    await makeAppointmentButton.click();
   
    let userNameField = page.locator('#txt-username');

    let passwordField = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");

    // NOW Playwright finds the element and acts (auto-wait)
    await userNameField.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    let title= page.locator("h2");
    await expect(title).toHaveText("Make Appointment");

    await page.pause();
});