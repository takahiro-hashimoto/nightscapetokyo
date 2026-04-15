import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ImageComparisonSlider from '@/components/luminar/ImageComparisonSlider'
import LuminarCtaSale from '@/components/luminar/LuminarCtaSale'
import LuminarAuthorBox from '@/components/luminar/LuminarAuthorBox'
import { getAllPostsSummary, normalizePostSummary } from '@/lib/luminar/wp-api'
import {
  LUMINAR_SITE_NAME,
  LUMINAR_SITE_DESCRIPTION,
  LUMINAR_SITE_URL,
  AFFILIATE_URL,
} from '@/lib/luminar/config'

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
  },
  alternates: {
    canonical: `${LUMINAR_SITE_URL}/`,
  },
}

export default async function LuminarTopPage() {
  const rawPosts = await getAllPostsSummary()
  const articles = rawPosts.map(normalizePostSummary)

  return (
    <main>
      {/* ── ヒーローセクション ── */}
      <section className="hero-section">
        <div className="hero-section__bg-pattern" aria-hidden="true"></div>
        <div className="hero-section__bg-blur hero-section__bg-blur--1" aria-hidden="true"></div>
        <div className="hero-section__bg-blur hero-section__bg-blur--2" aria-hidden="true"></div>

        <div className="l-content hero-section__inner" style={{ padding: '0 1.25rem' }}>
          <div className="hero-section__content">
            <p className="hero-section__desc">
              ルミナーネオ完全購入ガイド！<br className="sp-only" />
              特徴・料金・安く買う方法を解説【2026年版】
            </p>

            <p className="hero-section__title">
              <span>Luminar Neo</span>
              <br className="sp-only" />
              <span className="hero-section__title-gradient">完全購入ガイド</span>
            </p>

            <div className="hero-section__tags">
              <span className="hero-section__tag">
                <i className="fa-solid fa-bolt" style={{ color: '#facc15' }} aria-hidden="true"></i>{' '}
                AI搭載
              </span>
              <span className="hero-section__tag">
                <i className="fa-solid fa-yen-sign" style={{ color: '#34d399' }} aria-hidden="true"></i>{' '}
                買い切りあり
              </span>
              <span className="hero-section__tag">
                <i className="fa-brands fa-apple" aria-hidden="true"></i>
                <i className="fa-brands fa-windows" aria-hidden="true"></i>{' '}
                両対応
              </span>
            </div>
          </div>

          <ImageComparisonSlider
            beforeSrc="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-before.jpg"
            afterSrc="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/main-after.jpg"
            beforeAlt="Before: 編集前の写真"
            afterAlt="After: Luminar Neo編集後の写真"
            caption="Luminar NeoのRAW現像+ジェネ変換（AIツール）の作例"
          />
        </div>
      </section>

      {/* ── 導入セクション: 判断軸 ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <div className="m-point-box" style={{ margin: '0 !important' }}>
          <div className="m-point-box__bg" aria-hidden="true">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span>
            <span className="m-point-box__title">購入前に整理しておきたい判断軸</span>
          </div>
          <ul className="m-point-box__list">
            <li>料金体系：買い切り＋任意のパス（年額）という構造</li>
            <li>向き・不向き：AI編集で時短したい人に◎、写真管理重視の人には△</li>
            <li>Lightroomとの違い：コスト面ではLuminar Neoが有利、管理機能ではLightroomが優位</li>
            <li>購入タイミング：セール時期（ブラックフライデー等）で30〜50%オフになることも</li>
            <li>まずは体験版：7日間無料で試せる。30日間の返金保証もあり</li>
          </ul>
        </div>
      </div>

      {/* ── H2-1: Luminar Neoとは？ ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="about-luminar">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              Luminar Neoとは？<br className="sp-only" />できること・特徴
            </h2>
          </div>

          <figure className="m-figure l-bottom-large">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/about-luminar-neo.jpg"
              alt="ルミナーネオのアプリ画面"
              width={880}
              height={495}
              style={{ width: '100%', height: 'auto' }}
            />
            <figcaption className="m-figcaption">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span className="m-fig-badge">図1</span>
                <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>ルミナーネオのアプリ画面</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--c-slate-500)' }}>
                ルミナーネオのアプリ画面でRAWデータを現像する様子
              </p>
            </figcaption>
          </figure>

          <div className="entry-content">
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
          </div>

          <h3>Luminar Neoの主な特徴</h3>

          <div className="m-def-list">
            <div className="m-def-item">
              <dt className="m-def-dt">AIによる自動編集</dt>
              <dd className="m-def-dd">
                露出・コントラスト・カラーをAIが分析し、ワンクリックで補正。
                被写体や空の自動認識により、面倒なマスク作成も不要です。
              </dd>
            </div>
            <div className="m-def-item">
              <dt className="m-def-dt">生成AI機能</dt>
              <dd className="m-def-dd">
                GenErase（不要物削除）、GenSwap（オブジェクト置換）、GenExpand（画像拡張）など、
                Adobeの生成塗りつぶしに近い機能を搭載しています。
              </dd>
            </div>
            <div className="m-def-item">
              <dt className="m-def-dt">柔軟なライセンス</dt>
              <dd className="m-def-dd">
                買い切り版なら基本機能が永続利用可能。サブスク疲れしている方にも選ばれています。
                必要に応じて拡張機能を追加していく形式です。
              </dd>
            </div>
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/merit-demerit/" className="m-btn m-btn--primary">
              Luminar Neoのメリット・デメリット
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-2: 料金プラン ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="pricing">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              Luminar Neoの料金プランを<br className="sp-only" />どう考えるべきか
            </h2>
          </div>

          <figure className="m-figure l-bottom-large">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan-image.jpg"
              alt="ルミナーネオの料金体系"
              width={880}
              height={495}
              style={{ width: '100%', height: 'auto' }}
            />
            <figcaption className="m-figcaption">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span className="m-fig-badge">図2</span>
                <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>ルミナーネオの料金体系</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--c-slate-500)' }}>
                ルミナーネオは買い切り＋任意のパスの料金体系を採用
              </p>
            </figcaption>
          </figure>

          <div className="entry-content">
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
          </div>

          <h3>買い切り版でできること・できないこと</h3>

          <div className="m-def-list">
            <div className="m-def-item">
              <dt className="m-def-dt">買い切りライセンス</dt>
              <dd className="m-def-dd">
                基本機能（RAW現像、Sky AI、補正AIなど）が永続的に使えます。
                デスクトップ版 約¥18,000、クロスデバイス版 約¥24,000、Max版 約¥27,000の3グレード展開。
              </dd>
            </div>
            <div className="m-def-item">
              <dt className="m-def-dt">パス（年額オプション）</dt>
              <dd className="m-def-dd">
                Proツール全8種（ノイズ除去、超解像、HDR合成など）を永続取得できます。
                さらに生成AIと最新アップデートも利用可能。
                Upgrade Pass 年額約¥7,400、Ecosystem Pass 年額約¥10,400。
              </dd>
            </div>
          </div>

          <h3>AI機能は更新しないとどうなる？</h3>
          <div className="entry-content">
            <p>
              パス加入中のみ利用可能です。翌年更新しないと使えなくなりますが、
              Proツールは手元に残ります。生成AIが不要なら更新しないという選択もアリです。
            </p>
          </div>

          <h3>パスは1年だけでも問題ない？</h3>
          <div className="entry-content">
            <p>
              「結局どれを選べばいいの？」という方のために、簡単なシミュレーターを用意しました。
              詳細ページでご確認ください。
            </p>
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/luminar-plan/" className="m-btn m-btn--primary">
              Luminar Neoの料金プランを詳しく解説
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-3: 向いている人・向かない人 ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="target">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              Luminar Neoは<br className="sp-only" />どんな人に向いている？
            </h2>
          </div>

          <div className="entry-content">
            <p>
              Luminar Neoは万能なソフトではありません。正直なところ、合う人と合わない人がはっきり分かれます。
            </p>
            <p>
              「合う・合わない」は機能面だけでなく、
              <strong>写真編集に何を求めるか</strong>という価値観の違いでもあります。
              たとえば「夜景のノイズを手軽に消したい」「旅行写真の空をもっと青くしたい」といった
              明確な目的がある人には、特におすすめできるソフトです。
            </p>
          </div>

          <h3>向いている人・向いていない人の特徴</h3>

          <div className="l-grid-2">
            <div className="m-pc-box m-pc-box--pros">
              <div className="m-pc-head">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i> 向いている人
              </div>
              <div className="m-pc-body">
                {[
                  '失敗写真をAIの力で救いたい',
                  '編集時間を大幅に短縮したい',
                  '撮影スキルを後処理で補いたい',
                  'サブスク疲れで買い切りを探している',
                  '1つのソフトで完結させたい',
                ].map((text) => (
                  <div className="m-pc-item" key={text}>
                    <span className="m-pc-dot"></span> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="m-pc-box m-pc-box--cons">
              <div className="m-pc-head">
                <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> 向いていない人
              </div>
              <div className="m-pc-body">
                {[
                  '基本補正しかしない',
                  '撮って出しを好む',
                  '写真管理機能を重視する',
                  '今のソフトで十分満足している',
                  '最新カメラへの即時対応が必須',
                ].map((text) => (
                  <div className="m-pc-item" key={text}>
                    <span className="m-pc-dot"></span> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/merit-demerit/" className="m-btn m-btn--primary">
              Luminar Neoの長期使用レビュー
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-4: Lightroomとの判断軸 ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="vs-lightroom">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              Lightroomと<br className="sp-only" />迷ったときの判断軸
            </h2>
          </div>

          <div className="entry-content">
            <p>
              「Luminar NeoとLightroom、結局どっちがいいの？」という質問をよくいただきます。
              結論から言うと、<strong>比較する軸によって答えが変わります</strong>。
            </p>
          </div>

          <h3>何年使うとどちらが得か？</h3>
          <div className="entry-content">
            <p>
              たとえば3年間のコストで比較すると、Luminar Neo（買い切り＋パス1年）は約¥25,000、
              Lightroomフォトプランは約¥42,000。コスト面ではLuminar Neoが有利です。
            </p>
            <p>
              ただし、両方を併用している方も実は多くいます。LightroomからLuminar Neoをプラグインとして
              呼び出す使い方も可能なので、「どちらか一方」と決めつけなくてもOKです。
            </p>
          </div>

          <h3>Luminar NeoとLightroomの思想の違い</h3>

          <div className="m-compare">
            <div className="m-compare__head">
              <div className="m-compare__th m-compare__th--1">Luminar Neoの思想</div>
              <div className="m-compare__th m-compare__th--2">Lightroomの思想</div>
            </div>
            <div className="m-compare__body">
              <div className="m-compare__col m-compare__col--1">
                {[
                  { color: 'var(--c-sky-400)', text: 'AIで編集を効率化' },
                  { color: 'var(--c-sky-400)', text: '買い切りで永続利用' },
                  { color: 'var(--c-sky-400)', text: '1枚の仕上げに集中' },
                ].map(({ color, text }) => (
                  <div className="m-compare__item" key={text}>
                    <span className="m-compare__dot" style={{ background: color }}></span> {text}
                  </div>
                ))}
              </div>
              <div className="m-compare__col m-compare__col--2">
                {[
                  { color: 'var(--c-indigo-400)', text: '写真管理と現像の統合' },
                  { color: 'var(--c-indigo-400)', text: 'サブスクで常に最新' },
                  { color: 'var(--c-indigo-400)', text: '大量の写真を効率管理' },
                ].map(({ color, text }) => (
                  <div className="m-compare__item" key={text}>
                    <span className="m-compare__dot" style={{ background: color }}></span> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/lightroom-compare/" className="m-btn m-btn--primary">
              Luminar NeoとLightroomを徹底比較
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-5: 安く買う方法 ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="discount">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              ルミナーネオを<br className="sp-only" />安く買う方法はある？
            </h2>
          </div>

          <figure className="m-figure l-bottom-large">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-neo-sale.jpg"
              alt="ルミナーネオを安く買う方法"
              width={880}
              height={495}
              style={{ width: '100%', height: 'auto' }}
            />
            <figcaption className="m-figcaption">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span className="m-fig-badge">図3</span>
                <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>ルミナーネオを安く買う3つのコツ</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--c-slate-500)' }}>
                ルミナーネオをお手頃に買うために知っておきたいこと
              </p>
            </figcaption>
          </figure>

          <div className="entry-content">
            <p>
              Luminar Neoは定期的にセールを実施しており、タイミングが合えば
              <strong>最大40〜50%オフ</strong>で購入できることもあります。
            </p>
            <p>
              特にブラックフライデーやサマーセールは狙い目。急ぎでなければセール時期まで待つのが
              賢い選択です。また、まずは7日間の無料体験版で試してから購入を検討するのが確実ですよ。
            </p>
          </div>

          <h3>セール・クーポン・返金保証について</h3>

          <div className="m-def-list">
            <div className="m-def-item">
              <dt className="m-def-dt">主なセール時期</dt>
              <dd className="m-def-dd">
                ブラックフライデー（11月）、サマーセール（7〜8月）、アニバーサリーセール、年末年始など。
                割引率は30〜50%程度になることが多いです。
              </dd>
            </div>
            <div className="m-def-item">
              <dt className="m-def-dt">クーポンコード</dt>
              <dd className="m-def-dd">
                当サイト限定の割引コードを用意しています。セールと併用できる場合もあるので、
                詳細は下記記事をチェックしてみてください。
              </dd>
            </div>
            <div className="m-def-item">
              <dt className="m-def-dt">返金保証</dt>
              <dd className="m-def-dd">
                購入から30日間は返金保証があります。体験版で基本を試し、購入後にProツールを
                使ってみて合わなければ返金、という流れも可能です。
              </dd>
            </div>
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/sale-and-coupon-info/" className="m-btn m-btn--primary">
              Luminar Neoのセール・クーポン情報
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-6: FAQ ── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section className="feature-section" id="faq">
          <div className="feature-section__header">
            <h2 className="feature-section__title">
              ルミナーネオの購入前に<br className="sp-only" />よくある疑問
            </h2>
          </div>

          <div className="entry-content">
            <p>
              購入を検討する際によくある疑問をまとめました。実は体験版で確認できることも多いので、
              気になる方はまず試してみるのがおすすめです。
            </p>
          </div>

          <div className="card">
            {[
              {
                q: '無料体験版はありますか？',
                a: (
                  <>
                    はい、7日間の無料体験版があります。詳細は「
                    <Link href="/luminar/trial/">Luminar Neo体験版のダウンロード方法・製品版との違い</Link>
                    」で詳しく解説しています。
                  </>
                ),
                last: false,
              },
              {
                q: '拡張機能（Proツール）は必須ですか？',
                a: (
                  <>
                    必須ではありません。基本機能だけでも十分な編集が可能です。ただし、ノイズ除去や超解像といった
                    高度な処理を使いたい場合はProツールが必要になります。詳細は「
                    <Link href="/luminar/expand/">拡張機能でできることまとめ</Link>」で解説しています。
                  </>
                ),
                last: false,
              },
              {
                q: 'ルミナーネオの評判が知りたいです。',
                a: (
                  <>
                    「<Link href="/luminar/voice/">Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態</Link>
                    」で解説しています。
                  </>
                ),
                last: false,
              },
              {
                q: '返金保証はありますか？',
                a: 'はい、購入から30日間は返金保証があります。安心して試せますね。',
                last: false,
              },
              {
                q: 'WindowsとMac、両方で使えますか？',
                a: '1ライセンスで2台のPCにインストール可能です。Windows・Mac混在でも問題ありません。',
                last: false,
              },
              {
                q: '動作が重いと聞きましたが？',
                a: (
                  <>
                    AI処理を多用するため、ある程度のPCスペックは必要です。推奨は16GB以上のRAMとSSD。
                    心配な方は体験版で自分の環境で試してみてください。対処法は
                    <Link href="/luminar/opening-failed/">
                      Luminar Neoが重い・落ちる原因と対処法｜症状別に今すぐ解決
                    </Link>
                    で詳しく紹介しています。
                  </>
                ),
                last: false,
              },
              {
                q: 'アップデートは無料ですか？',
                a: 'マイナーアップデート（バグ修正など）は無料です。メジャーアップデート（新機能追加）はパス加入者のみ。パス未加入でも購入時のバージョンは永続利用できます。',
                last: true,
              },
            ].map(({ q, a, last }) => (
              <div className={`m-faq-item${last ? ' m-faq-item-last' : ''}`} key={q}>
                <div className="m-faq-q">
                  <div className="m-faq-icon m-faq-icon--q">Q</div>
                  {q}
                </div>
                <div className="m-faq-a">
                  <div className="m-faq-icon m-faq-icon--a">A</div>
                  <div>{a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="u-text-center l-bottom-xlarge" style={{ marginTop: '2.5rem' }}>
            <Link href="/luminar/faq/" className="m-btn m-btn--primary">
              よくある質問をもっと見る
            </Link>
          </div>
        </section>
      </div>

      {/* ── H2-7: 記事一覧（WP REST APIからビルド時取得）── */}
      <div className="l-content l-section" style={{ padding: '2.5rem 1.25rem' }}>
        <section id="articles">
          <h2 className="m-section-title">目的別に詳しく知りたい人はこちら</h2>
          <div className="l-grid-3">
            {articles.map((article) => (
              <article className="m-post-card" key={article.slug}>
                <Link href={`/luminar/${article.slug}/`}>
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
                      <div style={{ width: '100%', height: '100%', background: 'var(--c-bg-sub)' }} />
                    )}
                  </div>
                  <div className="m-post-card__content">
                    {article.category && (
                      <span className="m-post-card__cat">{article.category}</span>
                    )}
                    <h3
                      className="m-post-card__title"
                      dangerouslySetInnerHTML={{ __html: article.title }}
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <LuminarCtaSale />
        <LuminarAuthorBox />
      </div>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${LUMINAR_SITE_NAME} | ${LUMINAR_SITE_DESCRIPTION}`,
            url: `${LUMINAR_SITE_URL}/`,
            description: LUMINAR_SITE_DESCRIPTION,
            publisher: {
              '@type': 'Organization',
              name: LUMINAR_SITE_NAME,
              url: `${LUMINAR_SITE_URL}/`,
            },
          }),
        }}
      />
    </main>
  )
}

