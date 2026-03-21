/**
 * WordPress XML Export → Supabase SQL Converter
 *
 * Usage: node scripts/wp-xml-to-sql.mjs /path/to/WordPress.xml
 * Output: supabase/seed.sql
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const xmlPath = process.argv[2] || resolve(__dirname, "../WordPress.2026-03-06.xml");
const outPath = resolve(__dirname, "../supabase/seed.sql");

const xml = readFileSync(xmlPath, "utf8");

// ─── helpers ────────────────────────────────────────────────

/** Escape single quotes for SQL */
function esc(str) {
  if (str == null) return "NULL";
  const s = String(str).trim();
  if (s === "") return "NULL";
  return "'" + s.replace(/'/g, "''") + "'";
}

/** Parse PHP serialized string (basic: a:N:{...} and s:N:"..." and i:N;) */
function phpUnserialize(str) {
  if (!str || !str.startsWith("a:")) return null;
  try {
    const result = {};
    // Match key-value pairs: s:N:"key";s:N:"value"; or s:N:"key";i:N;
    const pairRegex = /s:\d+:"([^"]+)";(?:s:\d+:"([^"]*)"|i:(\d+))/g;
    let m;
    while ((m = pairRegex.exec(str))) {
      result[m[1]] = m[2] !== undefined ? m[2] : parseInt(m[3], 10);
    }
    return result;
  } catch {
    return null;
  }
}

/** Parse PHP serialized array of integers: a:N:{i:0;s:2:"30";i:1;s:2:"24";...} */
function phpUnserializeArray(str) {
  if (!str || !str.startsWith("a:")) return [];
  const items = [];
  const regex = /i:\d+;s:\d+:"(\d+)"/g;
  let m;
  while ((m = regex.exec(str))) {
    items.push(parseInt(m[1], 10));
  }
  return items;
}

// ─── Parse XML items ────────────────────────────────────────

function parseItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml))) {
    const block = match[1];

    const get = (tag) => {
      const m = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
      return m ? m[1] : "";
    };
    const getSimple = (tag) => {
      const m = block.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
      return m ? m[1].trim() : "";
    };
    const getWp = (tag) => {
      const m = block.match(new RegExp(`<wp:${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:${tag}>`));
      return m ? m[1] : "";
    };
    const getWpSimple = (tag) => {
      const m = block.match(new RegExp(`<wp:${tag}>([^<]*)<\\/wp:${tag}>`));
      return m ? m[1].trim() : "";
    };

    // Parse postmeta
    const meta = {};
    const metaRegex = /<wp:postmeta>\s*<wp:meta_key><!\[CDATA\[([^\]]+)\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[([\s\S]*?)\]\]><\/wp:meta_value>\s*<\/wp:postmeta>/g;
    let mm;
    while ((mm = metaRegex.exec(block))) {
      meta[mm[1]] = mm[2];
    }

    // Parse categories and tags
    const categories = [];
    const tags = [];
    const catRegex = /<category domain="(category|post_tag)" nicename="([^"]+)"><!\[CDATA\[([^\]]+)\]\]><\/category>/g;
    let cm;
    while ((cm = catRegex.exec(block))) {
      if (cm[1] === "category") categories.push({ slug: cm[2], name: cm[3] });
      else tags.push({ slug: cm[2], name: cm[3] });
    }

    // wp:attachment_url (CDATA or plain)
    const attachmentUrlM = block.match(/<wp:attachment_url><!\[CDATA\[([\s\S]*?)\]\]><\/wp:attachment_url>/)
      || block.match(/<wp:attachment_url>([^<]+)<\/wp:attachment_url>/);
    const attachmentUrl = attachmentUrlM ? attachmentUrlM[1].trim() : "";

    items.push({
      title: get("title"),
      link: getSimple("link"),
      guid: getSimple("guid") || block.match(/<guid[^>]*>([^<]+)/)?.[1] || "",
      attachmentUrl,
      postId: parseInt(getWpSimple("post_id")) || 0,
      postDate: getWp("post_date"),
      postModified: getWp("post_modified"),
      postName: getWp("post_name"),
      status: getWp("status"),
      postParent: parseInt(getWpSimple("post_parent")) || 0,
      postType: getWp("post_type"),
      content: get("content:encoded"),
      excerpt: get("excerpt:encoded"),
      meta,
      categories,
      tags,
    });
  }
  return items;
}

