import type { Metadata } from 'next'
import Image from 'next/image'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import LuminarCtaMini from '@/components/luminar/LuminarCtaMini'
import type { TocItem } from '@/lib/luminar/toc'

export const dynamic = 'force-static'

const META = {
  slug: 'lightroom-compare',
  title: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
  description: '写真の現像ソフト選びで、LightroomとLuminar Neoのどちらにするか迷っていませんか？どちらも人気のRAW現像ソフトですが、料金体系も操作感も設計思想がまったく違います。',
  publishedAt: '2026-01-18T10:36:17',
  updatedAt: '2026-01-23T10:50:45',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom.jpg',
    alt: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'conclusion', level: 2, text: '結論：LightroomとLuminar Neoはこう使い分ける' },
  { id: 'price', level: 2, text: '料金プランの違いを比較（買い切り vs サブスク）' },
  { id: 'features', level: 2, text: '機能の違いを比較｜現像・AI・編集自由度' },
  { id: 'genre', level: 2, text: '写真ジャンル別の向き不向き' },
  { id: 'migration', level: 2, text: 'LightroomからLuminar Neoに乗り換えるときの注意点' },
  { id: 'faq', level: 2, text: 'よくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ：LightroomとLuminar Neo どちらを選ぶべきか' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>写真の現像ソフト選びで、LightroomとLuminar Neoのどちらにするか迷っていませんか？</p>
    <p>どちらも人気のRAW現像ソフトですが、料金体系も操作感も設計思想がまったく違います。ここで厄介なのは、料金だけを見ると判断できそうで、実は<span className="m-mark-yellow">使い方次第で&quot;後悔の方向が真逆になる&quot;</span>のがこの2つのソフトだということ。</p>
    <p>Lightroomを選んで「毎月払い続けるのがしんどい」と感じる人もいれば、Luminar Neoを選んで「やっぱりカタログ管理が欲しかった」と戻る人もいます。</p>
    <p>この記事では、両ソフトの料金・機能・使いやすさを具体的に比較して、「自分にはどちらが向いているか」を判断できる材料をお伝えしますね。</p>
    <div className="m-abstract">
      <span className="m-abstract__label">この記事の結論</span>
      <ul>
        <li><strong>Lightroom</strong>：大量の写真をカタログ管理したい人、パラメータを細かく追い込みたい人向け</li>
        <li><strong>Luminar Neo</strong>：AI機能で現像時間を短縮したい人、買い切りでコストを抑えたい人向け</li>
        <li><strong>コスト差</strong>：5年使うとLightroomは約9〜14万円、Luminar Neoは約1.6〜2.3万円</li>
      </ul>
    </div>
    <LuminarCtaMini />
  </>
)

