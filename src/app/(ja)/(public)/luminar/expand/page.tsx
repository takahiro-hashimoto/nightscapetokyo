import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/common/AppLink'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import type { TocItem } from '@/lib/luminar/toc'
import { PRICING_CONFIRMED_AT, PLANS, PRIME, LIGHTROOM_ANNUAL, yen, approxYen, lightroomTotal } from '@/lib/luminar/pricing'


// ── メタデータ ────────────────────────────────────────────────────────────────

const META = {
  slug: 'expand',
  title: 'Luminar NeoのProツール8種を徹底解説｜買い切り版に標準搭載【2026年】',
  description:
    'Luminar NeoのProツール8種（Noiseless AI・Upscale AI・HDR Mergeなど）でできることを解説。現在はすべての買い切りライセンスに標準搭載で、追加購入は不要です。各ツールの活用例と、Luminar Prime（生成AI・アップデート）との関係もまとめました。',
  publishedAt: '2026-01-19T09:32:32',
  updatedAt: '2026-08-13T00:00:00',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/expand.jpg',
    alt: 'Luminar NeoのProツール8種を徹底解説｜買い切り版に標準搭載【2026年】',
    width: 1920,
    height: 1080,
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

// ── TOC ───────────────────────────────────────────────────────────────────────

const TOC: TocItem[] = [
  { id: 'what-is-pro', level: 2, text: 'Luminar Neo Proツール（拡張機能）とは' },
  { id: 'pro-list', level: 2, text: 'Luminar Neo Proツール全8種の一覧' },
  { id: 'supersharp', level: 3, text: '①スーパーシャープAI（Supersharp AI）｜手ブレ・ピンボケを救済できる' },
  { id: 'noiseless', level: 3, text: '②ノイズレスAI（Noiseless AI）｜高感度ノイズを消せる' },
  { id: 'magic-light', level: 3, text: '③マジックライトAI（Magic Light AI）｜光芒を後から足せる' },
  { id: 'focus-stacking', level: 3, text: '④フォーカススタッキング（Focus Stacking）｜手前から奥までピントを合わせられる' },
  { id: 'background-removal', level: 3, text: '⑤背景削除AI（Background Removal AI）｜人物以外も切り抜ける' },
  { id: 'hdr-merge', level: 3, text: '⑥HDRマージ（HDR Merge）｜明暗差の大きい場面を1枚にできる' },
  { id: 'upscale', level: 3, text: '⑦アップスケールAI（Upscale AI）｜解像度を最大6倍にできる' },
  { id: 'panorama', level: 3, text: '⑧パノラマスティッチング（Panorama Stitching）｜レンズに収まらない風景をつなげられる' },
  { id: 'purpose', level: 2, text: 'Luminar Neo Proツールの選び方（目的別）' },
  { id: 'compare-adobe', level: 2, text: 'Luminar Neo ProツールとAdobe製品の比較' },
  { id: 'price', level: 2, text: 'Luminar Neo Proツールに追加費用はかかる？' },
  { id: 'faq', level: 2, text: 'Luminar Neo Proツールのよくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ：Luminar Neo Proツールは必要か' },
]

// ── ページ本体 ────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <LuminarArticleLayout
      {...META}
      categoryIds={[1]}
      toc={TOC}
      lead={
        <>
          <p>Luminar Neoを使い始めて、ふと気になったことはありませんか？「Proツール（拡張機能）って、結局のところ必要なの？」と。</p>
          <p>僕自身、最初はLuminar Neoの標準機能だけで十分だと思っていました。でも、使い込んでいくうちに「もうちょっとここをどうにかしたい」という場面が増えてきたんです。</p>
          <p>高感度で撮った夜景写真のノイズをもっときれいに消したい、手ブレしてしまった写真をなんとか救いたい…。そういった<strong>「あと一歩」の部分を補ってくれるのがProツール</strong>でした。</p>
          <p>この記事では、Proツールで実際に何ができるのか、そして買い切りとの関係がどうなっているのかを整理しました。</p>
          <p>Proツールが自分に必要かどうか決めかねている方は、ぜひチェックしてみてください。</p>
          <div className="m-abstract">
            <span className="m-abstract__label">この記事の結論</span>
            <ul>
              <li><strong>Proツールとは？</strong>→ 高度な補正・特殊編集機能（全8種）</li>
              <li><strong>買い切りに含まれる？</strong>→ 含まれる。現在はすべての買い切りライセンスに標準搭載</li>
              <li><strong>追加費用は？</strong>→ 不要。Proツールは永続で使い続けられる</li>
              <li><strong>Luminar Primeが必要なのは？</strong>→ AIツールと最新アップデートを使い続けたい場合のみ</li>
            </ul>
          </div>
        </>
      }
    >
      {/* セクション1: Proツールとは */}
      <section id="what-is-pro" className="content-card card-padding article-body">
        <h2>Luminar Neo Proツール（拡張機能）とは</h2>
        <p>Luminar NeoのProツールは、標準のソフトウェアに追加できる<strong>「高度な補正機能」や「特殊な編集機能」</strong>のことです。Photoshopでいうところの「専用プラグイン」や「複雑な合成作業」を、ワンクリック〜数回の操作で実現できます。</p>
        <p>Photoshopならマスクを作って範囲を調整して、と何段階か踏む作業が、Proツールでは効果を選んで強度を決めるだけで終わります。1枚だけなら大した差ではありませんが、まとめて処理するときに効いてきます。</p>
        <p>このページはProツールに絞って解説しています。Luminar Neoというソフト自体の概要から知りたい場合は<Link href="/luminar/">Luminar Neoの完全ガイド</Link>を先にご覧ください。</p>
        {/*
          もとはここに h3「【重要】Proツールはすべての買い切りプランに標準搭載」＋段落2本＋表があったが、
          同じ主張がリードの結論ボックス・#price・FAQ 1/2・まとめの計5箇所にあり、
          記事全体で「買い切り」24回・「標準搭載」11回まで膨らんでいた。
          表も Proツール列が2行とも「◯」で比較になっていなかったため、
          費用の話は #price に一本化し、このセクションは「Proツールとは何か」だけに絞る。
        */}
      </section>

      {/* セクション2: Proツール全8種 */}
      <section id="pro-list" className="content-card card-padding article-body">
        <h2>Luminar Neo Proツール全8種の一覧</h2>
        <p>現在Luminar Neoで提供されているProツール全8種を紹介します。</p>

        <h3 id="supersharp">①スーパーシャープAI（Supersharp AI）｜手ブレ・ピンボケを救済できる</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/supershape-before.jpg" alt="スーパーシャープAIで手ブレを補正する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/supershape-after.jpeg" alt="スーパーシャープAIで手ブレを補正した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>手ブレやピンボケをAIで補正する機能です。撮り直しの効かない写真でも、軽度から中程度のブレなら、輪郭を復元して使えるレベルまで引き上げられます。</p>
        <p>初めて使ったのは、旅行先で撮った夕暮れの写真でした。シャッタースピードが足りず微妙に手ブレしていたのですが、適用したら驚くほど輪郭がくっきりしました。完全にピントを外した写真の復元までは難しいので、惜しい1枚を使えるところまで戻す機能だと考えておくのがちょうどいいです。</p>

        <h3 id="noiseless">②ノイズレスAI（Noiseless AI）｜高感度ノイズを消せる</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/noise-before.jpg" alt="Noiseless AIで高感度ノイズを除去する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/DSC08329.jpg" alt="Noiseless AIで高感度ノイズを除去した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>高感度撮影で出るノイズを、ディテールを残したまま除去する機能です。強度はLow・Middle・Highの3段階から選べて、プレビューを見ながら効き具合を決められます。</p>
        <p>夜の街並みをISO6400で撮った写真に使ったところ、ISO1600くらいの仕上がりになりました。夜景や星空のようにISOを上げざるを得ない撮影では、ノイズ除去の品質がそのまま写真の出来を決めます。DxO PureRAWのような専用ソフトを別に買わなくても、買い切りの範囲で完結するのは大きいです。</p>

        <h3 id="magic-light">③マジックライトAI（Magic Light AI）｜光芒を後から足せる</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/magic-light-before.jpeg" alt="マジックライトAIで光芒を追加する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/magic-light-after2.jpeg" alt="マジックライトAIで光芒を追加した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>街灯やイルミネーションなどの光源に、クロスフィルターをかけたような光芒を追加する機能です。光線の数と強さを個別に調整できるので、撮影時にフィルターを持っていかなくても、後から光を演出できます。</p>
        <p>夜景で光を目立たせたいときに使っています。ただし効かせすぎるとすぐ嘘っぽくなるので、僕は光線の数を最小にしてから少しずつ足しています。元の写真に強い光源がないと効果自体が出ないので、使うかどうかは撮影の時点でだいたい決まる機能でもあります。</p>

        <h3 id="focus-stacking">④フォーカススタッキング（Focus Stacking）｜手前から奥までピントを合わせられる</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/paper-before.jpeg" alt="フォーカススタッキングで被写界深度を拡大する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/paper-after.jpeg" alt="フォーカススタッキングで被写界深度を拡大した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>ピント位置を少しずつずらして撮った写真を合成し、ピントの合う範囲を広げる機能です。最大100枚まで重ねられて、撮影中に生じた微妙なズレは自動で補正されます。</p>
        <p>使い始めたきっかけはテーブルフォトでした。料理写真はお皿の手前から奥まで写したいのに、絞り込むと背景まで写り込んでしまう。この機能なら、背景のボケを残したまま料理だけを端まで鮮明にできます。ただし三脚は必須で、手持ちで撮った素材ではズレが大きすぎて合いませんでした。</p>

        <h3 id="background-removal">⑤背景削除AI（Background Removal AI）｜人物以外も切り抜ける</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/delete-before.jpg" alt="背景削除AIで背景を削除する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/delete-after.jpg" alt="背景削除AIで背景を削除した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>被写体を自動で認識して背景を消す機能です。標準搭載のポートレート背景除去は人物専用ですが、こちらは人物以外のオブジェクトも認識でき、複数の被写体を個別に選ぶこともできます。</p>
        <p>僕はブログのアイキャッチを作るときによく使っています。以前はPhotoshopの「選択とマスク」で30分かけていた作業が、5分で終わるようになりました。髪の毛の細かいところは手で直すこともありますが、土台さえ作ってくれれば作業時間はまったく変わってきます。</p>

        <h3 id="hdr-merge">⑥HDRマージ（HDR Merge）｜明暗差の大きい場面を1枚にできる</h3>
        <div className="comparison-container">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/hdr-before.jpeg" alt="HDRマージで露出違いの写真を合成する前の作例" className="image-before" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/hdr-after.jpeg" alt="HDRマージで露出違いの写真を合成した後の作例" className="image-after" width={1000} height={667} sizes="(max-width: 768px) 100vw, 880px" />
          <div className="slider-handle">
            <div className="slider-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
              </svg>
            </div>
          </div>
          <span className="label label-before">Before</span>
          <span className="label label-after">After</span>
        </div>
        <p>露出を変えて撮った写真を合成し、明るいところと暗いところの両方を残す機能です。最大10枚まで重ねられて、手持ち撮影で生じたズレも自動で補正されます。</p>
        <p>室内から窓の外を撮ると、外が白飛びするか室内が潰れるかのどちらかになりますよね。そういう場面で効きます。ただしHDRは加減を間違えるとすぐ絵画のような質感になるので、僕は必ず控えめな設定から始めて、足りなければ強める順にしています。最初から強くかけると戻せなくなります。</p>

        <h3 id="upscale">⑦アップスケールAI（Upscale AI）｜解像度を最大6倍にできる</h3>
        <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/unnamed.jpg" alt="アップスケールAIで解像度を拡大した作例" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></div>
        <p>画質を保ったまま、解像度を最大6倍まで拡大する機能です。トリミングで小さくなってしまった写真や、古いデジカメで撮った低解像度の写真を、もう一度使えるようにできます。</p>
        <p>昔のコンデジで撮った写真を拡大して印刷したことがあります。A4サイズまでなら十分実用に耐えました。ただし大判になると、AIが推測で埋めた部分の不自然さが見えてきます。失った情報が戻るわけではなく、見られる大きさまで引き上げる機能だと考えておくと期待を外しません。</p>

        <h3 id="panorama">⑧パノラマスティッチング（Panorama Stitching）｜レンズに収まらない風景をつなげられる</h3>
        <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/unit-scaled.jpg" alt="パノラマスティッチングで複数カットを合成した作例" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></div>
        <p>複数のカットをつなぎ合わせて、1枚のワイドな写真にする機能です。広角レンズでも入りきらない風景を、分けて撮ってから合成できます。</p>
        <p>つなげた分だけ画素数も増えるので、大きく引き伸ばして印刷したいときにも向いています。きれいに合わせるコツは撮影の側にあって、露出をマニュアルで固定し、同じ設定のまま撮り進めることです。オートのままだとカットごとに明るさが変わり、つなぎ目が帯のように残ります。</p>
      </section>

      {/* セクション3: 目的別 */}
      <section id="purpose" className="content-card card-padding article-body">
        <h2>Luminar Neo Proツールの選び方（目的別）</h2>
        <p>8種類あると言われても、自分に関係あるのはどれなのか分かりにくいと思います。やりたいことから逆算すると、<strong>「写真救済」「表現拡張」「作業効率」の3つ</strong>に整理できます。</p>
        <p>僕の場合、8種のうち日常的に使うのはノイズレスAIとスーパーシャープAIの2つだけです。それでも<strong>撮り直しの効かない写真を救えた</strong>という一点で、選んだ価値は十分にありました。全部を使いこなす必要はなく、1つでも刺さるものがあれば元は取れます。</p>
        <p>下の表で、自分の目的に近いものを探してみてください。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>目的</th>
                <th>おすすめProツール</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>写真救済</strong></td>
                <td>スーパーシャープAI<br />ノイズレスAI</td>
                <td>撮り直しが効かない大切な写真を救いたい</td>
              </tr>
              <tr>
                <td><strong>表現拡張</strong></td>
                <td>HDRマージ<br />フォーカススタッキング<br />パノラマスティッチング</td>
                <td>撮影技術を後処理で補いたい<br />新しい表現に挑戦したい</td>
              </tr>
              <tr>
                <td><strong>作業効率</strong></td>
                <td>背景削除AI<br />アップスケールAI<br />マジックライトAI</td>
                <td>編集時間を短縮したい<br />サムネイル・Web画像を量産したい</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* セクション4: Adobe比較 */}
      <section id="compare-adobe" className="content-card card-padding article-body">
        <h2>Luminar Neo ProツールとAdobe製品の比較</h2>
        <p>ここまで読んで、「Proツールを使うくらいならAdobeでいいのでは」と思った方もいるはずです。実際、できること自体はかなり重なっています。</p>
        <p>違いが出るのは使い方のほうです。数千枚の写真を整理しながら現像していくならLightroomのカタログ機能に分がありますし、1枚をAIで手早く仕上げたいならLuminar Neoのほうが速く終わります。どちらか選びきれない場合は、Luminar NeoをLightroomのプラグインとして呼び出す使い方もできるので、そもそも二択にする必要はありません。</p>
        <p>機能ごとの違いは下の表のとおりです。料金まで含めた比較は<Link href="/luminar/lightroom-compare/">LightroomとLuminar Neoの比較記事</Link>で詳しく扱っています。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>比較項目</th>
                <th>Luminar Neo + Proツール</th>
                <th>Lightroom + Photoshop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AIによる空の置き換え</strong></td>
                <td><span className="text-true">◯ ワンクリック</span></td>
                <td>Photoshopで手動合成が必要</td>
              </tr>
              <tr>
                <td><strong>ノイズ除去</strong></td>
                <td><span className="text-true">◯ Noiseless AI</span></td>
                <td>Lightroom標準機能あり</td>
              </tr>
              <tr>
                <td><strong>背景削除</strong></td>
                <td><span className="text-true">◯ ワンクリック</span></td>
                <td>Photoshopで選択とマスク</td>
              </tr>
              <tr>
                <td><strong>写真管理機能</strong></td>
                <td>基本的な機能のみ</td>
                <td><span className="text-true">◯ Lightroomが強力</span></td>
              </tr>
              <tr>
                <td><strong>最新カメラ対応</strong></td>
                <td>やや遅め</td>
                <td><span className="text-true">◯ Adobeが早い</span></td>
              </tr>
              <tr>
                <td><strong>価格（3年間）</strong></td>
                <td><strong>{yen(PLANS.desktop.sale)}</strong>（買い切りのみ・Proツール込み）</td>
                <td>{approxYen(lightroomTotal(3))}（Lightroomプラン1TB・年間一括 {yen(LIGHTROOM_ANNUAL)}/年）</td>
              </tr>
              <tr>
                <td><strong>料金体系</strong></td>
                <td>買い切り＋Luminar Prime（任意）</td>
                <td>サブスクのみ</td>
              </tr>
            </tbody>
          </table>
        </div>
