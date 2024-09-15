import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import babelParser from '@babel/eslint-parser'
import jest from 'eslint-plugin-jest'

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js', '*.mjs'],
    languageOptions: {
      parser: babelParser,
      globals: {
        jest: true,
        node: true,
        es6: true,
      },
    },
    plugins: {
      prettier,
      jest,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': 0,
      'no-undef': 0,
      'prettier/prettier': 'error',
    },
  },
  {
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    files: ['src/**/*.test.js'],
    plugins: {
      jest,
    },
    rules: {
      'no-undef': 0,
      'jest/no-commented-out-tests': 2,
      'jest/require-top-level-describe': 2,
      'jest/valid-describe-callback': 2,
      'jest/valid-title': 2,
      'jest/no-identical-title': 2,
      'jest/no-conditional-expect': 0,
      'jest/no-duplicate-hooks': 2,
      'jest/no-done-callback': 0,
      'jest/no-focused-tests': 2,
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    },
  },
]
