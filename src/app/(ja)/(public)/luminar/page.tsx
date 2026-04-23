import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ImageComparisonSlider from '@/components/luminar/ImageComparisonSlider'
import LuminarCtaSale from '@/components/luminar/LuminarCtaSale'
import LuminarCtaMini from '@/components/luminar/LuminarCtaMini'
import SpotShare from '@/components/spot/SpotShare'
import HomeAuthorCard from '@/components/common/HomeAuthorCard'
import { getAllPostsSummary, normalizePostSummary } from '@/lib/luminar/articles-meta'
import {
  LUMINAR_SITE_NAME,
  LUMINAR_SITE_DESCRIPTION,
  LUMINAR_SITE_URL,
} from '@/lib/luminar/config'
import { getTopSpots } from '@/lib/supabase/queries'

const OG_IMAGE = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg'

const FAQ_JSON_LD = [
  {
    '@type': 'Question',
    name: '無料体験版はありますか？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'はい、7日間の無料体験版があります。体験版のダウンロード方法や製品版との違いは専用ページで詳しく解説しています。',
    },
  },
  {
    '@type': 'Question',
    name: '拡張機能（Proツール）は必須ですか？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: '必須ではありません。基本機能だけでも十分な編集が可能です。ただし、ノイズ除去や超解像といった高度な処理を使いたい場合はProツールが必要になります。',
    },
  },
  {
    '@type': 'Question',
    name: 'ルミナーネオの評判が知りたいです。',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Luminar Neoは、AI編集の手軽さを評価する声が多い一方、動作の重さや写真管理機能の弱さを指摘する声もあります。サイトで良い口コミ・悪い口コミを整理して解説しています。',
    },
  },
  {
    '@type': 'Question',
    name: '返金保証はありますか？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'はい、購入から30日間は返金保証があります。安心して試せます。',
    },
  },
  {
    '@type': 'Question',
    name: 'WindowsとMac、両方で使えますか？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: '1ライセンスで2台のPCにインストール可能です。Windows・Mac混在でも問題ありません。',
    },
  },
  {
    '@type': 'Question',
    name: '動作が重いと聞きましたが？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'AI処理を多用するため、ある程度のPCスペックは必要です。推奨は16GB以上のRAMとSSD。心配な方は体験版で自分の環境で試してみてください。',
    },
  },
  {
    '@type': 'Question',
    name: 'アップデートは無料ですか？',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'マイナーアップデート（バグ修正など）は無料です。メジャーアップデート（新機能追加）はパス加入者のみ。パス未加入でも購入時のバージョンは永続利用できます。',
    },
  },
]

const TOC = [
  { id: 'about-luminar', text: 'Luminar Neoとは？できること・特徴' },
  { id: 'pricing', text: 'Luminar Neoの料金プランをどう考えるべきか' },
  { id: 'target', text: 'Luminar Neoはどんな人に向いている？' },
  { id: 'vs-lightroom', text: 'Lightroomと迷ったときの判断軸' },
  { id: 'discount', text: 'ルミナーネオを安く買う方法はある？' },
  { id: 'faq', text: 'ルミナーネオの購入前によくある疑問' },
  { id: 'articles', text: '目的別に詳しく知りたい人はこちら' },
]

