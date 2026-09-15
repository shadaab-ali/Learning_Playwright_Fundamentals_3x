import {chromium, Browser, BrowserContext, Page} from "playwright";

async function run(){

    let browser: Browser= await chromium.launch({headless:false});
    console.log("Browser launched", browser);

    let context:BrowserContext= await browser.newContext();
    console.log("Context launched",context);

    let page:Page = await context.newPage();
    console.log("Page Opened ");

    await page.close();
    await context.close();
    await browser.close();
}