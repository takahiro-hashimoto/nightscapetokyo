import type { SiteLocale } from "@/lib/types";

/* ---- LanguageSwitcher: aria-label ---- */
export const LANG_SWITCHER_LABELS: Record<SiteLocale, string> = {
  ja: "言語を選択",
  en: "Select language",
  ko: "언어 선택",
  tw: "選擇語言",
  cn: "选择语言",
};

/* ---- アフィリエイトリンクのローカライズ ---- */
/**
 * サービス名ごとの正規表現パターンと翻訳ラベル。
 * DB内の表記ゆれ（「空室を見る」「空室状況をチェック」「予約する」等）に対応するため
 * サービス名を検出してテキスト全体を置換する。
 */
const AFFILIATE_SERVICE_PATTERNS: Array<{
  pattern: RegExp;
  labels: Record<string, string>;
}> = [
  {
    pattern: /楽天トラベル[^<]*/g,
    labels: {
      en: "Check availability on Rakuten Travel",
      ko: "라쿠텐 트래블에서 빈방 확인",
      tw: "在樂天旅遊查看空房",
      cn: "在乐天旅游查看空房",
    },
  },
  {
    pattern: /Booking\.com[^<]*/g,
    labels: {
      en: "Check availability on Booking.com",
      ko: "Booking.com에서 빈방 확인",
      tw: "在Booking.com查看空房",
      cn: "在Booking.com查看空房",
    },
  },
  {
    pattern: /じゃらん(?:\.net)?[^<]*/g,
    labels: {
      en: "Check availability on Jalan.net",
      ko: "Jalan.net에서 빈방 확인",
      tw: "在Jalan.net查看空房",
      cn: "在Jalan.net查看空房",
    },
  },
  {
    pattern: /一休(?:\.com)?[^<]*/g,
    labels: {
      en: "Check availability on Ikyu.com",
      ko: "Ikyu.com에서 빈방 확인",
      tw: "在一休.com查看空房",
      cn: "在一休.com查看空房",
    },
  },
];

/**
 * アフィリエイトリンクHTML内の日本語ボタンラベルを指定ロケールに置換する。
 * サービス名を正規表現で検出するため、DB内の表記ゆれにも対応。
 * ja または未指定の場合はそのまま返す。
 */
export function localizeAffiliateHtml(html: string, locale: string | null | undefined): string {
  if (!locale || locale === "ja") return html;
  let result = html;
  for (const { pattern, labels } of AFFILIATE_SERVICE_PATTERNS) {
    const translated = labels[locale];
    if (translated) result = result.replace(pattern, translated);
  }
  return result;
}
