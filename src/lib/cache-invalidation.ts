import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "./cache-tags";

const MAX = "max" as const;

/**
 * スポットの追加・削除・公開切替で呼ぶ。
 *
 * areas は倒さない。areas は共通ヘッダー（getSiteChromeData）が参照しており、
 * ここで倒すとスポット1件の増減でサイト全体が無効化される。実測では
 * spots タグを倒すだけで luminar 記事や記事一覧まで再生成されていた。
 * areas に載る情報のうちスポット増減で変わるのは件数表示だけなので、
 * 日次 cron（/api/revalidate?mode=daily）でまとめて更新する。
 */
export function revalidateSpotCaches() {
  revalidateTag(CACHE_TAGS.spots, MAX);
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
