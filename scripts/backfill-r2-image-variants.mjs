/*
 * R2バケット内の既存画像すべてに、next/image カスタム loader 用の
 * 幅別 webp バリアント（<key>.w<幅>.webp）を生成してアップロードする。
 *
 * 実行方法:
 *   node --env-file=.env.local scripts/backfill-r2-image-variants.mjs
 *
 * - 冪等: 既に存在するバリアントはスキップするので、中断しても再実行すればよい
 * - 非破壊: 既存オブジェクトの上書き・削除は一切しない（新規キーの追加のみ）
 * - 対象: .jpg / .jpeg / .png / .webp（.gif とバリアント自身は除外）
 *
 * このスクリプトの完了後に next.config.ts で images.loader を有効化すること。
 * （先に有効化するとバリアント未生成の画像が404になる）
 */
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import sharp from "sharp";

// src/lib/image-variants.ts と同値に保つこと（.mjs から .ts を import できないため重複定義）
const VARIANT_WIDTHS = [180, 256, 384, 640, 828, 960, 1280, 1920];
const VARIANT_QUALITY = 75;
const variantKey = (key, width) => `${key}.w${width}.webp`;

const IMG_RE = /\.(jpe?g|png|webp)$/i;
const VARIANT_RE = /\.w\d+\.webp$/i;
const CONCURRENCY = 6;
const IMMUTABLE_CACHE = "public, max-age=31536000, immutable";

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME } = process.env;
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error("R2_* 環境変数が不足しています。--env-file=.env.local を付けて実行してください。");
  process.exit(1);
}

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

async function listAllKeys() {
  const keys = new Set();
  let token;
  do {
    const res = await s3.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET_NAME, ContinuationToken: token })
    );
    for (const o of res.Contents ?? []) keys.add(o.Key);
    token = res.NextContinuationToken;
  } while (token);
  return keys;
}

async function processKey(key, missingWidths) {
  const obj = await s3.send(new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }));
  const buf = Buffer.from(await obj.Body.transformToByteArray());
  const base = sharp(buf, { failOn: "none" }).rotate();

  await Promise.all(
    missingWidths.map(async (width) => {
      const out = await base
        .clone()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: VARIANT_QUALITY })
        .toBuffer();
      await s3.send(
        new PutObjectCommand({
          Bucket: R2_BUCKET_NAME,
          Key: variantKey(key, width),
          Body: out,
          ContentType: "image/webp",
          CacheControl: IMMUTABLE_CACHE,
        })
      );
    })
  );
}

const allKeys = await listAllKeys();
const sources = [...allKeys].filter((k) => IMG_RE.test(k) && !VARIANT_RE.test(k));

const todo = sources
  .map((key) => ({
    key,
    missing: VARIANT_WIDTHS.filter((w) => !allKeys.has(variantKey(key, w))),
  }))
  .filter((t) => t.missing.length > 0);

console.log(
  `対象画像: ${sources.length}件 / うち未生成あり: ${todo.length}件（バリアント${todo.reduce((s, t) => s + t.missing.length, 0)}個を生成）`
);

let done = 0;
let failed = 0;
const failures = [];
const queue = [...todo];

async function worker() {
  for (;;) {
    const item = queue.shift();
    if (!item) return;
    try {
      await processKey(item.key, item.missing);
    } catch (err) {
      failed++;
      failures.push(item.key);
      console.error(`NG: ${item.key}: ${err.message}`);
    }
    done++;
    if (done % 50 === 0) console.log(`進捗: ${done}/${todo.length}（失敗 ${failed}）`);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log(`完了: ${done}/${todo.length}（失敗 ${failed}）`);
if (failures.length) {
  console.log("失敗キー一覧:");
  for (const k of failures) console.log(`  ${k}`);
  process.exit(2);
}
