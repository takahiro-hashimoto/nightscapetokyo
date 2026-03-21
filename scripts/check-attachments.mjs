import { readFileSync } from "fs";

const xml = readFileSync("/Users/takahiro/Downloads/WordPress.2026-03-06.xml", "utf8");

// Check wp:attachment_url tag
const count1 = (xml.match(/wp:attachment_url/g) || []).length;
console.log("wp:attachment_url occurrences:", count1);

// Build attachment map from ALL possible sources
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const attMap = new Map();
let match;

while ((match = itemRegex.exec(xml))) {
  const block = match[1];
  if (block.indexOf("CDATA[attachment]") === -1) continue;

  const idM = block.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
  if (!idM) continue;
  const id = parseInt(idM[1]);

  const guid = block.match(/<guid[^>]*>([^<]+)/);
  const attUrl = block.match(/<wp:attachment_url>([\s\S]*?)<\/wp:attachment_url>/);
  const fileM = block.match(/_wp_attached_file\]\]>[\s\S]*?<!\[CDATA\[([\s\S]*?)\]\]>/);
  const altM = block.match(/<excerpt:encoded><!\[CDATA\[([\s\S]*?)\]\]>/);

  attMap.set(id, {
    guid: guid ? guid[1] : null,
    attUrl: attUrl ? attUrl[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : null,
    file: fileM ? fileM[1] : null,
    alt: altM ? altM[1] : "",
  });
}

console.log("Attachment map size:", attMap.size);

// Show first 3 samples
const sample = [...attMap.entries()].slice(0, 3);
for (const [id, info] of sample) {
  console.log(`\nID: ${id}`);
  console.log("  guid:", info.guid);
  console.log("  attUrl:", info.attUrl);
  console.log("  file:", info.file);
  console.log("  alt:", info.alt?.substring(0, 50));
}

// Now check: can we derive URLs for missing IDs from WordPress URL pattern?
// If _wp_attached_file exists, the URL is: https://nightscape.tokyo/wp-content/uploads/{file}
// Check how many have _wp_attached_file
let withFile = 0;
for (const [, info] of attMap) {
  if (info.file) withFile++;
}
console.log(`\nAttachments with _wp_attached_file: ${withFile}/${attMap.size}`);
