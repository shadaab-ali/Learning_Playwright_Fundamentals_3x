# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM- add and delete admin
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="employeeId"]')

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: Bushra Almaghrabi
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Maddy
                  - textbox "Middle Name" [ref=f3e174]: Mad
                  - textbox "Last Name" [active] [ref=f3e177]: Max
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0389"
            - separator [ref=f3e185]
            - generic [ref=f3e186]:
              - paragraph [ref=f3e187]: Create Login Details
              - checkbox [ref=f3e190]
        - separator [ref=f3e192]
        - generic [ref=f3e193]:
          - paragraph [ref=f3e194]: "* Required"
          - button "Cancel" [ref=f3e195] [cursor=pointer]
          - button "Save" [ref=f3e196] [cursor=pointer]
    - generic [ref=f3e197]:
      - paragraph [ref=f3e198]: OrangeHRM OS 5.9
      - paragraph [ref=f3e199]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e200] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  31 |     // let eid=page.locator("/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input");
  32 |     
  33 | 
  34 |     await username.fill("Maddy");
  35 |     await middlename.fill("Mad");
  36 |     await lastname.fill("Max");
  37 |      // Employee ID
> 38 |     await page.locator('input[name="employeeId"]').fill('011');
     |                                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  39 |     // await eid.fill("011");
  40 |     let savebtn=page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space')]");
  41 |     await savebtn.click();
  42 |     // await page.locator("//div[contains(@class,'oxd-select-text oxd-select-text--active')]/div[contains(@class,'oxd-select-text-input')][1]").first().selectOption({label:'Admin'});
  43 |     
  44 |     await page.pause();   
  45 | });
```