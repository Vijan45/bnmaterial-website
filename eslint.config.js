import eslint from '@eslint/js';
export default [
  eslint.configs.recommended,
  {
    ignores: ['dist/**', '.astro/**', 'src/**/*.astro'],
    languageOptions: {
      globals: { console: 'readonly', process: 'readonly', URL: 'readonly' },
    },
  },
];
