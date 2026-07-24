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
    page.locator('nav[aria-label="Primary navigation"] summary').filter({ hasText: 'Software' }),
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

test('scientific visual system renders and animates without browser errors', async ({ page }) => {
  const browserErrors: string[] = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(message.text());
  });

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.waitForTimeout(180);

  await expect(page.locator('canvas')).toHaveCount(4);
  const heroArtwork = page.locator('.hero-artwork-image');
  await expect(heroArtwork).toBeVisible();
  expect(
    await heroArtwork.evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(1000);
  const canvasesDrawn = await page.locator('canvas').evaluateAll((canvases) =>
    canvases.every((canvas) => {
      const canvasElement = canvas as HTMLCanvasElement;
      const context = canvasElement.getContext('2d');
      if (!context || canvasElement.width === 0 || canvasElement.height === 0) return false;
      const pixels = context.getImageData(0, 0, canvasElement.width, canvasElement.height).data;
      for (let index = 3; index < pixels.length; index += 4) {
        if ((pixels[index] ?? 0) > 0) return true;
      }
      return false;
    }),
  );
  expect(canvasesDrawn).toBe(true);

  for (const selector of [
    '.hero-glow-a',
    '.hero-artwork-image',
    '.spectrum-halo-wide',
    '.curve-a',
    '.spectrum-core',
  ]) {
    await expect(page.locator(selector)).not.toHaveCSS('animation-name', 'none');
  }
  expect(browserErrors).toEqual([]);
});
