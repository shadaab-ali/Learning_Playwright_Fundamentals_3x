# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM- add and delete admin
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'Employee List\']')

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('OrangeHRM- add and delete admin', async ({ page }) => {
  4   | 
  5   |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  6   | 
  7   |     // page.locator("//input[contains(@name,'username')]").fill('admin');
  8   |     // page.locator("//input[contains(@name,'password')]").fill('admin123');
  9   |     let uname = page.locator("//input[contains(@name,'username')]");
  10  |     let pwd = page.locator("//input[contains(@name,'password')]");
  11  |     await uname.fill('Admin');
  12  |     await pwd.fill('admin123');
  13  |     page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button')]").click();
  14  | 
  15  |     console.log('Admin Loggedin');
  16  | 
  17  | 
  18  |     //validate the page url
  19  |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  20  | 
  21  |     //click on PIM tab
  22  |     page.locator("//span[text()='PIM']").click();
  23  | 
  24  |     //click on Add button
  25  |     page.locator("//div[contains(@class,'orangehrm-header-container')]/button[contains(@type,'button')]").first().click();
  26  | 
  27  |     //fill Username field
  28  |     let username = page.locator("//input[contains(@name,'firstName')]");
  29  |     let middlename = page.locator("//input[contains(@name,'middleName')]");
  30  |     let lastname = page.locator("//input[contains(@name,'lastName')]");
  31  | 
  32  | 
  33  | 
  34  |     await username.fill("Maddy");
  35  |     await middlename.fill("Max");
  36  |     await lastname.fill("Max1");
  37  |     // Employee ID
  38  |     await page.locator(
  39  |         "//label[contains(text(),'Employee Id')]/following::input[1]"
  40  |     ).fill("015");
  41  |     let savebtn = page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space')]");
  42  |     await savebtn.click();
  43  |     // await page.locator("//div[contains(@class,'oxd-select-text oxd-select-text--active')]/div[contains(@class,'oxd-select-text-input')][1]").first().selectOption({label:'Admin'});
  44  |     await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
  45  | 
> 46  | await page.locator("//span[text()='Employee List']").click();
      |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  47  | 
  48  |     // search for the entered new user
  49  |     let row;
  50  |     while(true){
  51  |         row=page.locator("//div[contains(@class,'oxd-table-cell oxd-padding-cell')]").filter({hasText:"Maddy Mad"});
  52  |         if(await row.count()){ break;}
  53  |         const next=page.locator("//button[contains(@class,'oxd-pagination-page-item oxd-pagination-page-item--previous-next')]/i[contains(@class,'oxd-icon bi-chevron-right')]");
  54  |     
  55  |     if(await next.isDisabled()){
  56  |         throw new Error("Row not found");
  57  |     }
  58  |     await next.click();
  59  |     }
  60  | 
  61  |     await page.pause();
  62  | });
  63  | 
  64  | // -------------------------Codegen
  65  | // import { test, expect } from '@playwright/test';
  66  | 
  67  | // test('OrangeHRM add and delete employee', async ({ page }) => {
  68  | //   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  69  | //   await page.getByRole('textbox', { name: 'Username' }).click();
  70  | //   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  71  | //   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  72  | //   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  73  | //   await page.getByRole('button', { name: 'Login' }).click();
  74  | //   await page.getByRole('link', { name: 'PIM' }).click();
  75  | //   await page.getByRole('link', { name: 'Add Employee' }).click();
  76  | //   await page.getByRole('textbox', { name: 'First Name' }).click();
  77  | //   await page.getByRole('textbox', { name: 'First Name' }).fill('shadaab07');
  78  | //   await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  79  | //   await page.getByRole('textbox', { name: 'Middle Name' }).fill('ali');
  80  | //   await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  81  | //   await page.getByRole('textbox', { name: 'Last Name' }).fill('ilkal');
  82  | //   await page.getByRole('textbox').nth(4).dblclick();
  83  | //   await page.getByRole('textbox').nth(4).fill('04221');
  84  | //   await page.getByRole('button', { name: 'Save' }).click();
  85  | //   await page.getByRole('link', { name: 'Employee List' }).click();
  86  | //   await page.getByRole('textbox').nth(2).click();
  87  | //   await page.getByRole('textbox').nth(2).fill('04221');
  88  | //   await page.getByRole('button', { name: 'Search' }).click();
  89  | //     await page.pause();
  90  | 
  91  | //   const employeeRow = page.locator(
  92  | //         "//div[contains(@class,'oxd-table-row')][.//div[contains(@class,'oxd-table-cell') and contains(.,'04221')]]"
  93  | //     );
  94  | 
  95  | //     await expect(employeeRow).toHaveCount(1);
  96  | 
  97  | // // Click checkbox inside this employee's row
  98  | //     await employeeRow
  99  | //         .locator("input[type='checkbox']")
  100 | //         .check();
  101 | 
  102 | //     // 9. Delete
  103 | //     await page.locator(
  104 | //         "//i[contains(@class,'bi-trash')]"
  105 | //     ).click();
  106 | 
  107 | //     // 10. Confirm deletion
  108 | //     await page.getByRole(
  109 | //         'button',
  110 | //         { name: /Yes, Delete/ }
  111 | //     ).click();
  112 | 
  113 | //     // 11. Verify employee is deleted
  114 | //     await expect(employeeRow).toHaveCount(0);
  115 | // });
  116 | 
  117 | 
  118 | // ----------------------------
  119 | 
  120 | 
  121 | // test('OrangeHRM add and delete employee', async ({ page }) => {
  122 | 
  123 | //     // =========================
  124 | //     // LOGIN
  125 | //     // =========================
  126 | 
  127 | //     await page.goto(
  128 | //         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  129 | //     );
  130 | 
  131 | //     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  132 | 
  133 | //     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  134 | 
  135 | //     await page.getByRole('button', { name: 'Login' }).click();
  136 | 
  137 | 
  138 | //     // =========================
  139 | //     // PIM
  140 | //     // =========================
  141 | 
  142 | //     await page.getByRole('link', { name: 'PIM' }).click();
  143 | 
  144 | //     await page.getByRole('link', { name: 'Add Employee' }).click();
  145 | 
  146 | 
```