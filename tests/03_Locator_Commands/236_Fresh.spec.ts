import {test,expect} from '@playwright/test';

test('Tc-1 verify the page is loaded',async({page})=>{

await page.goto("https://app.vwo.com/#/login",{
    waitUntil: 'domcontentloaded',
    timeout: 3000,
    referer:"https://sdet.live"
});

   
    let userNameField = page.locator('#login-username');

    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    // NOW Playwright finds the element and acts (auto-wait)
    await userNameField.fill("admin@admin.com");
    await passwordField.fill("pass123");
    await loginButton.click();

    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

    await page.pause();
});