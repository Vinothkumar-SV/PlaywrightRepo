import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
});

test.afterEach(async ({ page }, testInfo) => {
    await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true
    });
});





test('has title', async ({ page }) => {

    await expect(page).toHaveTitle(/Leaftaps/);
});

test('verify URL', async ({ page }) => {
    await expect(page).toHaveURL(/opentaps/);
});