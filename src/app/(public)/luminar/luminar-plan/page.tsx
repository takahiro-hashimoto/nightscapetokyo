import type { Metadata } from 'next'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import LuminarCtaMini from '@/components/luminar/LuminarCtaMini'
import type { TocItem } from '@/lib/luminar/toc'

export const dynamic = 'force-static'

const META = {
  slug: 'luminar-plan',
  title: 'Luminar Neoの後悔しない選び方｜サブスク廃止後の買い切り版ライセンスを賢く購入【2026年】',
  description: '突然ですが、Luminar Neoの料金体系、正直ちょっとわかりにくいですよね。買い切りって書いてあるのに、なんか追加料金がかかるの？アップグレードパス？エコシステムパス？何が違うの？',
  publishedAt: '2026-01-18T10:38:20',
  updatedAt: '2026-01-25T12:03:52',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan.jpg',
    alt: 'Luminar Neoの後悔しない選び方｜サブスク廃止後の買い切り版ライセンスを賢く購入【2026年】',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'no-subscription', level: 2, text: '【注意】サブスクプランは廃止されています' },
  { id: 'two-steps', level: 2, text: '購入は2ステップで考えよう' },
  { id: 'features-overview', level: 2, text: '【前提知識】機能ごとに利用条件が違う' },
  { id: 'step1', level: 2, text: 'ステップ1：買い切りプランを選ぶ（3種類）' },
  { id: 'step2', level: 2, text: 'ステップ2：パスを追加するか決める' },
  { id: 'after-year2', level: 2, text: '2年目以降の選択肢｜パスを継続するか、しないか' },
  { id: 'best-value', level: 2, text: 'コスパ最強は「買い切り＋パス1年だけ」' },
  { id: 'simulations', level: 2, text: 'その他のシミュレーション' },
  { id: 'faq', level: 2, text: 'よくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ｜あなたに最適なプランは？' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>突然ですが、Luminar Neoの料金体系、正直ちょっとわかりにくいですよね。</p>
    <ul>
      <li>買い切りって書いてあるのに、なんか追加料金がかかるの？</li>
      <li>アップグレードパス？エコシステムパス？何が違うの？</li>
      <li>Proツールって何？買い切りに含まれてるの？</li>
      <li>サブスクってもうないの？</li>
    </ul>
    <p>購入を検討している方の中にはこんな疑問を持っている方も多いと思います。</p>
    <p>そこで<strong>公式のカスタマーサポートにも質問しながら</strong>、2026年最新の料金体系を整理してみたので、本記事で解説します。</p>
    <div className="m-point-box">
      <div className="m-point-box__bg">!</div>
      <div className="m-point-box__header">
        <span className="m-point-box__label">Point</span><br />
        <span className="m-point-box__title">この記事のまとめ</span>
      </div>
      <ul className="m-point-box__list">
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>サブスクプランは廃止</strong>：現在は買い切り＋パス（任意）のみ</li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>購入は2ステップ</strong>：①買い切りプランを選ぶ → ②パスを追加するか決める</li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Proツールは買い切りに含まれない</strong>→パスが必要</li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>パスを1回買えばProツールは永続</strong></li>
        <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>コスパ最強は「買い切り＋パス1年だけ」</strong>（約¥25,200で永続）</li>
      </ul>
    </div>
    <LuminarCtaMini />
  </>
)

