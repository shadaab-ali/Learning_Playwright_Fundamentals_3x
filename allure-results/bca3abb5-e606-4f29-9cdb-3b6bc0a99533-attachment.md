# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM add and delete employee
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:121:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'04221\')]]')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'04221\')]]') with timeout 5000ms
  - waiting for locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'04221\')]]')
    14 × locator resolved to 0 elements
       - unexpected value "0"

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
              - paragraph [ref=f4e127]: Demo Source
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
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: "04221"
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: No Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup
    - generic [ref=f4e267]:
      - paragraph [ref=f4e268]: OrangeHRM OS 5.9
      - paragraph [ref=f4e269]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e270] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
> 221 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
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