console.log("Parsing XML...");
const allItems = parseItems(xml);
console.log(`Total items: ${allItems.length}`);

// Separate by type
const posts = allItems.filter((i) => i.postType === "post" && i.status === "publish");
const attachments = allItems.filter((i) => i.postType === "attachment");

console.log(`Published posts: ${posts.length}`);
console.log(`Attachments: ${attachments.length}`);

// ─── Build attachment ID → URL map ──────────────────────────

const attachmentMap = new Map();
for (const att of attachments) {
  // Prefer wp:attachment_url, then _wp_attached_file meta, then guid
  let url = att.attachmentUrl
    || (att.meta._wp_attached_file ? `https://nightscape.tokyo/wp-content/uploads/${att.meta._wp_attached_file}` : "")
    || att.guid;
  // Ensure https
  url = url.replace(/^http:\/\//, "https://");
  attachmentMap.set(att.postId, {
    url,
    alt: att.excerpt || att.content || "",
  });
}

// Load missing attachments from REST API fetch (if available)
try {
  const missingPath = resolve(__dirname, "missing-attachments.json");
  const missing = JSON.parse(readFileSync(missingPath, "utf8"));
  let added = 0;
  for (const [idStr, info] of Object.entries(missing)) {
    const id = parseInt(idStr);
    if (!attachmentMap.has(id)) {
      attachmentMap.set(id, { url: info.url, alt: info.alt || "" });
      added++;
    }
  }
  console.log(`Added ${added} missing attachments from REST API cache`);
} catch { /* missing-attachments.json not found, skip */ }

console.log(`Attachment map size: ${attachmentMap.size}`);

// ─── Collect unique categories and tags ─────────────────────

const categoryMap = new Map(); // slug → name
const tagMap = new Map(); // slug → name

for (const post of posts) {
  for (const cat of post.categories) {
    if (!categoryMap.has(cat.slug)) categoryMap.set(cat.slug, cat.name);
  }
  for (const tag of post.tags) {
    if (!tagMap.has(tag.slug)) tagMap.set(tag.slug, tag.name);
  }
}

console.log(`Categories: ${categoryMap.size}`);
console.log(`Tags: ${tagMap.size}`);

// ─── Determine spot type ────────────────────────────────────

function getSpotType(post) {
  // Check category
  for (const cat of post.categories) {
    if (cat.slug === "event") return "event";
  }
  // Check tags for hotel
  for (const tag of post.tags) {
    if (tag.slug === "hotel") return "hotel";
  }
  // Check meta for hotel-specific fields
  if (post.meta.checkin || post.meta.checkout) return "hotel";
  // Check meta for event-specific fields
  if (post.meta.startDate || post.meta.endDate) return "event";
  return "spot";
}

// ─── Generate SQL ───────────────────────────────────────────

const lines = [];
lines.push("-- ==========================================================");
lines.push("-- nightscape.tokyo Seed Data");
lines.push("-- Generated from WordPress XML export");
lines.push(`-- Date: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`-- Posts: ${posts.length}, Categories: ${categoryMap.size}, Tags: ${tagMap.size}`);
lines.push("-- ==========================================================");
lines.push("");
lines.push("-- Clean existing data (order matters for FK constraints)");
lines.push("TRUNCATE spot_events, spot_hotels, spot_reviews, spot_faqs, spot_images, spot_tags, spots, tags, categories CASCADE;");
lines.push("");

// --- Categories ---
lines.push("-- ─── Categories ─────────────────────────────────────────────");
lines.push("INSERT INTO categories (id, name, slug) VALUES");
const catEntries = [...categoryMap.entries()];
catEntries.forEach(([slug, name], i) => {
  const comma = i < catEntries.length - 1 ? "," : ";";
  lines.push(`  (gen_random_uuid(), ${esc(name)}, ${esc(slug)})${comma}`);
});
lines.push("");

// --- Tags ---
lines.push("-- ─── Tags ───────────────────────────────────────────────────");
lines.push("INSERT INTO tags (id, name, slug) VALUES");
const tagEntries = [...tagMap.entries()];
tagEntries.forEach(([slug, name], i) => {
  const comma = i < tagEntries.length - 1 ? "," : ";";
  lines.push(`  (gen_random_uuid(), ${esc(name)}, ${esc(slug)})${comma}`);
});
lines.push("");

// --- Spots ---
lines.push("-- ─── Spots ──────────────────────────────────────────────────");
lines.push("");

for (const post of posts) {
  const m = post.meta;
  const type = getSpotType(post);
  const cat = post.categories[0]; // primary category

  // Resolve featured image
  const thumbId = parseInt(m._thumbnail_id) || 0;
  const thumb = attachmentMap.get(thumbId);
  const featuredImage = thumb ? thumb.url : null;

  // Parse official link (PHP serialized or plain)
  let officialUrl = null;
  let officialLabel = null;
  if (m.official) {
    const parsed = phpUnserialize(m.official);
    if (parsed) {
      officialUrl = parsed.url || null;
      officialLabel = parsed.title || null;
    } else if (m.official.startsWith("http")) {
      officialUrl = m.official;
    }
  }

  // Parse SNS link
  let snsUrl = null;
  let snsLabel = null;
  if (m.sns) {
    const parsed = phpUnserialize(m.sns);
    if (parsed) {
      snsUrl = parsed.url || null;
      snsLabel = parsed.title || null;
    } else if (m.sns.startsWith("http")) {
      snsUrl = m.sns;
    }
  }

  // Parse relation link
  let relationUrl = null;
  let relationLabel = null;
  if (m.relation) {
    const parsed = phpUnserialize(m.relation);
    if (parsed) {
      relationUrl = parsed.url || null;
      relationLabel = parsed.title || null;
    } else if (m.relation.startsWith("http")) {
      relationUrl = m.relation;
    }
  }

  // Ratings
  const beautiful = m.beautiful ? parseFloat(m.beautiful) : null;
  const access = m.access ? parseFloat(m.access) : null;
  const atmosphere = m.atmosphere ? parseFloat(m.atmosphere) : null;
  const cost = m.little ? parseFloat(m.little) : null;

  // Latitude/Longitude
  const lat = m.latitude ? parseFloat(m.latitude) : null;
  const lng = m.longitude ? parseFloat(m.longitude) : null;

  // Published date
  const publishedAt = post.postDate ? post.postDate.replace(" ", "T") + "+09:00" : null;
  const updatedAt = post.postModified ? post.postModified.replace(" ", "T") + "+09:00" : null;

  lines.push(`-- Post: ${post.title} (${post.postName})`);
  lines.push(`INSERT INTO spots (`);
  lines.push(`  slug, title, type, category_id, content,`);
  lines.push(`  name, lead, report, address,`);
  lines.push(`  official_url, official_label, sns_url, sns_label,`);
  lines.push(`  relation_url, relation_label,`);
  lines.push(`  hours, holiday, money, station, parking, map, height, movie,`);
  lines.push(`  asoview, asoview_02,`);
  lines.push(`  latitude, longitude,`);
  lines.push(`  rating_beautiful, rating_access, rating_atmosphere, rating_cost,`);
  lines.push(`  featured_image, published, published_at, created_at, updated_at`);
  lines.push(`) VALUES (`);
  lines.push(`  ${esc(post.postName)},`);
  lines.push(`  ${esc(post.title)},`);
  lines.push(`  ${esc(type)},`);
  lines.push(`  (SELECT id FROM categories WHERE slug = ${esc(cat?.slug)}),`);
  lines.push(`  ${esc(post.content || null)},`);
  lines.push(`  ${esc(m.name)},`);
  lines.push(`  ${esc(m.lead)},`);
  lines.push(`  ${esc(m.report)},`);
  lines.push(`  ${esc(m.address)},`);
  lines.push(`  ${esc(officialUrl)},`);
  lines.push(`  ${esc(officialLabel)},`);
  lines.push(`  ${esc(snsUrl)},`);
  lines.push(`  ${esc(snsLabel)},`);
  lines.push(`  ${esc(relationUrl)},`);
  lines.push(`  ${esc(relationLabel)},`);
  lines.push(`  ${esc(m.hours)},`);
  lines.push(`  ${esc(m.holiday)},`);
  lines.push(`  ${esc(m.money)},`);
  lines.push(`  ${esc(m.station)},`);
  lines.push(`  ${esc(m.parking)},`);
  lines.push(`  ${esc(m.map)},`);
  lines.push(`  ${esc(m.height)},`);
  lines.push(`  ${esc(m.movie)},`);
  lines.push(`  ${esc(m.asoview)},`);
  lines.push(`  ${esc(m.asoview_02)},`);
  lines.push(`  ${lat},`);
  lines.push(`  ${lng},`);
  lines.push(`  ${beautiful},`);
  lines.push(`  ${access},`);
  lines.push(`  ${atmosphere},`);
  lines.push(`  ${cost},`);
  lines.push(`  ${esc(featuredImage)},`);
  lines.push(`  true,`);
  lines.push(`  ${esc(publishedAt)},`);
  lines.push(`  ${esc(publishedAt)},`);
  lines.push(`  ${esc(updatedAt)}`);
  lines.push(`);`);
  lines.push("");

  // --- spot_tags ---
  if (post.tags.length > 0) {
    for (const tag of post.tags) {
      lines.push(
        `INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = ${esc(post.postName)}), (SELECT id FROM tags WHERE slug = ${esc(tag.slug)}));`
      );
    }
    lines.push("");
  }

  // --- spot_images (from gallery) ---
  const galleryIds = phpUnserializeArray(m.gallery || "");
  if (galleryIds.length > 0) {
    lines.push(`-- Images for ${post.postName}`);
    galleryIds.forEach((attId, idx) => {
      const att = attachmentMap.get(attId);
      if (att) {
        lines.push(
          `INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = ${esc(post.postName)}), ${esc(att.url)}, ${esc(att.alt)}, ${idx});`
        );
      }
    });
    lines.push("");
  }

  // --- spot_faqs ---
  const faqs = [];
  for (let i = 1; i <= 6; i++) {
    const q = m[`FAQ_${i}_q`];
    const a = m[`FAQ_${i}_a`];
    if (q && a) faqs.push({ question: q, answer: a });
  }
  if (faqs.length > 0) {
    lines.push(`-- FAQs for ${post.postName}`);
    faqs.forEach((faq, idx) => {
      lines.push(
        `INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = ${esc(post.postName)}), ${esc(faq.question)}, ${esc(faq.answer)}, ${idx});`
      );
    });
    lines.push("");
  }

  // --- spot_hotels ---
  if (type === "hotel" || m.checkin || m.checkout || m.amenity || m.affiliate_1) {
    const hasHotelData = m.checkin || m.checkout || m.amenity || m.affiliate_1 || m.affiliate_2;
    if (hasHotelData) {
      // Map old field names: rakuten → affiliate_1, jaran → affiliate_2, booking_com → affiliate_3
      const aff1 = m.affiliate_1 || m.rakuten || null;
      const aff2 = m.affiliate_2 || m.jaran || null;
      const aff3 = m.affiliate_3 || m.booking_com || null;
      const aff4 = m.affiliate_4 || null;

      lines.push(`-- Hotel info for ${post.postName}`);
      lines.push(
        `INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = ${esc(post.postName)}), ${esc(m.checkin)}, ${esc(m.checkout)}, ${esc(m.amenity)}, ${esc(aff1)}, ${esc(aff2)}, ${esc(aff3)}, ${esc(aff4)});`
      );
      lines.push("");
    }
  }

  // --- spot_events ---
  if (type === "event" || m.startDate || m.endDate) {
    const hasEventData = m.startDate || m.endDate || m.Place || m.eventHour;
    if (hasEventData) {
      lines.push(`-- Event info for ${post.postName}`);
      lines.push(
        `INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = ${esc(post.postName)}), ${esc(m.startDate)}, ${esc(m.endDate)}, ${esc(m.Place)}, ${esc(m.eventHour)});`
      );
      lines.push("");
    }
  }
}

// ─── Write output ───────────────────────────────────────────

const sql = lines.join("\n");
writeFileSync(outPath, sql, "utf8");
console.log(`\nGenerated: ${outPath}`);
console.log(`SQL size: ${(sql.length / 1024).toFixed(1)} KB`);
console.log(`Lines: ${lines.length}`);
