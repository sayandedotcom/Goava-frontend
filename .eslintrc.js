module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react/jsx-uses-react': 'off',
    'react/display-name': 'off',

    // #region  //*=========== Unused Import ===========
    // 'unused-imports/no-unused-imports': 'warn',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //   },
    // ],
    // #endregion  //*======== Unused Import ===========

    // 'linebreak-style': ['error', 'unix'],
  },
};
