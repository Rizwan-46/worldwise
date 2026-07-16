import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["warn", { enforceDynamicLinks: "always" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
