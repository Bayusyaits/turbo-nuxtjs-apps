const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-undef": "off",
    "no-unused-vars": "warn",
    "vue/no-multiple-template-root": "off",
    "vue/require-valid-default-prop": "off",
    "typescript-eslint/no-explicit-any": "off",
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    ".turbo",
    ".nuxt",
    "test",
    "public",
    ".eslintrc.js",
    "*.config.[jt]s",
    "tsconfig.json",
    "tsconfig.*.json",
    "tsconfig.eslint.json",
  ],
};
