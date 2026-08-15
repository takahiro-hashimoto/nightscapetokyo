import { jsonLdHtml } from "@/lib/json-ld-script";
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/common/AppLink'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import type { TocItem } from '@/lib/luminar/toc'
import { PLANS, PRIME, PRICING_CONFIRMED_AT, LIGHTROOM_ANNUAL, yen, approxYen, totalWithPrime, lightroomTotal, priceWithRegular } from '@/lib/luminar/pricing'


const META = {
  slug: 'luminar-plan',
  // タイトルの語は Search Console の実績で決めている。
  // 「買い切り」「サブスク」はタイトルに入っており CTR 20〜37%／掲載順位1.6位。
  // 一方「価格」「値段」は入っておらず、順位4〜5位・約600表示に対し CTR 1〜5% だった。
  // 勝っている語（買い切り・サブスク）は必ず残すこと。
  // 以前は「価格｜いくら？…料金体系」と同義語が3つ並んで46字を使っていたため、
  // 重複を1つに絞り、空いた分に記事の中身である「3プラン」を入れている。
  title: 'Luminar Neoの買い切りはいくら？3プランの価格とサブスクとの違い【2026年】',
  description:
    'Luminar Neoの買い切り版はいくら？デスクトップ専用・全プラットフォーム・Maxの3プランの価格と値段を比較。サブスク廃止後の料金体系と、Luminar Primeが必要かどうかまで解説します。',
  publishedAt: '2026-01-18T10:38:20',
  updatedAt: '2026-08-13T00:00:00',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan.jpg',
    alt: 'Luminar Neoの買い切りはいくら？3プランの価格とサブスクとの違い【2026年】',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'no-subscription', level: 2, text: 'Luminar Neoのサブスクプランは廃止されている' },
  { id: 'features-overview', level: 2, text: 'Luminar Neoの機能は3種類に分かれている' },
  { id: 'step1', level: 2, text: 'Luminar Neoの買い切り3プランを選ぶ' },
  { id: 'plan-desktop', level: 3, text: 'デスクトップ専用ライセンス（PCのみ・2台）' },
  { id: 'plan-all', level: 3, text: '全プラットフォームライセンス（PC＋スマホ）' },
  { id: 'plan-max', level: 3, text: 'Maxライセンス（PC＋スマホ＋プリセット）' },
  { id: 'step2', level: 2, text: 'Luminar Primeを追加するか決める' },
  { id: 'total-cost', level: 2, text: 'Luminar Neoの総額はいくらになるか' },
  { id: 'faq', level: 2, text: 'Luminar Neoの料金に関するよくある質問' },
  { id: 'summary', level: 2, text: 'まとめ：どのプランを選ぶか' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>突然ですが、Luminar Neoの料金体系、正直ちょっとわかりにくいですよね。</p>
    <ul>
      <li>買い切りって書いてあるのに、なんか追加料金がかかるの？</li>
      <li>Luminar Primeって何？契約しないとどうなるの？</li>
      <li>Proツールって何？買い切りに含まれてるの？</li>
      <li>サブスクってもうないの？</li>
    </ul>
    <p>購入を検討している方の中にはこんな疑問を持っている方も多いと思います。</p>
    <p>そこで<strong>公式サイト・公式ヘルプセンターの最新情報をもとに</strong>、2026年最新の料金体系を整理してみたので、本記事で解説します。</p>
    <p>どのプランを選べばいいか決めかねている方は、ぜひチェックしてみてください。</p>
    <div className="m-point-box">
      <div className="m-point-box__bg">!</div>
      <div className="m-point-box__header">
        <span className="m-point-box__label">Point</span><br />
        <span className="m-point-box__title">この記事のまとめ</span>
      </div>
      <ul className="m-point-box__list">
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>旧サブスク・旧パスは廃止</strong>：現在は買い切り＋Luminar Prime（任意）のみ</li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>購入は2ステップ</strong>：①買い切りプランを選ぶ → ②Luminar Primeを追加するか決める</li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Proツール8種は全買い切りプランに標準搭載（永続利用可）</strong></li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Primeが必要なのは「AIツール」と「新機能アップデート」を使い続けたい場合のみ</strong></li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>コスパ最強は「買い切りのみ」</strong>（セール時 {approxYen(PLANS.desktop.sale)}で永続利用）</li>
      </ul>
    </div>
    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
      <i className="fa-solid fa-calendar-check" style={{ marginRight: '0.3rem' }}></i>
      料金・プラン情報確認日: {new Date(PRICING_CONFIRMED_AT).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
    </p>
  </>
)

export default async function Page() {
  return (
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="no-subscription" className="content-card card-padding article-body">
        <h2>Luminar Neoのサブスクプランは廃止されている</h2>
        <p>最初にお伝えしておくと、<strong>Luminar Neoのサブスクリプションプランは現在、公式ストアで新規販売されていません</strong>。</p>
        <p>以前は月額・年額のサブスクプランも存在していましたが、2026年現在、日本の公式ストアに並んでいるのは<strong>買い切り（永久ライセンス）のみ</strong>です。検索すると「買い切り vs サブスク」という比較記事がまだ残っていますが、それらは過去の情報です。</p>
        <p>現在の選択肢は以下のみです。</p>
        <ul className="m-list-ul">
          <li><span className="m-list-ul__icon">•</span> <strong>買い切りプラン</strong>（3種類）</li>
          <li><span className="m-list-ul__icon">•</span> <strong>＋Luminar Prime</strong>（年額サブスク・任意で追加）</li>
        </ul>
        <p>ここから具体的な選び方に入ります。なお、Luminar Neoがそもそもどんなソフトなのかから知りたい場合は<Link href="/luminar/">Luminar Neoの完全ガイド</Link>を先に読んでみてください。</p>
      </section>

      {/*
        もとは「購入は2ステップで考えよう」という h2 が先にあり、その直後に
        「機能ごとに利用条件が違う」が割り込んでから ステップ1／ステップ2 が
        別々の h2 で続いていた。ステップ1・2 は「買い切り3プランを選ぶ」
        「Prime を追加するか決める」という見出しそのものなので、予告の h2 を外し、
        料金理解の土台になる機能カテゴリを先に置いている。
      */}
      <section id="features-overview" className="content-card card-padding article-body">
        <h2>Luminar Neoの機能は3種類に分かれている</h2>
        <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan-image.jpg" alt="Luminar Neoの料金体系を表したイメージ" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" /></div>
        <p>Luminar Neoの機能は、利用条件の違う3つに分かれています。ここさえ押さえれば、料金体系はほぼ理解できます。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>含まれる機能</th>
                <th>利用条件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>基本機能</strong></td>
                <td>RAW現像、Sky AI、補正AIなど</td>
                <td>買い切りで<strong>永続</strong></td>
              </tr>
              <tr>
                <td><strong>Proツール（8種）</strong></td>
                <td>Noiseless AI、HDR Mergeなど</td>
                <td>買い切りで<strong>永続</strong>（標準搭載）</td>
              </tr>
              <tr>
                <td><strong>生成AI機能</strong></td>
                <td>GenErase、GenSwap、GenExpand</td>
                <td>購入から<strong>1年間</strong>（Luminar Primeで延長可）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>大事なのは<strong>Proツール8種が買い切りに標準で含まれている</strong>ことです。どのプランを選んでも永続で使えます（公式ヘルプセンターにも「ライフタイムプランにはProツールを含む全編集ツールが含まれる」と明記されています）。8種それぞれで何ができるかは<Link href="/luminar/expand/">Proツール8種の解説</Link>にまとめました。</p>
        <p>もう1つ、<strong>生成AIだけは期間限定</strong>です。利用権は購入日から1年間で、2年目以降も使うならLuminar Primeでの更新が必要になります。生成AIはクラウド処理のため、利用にはインターネット接続も要ります。</p>
      </section>

      <section id="step1" className="content-card card-padding article-body">
        <h2>Luminar Neoの買い切り3プランを選ぶ</h2>
        <p>まずは土台となる買い切りプランを選びます。一度購入すれば<span className="m-mark-yellow">ずっと使い続けられる</span>ライセンスで、現在は3種類が用意されています。以下は日本向け公式ストアのセール価格です（Skylumはほぼ通年でセールを実施しており、時期により変動します）。</p>

        <h3 id="plan-desktop">デスクトップ専用ライセンス（PCのみ・2台）</h3>
        <p>PCだけで使うならこれで足ります。価格は{priceWithRegular('desktop')}で、Windows・Macを問わず2台までインストールできます。</p>
        <p>基本機能とProツール8種が永続で使え、生成AIも購入から1年間は含まれます。スマホアプリとSpaces（Webギャラリー）は付きませんが、PCで撮った写真をPCで仕上げるだけなら使わない機能です。<strong>迷ったらここから始めて問題ありません。</strong></p>

        <h3 id="plan-all">全プラットフォームライセンス（PC＋スマホ）</h3>
        <p>PCに加えてスマホでも編集したい場合はこちらです。価格は{priceWithRegular('allPlatforms')}で、デスクトップ2台＋モバイル3台まで使えます。</p>
        <p>iOS・Android・ChromeOSに対応していて、PCとスマホの間で編集データが同期されます。写真をWebギャラリーとしてまとめられるSpacesもここから使えます。外出先でスマホから当たりを付けて、帰宅後にPCで仕上げる。そういう流れを取りたい人向けのプランです。</p>

        <h3 id="plan-max">Maxライセンス（PC＋スマホ＋プリセット）</h3>
        <p>全プラットフォームの内容に、プリセットと学習コンテンツが加わります。価格は{priceWithRegular('max')}です。</p>
        <p>1,000点以上のプリセット・テンプレートを集めたCreative Library（1年間）と、公式のビデオコースが付きます。写真の雰囲気をプリセットで決めてから微調整したい人向けですが、<strong>このプランだけ翌年に請求が発生する仕組み</strong>になっています。</p>
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">重要</span><span className="m-notice__title">Maxライセンスは2年目から自動更新の請求が発生します</span></div>
          <p>Maxライセンスには<strong>Luminar Prime が1年分同梱されています</strong>。ここが見落としやすいポイントで、<strong>1年経過後はPrimeが自動更新となり、年額の請求が発生します</strong>。「買い切りのつもりだったのに翌年請求が来た」となりやすいのはこのプランです。継続する意思がない場合は、更新日より前に解約しておいてください。デスクトップ専用ライセンス・全プラットフォームライセンスにはPrimeは同梱されないため、放置しても自動請求は発生しません。</p>
        </div>
      </section>

      <section id="step2" className="content-card card-padding article-body">
        <h2>Luminar Primeを追加するか決める</h2>
        {/*
          もとは冒頭に旧パス（アップグレード／エコシステム）の統合を説明する段落があったが、
          faq に専用の h2「旧プラン名・旧パスとの対応」と設問2つがあり、
          このページ自身の FAQ でも触れていて3重だった。過去の話から始まる構成でもあったため削除。
        */}
        <p>Primeは年額のサブスクです。契約期間中はAIツール（GenErase・GenSwap・GenExpand・Restoration・AI Assistant）が無制限に使え、その間の新機能アップデートとアセットライブラリ、Spaces（Webギャラリー）も付きます。価格は初年度が{approxYen(PRIME.firstYear)}、2年目以降は継続割引で{approxYen(PRIME.renewal)}が目安です。</p>
        <p>ただし<strong>ProツールはPrimeを契約しなくても最初から永続で使えます</strong>。判断すべきは「生成AIを2年目以降も使うか」「常に最新機能が欲しいか」の2点だけです。</p>
        {/*
          もとはここに「継続しない場合」「一度も契約しない場合」の2カラム箱が
          並んでいたが、どちらも下の表と同じことを言っていたため表に一本化した。
        */}
        <p>3つのパターンで使える機能を並べると、違いは生成AIと最新アップデートの2行だけです。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>機能</th>
                <th>買い切りのみ</th>
                <th>＋Prime 1回</th>
                <th>＋Prime 毎年</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>基本機能</td>
                <td><span className="text-true">◯ 永続</span></td>
                <td><span className="text-true">◯ 永続</span></td>
                <td><span className="text-true">◯ 永続</span></td>
              </tr>
              <tr>
                <td>Proツール（8種）</td>
                <td><span className="text-true"><strong>◯ 永続</strong></span></td>
                <td><span className="text-true">◯ 永続</span></td>
                <td><span className="text-true">◯ 永続</span></td>
              </tr>
              <tr>
                <td>生成AI機能</td>
                <td>購入から1年間のみ</td>
                <td>Prime契約期間中</td>
                <td><span className="text-true">◯ 継続</span></td>
              </tr>
              <tr>
                <td>最新アップデート</td>
                <td><span className="text-false">×</span></td>
                <td>Prime契約期間中のみ</td>
                <td><span className="text-true">◯ 継続</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Primeを解約・失効しても、インストール済みのLuminar Neo本体・基本機能・Proツールはそのまま使い続けられます</strong>。契約期間中に解放された新機能も手元に残ります。止まるのはAIツール（生成AI）と、それ以降の新機能アップデート、アセットライブラリへのアクセスだけです。</p>
      </section>

      {/*
        もとは「コスパ最強は買い切りのみ」「その他のシミュレーション」の2つの h2 に
        金額表が4つ（買い切りのみ／Lightroom比較／Prime毎年／全プラットフォーム／Prime1年）
        分かれて置かれていたが、いずれも同じ数字の組み替えだった。1つの表にまとめている。
      */}
      <section id="total-cost" className="content-card card-padding article-body">
        <h2>Luminar Neoの総額はいくらになるか</h2>
        <p>実際にいくら払うことになるのか、3パターンとLightroomを並べます。{PLANS.desktop.name}のセール価格（{approxYen(PLANS.desktop.sale)}）と、Luminar Primeの初年度{approxYen(PRIME.firstYear)}／2年目以降{approxYen(PRIME.renewal)}で計算しています。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>買い切りのみ</th>
                <th>＋Prime 1年だけ</th>
                <th>＋Prime 毎年</th>
                <th>Lightroom<br />（1TB・年間一括）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年</td>
                <td><strong>{approxYen(PLANS.desktop.sale)}</strong></td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
                <td>{approxYen(lightroomTotal(1))}</td>
              </tr>
              <tr>
                <td>3年</td>
                <td><strong>{approxYen(PLANS.desktop.sale)}</strong></td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
                <td>{approxYen(totalWithPrime('desktop', 3))}</td>
                <td>{approxYen(lightroomTotal(3))}</td>
              </tr>
              <tr>
                <td>5年</td>
                <td><strong>{approxYen(PLANS.desktop.sale)}</strong></td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
                <td>{approxYen(totalWithPrime('desktop', 5))}</td>
                <td>{approxYen(lightroomTotal(5))}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>買い切りのみなら追加費用が発生しないため、<strong>使う年数が延びるほど差が開きます</strong>。3年でLightroomとほぼ並び、5年では{Math.round((1 - PLANS.desktop.sale / lightroomTotal(5)) * 100)}%ほど安くなる計算です。</p>
        <p>{PLANS.allPlatforms.name}や{PLANS.max.name}を選ぶ場合は、1年目の金額がそれぞれ{approxYen(PLANS.allPlatforms.sale)}／{approxYen(PLANS.max.sale)}に置き換わります。2年目以降の考え方は同じです。</p>
        <p>選び分けはシンプルです。<strong>RAW現像とProツールで足りるなら買い切りのみ</strong>。生成AIをもう1年使いたいならPrimeを1年だけ。常に最新機能を追いたいなら毎年継続。この3択です。</p>
        <p>もちろんLightroomとは機能も使い勝手も違うので、金額だけでは決められません。詳しくは<Link href="/luminar/lightroom-compare/">LightroomとLuminar Neoの比較</Link>をご覧ください。</p>
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">注意</span><span className="m-notice__title">Lightroomの価格改定について</span></div>
          <p>Adobe フォトプラン（20GB）は<strong>2025年1月15日で新規受付が終了</strong>しました。上記は現行の「Lightroomプラン（1TB）」の年間一括払い（{yen(LIGHTROOM_ANNUAL)}/年）を基準にした比較です。</p>
        </div>
      </section>

      <section id="faq" className="content-card card-padding article-body">
        <h2>Luminar Neoの料金に関するよくある質問</h2>
        <p>料金まわりで繰り返し聞かれる疑問を、購入前に確認しておきたい順にまとめました。</p>
        <dl>
          {/* 各 FAQ に id を付与し、#faq-1 形式で個別の質問へ直接リンク・引用できるようにする。
              日本語の質問文をスラッグ化すると URL エンコードで読めなくなり、文言修正でリンクが壊れるため連番で固定 */}
          <div id="faq-1" className="faq-item">
            <dt className="faq-q">サブスクプランはもうないの？</dt>
            <dd className="faq-a">公式ストアでは現在、新規販売されていません。以前は月額・年額のサブスクリプションプランも存在しましたが、2026年現在、日本の公式ストアで販売されているのは買い切りプラン＋Luminar Prime（任意）のみとなっています。</dd>
          </div>
          <div id="faq-2" className="faq-item">
            <dt className="faq-q">買い切りプランだけでProツールは使える？</dt>
            <dd className="faq-a">はい、使えます。Proツール（Noiseless AI、HDR Mergeなど8種）は、現在はすべての買い切りプランに標準で含まれており、永続的に利用できます。Luminar Primeの契約は不要です。</dd>
          </div>
          <div id="faq-3" className="faq-item">
            <dt className="faq-q">Luminar Primeを契約すると何が変わる？</dt>
            <dd className="faq-a">Luminar Primeの契約期間中、AIツール（GenErase・GenSwap・GenExpand・Restoration・AI Assistant）の無制限利用と、その期間中にリリースされる新機能へのアップデートが手に入ります。プリセット等のアセットライブラリとSpaces（Webギャラリー）も利用可能。なお以前あったアップグレードパス／エコシステムパスは廃止され、現在はPrimeに一本化されています。</dd>
          </div>
          <div id="faq-4" className="faq-item">
            <dt className="faq-q">途中でLuminar Primeをやめたらどうなる？</dt>
            <dd className="faq-a">生成AI機能と最新アップデートが使えなくなりますが、基本機能とProツールはそのまま使い続けられます。</dd>
          </div>
          <div id="faq-5" className="faq-item">
            <dt className="faq-q">Luminar Primeは毎年契約しないといけない？</dt>
            <dd className="faq-a">必要な年だけ購入すればOKです。基本機能とProツールだけ使えればいい場合は、Luminar Primeなしの買い切りのみが最もコスパ◎です。</dd>
          </div>
          <div id="faq-6" className="faq-item">
            <dt className="faq-q">1つのライセンスで何台のPCにインストールできる？</dt>
            <dd className="faq-a">デスクトップ専用ライセンスは2台のPCにインストール可能です。Windows・Mac問わず、どの組み合わせでもOK。クロスデバイス・Maxライセンスならさらにモバイル3台でも使えます。</dd>
          </div>
          <div id="faq-7" className="faq-item">
            <dt className="faq-q">セールはいつある？</dt>
            <dd className="faq-a">Skylumはほぼ通年で何らかのセールを実施しています。特にブラックフライデー（11月下旬）は割引率が大きく狙い目です。</dd>
          </div>
          <div id="faq-8" className="faq-item">
            <dt className="faq-q">返金保証はある？</dt>
            <dd className="faq-a">はい、公式ストアで購入した場合は30日間の返金保証があります。「思っていたのと違った…」という場合でも安心です。</dd>
          </div>
          {/*
            以下は Search Console で表示はあるのにクリックがほぼ取れていなかったクエリを
            受け止めるための設問。値段／モバイル／アップデート／Spaces／Creative Library／
            Lightroomの買い切り、の6つがそれにあたる。
          */}
          <div id="faq-9" className="faq-item">
            <dt className="faq-q">Luminar Neoの値段は結局いくら？</dt>
            <dd className="faq-a">買い切りプランは3種類で、値段は{PLANS.desktop.name}が{approxYen(PLANS.desktop.sale)}、{PLANS.allPlatforms.name}が{approxYen(PLANS.allPlatforms.sale)}、{PLANS.max.name}が{approxYen(PLANS.max.sale)}です（セール時の価格）。これ以外に必須の費用はなく、Luminar Primeは必要な年だけ追加するオプションです。セール時期によって価格は変動するため、最新の金額は<Link href="/luminar/sale-and-coupon-info/">セール・クーポン情報</Link>で確認してください。</dd>
          </div>
          <div id="faq-10" className="faq-item">
            <dt className="faq-q">モバイルアプリだけを買い切りで購入できる？</dt>
            <dd className="faq-a">できません。公式ストアの買い切りプランは上記3種類で、モバイル単体のライセンスは用意されていません。スマホやタブレットで使いたい場合は、モバイル3台まで含まれる{PLANS.allPlatforms.name}以上を選ぶことになります。</dd>
          </div>
          <div id="faq-11" className="faq-item">
            <dt className="faq-q">買い切り後のアップデートは無料？</dt>
            <dd className="faq-a">不具合修正やカメラ対応の更新は買い切りのまま受け取れますが、購入後に追加された新機能は対象外です。新機能まで継続的に受け取りたい場合はLuminar Primeを契約します。逆に言えば、今ある機能で足りているなら追加費用は発生しません。</dd>
          </div>
          <div id="faq-12" className="faq-item">
            <dt className="faq-q">Spaces（スペース）とは何ができる機能？</dt>
            <dd className="faq-a">写真をWeb上のギャラリーとしてまとめ、共有できる機能です。{PLANS.allPlatforms.name}と{PLANS.max.name}に含まれ、{PLANS.desktop.name}では使えません。PCとスマホで同じ写真を扱いたい人向けの機能です。</dd>
          </div>
          <div id="faq-13" className="faq-item">
            <dt className="faq-q">Creative Libraryとは？</dt>
            <dd className="faq-a">プリセットやテンプレート、オーバーレイなどのクリエイティブアセットをまとめたもので、1,000点以上が収録されています。{PLANS.max.name}にのみ含まれます。自分で一から調整するより、完成された雰囲気を当てて時短したい人向けです。</dd>
          </div>
          <div id="faq-14" className="faq-item">
            <dt className="faq-q">Lightroomに買い切り版はある？</dt>
            <dd className="faq-a">ありません。Adobe Lightroomはサブスクリプションのみで、買い切りでの購入はできません。「買い切りで使える現像ソフトが欲しい」という理由でLuminar Neoを検討する人が多いのはこのためです。両者の違いは<Link href="/luminar/lightroom-compare/">LightroomとLuminar Neoの比較</Link>で詳しく解説しています。</dd>
          </div>
        </dl>
      </section>

      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ：どのプランを選ぶか</h2>
        {/*
          もとはここに m-point-box「この記事のまとめ」があったが、
          リードの Point ボックスとタイトル・5項目すべてが同一で、
          記事の最初と最後で同じ箱を読ませていたため文章に置き換えた。
        */}
        <p>選び方はシンプルです。<strong>まず買い切り3プランから1つ選び、そのうえでLuminar Primeを足すかどうかを決める。</strong>この2ステップだけです。旧サブスクと旧パスは廃止されているので、他の選択肢はありません。</p>
        <p>プランはスマホで編集するかどうかで決まります。PCだけで完結するなら{PLANS.desktop.name}（{approxYen(PLANS.desktop.sale)}）で足ります。スマホでも編集するなら全プラットフォーム、プリセットと学習コンテンツまで欲しいならMaxです。</p>
        <p>Primeを足すかどうかは、<strong>生成AIを2年目以降も使いたいか、常に最新機能を追いたいか</strong>の2点だけで判断できます。どちらも当てはまらないなら不要です。基本機能とProツール8種は買い切りだけで永続的に使えるので、多くの人は買い切りのみで完結します。</p>
        <p><i className="fa-solid fa-arrow-right"></i> プランが決まったら、次は買うタイミングです。<Link href="/luminar/sale-and-coupon-info/">セール時期とクーポンで安く買う方法</Link>にまとめています。</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'サブスクプランはもうないの？', acceptedAnswer: { '@type': 'Answer', text: '公式ストアでは現在、新規販売されていません。以前は月額・年額のサブスクリプションプランも存在しましたが、2026年現在、日本の公式ストアで販売されているのは買い切りプラン＋Luminar Prime（任意）のみとなっています。' } },
              { '@type': 'Question', name: '買い切りプランだけでProツールは使える？', acceptedAnswer: { '@type': 'Answer', text: 'はい、使えます。Proツール（Noiseless AI、HDR Mergeなど8種）は、現在はすべての買い切りプランに標準で含まれており、永続的に利用できます。Luminar Primeの契約は不要です。' } },
              { '@type': 'Question', name: 'Luminar Primeを契約すると何が変わる？', acceptedAnswer: { '@type': 'Answer', text: 'Luminar Primeの契約期間中、AIツール（GenErase・GenSwap・GenExpand・Restoration・AI Assistant）の無制限利用と、その期間中にリリースされる新機能へのアップデートが手に入ります。プリセット等のアセットライブラリとSpaces（Webギャラリー）も利用可能。なお以前あったアップグレードパス／エコシステムパスは廃止され、現在はPrimeに一本化されています。' } },
              { '@type': 'Question', name: '途中でLuminar Primeをやめたらどうなる？', acceptedAnswer: { '@type': 'Answer', text: '生成AI機能と最新アップデートが使えなくなりますが、基本機能とProツールはそのまま使い続けられます。' } },
              { '@type': 'Question', name: 'Luminar Primeは毎年契約しないといけない？', acceptedAnswer: { '@type': 'Answer', text: '必要な年だけ購入すればOKです。基本機能とProツールだけ使えればいい場合は、Luminar Primeなしの買い切りのみが最もコスパが良いです。' } },
              { '@type': 'Question', name: '1つのライセンスで何台のPCにインストールできる？', acceptedAnswer: { '@type': 'Answer', text: 'デスクトップ専用ライセンスは2台のPCにインストール可能です。Windows・Mac問わず、どの組み合わせでもOK。クロスデバイス・Maxライセンスならさらにモバイル3台でも使えます。' } },
              { '@type': 'Question', name: 'セールはいつある？', acceptedAnswer: { '@type': 'Answer', text: 'Skylumはほぼ通年で何らかのセールを実施しています。特にブラックフライデー（11月下旬）は割引率が大きく狙い目です。' } },
              { '@type': 'Question', name: 'Luminar Neoの値段は結局いくら？', acceptedAnswer: { '@type': 'Answer', text: `買い切りプランは3種類で、値段は${PLANS.desktop.name}が${approxYen(PLANS.desktop.sale)}、${PLANS.allPlatforms.name}が${approxYen(PLANS.allPlatforms.sale)}、${PLANS.max.name}が${approxYen(PLANS.max.sale)}です（セール時の価格）。これ以外に必須の費用はなく、Luminar Primeは必要な年だけ追加するオプションです。` } },
              { '@type': 'Question', name: 'モバイルアプリだけを買い切りで購入できる？', acceptedAnswer: { '@type': 'Answer', text: `できません。公式ストアの買い切りプランは3種類で、モバイル単体のライセンスは用意されていません。スマホやタブレットで使いたい場合は、モバイル3台まで含まれる${PLANS.allPlatforms.name}以上を選ぶことになります。` } },
              { '@type': 'Question', name: '買い切り後のアップデートは無料？', acceptedAnswer: { '@type': 'Answer', text: '不具合修正やカメラ対応の更新は買い切りのまま受け取れますが、購入後に追加された新機能は対象外です。新機能まで継続的に受け取りたい場合はLuminar Primeを契約します。' } },
              { '@type': 'Question', name: 'Spaces（スペース）とは何ができる機能？', acceptedAnswer: { '@type': 'Answer', text: `写真をWeb上のギャラリーとしてまとめ、共有できる機能です。${PLANS.allPlatforms.name}と${PLANS.max.name}に含まれ、${PLANS.desktop.name}では使えません。` } },
              { '@type': 'Question', name: 'Creative Libraryとは？', acceptedAnswer: { '@type': 'Answer', text: `プリセットやテンプレート、オーバーレイなどのクリエイティブアセットをまとめたもので、1,000点以上が収録されています。${PLANS.max.name}にのみ含まれます。` } },
              { '@type': 'Question', name: 'Lightroomに買い切り版はある？', acceptedAnswer: { '@type': 'Answer', text: 'ありません。Adobe Lightroomはサブスクリプションのみで、買い切りでの購入はできません。買い切りで使える現像ソフトを探している人がLuminar Neoを検討するのはこのためです。' } },
              { '@type': 'Question', name: '返金保証はある？', acceptedAnswer: { '@type': 'Answer', text: 'はい、公式ストアで購入した場合は30日間の返金保証があります。「思っていたのと違った…」という場合でも安心です。' } },
            ],
          }),
        }}
      />

    </LuminarArticleLayout>
  )
}
