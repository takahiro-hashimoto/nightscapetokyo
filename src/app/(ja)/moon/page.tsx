import type { Metadata } from "next";
import MoonLoader from "./MoonLoader";
import MoonInfoModal from "@/components/moon/MoonInfoModal";

const SITE_URL = "https://nightscape.tokyo";

const OG_TITLE =
  "月の出・月の入り方角ナビ｜月出・月入の方角と時刻がわかるシミュレーター";
const OG_DESC =
  "月の出・月の入りの方角と時刻を地図上で確認できる無料Webアプリ。マーカーを動かすだけで任意地点の月齢・月出方位角をチェック。満月撮影・天体観測・星景写真の下見に。";

export const metadata: Metadata = {
  title: "月の出・月の入りナビ|月出・月入の方角と時刻がわかるシミュレーションアプリ",
  description:
    "月の出・月の入りの方角や時刻を日毎に表示できる計算ツール（webアプリ）です。月がどこから昇るのか、どこへ沈むのかなどを簡単にチェックできるので、満月や新月の撮影・天体観測に出かける時にぜひご活用ください！",
  keywords: [
    "月の出",
    "月の入り",
    "方角",
    "月齢",
    "月出",
    "月入",
    "方位角",
    "満月",
    "新月",
    "三日月",
    "上弦の月",
    "下弦の月",
    "月の満ち欠け",
    "天体観測",
    "星景写真",
  ],
  alternates: {
    canonical: `${SITE_URL}/moon/`,
    languages: {
      ja: `${SITE_URL}/moon/`,
      "x-default": `${SITE_URL}/moon/`,
    },
  },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: OG_DESC,
    url: `${SITE_URL}/moon/`,
    siteName: "東京夜景ナビ",
    locale: "ja_JP",
    images: [
      {
        url: `${SITE_URL}/og-moon-tool.png`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
    images: [`${SITE_URL}/og-moon-tool.png`],
  },
};

const FAQ = [
  {
    q: "現在地で月の出・月の入り時刻を見るには？",
    a: "位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での月出・月入の方角と時刻が表示されます。",
  },
  {
    q: "月の満ち欠けはどこで確認できますか？",
    a: "サイドバー（PC）またはヘッダー（スマートフォン）に月の満ち欠けの名称と輝面比（照らされている割合）が表示されます。",
  },
  {
    q: "マーカーの動かし方がわかりません",
    a: "マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、月の出・月の入りの情報が更新されます。",
  },
  {
    q: "地図上の方位線の意味は？",
    a: "黄色の線は月が昇る方角（月の出）、シルバーの線は月が沈む方角（月の入り）を示しています。月齢や季節によって角度が変わります。",
  },
  {
    q: "なぜ月の出の時刻が毎日大きく変わるの？",
    a: "月は地球のまわりを約29.5日で公転しているため、毎日約50分ずつ月の出の時刻が遅くなります。新月のころは昼に昇り、満月のころは夕方に昇るのが一般的です。",
  },
];

export default function MoonPage() {
  return (
    <>
      {/* ツール本体（100vh / SSR なし） */}
      <MoonLoader />

      {/* SEOモーダル: 初回訪問時に表示、Google は常に open 状態で認識 */}
      <MoonInfoModal faq={FAQ} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "東京夜景ナビ",
                  item: "https://nightscape.tokyo/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "【月の出・月の入りナビ】月出・月入の方角と時刻がわかるシミュレーションアプリ",
                  item: "https://nightscape.tokyo/moon/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "【月の出・月の入りナビ】月出・月入の方角と時刻がわかるシミュレーションアプリ",
              description:
                "月の出と月の入りの時刻や方角を地図上で確認できるWebアプリ。マーカーを移動して指定地点の月齢情報も簡単にチェック可能。",
              applicationCategory: "UtilityApplication",
              applicationSubCategory: "月齢シミュレーション",
              operatingSystem: "Web",
              url: "https://nightscape.tokyo/moon/",
              keywords:
                "月の出, 月の入り, 方角, 月齢, マーカー, 地図, シミュレーション",
              countriesSupported: ["JP"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
