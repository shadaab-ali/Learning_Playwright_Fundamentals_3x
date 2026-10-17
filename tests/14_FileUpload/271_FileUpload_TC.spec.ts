import { test, expect, Locator } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download'; // replace with target page

test.describe('FileUpload handling', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(URL, { waitUntil: 'domcontentloaded' });
   });

   test('locate FileUpload and upload', async ({ page }) => {
      // File upload
      const filePath = './tests/14_FileUpload/testdata.txt';
      console.log(filePath);
      await page.locator('#single-upload').setInputFiles([filePath]);
      await page.pause();

   });
});