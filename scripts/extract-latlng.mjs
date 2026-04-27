/**
 * spots テーブルの map (iframe HTML) から緯度・経度を抽出して
 * latitude / longitude カラムに格納するスクリプト
 *
 * Usage: node scripts/extract-latlng.mjs
 *   --dry-run  実際には更新しない（デフォルト）
 *   --execute  実際にDBを更新する
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envFile = readFileSync(resolve(__dirname, "../.env.local"), "utf-8");
for (const line of envFile.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const dryRun = !process.argv.includes("--execute");

/**
 * Google Maps embed の pb パラメータから緯度・経度を抽出
 *
 * 優先順位:
 * 1. !8m2!3d<lat>!4d<lng> — 場所詳細セクションの正確なマーカー座標
 * 2. !2d<lng> / !3d<lat>  — カメラ中心座標（マーカーから微妙にずれる場合あり）
 */
function extractLatLng(iframeHtml) {
  if (!iframeHtml) return null;

  // パターン1: 場所の正確な座標 (!8m2!3d<lat>!4d<lng>)
  const placeMatch = iframeHtml.match(/!8m2!3d(-?[\d.]+)!4d(-?[\d.]+)/);
  if (placeMatch) {
    return validate(parseFloat(placeMatch[1]), parseFloat(placeMatch[2]));
  }

  // パターン2: カメラ中心座標にフォールバック
  const lngMatch = iframeHtml.match(/!2d(-?[\d.]+)/);
  const latMatch = iframeHtml.match(/!3d(-?[\d.]+)/);

  if (!lngMatch || !latMatch) return null;

  return validate(parseFloat(latMatch[1]), parseFloat(lngMatch[1]));
}

function validate(latitude, longitude) {
  // 日本の範囲チェック (大まかに)
  if (latitude < 20 || latitude > 50 || longitude < 120 || longitude > 155) {
    console.warn(`  ⚠ 範囲外の座標: lat=${latitude}, lng=${longitude}`);
    return null;
  }
  return { latitude, longitude };
}

async function main() {
  console.log(dryRun ? "🔍 ドライラン (--execute で実行)\n" : "🚀 実行モード\n");

  // map カラムを持つ全スポットを取得
  const { data: spots, error } = await supabase
    .from("spots")
    .select("id, slug, title, map, latitude, longitude")
    .order("slug");

  if (error) {
    console.error("取得エラー:", error.message);
    process.exit(1);
  }

  console.log(`全 ${spots.length} 件のスポット\n`);

  let updated = 0;
  let skipped = 0;
  let noMap = 0;
  let parseFail = 0;
  let alreadySet = 0;

  for (const spot of spots) {
    // map が空
    if (!spot.map) {
      noMap++;
      continue;
    }

    // 既に緯度経度が設定済み
    if (spot.latitude != null && spot.longitude != null) {
      alreadySet++;
      continue;
    }

    const coords = extractLatLng(spot.map);

    if (!coords) {
      parseFail++;
      console.log(`✗ パース失敗: ${spot.slug} (${spot.title})`);
      continue;
    }

    console.log(
      `✓ ${spot.slug}: lat=${coords.latitude}, lng=${coords.longitude}`
    );

    if (!dryRun) {
      const { error: updateError } = await supabase
        .from("spots")
        .update({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
        .eq("id", spot.id);

      if (updateError) {
        console.error(`  更新エラー (${spot.slug}):`, updateError.message);
        skipped++;
        continue;
      }
    }

    updated++;
  }

  console.log("\n--- 結果 ---");
  console.log(`更新${dryRun ? "対象" : "済み"}: ${updated}`);
  console.log(`設定済み(スキップ): ${alreadySet}`);
  console.log(`map なし: ${noMap}`);
  console.log(`パース失敗: ${parseFail}`);
  if (skipped > 0) console.log(`更新エラー: ${skipped}`);

  if (dryRun && updated > 0) {
    console.log("\n→ 問題なければ node scripts/extract-latlng.mjs --execute で実行");
  }
}

main().catch(console.error);
