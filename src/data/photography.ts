/**
 * 撮影依頼ページ（/photography/）の運営者編集用データ。
 *
 * ⚠️ ここは「運営者が後から容易に変更できる」値を集約する場所です（要件定義 §3.4 / §3.7 / §8）。
 *    金額・PV数・フォロワー数・事業者名・受信メール等は本ファイルだけを編集すれば反映されます。
 *    金額の具体値は未確定のため "TBD" プレースホルダで構築しています。数値を確定したら差し替えてください。
 *
 * 表示文言（各言語）は src/lib/i18n-static/photography.ts の PHOTOGRAPHY_LABELS 側にあります。
 * 本ファイルは言語に依存しない「数値・設定」のみを持ちます。
 */

/**
 * 料金表の金額（言語非依存の数値部分）。単位・注記は各言語の辞書側に持たせています。
 * ※ 下記は目安のたたき台。運営者がいつでもここで調整できます（"TBD" にすると「要お見積り」表示に戻ります）。
 */
export const PHOTOGRAPHY_PRICING: Record<string, string> = {
  halfDay: "8万円〜", // 半日撮影（4時間程度）
  fullDay: "15万円〜", // 1日撮影（8時間程度）
  timelapse: "5万円〜", // タイムラプス撮影 1カット
  stock: "1万円〜", // ストック素材ライセンス 1点
  packagePlan: "30万円〜", // 撮影＋記事掲載パッケージ
};

/** 受注する最低金額のライン（任意表示・要件 §8）。未確定は空文字。 */
export const PHOTOGRAPHY_MIN_BUDGET = "";

/**
 * 構造化データ（ProfessionalService.hasOfferCatalog）用の数値価格。
 * 表示用の PHOTOGRAPHY_PRICING と整合させること（minPrice は「〜」の起点金額・円）。
 */
export const PHOTOGRAPHY_OFFERS: { name: string; minPrice: number }[] = [
  { name: "半日撮影（4時間程度・レタッチ済み15〜30枚程度）", minPrice: 80000 },
  { name: "1日撮影（8時間程度・レタッチ済み30〜50枚程度）", minPrice: 150000 },
  { name: "タイムラプス撮影（1カット・完成尺20〜25秒程度）", minPrice: 50000 },
  { name: "ストック素材ライセンス（1点・Web掲載）", minPrice: 10000 },
  { name: "撮影＋記事掲載パッケージ", minPrice: 300000 },
];

/**
 * 撮影＋掲載パッケージの訴求数値（要件 §3.7）。
 * PV・各SNSフォロワー数は最新値に差し替えてください。未確定は "TBD"。
 */
export const PHOTOGRAPHY_REACH = {
  monthlyPv: "TBD", // 例: "20〜30万"
  followers: {
    youtube: "TBD",
    instagram: "TBD",
    x: "TBD",
    tiktok: "TBD",
    pinterest: "TBD",
    lemon8: "TBD",
  } as Record<string, string>,
};

/**
 * クライアント実績（要件 §3.2）。
 * ロゴ掲載は各社許諾が必要なため初期リリースはテキスト表記。
 * 許諾が取れ次第 logoSrc を設定するとロゴ表示に切り替えられる構造。
 */
export type PhotographyClient = { name: string; logoSrc?: string };
export const PHOTOGRAPHY_CLIENTS: PhotographyClient[] = [
  { name: "東京タワー" },
  { name: "ザ・プリンス パークタワー東京" },
  { name: "NHK総合" },
  { name: "BS-TBS" },
  { name: "テレビ朝日" },
  { name: "AIROS Skyview" },
];

/** 依頼〜納品フローの所要日数目安（要件 §3.5・§8）。未確定は空文字で非表示。 */
export const PHOTOGRAPHY_FLOW_DAYS: Record<string, string> = {
  inquiry: "", // 例: "即日〜1営業日"
  hearing: "",
  estimate: "", // 例: "2営業日程度"
  shooting: "",
  retouch: "",
  delivery: "", // 例: "撮影から7〜10日程度"
};

/** 226箇所の夜景データベース裏付け（要件 §3.6-1）。スポット掲載数。 */
export const PHOTOGRAPHY_SPOT_COUNT = 226;

/**
 * 作例ギャラリー（要件 §3.8）。
 * ⚠️ クライアント案件の作例掲載には各社の許諾が必要。初期リリースは許諾済み・自主制作のみ。
 *    未確認素材は載せないこと。画像未確定のため初期は空配列（枠のみ）。
 */
export type PhotographyGalleryItem = {
  category: "room" | "facility" | "timelapse" | "event";
  src: string;
  alt: string;
  location?: string;
  gear?: string;
  /** タイムラプスは YouTube 埋め込みIDを指定可 */
  youtubeId?: string;
};
export const PHOTOGRAPHY_GALLERY: PhotographyGalleryItem[] = [
  // TODO(operator): 許諾済み or 自主制作の作例を追加。例:
  // { category: "room", src: "https://pub-....r2.dev/photography/room-01.jpg", alt: "...", location: "港区", gear: "Sony α7 IV" },
];

/**
 * 撮影依頼フォーム（Google フォーム）の埋め込み URL（要件 §3.10）。
 * 撮影依頼専用フォーム（読者向け /contact/ とは分離）。
 * 空文字にすると、フォームの代わりに /contact/ への暫定リンクを表示します。
 */
export const PHOTOGRAPHY_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeotTvwu9sLFTxrZiaPfo-RGFJfwg6sHXusO6gohc59Ytk6-Q/viewform?embedded=true";

/** ヒーロー画像。LCP対象。代表作の夜景写真に差し替え可（要件 §3.1）。 */
export const PHOTOGRAPHY_HERO_IMAGE = "/hero.jpg";

/** OGP画像。TODO(operator): 本ページ専用のOGP画像を用意して差し替え（要件 §4）。 */
export const PHOTOGRAPHY_OG_IMAGE = "/hero.jpg";

/** SNS リンク（パッケージ・sameAs 用）。about-content と同じアカウント。 */
export const PHOTOGRAPHY_SNS = {
  youtube: "https://www.youtube.com/@nightscape-tokyo",
  x: "https://twitter.com/takahiro__1202",
  instagram: "https://www.instagram.com/nightscape.tokyo/",
  tiktok: "https://www.tiktok.com/@nightscape_tokyo",
  pinterest: "https://www.pinterest.jp/nightscape_tokyo/",
};