export default async function Page() {
  return (
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="conclusion" className="content-card card-padding article-body">
        <h2>結論：LightroomとLuminar Neoはこう使い分ける</h2>
        <p>先に結論をお伝えすると、<strong>LightroomとLuminar Neoは「どちらが優れているか」ではなく、「何を重視するか」で選ぶべきソフト</strong>です。</p>
        <p>両者がそれぞれどんな人に向いているかを簡単にまとめていきます。</p>
        <h3>Lightroomが向いている人</h3>
        <div className="definition">
          <dl className="definition-body">
            <dt>大量の写真を一元管理したい人</dt>
            <dd>Lightroomのカタログ機能は、数万枚、数十万枚の写真をキーワードや撮影日、場所で整理して瞬時に検索できます。撮影を仕事にしている方や、長年の写真資産を管理したい方には大きな価値があります。</dd>
            <dt>すべてのパラメータを自分で調整したい人</dt>
            <dd>露光量、トーンカーブ、HSL、カラーグレーディング……Lightroomでは写真のあらゆる要素を数値で細かくコントロールできます。「この部分のハイライトをあと5だけ下げたい」といった微調整を繰り返して、自分だけの仕上がりを追求したい方に最適です。</dd>
            <dt>Photoshopとの連携が前提の人</dt>
            <dd>Adobe Creative Cloudのエコシステムの中で、LightroomからPhotoshopにシームレスに移行してレイヤー編集やレタッチを行うワークフローが確立している方は、その連携の良さを手放しにくいでしょう。</dd>
          </dl>
        </div>
        <h3>Luminar Neoが向いている人</h3>
        <div className="definition">
          <dl className="definition-body">
            <dt>現像にかける時間を短くしたい人</dt>
            <dd>Luminar NeoのAI機能は、写真を分析して最適な補正を提案してくれます。空の置き換え、人物の肌補正、構図の調整など、Lightroomなら複数のステップが必要な作業がワンクリックで完了します。</dd>
            <dt>直感的に「こうしたい」を実現したい人</dt>
            <dd>Luminar Neoは「空をドラマチックにしたい」「肌をきれいに見せたい」といった仕上がりのイメージから操作を選べます。数値を追い込むのではなく、結果から逆算して調整できるので思考のプロセスがシンプルになります。</dd>
            <dt>支払いを自分でコントロールしたい人</dt>
            <dd>Luminar Neoは買い切りライセンスが基本です。購入後は追加の支払いなしでソフト自体を永続的に使えます。「使わない月は払いたくない」「いつでも支払いを止められる安心感がほしい」という方にはこの料金体系が合っています。</dd>
          </dl>
        </div>
        <p style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a href="https://skylum.evyy.net/mO9BEa" className="m-btn m-btn--primary" target="_blank" rel="noopener">Luminar Neo公式サイトで詳細を確認する</a>
        </p>
      </section>

      <section id="price" className="content-card card-padding article-body">
        <h2>料金プランの違いを比較（買い切り vs サブスク）</h2>
        <p>写真現像ソフトを選ぶとき、月額料金だけで比較するのは判断を誤る原因になります。大事なのは、<span className="m-mark-yellow">3年、5年と使い続けたときにいくら払うことになるか</span>という総支払額の視点です。</p>
        <h3>Lightroomの料金体系</h3>
        <p>Lightroomを使うには、Adobe Creative Cloudのサブスクリプション契約が必要です。</p>
        <p>2025年1月15日より、これまで人気だった「フォトプラン（20GB）月額1,180円」は新規受付を終了しました。現在、新規で選べる主なプランは以下の2つです。</p>
        <div className="definition">
          <dl className="definition-body">
            <dt>フォトプラン（1TB）：月額2,380円</dt>
            <dd>Lightroom Classic、Lightroom、Photoshopがセットになったプラン。1TBのクラウドストレージ付き。</dd>
            <dt>Lightroomプラン（1TB）：月額1,480円</dt>
            <dd>Lightroom ClassicとLightroomのみ。Photoshopが不要ならこちらがお得。</dd>
          </dl>
        </div>
        <p>この料金体系の特徴は、<strong>使用頻度に関係なく毎月支払いが発生する</strong>こと。また、解約するとソフトが起動できなくなり、カタログにもアクセスできなくなります（RAWファイル自体は手元に残ります）。</p>
        <h3>Luminar Neoの料金体系</h3>
        <p>Luminar Neoは<strong>買い切りライセンスが基本</strong>です。一度購入すれば、追加料金なしでソフトを永続的に使用できます。</p>
        <p><strong>※Proツール（Noiseless AI、HDR Mergeなど8種）は買い切りプランには含まれていません。</strong>使いたい場合はUpgrade PassまたはEcosystem Passの購入が必要です。ただし、一度パスを購入すればProツールは永続的に使えます（翌年更新しなくてもOK）。</p>
        <div className="m-table-wrap l-bottom-medium">
          <table className="m-table">
            <thead>
              <tr>
                <th>プラン</th>
                <th>価格</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>永久ライセンス<br />デスクトップ版</strong></td>
                <td>約¥15,980〜<br /><small>（セール時¥12,980〜）</small></td>
                <td>PC2台で使用可。生成AIツールは購入から1年間利用可能。</td>
              </tr>
              <tr>
                <td><strong>クロスデバイス<br />永続ライセンス</strong></td>
                <td>約¥19,980〜</td>
                <td>PC版＋スマホアプリ（Luminar Mobile）が使用可。</td>
              </tr>
              <tr>
                <td><strong>Upgrade Pass</strong></td>
                <td>約¥7,400/年</td>
                <td>Proツール8種が使用可能に。<span className="text-true">一度購入すれば永続利用可</span></td>
              </tr>
              <tr>
                <td><strong>Ecosystem Pass</strong></td>
                <td>約¥10,400/年</td>
                <td>Proツール＋最新アップデート＋生成AI延長。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Luminar Neoの機能は3種類に分かれている</h4>
        <div className="m-table-wrap l-bottom-large">
          <table className="m-table">
            <thead>
              <tr>
                <th>機能の種類</th>
                <th>含まれる機能</th>
                <th>利用条件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>基本機能</strong></td>
                <td>Sky AI（空の置き換え）、補正AI、電線除去、スキンAI、フェイスAI、リライトAI、基本的な色調補正・露出調整など</td>
                <td><span className="text-true">買い切りで永続利用可</span></td>
              </tr>
              <tr>
                <td><strong>Proツール（8種）</strong></td>
                <td>Noiseless AI、Supersharp AI、Upscale AI、HDR Merge、Focus Stacking、Background Removal AI、Magic Light AI、Panorama Stitching</td>
                <td><span className="text-warn">パス購入が必要</span><br />※一度購入すれば永続利用可</td>
              </tr>
              <tr>
                <td><strong>生成AI機能</strong></td>
                <td>GenErase（生成AI削除）、GenSwap（生成AI置換）、GenExpand（生成AI拡張）</td>
                <td><span className="text-false">期限あり</span><br />買い切りのみ：1年間<br />パス購入時：2026年12月末まで</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>2年目以降については、以下の選択肢があります。</p>
        <div className="definition">
          <dl className="definition-body">
            <dt>選択肢1：そのまま使い続ける（追加費用なし）</dt>
            <dd>生成AIツールの使用期限は切れますが、購入時点の基本機能はそのまま永続的に使えます。Proツールを1年目に購入していれば、それも永続的に使えます。</dd>
            <dt>選択肢2：パスを更新する</dt>
            <dd>生成AI機能を引き続き使いたい場合や、最新アップデートを受け取りたい場合は、Upgrade Pass（約¥7,400/年）またはEcosystem Pass（約¥10,400/年）を購入します。</dd>
          </dl>
        </div>
        <p>※Luminar Neoの価格はセールや為替レートにより変動します。最新価格は公式サイトでご確認ください。</p>
        <h3>5年間使い続けた場合の総支払額を比較</h3>
        <p>長期で見ると、買い切りのLuminar Neoのコスト優位性は明らかです。<strong>Proツールも使いたい場合は「買い切り＋パス1年だけ」が最もコスパの良い選択</strong>で、約¥23,380の初期投資でProツールが永続的に使えるようになります。</p>
        <p>「払い続けなければ使えなくなる」という構造と「払わなくても使い続けられる」という構造の違いは、金額以上に心理的な安心感に影響するのではないでしょうか。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>Lightroom<br />フォトプラン(1TB)</th>
                <th>Lightroom<br />単体プラン(1TB)</th>
                <th>Luminar Neo<br />（買い切りのみ）</th>
                <th>Luminar Neo<br />（買い切り＋パス1年）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>約¥28,560</td>
                <td>約¥17,760</td>
                <td>約¥15,980</td>
                <td>約¥23,380</td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>約¥85,680</td>
                <td>約¥53,280</td>
                <td>約¥15,980</td>
                <td>約¥23,380</td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>約¥142,800</td>
                <td>約¥88,800</td>
                <td>約¥15,980</td>
                <td>約¥23,380</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※Lightroomフォトプラン(1TB)：月額2,380円×12ヶ月で計算<br />
        ※Lightroom単体プラン(1TB)：月額1,480円×12ヶ月で計算<br />
        ※Luminar Neo「買い切り＋パス1年」：Proツールが永続利用可能になる最もコスパの良いパターン</p>
      </section>

      <section id="features" className="content-card card-padding article-body">
        <h2>機能の違いを比較｜現像・AI・編集自由度</h2>
        <p>LightroomとLuminar Neoはできることの範囲に大きな差があるわけではありません。どちらもRAW現像、色補正、部分調整、書き出しといった基本機能を備えています。違いは、<strong>それらの機能にどうアプローチするか</strong>という操作思想にあります。</p>
        <h3>基本的な現像機能の違い</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th></th>
                <th>Lightroom</th>
                <th>Luminar Neo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>操作画面</strong></td>
                <td>露光量、トーンカーブ、HSLなど多数のスライダーが並ぶ</td>
                <td>「エッセンシャル」「クリエイティブ」などカテゴリ別にツールが並ぶ</td>
              </tr>
              <tr>
                <td><strong>調整方法</strong></td>
                <td>各パラメータを理解して自分で組み合わせる</td>
                <td>「空を変えたい」→スカイAI、のように目的から選べる</td>
              </tr>
              <tr>
                <td><strong>アプローチ</strong></td>
                <td>「どう直すか」を自分で考える</td>
                <td>「どうしたいか」を選ぶ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>AI補正機能の違い</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th></th>
                <th>Lightroom</th>
                <th>Luminar Neo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AIの役割</strong></td>
                <td>作業の効率化（マスク自動作成など）</td>
                <td>仕上げまで担当</td>
              </tr>
              <tr>
                <td><strong>主な機能</strong></td>
                <td>「被写体を選択」「空を選択」でマスク自動作成。調整は手動</td>
                <td>スカイAI、フェイスAI、スキンAI、リライトAIなど専用ツール多数</td>
              </tr>
              <tr>
                <td><strong>空の処理</strong></td>
                <td>マスク作成のみ。置き換えは不可</td>
                <td>ワンクリックで置き換え（地上の色調も自動調整）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>例：逆光の人物を明るくしたい場合</strong></p>
        <ul>
          <li><strong>Lightroom</strong>：マスク作成→被写体選択→露光量調整→境界ぼかし（4ステップ）</li>
          <li><strong>Luminar Neo</strong>：リライトAI ON→スライダー調整（2ステップ）</li>
        </ul>
        <div className="m-notice m-notice--tips">
          <div className="m-notice__head"><span className="m-notice__badge">TIPS</span><span className="m-notice__title">AIの限界も知っておこう</span></div>
          <p>複雑な構図での空の境界認識が甘くなることや、AI補正が強すぎて不自然になることも。8割以上のケースでは十分な結果が出ますが、万能ではありません。</p>
        </div>
        <h3>合成・特殊表現の違い</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th></th>
                <th>Lightroom</th>
                <th>Luminar Neo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>設計思想</strong></td>
                <td>撮影された写真をベースに調整</td>
                <td>合成・特殊効果も単体で完結</td>
              </tr>
              <tr>
                <td><strong>空の合成</strong></td>
                <td>不可（Photoshopに受け渡し）</td>
                <td>オーロラ、天の川、月などを追加可能</td>
              </tr>
              <tr>
                <td><strong>光の演出</strong></td>
                <td>不可</td>
                <td>「太陽光線」機能で木漏れ日や光芒を追加</td>
              </tr>
              <tr>
                <td><strong>色の追い込み</strong></td>
                <td>トーンカーブ、HSL、カラーグレーディングの自由度が高い</td>
                <td>基本的な調整は可能だが自由度はLightroomに劣る</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="genre" className="content-card card-padding article-body">
        <h2>写真ジャンル別の向き不向き</h2>
        <p>撮影するジャンルによって、どちらのソフトが合理的かは変わってきます。代表的なジャンルごとに整理しますね。</p>
        <h3>風景・夜景</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/dust-after-1.jpeg" alt="風景写真の作例" className="m-media-img" width={880} height={495} style={{ width: '100%', height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Luminar Neoに優位性あり</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>スカイAIによる空の置き換えや強調は、風景写真の印象を大きく左右します。曇り空で撮影した写真を青空やドラマチックな夕焼けに変更できるのは、撮影時の天候に左右されないという意味で強力な武器です。エンハンスAIによる風景全体の立体感強調も、ワンクリックで「おっ」という仕上がりに。</p>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>夜景においてはノイズ除去の性能が重要です。より高精度なノイズ除去が必要な場合は、<strong>Proツール「Noiseless AI」</strong>（パス購入が必要）がおすすめ。ディテールを保持しながらノイズを低減する処理に定評があります。</p>
          </div>
        </div>
        <h3>ポートレート</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/portrait-after.jpg" alt="ポートレート写真の作例" className="m-media-img" width={880} height={495} style={{ width: '100%', height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Luminar Neoが効率的</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>フェイスAI、スキンAI、ボディAIといった人物専用ツールは、顔の各パーツを認識して個別に調整できます。目の明るさ、肌のなめらかさ、顔の輪郭など、ポートレートで求められる補正がスライダーで完結します。ただし、人物の肌を細部まで追い込むレタッチ（毛穴単位の処理、複雑なシミの除去など）が必要な場合はPhotoshopの領域です。撮って出しに近い自然なポートレートを効率よく仕上げたいならLuminar Neoが向いています。</p>
          </div>
        </div>
        <h3>商品・商用写真</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/MH40.jpg" alt="商品写真の作例" className="m-media-img" width={880} height={495} style={{ width: '100%', height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Lightroomの堅実さが活きる</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>商品写真は色の正確性と再現性が求められます。同じ商品を複数回撮影したとき、仕上がりの色味が揃っていなければなりません。Lightroomのカラーマネジメント機能やプロファイル適用はこの用途に最適化されています。また、大量の商品写真を一括処理する際、Lightroomのカタログ機能と同期機能が威力を発揮します。</p>
          </div>
        </div>
      </section>

      <section id="migration" className="content-card card-padding article-body">
        <h2>LightroomからLuminar Neoに乗り換えるときの注意点</h2>
        <p>Lightroomを使っていて、Luminar Neoへの移行を検討している方に、現実的な注意点をお伝えしますね。</p>
        <p>まず、<strong>カタログの完全移行はできません</strong>。Lightroomのカタログ（写真の管理情報、編集履歴、キーワードなど）をLuminar Neoにそのまま移行する方法はありません。Luminar Neoには、Lightroomのようなカタログ機能自体が存在しないためです。写真のRAWファイルは当然読み込めますが、Lightroomで行った編集内容を引き継ぐことはできません。</p>
        <p>また、<strong>編集思想の違いに慣れる時間が必要</strong>です。「トーンカーブを調整したい」と思っても、Luminar Neoでは同じ場所に同じツールがあるわけではありません。代わりに別のツールで目的を達成できますが、慣れるまでは「あの機能はどこ？」と探すことになるでしょう。</p>
        <p>現実的な解は<strong>「併用から段階的移行」</strong>です。いきなり完全移行するのではなく、新規の撮影分はLuminar Neoで現像し、過去のLightroomカタログはそのまま参照用に残しておく。慣れてきたら徐々にLightroomを使う頻度を減らしていく。「いつでもLightroomに戻れる」状態を保ちながら移行を進めることで、リスクなく自分に合うワークフローを見つけられます。</p>
      </section>

      <section id="faq" className="content-card card-padding article-body">
        <h2>よくある質問（FAQ）</h2>
        <dl>
          <div className="faq-item">
            <dt className="faq-q">Lightroomの完全な代わりになる？</dt>
            <dd className="faq-a">カタログ管理とPhotoshop連携は代替できません。RAW現像と写真の仕上げという点では十分に対応できるので、管理機能が不要で現像を効率化したい方には実質的な代替になり得ます。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">プロでも使える？</dt>
            <dd className="faq-a">使えます。風景写真家やポートレート写真家でLuminar Neoをメインツールにしている方は多数います。ただし大量納品の商業撮影では、Lightroomのカタログ管理の方が効率的な場合もあります。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">RAW現像の品質は？</dt>
            <dd className="faq-a">基本品質に大きな差はありません。主要カメラメーカーのRAWに対応し、16bit処理にも対応しています。仕上がりの差は、どのツールを使ってどう仕上げるかという部分で出ます。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">Lightroomのフォトプラン20GBはもう契約できない？</dt>
            <dd className="faq-a">2025年1月15日以降、新規受付は終了しました。既存ユーザーは継続利用可能ですが、月額1,780円に値上げされています。新規の方はフォトプラン（1TB）月額2,380円、またはLightroomプラン（1TB）月額1,480円から選ぶことになります。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">Luminar Neoの買い切りプランでProツールは使える？</dt>
            <dd className="faq-a"><strong>いいえ、買い切りプランだけではProツールは使えません。</strong>Proツール（Noiseless AI、HDR Mergeなど8種）を使うには、Upgrade PassまたはEcosystem Passの購入が必要です。ただし、一度パスを購入すればProツールは永続的に使えます。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">Luminar Neoで1年で使えなくなる機能はある？</dt>
            <dd className="faq-a">基本機能（Sky AI、補正AI、電線除去など）は永久に使えます。1年で期限が切れるのは「GenErase」「GenSwap」「GenExpand」という3つの<strong>生成AI機能のみ</strong>です。なお、<strong>Proツールは一度パスを購入すれば永続的に使えます</strong>。</dd>
          </div>
        </dl>
      </section>

      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ：LightroomとLuminar Neo どちらを選ぶべきか</h2>
        <p>LightroomとLuminar Neoは、どちらも優れた写真現像ソフトです。ただし設計思想が異なるため、合う人・合わない人がはっきり分かれます。</p>
        <p>最終的な判断軸は、<span className="m-mark-yellow"><strong>「現像に時間をかけたいか、写真に時間を使いたいか」</strong></span>です。</p>
        <p>パラメータを追い込んで自分だけの仕上がりを探求するプロセス自体を楽しみたいならLightroom。撮影や作品作りに時間を使いたいから、現像は効率よく終わらせたいならLuminar Neo。どちらの時間の使い方が自分に合っているかを考えれば、答えは見えてくるはずです。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">まとめ</span><br />
            <span className="m-point-box__title">コスト比較のポイント</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Lightroom</strong>：月額1,480円〜2,380円のサブスク。5年で約9〜14万円</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Neo（買い切りのみ）</strong>：約15,980円で永続利用。基本機能のみ</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Neo（買い切り＋パス1年）</strong>：約23,380円でProツールも永続利用可。最もコスパ良好</li>
          </ul>
        </div>
      </section>

    </LuminarArticleLayout>
  )
}
