import type { Metadata } from "next";
import Link from "next/link";
import MoonLoader from "./MoonLoader";
import MoonInfoModal from "@/components/moon/MoonInfoModal";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";

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
        width: 1424,
        height: 752,
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
  {
    q: "満月の撮影計画に使えますか？",
    a: "はい。撮影日・撮影地点を指定すると、満月がどの方角から昇るか・何時頃に昇るかを事前に把握できます。月と夜景の構図を決めるロケハンにご活用ください。",
  },
  {
    q: "星景写真・天体観測の下見に活用できますか？",
    a: "はい。月の出・月の入り時刻と方位角を把握しておくと、月明かりの影響が少ない時間帯を選んだり、月を画角に入れた構図を計画したりするのに役立ちます。",
  },
  {
    q: "月齢とはどういう意味ですか？",
    a: "新月を0として数えた月の経過日数です。月齢0が新月、月齢7前後が上弦の月、月齢15前後が満月、月齢22前後が下弦の月にあたります。月齢が高いほど夜遅くに月が昇ります。",
  },
  {
    q: "月出方位角とは何ですか？",
    a: "真北を0°として時計回りに測った、月が昇る方角の角度です。真東が90°、真南が180°、真西が270°にあたります。満月に近い月は太陽とほぼ反対の方角から昇ります。",
  },
  {
    q: "スマートフォンでも利用できますか？",
    a: "はい。スマートフォンのブラウザでそのまま利用できます。現在地ボタンを使えば、外出先からでもすぐに周辺の月の出・月の入り情報を確認できます。",
  },
  {
    q: "過去・未来の特定日の月の出を調べるには？",
    a: "月齢カレンダーから日付を選択するか、「前日／翌日」ボタンで移動して確認できます。次の満月や新月の日付も月齢カレンダーで一覧できます。",
  },
  {
    q: "新月・満月の日をあらかじめ確認できますか？",
    a: "月齢カレンダーに各日の月齢が表示されるため、新月（月齢0前後）や満月（月齢15前後）の日付を一覧で把握できます。撮影スケジュールの計画にお役立てください。",
  },
  {
    q: "計算の精度はどれくらいですか？",
    a: "天文計算ライブラリをもとにした高精度な計算を行っており、実際の月の出・月の入り時刻との誤差は通常1〜2分以内です。地形や大気差（光の屈折）の影響は含まれないため、山間部や海岸では実際の時刻と多少異なる場合があります。",
  },
];

