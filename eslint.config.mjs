// import config from "eslint-config-xo";
import { defineConfig } from 'eslint/config';
// import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import hooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  // config,
  {
    files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      'react-hooks': hooks,
      'prettier': prettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        console: 'readonly',
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: [
      'dist/', 
      'node_modules', 
      '.bin/', 
      '.predoc/',
      'package.json',
      'pnpm-lock.yaml',
      'bin/',
      'docs/'
    ]
  },
]);
