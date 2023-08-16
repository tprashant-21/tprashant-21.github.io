// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': 'warn',
//   },
// }

module.exports = {
  node: true,
  root: true,
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['@', './web/src']],
      },
      node: {
        paths: ['src', 'web/src', 'server/src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    // Not needed for React v17+
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-curly-spacing': [1, { when: 'never' }],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-indent': [2, 2, { checkAttributes: true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-sort-props': [1, { reservedFirst: true }],

    'comma-spacing': ['error', { before: false, after: true }],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effects
          ['^\\u0000'],
          // React imports, npm imports, then novaleap imports
          ['^react$', '^react', '^@?\\w', '^@nl.*'],
          // Parent imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Relative imports
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^\\.'],
        ],
      },
    ],
    'sort-imports': 0,
  },
  plugins: ['simple-import-sort'],
};
