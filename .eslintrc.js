module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': [2, 'always']
    // 'semi': ['error', 'never']
  },
  // eslintIgnore: ['*.test.js'],
};
