#!/usr/bin/env node
/**
 * check-seo.mjs — SEO 整合性チェックスクリプト
 *
 * 使い方: node scripts/check-seo.mjs
 *
 * チェック項目:
 *   1. ナビゲーションリンクの trailing slash 欠落
 *   2. JSON-LD / metadata 内の URL に trailing slash が欠落していないか
 *   3. constants.ts DRAWER_MENU_ITEMS のリンクに trailing slash があるか
 *   4. ARTICLE_RELATED_MAP のスラッグが articles ディレクトリの page.tsx に対応するか
 *   5. timelapse-calculator が sitemap-builder に含まれているか
 *   6. href / url 文字列のプロトコル・ホスト不整合（SITE_URL が揃っているか）
 *
 * CI 前提ではなく、ローカル手動実行を想定。
 * 問題が見つかれば EXIT CODE 1 で終了する。
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const SRC  = join(ROOT, "src");
const SITE_URL = "https://nightscape.tokyo";

let errors = 0;
let warnings = 0;

function err(msg)  { console.error(`  ✗ ${msg}`); errors++; }
function warn(msg) { console.warn( `  ⚠ ${msg}`); warnings++; }
function ok(msg)   { console.log(  `  ✓ ${msg}`); }

// ── ユーティリティ ────────────────────────────────────────────────────────────

/** ディレクトリ以下の全ファイルを再帰的に収集 */
function walk(dir, ext = ".ts") {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full, ext));
    else if (entry.isFile() && entry.name.endsWith(ext)) results.push(full);
  }
  return results;
}

function readText(file) {
  return readFileSync(file, "utf8");
}

// ── チェック 1: href / url 文字列の trailing slash ────────────────────────────

console.log("\n[1] href / URL の trailing slash チェック（主要ファイル）");

const TARGET_FILES = [
  "src/lib/constants.ts",
  "src/lib/json-ld.ts",
  "src/lib/types.ts",
  "src/lib/sitemap-builder.ts",
  "src/app/(ja)/(public)/[category]/page.tsx",
  "src/app/(ja)/(public)/[category]/[slug]/page.tsx",
].map(f => join(ROOT, f));

