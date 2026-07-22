import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://bnmaterial.com',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
