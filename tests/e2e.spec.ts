import { test, expect } from '@playwright/test';
test('homepage and mobile navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('BN Material');
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole('navigation', { name: 'Primary' })
    .getByRole('button', { name: 'Menu' })
    .click();
  await expect(
    page
      .getByRole('navigation', { name: 'Primary' })
      .getByRole('link', { name: 'Software', exact: true }),
  ).toBeVisible();
  await page.keyboard.press('Escape');
});
test('canonical routes and metadata', async ({ page }) => {
  for (const path of [
    '/topics',
    '/research',
    '/publications',
    '/software',
    '/benchmarks',
    '/resources',
    '/academy',
    '/consulting',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
    '/disclaimer',
    '/software/bn-spectra-studio-pro',
    '/software/sem-auto-analysis-tool',
    '/software/thermo-analyzer-studio',
  ]) {
    const r = await page.goto(path);
    expect(r?.ok(), path).toBeTruthy();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(`https://bnmaterial.com${path}`),
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
  }
});
