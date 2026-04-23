import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "./cache-tags";

const MAX = "max" as const;

export function revalidateSpotCaches() {
  revalidateTag(CACHE_TAGS.spots, MAX);
  revalidateTag(CACHE_TAGS.areas, MAX);
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
