export const CACHE_TAGS = {
  spots: "spots",
  /**
   * ヘッダー/フッターに出る「掲載スポット数N件」とエリア別件数。
   * これらは全ページの共通部分に載るため spots と同じタグにすると
   * スポット1件の増減でサイト全体（luminar記事や記事一覧まで）が
   * 無効化される。装飾的な数値なので日次 cron でのみ更新する。
   */
  spotCount: "spot-count",
  /**
   * サイト横断のスポット集合（トップの人気/ホテル/おすすめ・全体マップ・
   * スラッグ横断の画像取得）。詳細ページを含むほぼ全ページが参照するため、
   * スポット保存では倒さず、日次 cron でのみ更新する。
   * ここを spots のままにすると「1件の保存で全ページ再生成」に逆戻りする。
   */
  spotCollections: "spot-collections",
  areas: "areas",
  tags: "tags",
  tagPages: "tag-pages",
  articles: "articles",
  translations: "translations",
} as const;

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];

/** スポット1件ぶんのデータに付けるタグ。保存時にそのページだけ倒せる */
export function spotTag(slug: string): string {
  return `spot-${slug}`;
}

/** カテゴリ単位のスポット一覧に付けるタグ。同エリアの一覧・関連欄だけ倒せる */
export function spotCategoryTag(categorySlug: string): string {
  return `spots-cat-${categorySlug}`;
}
