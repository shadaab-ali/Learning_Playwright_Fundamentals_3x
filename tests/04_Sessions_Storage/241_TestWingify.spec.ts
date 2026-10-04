import {test,expect} from "@playwright/test";

test.use(
    {
        storageState:'./user-session.json'
    }
);

test('go to dashboard- no login1',async({page})=>{
    await page.goto("https://app.wingify.com/#/dashboard");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded");
    await page.waitForTimeout(3000);
});

test('go to dashboard- no login2',async({page})=>{
    await page.goto("https://app.wingify.com/#/dashboard");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded");
    await page.waitForTimeout(3000);
});
test('go to dashboard- no login3',async({page})=>{
    await page.goto("https://app.wingify.com/#/dashboard");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded");
    await page.waitForTimeout(3000);
});