/**
 * migrate-images-to-r2.mjs
 *
 * WordPressの画像をCloudflare R2に移行し、SupabaseのDBのURLを更新する
 *
 * 使い方:
 *   node scripts/migrate-images-to-r2.mjs          # ドライラン（何も変更しない）
 *   node scripts/migrate-images-to-r2.mjs --run    # 実際に移行する
 *
 * 必要な環境変数 (.env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   R2_ACCOUNT_ID
 *   R2_ACCESS_KEY_ID
 *   R2_SECRET_ACCESS_KEY
 *   R2_BUCKET_NAME
 *   R2_PUBLIC_URL   # 例: https://pub-xxx.r2.dev
 */

import { readFileSync } from "fs";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { createClient } from "@supabase/supabase-js";

// ── .env.local を手動ロード ──────────────────────────────────────────────────
function loadEnv() {
  try {
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
  } catch {
    console.error(".env.local が見つかりません");
    process.exit(1);
  }
}
loadEnv();

// ── 設定 ─────────────────────────────────────────────────────────────────────
const DRY_RUN = !process.argv.includes("--run");
const WP_BASE = "https://nightscape.tokyo/wp-content/uploads";

const R2_ACCOUNT_ID      = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID   = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME     = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL      = process.env.R2_PUBLIC_URL?.replace(/\/$/, ""); // 末尾スラッシュ除去

const SUPABASE_URL       = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ── バリデーション ────────────────────────────────────────────────────────────
const missing = [
  ["R2_ACCOUNT_ID", R2_ACCOUNT_ID],
  ["R2_ACCESS_KEY_ID", R2_ACCESS_KEY_ID],
  ["R2_SECRET_ACCESS_KEY", R2_SECRET_ACCESS_KEY],
  ["R2_BUCKET_NAME", R2_BUCKET_NAME],
  ["R2_PUBLIC_URL", R2_PUBLIC_URL],
  ["NEXT_PUBLIC_SUPABASE_URL", SUPABASE_URL],
  ["SUPABASE_SERVICE_ROLE_KEY", SUPABASE_SERVICE_KEY],
].filter(([, v]) => !v).map(([k]) => k);

if (missing.length > 0) {
  console.error("❌ 以下の環境変数が未設定です:", missing.join(", "));
  process.exit(1);
}

// ── クライアント初期化 ────────────────────────────────────────────────────────
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ── ユーティリティ ────────────────────────────────────────────────────────────

/** WP URLかどうか */
function isWpUrl(url) {
  return typeof url === "string" && url.startsWith(WP_BASE);
}

/** WP URL → R2のキー（例: uploads/2024/09/foo.jpg） */
function wpUrlToR2Key(url) {
  // https://nightscape.tokyo/wp-content/uploads/2024/09/foo.jpg
  // → uploads/2024/09/foo.jpg
  return "uploads" + url.slice(WP_BASE.length);
}

/** R2のキー → 公開URL */
function r2KeyToPublicUrl(key) {
  return `${R2_PUBLIC_URL}/${key}`;
}

/** R2に既に存在するか確認 */
async function existsInR2(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
    return true;
  } catch {
    return false;
  }
}

