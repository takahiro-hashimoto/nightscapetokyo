export const CACHE_TAGS = {
  spots: "spots",
  areas: "areas",
  tags: "tags",
  tagPages: "tag-pages",
  articles: "articles",
  translations: "translations",
} as const;

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];
