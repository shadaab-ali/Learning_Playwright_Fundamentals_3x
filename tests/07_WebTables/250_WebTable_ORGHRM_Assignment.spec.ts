import { test, expect } from '@playwright/test';

test('OrangeHRM- add and delete admin', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // page.locator("//input[contains(@name,'username')]").fill('admin');
    // page.locator("//input[contains(@name,'password')]").fill('admin123');
    let uname = page.locator("//input[contains(@name,'username')]");
    let pwd = page.locator("//input[contains(@name,'password')]");
    await uname.fill('Admin');
    await pwd.fill('admin123');
    page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button')]").click();

    console.log('Admin Loggedin');


    //validate the page url
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    //click on PIM tab
    page.locator("//span[text()='PIM']").click();

    //click on Add button
    page.locator("//div[contains(@class,'orangehrm-header-container')]/button[contains(@type,'button')]").first().click();

    //fill Username field
    let username = page.locator("//input[contains(@name,'firstName')]");
    let middlename = page.locator("//input[contains(@name,'middleName')]");
    let lastname = page.locator("//input[contains(@name,'lastName')]");



    await username.fill("Maddy");
    await middlename.fill("Max");
    await lastname.fill("Max1");
    // Employee ID
    await page.locator(
        "//label[contains(text(),'Employee Id')]/following::input[1]"
    ).fill("015");
    let savebtn = page.locator("//button[contains(@class,'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space')]");
    await savebtn.click();
    // await page.locator("//div[contains(@class,'oxd-select-text oxd-select-text--active')]/div[contains(@class,'oxd-select-text-input')][1]").first().selectOption({label:'Admin'});
    await expect(page).toHaveURL(/pim\/viewPersonalDetails/);

await page.locator("//span[text()='Employee List']").click();

    // search for the entered new user
    let row;
    while(true){
        row=page.locator("//div[contains(@class,'oxd-table-cell oxd-padding-cell')]").filter({hasText:"Maddy Mad"});
        if(await row.count()){ break;}
        const next=page.locator("//button[contains(@class,'oxd-pagination-page-item oxd-pagination-page-item--previous-next')]/i[contains(@class,'oxd-icon bi-chevron-right')]");
    
    if(await next.isDisabled()){
        throw new Error("Row not found");
    }
    await next.click();
    }

    await page.pause();
});

// -------------------------Codegen
// import { test, expect } from '@playwright/test';

// test('OrangeHRM add and delete employee', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'PIM' }).click();
//   await page.getByRole('link', { name: 'Add Employee' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).fill('shadaab07');
//   await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Middle Name' }).fill('ali');
//   await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('ilkal');
//   await page.getByRole('textbox').nth(4).dblclick();
//   await page.getByRole('textbox').nth(4).fill('04221');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('link', { name: 'Employee List' }).click();
//   await page.getByRole('textbox').nth(2).click();
//   await page.getByRole('textbox').nth(2).fill('04221');
//   await page.getByRole('button', { name: 'Search' }).click();
//     await page.pause();

//   const employeeRow = page.locator(
//         "//div[contains(@class,'oxd-table-row')][.//div[contains(@class,'oxd-table-cell') and contains(.,'04221')]]"
//     );

//     await expect(employeeRow).toHaveCount(1);

// // Click checkbox inside this employee's row
//     await employeeRow
//         .locator("input[type='checkbox']")
//         .check();

//     // 9. Delete
//     await page.locator(
//         "//i[contains(@class,'bi-trash')]"
//     ).click();

//     // 10. Confirm deletion
//     await page.getByRole(
//         'button',
//         { name: /Yes, Delete/ }
//     ).click();

//     // 11. Verify employee is deleted
//     await expect(employeeRow).toHaveCount(0);
// });


// ----------------------------


test('OrangeHRM add and delete employee', async ({ page }) => {    
    // LOGIN
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    await page.getByRole('textbox', { name: 'First Name' }).fill('shadaab07');

    await page.getByRole('textbox', { name: 'Middle Name' }).fill('ali');

    await page.getByRole('textbox', { name: 'Last Name' }).fill('ilkal');

    const employeeIdField = page.locator("//label[contains(normalize-space(),'Employee Id')]/following::input[1]");

    await employeeIdField.fill('042211');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Employee List' }).click();

    await expect(page).toHaveURL(/pim\/viewEmployeeList/);

    console.log('Employee List opened');
    const searchEmployeeId = page.locator(
        "//label[contains(normalize-space(),'Employee Id')]/following::input[1]"
    );

    await expect(searchEmployeeId).toBeVisible();

    await searchEmployeeId.fill('04221');

    await page.getByRole('button', { name: 'Search' }).click();

    const employeeRow = page.locator(
        "//div[contains(@class,'oxd-table-row')]" +
        "[.//div[contains(@class,'oxd-table-cell') and contains(.,'04221')]]"
    );

    await expect(employeeRow).toHaveCount(1);

    await employeeRow
        .locator("input[type='checkbox']")
        .check();

    await page.locator(
        "//i[contains(@class,'bi-trash')]"
    ).click();

    await page.getByRole(
        'button',
        { name: /Yes, Delete/ }
    ).click();
    await expect(employeeRow).toHaveCount(0);

    
});