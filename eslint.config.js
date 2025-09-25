import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // formatting
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2, { SwitchCase: 1 }],

      // best practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-console': 'warn',

      // spacing / padding
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'always' }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],

      'prettier/prettier': 'off',
    },
  },
]);
