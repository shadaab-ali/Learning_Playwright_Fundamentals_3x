# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM add and delete employee
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:121:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
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
  46  | await page.locator("//span[text()='Employee List']").click();
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
  121 | test('OrangeHRM add and delete employee', async ({ page }) => {
  122 | 
  123 |     // =========================
  124 |     // LOGIN
  125 |     // =========================
  126 | 
> 127 |     await page.goto(
      |                ^ Error: page.goto: Target page, context or browser has been closed
  128 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  129 |     );
  130 | 
  131 |     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  132 | 
  133 |     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  134 | 
  135 |     await page.getByRole('button', { name: 'Login' }).click();
  136 | 
  137 | 
  138 |     // =========================
  139 |     // PIM
  140 |     // =========================
  141 | 
  142 |     await page.getByRole('link', { name: 'PIM' }).click();
  143 | 
  144 |     await page.getByRole('link', { name: 'Add Employee' }).click();
  145 | 
  146 | 
  147 |     // =========================
  148 |     // ADD EMPLOYEE
  149 |     // =========================
  150 | 
  151 |     await page.getByRole('textbox', { name: 'First Name' })
  152 |         .fill('shadaab07');
  153 | 
  154 |     await page.getByRole('textbox', { name: 'Middle Name' })
  155 |         .fill('ali');
  156 | 
  157 |     await page.getByRole('textbox', { name: 'Last Name' })
  158 |         .fill('ilkal');
  159 | 
  160 | 
  161 |     // Employee ID
  162 |     const employeeIdField = page.locator(
  163 |         "//label[contains(normalize-space(),'Employee Id')]/following::input[1]"
  164 |     );
  165 | 
  166 |     await employeeIdField.fill('042211');
  167 | 
  168 | 
  169 |     // Save
  170 |     await page.getByRole('button', { name: 'Save' }).click();
  171 | 
  172 | 
  173 |     // =========================
  174 |     // WAIT FOR EMPLOYEE DETAILS
  175 |     // =========================
  176 | 
  177 |     // await expect(page).toHaveURL(
  178 |     //     /pim\/viewPersonalDetails\/empNumber\/\d+/
  179 |     // );
  180 | 
  181 |     // console.log('Employee created');
  182 | 
  183 | 
  184 |     // =========================
  185 |     // EMPLOYEE LIST
  186 |     // =========================
  187 | 
  188 |     await page.getByRole('link', { name: 'Employee List' }).click();
  189 | 
  190 |     await expect(page).toHaveURL(
  191 |         /pim\/viewEmployeeList/
  192 |     );
  193 | 
  194 |     console.log('Employee List opened');
  195 | 
  196 | 
  197 |     // =========================
  198 |     // SEARCH EMPLOYEE
  199 |     // =========================
  200 | 
  201 |     const searchEmployeeId = page.locator(
  202 |         "//label[contains(normalize-space(),'Employee Id')]/following::input[1]"
  203 |     );
  204 | 
  205 |     await expect(searchEmployeeId).toBeVisible();
  206 | 
  207 |     await searchEmployeeId.fill('04221');
  208 | 
  209 |     await page.getByRole('button', { name: 'Search' }).click();
  210 | 
  211 | 
  212 |     // =========================
  213 |     // FIND EMPLOYEE ROW
  214 |     // =========================
  215 | 
  216 |     const employeeRow = page.locator(
  217 |         "//div[contains(@class,'oxd-table-row')]" +
  218 |         "[.//div[contains(@class,'oxd-table-cell') and contains(.,'04221')]]"
  219 |     );
  220 | 
  221 |     await expect(employeeRow).toHaveCount(1);
  222 | 
  223 |     console.log('Employee found');
  224 | 
  225 | 
  226 |     // =========================
  227 |     // SELECT CHECKBOX
```