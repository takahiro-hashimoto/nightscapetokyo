import { createClient } from "@supabase/supabase-js";
import { SITE_URL, ALL_LOCALE_SLUGS } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getDb() {
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Row = Record<string, any>;

const LOCALE_HREFLANG: Record<string, string> = {
  en: "en",
  ko: "ko",
  tw: "zh-Hant",
  cn: "zh-Hans",
};

type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  /** hreflang alternates: { hreflang: url } */
  alternates?: { hreflang: string; href: string }[];
};

/**
 * Build hreflang alternates for a given JA path.
 * Includes ja + x-default (same URL) + all locale versions.
 */
function buildAlternates(jaPath: string, localePrefix?: boolean): SitemapUrl["alternates"] {
  const jaUrl = `${SITE_URL}${jaPath}`;
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: jaUrl },
    { hreflang: "x-default", href: jaUrl },
  ];

  if (localePrefix !== false) {
    for (const slug of ALL_LOCALE_SLUGS) {
      const hl = LOCALE_HREFLANG[slug];
      if (hl) {
        alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}${jaPath}` });
      }
    }
  }

  return alts;
}

async function buildEntries(): Promise<SitemapUrl[]> {
  const db = await getDb();
  const urls: SitemapUrl[] = [];
  const now = new Date().toISOString();

  // ── トップページ ──
  const topAlts: SitemapUrl["alternates"] = [
    { hreflang: "ja", href: SITE_URL },
    { hreflang: "x-default", href: SITE_URL },
  ];
  for (const slug of ALL_LOCALE_SLUGS) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) topAlts.push({ hreflang: hl, href: `${SITE_URL}/${slug}` });
  }
  urls.push({ loc: SITE_URL, lastmod: now, changefreq: "daily", priority: 1.0, alternates: topAlts });

  // ── 固定ページ (JA + 4言語) ──
  const staticPages = [
    "/about", "/contact", "/guidelines", "/privacy-policy",
    "/caution", "/links", "/sitemap", "/recommend",
    "/time-lapse", "/search",
  ];
  for (const page of staticPages) {
    urls.push({
      loc: `${SITE_URL}${page}`,
      changefreq: "monthly",
      priority: 0.5,
      alternates: buildAlternates(page),
    });
    // ローカル版
    for (const slug of ALL_LOCALE_SLUGS) {
      urls.push({
        loc: `${SITE_URL}/${slug}${page}`,
        changefreq: "monthly",
        priority: 0.4,
        alternates: buildAlternates(page),
      });
    }
  }

  // simulator (JA only)
  urls.push({ loc: `${SITE_URL}/simulator`, changefreq: "monthly", priority: 0.5 });

  if (!db) return urls;

  // ── エリア（カテゴリ）ページ ──
  const { data: categories } = await db
    .from("categories")
    .select("slug") as { data: Row[] | null };

  for (const cat of categories ?? []) {
    const jaPath = `/${cat.slug}`;
    urls.push({
      loc: `${SITE_URL}${jaPath}`,
      changefreq: "weekly",
      priority: 0.8,
      alternates: buildAlternates(jaPath),
    });
    for (const slug of ALL_LOCALE_SLUGS) {
      urls.push({
        loc: `${SITE_URL}/${slug}${jaPath}`,
        changefreq: "weekly",
        priority: 0.7,
        alternates: buildAlternates(jaPath),
      });
    }
  }

  // ── スポット詳細ページ ──
  const { data: spots } = await db
    .from("spots")
    .select("slug, updated_at, category:categories(slug)")
    .eq("published", true) as { data: Row[] | null };

  // 翻訳があるスポットのslugセットを取得
  const { data: translatedSlugs } = await db
    .from("spot_translations")
    .select("spot:spots(slug)")
    .not("spot", "is", null) as { data: Row[] | null };

  const translatedSet = new Set(
    (translatedSlugs ?? []).map((r) => {
      const s = Array.isArray(r.spot) ? r.spot[0] : r.spot;
      return s?.slug;
    }).filter(Boolean)
  );

  for (const spot of spots ?? []) {
    const catSlug = Array.isArray(spot.category) ? spot.category[0]?.slug : spot.category?.slug;
    if (!catSlug) continue;
    const jaPath = `/${catSlug}/${spot.slug}`;
    const lastmod = spot.updated_at ? new Date(spot.updated_at).toISOString() : undefined;
    const hasTranslation = translatedSet.has(spot.slug);

    urls.push({
      loc: `${SITE_URL}${jaPath}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.7,
      alternates: hasTranslation ? buildAlternates(jaPath) : undefined,
    });

    if (hasTranslation) {
      for (const slug of ALL_LOCALE_SLUGS) {
        urls.push({
          loc: `${SITE_URL}/${slug}${jaPath}`,
          lastmod,
          changefreq: "monthly",
          priority: 0.6,
          alternates: buildAlternates(jaPath),
        });
      }
    }
  }

  // ── タグページ ──
  const { data: tagPages } = await db
    .from("tag_pages")
    .select("updated_at, tag:tags(slug)")
    .eq("published", true) as { data: Row[] | null };

  // タグページの翻訳有無
  const { data: translatedTagPages } = await db
    .from("tag_page_translations")
    .select("tag_page:tag_pages(tag:tags(slug))")
    .not("tag_page", "is", null) as { data: Row[] | null };

  const translatedTagSet = new Set(
    (translatedTagPages ?? []).map((r) => {
      const tp = Array.isArray(r.tag_page) ? r.tag_page[0] : r.tag_page;
      const tag = tp ? (Array.isArray(tp.tag) ? tp.tag[0] : tp.tag) : null;
      return tag?.slug;
    }).filter(Boolean)
  );

  for (const tp of tagPages ?? []) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    const jaPath = `/tag/${tagSlug}`;
    const lastmod = tp.updated_at ? new Date(tp.updated_at).toISOString() : undefined;
    const hasTranslation = translatedTagSet.has(tagSlug);

    urls.push({
      loc: `${SITE_URL}${jaPath}`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
      alternates: hasTranslation ? buildAlternates(jaPath) : undefined,
    });

    if (hasTranslation) {
      for (const slug of ALL_LOCALE_SLUGS) {
        urls.push({
          loc: `${SITE_URL}/${slug}${jaPath}`,
          lastmod,
          changefreq: "weekly",
          priority: 0.7,
          alternates: buildAlternates(jaPath),
        });
      }
    }
  }

  // ── タグ一覧（タグページがないタグ） ──
  const tagPageSlugs = new Set(
    (tagPages ?? []).map((tp) => {
      const tag = Array.isArray(tp.tag) ? tp.tag[0] : tp.tag;
      return tag?.slug;
    }).filter(Boolean)
  );

  const { data: tags } = await db.from("tags").select("slug") as { data: Row[] | null };
  for (const tag of tags ?? []) {
    if (tagPageSlugs.has(tag.slug)) continue;
    urls.push({
      loc: `${SITE_URL}/tag/${tag.slug}`,
      changefreq: "weekly",
      priority: 0.5,
    });
  }

  return urls;
}

function toXml(entries: SitemapUrl[]): string {
  const urlNodes = entries.map((e) => {
    const parts = [`    <loc>${e.loc}</loc>`];
    if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
    if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
    if (e.priority != null) parts.push(`    <priority>${e.priority}</priority>`);
    if (e.alternates) {
      for (const alt of e.alternates) {
        parts.push(`    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
      }
    }
    return `  <url>\n${parts.join("\n")}\n  </url>`;
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urlNodes,
    `</urlset>`,
  ].join("\n");
}

export async function GET() {
  const entries = await buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
