import type { Metadata } from "next";
import Link from "next/link";
import SimulatorLoader from "./SimulatorLoader";

const SITE_URL = "https://nightscape.tokyo";

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
};

export default function SimulatorPage() {
  return (
    <>
      <SimulatorLoader />
      {/* 関連する夜景撮影スポット */}
      <div className="l-article-container" style={{ marginTop: "32px" }}>
        <section className="content-card card-padding">
          <h2 className="area-section-heading">夕景・夜景撮影におすすめのスポット</h2>
          <p className="area-page-lead" style={{ marginBottom: "16px" }}>
            日の出・日の入り方角を確認したら、実際の撮影地を探してみましょう。夕日・朝日を活かした夜景スポットをご紹介しています。
          </p>
          <div className="pill-tag-list">
            <Link href="/tag/date/" className="pill-tag">デートにおすすめ</Link>
            <Link href="/tag/free/" className="pill-tag">無料で楽しめる</Link>
            <Link href="/tag/observatory/" className="pill-tag">展望台・展望スポット</Link>
            <Link href="/tag/park/" className="pill-tag">公園からの夜景</Link>
            <Link href="/minato/" className="pill-tag">港区の夜景スポット</Link>
            <Link href="/sumida/" className="pill-tag">墨田区の夜景スポット</Link>
            <Link href="/recommend/" className="pill-tag">おすすめ夜景スポット一覧</Link>
          </div>
        </section>
      </div>
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
              mainEntity: [
                {
                  "@type": "Question",
                  name: "現在地で日の出・日の入り時刻を見るには？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での方角と時刻が表示されます。",
                  },
                },
                {
                  "@type": "Question",
                  name: "海外でも使えますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "方角計算自体は可能ですが、時差やサマータイムには対応していないため、正確な時刻は日本国内での利用を推奨しています。",
                  },
                },
                {
                  "@type": "Question",
                  name: "マーカーの動かし方がわかりません",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、日の出・日の入りの情報が更新されます。",
                  },
                },
                {
                  "@type": "Question",
                  name: "地図上の方位線の意味は？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "赤い線は朝日が昇る方角（日の出）、オレンジの線は夕日が沈む方角（日の入り）を示しています。季節によって角度が変わります。",
                  },
                },
                {
                  "@type": "Question",
                  name: "なぜ場所によって時刻が違うの？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "日本は東西に長いため、東に行くほど日の出・日の入りが早くなります。経度1度で約4分の差が出るため、同じ日でも地域差が生まれます。",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
