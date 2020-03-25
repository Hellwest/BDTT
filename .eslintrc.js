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
      "no-secrets"
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier",
      "prettier/@typescript-eslint"
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
      ]
    }
  };