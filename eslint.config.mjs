import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import controlRulesPlugin from "./scripts/eslint-rules/control-rules.mjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Custom rules for Control
  {
    files: [
      "packages/console/ui/**/*.{ts,tsx}",
      "apps/control/app/**/*.{ts,tsx}",
    ],
    plugins: {
      control: controlRulesPlugin,
    },
    rules: {
      "control/require-use-client-when-using-hooks": "error",
      "control/no-inline-border-radius": "error",
      "control/require-panel-button-shape-in-footers": "error",
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
