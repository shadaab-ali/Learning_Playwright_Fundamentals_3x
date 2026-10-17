import {test , expect} from '@playwright/test';

test('Verify- Shadow DOM', async({page})=>{
  await page.goto('https://selectorshub.com/xpath-practice-page/');

  
  await page.getByTitle('user name field').fill("Shadaab");
  await page.getByPlaceholder('Enter pizza name').fill('Mexican');
  
  //move to the closed shadow dom
  await page.keyboard.press('Tab');
  await page.keyboard.type('concept test practice');

  // move to the password shadow dom section
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.type('123123');
  console.log("Password entered successfully");
  await page.pause();


});