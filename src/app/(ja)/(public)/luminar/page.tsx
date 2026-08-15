import { jsonLdHtml } from "@/lib/json-ld-script";
import type { Metadata } from 'next'
import Link from '@/components/common/AppLink'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/layout/Breadcrumb'
import LuminarCtaSale from '@/components/luminar/LuminarCtaSale'
import SpotShare from '@/components/spot/SpotShare'
import HomeAuthorCard from '@/components/common/HomeAuthorCard'
import {
  LUMINAR_SITE_NAME,
  LUMINAR_SITE_DESCRIPTION,
  LUMINAR_SITE_URL,
} from '@/lib/luminar/config'
import { PLANS, PRIME, LIGHTROOM, yen, approxYen } from '@/lib/luminar/pricing'
import { getSaleSettings } from '@/lib/luminar/getSaleSettings'
import { SaleSettingsProvider } from '@/contexts/SaleSettingsContext'

/** このページの最終更新日。dateTime 属性と表示テキストの両方に使う */
const LAST_UPDATED = '2026-08-13'

const OG_IMAGE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg'

// タイトルと同じ理由で「料金プランの違い」「最安の買い方」は外している（子記事のテーマのため）。
// 旧文にあった「7日間無料体験版」は Skylum に問い合わせても確認が取れていないため記載しない。
const META_DESCRIPTION =
  'Luminar Neo（ルミナーネオ）とは何か、AIで何ができるのかを現役フォトグラファーが解説。編集機能の特徴、買い切りライセンスの仕組み、購入方法まで、はじめての人が知りたい全体像をこの1ページにまとめました。'

// トップページの <title> はサイト名（LUMINAR_SITE_NAME）と切り離している。
//
// 理由: サイト名由来の旧タイトルは「特徴・料金・安く買う方法」で、
//       「料金」は luminar-plan（掲載順位1.6位）、「安く買う方法」は
//       sale-and-coupon-info のテーマそのものだった。つまりトップが
//       自分の子記事とタイトルレベルで競合し、内容が浅いぶん負けていた。
//       逆にトップだけが独占できる「とは」がタイトルに入っていなかった。
//       ブランド系クエリ（ルミナーネオ／luminar neo）でトップは6.5〜16.3位と
//       5ページ中最下位だったため、競合語を外して定義側に寄せる。
//
// LUMINAR_SITE_NAME 自体はサイト識別子（パンくず・siteName・JSON-LD）として
// 使い続けるので変更しない。ここで上書きするのはページの <title> だけ。
const PAGE_TITLE =
  'Luminar Neo（ルミナーネオ）とは？特徴・できること・購入方法を解説【2026年】'

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: META_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${LUMINAR_SITE_URL}/`,
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 880, height: 495, alt: 'Luminar Neo完全購入ガイド' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${LUMINAR_SITE_URL}/`,
  },
}

