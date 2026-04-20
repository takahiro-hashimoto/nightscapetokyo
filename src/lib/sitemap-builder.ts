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

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  alternates?: { hreflang: string; href: string }[];
};

/** All supported locale keys for sitemaps */
export const SITEMAP_LOCALES = ["ja", ...ALL_LOCALE_SLUGS] as const;

/**
 * Build hreflang alternates for a given JA path.
 * Always includes ja + x-default + all locale versions.
 */
function buildAlternates(jaPath: string): SitemapUrl["alternates"] {
  const jaUrl = `${SITE_URL}${jaPath}`;
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: jaUrl },
    { hreflang: "x-default", href: jaUrl },
  ];

  for (const slug of ALL_LOCALE_SLUGS) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) {
      alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}${jaPath}` });
    }
  }

  return alts;
}

/** Build hreflang alternates for the top page */
function buildTopAlternates(): SitemapUrl["alternates"] {
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: SITE_URL },
    { hreflang: "x-default", href: SITE_URL },
  ];
  for (const slug of ALL_LOCALE_SLUGS) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}` });
  }
  return alts;
}

type AllEntries = {
  /** ja URLs */
  ja: SitemapUrl[];
  /** en URLs */
  en: SitemapUrl[];
  /** ko URLs */
  ko: SitemapUrl[];
  /** tw URLs */
  tw: SitemapUrl[];
  /** cn URLs */
  cn: SitemapUrl[];
};

/**
 * Fetch all data once and return URLs grouped by locale.
 */
