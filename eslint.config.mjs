import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";
// Next's own bundled Babel-based ESLint parser (the same one eslint-config-next
// wraps as './parser'). It parses TypeScript syntax without invoking the TypeScript
// compiler, so unlike @typescript-eslint/parser it does not depend on -- or get
// blocked by -- the project's installed typescript version.
import nextParser from "next/dist/compiled/babel/eslint-parser.js";
import globals from "globals";

// eslint-config-next (any of its exports: '.', './core-web-vitals', './typescript')
// unconditionally requires the `typescript-eslint` package as soon as it is
// imported, and that package refuses to load at all under TypeScript 7 ("does not
// support TS 7.0" -- confirmed this is not limited to type-aware rules;
// @typescript-eslint/parser throws the same way even just parsing syntax). This
// reconstructs eslint-config-next's base ruleset (React/hooks/a11y/Next-specific
// rules -- the actual content of its 'next' config block) directly from the
// underlying plugins it wraps, without going through its own entrypoint. This is a
// fork of that upstream config, not a smaller subset of it: it deliberately drops
// eslint-config-next/typescript's @typescript-eslint-based rules (the only part
// that behaves differently from the original is that layer), since nothing in that
// ecosystem can run under TS 7 today. Re-adopt eslint-config-next directly once
// typescript-eslint ships TS 7 support:
// https://github.com/typescript-eslint/typescript-eslint/issues/10940
const eslintConfig = defineConfig([
  {
    name: "next",
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: nextParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ["next/babel"],
          caller: {
            supportsTopLevelAwait: true,
          },
        },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // 'core-web-vitals' (not 'recommended') is what eslint-config-next/core-web-vitals
      // actually layers on top: identical rule set, but no-html-link-for-pages and
      // no-sync-scripts are upgraded from warn to error.
      ...nextPlugin.configs["core-web-vitals"].rules,
      "import/no-anonymous-default-export": "warn",
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/jsx-no-target-blank": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
