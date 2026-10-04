import {test, expect} from "@playwright/test";

test('Verify the url after login',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.locator("#email").fill("shadaab@gmail.com");
    await page.locator("#password").fill("shadaab123");
    await page.locator("//input[@type='checkbox']").click();
    await page.locator("//button[@data-testid='login-button']").click();

   // let mainpageurl="https://app.thetestingacademy.com/playwright/multiple_element_filter?email=sss%40gmail.com&password=sss123&remember=yes#login-success";

    // await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=shadaab%40gmail.com&password=shadaab123&remember=yes#login-success");
    await expect(page).toHaveURL(/multiple_element_filter.*#login-success/);
    await page.pause();


});