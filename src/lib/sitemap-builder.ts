import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_CONFIG, LOCALE_TO_SLUG } from "@/lib/types";
import { getAllPostsSummary } from "@/lib/luminar/articles-meta";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getDb() {
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

type Row = Record<string, any>;

const LOCALE_HREFLANG: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALE_CONFIG).map(([slug, c]) => [slug, c.htmlLang])
);

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  alternates?: { hreflang: string; href: string }[];
};

/** All supported locale keys for sitemaps */
export const SITEMAP_LOCALES = ["ja", ...ALL_LOCALE_SLUGS] as const;

// Vercel が自動でセットするコミットタイムスタンプ（秒単位）。ない場合はプロセス起動時刻にフォールback。
const DEPLOY_TIME = process.env.VERCEL_GIT_COMMIT_TIMESTAMP
  ? new Date(Number(process.env.VERCEL_GIT_COMMIT_TIMESTAMP) * 1000).toISOString()
  : new Date().toISOString();

/**
 * Build hreflang alternates for a given JA path.
 * Always includes ja + x-default + all locale versions.
 * jaPath must start with "/" and must NOT end with "/" (trailing slash is added here).
 */
function buildAlternates(jaPath: string): SitemapUrl["alternates"] {
  const normalizedPath = jaPath.endsWith("/") ? jaPath : `${jaPath}/`;
  const jaUrl = `${SITE_URL}${normalizedPath}`;
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: jaUrl },
    { hreflang: "x-default", href: jaUrl },
  ];

  for (const slug of ALL_LOCALE_SLUGS) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) {
      alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}${normalizedPath}` });
    }
  }

  return alts;
}

/**
 * Build hreflang alternates for a path that exists only in specific locales.
 * ja + x-default always point to the Japanese URL.
 * Only the locales in availableUrlSlugs get locale-specific alternates.
 */
function buildPartialAlternates(
  jaPath: string,
  availableUrlSlugs: readonly string[]
): SitemapUrl["alternates"] {
  const normalizedPath = jaPath.endsWith("/") ? jaPath : `${jaPath}/`;
  const jaUrl = `${SITE_URL}${normalizedPath}`;
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: jaUrl },
    { hreflang: "x-default", href: jaUrl },
  ];
  for (const slug of availableUrlSlugs) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}${normalizedPath}` });
  }
  return alts;
}

