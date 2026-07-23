import eslint from '@eslint/js';
export default [
  {
    ignores: ['dist/**', '.astro/**', 'src/**/*.astro'],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: { console: 'readonly', process: 'readonly', URL: 'readonly' },
    },
  },
];