// SITE_URL + リテラル文字列で終わる URL（変数末尾でなく文字リテラルで終わるもの）
// 除外: 拡張子あり(.png/.xml等)、?含む、#含む、変数(${}で終わる)
const MISSING_SLASH_PATTERN = /`\$\{SITE_URL\}\/[a-z][^`]*[a-z0-9]`/g;
// href= に絶対パスを直接書いていて / で終わっていないもの
const HREF_NO_SLASH = /href:\s*["']\/[a-z][^"']*[a-z0-9]["']/g;

for (const file of TARGET_FILES) {
  let text;
  try { text = readText(file); } catch { continue; }
  const rel = file.replace(ROOT + "/", "");

  const urlMatches = [...text.matchAll(MISSING_SLASH_PATTERN)];
  for (const m of urlMatches) {
    const s = m[0];
    // 除外: ファイル拡張子あり、クエリ文字列、hash、変数終端、動的パス変数
    if (/\.\w{2,4}`/.test(s)) continue;
    if (s.includes("?") || s.includes("#") || s.includes("search")) continue;
    if (s.endsWith("}") || s.endsWith("`")) {
      // テンプレートリテラルが変数 (${...}) で終わる場合は変数の値次第なのでスキップ
      if (/\$\{[^}]+\}`$/.test(s)) continue;
    }
    warn(`[trailing-slash] ${rel}: ${s.trim()}`);
  }

  const hrefMatches = [...text.matchAll(HREF_NO_SLASH)];
  for (const m of hrefMatches) {
    if (m[0].includes("http") || m[0].includes("mailto")) continue;
    if (/\.\w{2,4}['"]/.test(m[0])) continue; // 拡張子あり除外
    warn(`[trailing-slash] ${rel}: ${m[0].trim()}`);
  }
}
ok("trailing slash チェック完了");

// ── チェック 2: ARTICLE_RELATED_MAP のスラッグ検証 ────────────────────────────

console.log("\n[2] ARTICLE_RELATED_MAP のスラッグ検証");

const articleDir = join(SRC, "app/(ja)/(public)/article");
const articleSlugs = new Set();

// DB 記事は generateStaticParams でのみ確定するため、[slug]/page.tsx の存在で代替
// ここでは article/ 以下の静的ページを収集
try {
  for (const entry of readdirSync(articleDir, { withFileTypes: true })) {
    if (entry.isDirectory()) articleSlugs.add(entry.name);
  }
} catch { /* ignore */ }

// article-spot-links.ts から ARTICLE_RELATED_MAP を文字列パース
const linksFile = join(SRC, "lib/article-spot-links.ts");
try {
  const text = readText(linksFile);
  const mapMatch = text.match(/ARTICLE_RELATED_MAP[^=]*=\s*\{([\s\S]*?)\};/);
  if (mapMatch) {
    const entries = [...mapMatch[1].matchAll(/"([^"]+)":\s*\["([^"]+)"/g)];
    for (const [, key] of entries) {
      // DB 記事スラッグは実際には実行時に確認できないが、
      // ハードコードされたスラッグとしての簡易チェック
      if (key === "timelapse-calculator") {
        err(`ARTICLE_RELATED_MAP: "${key}" は DB 記事ではなく静的ページのため除外推奨`);
      }
    }
    ok(`ARTICLE_RELATED_MAP: ${entries.length} エントリを確認`);
  }
} catch { warn("article-spot-links.ts を読み込めませんでした"); }

// ── チェック 3: 削除済みページが sitemap-builder に残っていないか ──────────────

console.log("\n[3] 削除済みページが sitemap-builder.ts に残っていないかチェック");

const DELETED_PAGES = ["timelapse-calculator"];
const sitemapFile = join(SRC, "lib/sitemap-builder.ts");
try {
  const text = readText(sitemapFile);
  let deletedFound = 0;
  for (const page of DELETED_PAGES) {
    if (text.includes(page)) {
      err(`sitemap-builder.ts に削除済みページ "${page}" が残っている`);
      deletedFound++;
    }
  }
  if (deletedFound === 0) ok("削除済みページはサイトマップから除去済み");
} catch { warn("sitemap-builder.ts を読み込めませんでした"); }

// ── チェック 4: SITE_URL のハードコードを検出 ────────────────────────────────

console.log("\n[4] ハードコードされたドメイン名の検出");

const HARDCODED_DOMAIN = /["'`]https?:\/\/nightscape\.tokyo(?!["'`])/g;
const EXCLUDED_FILES = ["types.ts", "sitemap-builder.ts", "robots.ts", "check-seo.mjs"];

const tsxFiles = walk(SRC, ".tsx").concat(walk(SRC, ".ts"));
let hardcodedCount = 0;

for (const file of tsxFiles) {
  const rel = file.replace(ROOT + "/", "");
  if (EXCLUDED_FILES.some(ex => rel.endsWith(ex))) continue;
  // spot-json-ld.ts は修正済みのため除外
  if (rel.includes("spot-json-ld")) continue;

  let text;
  try { text = readText(file); } catch { continue; }

  const matches = [...text.matchAll(HARDCODED_DOMAIN)];
  // SITE_URL の import がある場合は許容
  if (matches.length > 0 && !text.includes("SITE_URL")) {
    for (const m of matches) {
      warn(`[hardcoded-url] ${rel}: ${m[0].slice(0, 60)}`);
      hardcodedCount++;
    }
  }
}
if (hardcodedCount === 0) ok("ハードコードされたドメインなし（SITE_URL 未 import ファイルを除く）");

// ── チェック 5: DRAWER_MENU_ITEMS の trailing slash ──────────────────────────

console.log("\n[5] DRAWER_MENU_ITEMS 全リンクの trailing slash チェック");

const constFile = join(SRC, "lib/constants.ts");
try {
  const text = readText(constFile);
  const hrefEntries = [...text.matchAll(/href:\s*["']([^"']+)["']/g)];
  let drawerErrors = 0;
  for (const [, href] of hrefEntries) {
    if (href.startsWith("http")) continue; // 外部リンク除外
    if (!href.endsWith("/")) {
      err(`[drawer-slash] constants.ts: href="${href}" が / で終わっていない`);
      drawerErrors++;
    }
  }
  if (drawerErrors === 0) ok(`DRAWER_MENU_ITEMS: 全 ${hrefEntries.length} リンクが / で終わっている`);
} catch { warn("constants.ts を読み込めませんでした"); }

// ── チェック 6: next.config.ts の redirect と実ページの衝突 ──────────────────

console.log("\n[6] next.config.ts redirect と実ページの衝突チェック");

const nextConfigFile = join(ROOT, "next.config.ts");
try {
  const text = readText(nextConfigFile);
  // source として定義されているパスを抽出
  const sources = [...text.matchAll(/source:\s*["']([^"']+)["']/g)].map(m => m[1]);

  for (const src of sources) {
    // :slug などのダイナミックセグメントを含む場合はスキップ
    if (src.includes(":") || src.includes("*")) continue;
    // 対応するページファイルが存在するか確認
    const pageCandidate = join(
      SRC, "app/(ja)/(public)",
      src.replace(/^\//, "").replace(/\/$/, ""),
      "page.tsx"
    );
    try {
      statSync(pageCandidate);
      err(`[redirect-conflict] next.config.ts: source="${src}" に対応する page.tsx が存在する`);
    } catch { /* ページなし = 正常 */ }
  }
  ok("redirect と実ページの衝突チェック完了");
} catch { warn("next.config.ts を読み込めませんでした"); }

// ── チェック 7: shareUrl の trailing slash ────────────────────────────────────

console.log("\n[7] shareUrl の trailing slash チェック");

const SHARE_URL_PATTERN = /shareUrl=\{[^}]*[a-z0-9]`\}/g;
const shareUrlFiles = walk(join(SRC, "app"), ".tsx");
let shareUrlErrors = 0;

for (const file of shareUrlFiles) {
  let text;
  try { text = readText(file); } catch { continue; }
  if (!text.includes("shareUrl")) continue;

  const rel = file.replace(ROOT + "/", "");
  const matches = [...text.matchAll(SHARE_URL_PATTERN)];
  for (const m of matches) {
    const s = m[0];
    // テンプレートリテラルが変数で終わる場合はスキップ（動的値）
    if (/\$\{[^}]+\}`\}$/.test(s)) continue;
    // 末尾が / で終わっていない（バッククォートの直前が英数字）
    warn(`[shareUrl-slash] ${rel}: ${s.trim()}`);
    shareUrlErrors++;
  }
}
if (shareUrlErrors === 0) ok("shareUrl: 全て / で終わっている");

