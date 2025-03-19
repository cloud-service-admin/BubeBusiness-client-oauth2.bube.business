module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        quoteProps: 'as-needed',
        trailingComma: 'all',
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        proseWrap: 'preserve',
        insertPragma: false,
        printWidth: 80,
        requirePragma: false,
        tabWidth: 2,
        useTabs: false,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'auto',
      },
    ],
  },
};
