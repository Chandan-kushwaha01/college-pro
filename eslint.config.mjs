import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// detect environment
const isDev = process.env.NODE_ENV !== "production";

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Disable in dev, enable in prod
      "@typescript-eslint/no-explicit-any": isDev ? "off" : "error",
      "no-console": isDev ? "off" : "warn",
    },
  },
];

export default eslintConfig;
