/**
 * 記事トピッククラスター設定モジュール
 *
 * このファイルでは以下の3種類の内部リンク設定を管理する:
 *   1. ARTICLE_SPOT_LINKS  — 記事のh3見出し → 関連スポットカード
 *   2. ARTICLE_RELATED_MAP — 記事スラッグ → 関連記事スラッグ（手動優先）
 *   3. スコアリング関数群   — 手動定義がない場合の自動関連度計算
 *
 * 運用フロー:
 *   - 新記事を公開したら ARTICLE_RELATED_MAP に手動で関連記事を追加する
 *   - 手動定義がない記事はスコアリング関数によって自動選択される
 *   - ARTICLE_SPOT_LINKS はトピッククラスターの核となる内部リンク。
 *     h3見出しテキストを完全一致で検索するため、実際の記事の見出しと揃えること
 */

// ─── スポットリンク ───────────────────────────────────────────────────────────

export type SpotLink = {
  name: string;
  /** /{category}/{spotSlug}/ 形式の内部パス */
  href: string;
  image?: string;
};

export type ArticleH3SpotLinks = Record<string, SpotLink[]>;

/**
 * 記事のh3見出しに紐づける夜景スポットリンクの設定。
 *
 * 追加方法:
 *   1. 記事の実際のh3見出しテキストを完全一致でキーにする
 *   2. 紐づけるスポットを SpotLink[] で列挙する
 *   3. href は /{category}/{spotSlug}/ 形式（DB の category.slug / spot.slug と一致させること）
 *
 * 例:
 * "article-slug": {
 *   "夜景撮影の名所": [
 *     { name: "東京タワー", href: "/tower/tokyo-tower/" },
 *   ],
 * },
 *
 * 注意: h3テキストが一致しない場合はスポットリンクが挿入されないだけで副作用はない。
 *       新記事を公開したら対応するセクションを追加すること。
 */
export const ARTICLE_SPOT_LINKS: Record<string, ArticleH3SpotLinks> = {
  // タイムラプス撮影設定記事
  "timelapse-camera-settings": {
    "夜景タイムラプスの撮影場所": [
      { name: "東京タワー", href: "/tower/tokyo-tower/" },
      { name: "レインボーブリッジ", href: "/port/rainbow-bridge/" },
    ],
  },
  // タイムラプス制作ハウツー
  "create-timelapse": {
    "タイムラプス撮影におすすめの夜景スポット": [
      { name: "東京タワー", href: "/tower/tokyo-tower/" },
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

// ─── 関連記事マップ ───────────────────────────────────────────────────────────

/**
 * 記事スラッグ → 関連記事スラッグリストの手動定義。
 * ここに定義した記事は自動スコアリングより優先して表示される。
 * 手動定義で埋まらない枠は自動スコアリング（タイトル・スラッグ類似度）で補完される。
 *
 * 運用メモ:
 *   - slug は DB の articles.slug と完全一致させること
 *   - timelapse-calculator は DB 記事ではなく静的ページのため含めない
 *   - 新記事を追加したらここに双方向で登録する
 */
export const ARTICLE_RELATED_MAP: Record<string, string[]> = {
  // タイムラプス制作ハウツー ↔ 撮影機材まとめ ↔ 撮影設定ガイド（カメラ・撮影技術系）
  "create-timelapse": ["my-photographic-equipment", "timelapse-camera-settings"],
  "my-photographic-equipment": ["create-timelapse", "timelapse-camera-settings"],
  "timelapse-camera-settings": ["create-timelapse", "my-photographic-equipment"],
  // 新記事を追加したらここに双方向で登録する（slug は articles.slug と完全一致）
};

// ─── スコアリング関数 ─────────────────────────────────────────────────────────

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
 * タイトル・説明文をキーワードトークンに分解する。
 * スペース・句読点・括弧類で分割し、2文字以上のトークンを抽出する。
 */
export function extractTextKeywords(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .split(/[\s\-\/、。！？「」【】・()（）：:]+/)
      .filter((t) => t.length >= 2)
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

type ArticleMeta = {
  slug: string;
  title?: string | null;
  description?: string | null;
};

/**
 * 2記事間の関連度スコアを計算する。
 *
 * スコア構成（高いほど関連性が高い）:
 *   - スラッグキーワード一致: × 2（意図的に選ばれたキーワード）
 *   - タイトルキーワード一致: × 2
 *   - 説明文キーワード一致:   × 1
 */
/**
 * 開発環境限定: 引数の記事スラグのうち ARTICLE_SPOT_LINKS 未設定のものをコンソールに出力する。
 * 本番環境では何もしない。
 * page.tsx などの generateStaticParams 後に呼び出すことを想定。
 */
export function warnMissingSpotLinks(articleSlugs: string[]): void {
  if (process.env.NODE_ENV !== "development") return;
  const missing = articleSlugs.filter((s) => !(s in ARTICLE_SPOT_LINKS));
  if (missing.length > 0) {
    console.warn(
      "[article-spot-links] ARTICLE_SPOT_LINKS 未設定の記事スラグ:",
      missing.join(", ")
    );
  }
}

export function computeArticleRelatedScore(
  current: ArticleMeta,
  candidate: ArticleMeta
): number {
  let score = 0;

  score += slugOverlapScore(current.slug, candidate.slug) * 2;

  if (current.title && candidate.title) {
    const ta = extractTextKeywords(current.title);
    const tb = extractTextKeywords(candidate.title);
    for (const k of ta) if (tb.has(k)) score += 2;
  }

  if (current.description && candidate.description) {
    const da = extractTextKeywords(current.description);
    const db = extractTextKeywords(candidate.description);
    for (const k of da) if (db.has(k)) score += 1;
  }

  return score;
}
