import { test, expect } from '@playwright/test';

test('Verify UI using toMatchSnapshot', async ({ page }) => {
  await page.goto("https://tiki.vn");
  await page.waitForSelector('.header-left');
  const tikiHomepageScreenshot = await page.screenshot();
  await expect(tikiHomepageScreenshot).toMatchSnapshot('Homepage.png', {maxDiffPixelRatio: 0.1})
})