export async function buildAllEntries(): Promise<AllEntries> {
  const db = await getDb();
  const now = new Date().toISOString();

  const result: AllEntries = { ja: [], en: [], ko: [], tw: [], cn: [] };
  const locales = ALL_LOCALE_SLUGS as readonly string[];

  // ── トップページ ──
  const topAlts = buildTopAlternates();
  result.ja.push({ loc: SITE_URL, lastmod: now, changefreq: "daily", priority: 1.0, alternates: topAlts });
  for (const slug of locales) {
    result[slug as keyof AllEntries].push({
      loc: `${SITE_URL}/${slug}`,
      lastmod: now,
      changefreq: "daily",
      priority: 0.9,
      alternates: topAlts,
    });
  }

  // ── /recommend（重要度が高いため個別設定） ──
  const recommendAlts = buildAlternates("/recommend");
  result.ja.push({
    loc: `${SITE_URL}/recommend`,
    changefreq: "weekly",
    priority: 0.8,
    alternates: recommendAlts,
  });
  for (const slug of locales) {
    result[slug as keyof AllEntries].push({
      loc: `${SITE_URL}/${slug}/recommend`,
      changefreq: "weekly",
      priority: 0.7,
      alternates: recommendAlts,
    });
  }

  // ── 固定ページ ──
  const staticPages = [
    "/about", "/contact", "/guidelines", "/privacy-policy",
    "/caution", "/links", "/sitemap",
    "/time-lapse", "/search", "/wallpaper",
  ];
  for (const page of staticPages) {
    const alts = buildAlternates(page);
    result.ja.push({
      loc: `${SITE_URL}${page}`,
      changefreq: "monthly",
      priority: 0.5,
      alternates: alts,
    });
    for (const slug of locales) {
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}${page}`,
        changefreq: "monthly",
        priority: 0.4,
        alternates: alts,
      });
    }
  }

  // simulator (JA only)
  result.ja.push({ loc: `${SITE_URL}/simulator`, changefreq: "monthly", priority: 0.5 });

  // timelapse-calculator (JA only — DB外の静的ページ)
  result.ja.push({ loc: `${SITE_URL}/article/timelapse-calculator/`, changefreq: "monthly", priority: 0.6 });

  if (!db) return result;

  // ── エリア（カテゴリ）ページ ──
  // updated_at カラムが無い場合にフォールバック
  let categories: Row[] | null = null;
  {
    const { data, error } = await db
      .from("categories")
      .select("slug, updated_at") as { data: Row[] | null; error: unknown };
    if (error || !data) {
      const { data: fallback } = await db
        .from("categories")
        .select("slug") as { data: Row[] | null };
      categories = fallback;
    } else {
      categories = data;
    }
  }

  for (const cat of categories ?? []) {
    const jaPath = `/${cat.slug}`;
    const alts = buildAlternates(jaPath);
    const lastmod = cat.updated_at ? new Date(cat.updated_at).toISOString() : undefined;
    result.ja.push({
      loc: `${SITE_URL}${jaPath}`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
      alternates: alts,
    });
    for (const slug of locales) {
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}${jaPath}`,
        lastmod,
        changefreq: "weekly",
        priority: 0.7,
        alternates: alts,
      });
    }
  }

  // ── スポット詳細ページ ──
  const { data: spots } = await db
    .from("spots")
    .select("slug, updated_at, category:categories(slug)")
    .eq("published", true) as { data: Row[] | null };

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
    const alts = hasTranslation ? buildAlternates(jaPath) : undefined;

    result.ja.push({
      loc: `${SITE_URL}${jaPath}`,
      lastmod,
      changefreq: "monthly",
      priority: 0.7,
      alternates: alts,
    });

    if (hasTranslation) {
      for (const slug of locales) {
        result[slug as keyof AllEntries].push({
          loc: `${SITE_URL}/${slug}${jaPath}`,
          lastmod,
          changefreq: "monthly",
          priority: 0.6,
          alternates: alts,
        });
      }
    }
  }

  // ── タグページ ──
  const { data: tagPages } = await db
    .from("tag_pages")
    .select("updated_at, tag:tags(slug)")
    .eq("published", true) as { data: Row[] | null };

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
    const alts = hasTranslation ? buildAlternates(jaPath) : undefined;

    result.ja.push({
      loc: `${SITE_URL}${jaPath}`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
      alternates: alts,
    });

    if (hasTranslation) {
      for (const slug of locales) {
        result[slug as keyof AllEntries].push({
          loc: `${SITE_URL}/${slug}${jaPath}`,
          lastmod,
          changefreq: "weekly",
          priority: 0.7,
          alternates: alts,
        });
      }
    }
  }

  // ── 記事ページ ──
  const { data: articles } = await db
    .from("articles")
    .select("slug, updated_at")
    .eq("published", true) as { data: Row[] | null };

  result.ja.push({
    loc: `${SITE_URL}/article/`,
    changefreq: "weekly",
    priority: 0.6,
  });

  for (const article of articles ?? []) {
    result.ja.push({
      loc: `${SITE_URL}/article/${article.slug}/`,
      lastmod: article.updated_at ? new Date(article.updated_at).toISOString() : undefined,
      changefreq: "monthly",
      priority: 0.7,
    });
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
    result.ja.push({
      loc: `${SITE_URL}/tag/${tag.slug}`,
      changefreq: "weekly",
      priority: 0.5,
    });
  }

  return result;
}

/**
 * Convert a list of SitemapUrl entries to XML string.
 */
export function toSitemapXml(entries: SitemapUrl[]): string {
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

/**
 * Generate sitemap index XML pointing to per-language sitemaps.
 */
export function toSitemapIndexXml(): string {
  const now = new Date().toISOString();
  const sitemaps = SITEMAP_LOCALES.map(
    (locale) =>
      `  <sitemap>\n    <loc>${SITE_URL}/sitemap-${locale}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...sitemaps,
    `</sitemapindex>`,
  ].join("\n");
}

/** 指定ロケールのサイトマップ Response を生成する（各 route.ts から呼び出す共通ハンドラ） */
export async function makeSitemapResponse(locale: keyof Awaited<ReturnType<typeof buildAllEntries>>) {
  const entries = await buildAllEntries();
  const xml = toSitemapXml(entries[locale]);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
