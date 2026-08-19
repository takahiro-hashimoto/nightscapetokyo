import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import { SITE_URL, ALL_LOCALE_SLUGS, HREFLANG_LANG_MAP, LOCALE_TO_SLUG } from "@/lib/types";
import { getAllPostsSummary } from "@/lib/luminar/articles-meta";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getDb() {
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

type Row = Record<string, any>;

/**
 * PostgREST のデフォルト上限（1000行）を超えて全件取得する。
 * spot_translations は spots × locales なのでスポット250件で既に上限間近になり、
 * .range() なしだと無警告でロケールURL・hreflang が欠落する。
 */
const PAGE_SIZE = 1000;
async function fetchAllRows(
  build: () => { range: (from: number, to: number) => PromiseLike<{ data: Row[] | null; error: unknown }> }
): Promise<Row[]> {
  const out: Row[] = [];
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await build().range(from, from + PAGE_SIZE - 1);
    if (error || !data) break;
    out.push(...data);
    if (data.length < PAGE_SIZE) break;
  }
  return out;
}

/** エリアではないカテゴリ行（記事系）。サイトマップのエリアループから除外する */
const NON_AREA_SLUGS = new Set(["article", "pickup", "event"]);

// ページ HTML 側の alternates.languages と同じ表（HREFLANG_LANG_MAP）を使うこと。
// 以前は LOCALE_CONFIG.htmlLang を流用していたため、サイトマップだけ zh-Hant/zh-Hans、
// HTML は zh-TW/zh-CN となり、手法間で食い違ったクラスタが Google に破棄されていた。
const LOCALE_HREFLANG: Record<string, string> = HREFLANG_LANG_MAP;

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  alternates?: { hreflang: string; href: string }[];
};

/** All supported locale keys for sitemaps */
export const SITEMAP_LOCALES = ["ja", ...ALL_LOCALE_SLUGS] as const;

