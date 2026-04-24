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
    // Migration/data scripts and vanilla-JS simulator don't need strict TS rules
    "scripts/**",
    "simulator/**",
  ]),
  // Supabase クエリファイル: 動的クエリの戻り値が any になるのは避けられないため個別に無効化
  {
    files: [
      "src/lib/supabase/queries.ts",
      "src/lib/supabase/queries/shared.ts",
      "src/lib/supabase/queries/spots.ts",
      "src/lib/supabase/queries/categories.ts",
      "src/lib/supabase/queries/tags.ts",
      "src/lib/supabase/queries/tag-pages.ts",
      "src/lib/supabase/queries/articles.ts",
      "src/lib/supabase/queries/maps.ts",
      "src/lib/supabase/queries/site-chrome.ts",
      "src/lib/supabase/queries/search.ts",
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
