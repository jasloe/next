module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'build/', '*.config.js', './tsconfig.json'],
  extends: ['next/core-web-vitals', 'wesbos', 'wesbos/typescript', 'prettier'],
  rules: {
    'no-console': 0,
    'react/prop-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'import/no-unresolved': 'off',
    'react/button-has-type': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        // semi: false
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': process.env.NEXT_BUILD
      ? 'off'
      : [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
  },
  plugins: ['import'],
};
