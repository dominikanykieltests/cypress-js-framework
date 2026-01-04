import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.cypress,
      },
    },
  },

  js.configs.recommended,

  prettierConfig,
];