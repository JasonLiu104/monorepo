/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect' // Detect React version
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'], // Path to tsconfig.json
    tsconfigRootDir: __dirname // Path to current directory
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 0 // Disable this rule
  }
}
