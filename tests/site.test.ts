import { describe, expect, it } from 'vitest';
import { products, topics, site } from '../src/config/site';
describe('content integrity', () => {
  it('has the required product catalogue', () =>
    expect(products.map((p) => p.slug)).toEqual([
      'bn-spectra-studio-pro',
      'sem-auto-analysis-tool',
      'thermo-analyzer-studio',
    ]));
  it('has six topic hubs', () => expect(topics).toHaveLength(6));
  it('uses the canonical host', () => expect(site.url).toBe('https://bnmaterial.com'));
  it('keeps the sister site external', () => expect(site.sisterSite).toBe('https://bhijan.com.np'));
});