// next.config.ts の resolveDeployTime() がビルド時に埋め込む ISO 文字列。
// Vercel / Cloudflare のどちらでも git のコミット時刻に揃う。
const DEPLOY_TIME = process.env.DEPLOY_TIME ?? new Date().toISOString();

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

  // ── 固定ページ（集客に貢献するページのみ） ──
  // canonical と 5言語 hreflang を宣言している固定ページはすべて載せる。
  // 以前は about/time-lapse/wallpaper だけで、残り5ページ×5言語=25URLが
  // どのサイトマップにも存在しなかった。
  const staticPages = [
    "/about", "/time-lapse", "/wallpaper", "/event",
    "/contact", "/guidelines", "/caution", "/links", "/privacy-policy",
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

  // simulator / moon (JA only) — ツール系の重要ページ
  result.ja.push({ loc: `${SITE_URL}/simulator/`, changefreq: "weekly", priority: 0.9 });
  result.ja.push({ loc: `${SITE_URL}/moon/`, changefreq: "weekly", priority: 0.9 });

  // 撮影依頼ページ（日本語のみ）
  result.ja.push({
    loc: `${SITE_URL}/photography/`,
    changefreq: "monthly",
    priority: 0.7,
  });

  if (!db) return result;

  // published=true で絞る。ページ側の getAvailableAreaLocales も published で
  // 絞っており、絞らないと未公開スポットしか翻訳が無いエリアの 404 URL を吐く。
  const areaTranslationRows = await fetchAllRows(() =>
    db
      .from("spot_translations")
      .select("locale, spot:spots!inner(published, category:categories(slug))")
      .eq("spot.published", true) as any
  );

  const areaLocaleMap = new Map<string, Set<string>>();
  for (const row of areaTranslationRows) {
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
    // article / pickup / event は記事系のカテゴリ行。エリアURLとして出すと
    // /pickup/ のようなリダイレクト先や /article/ の重複が混ざる。
    if (NON_AREA_SLUGS.has(cat.slug as string)) continue;
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
  const spots = await fetchAllRows(() =>
    db
      .from("spots")
      .select("slug, updated_at, category:categories(slug)")
      .eq("published", true) as any
  );

  // locale 単位で取得し、スポットごとに「実在するロケール集合」を構築する
  const spotTranslationRows = await fetchAllRows(() =>
    db
      .from("spot_translations")
      .select("locale, spot:spots!inner(slug, published)")
      .eq("spot.published", true) as any
  );

  const spotLocaleMap = new Map<string, Set<string>>();
  for (const row of spotTranslationRows) {
    const s = Array.isArray(row.spot) ? row.spot[0] : row.spot;
    const spotSlug = s?.slug as string | undefined;
    const urlSlug = LOCALE_TO_SLUG[row.locale as string];
    if (spotSlug && urlSlug) {
      if (!spotLocaleMap.has(spotSlug)) spotLocaleMap.set(spotSlug, new Set());
      spotLocaleMap.get(spotSlug)!.add(urlSlug);
    }
  }

  for (const spot of spots) {
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
  const tagPages = await fetchAllRows(() =>
    db
      .from("tag_pages")
      .select("id, updated_at, tag:tags(slug)")
      .eq("published", true) as any
  );

  // tag_page_translations から locale 単位でタグごとのロケール集合を構築する
  const tagTranslationRows = await fetchAllRows(() =>
    db.from("tag_page_translations").select("tag_page_id, locale") as any
  );

  // tag_page.id → tag slug のマッピングを作成
  const tagPageIdToSlug = new Map<string, string>();
  for (const tp of tagPages) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (tp.id && tagSlug) tagPageIdToSlug.set(String(tp.id), tagSlug as string);
  }

  const tagLocaleMap = new Map<string, Set<string>>();
  for (const row of tagTranslationRows) {
    const tagSlug = tagPageIdToSlug.get(String(row.tag_page_id));
    const urlSlug = LOCALE_TO_SLUG[row.locale as string];
    if (tagSlug && urlSlug) {
      if (!tagLocaleMap.has(tagSlug)) tagLocaleMap.set(tagSlug, new Set());
      tagLocaleMap.get(tagSlug)!.add(urlSlug);
    }
  }

  for (const tp of tagPages) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    const jaPath = `/tag/${tagSlug}`;
    const lastmod = tp.updated_at ? new Date(tp.updated_at).toISOString() : undefined;
    const availableLocales = tagLocaleMap.get(tagSlug as string) ?? new Set<string>();
    // 翻訳済みロケールのみをクラスターに含める（ページHTMLの alternates と一致させる）
    const alts = buildPartialAlternates(jaPath, Array.from(availableLocales));

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
  const articles = await fetchAllRows(() =>
    db.from("articles").select("slug, updated_at").eq("published", true) as any
  );

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
  const luminarPosts = await getAllPostsSummary();

  result.ja.push({
    loc: `${SITE_URL}/luminar/`,
    changefreq: "weekly",
    priority: 0.8,
  });

  for (const post of luminarPosts) {
    result.ja.push({
      loc: `${SITE_URL}/luminar/${post.slug}/`,
      lastmod: new Date(post.updatedAt).toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    });
  }

  // ── タグ一覧（タグページがないタグ） ──
  const tagPageSlugs = new Set(
    tagPages.map((tp) => {
      const tag = Array.isArray(tp.tag) ? tp.tag[0] : tp.tag;
      return tag?.slug;
    }).filter(Boolean)
  );

  const tags = await fetchAllRows(() => db.from("tags").select("slug") as any);
  for (const tag of tags) {
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
  for (const tp of tagPages) {
    const tagSlug = Array.isArray(tp.tag) ? tp.tag[0]?.slug : tp.tag?.slug;
    if (!tagSlug) continue;
    const availableLocales = tagLocaleMap.get(tagSlug as string) ?? new Set<string>();
    const lastmod = tp.updated_at ? new Date(tp.updated_at).toISOString() : undefined;
    for (const slug of locales) {
      if (availableLocales.has(slug)) continue; // 翻訳済みは既に追加済み
      // 未翻訳ロケールのシンプル一覧は ja + 自ロケールのみのクラスター（ページHTMLと一致）
      const simpleAlts = buildPartialAlternates(`/tag/${tagSlug}`, [slug]);
      result[slug as keyof AllEntries].push({
        loc: `${SITE_URL}/${slug}/tag/${tagSlug}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.7,
        alternates: simpleAlts,
      });
    }
  }

  return result;
}, ["sitemap-all-entries"], { revalidate: false, tags: ["spots", "areas", "articles", "tags", "tag-pages", "translations"] });

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
  // Cache-Control はここでは指定しない。next.config.ts の headers() が
  // /:path(sitemap[^/]*\.xml) で上書きするため、ここに書いても効かず
  // 「コードは3600なのに配信は86400」という食い違いになる。
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
