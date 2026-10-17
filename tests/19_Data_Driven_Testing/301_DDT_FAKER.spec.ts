import { test, expect } from '@playwright/test';

const randomString = (length: number) =>
    Array.from({ length }, () => Math.random().toString(36).slice(2, 3)).join('');

const users = Array.from({ length: 5 }, (_, index) => ({
    name: `Test User ${index + 1}`,
    email: `test${index + 1}.${Math.random().toString(36).slice(2)}@example.com`,
    password: randomString(12),
}));

test.describe('DDT Faker', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    for (const user of users) {

        test(`Login with : ${user.name}`, async ({ page }) => {
            const email = page.getByRole('textbox', { name: 'Email Address' });
            const password = page.getByRole('textbox', { name: 'Password' });

            await email.fill(user.email);
            await password.fill(user.password);
            await expect(email).toHaveValue(user.email);

            await page.getByRole('button', { name: 'Login to Practice Account' }).click();
        });

    }

});