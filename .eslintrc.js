// https://eslint.org/docs/latest/use/getting-started
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
