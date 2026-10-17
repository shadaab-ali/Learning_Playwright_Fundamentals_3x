# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop_Calender\Applitools_task.spec.ts >> Verify Total Spend on Applitools
- Location: tests\10_Keyboard_Hover_Drag_Drop_Calender\Applitools_task.spec.ts:3:5

# Error details

```
Error: locator.click: Unsupported token "@id" while parsing css selector "a[contains(@id,'log-in')]". Did you mean to CSS.escape it?
Call log:
  - waiting for a[contains(@id,'log-in')]

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link [ref=e5] [cursor=pointer]:
    - /url: index.html
  - heading "Login Form" [level=4] [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]: Username
      - textbox "Enter your username" [ref=e10]: Admin
      - generic [ref=e11]: 
    - generic [ref=e12]:
      - generic [ref=e13]: Password
      - textbox "Enter your password" [active] [ref=e14]: Password@123
      - generic [ref=e15]: 
    - generic [ref=e16]:
      - link "Sign in" [ref=e17] [cursor=pointer]:
        - /url: /app.html
      - generic [ref=e19]:
        - checkbox "Remember Me" [ref=e20]
        - text: Remember Me
      - generic [ref=e21]:
        - link [ref=e22] [cursor=pointer]:
          - /url: "#"
        - link [ref=e23] [cursor=pointer]:
          - /url: "#"
        - link [ref=e24] [cursor=pointer]:
          - /url: "#"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Verify Total Spend on Applitools',async({page})=>{
  4  | 
  5  |    
  6  |  await page.goto("https://demo.applitools.com/");
  7  | 
  8  |  await page.locator("//input[contains(@id,'username')]").fill("Admin");
  9  |  await page.locator("//input[contains(@id,'password')]").fill("Password@123");
> 10 |  await page.locator("a[contains(@id,'log-in')]").click();
     |                                                  ^ Error: locator.click: Unsupported token "@id" while parsing css selector "a[contains(@id,'log-in')]". Did you mean to CSS.escape it?
  11 | 
  12 |  await page.pause();
  13 | });
```