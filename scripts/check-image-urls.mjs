/**
 * check-image-urls.mjs
 * SupabaseのDBに入っているWordPress画像URLを確認する
 * node scripts/check-image-urls.mjs
 */

import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

function loadEnv() {
  const raw = readFileSync(".env.local", "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnv();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const WP_BASE = "https://nightscape.tokyo/wp-content/uploads";
// -150x150.jpg / -1024x683.jpg などのパターン
const SIZE_SUFFIX_RE = /-\d+x\d+(\.\w+)$/;

async function checkTable(table, column) {
  const { data, error } = await supabase
    .from(table)
    .select(`id, ${column}`)
    .like(column, `${WP_BASE}%`);

  if (error) {
    console.error(`[${table}] エラー:`, error.message);
    return;
  }

  const withSuffix = data.filter(row => SIZE_SUFFIX_RE.test(row[column]));
  const normal = data.filter(row => !SIZE_SUFFIX_RE.test(row[column]));

  console.log(`\n📋 ${table}.${column}  合計: ${data.length}件`);
  console.log(`   ✅ オリジナルURL  : ${normal.length}件`);
  console.log(`   ⚠️  サイズ付きURL : ${withSuffix.length}件`);

  if (withSuffix.length > 0) {
    console.log("\n   サイズ付きURLの一覧:");
    for (const row of withSuffix) {
      const url = row[column];
      const fixed = url.replace(SIZE_SUFFIX_RE, "$1");
      console.log(`   ID: ${row.id}`);
      console.log(`     現在: ${url}`);
      console.log(`     修正: ${fixed}`);
    }
  }
}

async function main() {
  console.log("================================================");
  console.log("🔍 DB内のWordPress画像URLを確認");
  console.log("================================================");

  await checkTable("spots", "featured_image");
  await checkTable("spot_images", "url");
  await checkTable("tags", "image_url");
  await checkTable("tag_pages", "hero_image");

  console.log("\n================================================");
  console.log("✅ 確認完了");
  console.log("================================================");
}

main().catch(err => {
  console.error("エラー:", err);
  process.exit(1);
});
