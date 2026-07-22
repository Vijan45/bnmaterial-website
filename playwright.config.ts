import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests',
  testMatch: '**/*.spec.ts',
  use: { baseURL: 'http://127.0.0.1:4321' },
  webServer: {
    command: 'node scripts/test-server.mjs',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: true,
  },
});
