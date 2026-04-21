import type { Metadata } from 'next'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import LuminarCtaMini from '@/components/luminar/LuminarCtaMini'
import type { TocItem } from '@/lib/luminar/toc'

export const dynamic = 'force-static'

// ── メタデータ ────────────────────────────────────────────────────────────────

const META = {
  slug: 'expand',
  title: 'Luminar Neoの拡張機能まとめ。できること・メリットと価格プランの選び方',
  description:
    'Luminar Neoを使い始めて、ふと気になったことはありませんか？「Proツール（拡張機能）って、結局のところ必要なの？」と。 僕自身、最初はLuminar…',
  publishedAt: '2026-01-19T09:32:32',
  updatedAt: '2026-01-21T19:10:26',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/expand.jpg',
    alt: 'Luminar Neoの拡張機能まとめ。できること・メリットと価格プランの選び方',
    width: 1920,
    height: 1080,
  },
}

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

// ── TOC ───────────────────────────────────────────────────────────────────────

const TOC: TocItem[] = [
  { id: 'what-is-pro', level: 2, text: 'Luminar NeoのProツール（拡張機能）とは何か？' },
  { id: 'pro-not-included', level: 3, text: '【重要】Proツールは買い切りプランには含まれていない' },
  { id: 'pro-list', level: 2, text: 'Proツール（拡張機能）全8種の一覧と特徴' },
  { id: 'supersharp', level: 3, text: '①スーパーシャープAI（Supersharp AI）' },
  { id: 'noiseless', level: 3, text: '②ノイズレスAI（Noiseless AI）' },
  { id: 'magic-light', level: 3, text: '③マジックライトAI（Magic Light AI）' },
  { id: 'focus-stacking', level: 3, text: '④フォーカススタッキング（Focus Stacking）' },
  { id: 'background-removal', level: 3, text: '⑤背景削除AI（Background Removal AI）' },
  { id: 'hdr-merge', level: 3, text: '⑥HDRマージ（HDR Merge）' },
  { id: 'upscale', level: 3, text: '⑦アップスケールAI（Upscale AI）' },
  { id: 'panorama', level: 3, text: '⑧パノラマスティッチング（Panorama Stitching）' },
  { id: 'purpose', level: 2, text: 'Proツール（拡張機能）があると何が変わる？（目的別）' },
  { id: 'compare-adobe', level: 2, text: 'Adobe Lightroom / Photoshopとの比較' },
  { id: 'price', level: 2, text: 'Proツール（拡張機能）の価格と購入方法' },
  { id: 'faq', level: 2, text: 'よくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ｜Proツールはどんな人に向いているか？' },
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
          <p>そこで本記事では日々Luminar Neoの拡張機能を愛用している僕が、この機能のできることや購入方法を解説していきます。</p>
          <div className="m-abstract">
            <span className="m-abstract__label">この記事の結論</span>
            <ul>
              <li><strong>Proツールとは？</strong>→ 高度な補正・特殊編集機能（全8種）</li>
              <li><strong>買い切りに含まれる？</strong>→ 含まれない。パスの購入が必要</li>
              <li><strong>一度買えば永続？</strong>→ はい。翌年更新しなくてもProツールは使い続けられる</li>
              <li><strong>価格は？</strong>→ Upgrade Pass 年額約¥7,400</li>
            </ul>
          </div>
          <LuminarCtaMini />
        </>
      }
    >
      {/* セクション1: Proツールとは */}
      <section id="what-is-pro" className="content-card card-padding article-body">
        <h2>Luminar NeoのProツール（拡張機能）とは何か？</h2>
        <p>Luminar NeoのProツール（旧称：拡張機能・エクステンション）は、標準のソフトウェアに追加できる<strong>「高度な補正機能」や「特殊な編集機能」</strong>のことです。Photoshopでいうところの「専用プラグイン」や「複雑な合成作業」を、ワンクリック〜数回の操作で実現できます。</p>
        <p>僕がProツールを使い始めて感じたのは、「これ、Photoshopでやろうとしたら何時間かかるんだろう」という作業が、本当に数クリックで終わる快適さでした。特に時間のない中で大量の写真を処理しなければならないときには、この差は想像以上に大きいです。</p>
        <h3 id="pro-not-included">【重要】Proツールは買い切りプランには含まれていない</h3>
        <p>公式カスタマーサポートに確認したところ、<strong>Proツールは基本の買い切りライセンスには含まれていません</strong>。Proツールを使うには、<strong>Upgrade Pass</strong>または<strong>Ecosystem Pass</strong>の購入が必要です。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>プラン</th>
                <th>Proツール</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>買い切りプランのみ</td>
                <td><span className="text-false">×使えない</span></td>
                <td>基本機能のみ</td>
              </tr>
              <tr>
                <td>買い切り＋Upgrade Pass</td>
                <td><span className="text-true">◯永続利用可</span></td>
                <td>一度購入すれば永続</td>
              </tr>
              <tr>
                <td>買い切り＋Ecosystem Pass</td>
                <td><span className="text-true">◯永続利用可</span></td>
                <td>モバイル機能も含む</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>嬉しいポイントは、<strong>一度パスを購入すれば、Proツールは永続的に使える</strong>ということ。翌年パスを更新しなくても、Proツールは消えません（ただし生成AI機能と最新アップデートは使えなくなります）。</p>
      </section>

      {/* セクション2: Proツール全8種 */}
      <section id="pro-list" className="content-card card-padding article-body">
        <h2>Proツール（拡張機能）全8種の一覧と特徴</h2>
        <p>現在Luminar Neoで提供されているProツール全8種を紹介します。</p>

        <h3 id="supersharp">①スーパーシャープAI（Supersharp AI）</h3>
        <p>手ブレやピンボケの補正をAIで行う機能です。「撮り直しが効かないけど、ちょっとブレてしまった…」という写真を救済してくれます。</p>
        <p>僕が初めてこの機能を使ったのは、旅行先で撮った夕暮れの写真でした。シャッタースピードが足りなくて微妙に手ブレしていたんですが、スーパーシャープAIを適用したら、驚くほど輪郭がくっきりしました。完全にピントを外した写真の復元は難しいですが、「惜しい写真を使えるレベルまで引き上げる」には十分な効果があります。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">スーパーシャープAIのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 手ブレ・ピンボケをAIが自動補正</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 軽度〜中程度の失敗写真に効果的</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 撮り直しが効かない写真の救済に最適</li>
          </ul>
        </div>

        <h3 id="noiseless">②ノイズレスAI（Noiseless AI）</h3>
        <p>高感度撮影時のノイズを除去する機能です。ノイズを除去しながらも、ディテール（細部）をできるだけ残してくれます。</p>
        <p>夜の街並みを撮った写真でISO6400くらいまで上げていたんですが、ノイズレスAIを使ったら、ISO1600くらいで撮ったかのような仕上がりになりました。Low・Middle・Highの3段階から強度を選べるので、プレビューを見ながら最適な設定を探れるのも使いやすいポイントです。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">ノイズレスAIのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 高感度撮影のノイズを効果的に除去</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> ディテールを保ちながら処理できる</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> Low/Middle/Highの3段階で強度選択可能</li>
          </ul>
        </div>

        <h3 id="magic-light">③マジックライトAI（Magic Light AI）</h3>
        <p>写真内の光源（街灯やイルミネーションなど）に、クロスフィルターをかけたような光芒を追加する機能です。撮影時にフィルターを使わなくても、後処理で光の演出ができます。</p>
        <p>夜景やイルミネーションの写真で、光を強調したいときに使えます。光線の数や強さも細かく調整できるので、「ちょっとキラキラさせたい」から「ドラマチックに演出したい」まで幅広く対応可能。ただし使いすぎると不自然になりやすいので、控えめに使うのがコツです。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">マジックライトAIのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 光芒・光の演出を後処理で追加</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> クロスフィルター不要で撮影可能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 光線の数・強さを細かく調整可能</li>
          </ul>
        </div>

        <h3 id="focus-stacking">④フォーカススタッキング（Focus Stacking）</h3>
        <p>ピント位置を少しずつずらして撮った複数枚の写真を合成し、被写界深度（ピントが合っている範囲）を拡大する機能です。最大100枚まで合成可能で、写真のズレも自動補正してくれます。</p>
        <p>僕がフォーカススタッキングを使い始めたのは、テーブルフォト（料理や雑貨の撮影）がきっかけでした。料理写真って、お皿の手前から奥まで全部にピントを合わせたいことが多いんですよね。この機能を使えば、ボケ味のある柔らかい描写と、全体にピントが合った鮮明さを両立できます。ただし三脚での撮影が前提になります。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">フォーカススタッキングのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 最大100枚まで合成可能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 写真のズレを自動補正</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> マクロ・物撮りに最適（三脚推奨）</li>
          </ul>
        </div>

        <h3 id="background-removal">⑤背景削除AI（Background Removal AI）</h3>
        <p>人物やオブジェクトを自動で認識して、背景を削除する機能です。標準の「ポートレート背景除去」は人物限定ですが、このProツールは人物以外も認識でき、複数の被写体を選択することも可能です。</p>
        <p>僕はブログ用のアイキャッチ画像を作るときによく使っています。以前はPhotoshopの選択とマスクを使って30分くらいかけていた作業が、今では5分で終わります。髪の毛の細かい部分など微調整が必要な場合もありますが、ベースを作ってくれるだけでも作業効率は大きく上がりますね。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">背景削除AIのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 人物以外のオブジェクトも認識可能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 複数の被写体を個別に選択できる</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> サムネイル・Web用画像制作に最適</li>
          </ul>
        </div>

        <h3 id="hdr-merge">⑥HDRマージ（HDR Merge）</h3>
        <p>明暗差のある複数枚の写真を合成して、ハイダイナミックレンジ（HDR）の写真を作成する機能です。露出を変えて撮った最大10枚の写真を合成でき、手持ち撮影でもズレを自動補正してくれます。</p>
        <p>窓から外を撮ると室内が真っ暗になったり、逆に外が白飛びしたりすることがありますよね。そういった「明暗差の大きいシーン」で威力を発揮します。ただしHDR写真は加減を間違えると不自然になりやすいので、控えめな設定から始めるのがおすすめです。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">HDRマージのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 最大10枚の露出違い写真を合成</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 手持ち撮影でもズレ補正が可能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 明暗差の大きいシーンに最適</li>
          </ul>
        </div>

        <h3 id="upscale">⑦アップスケールAI（Upscale AI）</h3>
        <p>写真の解像度を最大6倍まで拡大しつつ、画質を保つ機能です。トリミングで切り取った後の写真を大きくしたいときや、古いデジカメで撮った低解像度の写真を再利用したいときに便利です。</p>
        <p>僕も昔のコンデジで撮った思い出の写真を、この機能で拡大して印刷したことがあります。A4サイズくらいまでの印刷なら十分実用的ですが、大判印刷の場合はAIが「想像」で補完した部分が不自然に見えることもあるので、期待しすぎないほうがいいかもしれません。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">アップスケールAIのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 最大6倍まで解像度拡大可能</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> トリミング後や古い写真の再利用に</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> A4サイズ印刷程度なら十分実用的</li>
          </ul>
        </div>

        <h3 id="panorama">⑧パノラマスティッチング（Panorama Stitching）</h3>
        <p>複数カットの写真をつなげて、ワイドなパノラマ写真を作成する機能です。普通のレンズでは収まりきらない広大な風景も、複数枚に分けて撮影してから合成すればダイナミックな1枚に仕上げられます。</p>
        <p>風景写真や建築写真で「もっと広い範囲を1枚に収めたい」というときに活躍します。解像度も高くなるので、大きく引き伸ばして印刷したい場合にも向いています。撮影時は露出をマニュアルで固定して、同じ条件で撮ることをおすすめします。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">パノラマスティッチングのポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 複数カットをシームレスに合成</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 風景・建築写真に最適</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 高解像度で大判印刷にも対応</li>
          </ul>
        </div>
      </section>

      {/* セクション3: 目的別 */}
      <section id="purpose" className="content-card card-padding article-body">
        <h2>Proツール（拡張機能）があると何が変わる？（目的別）</h2>
        <p>「結局自分には必要なの？」と思っている方へ、目的別に整理しました。</p>
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
        <p>僕自身の体験で言えば、ノイズレスAIとスーパーシャープAIだけでも、パスを購入した価値は十分にありました。「撮り直しが効かない写真を救えた」という経験は、金額以上の価値があったと思っています。</p>
      </section>

      {/* セクション4: Adobe比較 */}
      <section id="compare-adobe" className="content-card card-padding article-body">
        <h2>Adobe Lightroom / Photoshopとの比較</h2>
        <p>「Luminar NeoのProツールを使うくらいなら、Adobeソフトでもいいんじゃないの？」という疑問にお答えします。</p>
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
                <td><strong>約¥25,200</strong>（パス1年のみ）</td>
                <td>約¥42,000（フォトプラン）</td>
              </tr>
              <tr>
                <td><strong>料金体系</strong></td>
                <td>買い切り＋パス（任意）</td>
                <td>サブスクのみ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>結論：</strong>写真管理メインならLightroom、AI編集メインならLuminar Neo。両方使いたい場合は、Luminar NeoをLightroomのプラグインとして併用することも可能です。</p>
        <div className="m-link-box">
          <div className="m-link-box__icon">
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <p className="m-link-box__text">詳しい比較は<a href="/luminar/lightroom-compare/">LightroomとLuminar Neoを徹底比較</a>をご覧ください。</p>
        </div>
      </section>

      {/* セクション5: 価格と購入方法 */}
      <section id="price" className="content-card card-padding article-body">
        <h2>Proツール（拡張機能）の価格と購入方法</h2>
        <h3>Proツールを使うにはパスが必要</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>パスの種類</th>
                <th>価格（税込目安）</th>
                <th>含まれる内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Upgrade Pass</strong></td>
                <td>年額 約¥7,400</td>
                <td>Proツール全8種（永続）＋生成AI＋最新アップデート</td>
              </tr>
              <tr>
                <td><strong>Ecosystem Pass</strong></td>
                <td>年額 約¥10,400</td>
                <td>上記＋モバイルアプリ＋クロスデバイス編集</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>コスパ最強の買い方</h3>
        <p><strong>一度パスを購入すれば、Proツールは永続的に使えます</strong>。「買い切り＋パス1年だけ」が最もコスパの良い選択です。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>購入パターン</th>
                <th>初期費用</th>
                <th>5年間の総コスト</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>買い切りのみ</td>
                <td>約¥17,850</td>
                <td>約¥17,850（Proツールなし）</td>
              </tr>
              <tr style={{ backgroundColor: '#fffde7' }}>
                <td><strong>買い切り＋パス1年だけ</strong></td>
                <td>約¥25,200</td>
                <td><strong>約¥25,200（Proツール永続）</strong></td>
              </tr>
              <tr>
                <td>買い切り＋パス毎年継続</td>
                <td>約¥25,200</td>
                <td>約¥54,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>購入方法</h3>
        <p>Upgrade Pass・Ecosystem Passは<strong>Skylum公式サイト</strong>から購入できます。</p>
        <ol>
          <li>公式サイトにアクセス</li>
          <li>希望するプラン（買い切り＋パス）を選択</li>
          <li>カートに追加して決済</li>
          <li>メールでライセンスキーが届く</li>
        </ol>
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">Tips</span><span className="m-notice__title">すでに買い切りプランを持っている場合</span></div>
          <p>Skylumアカウントにログインし、フッター部分にあるお得意様割引をクリックするとお得なクーポンをゲットできる可能性が高いです。</p>
        </div>
        <h3>セール時期を狙おう</h3>
        <p>ブラックフライデーやサマーセールなど、定期的に大幅な割引が行われます。急ぎでなければセールを待つのが賢い選択です。</p>
        <div className="m-link-box">
          <div className="m-link-box__icon">
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <p className="m-link-box__text">セール時期やクーポン情報は<a href="/luminar/sale-and-coupon-info/">Luminar Neoのセール時期・クーポン情報</a>をご覧ください。</p>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://skylum.evyy.net/mO9BEa" className="m-btn m-btn--primary" target="_blank" rel="noopener">Luminar Neo公式サイトで価格を確認する</a>
        </p>
      </section>

      {/* セクション6: FAQ */}
      <section id="faq" className="content-card card-padding article-body">
        <h2>よくある質問（FAQ）</h2>
        <dl>
          <div className="faq-item">
            <dt className="faq-q">買い切りプランだけでProツールは使えますか？</dt>
            <dd className="faq-a"><strong>いいえ、使えません。</strong>Proツールを使うにはUpgrade PassまたはEcosystem Passの購入が必要です。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">一度パスを買ったらProツールはずっと使えますか？</dt>
            <dd className="faq-a"><strong>はい、永続的に使えます。</strong>翌年パスを更新しなくても、Proツールは消えません。ただし生成AI機能と最新アップデートは使えなくなります。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">無料体験版でProツールは試せますか？</dt>
            <dd className="faq-a">7日間の無料体験版で基本機能は試せます。Proツールは一部制限がある場合があるため、詳細は公式サイトでご確認ください。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">返金保証はありますか？</dt>
            <dd className="faq-a">はい、<strong>30日間の返金保証</strong>があります。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">LightroomやPhotoshopと併用できますか？</dt>
            <dd className="faq-a">はい、プラグインとして使用できます。既存のワークフローを変えずにLuminar NeoのAI機能だけを活用することも可能です。</dd>
          </div>
        </dl>
      </section>

      {/* セクション7: まとめ */}
      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ｜Proツールはどんな人に向いているか？</h2>
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
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>買い切りプランだけでは使えない</strong>→パスが必要</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>一度パスを購入すればProツールは永続</strong></li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>コスパ最強は「買い切り＋パス1年だけ」</strong>（約¥25,200）</li>
          </ul>
        </div>
      </section>
    </LuminarArticleLayout>
  )
}
