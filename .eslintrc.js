module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "prettier",
    "filenames",
    "react-hooks",
    "no-secrets",
    "unicorn"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:unicorn/recommended"
  ],
  rules: {
    "filenames/match-regex": ["error", "^[a-z0-9.-]+$", false],
    "filenames/no-index": "error",
    "no-secrets/no-secrets": "error",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        semi: false,
        arrowParens: "always"
      }
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_+" }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_+" }],
    "unicorn/prevent-abbreviations": [
      "error", {
        "replacements": {
          "props": false,
          "ctx": false
        }
      }
    ],
    "react/self-closing-comp": "warn"
  }
}