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
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Bushra Almaghrabi
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e148]:
      - generic [ref=f4e149]:
        - generic [ref=f4e150]:
          - heading "Maddy Max" [level=6] [ref=f4e152]
          - img "profile picture" [ref=f4e155] [cursor=pointer]
        - tablist [ref=f4e156]:
          - tab [ref=f4e157]:
            - link "Personal Details" [ref=f4e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/237
          - tab [ref=f4e159]:
            - link "Contact Details" [ref=f4e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/237
          - tab [ref=f4e161]:
            - link "Emergency Contacts" [ref=f4e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/237
          - tab [ref=f4e163]:
            - link "Dependents" [ref=f4e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/237
          - tab [ref=f4e165]:
            - link "Immigration" [ref=f4e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/237
          - tab [ref=f4e167]:
            - link "Job" [ref=f4e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/237
          - tab [ref=f4e169]:
            - link "Salary" [ref=f4e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/237
          - tab [ref=f4e171]:
            - link "Report-to" [ref=f4e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/237
          - tab [ref=f4e173]:
            - link "Qualifications" [ref=f4e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/237
          - tab [ref=f4e175]:
            - link "Memberships" [ref=f4e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/237
      - generic [ref=f4e177]:
        - generic [ref=f4e178]:
          - heading "Personal Details" [level=6] [ref=f4e179]
          - separator [ref=f4e180]
          - generic [ref=f4e181]:
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Employee Full Name*
              - generic [ref=f4e188]:
                - textbox "First Name" [ref=f4e191]: Maddy
                - textbox "Middle Name" [ref=f4e194]: Mad
                - textbox "Last Name" [ref=f4e197]: Max
            - separator [ref=f4e198]
            - generic [ref=f4e199]:
              - generic [ref=f4e200]:
                - generic [ref=f4e202]:
                  - generic [ref=f4e203]: Employee Id
                  - textbox [ref=f4e206]: "013"
                - generic [ref=f4e208]:
                  - generic [ref=f4e209]: Other Id
                  - textbox [ref=f4e212]
              - generic [ref=f4e213]:
                - generic [ref=f4e215]:
                  - generic [ref=f4e216]: Driver's License Number
                  - textbox [ref=f4e219]
                - generic [ref=f4e221]:
                  - generic [ref=f4e222]: License Expiry Date
                  - generic [ref=f4e226]:
                    - textbox "yyyy-dd-mm" [ref=f4e227]
                    - generic [ref=f4e228] [cursor=pointer]: 
            - separator [ref=f4e229]
            - generic [ref=f4e230]:
              - generic [ref=f4e231]:
                - generic [ref=f4e233]:
                  - generic [ref=f4e234]: Nationality
                  - generic [ref=f4e238] [cursor=pointer]:
                    - generic [ref=f4e239]: "-- Select --"
                    - generic [ref=f4e240]: 
                - generic [ref=f4e243]:
                  - generic [ref=f4e244]: Marital Status
                  - generic [ref=f4e248] [cursor=pointer]:
                    - generic [ref=f4e249]: "-- Select --"
                    - generic [ref=f4e250]: 
              - generic [ref=f4e252]:
                - generic [ref=f4e254]:
                  - generic [ref=f4e255]: Date of Birth
                  - generic [ref=f4e259]:
                    - textbox "yyyy-dd-mm" [ref=f4e260]
                    - generic [ref=f4e261] [cursor=pointer]: 
                - generic [ref=f4e263]:
                  - generic [ref=f4e264]: Gender
                  - generic [ref=f4e266]:
                    - generic [ref=f4e270] [cursor=pointer]:
                      - radio "Male" [ref=f4e271]
                      - text: Male
                    - generic [ref=f4e276] [cursor=pointer]:
                      - radio "Female" [ref=f4e277]
                      - text: Female
            - separator [ref=f4e279]
            - generic [ref=f4e280]:
              - paragraph [ref=f4e281]: "* Required"
              - button "Save" [ref=f4e282] [cursor=pointer]
        - generic [ref=f4e283]:
          - separator [ref=f4e284]
          - generic [ref=f4e285]:
            - heading "Custom Fields" [level=6] [ref=f4e286]
            - separator [ref=f4e287]
            - generic [ref=f4e288]:
              - generic [ref=f4e290]:
                - generic [ref=f4e292]:
                  - generic [ref=f4e293]: Blood Type
                  - generic [ref=f4e297] [cursor=pointer]:
                    - generic [ref=f4e298]: "-- Select --"
                    - generic [ref=f4e299]: 
                - generic [ref=f4e302]:
                  - generic [ref=f4e303]: Test_Field
                  - textbox [ref=f4e306]
              - separator [ref=f4e307]
              - button "Save" [ref=f4e309] [cursor=pointer]
        - generic [ref=f4e310]:
          - separator [ref=f4e311]
          - generic [ref=f4e313]:
            - heading "Attachments" [level=6] [ref=f4e314]
            - button " Add" [ref=f4e315] [cursor=pointer]:
              - generic [ref=f4e316]: 
              - text: Add
          - generic [ref=f4e317]:
            - separator [ref=f4e318]
            - generic [ref=f4e319]: No Records Found
          - table [ref=f4e322]:
            - rowgroup [ref=f4e323]:
              - row [ref=f4e324]:
                - columnheader "" [ref=f4e325]:
                  - generic [ref=f4e327] [cursor=pointer]:
                    - checkbox "" [ref=f4e328]
                    - generic [ref=f4e329]: 
                - columnheader "File Name" [ref=f4e331]
                - columnheader "Description" [ref=f4e332]
                - columnheader "Size" [ref=f4e333]
                - columnheader "Type" [ref=f4e334]
                - columnheader "Date Added" [ref=f4e335]
                - columnheader "Added By" [ref=f4e336]
                - columnheader "Actions" [ref=f4e337]
            - rowgroup
    - generic [ref=f4e338]:
      - paragraph [ref=f4e339]: OrangeHRM OS 5.9
      - paragraph [ref=f4e340]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e341] [cursor=pointer]:
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
> 44 |     await page.waitForTimeout(50000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  45 | 
  46 |     page.locator("//span[text()='PIM']").click();
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