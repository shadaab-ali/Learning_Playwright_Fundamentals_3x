import {test,expect} from '@playwright/test';

test.skip('skipping test',async({page})=>{
//never executes
});

test.only('Login',async({page})=>{
//only this test runs, rest of them are ignored
});

test.fail('failing test',async()=>{
//failing intentionally
expect(90).toBe(100); //actually returns 90
});

test.fixme('upload 2GB file',async({})=>{
//skipped, but flagged as "needs fixing"
});

test('full regression report',async()=>{
test.slow();
console.log(test.info().timeout);
});

test('mobile layout',async({page,browserName})=>{
 test.fixme(browserName==='webkit','safari renders wrong menu');
});