/**
 * AdSense 広告スロット設定
 *
 * slot / format / layout をオブジェクトで管理する。
 * 各コンポーネントで <AdSenseUnit {...ADS.AREA_LIST} /> のように展開して使う。
 *
 * label はローカル開発時のプレースホルダー表示に使用。
 */

export type AdSlotConfig = {
  slot: string;
  format: "auto" | "fluid" | "autorelaxed";
  layout?: "in-article";
  label?: string;
};

export const ADS = {
  /**
   * エリアページ（マップ直後）
   * 形式: ディスプレイ（auto）
   * 設置: src/app/(site)/[category]/page.tsx
   */
  AREA_PAGE: {
    slot: "4868066916",
    format: "auto",
    label: "エリアページマップ下",
  },

  /**
   * エリア一覧ページ（6スポットごとに挿入）
   * 形式: ディスプレイ（auto）
   * 設置: src/components/area/AreaSpotList.tsx
   */
  AREA_LIST: {
    slot: "5424433280",
    format: "auto",
    label: "一覧ページ",
  },

  /**
   * 記事詳細ページ（H2セクション2つ目の直後）
   * 形式: 記事内広告（fluid / in-article）
   * 設置: src/app/(public)/article/[slug]/page.tsx
   */
  ARTICLE_IN: {
    slot: "8034072726",
    format: "fluid",
    layout: "in-article",
    label: "記事内",
  },

  /**
   * 記事詳細ページ（関連記事の直前）
   * 形式: Multiplex（autorelaxed）
   * 設置: src/app/(public)/article/[slug]/page.tsx
   */
  ARTICLE_MULTI: {
    slot: "7671322671",
    format: "autorelaxed",
    label: "記事Multiplex",
  },

  /**
   * スポット詳細ページ（ギャラリー直後）
   * 形式: 記事内広告（fluid / in-article）
   * 設置: src/components/spot/SpotArticle.tsx
   */
  SPOT_IN: {
    slot: "1806789307",
    format: "fluid",
    layout: "in-article",
    label: "スポット記事内",
  },

  /**
   * スポット詳細ページ（関連スポットの直前）
   * 形式: Multiplex（autorelaxed）
   * 設置: src/components/spot/SpotArticle.tsx
   */
  SPOT_MULTI: {
    slot: "1714394776",
    format: "autorelaxed",
    label: "スポットMultiplex",
  },

  /**
   * シミュレーターサイドバー（SNSシェアボタン下）
   * 形式: ディスプレイ（auto）
   * 設置: src/components/simulator/SimulatorSidebar.tsx
   */
  SIMULATOR_SIDEBAR: {
    slot: "2860460061",
    format: "auto",
    label: "シミュレーターサイドバー",
  },
} as const satisfies Record<string, AdSlotConfig>;
