module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js', 'ecosystem.config.js', 'craco.config.js', 'tailwind.config.js'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "indent": ["error", 2, {"ignoredNodes": ["JSXElement"]}],
    "react/jsx-indent": ["error", 2]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    },
  },
};

