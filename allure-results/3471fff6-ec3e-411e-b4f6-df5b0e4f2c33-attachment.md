# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM- add and delete admin
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /pim\/viewPersonalDetails/
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
      - paragraph: Bushra Almaghrabi
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
- textbox "First Name": Maddy
- textbox "Middle Name": Mad
- textbox "Last Name": Max
- text: Employee Id
- textbox: "013"
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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('OrangeHRM- add and delete admin', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  6  | 
  7  |     // page.locator("//input[contains(@name,'username')]").fill('admin');
  8  |     // page.locator("//input[contains(@name,'password')]").fill('admin123');
  9  |     let uname = page.locator("//input[contains(@name,'username')]");
  10 |     let pwd = page.locator("//input[contains(@name,'password')]");
  11 |     await uname.fill('Admin');
  12 |     await pwd.fill('admin123');
  13 |     page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button')]").click();
  14 | 
  15 |     console.log('Admin Loggedin');
  16 | 
  17 | 
  18 |     //validate the page url
  19 |     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  20 | 
  21 |     //click on PIM tab
  22 |     page.locator("//span[text()='PIM']").click();
  23 | 
  24 |     //click on Add button
  25 |     page.locator("//div[contains(@class,'orangehrm-header-container')]/button[contains(@type,'button')]").first().click();
  26 | 
  27 |     //fill Username field
  28 |     let username = page.locator("//input[contains(@name,'firstName')]");
  29 |     let middlename = page.locator("//input[contains(@name,'middleName')]");
  30 |     let lastname = page.locator("//input[contains(@name,'lastName')]");
  31 | 
  32 | 
  33 | 
  34 |     await username.fill("Maddy");
  35 |     await middlename.fill("Mad");
  36 |     await lastname.fill("Max");
  37 |     // Employee ID
  38 |     await page.locator(
  39 |         "//label[contains(text(),'Employee Id')]/following::input[1]"
  40 |     ).fill("013");
  41 |     let savebtn = page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space')]");
  42 |     await savebtn.click();
  43 |     // await page.locator("//div[contains(@class,'oxd-select-text oxd-select-text--active')]/div[contains(@class,'oxd-select-text-input')][1]").first().selectOption({label:'Admin'});
> 44 |     await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  45 | 
  46 | await page.locator("//span[text()='PIM']").click();
  47 | 
  48 |     // search for the entered new user
  49 |     let row;
  50 |     while(true){
  51 |         row=page.locator("//div[contains(@class,'oxd-table-cell oxd-padding-cell')]").filter({hasText:"Maddy Mad"});
  52 |         if(await row.count()){ break;}
  53 |         const next=page.locator("//button[contains(@class,'oxd-pagination-page-item oxd-pagination-page-item--previous-next')]/i[contains(@class,'oxd-icon bi-chevron-right')]");
  54 |     
  55 |     if(await next.isDisabled){
  56 |         throw new Error("Row not found");
  57 |     }
  58 |     await next.click();
  59 |     }
  60 | 
  61 |     await page.pause();
  62 | });
```