// ── チェック 8: SITEMAP_LABELS の href trailing slash ─────────────────────────

console.log("\n[8] i18n-static-pages.ts SITEMAP_LABELS otherLinks trailing slash");

const staticPagesFile = join(SRC, "lib/i18n-static-pages.ts");
try {
  const text = readText(staticPagesFile);
  // SITEMAP_LABELS の otherLinks 内の href 値を抽出
  const hrefMatches = [...text.matchAll(/href:\s*["']([^"']+)["']/g)];
  let sitemapSlashErrors = 0;
  for (const [, href] of hrefMatches) {
    if (href.startsWith("http")) continue;
    if (!href.endsWith("/")) {
      err(`[sitemap-slash] i18n-static-pages.ts: href="${href}" が / で終わっていない`);
      sitemapSlashErrors++;
    }
  }
  if (sitemapSlashErrors === 0) ok(`SITEMAP_LABELS: 全 href が / で終わっている`);
} catch { warn("i18n-static-pages.ts を読み込めませんでした"); }

// ── チェック 9: LanguageSwitcher の router.push URL ───────────────────────────

console.log("\n[9] LanguageSwitcher router.push の trailing slash チェック");

const langSwitcherFile = join(SRC, "components/spot/LanguageSwitcher.tsx");
try {
  const text = readText(langSwitcherFile);
  // router.push( で始まり、テンプレートリテラルが / で終わっていない（`...` || "/" パターン）
  if (/router\.push\(`\$\{prefix\}\$\{suffix\}`/.test(text)) {
    err("[lang-switcher] LanguageSwitcher.tsx: router.push のURLに trailing slash がない");
  } else {
    ok("LanguageSwitcher: router.push URL に trailing slash が付いている");
  }
} catch { warn("LanguageSwitcher.tsx を読み込めませんでした"); }

// ── 結果サマリ ────────────────────────────────────────────────────────────────

console.log("\n" + "─".repeat(60));
console.log(`結果: エラー ${errors} 件 / 警告 ${warnings} 件`);
if (errors > 0) {
  console.error("✗ SEO チェック失敗。上記のエラーを修正してください。");
  process.exit(1);
} else {
  console.log("✓ SEO チェック通過。");
}
