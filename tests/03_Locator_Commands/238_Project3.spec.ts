import {test,expect} from "@playwright/test";

test('verify the error message in the wingify trial website',async({page})=>{

    await page.goto("https://wingify.com/free-trial/");
    
    let inputBox=page.locator("#free-trial-step1-email");
    await inputBox.fill("abcd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox").click();

    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    let error_message_text=await error_message.textContent();

    expect(error_message_text).toContain("Invalid Email");

    await page.pause();

});