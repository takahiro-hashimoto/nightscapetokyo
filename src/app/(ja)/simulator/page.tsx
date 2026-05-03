import type { Metadata } from "next";
import Link from "next/link";
import SimulatorLoader from "./SimulatorLoader";
import SimulatorInfoModal from "@/components/simulator/SimulatorInfoModal";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";

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
        url: `${SITE_URL}/og-simulator-tool.png`,
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
    images: [`${SITE_URL}/og-simulator-tool.png`],
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
  {
    q: "初日の出スポットの下見に使えますか？",
    a: "はい。元旦の日付を指定して候補スポットにマーカーを置くと、初日の出の方角と時刻を事前に確認できます。高い建物や山が視界を遮らない方角かどうかのチェックにもご活用ください。",
  },
  {
    q: "写真・動画撮影の構図決めに活用できますか？",
    a: "はい。朝日・夕日が差し込む方角と時刻を撮影日・撮影地点に合わせて把握できるため、「どの角度から光が入るか」「何時頃がゴールデンタイムか」をロケハン前に確認できます。",
  },
  {
    q: "マンションや建物の日当たり確認に使えますか？",
    a: "はい。物件の住所を検索してマーカーを置き、日付を変えながら季節ごとの日の出・日の入り方角を確認することで、年間を通じた日照の変化をイメージできます。",
  },
  {
    q: "日の出・日の入りの時刻は毎日変わりますか？",
    a: "はい、毎日少しずつ変化します。夏至（6月下旬）に向かって日照時間が伸び、冬至（12月下旬）に向かって短くなります。「前日／翌日」ボタンで日付を変えると変化を連続して確認できます。",
  },
  {
    q: "方位角とはどういう意味ですか？",
    a: "真北を0°として時計回りに測った角度です。真東が90°、真南が180°、真西が270°にあたります。春分・秋分の日の出方位角はほぼ90°（真東）になります。",
  },
  {
    q: "スマートフォンでも利用できますか？",
    a: "はい。スマートフォンのブラウザでそのまま利用できます。現在地ボタンを使えば、外出先からでもすぐに周辺の日の出・日の入り情報を確認できます。",
  },
  {
    q: "過去・未来の特定日の情報を調べるには？",
    a: "「前日／翌日」ボタンで1日ずつ移動できます。遠い日付を調べる場合は、ヘッダーの日付表示をタップするとカレンダーから直接日付を選択できます。",
  },
  {
    q: "計算の精度はどれくらいですか？",
    a: "天文計算ライブラリをもとにした高精度な計算を行っており、実際の日の出・日の入り時刻との誤差は通常1〜2分以内です。地形や大気差（光の屈折）の影響は含まれないため、山間部や海岸では実際の時刻と多少異なる場合があります。",
  },
];

export default function SimulatorPage() {
  return (
    <>
      {/* ツール本体（100vh / SSR なし） */}
      <SimulatorLoader />

      {/* SEOモーダル: PC初回訪問時に表示 */}
      <SimulatorInfoModal faq={FAQ} />

      {/* SP専用コンテンツ: 地図下に常時表示（PCでは非表示） */}
      <section className="sim-sp-content">
        <div className="sim-sp-content__inner">
          <h1 className="sim-sp-content__title">
            日の出・日の入り方角ナビ
            <span className="sim-sp-content__subtitle">朝日と夕日の方角・時刻シミュレーター</span>
          </h1>
          <p className="sim-sp-content__lead">
            日の出・日の入りの方角（方位角）と時刻を地図上で確認できる無料Webアプリです。
            マーカーを動かすだけで任意地点の日照情報をチェックできます。
            初日の出スポットの下見・風景写真の撮影構図の検討・マンションや建物の日当たり確認などにご活用ください。
          </p>

          <div className="sim-sp-content__section">
            <h2 className="sim-sp-content__section-title">シミュレーターの使い方</h2>
            <ol className="sim-info-modal__howto">
              <li>地図上をタップ、またはマーカーをドラッグして調べたい地点に移動する</li>
              <li>日の出・日の入りの時刻と方角が自動で更新される</li>
              <li>「前日 / 翌日」で日付を変更して季節ごとの変化を確認できる</li>
              <li>施設名・住所・郵便番号で地点を検索することも可能</li>
              <li>現在地ボタンで現在地の情報をすぐに確認できる</li>
              <li>シェアボタンから地点・日付の設定をコピーして友人や家族に共有できる</li>
            </ol>
          </div>

          <AdSenseUnit slot={ADS.SIMULATOR_SIDEBAR.slot} format="auto" label="シミュレーターSP" />

          <div className="sim-sp-content__section">
            <h2 className="sim-sp-content__section-title">こんな時に役立ちます</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt>初日の出の下見</dt>
                <dd>元旦の日付を指定して候補スポットの方角・時刻を事前確認</dd>
                <dt>朝日・夕日の撮影構図</dt>
                <dd>撮影日と地点を合わせて光が差し込む方角とゴールデンタイムを把握</dd>
                <dt>マンション・不動産の日当たり確認</dt>
                <dd>物件の住所を検索して季節ごとの日照変化をチェック</dd>
                <dt>ハイキング・登山の計画</dt>
                <dd>山頂や展望台からの日の出方角を日程に合わせて確認</dd>
                <dt>農作業・園芸の日照管理</dt>
                <dd>畑やベランダへの日当たりを季節別に確認</dd>
              </dl>
            </div>
          </div>

          <div className="sim-sp-content__section">
            <h2 className="sim-sp-content__section-title">日の出・日の入りの豆知識</h2>
            <div className="sim-definition">
              <dl className="sim-definition__body">
                <dt>夏至（6/21）</dt>
                <dd>1年でもっとも日照時間が長い日。方位角は北寄りになり、北東から朝日が昇り、北西に夕日が沈んでいく。</dd>
                <dt>冬至（12/22）</dt>
                <dd>1年でもっとも日照時間が短い日。方位角は南寄りになり、南東から朝日が昇り、南西に夕日が沈んでいく。</dd>
                <dt>春分（3/20）・秋分（9/22）</dt>
                <dd>昼と夜の時間がほぼ同じになる日。真東（方位角90°）から朝日が昇り、真西（270°）に夕日が沈んでいく。</dd>
                <dt>日の出・日の入り時刻の地域差</dt>
                <dd>同じ日でも東に行くほど日の出・日の入りが早くなります。（経度1度東に進むごとに約4分早まる）</dd>
                <dt>建物・マンションの日当たりと方角</dt>
                <dd>南向きが最も日照時間を確保しやすく、東向きは朝日・西向きは夕日が差し込みます。季節ごとに方位角が変わるため、このツールで年間の日差しの変化を確認できます。</dd>
              </dl>
            </div>
          </div>

          <div className="sim-sp-content__section">
            <h2 className="sim-sp-content__section-title">よくある質問</h2>
            <dl>
              {FAQ.map(({ q, a }) => (
                <div key={q} className="faq-item">
                  <dt className="faq-q">{q}</dt>
                  <dd className="faq-a">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="sim-sp-content__link">
            <Link href="/moon/">月の出・月の入り方角ナビはこちら →</Link>
          </p>
          <p className="sim-sp-content__link">
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
              dateModified: "2026-05-03",
              featureList: [
                "日の出・日の入り方位角計算",
                "地図上のマーカーで任意地点を指定",
                "地点名・住所・郵便番号で検索",
                "日付指定（過去・未来対応）",
                "現在地取得",
                "地点・日付URLシェア",
                "ランドマークピン表示",
              ],
              keywords:
                "日の出, 日の入り, 方角, マーカー, 地図, シミュレーション",
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