export default function MoonPage() {
  return (
    <>
      {/* ツール本体（100vh / SSR なし） */}
      <MoonLoader />

      {/* SEOモーダル: PC初回訪問時に表示 */}
      <MoonInfoModal faq={FAQ} />

      {/* SP専用コンテンツ: 地図下に常時表示（PCでは非表示） */}
      <section className="moon-sp-content">
        <div className="moon-sp-content__inner">
          <h1 className="moon-sp-content__title">
            月の出・月の入り時刻方角ナビ
            <span className="moon-sp-content__subtitle">月出・月入の方角と時刻シミュレーター</span>
          </h1>
          <p className="moon-sp-content__lead">
            月の出・月の入りの方角（月出方位角）と時刻を地図上で確認できる無料Webアプリです。
            マーカーを動かすだけで任意地点の月齢情報をチェックできます。
            満月や新月の撮影スポットの下見・風景写真の構図検討・天体観測の計画などにご活用ください。
          </p>

          <div className="moon-sp-content__section">
            <h2 className="moon-sp-content__section-title">シミュレーターの使い方</h2>
            <ol className="moon-info-modal__howto">
              <li>地図上をタップ、またはマーカーをドラッグして調べたい地点に移動する</li>
              <li>月の出・月の入りの時刻と方角が自動で更新される</li>
              <li>月齢カレンダーで日付を変えると情報も連動して切り替わる</li>
              <li>施設名・住所・郵便番号で地点を検索することも可能</li>
              <li>現在地ボタンで現在地の月情報をすぐに確認できる</li>
              <li>シェアボタンから地点・日付の設定をコピーして友人や家族に共有できる</li>
            </ol>
          </div>

          <AdSenseUnit slot={ADS.MOON_SIDEBAR.slot} format="auto" label="月ナビSP" />

          <div className="moon-sp-content__section">
            <h2 className="moon-sp-content__section-title">こんな時に役立ちます</h2>
            <div className="moon-definition">
              <dl className="moon-definition__body">
                <dt>満月・新月の撮影計画</dt>
                <dd>月がどの方角から昇るか・何時頃に昇るかを撮影日の前に把握</dd>
                <dt>星景写真・天体観測の下見</dt>
                <dd>月明かりの影響が少ない時間帯を選んで観測計画を立てる</dd>
                <dt>月と夜景の撮影構図</dt>
                <dd>月出方位角を把握して建物・橋・富士山との位置関係を事前確認</dd>
                <dt>海釣り・潮汐管理</dt>
                <dd>満月・新月（大潮）の時期と月の出時刻を合わせて確認</dd>
                <dt>月齢カレンダーの活用</dt>
                <dd>今月・来月の新月・満月の日程を一覧でチェック</dd>
              </dl>
            </div>
          </div>

          <div className="moon-sp-content__section">
            <h2 className="moon-sp-content__section-title">月の出・月の入りの豆知識</h2>
            <div className="moon-definition">
              <dl className="moon-definition__body">
                <dt>月の満ち欠けの周期</dt>
                <dd>月は約29.5日（朔望月）で新月から満月を経て再び新月に戻ります。この周期を「月齢」で表し、月齢0が新月、月齢15前後が満月にあたります。</dd>
                <dt>月出・月入の方位角の変化</dt>
                <dd>月の出る方角は毎日少しずつ変わります。満月に近い月は太陽とほぼ反対方向から昇り、新月に近い月は太陽に近い方角から昇ります。季節によっても大きく変化します。</dd>
                <dt>月と潮汐の関係</dt>
                <dd>月の引力は地球の海面を引き寄せ、潮の満ち引きを生み出します。満月・新月のころは大潮となり、上弦・下弦のころは小潮になります。海沿いの撮影では潮位の確認もおすすめです。</dd>
                <dt>月の出・月の入り時刻の地域差</dt>
                <dd>同じ日でも東に行くほど月の出・月の入りが早くなります。東西に広い日本では地域差が生まれるため、撮影地点に合わせて確認することが大切です。</dd>
                <dt>月光写真と方位角</dt>
                <dd>満月の光は思いのほか明るく、ISO感度を調整することで月明かりを活かした夜景撮影が可能です。このツールで月の位置と方角を事前に確認しておくと構図計画に役立ちます。</dd>
              </dl>
            </div>
          </div>

          <div className="moon-sp-content__section">
            <h2 className="moon-sp-content__section-title">よくある質問</h2>
            <dl>
              {FAQ.map(({ q, a }) => (
                <div key={q} className="moon-faq-item">
                  <dt className="moon-faq-q">{q}</dt>
                  <dd className="moon-faq-a">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="moon-sp-content__link">
            <Link href="/simulator/">日の出・日の入り方角ナビはこちら →</Link>
          </p>
          <p className="moon-sp-content__link">
            <Link href="/">← 東京夜景ナビトップへ戻る</Link>
          </p>
        </div>
      </section>

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
              dateModified: "2026-05-03",
              featureList: [
                "月の出・月の入り方位角計算",
                "月齢・輝面比表示",
                "月齢カレンダー",
                "地図上のマーカーで任意地点を指定",
                "地点名・住所・郵便番号で検索",
                "日付指定（過去・未来対応）",
                "現在地取得",
                "地点・日付URLシェア",
                "ランドマークピン表示",
              ],
              keywords:
                "月の出, 月の入り, 方角, 月齢, マーカー, 地図, シミュレーション",
              countriesSupported: ["JP"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
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
