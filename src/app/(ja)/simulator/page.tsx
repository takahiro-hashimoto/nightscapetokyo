import type { Metadata } from "next";
import SimulatorLoader from "./SimulatorLoader";
import SimulatorInfoModal from "@/components/simulator/SimulatorInfoModal";

const SITE_URL = "https://nightscape.tokyo";

const OG_TITLE =
  "日の出・日の入り方角ナビ｜朝日と夕日の方角と時刻がわかるシミュレーター";
const OG_DESC =
  "日の出・日の入りの方角と時刻を地図上で確認できる無料Webアプリ。マーカーを動かすだけで任意地点の情報をチェック。旅行・夜景撮影・初日の出の下見に。";

export const metadata: Metadata = {
  title: "日の出・日の入りナビ|朝日と夕日の方角と時刻がわかるシミュレーションアプリ",
  description:
    "日の出・日の入りの方角や時刻を日毎に表示できる計算ツール（webアプリ）です。朝日がどこから昇るのか、夕日がどこへ沈むのかなどを簡単にチェックできるので、旅行や写真撮影に出かける時にぜひご活用ください！",
  keywords: [
    "日の出",
    "日の入り",
    "方角",
    "方向",
    "日没",
    "朝日",
    "夕日",
    "日食",
    "夏至",
    "冬至",
    "初日の出",
  ],
  alternates: {
    canonical: `${SITE_URL}/simulator/`,
    languages: {
      ja: `${SITE_URL}/simulator/`,
      "x-default": `${SITE_URL}/simulator/`,
    },
  },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: OG_DESC,
    url: `${SITE_URL}/simulator/`,
    siteName: "東京夜景ナビ",
    locale: "ja_JP",
    images: [
      {
        url: `${SITE_URL}/hero.jpg`,
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
    images: [`${SITE_URL}/hero.jpg`],
  },
};

const FAQ = [
  {
    q: "現在地で日の出・日の入り時刻を見るには？",
    a: "位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での方角と時刻が表示されます。",
  },
  {
    q: "海外でも使えますか？",
    a: "方角計算自体は可能ですが、時差やサマータイムには対応していないため、正確な時刻は日本国内での利用を推奨しています。",
  },
  {
    q: "マーカーの動かし方がわかりません",
    a: "マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、日の出・日の入りの情報が更新されます。",
  },
  {
    q: "地図上の方位線の意味は？",
    a: "赤い線は朝日が昇る方角（日の出）、オレンジの線は夕日が沈む方角（日の入り）を示しています。季節によって角度が変わります。",
  },
  {
    q: "なぜ場所によって時刻が違うの？",
    a: "日本は東西に長いため、東に行くほど日の出・日の入りが早くなります。経度1度で約4分の差が出るため、同じ日でも地域差が生まれます。",
  },
];

export default function SimulatorPage() {
  return (
    <>
      {/* ツール本体（100vh / SSR なし） */}
      <SimulatorLoader />

      {/* SEOモーダル: 初回訪問時に表示、Google は常に open 状態で認識 */}
      <SimulatorInfoModal faq={FAQ} />

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
                  name: "【日の出・日の入りナビ】朝日と夕日の方角と時刻がわかるシミュレーションアプリ",
                  item: "https://nightscape.tokyo/simulator/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "【日の出・日の入りナビ】朝日と夕日の方角と時刻がわかるシミュレーションアプリ",
              description:
                "日の出と日の入りの時刻や方角を地図上で確認できるWebアプリ。マーカーを移動して指定地点の情報も簡単にチェック可能。",
              applicationCategory: "UtilityApplication",
              applicationSubCategory: "日照シミュレーション",
              operatingSystem: "Web",
              url: "https://nightscape.tokyo/simulator/",
              keywords:
                "日の出, 日の入り, 方角, マーカー, 地図, シミュレーション",
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
