# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM add and delete employee
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:121:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /pim\/viewPersonalDetails\/empNumber\/\d+/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: THkwWBbdFsrDpqg5MaLgv8WWHXnVJf xJ73CbLkh4YJGe8QY1Ia9uZF0a8rG7
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": shadaab07
- textbox "Middle Name": ali
- textbox "Last Name": ilkal
- text: Employee Id
- textbox: "04221"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  127 |     await page.goto(
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
  166 |     await employeeIdField.fill('04221');
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
> 177 |     await expect(page).toHaveURL(
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  178 |         /pim\/viewPersonalDetails\/empNumber\/\d+/
  179 |     );
  180 | 
  181 |     console.log('Employee created');
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
  228 |     // =========================
  229 | 
  230 |     await employeeRow
  231 |         .locator("input[type='checkbox']")
  232 |         .check();
  233 | 
  234 |     console.log('Employee selected');
  235 | 
  236 | 
  237 |     // =========================
  238 |     // DELETE
  239 |     // =========================
  240 | 
  241 |     await page.locator(
  242 |         "//i[contains(@class,'bi-trash')]"
  243 |     ).click();
  244 | 
  245 | 
  246 |     // =========================
  247 |     // CONFIRM DELETE
  248 |     // =========================
  249 | 
  250 |     await page.getByRole(
  251 |         'button',
  252 |         { name: /Yes, Delete/ }
  253 |     ).click();
  254 | 
  255 | 
  256 |     // =========================
  257 |     // VERIFY DELETION
  258 |     // =========================
  259 | 
  260 |     await expect(employeeRow).toHaveCount(0);
  261 | 
  262 |     console.log('Employee deleted successfully');
  263 | });
```