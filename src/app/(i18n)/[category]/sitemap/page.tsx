import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { LOCALE_LABELS, LOCALE_SLUG_MAP, ALL_LOCALE_SLUGS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import type { CategoryPageProps as Props, SiteLocale } from "@/lib/types";
import { supabase } from "@/lib/supabase/client";
import { SITEMAP_LABELS } from "@/lib/i18n-static-pages";
import { TAG_NAME } from "@/lib/constants";

export const revalidate = 86400;

export async function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const l = SITEMAP_LABELS[category] ?? SITEMAP_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[category] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${category}/sitemap`;
  return {
    title: l.title,
    description: l.description,
    openGraph: {
      title: l.title,
      description: l.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "sitemap", ALL_LOCALE_SLUGS),
    },
  };
}

type SpotRow = { slug: string; title: string };
type CategoryRow = { slug: string; name: string; spots: SpotRow[] };
type TagLink = { slug: string; name: string };
type TranslationRow = { locale: string; title: string; spot: { slug: string } | { slug: string }[] };

async function getSitemapData(dbLocale: string, locale: string) {
  const [catRes, tagRes, transRes, tagTransRes] = await Promise.all([
    supabase.from("categories").select("slug, name, spots:spots(slug, title)").order("name"),
    supabase.from("tags").select("slug, name").order("name"),
    supabase
      .from("spot_translations")
      .select("locale, title, category_name, spot:spots(slug, category:categories(slug))")
      .eq("locale", dbLocale),
    supabase
      .from("tag_page_translations")
      .select("title, tag_page:tag_pages(tag:tags(slug, name))")
      .eq("locale", dbLocale),
  ]);

  const categories = (catRes.data ?? []) as CategoryRow[];
  const tags = (tagRes.data ?? []) as TagLink[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translations = (transRes.data ?? []) as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tagTranslations = (tagTransRes.data ?? []) as any[];

  // Build translation maps
  const titleMap = new Map<string, string>();
  const catNameMap = new Map<string, string>();
  for (const t of translations) {
    const spot = Array.isArray(t.spot) ? t.spot[0] : t.spot;
    if (spot?.slug && t.title) {
      titleMap.set(spot.slug, t.title);
    }
    const catSlug = Array.isArray(spot?.category) ? spot.category[0]?.slug : spot?.category?.slug;
    if (catSlug && t.category_name && !catNameMap.has(catSlug)) {
      catNameMap.set(catSlug, t.category_name);
    }
  }

  // Build tag name translation map (tagSlug → translated title)
  const tagNameMap = new Map<string, string>();
  for (const tt of tagTranslations) {
    const tagPage = Array.isArray(tt.tag_page) ? tt.tag_page[0] : tt.tag_page;
    const tag = tagPage ? (Array.isArray(tagPage.tag) ? tagPage.tag[0] : tagPage.tag) : null;
    if (tag?.slug && tt.title) {
      tagNameMap.set(tag.slug, tt.title);
    }
  }

  // Apply translations
  const localizedCategories = categories.map((cat) => ({
    ...cat,
    name: catNameMap.get(cat.slug) ?? cat.name,
    spots: cat.spots.map((spot) => ({
      ...spot,
      title: titleMap.get(spot.slug) ?? spot.title,
    })),
  }));

  const sortedCategories = localizedCategories.sort(
    (a, b) => b.spots.length - a.spots.length
  );

  const localizedTags = tags.map((tag) => ({
    ...tag,
    name: tagNameMap.get(tag.slug) ?? TAG_NAME[tag.slug]?.[locale as SiteLocale] ?? tag.name,
  }));

  return { categories: sortedCategories, tags: localizedTags };
}

export default async function I18nSitemapPage({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const dbLocale = LOCALE_SLUG_MAP[locale] ?? "en";
  const l = SITEMAP_LABELS[locale] ?? SITEMAP_LABELS.en;
  const { categories, tags } = await getSitemapData(dbLocale, locale);

  return (
    <>
      <LanguageSwitcher currentLocale={locale} categorySlug="sitemap" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
            <path d="M15 5.764v15" />
            <path d="M9 3.236v15" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          <h2>{l.areaHeading}</h2>
          {categories.map((cat) => (
            <div key={cat.slug} style={{ marginBottom: 24 }}>
              <h3>
                <Link href={`/${category}/${cat.slug}`}>{cat.name}</Link>
              </h3>
              {cat.spots.length > 0 && (
                <ul>
                  {cat.spots.map((spot) => (
                    <li key={spot.slug}>
                      <Link href={`/${category}/${cat.slug}/${spot.slug}`}>{spot.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="content-card card-padding article-body">
          <h2>{l.tagHeading}</h2>
          <ul>
            {tags.map((tag) => (
              <li key={tag.slug}>
                <Link href={`/${category}/tag/${tag.slug}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-card card-padding article-body">
          <h2>{l.otherHeading}</h2>
          <ul>
            {l.otherLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href === "/" ? `/${category}` : `/${category}${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </ArticleLayout>
    </>
  );
}
