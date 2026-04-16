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

export const ARTICLE_SPOT_LINKS: Record<string, ArticleH3SpotLinks> = {
  "sumida-river-bridge": {
    白鬚橋: [
      { name: "汐入公園", href: "/arakawa/shioiri-park/" },
    ],
    吾妻橋: [
      { name: "ウィングインターナショナルセレクト浅草駒形", href: "/taito/wing-international-select-asakusa-komagata/" },
    ],
    駒形橋: [
      { name: "駒形橋東詰交差点", href: "/sumida/komagatabashi-bridge-intersection/" },
    ],
    蔵前橋: [
      { name: "蔵前橋", href: "/taito/kuramae-bridge/" },
    ],
    清洲橋: [
      { name: "隅田川大橋", href: "/chuo/symida-river-bridge/" },
    ],
    永代橋: [
      { name: "石川島公園", href: "/chuo/ishikawajima-paris-park/" },
    ],
    中央大橋: [
      { name: "石川島公園", href: "/chuo/ishikawajima-paris-park/" },
    ],
    勝鬨橋: [
      { name: "銀座クレストン", href: "/chuo/ginza-crestonhotel/" },
      { name: "インターコンチネンタル東京ベイ", href: "/minato/interconti-tokyo-bay/" },
    ],
    築地大橋: [
      { name: "築地大橋", href: "/chuo/tsukiji-bridge/" },
      { name: "銀座クレストン", href: "/chuo/ginza-crestonhotel/" },
      { name: "インターコンチネンタル東京ベイ", href: "/minato/interconti-tokyo-bay/" },
    ],
    "ウィングインターナショナルセレクト浅草駒形": [
      { name: "ウィングインターナショナルセレクト浅草駒形", href: "/taito/wing-international-select-asakusa-komagata/" },
    ],
    銀座クレストン: [
      { name: "銀座クレストン", href: "/chuo/ginza-crestonhotel/" },
    ],
    "インターコンチネンタル東京ベイ": [
      { name: "インターコンチネンタル東京ベイ", href: "/minato/interconti-tokyo-bay/" },
    ],
  },
};

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