export default async function LuminarTopPage() {
  // CTA（LuminarCtaSale）はクライアント側で
  // useSaleSettings() を読む。Provider が無いと null になり、
  // セール中でも非セール文言が出てしまうため必ず包むこと。
  const saleSettings = await getSaleSettings()

  return (
    <SaleSettingsProvider value={saleSettings}>
      <div className="l-article-body">
        <div className="l-article-container">

          {/* パンくず */}
          <Breadcrumb items={[{ label: LUMINAR_SITE_NAME }]} />

          <article itemScope itemType="https://schema.org/WebPage">
            <meta itemProp="url" content={`${LUMINAR_SITE_URL}/`} />

            {/* ① メインビジュアル（特集扱いのフルブリード） */}
            <div className="m-hero-feature">
              <Image
                src={OG_IMAGE}
                alt=""
                fill
                className="m-hero-feature__img"
                priority
                sizes="100vw"
              />
              <div className="m-hero-feature__inner">
                <h1 className="m-hero-feature__title">
                  Luminar Neo（ルミナーネオ）とは？<br className="sp-only" />特徴・できること・購入方法
                </h1>
                {/* 日付とバッジはそれぞれ枠線付きなので、背景写真の上でも輪郭が出る。
                    可読性のために敷いていたパネル（m-hero-feature__panel）は不要になり削除した。 */}
                <p className="m-hero-feature__meta">
                  <time className="m-hero-feature__date" dateTime={LAST_UPDATED}>
                    更新日：{new Date(LAST_UPDATED).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="m-hero-feature__badge">一部広告を含みます</span>
                </p>
              </div>
            </div>

            {/* ② リード（ヒーローの下） */}
            <div className="m-page-lead">
              <p>
                Luminar（ルミナー）は、ウクライナのSkylum社が開発する写真編集ソフトです。
                AIを用いて撮影した写真を簡単に高いクオリティに現像できる点や、
                サブスクではなく買い切りで購入できるのが魅力。
              </p>
              <p>
                本ページではそんなLuminar Neoを2年以上使ってきた現役フォトグラファーが、
                Luminarの購入から利用までに必要な情報を体系的に整理しました。
              </p>
            </div>

            {/*
              ここはナビゲーションに徹する。以前は料金・向いている人・Lightroom比較・
              セール・FAQ の解説を並べていたが、すべて子記事と同じテーマで、
              子記事のほうが深く各クエリで1.6〜2.4位を取っていた。トップが同じ土俵に
              立つと勝てないうえに子記事の評価を割るため、STEP別の導線に置き換えている。
              各STEPの導入文は判断材料として最小限に留め、詳細は子記事に譲る。
            */}

            {/* STEP 1 */}
            <section id="step-know" className="m-step-section">
              <h2 className="m-step-section__title">
                <span className="m-step-section__badge">STEP.1</span>知る・見極める
              </h2>
              <p className="m-step-section__lead">
                Luminar Neoが得意なのは、1枚をていねいに仕上げる編集です。
                逆に数百枚をまとめて処理する用途には向いておらず、評価が割れるのもここが理由になっています。
                Lightroomとの違いもあわせて、自分に合うソフトかどうかを見極めましょう。
              </p>
              <Link href="/luminar/expand/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                <span className="m-nav-card__title">Proツール8種でできることを見る</span>
              </Link>
              <Link href="/luminar/merit-demerit/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-star-half-stroke"></i></span>
                <span className="m-nav-card__title">2年以上使ったメリット・デメリット</span>
              </Link>
              <Link href="/luminar/voice/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-comments"></i></span>
                <span className="m-nav-card__title">利用者の口コミ・評判を見る</span>
              </Link>
              <Link href="/luminar/lightroom-compare/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-scale-balanced"></i></span>
                <span className="m-nav-card__title">Lightroomとの料金・機能を比較する</span>
              </Link>
            </section>

            {/* STEP 2 */}
            <section id="step-buy" className="m-step-section">
              <h2 className="m-step-section__title">
                <span className="m-step-section__badge">STEP.2</span>価格を確かめて買う
              </h2>
              <p className="m-step-section__lead">
                Luminar Neoのサブスクプランは廃止され、現在は<strong>買い切り3プランのみ</strong>です。
                追加費用は任意のLuminar Primeだけで、Proツール8種は全プランに標準搭載されています。
                動作の軽さは環境によって差が出るので、体験版で確かめてから購入すると失敗しません。
              </p>
              <Link href="/luminar/luminar-plan/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-tags"></i></span>
                <span className="m-nav-card__title">買い切り3プランの価格と選び方</span>
              </Link>
              <Link href="/luminar/sale-and-coupon-info/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-percent"></i></span>
                <span className="m-nav-card__title">セール時期とクーポンコードを確認する</span>
              </Link>
              <Link href="/luminar/trial/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-download"></i></span>
                <span className="m-nav-card__title">無料体験版のダウンロード方法</span>
              </Link>
            </section>

            {/* STEP 3 */}
            <section id="step-help" className="m-step-section">
              <h2 className="m-step-section__title">
                <span className="m-step-section__badge">STEP.3</span>使い始めてから
              </h2>
              <p className="m-step-section__lead">
                Luminar Neoが起動しない、動作が重いといったトラブルは、原因がある程度決まっています。
                やみくもに再インストールする前に、症状から切り分けるのが近道です。
              </p>
              <Link href="/luminar/opening-failed/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <span className="m-nav-card__title">起動しない・重いときの対処法</span>
              </Link>
              <Link href="/luminar/faq/" className="m-nav-card">
                <span className="m-nav-card__icon"><i className="fa-solid fa-circle-question"></i></span>
                <span className="m-nav-card__title">よくある質問30問をまとめて見る</span>
              </Link>
            </section>

            {/* CTA */}
            <LuminarCtaSale />

          </article>

          {/* 運営者情報 */}
          <HomeAuthorCard authorLabel="この記事の著者" />

        </div>
      </div>

      {/* SNS シェア */}
      <SpotShare
        url={`${LUMINAR_SITE_URL}/`}
        title={PAGE_TITLE}
        labels={{
          heading: 'この記事をシェアする',
          x: 'X (Twitter)',
          line: 'LINE',
          hatena: 'はてな',
          copy: 'URLをコピー',
          copied: 'コピーしました！',
        }}
        locale="ja"
      />

      <Footer locale={null} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${LUMINAR_SITE_URL}/`,
                url: `${LUMINAR_SITE_URL}/`,
                name: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
                description: META_DESCRIPTION,
                inLanguage: 'ja-JP',
                publisher: {
                  '@type': 'Organization',
                  name: LUMINAR_SITE_NAME,
                  url: `${LUMINAR_SITE_URL}/`,
                },
                // breadcrumb はここに書かない。ページ上部の <Breadcrumb> が
                // DOM と一致した BreadcrumbList を出力済みで、二重定義になるため
              },
            ],
          }),
        }}
      />
    </SaleSettingsProvider>
  )
}
