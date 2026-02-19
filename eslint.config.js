import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import promise from "eslint-plugin-promise";
import sonarjs from "eslint-plugin-sonarjs";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  eslintConfigPrettier,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      react,
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      promise,
      sonarjs,
      prettier,
    },

    rules: {
      "prettier/prettier": "error",

      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/jsx-props-no-spreading": "off",
      "react/state-in-constructor": "off",
      "react/no-unescaped-entities": "off",

      "react-refresh/only-export-components": "off",

      "import/prefer-default-export": "off",
      "import/no-named-as-default": "off",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",

      "import/order": [
        "error",
        {
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "~/**", group: "parent", position: "before" },
            { pattern: "@*/**", group: "external", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "no-duplicate-imports": "error",

      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-autofocus": "off",

      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",

      "sonarjs/no-useless-catch": "off",
      "class-methods-use-this": "off",
      "no-nested-ternary": "off",
      "consistent-return": "off",
      "array-callback-return": "off",
    },
  },
]);