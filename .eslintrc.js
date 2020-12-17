module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always'],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/wrap-multilines': 0,
    'react/react-in-jsx-scope': 1,
    'react/prefer-es6-class': 1,
    'react/jsx-tag-spacing': [2, { 'beforeSelfClosing': 'always' }],
  }
};
