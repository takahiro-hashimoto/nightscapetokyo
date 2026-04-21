/**
 * compress-r2-images.mjs
 *
 * R2 上の画像を一括ダウンロード → sharp で WebP 圧縮 → 同じパスに再アップロード
 *
 * 使い方:
 *   node scripts/compress-r2-images.mjs             # ドライラン（何もアップロードしない）
 *   node scripts/compress-r2-images.mjs --run       # 実際に圧縮・再アップロード
 *   node scripts/compress-r2-images.mjs --run --quality=80  # 品質指定（デフォルト75）
 *
 * 前提:
 *   npm install sharp @aws-sdk/client-s3
 *
 * 必要な環境変数 (.env.local):
 *   R2_ACCOUNT_ID
 *   R2_ACCESS_KEY_ID
 *   R2_SECRET_ACCESS_KEY
 *   R2_BUCKET_NAME
 *   R2_PUBLIC_URL   # 例: https://pub-xxx.r2.dev
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { readFileSync } from "fs";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";

// ── 引数パース ──────────────────────────────────────────────────────────────
const isDryRun = !process.argv.includes("--run");
const qualityArg = process.argv.find((a) => a.startsWith("--quality="));
const QUALITY = qualityArg ? parseInt(qualityArg.split("=")[1]) : 75;
const SIZE_THRESHOLD_KB = 150; // これ以上のファイルのみ対象

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

// ── R2 クライアント ──────────────────────────────────────────────────────────
const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
const BUCKET = process.env.R2_BUCKET_NAME;
const PUBLIC_URL = process.env.R2_PUBLIC_URL; // https://pub-xxx.r2.dev

// ── Supabase から画像 URL 一覧を取得 ────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function fetchImageUrls() {
  const urls = new Set();

  // featured_image
  const { data: spots } = await supabase
    .from("spots")
    .select("featured_image, images")
    .not("featured_image", "is", null);

  for (const spot of spots ?? []) {
    if (spot.featured_image?.startsWith(PUBLIC_URL)) urls.add(spot.featured_image);
    if (Array.isArray(spot.images)) {
      for (const img of spot.images) {
        const url = typeof img === "string" ? img : img?.url;
        if (url?.startsWith(PUBLIC_URL)) urls.add(url);
      }
    }
  }

  return [...urls];
}

// ── URL → R2 キー変換 ────────────────────────────────────────────────────────
function urlToKey(url) {
  return url.replace(PUBLIC_URL + "/", "");
}

// ── 圧縮処理 ─────────────────────────────────────────────────────────────────
async function compressBuffer(buffer, originalUrl) {
  const meta = await sharp(buffer).metadata();
  const originalKB = Math.round(buffer.length / 1024);

  // 既に WebP/AVIF なら品質だけ下げてそのまま返す
  const isAlreadyModern = ["webp", "avif"].includes(meta.format);

  const compressed = await sharp(buffer)
    .webp({ quality: QUALITY })
    .toBuffer();

  const compressedKB = Math.round(compressed.length / 1024);

  return {
    buffer: compressed,
    contentType: "image/webp",
    originalKB,
    compressedKB,
    format: meta.format,
  };
}

// ── メイン ───────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🔍 Supabase から画像 URL を取得中...`);
  const urls = await fetchImageUrls();
  console.log(`📦 対象候補: ${urls.length} 件\n`);

  if (isDryRun) {
    console.log("⚠️  ドライランモード（--run を付けると実際に処理されます）\n");
  }

  let skipped = 0, processed = 0, errors = 0;
  let totalSavedKB = 0;

  for (const url of urls) {
    const key = urlToKey(url);

    try {
      // R2 から取得
      const { Body, ContentLength } = await r2.send(
        new GetObjectCommand({ Bucket: BUCKET, Key: key })
      );
      const chunks = [];
      for await (const chunk of Body) chunks.push(chunk);
      const buffer = Buffer.concat(chunks);
      const sizeKB = Math.round(buffer.length / 1024);

      if (sizeKB < SIZE_THRESHOLD_KB) {
        console.log(`⏭  スキップ (${sizeKB}KB < ${SIZE_THRESHOLD_KB}KB): ${key}`);
        skipped++;
        continue;
      }

      // 圧縮
      const result = await compressBuffer(buffer);
      const savedKB = result.originalKB - result.compressedKB;
      totalSavedKB += savedKB;

      console.log(
        `✅ ${key}\n   ${result.format} ${result.originalKB}KB → webp ${result.compressedKB}KB (-${savedKB}KB)`
      );

      if (!isDryRun) {
        await r2.send(
          new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: result.buffer,
            ContentType: result.contentType,
            CacheControl: "public, max-age=31536000",
          })
        );
      }

      processed++;
    } catch (err) {
      console.error(`❌ エラー: ${key}\n   ${err.message}`);
      errors++;
    }
  }

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━
処理: ${processed} 件
スキップ: ${skipped} 件
エラー: ${errors} 件
削減合計: 約 ${Math.round(totalSavedKB / 1024)} MB
${isDryRun ? "※ ドライランのため実際のアップロードはしていません" : "✅ R2 へのアップロード完了"}
━━━━━━━━━━━━━━━━━━━━━━━━━━`);
}

main().catch((e) => { console.error(e); process.exit(1); });
