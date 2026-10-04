# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM - add and delete employee
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

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
      - paragraph: Test s
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
- textbox "First Name": Maddy1
- textbox "Middle Name": Mad1
- textbox "Last Name": Max1
- text: Employee Id
- textbox: "016"
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('OrangeHRM - add and delete employee', async ({ page }) => {
  4   | 
  5   |     await page.goto(
  6   |         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  7   |     );
  8   | 
  9   |     // Login
  10  |     const uname = page.locator("//input[contains(@name,'username')]");
  11  |     const pwd = page.locator("//input[contains(@name,'password')]");
  12  | 
  13  |     await uname.fill('Admin');
  14  |     await pwd.fill('admin123');
  15  | 
  16  |     await page.locator(
  17  |         "//button[contains(@class,'orangehrm-login-button')]"
  18  |     ).click();
  19  | 
  20  |     console.log('Admin Logged in');
  21  | 
  22  |     // Validate Dashboard
  23  |     await expect(page).toHaveURL(
  24  |         "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  25  |     );
  26  | 
  27  |     // Go to PIM
  28  |     await page.locator("//span[text()='PIM']").click();
  29  | 
  30  |     // Click Add
  31  |     await page.locator(
  32  |         "//div[contains(@class,'orangehrm-header-container')]/button"
  33  |     ).first().click();
  34  | 
  35  |     // Employee details
  36  |     await page.locator(
  37  |         "//input[contains(@name,'firstName')]"
  38  |     ).fill("Maddy1");
  39  | 
  40  |     await page.locator(
  41  |         "//input[contains(@name,'middleName')]"
  42  |     ).fill("Mad1");
  43  | 
  44  |     await page.locator(
  45  |         "//input[contains(@name,'lastName')]"
  46  |     ).fill("Max1");
  47  | 
  48  |     // Employee ID
  49  |     await page.locator(
  50  |         "//label[contains(text(),'Employee Id')]/following::input[1]"
  51  |     ).fill("016");
  52  | 
  53  |     // Save
  54  |     await page.getByRole('button', { name: 'Save' }).click();
  55  | 
  56  |     // Wait for personal details page
> 57  |     await expect(page).toHaveURL(
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  58  |         /pim\/viewPersonalDetails\/empNumber\/\d+/
  59  |     );
  60  | 
  61  |     console.log("Employee created");
  62  | 
  63  |     // Go back to employee list
  64  |     await page.locator("//span[text()='PIM']").click();
  65  | 
  66  |     // Verify employee list
  67  |     await expect(page).toHaveURL(
  68  |         "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
  69  |     );
  70  | 
  71  |     console.log("Employee list opened");
  72  | 
  73  |     // Find Maddy1's row
  74  |     // Search for Maddy1
  75  | const employeeName = page.locator(
  76  |     "//label[contains(text(),'Employee Name')]/following::input[1]"
  77  | );
  78  | 
  79  | await employeeName.fill("Maddy1");
  80  | 
  81  | await page.getByRole('button', { name: 'Search' }).click();
  82  | 
  83  | // Find Maddy1's row
  84  | const row = page.locator(
  85  |     "//div[contains(@class,'oxd-table-row')]" +
  86  |     "[.//div[contains(@class,'oxd-table-cell') and contains(.,'Maddy1')]]"
  87  | );
  88  | 
  89  | await expect(row).toHaveCount(1);
  90  | 
  91  | console.log("Maddy1 found");
  92  | 
  93  | // Delete
  94  | await row.getByRole('button').nth(1).click();
  95  | 
  96  | // Confirm
  97  | await page.getByRole(
  98  |     'button',
  99  |     { name: 'Yes, Delete' }
  100 | ).click();
  101 | 
  102 | console.log("Maddy1 deleted");
  103 | 
  104 |     console.log("Maddy1 found");
  105 | 
  106 |     // Click Delete button
  107 |     await row.getByRole('button').nth(1).click();
  108 | 
  109 |     // Confirm deletion
  110 |     await page.getByRole(
  111 |         'button',
  112 |         { name: 'Yes, Delete' }
  113 |     ).click();
  114 | 
  115 |     console.log("Maddy1 deleted");
  116 | 
  117 |     await page.pause();
  118 | });
```