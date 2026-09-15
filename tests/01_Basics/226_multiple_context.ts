import {chromium} from "playwright";

async function multiUserTest(){
    let browser = await chromium.launch({headless:false});

    //Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("");
    console.log("Admin: on login page");

    //View
    let viewerContext = await browser.newContext();
    let viewerPage= await viewerContext.newPage();
    await viewerPage.goto("");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();

}