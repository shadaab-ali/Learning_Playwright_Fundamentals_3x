import { test, expect, Locator } from '@playwright/test';

test('Verify Hover on Add-On', async ({ page }) => {
 await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

 await page.getByTestId("nav-add-ons").hover();
 await page.getByTestId("test-id-Wifi").click();

 
 await page.pause();

    });