</section>

      {/* セクション5: 価格と購入方法 */}
      <section id="price" className="content-card card-padding article-body">
        <h2>Luminar Neo Proツールに追加費用はかかる？</h2>
        <p>かかりません。Proツール8種はどの買い切りライセンスにも最初から入っていて、あとから払うものはありません。ここでは価格と、混同されやすいLuminar Primeとの違いを整理します。</p>
        <h3>買い切り3プランの価格（Proツール込み）</h3>
        <p>日本公式ストアの買い切りプランは以下の3種類です。どれを選んでもProツール8種は同じように使えます。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>買い切りプラン</th>
                <th>価格（セール中）</th>
                <th>通常価格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>デスクトップ専用</strong><br /><small>（旧デスクトップ版）</small></td>
                <td>{yen(PLANS.desktop.sale)}</td>
                <td>{PLANS.desktop.regular ? yen(PLANS.desktop.regular) : '—'}</td>
              </tr>
              <tr>
                <td><strong>全プラットフォーム</strong></td>
                <td>{yen(PLANS.allPlatforms.sale)}</td>
                <td>{PLANS.allPlatforms.regular ? yen(PLANS.allPlatforms.regular) : '—'}</td>
              </tr>
              <tr>
                <td><strong>Max</strong></td>
                <td>{yen(PLANS.max.sale)}</td>
                <td>{PLANS.max.regular ? yen(PLANS.max.regular) : '—'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="m-note">※価格・プラン情報は{new Date(PRICING_CONFIRMED_AT).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}に日本公式ストアで確認した時点のセール価格です。セール価格は時期により変動しますが、ほぼ通年何らかのセールが実施されています。</p>
        <h3>Luminar Primeの役割は「AIツール」と「最新アップデート」</h3>
        <p>では、Luminar Primeは何のためにあるのか？というと、年額サブスクで、<strong>生成AIツール（GenErase・GenSwap・GenExpand）の無制限利用と、新機能アップデートを受け取り続けるため</strong>のものです。</p>
        {/* 1行しかない表は横スクロールが出るだけで比較の役に立たないため、
            定義リスト（dl/dt/dd）で表現する */}
        <div className="definition">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>初年度{approxYen(PRIME.firstYear)}、2年目以降{approxYen(PRIME.renewal)}（為替・時期で変動）</dd>
            <dt>含まれる内容</dt>
            <dd>契約期間中の新機能アップデート、AIツール（生成AI・Restoration・AI Assistant）の無制限利用、アセットライブラリ</dd>
          </dl>
        </div>
        <p>なお、生成AIツールは買い切りの購入日から1年間は追加費用なしで使えます（クラウド処理のためネット接続必須）。<strong>Primeが失効しても、アプリ本体・基本機能・Proツールはそのまま永続で使えます</strong>。使えなくなるのは「AIツール」と「以後の新機能アップデート」、アセットライブラリだけです。</p>

        {/*
          もとはここに「購入パターン別の費用目安」「購入方法」「セール時期を狙おう」が
          105行分あったが、いずれも luminar-plan / sale-and-coupon-info の主題で、
          Proツールの記事が価格記事の領域に踏み込んでいる状態だった。
          （expand が実際に取れているのは luminar neo pro / 拡張機能 / ノイズ除去）
          Proツールの費用に答えたうえで、詳細は各記事へ送る。
        */}
        <p>どのプランを選ぶか、総額がいくらになるかは<Link href="/luminar/luminar-plan/">買い切り3プランの価格と選び方</Link>で、購入時期とクーポンについては<Link href="/luminar/sale-and-coupon-info/">セール時期とクーポンコード</Link>で解説しています。</p>
      </section>

      {/* セクション6: FAQ */}
      <section id="faq" className="content-card card-padding article-body">
        <h2>Luminar Neo Proツールのよくある質問（FAQ）</h2>
        <dl>
          {/* 各 FAQ に id を付与し、#faq-1 形式で個別の質問へ直接リンク・引用できるようにする。
              日本語の質問文をスラッグ化すると URL エンコードで読めなくなり、文言修正でリンクが壊れるため連番で固定 */}
          <div id="faq-1" className="faq-item">
            <dt className="faq-q">買い切りプランだけでProツールは使えますか？</dt>
            <dd className="faq-a"><strong>はい、使えます。</strong>現在はProツール8種すべてが、どの買い切りライセンスにも標準搭載されています。Luminar Primeなどの追加購入は不要です。</dd>
          </div>
          <div id="faq-2" className="faq-item">
            <dt className="faq-q">Luminar Primeを更新しないとProツールは使えなくなりますか？</dt>
            <dd className="faq-a"><strong>いいえ、使えなくなりません。</strong>Primeが失効しても、アプリ本体・基本機能・Proツールはそのまま永続で使えます。使えなくなるのはAIツール（GenErase・GenSwap・GenExpandなど）と、以後の新機能アップデートだけです。</dd>
          </div>
          <div id="faq-3" className="faq-item">
            <dt className="faq-q">無料体験版でProツールは試せますか？</dt>
            <dd className="faq-a"><strong>はい、試せます。</strong>7日間の無料体験版はクレジットカード不要で、Proツールを含む全機能にフルアクセスできます。</dd>
          </div>
          <div id="faq-4" className="faq-item">
            <dt className="faq-q">返金保証はありますか？</dt>
            <dd className="faq-a">はい、公式ストアからの直接購入なら<strong>30日間の全額返金保証</strong>があります。</dd>
          </div>
          <div id="faq-5" className="faq-item">
            <dt className="faq-q">LightroomやPhotoshopと併用できますか？</dt>
            <dd className="faq-a">はい、プラグインとして使用できます。既存のワークフローを変えずにLuminar NeoのAI機能だけを活用することも可能です。</dd>
          </div>
        </dl>
      </section>

      {/* セクション7: まとめ */}
      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ：Luminar Neo Proツールは必要か</h2>
        <div className="l-grid-2 l-bottom-large">
          <div className="m-pc-box m-pc-box--pros">
            <div className="m-pc-head"><i className="fa-solid fa-circle-check"></i> 向いている人</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> 失敗写真を救いたい人</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 撮影スキルを後処理で補いたい人</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 編集時間を短縮したい人</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 1つのソフトで完結させたい人</div>
            </div>
          </div>
          <div className="m-pc-box m-pc-box--cons">
            <div className="m-pc-head"><i className="fa-solid fa-circle-xmark"></i> 向いていない人</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> 基本補正しかしない人</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 撮って出しを好む人</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 他のソフトで満足している人</div>
            </div>
          </div>
        </div>
        <p>写真編集ソフトは「どれが一番優れているか」ではなく、<strong>「自分の用途に合っているか」</strong>で選ぶべきです。僕にとってLuminar Neoは、「必要十分な機能を、ストレスなく使える」という点で、ベストな選択でした。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">この記事のまとめ</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Proツールは全8種類</strong>：高度な補正・特殊編集機能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>すべての買い切りライセンスに標準搭載</strong>→追加購入は不要</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Primeを契約しなくてもProツールは永続利用可</strong></li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Primeが必要なのはAIツールと最新アップデートを続けたい場合のみ</strong></li>
          </ul>
        </div>
      </section>
    </LuminarArticleLayout>
  )
}
