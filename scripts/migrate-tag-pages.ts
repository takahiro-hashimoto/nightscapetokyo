/**
 * dummy-tag-data.ts の tagPageContents を Supabase DB に投入するスクリプト
 *
 * Usage: npx tsx scripts/migrate-tag-pages.ts
 */
import { createClient } from "@supabase/supabase-js";
import { tagPageContents } from "../src/lib/dummy-tag-data";
import type { TagPageContent } from "../src/lib/dummy-tag-data";
import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing SUPABASE env vars");
  process.exit(1);
}

const admin = createClient(supabaseUrl, serviceRoleKey);

async function getTagIdBySlug(slug: string): Promise<string | null> {
  const { data } = await admin
    .from("tags")
    .select("id")
    .eq("slug", slug)
    .single();
  return data?.id ?? null;
}

async function getSpotIdBySlug(slug: string): Promise<string | null> {
  const { data } = await admin
    .from("spots")
    .select("id")
    .eq("slug", slug)
    .single();
  return data?.id ?? null;
}

async function migrateTagPage(tagSlug: string, content: TagPageContent) {
  console.log(`\n--- Migrating: ${tagSlug} ---`);

  // 1. tag_id を取得
  const tagId = await getTagIdBySlug(tagSlug);
  if (!tagId) {
    console.warn(`  ⚠ Tag "${tagSlug}" not found in DB, skipping`);
    return;
  }

  // 2. 既存のタグページがあれば削除（再投入のため）
  const { data: existing } = await admin
    .from("tag_pages")
    .select("id")
    .eq("tag_id", tagId)
    .single();

  if (existing) {
    console.log(`  Deleting existing tag page: ${existing.id}`);
    await admin.from("tag_pages").delete().eq("id", existing.id);
  }

  // 3. tag_pages に挿入
  const { data: page, error: pageError } = await admin
    .from("tag_pages")
    .insert({
      tag_id: tagId,
      title: content.title,
      breadcrumb: content.breadcrumb,
      hero_image: content.heroImage ?? null,
      updated_at_label: content.updatedAt,
      pr_notice: content.prNotice,
      lead: content.lead,
      map_heading: content.mapEmbed?.heading ?? null,
      map_intro: content.mapEmbed?.intro ?? null,
      map_iframe_html: content.mapEmbed?.iframeHtml ?? null,
      published: true,
    })
    .select("id")
    .single();

  if (pageError || !page) {
    console.error(`  ✗ Failed to insert tag_page:`, pageError);
    return;
  }
  console.log(`  ✓ tag_page created: ${page.id}`);

  // 4. PRバナー
  if (content.prBanner) {
    const { data: banner, error: bannerError } = await admin
      .from("tag_page_pr_banners")
      .insert({
        tag_page_id: page.id,
        heading: content.prBanner.heading,
        image: content.prBanner.image,
        body: content.prBanner.body,
      })
      .select("id")
      .single();

    if (bannerError) {
      console.error(`  ✗ Failed to insert pr_banner:`, bannerError);
    } else if (banner && content.prBanner.links.length > 0) {
      const linkRows = content.prBanner.links.map((link, i) => ({
        pr_banner_id: banner.id,
        label: link.label,
        href: link.href,
        sort_order: i,
      }));
      const { error: linkError } = await admin
        .from("tag_page_pr_banner_links")
        .insert(linkRows);
      if (linkError) {
        console.error(`  ✗ Failed to insert pr_banner_links:`, linkError);
      } else {
        console.log(`  ✓ pr_banner + ${linkRows.length} links`);
      }
    }
  }

  // 5. セクション + スポット
  for (let si = 0; si < content.sections.length; si++) {
    const section = content.sections[si];

    const { data: sec, error: secError } = await admin
      .from("tag_page_sections")
      .insert({
        tag_page_id: page.id,
        key: section.key,
        heading: section.heading,
        intro: section.intro || null,
        sort_order: si,
      })
      .select("id")
      .single();

    if (secError || !sec) {
      console.error(`  ✗ Failed to insert section "${section.key}":`, secError);
      continue;
    }

    // セクション内スポット
    let spotCount = 0;
    for (let spi = 0; spi < section.spotSlugs.length; spi++) {
      const spotSlug = section.spotSlugs[spi];
      const spotId = await getSpotIdBySlug(spotSlug);
      if (!spotId) {
        console.warn(`  ⚠ Spot "${spotSlug}" not found in DB, skipping`);
        continue;
      }

      const description = content.descriptions[spotSlug] ?? null;

      const { error: spotError } = await admin
        .from("tag_page_section_spots")
        .insert({
          section_id: sec.id,
          spot_id: spotId,
          description,
          sort_order: spi,
        });

      if (spotError) {
        console.error(`  ✗ Failed to insert spot "${spotSlug}":`, spotError);
      } else {
        spotCount++;
      }
    }
    console.log(`  ✓ section "${section.key}": ${spotCount} spots`);
  }

  // 6. FAQ
  if (content.faqs && content.faqs.length > 0) {
    const faqRows = content.faqs.map((faq, i) => ({
      tag_page_id: page.id,
      question: faq.question,
      answer: faq.answer,
      sort_order: i,
    }));
    const { error: faqError } = await admin
      .from("tag_page_faqs")
      .insert(faqRows);
    if (faqError) {
      console.error(`  ✗ Failed to insert faqs:`, faqError);
    } else {
      console.log(`  ✓ ${faqRows.length} FAQs`);
    }
  }

  console.log(`  ✅ Done: ${tagSlug}`);
}

async function main() {
  console.log("=== Tag Pages Migration ===");
  console.log(`Found ${Object.keys(tagPageContents).length} tag pages to migrate\n`);

  for (const [slug, content] of Object.entries(tagPageContents)) {
    await migrateTagPage(slug, content);
  }

  console.log("\n=== Migration Complete ===");
}

main().catch(console.error);
