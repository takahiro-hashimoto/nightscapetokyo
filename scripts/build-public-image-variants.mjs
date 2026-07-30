/*
 * /public/images 配下のローカル画像から、next/image 用の幅別 webp を事前生成する。
 *
 * R2 の画像は scripts/backfill-r2-image-variants.mjs が同じ命名規則
 * (`<元パス>.w<幅>.webp`) でバリアントを持っているが、ローカル画像は
 * src/lib/image-loader.ts が素通ししていたため、80px 枠のタグタイルに
 * 500x500 / 200-400KB の JPEG がそのまま配信されていた。
 *
 * 生成物はコミットする（ビルド時に sharp を走らせない）。
 * 元画像を差し替えたら `node scripts/build-public-image-variants.mjs` を再実行すること。
 */
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

// src/lib/image-loader.ts の LOCAL_VARIANT_DIRS と一致させること
const TARGET_DIRS = ["public/images/tag"];
// タグタイルは sizes="80px"。DPR 1x/2x/3x を賄う幅だけ用意する
const WIDTHS = [180, 256, 384];

let made = 0;
let skipped = 0;

for (const dir of TARGET_DIRS) {
  if (!existsSync(dir)) continue;
  for (const file of await readdir(dir)) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const src = path.join(dir, file);
    for (const w of WIDTHS) {
      const out = `${src}.w${w}.webp`;
      if (existsSync(out)) {
        skipped++;
        continue;
      }
      await sharp(src).resize(w, w, { fit: "cover" }).webp({ quality: 78 }).toFile(out);
      const { size } = await stat(out);
      console.log(`${out}  ${(size / 1024).toFixed(1)}KB`);
      made++;
    }
  }
}

console.log(`\ngenerated=${made} skipped=${skipped}`);