export default async function Page() {
  return (
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="no-subscription" className="content-card card-padding article-body">
        <h2>【注意】サブスクプランは廃止されています</h2>
        <p>最初にお伝えしておくと、<strong>Luminar Neoのサブスクリプションプランは現在販売されていません</strong>。</p>
        <p>以前は月額・年額のサブスクプランも存在していましたが、2026年現在は<strong>販売終了</strong>しています。検索すると「買い切り vs サブスク」という比較記事がまだ残っていますが、それらは過去の情報です。</p>
        <p>現在の選択肢は以下のみです。</p>
        <ul className="m-list-ul">
          <li><span className="m-list-ul__icon">•</span> <strong>買い切りプラン</strong>（3種類）</li>
          <li><span className="m-list-ul__icon">•</span> <strong>＋パス</strong>（任意で追加）</li>
        </ul>
        <p>では、具体的にどう選べばいいのか見ていきましょう。</p>
      </section>

      <section id="two-steps" className="content-card card-padding article-body">
        <h2>購入は2ステップで考えよう</h2>
        <p><img decoding="async" src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/plan-image.jpg" alt="Luminar Neoの料金体系を表したイメージ" /></p>
        <p>Luminar Neoの購入は、たった2ステップで考えればOKです。</p>
        <ol>
          <li><strong>土台となる「買い切りプラン」を選ぶ</strong>：PCだけで使うか、スマホでも使うかで選択</li>
          <li><strong>必要なら「パス」を追加する</strong>：Proツール（ノイズ除去、HDR合成など）を使いたいなら追加</li>
        </ol>
        <p>この2つを決めるだけ。シンプルですよね。</p>
        <h3>【早見表】結局いくら？何が使える？</h3>
        <p>詳細はこの後解説しますが、<strong>先に結論をお見せします</strong>。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>パターン</th>
                <th>初期費用（税込目安）</th>
                <th>使える機能</th>
                <th>こんな人向け</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>買い切りのみ</td>
                <td>約¥18,000</td>
                <td>基本機能＋生成AI（1年）</td>
                <td>とにかく安く始めたい</td>
              </tr>
              <tr style={{ backgroundColor: '#fffde7' }}>
                <td><strong>＋パス1年だけ</strong> <span className="m-badge m-badge--amber m-badge--round">コスパ最強</span></td>
                <td><strong>約¥25,200</strong></td>
                <td>基本＋<strong>Proツール永続</strong>＋生成AI</td>
                <td>Proツールを長く使いたい</td>
              </tr>
              <tr>
                <td>＋パス毎年継続</td>
                <td>約¥25,200〜/年</td>
                <td>全機能フル＋最新アップデート</td>
                <td>常に最新がいい</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><span className="m-mark-yellow">多くの方には「買い切り＋パス1年だけ」がおすすめ</span>です。一度パスを購入すれば<strong>Proツールは永続的に使える</strong>ので、長期的に見ると最もコスパが良い選択になります。</p>
        <p>では、詳しく見ていきましょう。</p>
      </section>

      <section id="features-overview" className="content-card card-padding article-body">
        <h2>【前提知識】機能ごとに利用条件が違う</h2>
        <p>プランを選ぶ前に、Luminar Neoの機能が<strong>3つのカテゴリに分かれている</strong>ことを知っておきましょう。</p>
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
                <td><strong>Proツール</strong></td>
                <td>Noiseless AI、HDR Mergeなど8種</td>
                <td>パス購入で<strong>永続</strong></td>
              </tr>
              <tr>
                <td><strong>生成AI機能</strong></td>
                <td>GenErase、GenSwap、GenExpand</td>
                <td><strong>期間限定</strong>（1年〜）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>ポイントは<strong>「Proツールは買い切りに含まれない」</strong>という点。ノイズ除去やHDR合成を使いたいなら、ステップ2で解説する「パス」が必要になります。</p>
        <p>それでは、ステップ1から見ていきましょう。</p>
      </section>

      <section id="step1" className="content-card card-padding article-body">
        <h2>ステップ1：買い切りプランを選ぶ（3種類）</h2>
        <p><img decoding="async" src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-neo-plan2.jpg" alt="3つの買い切りプラン比較表" /></p>
        <p>まずは土台となる「買い切りプラン」を選びます。一度購入すれば<span className="m-mark-yellow">ずっと使い続けられる</span>ライセンス形式です。</p>
        <p>現在、買い切りプランは以下の3種類が用意されています。</p>
        <p>スマホで編集する予定がなければ、<strong>デスクトップライセンス（約¥18,000）</strong>で十分です。Proツールを使いたい場合は、次のステップ2でパスを追加しましょう。</p>
        <h3>デスクトップライセンス（PCのみ・2台）</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>$119（税込約¥18,000 ※為替により変動）</dd>
            <dt>特徴</dt>
            <dd>
              <ul>
                <li>最もシンプルでお手頃なプラン</li>
                <li><strong>2台のPC</strong>（Windows・Mac問わず）で使用可能</li>
                <li>基本機能＋生成AI機能（1年間）が使える</li>
              </ul>
            </dd>
            <dt>こんな人に</dt>
            <dd>PCでの編集がメインで、スマホでは編集しない方。<strong>多くの方はこれでOK。</strong></dd>
          </dl>
        </div>
        <h3>クロスデバイスライセンス（PC＋スマホ）</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>$159（税込約¥24,000 ※為替により変動）</dd>
            <dt>特徴</dt>
            <dd>
              <ul>
                <li>デスクトップ版（2台）＋モバイルアプリ（3台）</li>
                <li>iOS、Android、ChromeOSに対応</li>
                <li>PC・スマホ間で編集データを同期できる</li>
                <li>Spaces（Webギャラリー機能）へのアクセス</li>
              </ul>
            </dd>
            <dt>こんな人に</dt>
            <dd>外出先でスマホから編集を始めて、帰宅後にPCで仕上げたい方。</dd>
          </dl>
        </div>
        <h3>Maxライセンス（PC＋スマホ＋プリセット）</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>$179（税込約¥27,000 ※為替により変動）</dd>
            <dt>特徴</dt>
            <dd>
              <ul>
                <li>クロスデバイスライセンスの全内容</li>
                <li>100個以上のクリエイティブアドオン（プリセット・テンプレート）</li>
                <li>公式ビデオコース</li>
                <li>クリエイティブライブラリへのアクセス（1年間無料）</li>
              </ul>
            </dd>
            <dt>こんな人に</dt>
            <dd>プリセットを使ってサクッと編集したい方。学習コンテンツも欲しい方。</dd>
          </dl>
        </div>
      </section>

      <section id="step2" className="content-card card-padding article-body">
        <h2>ステップ2：パスを追加するか決める</h2>
        <p>ステップ1で土台を選んだら、次は<strong>「パス」を追加するかどうか</strong>を決めます。</p>
        <p>パスを追加すると、以下が手に入ります。</p>
        <ul className="m-list-ul">
          <li><span className="m-list-ul__icon">•</span> <strong>Proツール全8種の永続利用権</strong></li>
          <li><span className="m-list-ul__icon">•</span> 生成AI機能の期間延長</li>
          <li><span className="m-list-ul__icon">•</span> 最新機能へのアップデート</li>
        </ul>
        <h3>Proツールとは？（全8種）</h3>
        <p>Proツールは、より高度な編集を可能にする機能群です。痒いところに手の届く優秀な機能が揃っている印象です。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>Proツール名</th>
                <th>できること</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Noiseless AI</strong></td>
                <td>高感度ノイズをディテールを保ちながら除去</td>
              </tr>
              <tr>
                <td><strong>HDR Merge</strong></td>
                <td>露出違いの写真を合成して白飛び・黒潰れを抑える</td>
              </tr>
              <tr>
                <td><strong>Supersharp AI</strong></td>
                <td>手ブレやピンボケをAIが補正してシャープに</td>
              </tr>
              <tr>
                <td><strong>Upscale AI</strong></td>
                <td>解像度を最大6倍まで拡大しても画質を維持</td>
              </tr>
              <tr>
                <td><strong>Focus Stacking</strong></td>
                <td>ピント位置の異なる複数枚を合成して全体にピントを</td>
              </tr>
              <tr>
                <td><strong>Background Removal AI</strong></td>
                <td>人物やオブジェクトの背景を自動で除去</td>
              </tr>
              <tr>
                <td><strong>Magic Light AI</strong></td>
                <td>光源に光芒（光の筋）を追加してドラマチックに</td>
              </tr>
              <tr>
                <td><strong>Panorama Stitching</strong></td>
                <td>複数枚の写真を繋げてパノラマ写真を作成</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>アップグレードパス（PCのみ）</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>年額 $49（税込約¥7,400 ※為替により変動）</dd>
            <dt>含まれる内容</dt>
            <dd>
              <ul>
                <li><strong>Proツール全8種の永続利用権</strong></li>
                <li>生成AI機能の延長（2026年12月31日まで）</li>
                <li>最新機能へのアップデート</li>
              </ul>
            </dd>
            <dt>こんな人向け</dt>
            <dd>Proツールを使いたいけど、スマホでは編集しない方。<strong>多くの方はこちらでOK。</strong></dd>
          </dl>
        </div>
        <h3>エコシステムパス（PC＋スマホ）</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>価格</dt>
            <dd>年額 $69（税込約¥10,400 ※為替により変動）</dd>
            <dt>含まれる内容</dt>
            <dd>
              <ul>
                <li>アップグレードパスの全内容（Proツール永続利用含む）</li>
                <li>モバイルアプリのライセンス</li>
                <li>クロスデバイス編集</li>
                <li>Spaces（Webギャラリー機能）</li>
              </ul>
            </dd>
            <dt>こんな人向け</dt>
            <dd>Proツール＋外出先でもスマホ・タブレットから編集したい方。</dd>
          </dl>
        </div>
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">重要</span><span className="m-notice__title">一度パスを買えばProツールは永続的に使える</span></div>
          <p>公式カスタマーサポートに確認したところ、<strong>一度パスを購入すると、Proツールは永続的に使えるようになります</strong>。翌年パスを更新しなくても、Proツールは消えません。使えなくなるのは生成AI機能と最新アップデートだけです。</p>
        </div>
      </section>

      <section id="after-year2" className="content-card card-padding article-body">
        <h2>2年目以降の選択肢｜パスを継続するか、しないか</h2>
        <p>買い切りプラン＋パスを購入して1年が経過すると、ある選択を迫られます。</p>
        <p><strong>「パスを継続するか、しないか」</strong></p>
        <h3>パスを継続しないとどうなる？</h3>
        <div className="l-grid-2 l-bottom-large">
          <div className="m-pc-box m-pc-box--pros">
            <div className="m-pc-head"><i className="fa-solid fa-circle-check"></i> 引き続き使えるもの</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> 基本機能（色調補正、RAW現像など）</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> <strong>Proツール（永続）</strong></div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> すでにインストール済みのバージョン</div>
            </div>
          </div>
          <div className="m-pc-box m-pc-box--cons">
            <div className="m-pc-head"><i className="fa-solid fa-circle-xmark"></i> 使えなくなるもの</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> 生成AI機能（GenErase等）</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 最新バージョンへのアップデート</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 今後追加される新機能</div>
            </div>
          </div>
        </div>
        <p><span className="m-mark-yellow">Proツールは永続的に使い続けられます</span>。生成AI機能と最新アップデートが使えなくなるだけです。</p>
        <h3>パスを一度も買わないとどうなる？</h3>
        <div className="l-grid-2 l-bottom-large">
          <div className="m-pc-box m-pc-box--pros">
            <div className="m-pc-head"><i className="fa-solid fa-circle-check"></i> 使えるもの</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> 基本機能（色調補正、RAW現像など）</div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 生成AI機能（購入から1年間のみ）</div>
            </div>
          </div>
          <div className="m-pc-box m-pc-box--cons">
            <div className="m-pc-head"><i className="fa-solid fa-circle-xmark"></i> 使えないもの</div>
            <div className="m-pc-body">
              <div className="m-pc-item"><span className="m-pc-dot"></span> <strong>Proツール全般</strong></div>
              <div className="m-pc-item"><span className="m-pc-dot"></span> 最新バージョンへのアップデート</div>
            </div>
          </div>
        </div>
        <p>「基本的なRAW現像ができれば十分」という方は、買い切りプランだけで運用するのも選択肢です。</p>
        <h3>組み合わせ別の比較表</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>機能</th>
                <th>買い切りのみ</th>
                <th>＋パス1回</th>
                <th>＋パス毎年</th>
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
                <td><span className="text-false">×</span></td>
                <td><span className="text-true"><strong>◯ 永続</strong></span></td>
                <td><span className="text-true">◯ 永続</span></td>
              </tr>
              <tr>
                <td>生成AI機能</td>
                <td>1年間のみ</td>
                <td>購入年のみ</td>
                <td><span className="text-true">◯ 継続</span></td>
              </tr>
              <tr>
                <td>最新アップデート</td>
                <td><span className="text-false">×</span></td>
                <td>購入年のみ</td>
                <td><span className="text-true">◯ 継続</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>結局どっちを選べばいい？</h3>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            <dt>買い切りのみ</dt>
            <dd>
              <ul>
                <li>基本的なRAW現像ができれば十分</li>
                <li>Proツールは必要ない</li>
                <li>とにかくコストを抑えたい</li>
              </ul>
            </dd>
            <dt>＋パス1年だけ <span className="m-badge m-badge--amber m-badge--round">コスパ最強</span></dt>
            <dd>
              <ul>
                <li>Proツールを永続的に使いたい</li>
                <li>生成AIは1年使えれば十分</li>
                <li>長期的なコストを抑えたい</li>
              </ul>
            </dd>
            <dt>＋パス毎年継続</dt>
            <dd>
              <ul>
                <li>常に最新機能を使いたい</li>
                <li>生成AI機能をフル活用したい</li>
                <li>アップデートを逃したくない</li>
              </ul>
            </dd>
          </dl>
        </div>
        <LuminarCtaMini />
      </section>

      <section id="best-value" className="content-card card-padding article-body">
        <h2>コスパ最強は「買い切り＋パス1年だけ」</h2>
        <p>ここまで読んで「結局どれがお得なの？」と思った方へ。</p>
        <p><strong>答えは「買い切り＋パス1年だけ」です。</strong></p>
        <h3>なぜこのパターンがお得なのか</h3>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>内訳</th>
                <th>合計（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>デスクトップ $119 + パス $49</td>
                <td><strong>約¥25,200</strong></td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>2年目以降は追加費用なし</td>
                <td><strong>約¥25,200</strong></td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>追加費用なし</td>
                <td><strong>約¥25,200</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>ポイントは<span className="m-mark-yellow">一度パスを買えばProツールは永続的に使える</span>ということ。</p>
        <p>つまり、<strong>約¥25,200の初期投資だけで、Proツール（ノイズ除去、HDR合成など）を何年でも使い続けられる</strong>のです。生成AI機能にこだわりがなければ、これが最も賢い選択です。</p>
        <h3>Lightroomと比較するとどうか？</h3>
        <div className="m-table-wrap l-bottom-large">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>Luminar Neo<br />（パス1年だけ）</th>
                <th>Luminar Neo<br />（パス毎年継続）</th>
                <th>Lightroom<br />（フォトプラン）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年</td>
                <td>約¥25,200</td>
                <td>約¥25,200</td>
                <td>約¥14,080</td>
              </tr>
              <tr>
                <td>3年</td>
                <td><strong>約¥25,200</strong></td>
                <td>約¥40,000</td>
                <td>約¥42,240</td>
              </tr>
              <tr>
                <td>5年</td>
                <td><strong>約¥25,200</strong></td>
                <td>約¥54,600</td>
                <td>約¥70,400</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>3年目以降は<strong>Lightroomの半額以下</strong>になります。</p>
        <p>もちろん、LightroomとLuminar Neoでは機能や使い勝手が異なるので単純比較はできません。詳しくは「<a href="/luminar/merit-demerit/">LightroomとLuminar Neoの違いまとめ</a>」をご覧ください。</p>
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">注意</span><span className="m-notice__title">Lightroomの価格改定について</span></div>
          <p>Adobe フォトプラン（20GB）は<strong>2025年1月15日から値上げ＆新規受付終了</strong>となりました。上記は年間一括払い（¥14,080/年）を基準にした比較です。</p>
        </div>
      </section>

      <section id="simulations" className="content-card card-padding article-body">
        <h2>その他のシミュレーション</h2>
        <p>「コスパ最強」以外のパターンも見ておきましょう。</p>
        <h3>パターン①：パス毎年継続</h3>
        <p>常に最新機能＋生成AIをフル活用したい方向け。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>内訳</th>
                <th>合計（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>デスクトップ $119 + パス $49</td>
                <td><strong>約¥25,200</strong></td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>$119 + $49×3年</td>
                <td><strong>約¥40,000</strong></td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>$119 + $49×5年</td>
                <td><strong>約¥54,600</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>パターン②：クロスデバイス＋エコシステムパス</h3>
        <p>スマホ・タブレットでも編集したい方向け。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>内訳</th>
                <th>合計（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>クロスデバイス $159 + エコシステムパス $69</td>
                <td><strong>約¥34,200</strong></td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>$159 + $69×3年</td>
                <td><strong>約¥54,900</strong></td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>$159 + $69×5年</td>
                <td><strong>約¥75,600</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>パターン③：買い切りのみ（パスなし）</h3>
        <p>とにかくコストを抑えたい方向け。ただしProツールは使えません。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>内訳</th>
                <th>合計（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>デスクトップ $119</td>
                <td><strong>約¥17,850</strong></td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>追加費用なし</td>
                <td><strong>約¥17,850</strong></td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>追加費用なし</td>
                <td><strong>約¥17,850</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <LuminarCtaMini />
      </section>

      <section id="faq" className="content-card card-padding article-body">
        <h2>よくある質問（FAQ）</h2>
        <dl>
          <div className="faq-item">
            <dt className="faq-q">サブスクプランはもうないの？</dt>
            <dd className="faq-a"><strong>はい、現在は販売されていません。</strong>以前は月額・年額のサブスクリプションプランも存在しましたが、2026年現在は買い切りプラン＋パス（任意）のみとなっています。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">買い切りプランだけでProツールは使える？</dt>
            <dd className="faq-a"><strong>いいえ、使えません。</strong>Proツール（Noiseless AI、HDR Mergeなど8種）は買い切りプランには含まれていません。パスの購入が必要です。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">一度パスを買ったらProツールはずっと使える？</dt>
            <dd className="faq-a"><strong>はい、永続的に使えます。</strong>翌年パスを更新しなくても、Proツールは消えません。使えなくなるのは生成AI機能と最新アップデートだけです。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">途中でパスをやめたらどうなる？</dt>
            <dd className="faq-a">生成AI機能と最新アップデートが使えなくなりますが、<strong>基本機能とProツールはそのまま使い続けられます</strong>。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">パスは毎年買わないといけない？</dt>
            <dd className="faq-a">必要な年だけ購入すればOKです。Proツールだけ使えればいい場合は、<strong>最初の1年だけパスを買うのが最もコスパ◎</strong>です。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">1つのライセンスで何台のPCにインストールできる？</dt>
            <dd className="faq-a">デスクトップライセンスは<strong>2台のPC</strong>にインストール可能です。Windows・Mac問わず、どの組み合わせでもOK。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">セールはいつある？</dt>
            <dd className="faq-a">ブラックフライデー（11月下旬）やサイバーマンデーが狙い目です。急ぎでなければセールを待つのも手ですね。</dd>
          </div>
          <div className="faq-item">
            <dt className="faq-q">返金保証はある？</dt>
            <dd className="faq-a">はい、<strong>30日間の返金保証</strong>があります。「思っていたのと違った…」という場合でも安心です。</dd>
          </div>
        </dl>
      </section>

      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ｜あなたに最適なプランは？</h2>
        <p>最後に、この記事のポイントをまとめます。</p>
        <div className="m-point-box">
          <div className="m-point-box__bg">!</div>
          <div className="m-point-box__header">
            <span className="m-point-box__label">Point</span><br />
            <span className="m-point-box__title">この記事のまとめ</span>
          </div>
          <ul className="m-point-box__list">
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>サブスクプランは廃止</strong>：現在は買い切り＋パス（任意）のみ</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>購入は2ステップ</strong>：①買い切りプランを選ぶ → ②パスを追加するか決める</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Proツールは買い切りに含まれない</strong>→パスが必要</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>パスを1回買えばProツールは永続</strong></li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>コスパ最強は「買い切り＋パス1年だけ」</strong>（約¥25,200で永続）</li>
          </ul>
        </div>
        <p>ぜひ、ご自身に合った料金プランでLuminar Neoを導入してみてくださいね。</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'サブスクプランはもうないの？', acceptedAnswer: { '@type': 'Answer', text: 'はい、現在は販売されていません。以前は月額・年額のサブスクリプションプランも存在しましたが、2026年現在は買い切りプラン＋パス（任意）のみとなっています。' } },
              { '@type': 'Question', name: '買い切りプランだけでProツールは使える？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、使えません。Proツール（Noiseless AI、HDR Mergeなど8種）は買い切りプランには含まれていません。パスの購入が必要です。' } },
              { '@type': 'Question', name: '一度パスを買ったらProツールはずっと使える？', acceptedAnswer: { '@type': 'Answer', text: 'はい、永続的に使えます。翌年パスを更新しなくても、Proツールは消えません。使えなくなるのは生成AI機能と最新アップデートだけです。' } },
              { '@type': 'Question', name: '途中でパスをやめたらどうなる？', acceptedAnswer: { '@type': 'Answer', text: '生成AI機能と最新アップデートが使えなくなりますが、基本機能とProツールはそのまま使い続けられます。' } },
              { '@type': 'Question', name: 'パスは毎年買わないといけない？', acceptedAnswer: { '@type': 'Answer', text: '必要な年だけ購入すればOKです。Proツールだけ使えればいい場合は、最初の1年だけパスを買うのが最もコスパが良いです。' } },
              { '@type': 'Question', name: '1つのライセンスで何台のPCにインストールできる？', acceptedAnswer: { '@type': 'Answer', text: 'デスクトップライセンスは2台のPCにインストール可能です。Windows・Mac問わず、どの組み合わせでもOK。' } },
              { '@type': 'Question', name: 'セールはいつある？', acceptedAnswer: { '@type': 'Answer', text: 'ブラックフライデー（11月下旬）やサイバーマンデーが狙い目です。急ぎでなければセールを待つのも手ですね。' } },
              { '@type': 'Question', name: '返金保証はある？', acceptedAnswer: { '@type': 'Answer', text: 'はい、30日間の返金保証があります。「思っていたのと違った…」という場合でも安心です。' } },
            ],
          }),
        }}
      />

    </LuminarArticleLayout>
  )
}
