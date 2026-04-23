import { cache } from "react";
import type { TagPageWithRelations, TagPageTranslation } from "../../types";
import { LOCALE_SLUG_MAP, LOCALE_TO_SLUG } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
} from "./shared";

/** タグページの翻訳済みロケールを取得 */
export async function getAvailableTagPageLocales(
  tagSlug: string
): Promise<string[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data: tagPage } = (await supabase
    .from("tag_pages")
    .select("id, tag:tags!inner(slug)")
    .eq("tag.slug", tagSlug)
    .single()) as any;

  if (!tagPage) return [];

  const { data: translations } = await supabase
    .from("tag_page_translations")
    .select("locale")
    .eq("tag_page_id", tagPage.id);

  if (!translations) return [];

  return translations
    .map((t) => LOCALE_TO_SLUG[t.locale])
    .filter((s): s is string => !!s);
}

/** フッター用: 公開済みタグページ一覧（名前とslugのみ） */
export async function getPublishedTagPages(): Promise<
  { name: string; slug: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data, error } = (await supabase
    .from("tag_pages")
    .select("tag:tags(name, slug)")
    .eq("published", true)
    .order("updated_at", { ascending: false })) as any;

  if (error || !data) return [];
  return data.map((d: { tag: { name: string; slug: string } }) => d.tag).filter(Boolean);
}

export async function getTagPages(): Promise<
  { id: string; title: string; published: boolean; tag: { name: string; slug: string }; updated_at: string }[]
> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();

  const { data, error } = (await supabase
    .from("tag_pages")
    .select("id, title, published, updated_at, tag:tags(name, slug)")
    .order("updated_at", { ascending: false })) as any;

  if (error || !data) return [];
  return data;
}

/** タグページ詳細（管理画面 edit / 公開ページ共通） */
export async function getTagPageById(
  tagPageId: string
): Promise<TagPageWithRelations | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  const { data: page, error } = (await supabase
    .from("tag_pages")
    .select("*, tag:tags(*)")
    .eq("id", tagPageId)
    .single()) as any;

  if (error || !page) return null;

  // PR Banner
  const { data: prBannerRow } = (await supabase
    .from("tag_page_pr_banners")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .maybeSingle()) as any;

  let prBanner = null;
  if (prBannerRow) {
    const { data: links } = (await supabase
      .from("tag_page_pr_banner_links")
      .select("*")
      .eq("pr_banner_id", prBannerRow.id)
      .order("sort_order")) as any;
    prBanner = { ...prBannerRow, links: links ?? [] };
  }

  // Sections + section spots
  const { data: sectionsRaw } = (await supabase
    .from("tag_page_sections")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .order("sort_order")) as any;

  const sections = [];
  for (const sec of sectionsRaw ?? []) {
    const { data: sectionSpots } = (await supabase
      .from("tag_page_section_spots")
      .select("*, spot:spots(slug, title, name, featured_image)")
      .eq("section_id", sec.id)
      .order("sort_order")) as any;
    sections.push({ ...sec, spots: sectionSpots ?? [] });
  }

  // FAQs
  const { data: faqs } = (await supabase
    .from("tag_page_faqs")
    .select("*")
    .eq("tag_page_id", tagPageId)
    .order("sort_order")) as any;

  // Translations
  const { data: translations } = (await supabase
    .from("tag_page_translations")
    .select("*")
    .eq("tag_page_id", tagPageId)) as any;

  return {
    ...page,
    pr_banner: prBanner,
    sections,
    faqs: faqs ?? [],
    translations: translations ?? [],
  };
}

/** タグslugからタグページを取得（公開ページ用） */
export const getTagPageBySlug = cache(async function getTagPageBySlug(
  tagSlug: string
): Promise<TagPageWithRelations | null> {
  if (!isSupabaseConfigured) return null;

  const supabase = await getSupabaseClient();

  const { data: tag } = await supabase
    .from("tags")
    .select("id")
    .eq("slug", tagSlug)
    .single();

  if (!tag) return null;

  const { data: page } = (await supabase
    .from("tag_pages")
    .select("id")
    .eq("tag_id", tag.id)
    .eq("published", true)
    .single()) as any;

  if (!page) return null;

  return getTagPageById(page.id);
});

/** タグページの翻訳ステータス取得（管理画面用） */
export async function getTagPageTranslationStatus(
  tagPageId: string
): Promise<{ locale: string; updated_at: string }[]> {
  if (!isSupabaseConfigured) return [];

  const supabase = await getSupabaseClient();
  const { data } = await supabase
    .from("tag_page_translations")
    .select("locale, updated_at")
    .eq("tag_page_id", tagPageId);

  return data ?? [];
}

/** タグslugとロケールから翻訳済みタグページを取得（公開ページ用） */
export const getTagPageBySlugWithTranslation = cache(async function getTagPageBySlugWithTranslation(
  tagSlug: string,
  localeSlug: string
): Promise<{ page: TagPageWithRelations; translation: TagPageTranslation } | null> {
  const dbLocale = LOCALE_SLUG_MAP[localeSlug];
  if (!dbLocale) return null;

  const page = await getTagPageBySlug(tagSlug);
  if (!page) return null;

  const translation = page.translations?.find((t) => t.locale === dbLocale);
  if (!translation) return null;

  return { page, translation };
});
