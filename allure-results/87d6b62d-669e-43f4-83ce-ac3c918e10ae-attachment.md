# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM- add and delete admin
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//input[contains(@fdprocessedid,\'gq8d0n\')]')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('OrangeHRM- add and delete admin',async({page})=>{
  4  |   
  5  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  6  | 
  7  |     // page.locator("//input[contains(@name,'username')]").fill('admin');
  8  |     // page.locator("//input[contains(@name,'password')]").fill('admin123');
  9  |     let uname=page.locator("//input[contains(@name,'username')]");
  10 |     let pwd=page.locator("//input[contains(@name,'password')]");
  11 |     await uname.fill('admin');
  12 |     await pwd.fill('admin123');
  13 |     page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button')]").click();
  14 |  
  15 |     console.log('Admin Loggedin');
  16 | 
  17 | 
  18 |     //validate the page url
  19 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  20 | 
  21 |     //click on Admin tab
  22 |     page.locator("//span[text()='PIM']").click();
  23 | 
  24 |     //click on Add button
  25 |     page.locator("//div[contains(@class,'orangehrm-header-container')]/button[contains(@type,'button')]").first().click();
  26 |     
  27 |     //fill Username field
  28 |     let username=page.locator("//input[contains(@name,'firstName')]");
  29 |     let middlename=page.locator("//input[contains(@name,'middleName')]");
  30 |     let lastname=page.locator("//input[contains(@name,'lastName')]");
  31 |     let eid=page.locator("//input[contains(@fdprocessedid,'gq8d0n')]");
  32 | 
  33 |     username.fill("Maddy");
  34 |     // lastname.fill("Mad");
  35 |     // lastname.fill("Max");
> 36 |     eid.fill("011");
     |         ^ Error: locator.fill: Test ended.
  37 |     page.locator("//button[contains(@fdprocessedid,'3gdka')]").click();
  38 |     // await page.locator("//div[contains(@class,'oxd-select-text oxd-select-text--active')]/div[contains(@class,'oxd-select-text-input')][1]").first().selectOption({label:'Admin'});
  39 |     
  40 |     await page.pause();   
  41 | });
```