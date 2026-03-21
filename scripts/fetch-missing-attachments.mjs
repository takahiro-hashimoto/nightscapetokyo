/**
 * Fetch missing attachment URLs from WordPress REST API
 * and save to a JSON map file for the main converter to use.
 *
 * Usage: node scripts/fetch-missing-attachments.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const xmlPath = process.argv[2] || "/Users/takahiro/Downloads/WordPress.2026-03-06.xml";
const outPath = resolve(__dirname, "missing-attachments.json");

const xml = readFileSync(xmlPath, "utf8");

// Build set of attachment IDs in XML
const xmlAttIds = new Set();
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
let match;
while ((match = itemRegex.exec(xml))) {
  const block = match[1];
  if (block.indexOf("CDATA[attachment]") === -1) continue;
  const idM = block.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
  if (idM) xmlAttIds.add(parseInt(idM[1]));
}

// Collect all referenced IDs from galleries and thumbnails
const referencedIds = new Set();
const itemRegex2 = /<item>([\s\S]*?)<\/item>/g;
while ((match = itemRegex2.exec(xml))) {
  const block = match[1];
  if (block.indexOf("CDATA[post]") === -1) continue;

  // Gallery
  const galleryM = block.match(/<wp:meta_key><!\[CDATA\[gallery\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[([\s\S]*?)\]\]><\/wp:meta_value>/);
  if (galleryM) {
    const regex = /i:\d+;s:\d+:"(\d+)"/g;
    let m;
    while ((m = regex.exec(galleryM[1]))) referencedIds.add(parseInt(m[1]));
  }

  // Thumbnail
  const thumbM = block.match(/<wp:meta_key><!\[CDATA\[_thumbnail_id\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[(\d+)\]\]><\/wp:meta_value>/);
  if (thumbM) referencedIds.add(parseInt(thumbM[1]));
}

// Find missing IDs
const missingIds = [...referencedIds].filter((id) => !xmlAttIds.has(id));
console.log(`Referenced: ${referencedIds.size}, In XML: ${xmlAttIds.size}, Missing: ${missingIds.length}`);

if (missingIds.length === 0) {
  console.log("No missing attachments!");
  process.exit(0);
}

// Fetch from WordPress REST API in batches
const WP_API = "https://nightscape.tokyo/wp-json/wp/v2/media";
const BATCH_SIZE = 100;
const result = {};
let fetched = 0;

for (let i = 0; i < missingIds.length; i += BATCH_SIZE) {
  const batch = missingIds.slice(i, i + BATCH_SIZE);
  const include = batch.join(",");
  const url = `${WP_API}?include=${include}&per_page=${BATCH_SIZE}&_fields=id,source_url,alt_text`;

  console.log(`Fetching batch ${Math.floor(i / BATCH_SIZE) + 1}... (${batch.length} IDs)`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  HTTP ${res.status}: ${res.statusText}`);
      continue;
    }
    const data = await res.json();
    for (const item of data) {
      result[item.id] = {
        url: item.source_url,
        alt: item.alt_text || "",
      };
      fetched++;
    }
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}

console.log(`Fetched ${fetched}/${missingIds.length} missing attachments`);
writeFileSync(outPath, JSON.stringify(result, null, 2), "utf8");
console.log(`Saved to: ${outPath}`);