export const metadata: Metadata = {
  title: {
    absolute: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
  },
  description: LUMINAR_SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${LUMINAR_SITE_URL}/`,
    title: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
    description: LUMINAR_SITE_DESCRIPTION,
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
  const [rawPosts, topSpots] = await Promise.all([
    getAllPostsSummary(),
    getTopSpots(4),
  ])
  const articles = rawPosts.map(normalizePostSummary)

  return (
    <>
      <div className="l-article-body">
        <div className="l-article-container">

          {/* パンくず */}
          <Breadcrumb items={[{ label: LUMINAR_SITE_NAME }]} />

          <article itemScope itemType="https://schema.org/WebPage">
            <meta itemProp="url" content={`${LUMINAR_SITE_URL}/`} />

            {/* ① firstVisual */}
            <div className="firstVisual">
              <figure className="firstVisual-image" style={{ margin: 0 }}>
                <Image
                  src={OG_IMAGE}
                  alt="Luminar Neo完全購入ガイド"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </figure>
              <header className="firstVisual-header">
                <h1 className="firstVisual-title">
                  Luminar Neo 完全購入ガイド｜特徴・料金・安く買う方法【2026年版】
                </h1>
                <div className="firstVisual-meta">
                  <time className="firstVisual-date" dateTime="2026-04-20">
                    最終更新: 2026年4月20日
                  </time>
                  <span className="firstVisual-badge">一部広告を含みます</span>
                </div>
              </header>
              <div className="firstVisual-body article-body">
                <p>
                  <strong>「Luminar Neoって実際どうなの？」</strong>——そんな疑問を抱えたまま購入を迷っていませんか？
                  動作の重さや、Lightroomとの違い、買い切りかサブスクかの選択など、
                  気になるポイントはたくさんありますよね。
                </p>
                <p>
                  このページは、<strong>Luminar Neoを2年以上使い続けてきた現役フォトグラファー</strong>が
                  購入前に知っておきたい情報をひとつにまとめたハブページです。
                  「特徴と料金体系」から「Lightroomとの違い」「安く買うタイミング」まで網羅しています。
                </p>
                <p>
                  気になるテーマだけ読み進めてもOK。まずはこのページで
                  <strong>「自分に合うかどうか」を判断する軸</strong>を掴んでください。
                </p>
                <LuminarCtaMini />
              </div>
            </div>

            {/* ② 目次 */}
            <nav className="toc content-card card-padding" aria-label="目次">
              <p className="toc-title">タップできる目次</p>
              <ol className="toc-list">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ③ Luminar Neoとは？ */}
            <section id="about-luminar" className="content-card card-padding article-body">
              <h2>Luminar Neoとは？<br className="sp-only" />できること・特徴</h2>

              <ImageComparisonSlider
                beforeSrc="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-before.jpg"
                afterSrc="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg"
                beforeAlt="Before: 編集前の写真"
                afterAlt="After: Luminar Neo編集後の写真"
                caption="Luminar NeoのRAW現像+ジェネ変換（AIツール）の作例"
              />

              <p>
                Luminar Neoは、ウクライナのSkylum社が開発する
                <strong>AI搭載の写真編集ソフト</strong>です。
                RAW現像から高度なレタッチまで、AIの力を借りて効率的に行えるのが特徴です。
              </p>
              <p>
                Windows・Mac両対応で、1ライセンスで2台のPCにインストール可能。
                LightroomやPhotoshopのプラグインとしても動作するので、
                今のワークフローを変えずに導入することもできます。
              </p>

              <h3>Luminar Neoの主な特徴</h3>

              <div className="definition l-bottom-large">
                <dl className="definition-body">
                  <dt>AIによる自動編集</dt>
                  <dd>
                    露出・コントラスト・カラーをAIが分析し、ワンクリックで補正。
                    被写体や空の自動認識により、面倒なマスク作成も不要です。
                  </dd>
                  <dt>生成AI機能</dt>
                  <dd>
                    GenErase（不要物削除）、GenSwap（オブジェクト置換）、GenExpand（画像拡張）など、
                    Adobeの生成塗りつぶしに近い機能を搭載しています。
                  </dd>
                  <dt>柔軟なライセンス</dt>
                  <dd>
                    買い切り版なら基本機能が永続利用可能。サブスク疲れしている方にも選ばれています。
                    必要に応じて拡張機能を追加していく形式です。
                  </dd>
                </dl>
              </div>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/merit-demerit/" className="m-btn m-btn--primary">
                  Luminar Neoのメリット・デメリット
                </Link>
              </div>
            </section>

            {/* ④ 料金プラン */}
            <section id="pricing" className="content-card card-padding article-body">
              <h2>Luminar Neoの料金プランを<br className="sp-only" />どう考えるべきか</h2>

              <figure style={{ margin: '0 0 1.5rem' }}>
                <Image
                  src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan-image.jpg"
                  alt="ルミナーネオの料金体系"
                  width={880}
                  height={495}
                  style={{ width: '100%', height: 'auto' }}
                />
                <figcaption style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                  ルミナーネオは買い切り＋任意のパスの料金体系を採用
                </figcaption>
              </figure>

              <p>
                Luminar Neoの料金体系は「
                <strong>買い切り＋任意のパス（年額オプション）</strong>
                」という構造になっています。
              </p>
              <p>
                買い切りには3つのグレード（デスクトップ/クロスデバイス/Max）があり、
                「パスを1年だけ購入してProツールを永続取得する」方法がコスパ最強と言われています。
                ただ、正解は使用頻度や予算によって変わるので、自分に合ったプランを見つけることが大切です。
              </p>

              <h3>買い切り版でできること・できないこと</h3>

              <div className="definition l-bottom-large">
                <dl className="definition-body">
                  <dt>買い切りライセンス</dt>
                  <dd>
                    基本機能（RAW現像、Sky AI、補正AIなど）が永続的に使えます。
                    デスクトップ版 約¥18,000、クロスデバイス版 約¥24,000、Max版 約¥27,000の3グレード展開。
                  </dd>
                  <dt>パス（年額オプション）</dt>
                  <dd>
                    Proツール全8種（ノイズ除去、超解像、HDR合成など）を永続取得できます。
                    さらに生成AIと最新アップデートも利用可能。
                    Upgrade Pass 年額約¥7,400、Ecosystem Pass 年額約¥10,400。
                  </dd>
                </dl>
              </div>

              <h3>AI機能は更新しないとどうなる？</h3>
              <p>
                パス加入中のみ利用可能です。翌年更新しないと使えなくなりますが、
                Proツールは手元に残ります。生成AIが不要なら更新しないという選択もアリです。
              </p>

              <h3>パスは1年だけでも問題ない？</h3>
              <p>
                「結局どれを選べばいいの？」という方のために、簡単なシミュレーターを用意しました。
                詳細ページでご確認ください。
              </p>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/luminar-plan/" className="m-btn m-btn--primary">
                  Luminar Neoの料金プランを詳しく解説
                </Link>
              </div>
            </section>

            {/* ⑤ 向いている人・向いていない人 */}
            <section id="target" className="content-card card-padding article-body">
              <h2>Luminar Neoは<br className="sp-only" />どんな人に向いている？</h2>

              <p>
                Luminar Neoは万能なソフトではありません。正直なところ、合う人と合わない人がはっきり分かれます。
              </p>
              <p>
                「合う・合わない」は機能面だけでなく、
                <strong>写真編集に何を求めるか</strong>という価値観の違いでもあります。
                たとえば「夜景のノイズを手軽に消したい」「旅行写真の空をもっと青くしたい」といった
                明確な目的がある人には、特におすすめできるソフトです。
              </p>

              <h3>向いている人・向いていない人の特徴</h3>

              <div className="l-grid-2">
                <div className="m-pc-box m-pc-box--pros">
                  <div className="m-pc-head">
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i> 向いている人
                  </div>
                  <ul className="m-pc-body">
                    {[
                      '失敗写真をAIの力で救いたい',
                      '編集時間を大幅に短縮したい',
                      '撮影スキルを後処理で補いたい',
                      'サブスク疲れで買い切りを探している',
                      '1つのソフトで完結させたい',
                    ].map((text) => (
                      <li className="m-pc-item" key={text}>
                        <span className="m-pc-dot" aria-hidden="true"></span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="m-pc-box m-pc-box--cons">
                  <div className="m-pc-head">
                    <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> 向いていない人
                  </div>
                  <ul className="m-pc-body">
                    {[
                      '基本補正しかしない',
                      '撮って出しを好む',
                      '写真管理機能を重視する',
                      '今のソフトで十分満足している',
                      '最新カメラへの即時対応が必須',
                    ].map((text) => (
                      <li className="m-pc-item" key={text}>
                        <span className="m-pc-dot" aria-hidden="true"></span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/merit-demerit/" className="m-btn m-btn--primary">
                  Luminar Neoの長期使用レビュー
                </Link>
              </div>
            </section>

            {/* ⑤.5 撮影スポット実例 */}
            {topSpots.length > 0 && (
              <section className="content-card card-padding article-body">
                <h2>Luminar Neoで仕上げた<br className="sp-only" />東京夜景スポットの実例</h2>
                <p>
                  当サイト管理人が実際に東京の夜景スポットで撮影し、Luminar Neoで現像した写真を
                  スポットページでご紹介しています。編集前・後の比較も掲載中です。
                </p>
                <div className="l-grid-2" style={{ marginTop: '1.5rem' }}>
                  {topSpots.map((spot) => (
                    <article className="m-post-card" key={spot.slug}>
                      <Link
                        href={`/${spot.category.slug}/${spot.slug}/`}
                        aria-labelledby={`spot-title-${spot.slug}`}
                      >
                        <div className="m-post-card__thumb">
                          {spot.featured_image ? (
                            <Image
                              src={spot.featured_image}
                              alt={spot.name}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          ) : (
                            <div style={{ width: '100%', height: '100%', background: 'var(--c-bg-sub)' }} aria-hidden="true" />
                          )}
                        </div>
                        <div className="m-post-card__content">
                          <span className="m-post-card__cat">{spot.category.name}</span>
                          <h3 id={`spot-title-${spot.slug}`} className="m-post-card__title">
                            {spot.name}
                          </h3>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
                <div className="u-text-center" style={{ marginTop: '2rem' }}>
                  <Link href="/" className="m-btn m-btn--secondary">
                    東京夜景スポットをもっと見る
                  </Link>
                </div>
              </section>
            )}

            {/* ⑥ Lightroomとの比較 */}
            <section id="vs-lightroom" className="content-card card-padding article-body">
              <h2>Lightroomと<br className="sp-only" />迷ったときの判断軸</h2>

              <p>
                「Luminar NeoとLightroom、結局どっちがいいの？」という質問をよくいただきます。
                結論から言うと、<strong>比較する軸によって答えが変わります</strong>。
              </p>

              <h3>何年使うとどちらが得か？</h3>
              <p>
                たとえば3年間のコストで比較すると、Luminar Neo（買い切り＋パス1年）は約¥25,000、
                Lightroomフォトプランは約¥42,000。コスト面ではLuminar Neoが有利です。
              </p>
              <p>
                ただし、両方を併用している方も実は多くいます。LightroomからLuminar Neoをプラグインとして
                呼び出す使い方も可能なので、「どちらか一方」と決めつけなくてもOKです。
              </p>

              <h3>Luminar NeoとLightroomの思想の違い</h3>

              <div className="m-compare">
                <div className="m-compare__head">
                  <div className="m-compare__th m-compare__th--1">Luminar Neoの思想</div>
                  <div className="m-compare__th m-compare__th--2">Lightroomの思想</div>
                </div>
                <div className="m-compare__body">
                  <ul className="m-compare__col m-compare__col--1">
                    {[
                      { color: 'var(--c-sky-400)', text: 'AIで編集を効率化' },
                      { color: 'var(--c-sky-400)', text: '買い切りで永続利用' },
                      { color: 'var(--c-sky-400)', text: '1枚の仕上げに集中' },
                    ].map(({ color, text }) => (
                      <li className="m-compare__item" key={text}>
                        <span className="m-compare__dot" style={{ background: color }} aria-hidden="true"></span> {text}
                      </li>
                    ))}
                  </ul>
                  <ul className="m-compare__col m-compare__col--2">
                    {[
                      { color: 'var(--c-indigo-400)', text: '写真管理と現像の統合' },
                      { color: 'var(--c-indigo-400)', text: 'サブスクで常に最新' },
                      { color: 'var(--c-indigo-400)', text: '大量の写真を効率管理' },
                    ].map(({ color, text }) => (
                      <li className="m-compare__item" key={text}>
                        <span className="m-compare__dot" style={{ background: color }} aria-hidden="true"></span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/lightroom-compare/" className="m-btn m-btn--primary">
                  Luminar NeoとLightroomを徹底比較
                </Link>
              </div>
            </section>

            {/* ⑦ 安く買う方法 */}
            <section id="discount" className="content-card card-padding article-body">
              <h2>ルミナーネオを<br className="sp-only" />安く買う方法はある？</h2>

              <figure style={{ margin: '0 0 1.5rem' }}>
                <Image
                  src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-neo-sale.jpg"
                  alt="ルミナーネオを安く買う方法"
                  width={880}
                  height={495}
                  style={{ width: '100%', height: 'auto' }}
                />
                <figcaption style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                  ルミナーネオをお手頃に買うために知っておきたいこと
                </figcaption>
              </figure>

              <p>
                Luminar Neoは定期的にセールを実施しており、タイミングが合えば
                <strong>最大40〜50%オフ</strong>で購入できることもあります。
              </p>
              <p>
                特にブラックフライデーやサマーセールは狙い目。急ぎでなければセール時期まで待つのが
                賢い選択です。また、まずは7日間の無料体験版で試してから購入を検討するのが確実ですよ。
              </p>

              <h3>セール・クーポン・返金保証について</h3>

              <div className="definition l-bottom-large">
                <dl className="definition-body">
                  <dt>主なセール時期</dt>
                  <dd>
                    ブラックフライデー（11月）、サマーセール（7〜8月）、アニバーサリーセール、年末年始など。
                    割引率は30〜50%程度になることが多いです。
                  </dd>
                  <dt>クーポンコード</dt>
                  <dd>
                    当サイト限定の割引コードを用意しています。セールと併用できる場合もあるので、
                    詳細は下記記事をチェックしてみてください。
                  </dd>
                  <dt>返金保証</dt>
                  <dd>
                    購入から30日間は返金保証があります。体験版で基本を試し、購入後にProツールを
                    使ってみて合わなければ返金、という流れも可能です。
                  </dd>
                </dl>
              </div>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/sale-and-coupon-info/" className="m-btn m-btn--primary">
                  Luminar Neoのセール・クーポン情報
                </Link>
              </div>
            </section>

            {/* ⑧ FAQ */}
            <section id="faq" className="content-card card-padding article-body">
              <h2>ルミナーネオの購入前に<br className="sp-only" />よくある疑問</h2>

              <p>
                購入を検討する際によくある疑問をまとめました。実は体験版で確認できることも多いので、
                気になる方はまず試してみるのがおすすめです。
              </p>

              <dl>
                <div className="faq-item">
                  <dt className="faq-q">無料体験版はありますか？</dt>
                  <dd className="faq-a">
                    はい、7日間の無料体験版があります。詳細は「
                    <Link href="/luminar/trial/">Luminar Neo体験版のダウンロード方法・製品版との違い</Link>
                    」で詳しく解説しています。
                  </dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">拡張機能（Proツール）は必須ですか？</dt>
                  <dd className="faq-a">
                    必須ではありません。基本機能だけでも十分な編集が可能です。ただし、ノイズ除去や超解像といった
                    高度な処理を使いたい場合はProツールが必要になります。詳細は「
                    <Link href="/luminar/expand/">拡張機能でできることまとめ</Link>」で解説しています。
                  </dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">ルミナーネオの評判が知りたいです。</dt>
                  <dd className="faq-a">
                    「<Link href="/luminar/voice/">Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態</Link>
                    」で解説しています。
                  </dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">返金保証はありますか？</dt>
                  <dd className="faq-a">はい、購入から30日間は返金保証があります。安心して試せますね。</dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">WindowsとMac、両方で使えますか？</dt>
                  <dd className="faq-a">1ライセンスで2台のPCにインストール可能です。Windows・Mac混在でも問題ありません。</dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">動作が重いと聞きましたが？</dt>
                  <dd className="faq-a">
                    AI処理を多用するため、ある程度のPCスペックは必要です。推奨は16GB以上のRAMとSSD。
                    心配な方は体験版で自分の環境で試してみてください。対処法は
                    <Link href="/luminar/opening-failed/">
                      Luminar Neoが重い・落ちる原因と対処法｜症状別に今すぐ解決
                    </Link>
                    で詳しく紹介しています。
                  </dd>
                </div>
                <div className="faq-item">
                  <dt className="faq-q">アップデートは無料ですか？</dt>
                  <dd className="faq-a">
                    マイナーアップデート（バグ修正など）は無料です。メジャーアップデート（新機能追加）はパス加入者のみ。
                    パス未加入でも購入時のバージョンは永続利用できます。
                  </dd>
                </div>
              </dl>

              <div className="u-text-center" style={{ marginTop: '2rem' }}>
                <Link href="/luminar/faq/" className="m-btn m-btn--primary">
                  よくある質問をもっと見る
                </Link>
              </div>
            </section>

            {/* CTA */}
            <LuminarCtaSale />

            {/* ⑨ 記事一覧 */}
            <section id="articles" style={{ padding: '0 0 2rem' }}>
              <h2 style={{ padding: '0 16px 1rem', fontSize: '1.1rem', fontWeight: 700 }}>目的別に詳しく知りたい人はこちら</h2>
              <div className="l-grid-3">
                {articles.map((article) => (
                  <article className="m-post-card" key={article.slug}>
                    <Link href={`/luminar/${article.slug}/`} aria-labelledby={`post-title-${article.slug}`}>
                      <div className="m-post-card__thumb">
                        {article.featuredImage ? (
                          <Image
                            src={article.featuredImage.src}
                            alt={article.featuredImage.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        ) : (
                          <div style={{ width: '100%', height: '100%', background: 'var(--c-bg-sub)' }} aria-hidden="true" />
                        )}
                      </div>
                      <div className="m-post-card__content">
                        {article.category && (
                          <span className="m-post-card__cat">{article.category}</span>
                        )}
                        <h3
                          id={`post-title-${article.slug}`}
                          className="m-post-card__title"
                          dangerouslySetInnerHTML={{ __html: article.title }}
                        />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </article>

          {/* 運営者情報 */}
          <HomeAuthorCard authorLabel="この記事の著者" />

        </div>
      </div>

      {/* SNS シェア */}
      <SpotShare
        url={`${LUMINAR_SITE_URL}/`}
        title="Luminar Neo 完全購入ガイド｜特徴・料金・安く買う方法【2026年版】"
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
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${LUMINAR_SITE_URL}/`,
                url: `${LUMINAR_SITE_URL}/`,
                name: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
                description: LUMINAR_SITE_DESCRIPTION,
                inLanguage: 'ja-JP',
                publisher: {
                  '@type': 'Organization',
                  name: LUMINAR_SITE_NAME,
                  url: `${LUMINAR_SITE_URL}/`,
                },
                breadcrumb: {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: '東京夜景ナビ',
                      item: 'https://nightscape.tokyo/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: LUMINAR_SITE_NAME,
                      item: `${LUMINAR_SITE_URL}/`,
                    },
                  ],
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQ_JSON_LD,
              },
            ],
          }),
        }}
      />
    </>
  )
}
