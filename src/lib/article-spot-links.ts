/**
 * 記事のh3見出しに紐づける夜景スポットリンクの設定。
 *
 * 構造:
 *   articleSlug → {
 *     "h3テキスト（完全一致）" → SpotLink[]
 *   }
 *
 * SpotLink.href は /{category}/{spotSlug}/ 形式の内部パス。
 */

export type SpotLink = {
  name: string;
  href: string;
  image?: string;
};

export type ArticleH3SpotLinks = Record<string, SpotLink[]>;

export const ARTICLE_SPOT_LINKS: Record<string, ArticleH3SpotLinks> = {};

/**
 * h3テキストに対応するスポットリンクを取得する。
 * 該当なし / 設定なし の場合は空配列を返す。
 */
export function getSpotLinksForH3(
  articleSlug: string,
  h3Text: string
): SpotLink[] {
  return ARTICLE_SPOT_LINKS[articleSlug]?.[h3Text] ?? [];
}
