module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier",
    "import",
    "jest",
    "react-hooks",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "./eslint-rules/best-practices.yaml",
    "./eslint-rules/ecmascript-6.yaml",
    "./eslint-rules/node-js-and-common-js.yaml",
    "./eslint-rules/possible-errors.yaml",
    "./eslint-rules/strict-mode.yaml",
    "./eslint-rules/stylistic-issues.yaml",
    "./eslint-rules/variables.yaml",
    "./eslint-rules/react.yaml",
    "./eslint-rules/typescript.yaml",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: "all",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
        proseWrap: "never",
        endOfLine: "auto",
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    JSX: true,
  },
}
