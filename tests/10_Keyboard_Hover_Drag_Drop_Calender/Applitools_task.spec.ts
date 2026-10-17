import { test, expect } from '@playwright/test';

test('Verify Total Spend on Applitools', async ({ page }) => {

    await page.goto("https://demo.applitools.com/");
    await page.locator("//input[contains(@id,'username')]").fill("Admin");
    await page.locator("//input[contains(@id,'password')]").fill("Password@123");
    await page.locator("//a[contains(@id,'log-in')]").click();
    await expect(page).toHaveURL(/app\.html/);
    let amounts = await page
    .locator("//td[contains(@class,'text-right')]")
    .allInnerTexts();
let total = 0;
for (let amount of amounts) {
    let value = Number(
        amount.replace(/[^0-9.-]/g, '')
    );
    console.log(amount, "=>", value);
    total += value;
}
console.log('Total amount:', total);
expect(total).toBe(1996.22);

    await page.pause();
});