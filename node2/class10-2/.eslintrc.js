module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'padded-blocks': 'off',
    'semi': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'no-console': 'off',
    'comma-dangle': 'off'
  },
};
