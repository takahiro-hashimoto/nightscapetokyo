#!/usr/bin/env node
/**
 * Vercel 版と Cloudflare 版の出力を突き合わせる。
 *
 *   node scripts/compare-deployments.mjs https://nightscape-tokyo.<sub>.workers.dev
 *
 * サイトマップから全URLを取り、本文テキスト・タイトル・ステータスを比較する。
 * 日付や広告など環境で変わる部分はノイズになるため、差分は文字数と抜粋で示す。
 */
const BASE_A = "https://nightscape.tokyo";
const BASE_B = process.argv[2];
if (!BASE_B) {
  console.error("使い方: node scripts/compare-deployments.mjs <CloudflareのURL>");
  process.exit(1);
}

const LIMIT = Number(process.env.LIMIT ?? 60);   // 既定は代表60本。全件は LIMIT=9999
const CONCURRENCY = 6;

async function text(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    const body = res.status < 300 ? await res.text() : "";
    return { status: res.status, location: res.headers.get("location") ?? "", body };
  } catch (e) {
    return { status: 0, location: "", body: "", error: String(e) };
  }
}

const strip = (html) => {
  const m = html.match(/<main[\s\S]*?<\/main>|<article[\s\S]*?<\/article>/);
  return (m ? m[0] : html)
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};
const title = (html) => (html.match(/<title>([^<]*)<\/title>/) || [, ""])[1];

async function sitemapUrls() {
  const idx = await text(`${BASE_A}/sitemap_index.xml`);
  const maps = [...idx.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const m of maps) {
    const sm = await text(m);
    urls.push(...[...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  }
  return [...new Set(urls)];
}

const urls = (await sitemapUrls()).slice(0, LIMIT);
console.log(`比較対象: ${urls.length} ページ\n`);

let same = 0;
const diffs = [];
let i = 0;
async function worker() {
  while (i < urls.length) {
    const u = urls[i++];
    const path = u.replace(BASE_A, "");
    const [a, b] = await Promise.all([text(BASE_A + path), text(BASE_B + path)]);
    const ta = strip(a.body), tb = strip(b.body);
    if (a.status === b.status && ta === tb && title(a.body) === title(b.body)) { same++; continue; }
    diffs.push({ path, status: [a.status, b.status], len: [ta.length, tb.length],
                 title: [title(a.body), title(b.body)] });
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

console.log(`一致: ${same} / ${urls.length}`);
console.log(`差分: ${diffs.length}\n`);
for (const d of diffs.slice(0, 25)) {
  console.log(`  ${d.path}`);
  if (d.status[0] !== d.status[1]) console.log(`    ステータス: ${d.status[0]} → ${d.status[1]}`);
  if (d.len[0] !== d.len[1]) console.log(`    本文字数:   ${d.len[0]} → ${d.len[1]}`);
  if (d.title[0] !== d.title[1]) console.log(`    タイトル:   ${d.title[0]}\n              → ${d.title[1]}`);
}
if (diffs.length > 25) console.log(`  … 他 ${diffs.length - 25} 件`);
