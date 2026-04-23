import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Supabase クエリファイル: 動的クエリの戻り値が any になるのは避けられないため個別に無効化
  {
    files: [
      "src/lib/supabase/queries.ts",
      "src/lib/sitemap-builder.ts",
      "src/app/admin/spots/translate-action.ts",
      "scripts/translate-all-spots.ts",
      "scripts/translate-area-spots.ts",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);

export default eslintConfig;
