import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import TimeLapseCalculator from "@/components/article/TimeLapseCalculator";
import { SITE_URL } from "@/lib/types";

const SLUG = "timelapse-calculator";
const TITLE = "タイムラプス計算機 — 撮影間隔・枚数・フレームレートを自動計算";
const DESCRIPTION =
  "タイムラプス撮影に必要な情報を自動計算。撮影時間・撮影間隔・フレームレートを入力すると、撮影枚数・動画の長さ・再生速度が即座に分かります。逆算モードでは希望する動画の長さから必要な撮影時間も計算できます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/article/${SLUG}/` },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/article/${SLUG}/`,
    siteName: "nightscape.tokyo",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function TimeLapseCalculatorPage() {
  return (
    <>
      <main className="l-main l-article-body">
        <div className="l-article-container" style={{ maxWidth: 800 }}>
          <Breadcrumb
            locale={null}
            items={[
              { label: "記事一覧", href: "/article/" },
              { label: "タイムラプス計算機" },
            ]}
          />

          <article itemScope itemType="https://schema.org/Article">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: TITLE,
                  description: DESCRIPTION,
                  url: `${SITE_URL}/article/${SLUG}/`,
                  inLanguage: "ja",
                  author: { "@type": "Organization", name: "nightscape.tokyo", url: SITE_URL },
                  publisher: {
                    "@type": "Organization",
                    name: "nightscape.tokyo",
                    url: SITE_URL,
                    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
                  },
                }),
              }}
            />

            {/* ヘッダー */}
            <div className="content-card card-padding">
              <h1 className="page-title" itemProp="name">{TITLE}</h1>
              <p className="page-lead" style={{ marginBottom: 0 }}>
                撮影時間・撮影間隔・フレームレートを入力するだけで、必要な撮影枚数・動画の長さ・再生速度を自動で計算します。
                希望する動画の長さから逆算して必要な撮影時間を求めることもできます。
              </p>
            </div>

            {/* 計算機 */}
            <div className="content-card card-padding">
              <h2>タイムラプス計算機</h2>
              <TimeLapseCalculator />
            </div>

            {/* 用語解説 */}
            <div className="content-card card-padding">
              <h2>各項目の解説</h2>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">撮影時間（トータルの撮影時間）</h3>
                <p>
                  タイムラプス撮影にかける合計の時間です。夕景から夜景にかけての変化を撮る場合は
                  1〜2時間が一般的です。星空タイムラプスでは数時間になることもあります。
                </p>
              </div>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">撮影間隔（インターバル）</h3>
                <p>
                  1枚ずつ写真を撮るあいだの時間です。夕景タイムラプスでは 3〜10 秒、
                  雲の動きを撮るときは 1〜2 秒、星空では 20〜30 秒が目安です。
                  間隔が短いほど滑らかな動画になりますが、ストレージと編集時間が増えます。
                </p>
              </div>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">フレームレート（fps）</h3>
                <p>
                  動画1秒あたりに表示するコマ数です。映画は 24 fps、テレビ・YouTube は 30 fps が標準的。
                  60 fps は滑らかな映像になりますが、必要な撮影枚数が増えます。
                </p>
              </div>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">撮影枚数</h3>
                <p>
                  <code>撮影枚数 ＝ 撮影時間（秒） ÷ 撮影間隔（秒）</code>
                  <br />
                  例：1時間（3,600秒）を5秒間隔で撮ると 720 枚になります。
                </p>
              </div>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">動画の長さ</h3>
                <p>
                  <code>動画の長さ（秒） ＝ 撮影枚数 ÷ フレームレート</code>
                  <br />
                  例：720 枚を 30 fps で書き出すと 24 秒の動画になります。
                </p>
              </div>

              <div className="tl-calc-term">
                <h3 className="tl-calc-term-heading">再生速度（倍速）</h3>
                <p>
                  <code>再生速度 ＝ 撮影間隔（秒） × フレームレート</code>
                  <br />
                  5 秒間隔・30 fps の場合は 150 倍速となり、現実の150倍の速さで再生されます。
                </p>
              </div>
            </div>

            {/* 目安表 */}
            <div className="content-card card-padding">
              <h2>撮影間隔の目安</h2>
              <div className="tl-calc-table-wrapper">
                <table className="tl-calc-table">
                  <thead>
                    <tr>
                      <th>撮影シーン</th>
                      <th>推奨間隔</th>
                      <th>理由</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>動きの速い雲</td>
                      <td>1〜2 秒</td>
                      <td>速い動きを逃さず滑らかに</td>
                    </tr>
                    <tr>
                      <td>夕景・マジックアワー</td>
                      <td>3〜10 秒</td>
                      <td>色の変化を細かく記録</td>
                    </tr>
                    <tr>
                      <td>都市夜景・車のライト</td>
                      <td>5〜15 秒</td>
                      <td>光跡を美しく残す</td>
                    </tr>
                    <tr>
                      <td>星空・天の川</td>
                      <td>20〜30 秒</td>
                      <td>露光時間を確保しつつ撮影</td>
                    </tr>
                    <tr>
                      <td>花が開く様子・植物</td>
                      <td>5〜30 分</td>
                      <td>非常にゆっくりした動きに対応</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 関連記事 */}
            <div className="content-card card-padding">
              <h2>関連記事</h2>
              <ul className="tl-calc-related-list">
                <li>
                  <Link href="/article/create-timelapse/" className="tl-calc-related-link">
                    一眼カメラでタイムラプス動画を作る方法を5ステップで解説
                  </Link>
                </li>
                <li>
                  <Link href="/time-lapse/" className="tl-calc-related-link">
                    東京夜景のタイムラプス映像集・素材集
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer locale={null} />
    </>
  );
}
