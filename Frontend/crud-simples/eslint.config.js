import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^"]],
        },
      ],
      "simple-import-sort/exports": "error",

      "react-hooks/set-state-in-effect": "off",
      "react-refresh/only-export-components": "off",

      "no-trailing-spaces": "error",

      "eol-last": ["error", "always"],

      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],

      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "React",
        },
      ],
    },
  },
])