/** Build hreflang alternates for the top page */
function buildTopAlternates(): SitemapUrl["alternates"] {
  const alts: { hreflang: string; href: string }[] = [
    { hreflang: "ja", href: `${SITE_URL}/` },
    { hreflang: "x-default", href: `${SITE_URL}/` },
  ];
  for (const slug of ALL_LOCALE_SLUGS) {
    const hl = LOCALE_HREFLANG[slug];
    if (hl) alts.push({ hreflang: hl, href: `${SITE_URL}/${slug}/` });
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
 * Cached for 1 hour to reduce Supabase reads on sitemap requests.
 */
export const buildAllEntries = unstable_cache(async (): Promise<AllEntries> => {
  const db = await getDb();

  const result: AllEntries = { ja: [], en: [], ko: [], tw: [], cn: [] };
  const locales = ALL_LOCALE_SLUGS as readonly string[];

  // ── トップページ ──
  const topAlts = buildTopAlternates();
  result.ja.push({ loc: `${SITE_URL}/`, lastmod: DEPLOY_TIME, changefreq: "daily", priority: 1.0, alternates: topAlts });
  for (const slug of locales) {
    result[slug as keyof AllEntries].push({
      loc: `${SITE_URL}/${slug}/`,
      lastmod: DEPLOY_TIME,
      changefreq: "daily",
      priority: 0.9,
      alternates: topAlts,
    });
  }

  // ── /recommend（重要度が高いため個別設定） ──
  const recommendAlts = buildAlternates("/recommend");
  result.ja.push({
    loc: `${SITE_URL}/recommend/`,
    changefreq: "weekly",
    priority: 0.8,
    alternates: recommendAlts,
  });
  for (const slug of locales) {
    result[slug as keyof AllEntries].push({
      loc: `${SITE_URL}/${slug}/recommend/`,
      changefreq: "weekly",
      priority: 0.7,
      alternates: recommendAlts,
    });
  }

  // ── 固定ページ ──
  const staticPages = [
    "/about", "/contact", "/guidelines", "/privacy-policy",
    "/caution", "/links", "/sitemap",
    "/time-lapse", "/wallpaper",
  ];
  for (const page of staticPages) {
    const alts = buildAlternates(page);
    result.ja.push({
      loc: `${SITE_URL}${page}/`,
      changefreq: "monthly",
      priority: 0.5,
      alternates: alts,
    });
    for (const slug of locales) {
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}${page}/`,
        changefreq: "monthly",
        priority: 0.4,
        alternates: alts,
      });
    }
  }

  // simulator / moon (JA only)
  result.ja.push({ loc: `${SITE_URL}/simulator/`, changefreq: "monthly", priority: 0.5 });
  result.ja.push({ loc: `${SITE_URL}/moon/`, changefreq: "monthly", priority: 0.5 });

  if (!db) return result;

  const { data: areaTranslationRows } = await db
    .from("spot_translations")
    .select("locale, spot:spots(category:categories(slug))")
    .not("spot", "is", null) as { data: Row[] | null };

  const areaLocaleMap = new Map<string, Set<string>>();
  for (const row of areaTranslationRows ?? []) {
    const spot = Array.isArray(row.spot) ? row.spot[0] : row.spot;
    const category = Array.isArray(spot?.category) ? spot.category[0] : spot?.category;
    const categorySlug = category?.slug as string | undefined;
    const urlSlug = LOCALE_TO_SLUG[row.locale as string];
    if (categorySlug && urlSlug) {
      if (!areaLocaleMap.has(categorySlug)) areaLocaleMap.set(categorySlug, new Set());
      areaLocaleMap.get(categorySlug)!.add(urlSlug);
    }
  }

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
    const availableLocales = areaLocaleMap.get(cat.slug as string) ?? new Set<string>();
    const alts = availableLocales.size > 0
      ? buildPartialAlternates(jaPath, [...availableLocales])
      : undefined;
    const lastmod = cat.updated_at ? new Date(cat.updated_at).toISOString() : undefined;
    result.ja.push({
      loc: `${SITE_URL}${jaPath}/`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
      alternates: alts,
    });
    for (const slug of availableLocales) {
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}${jaPath}/`,
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

  // locale 単位で取得し、スポットごとに「実在するロケール集合」を構築する
  const { data: spotTranslationRows } = await db
    .from("spot_translations")
    .select("spot:spots(slug), locale")
    .not("spot", "is", null) as { data: Row[] | null };

  const spotLocaleMap = new Map<string, Set<string>>();
  for (const row of spotTranslationRows ?? []) {
    const s = Array.isArray(row.spot) ? row.spot[0] : row.spot;
    const spotSlug = s?.slug as string | undefined;
    const urlSlug = LOCALE_TO_SLUG[row.locale as string];
    if (spotSlug && urlSlug) {
      if (!spotLocaleMap.has(spotSlug)) spotLocaleMap.set(spotSlug, new Set());
      spotLocaleMap.get(spotSlug)!.add(urlSlug);
    }
  }

  for (const spot of spots ?? []) {
    const catSlug = Array.isArray(spot.category) ? spot.category[0]?.slug : spot.category?.slug;
    if (!catSlug) continue;
    const jaPath = `/${catSlug}/${spot.slug}`;
    const lastmod = spot.updated_at ? new Date(spot.updated_at).toISOString() : undefined;
    const availableLocales = spotLocaleMap.get(spot.slug as string) ?? new Set<string>();
    const alts = availableLocales.size > 0
      ? buildPartialAlternates(jaPath, [...availableLocales])
      : undefined;

    result.ja.push({
      loc: `${SITE_URL}${jaPath}/`,
      lastmod,
      changefreq: "monthly",
      priority: 0.7,
      alternates: alts,
    });

    for (const urlSlug of availableLocales) {
      result[urlSlug as keyof AllEntries]?.push({
        loc: `${SITE_URL}/${urlSlug}${jaPath}/`,
        lastmod,
        changefreq: "monthly",
        priority: 0.6,
        alternates: alts,
      });
    }
  }

  // ── タグページ ──
  const { data: tagPages } = await db
    .from("tag_pages")
    .select("id, updated_at, tag:tags(slug)")
    .eq("published", true) as { data: Row[] | null };

  // tag_page_translations から locale 単位でタグごとのロケール集合を構築する
  const { data: tagTranslationRows } = await db
    .from("tag_page_translations")
    .select("tag_page_id, locale") as { data: Row[] | null };

  // tag_page.id → tag slug のマッピングを作成
  const tagPageIdToSlug = new Map<string, string>();
  for (const tp of tagPages ?? []) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (tp.id && tagSlug) tagPageIdToSlug.set(String(tp.id), tagSlug as string);
  }

  const tagLocaleMap = new Map<string, Set<string>>();
  for (const row of tagTranslationRows ?? []) {
    const tagSlug = tagPageIdToSlug.get(String(row.tag_page_id));
    const urlSlug = LOCALE_TO_SLUG[row.locale as string];
    if (tagSlug && urlSlug) {
      if (!tagLocaleMap.has(tagSlug)) tagLocaleMap.set(tagSlug, new Set());
      tagLocaleMap.get(tagSlug)!.add(urlSlug);
    }
  }

  for (const tp of tagPages ?? []) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    const jaPath = `/tag/${tagSlug}`;
    const lastmod = tp.updated_at ? new Date(tp.updated_at).toISOString() : undefined;
    const availableLocales = tagLocaleMap.get(tagSlug as string) ?? new Set<string>();
    // シンプル一覧は全ロケールに実在するので、翻訳の有無にかかわらず全ロケールを hreflang クラスターに含める
    const alts = buildAlternates(jaPath);

    result.ja.push({
      loc: `${SITE_URL}${jaPath}/`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
      alternates: alts,
    });

    for (const urlSlug of availableLocales) {
      result[urlSlug as keyof AllEntries]?.push({
        loc: `${SITE_URL}/${urlSlug}${jaPath}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.7,
        alternates: alts,
      });
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

  // ── Luminar Neo ──
  const LUMINAR_NOINDEX = new Set(['privacy-policy', 'about']);
  const luminarPosts = await getAllPostsSummary();

  result.ja.push({
    loc: `${SITE_URL}/luminar/`,
    changefreq: "weekly",
    priority: 0.8,
  });

  for (const post of luminarPosts) {
    if (LUMINAR_NOINDEX.has(post.slug)) continue;
    result.ja.push({
      loc: `${SITE_URL}/luminar/${post.slug}/`,
      lastmod: new Date(post.updatedAt).toISOString(),
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
    const simpleAlts = buildAlternates(`/tag/${tag.slug}`);
    result.ja.push({
      loc: `${SITE_URL}/tag/${tag.slug}/`,
      changefreq: "weekly",
      priority: 0.8,
      alternates: simpleAlts,
    });
    // タグページがないタグもロケール別シンプル一覧として提供する
    for (const slug of locales) {
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}/tag/${tag.slug}/`,
        changefreq: "weekly",
        priority: 0.7,
        alternates: simpleAlts,
      });
    }
  }

  // ── タグページがあるが翻訳がないロケール向けシンプル一覧 ──
  for (const tp of tagPages ?? []) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    const availableLocales = tagLocaleMap.get(tagSlug as string) ?? new Set<string>();
    const lastmod = tp.updated_at ? new Date(tp.updated_at).toISOString() : undefined;
    const nonTranslatedAlts = buildAlternates(`/tag/${tagSlug}`);
    for (const slug of locales) {
      if (availableLocales.has(slug)) continue; // 翻訳済みは既に追加済み
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}/tag/${tagSlug}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.7,
        alternates: nonTranslatedAlts,
      });
    }
  }

  return result;
}, ["sitemap-all-entries"], { revalidate: 3600, tags: ["spots", "areas", "articles", "tags", "tag-pages", "translations"] });

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
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urlNodes,
    `</urlset>`,
  ].join("\n\n");
}

/**
 * Generate sitemap index XML pointing to per-language sitemaps.
 */
export function toSitemapIndexXml(): string {
  const sitemaps = SITEMAP_LOCALES.map(
    (locale) =>
      `  <sitemap>\n    <loc>${SITE_URL}/sitemap-${locale}.xml</loc>\n    <lastmod>${DEPLOY_TIME}</lastmod>\n  </sitemap>`
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>`,
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
