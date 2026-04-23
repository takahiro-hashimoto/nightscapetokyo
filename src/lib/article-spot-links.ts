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

/**
 * 記事スラッグ → 関連記事スラッグリストの手動定義。
 * ここに定義した記事は日付順より優先して表示される。
 * 残り枠は日付順の新着で補完される。
 */
export const ARTICLE_RELATED_MAP: Record<string, string[]> = {};

/**
 * スラッグをキーワードトークンに分解する（ハイフン区切り）。
 * 数字のみのトークンは除外する（年号等のノイズを減らす）。
 */
export function extractSlugKeywords(slug: string): Set<string> {
  return new Set(
    slug.split("-").filter((t) => t.length > 1 && !/^\d+$/.test(t))
  );
}

/**
 * 2つのスラッグ間の共通キーワード数を返す。
 */
export function slugOverlapScore(a: string, b: string): number {
  const ka = extractSlugKeywords(a);
  const kb = extractSlugKeywords(b);
  let score = 0;
  for (const k of ka) if (kb.has(k)) score++;
  return score;
}
