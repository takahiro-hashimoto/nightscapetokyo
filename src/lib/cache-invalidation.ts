import { revalidateTag } from "next/cache";
import { CACHE_TAGS, spotTag, spotCategoryTag } from "./cache-tags";

const MAX = "max" as const;

/**
 * スポットの保存・追加・削除・公開切替で呼ぶ。
 *
 * タグは3階層に分かれている:
 *   spot-{slug}      そのスポット1件のデータ → 該当ページ（ja+4言語）だけ再生成
 *   spots-cat-{cat}  カテゴリ単位の一覧・関連欄 → 同エリアのページだけ再生成
 *   spots            サイトマップ専用（buildAllEntries）。ページは巻き込まれない
 *
 * サイト横断の集合（トップの人気/ホテル/おすすめ・全体マップ）は
 * spot-collections タグで、ここでは倒さず日次 cron が更新する。
 * 保存で倒すと全ページ再生成（実測250枚・キュー消化10分）に逆戻りするため。
 * areas を倒さない理由も同じ（共通ヘッダー経由で全ページに波及する）。
 */
export function revalidateSpotCaches(opts?: {
  slug?: string;
  categorySlug?: string;
}) {
  revalidateTag(CACHE_TAGS.spots, MAX);
  if (opts?.slug) revalidateTag(spotTag(opts.slug), MAX);
  if (opts?.categorySlug) revalidateTag(spotCategoryTag(opts.categorySlug), MAX);
}

export function revalidateCategoryCaches() {
  revalidateTag(CACHE_TAGS.areas, MAX);
  revalidateTag(CACHE_TAGS.spots, MAX);
}

export function revalidateTagCaches() {
  revalidateTag(CACHE_TAGS.tags, MAX);
  revalidateTag(CACHE_TAGS.tagPages, MAX);
}

export function revalidateArticleCaches() {
  revalidateTag(CACHE_TAGS.articles, MAX);
}

export function revalidateTagPageCaches() {
  revalidateTag(CACHE_TAGS.tagPages, MAX);
  revalidateTag(CACHE_TAGS.tags, MAX);
}

export function revalidateTranslationCaches() {
  revalidateTag(CACHE_TAGS.translations, MAX);
  revalidateTag(CACHE_TAGS.areas, MAX);
}
