import { test, expect } from '@playwright/test';

test('Select Rohan.Mehta checkbox', async ({ page }) => {

    // Open the web table
    await page.goto(
        'https://app.thetestingacademy.com/playwright/webtable'
    );

    // Locate the checkbox in the row containing Rohan.Mehta
    const checkbox = page.locator(
        "//input[contains(@aria-label,'Select Rohan.Mehta')]"
    );

    // Click the checkbox
    await checkbox.click();

    // Verify that checkbox is selected
    await expect(checkbox).toBeChecked();

    console.log('Rohan.Mehta checkbox selected');

    await page.pause();
});