/** 画像をダウンロードしてR2にアップロード */
async function uploadToR2(wpUrl, r2Key) {
  const res = await fetch(wpUrl, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${wpUrl}`);

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const body = Buffer.from(await res.arrayBuffer());

  await s3.send(new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: r2Key,
    Body: body,
    ContentType: contentType,
    CacheControl: "public, max-age=31536000, immutable",
  }));
}

// ── 統計カウンター ────────────────────────────────────────────────────────────
const stats = { total: 0, uploaded: 0, skipped: 0, failed: 0, dbUpdated: 0 };

/**
 * 1枚の画像を処理する
 * @returns {Promise<string|null>} 新しいR2 URL（変更なしの場合はnull）
 */
async function processImage(wpUrl) {
  stats.total++;
  const r2Key = wpUrlToR2Key(wpUrl);
  const newUrl = r2KeyToPublicUrl(r2Key);

  if (DRY_RUN) {
    console.log(`  [DRY] ${wpUrl}\n       → ${newUrl}`);
    return newUrl;
  }

  // 既にR2に存在する場合はスキップ
  if (await existsInR2(r2Key)) {
    console.log(`  [SKIP] 既存: ${r2Key}`);
    stats.skipped++;
    return newUrl;
  }

  try {
    await uploadToR2(wpUrl, r2Key);
    console.log(`  [OK] ${r2Key}`);
    stats.uploaded++;
    return newUrl;
  } catch (err) {
    console.error(`  [FAIL] ${r2Key}: ${err.message}`);
    stats.failed++;
    return null;
  }
}

// ── 各テーブルの処理 ──────────────────────────────────────────────────────────

/** spots.featured_image */
async function migrateSpotsFeaturedImage() {
  console.log("\n📋 spots.featured_image");
  const { data, error } = await supabase
    .from("spots")
    .select("id, featured_image")
    .like("featured_image", `${WP_BASE}%`);

  if (error) throw error;
  console.log(`  対象: ${data.length}件`);

  for (const row of data) {
    const newUrl = await processImage(row.featured_image);
    if (newUrl && !DRY_RUN && newUrl !== row.featured_image) {
      const { error: ue } = await supabase
        .from("spots")
        .update({ featured_image: newUrl })
        .eq("id", row.id);
      if (ue) console.error(`  [DB ERROR] spots.id=${row.id}:`, ue.message);
      else stats.dbUpdated++;
    }
  }
}

/** spot_images.url */
async function migrateSpotImages() {
  console.log("\n📋 spot_images.url");
  const { data, error } = await supabase
    .from("spot_images")
    .select("id, url")
    .like("url", `${WP_BASE}%`);

  if (error) throw error;
  console.log(`  対象: ${data.length}件`);

  for (const row of data) {
    const newUrl = await processImage(row.url);
    if (newUrl && !DRY_RUN && newUrl !== row.url) {
      const { error: ue } = await supabase
        .from("spot_images")
        .update({ url: newUrl })
        .eq("id", row.id);
      if (ue) console.error(`  [DB ERROR] spot_images.id=${row.id}:`, ue.message);
      else stats.dbUpdated++;
    }
  }
}

/** tags.image_url */
async function migrateTagImages() {
  console.log("\n📋 tags.image_url");
  const { data, error } = await supabase
    .from("tags")
    .select("id, image_url")
    .like("image_url", `${WP_BASE}%`);

  if (error) throw error;
  console.log(`  対象: ${data.length}件`);

  for (const row of data) {
    const newUrl = await processImage(row.image_url);
    if (newUrl && !DRY_RUN && newUrl !== row.image_url) {
      const { error: ue } = await supabase
        .from("tags")
        .update({ image_url: newUrl })
        .eq("id", row.id);
      if (ue) console.error(`  [DB ERROR] tags.id=${row.id}:`, ue.message);
      else stats.dbUpdated++;
    }
  }
}

/** tag_pages.hero_image */
async function migrateTagPageHeroImages() {
  console.log("\n📋 tag_pages.hero_image");
  const { data, error } = await supabase
    .from("tag_pages")
    .select("id, hero_image")
    .like("hero_image", `${WP_BASE}%`);

  if (error) throw error;
  console.log(`  対象: ${data.length}件`);

  for (const row of data) {
    const newUrl = await processImage(row.hero_image);
    if (newUrl && !DRY_RUN && newUrl !== row.hero_image) {
      const { error: ue } = await supabase
        .from("tag_pages")
        .update({ hero_image: newUrl })
        .eq("id", row.id);
      if (ue) console.error(`  [DB ERROR] tag_pages.id=${row.id}:`, ue.message);
      else stats.dbUpdated++;
    }
  }
}

// ── メイン ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("================================================");
  console.log(DRY_RUN
    ? "🔍 ドライラン（変更なし）  ※実行するには --run を付けてください"
    : "🚀 実行モード（R2アップロード＋DB更新）"
  );
  console.log(`   バケット  : ${R2_BUCKET_NAME}`);
  console.log(`   公開URL  : ${R2_PUBLIC_URL}`);
  console.log("================================================");

  await migrateSpotsFeaturedImage();
  await migrateSpotImages();
  await migrateTagImages();
  await migrateTagPageHeroImages();

  console.log("\n================================================");
  console.log("✅ 完了");
  console.log(`   合計      : ${stats.total}件`);
  if (!DRY_RUN) {
    console.log(`   アップロード: ${stats.uploaded}件`);
    console.log(`   スキップ  : ${stats.skipped}件（R2に既存）`);
    console.log(`   失敗      : ${stats.failed}件`);
    console.log(`   DB更新    : ${stats.dbUpdated}件`);
  }
  console.log("================================================");

  if (stats.failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error("予期しないエラー:", err);
  process.exit(1);
});
