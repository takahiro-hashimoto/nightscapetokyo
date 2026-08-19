export const CACHE_TAGS = {
  spots: "spots",
  /**
   * ヘッダー/フッターに出る「掲載スポット数N件」とエリア別件数。
   * これらは全ページの共通部分に載るため spots と同じタグにすると
   * スポット1件の増減でサイト全体（luminar記事や記事一覧まで）が
   * 無効化される。装飾的な数値なので日次 cron でのみ更新する。
   */
  spotCount: "spot-count",
  areas: "areas",
  tags: "tags",
  tagPages: "tag-pages",
  articles: "articles",
  translations: "translations",
} as const;

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];
