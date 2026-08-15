import type { Metadata } from 'next'
import Link from '@/components/common/AppLink'
import Image from 'next/image'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import type { TocItem } from '@/lib/luminar/toc'
import { PLANS, PRIME, LIGHTROOM, yen, approxYen, totalWithPrime } from '@/lib/luminar/pricing'


const META = {
  slug: 'lightroom-compare',
  title: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
  description: '写真の現像ソフト選びで、LightroomとLuminar Neoのどちらにするか迷っていませんか？どちらも人気のRAW現像ソフトですが、料金体系も操作感も設計思想がまったく違います。',
  publishedAt: '2026-01-18T10:36:17',
  updatedAt: '2026-08-13T00:00:00',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom.jpg',
    alt: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'conclusion', level: 2, text: '使い方で選ぶ' },
  { id: 'price', level: 2, text: '料金の比較（買い切り vs サブスク）' },
  { id: 'lightroom-buyout', level: 2, text: 'Lightroomに買い切り版はない' },
  { id: 'features', level: 2, text: 'RAW現像・AI・合成の機能比較' },
  { id: 'genre', level: 2, text: '撮影ジャンルで選ぶ' },
  { id: 'migration', level: 2, text: '乗り換えるときの注意点' },
  { id: 'faq', level: 2, text: 'よくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ：どちらを選ぶか' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>写真の現像ソフト選びで、LightroomとLuminar Neoのどちらにするか迷っていませんか？どちらも人気のRAW現像ソフトですが、料金体系も操作感も設計思想がまったく違います。</p>
    <p>まず金額差です。5年使った場合を並べます。</p>
    <ul className="m-list-ul">
      <li><span className="m-list-ul__icon">•</span> <strong>Lightroom</strong>（サブスク）：約9〜14万円</li>
      <li><span className="m-list-ul__icon">•</span> <strong>Luminar Neo</strong>（買い切り）：約1.6〜2.3万円</li>
    </ul>
    <p>ただ<span className="m-mark-yellow">安いほうを選べばいい、という話でもありません</span>。Lightroomを選んで「毎月払い続けるのがしんどい」と感じる人もいれば、Luminar Neoを選んで「やっぱりカタログ管理が欲しかった」と戻る人もいます。</p>
    <p>やりたいことから逆算すれば、選ぶべきほうは決まります。</p>
    <div className="m-table-wrap" style={{ margin: '1.5rem 0' }}>
      <table className="m-table">
        <thead>
          <tr>
            <th>やりたいこと・重視すること</th>
            <th>おすすめ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>大量の写真をカタログで一元管理したい</td>
            <td><strong>Lightroom</strong></td>
          </tr>
          <tr>
            <td>Photoshopと連携したワークフローが前提</td>
            <td><strong>Lightroom</strong></td>
          </tr>
          <tr>
            <td>商品撮影など色の正確性・再現性が必要</td>
            <td><strong>Lightroom</strong></td>
          </tr>
          <tr>
            <td>夜景・風景のノイズ除去を手軽に仕上げたい</td>
            <td><strong>Luminar Neo</strong></td>
          </tr>
          <tr>
            <td>空の置き換え・光の演出など創作的な編集をしたい</td>
            <td><strong>Luminar Neo</strong></td>
          </tr>
          <tr>
            <td>ポートレート補正を短時間で仕上げたい</td>
            <td><strong>Luminar Neo</strong></td>
          </tr>
          <tr>
            <td>買い切りでサブスク費用を抑えたい</td>
            <td><strong>Luminar Neo</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Lightroomから乗り換えるか迷っている方は、ぜひチェックしてみてください。</p>
  </>
)

export default async function Page() {
  return (
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="conclusion" className="content-card card-padding article-body">
        <h2>使い方で選ぶ</h2>
        <p><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom-03.jpg" alt="タブレットでLightroomを操作しながらレンズを並べた作業環境" width={1200} height={800} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></p>
        <p>上の表がなぜそうなるのか、普段の使い方から見ていきます。Luminar Neo側の基本情報から確認したい場合は<Link href="/luminar/">Luminar Neoの完全ガイド</Link>もあわせてどうぞ。</p>
        <h3>Lightroomが向いている人</h3>
        <div className="definition">
          <dl className="definition-body">
            <dt>大量の写真を一元管理したい人</dt>
            <dd>Lightroomのカタログ機能は、数万枚、数十万枚の写真をキーワードや撮影日、場所で整理して瞬時に検索できます。撮影を仕事にしている方や、長年の写真資産を管理したい方には大きな価値があります。</dd>
            <dt>すべてのパラメータを自分で調整したい人</dt>
            <dd>露光量、トーンカーブ、HSL、カラーグレーディング……Lightroomでは写真のあらゆる要素を数値で細かくコントロールできます。「この部分のハイライトをあと5だけ下げたい」といった微調整を繰り返して、自分だけの仕上がりを追求したい方に最適です。</dd>
            <dt>Photoshopとの連携が前提の人</dt>
            <dd>Adobe Creative Cloudのエコシステムの中で、LightroomからPhotoshopにシームレスに移行してレイヤー編集やレタッチを行うワークフローができあがっている人は、この連携を手放すほうが損になります。</dd>
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
            <dd>Luminar Neoは買い切りライセンスが基本です。購入後は追加の支払いなしでソフト自体を永続的に使えます。使わない月まで払いたくない、いつでも止められるほうが気が楽、という感覚の人にはこの料金体系が合います。</dd>
          </dl>
        </div>
        <p style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a href="https://skylum.evyy.net/mO9BEa" className="m-btn m-btn--primary" target="_blank" rel="noopener">Luminar Neo公式サイトで詳細を確認する</a>
        </p>
      </section>

      <section id="price" className="content-card card-padding article-body">
        <h2>料金の比較（買い切り vs サブスク）</h2>
        <p><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom-02.jpg" alt="タブレット版Lightroomで写真を編集している様子" width={1200} height={800} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></p>
        <p>月額料金だけを見ると判断を誤ります。効いてくるのは<span className="m-mark-yellow">3年、5年と使い続けたときの総額</span>のほうです。</p>
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
        {/* もとは 1,089字・表1・定義リスト2 でプラン内訳まで書いていたが、
            そこは luminar-plan（「買い切り」で掲載順位1.6位）の主題。
            比較記事に必要な「サブスクではない」という一点に絞り、詳細は送る。 */}
        <p>Luminar Neoは<strong>買い切り</strong>です。一度購入すれば追加料金なしで使い続けられます。買い切りプランは3種類あり、<strong>いちばん安いデスクトップ専用ライセンスが{approxYen(PLANS.desktop.sale)}前後</strong>（セール時）。Proツール8種も最初から含まれます。</p>
        <p>2年目以降も生成AIを使いたい場合だけ、年額のLuminar Prime（初年度{approxYen(PRIME.firstYear)}）を足す形です。使わなければ追加費用はゼロで、これが総額の差につながります。</p>
        <p>3プランの違いと総額の試算は<Link href="/luminar/luminar-plan/">買い切り3プランの価格と選び方</Link>にまとめてあります。</p>
        <h3>5年間使い続けた場合の総支払額を比較</h3>
        <p>長期で見ると、買い切りのLuminar Neoのコスト優位性は明らかです。<strong>Proツールを含む編集機能は買い切りだけで永続的に使えます。</strong>生成AIの継続や新機能まで欲しいなら「買い切り＋Luminar Prime 1年」（合計{approxYen(totalWithPrime('desktop', 1))}）が目安になります。</p>
        <p>「払い続けなければ使えなくなる」のと「払わなくても使い続けられる」のとでは、同じ金額でも受け止め方が違います。撮影の頻度が落ちた時期にサブスクの請求だけ続くのは、地味に効いてきます。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>期間</th>
                <th>Lightroom<br />フォトプラン(1TB)</th>
                <th>Lightroom<br />単体プラン(1TB)</th>
                <th>Luminar Neo<br />（買い切りのみ）</th>
                <th>Luminar Neo<br />（買い切り＋Luminar Prime 1年）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1年目</td>
                <td>{approxYen(LIGHTROOM.photoPlan1TB * 1)}</td>
                <td>{approxYen(LIGHTROOM.annualMonthly * 1)}</td>
                <td>{approxYen(PLANS.desktop.sale)}</td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
              </tr>
              <tr>
                <td>3年間</td>
                <td>{approxYen(LIGHTROOM.photoPlan1TB * 3)}</td>
                <td>{approxYen(LIGHTROOM.annualMonthly * 3)}</td>
                <td>{approxYen(PLANS.desktop.sale)}</td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
              </tr>
              <tr>
                <td>5年間</td>
                <td>{approxYen(LIGHTROOM.photoPlan1TB * 5)}</td>
                <td>{approxYen(LIGHTROOM.annualMonthly * 5)}</td>
                <td>{approxYen(PLANS.desktop.sale)}</td>
                <td>{approxYen(totalWithPrime('desktop', 1))}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="m-note">※Lightroomフォトプラン(1TB)：月額2,380円×12ヶ月で計算<br />
        ※Lightroom単体プラン(1TB)：月額1,480円×12ヶ月で計算<br />
        ※Luminar Neo「買い切り＋Luminar Prime 1年」：生成AI無制限＋1年間の新機能アップデートが付くパターン（Proツールは買い切りのみでも永続利用可）</p>
        <p><i className="fa-solid fa-arrow-right"></i> Luminar Neo側はセールとクーポンでさらに下がります。<Link href="/luminar/sale-and-coupon-info/">Luminar Neoを安く買う方法（セール時期・クーポンコード）</Link>もあわせてどうぞ。</p>
      </section>

      {/*
        「lightroom 買い切り」「lightroom 代替」「lightroom 料金」など Lightroom 単体の
        クエリは表示だけあって掲載順位が12〜23位に沈んでいた。比較表の中に数字として
        置くだけでは拾えないため、疑問そのものを見出しにして受け止める。
      */}
      <section id="lightroom-buyout" className="content-card card-padding article-body">
        <h2>Lightroomに買い切り版はない</h2>
        <p><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom-01.jpg" alt="ノートPCでAdobe Lightroom Classicを起動しようとしている画面" width={1200} height={800} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></p>
        <p><strong>Adobe Lightroomに買い切り版はありません。</strong>販売されているのはサブスクリプションだけで、契約をやめると編集機能は使えなくなります。「昔は買い切りで買えたはず」という記憶は間違いではなく、パッケージ版のLightroom 6が売られていた時期はありました。ただし新規販売は終了していて、いま入手する手段はありません。</p>
        <h3>Lightroomの料金は年いくらか</h3>
        <p>買い切りと比較する前提として、Lightroomにかかる金額を整理しておきます。</p>
        <ul className="m-list-ul">
          <li><span className="m-list-ul__icon">•</span> Lightroom単体プラン（1TB）：年 {approxYen(LIGHTROOM.annualMonthly)}（月々払いの場合）</li>
          <li><span className="m-list-ul__icon">•</span> フォトプラン（Lightroom＋Photoshop・1TB）：年 {approxYen(LIGHTROOM.photoPlan1TB)}</li>
        </ul>
        <p>ここで効いてくるのが<strong>「使い続ける限り毎年かかる」という点</strong>です。3年使えば単体プランでも{approxYen(LIGHTROOM.annualMonthly * 3)}前後、5年なら{approxYen(LIGHTROOM.annualMonthly * 5)}前後になります。一方Luminar Neoは{approxYen(PLANS.desktop.sale)}前後の買い切りで、追加費用なしで使い続けられます。<Link href="/luminar/luminar-plan/">Luminar Neoの買い切り価格の内訳</Link>もあわせて確認してみてください。</p>
        <h3>LightroomとLightroom Classicの違い</h3>
        <p>もうひとつ混乱しやすいのが、名前のよく似た2つのアプリです。</p>
        <p>どちらもフォトプランに含まれるため、<strong>プラン選択で悩む必要はありません</strong>。使い方に合うほうを起動すればよい、という関係です。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th></th>
                <th>Lightroom（クラウド版）</th>
                <th>Lightroom Classic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>写真の置き場所</td>
                <td>クラウド中心</td>
                <td>PCのローカル中心</td>
              </tr>
              <tr>
                <td>得意なこと</td>
                <td>PC・スマホでの同期編集</td>
                <td>大量の写真の管理・書き出し</td>
              </tr>
              <tr>
                <td>向いている人</td>
                <td>複数端末で編集したい</td>
                <td>PCでじっくり現像したい</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="features" className="content-card card-padding article-body">
        <h2>RAW現像・AI・合成の機能比較</h2>
        <p><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom-05.jpg" alt="LightroomとLuminar Neoの編集画面を比較するイメージ" width={1200} height={801} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></p>
        <p>LightroomとLuminar Neoはできることの範囲に大きな差があるわけではありません。どちらもRAW現像、色補正、部分調整、書き出しといった基本機能を備えています。違いは、<strong>それらの機能にどうアプローチするか</strong>という操作思想にあります。</p>
        <h3>基本的な現像機能の違い</h3>
        <p>露出・コントラスト・彩度といった基本の調整は、どちらでも同じことができます。違うのは<strong>触り方</strong>です。Lightroomは項目ごとにスライダーが並び、数値で追い込みます。Luminar Neoは「明るくしたい」という目的から入り、細部はAIが埋めます。</p>
        <p>同じ写真を仕上げても、通る道筋が変わります。慣れた操作がそのまま通用しないのはこのためです。</p>
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
        {/* 表の前に説明をまとめる。部品（表）だけ先に出しても
            何を見比べればいいか分からないため。 */}
        <p>AIの位置づけがそもそも違います。<strong>Lightroomは作業を速くするためにAIを使い、Luminar Neoは仕上がりそのものをAIに任せます。</strong></p>
        <p>逆光の人物を明るくする場合、Lightroomはマスクを作り、被写体を選び、露光量を上げ、境界をぼかして4ステップ。Luminar NeoはリライトAIをオンにしてスライダーを動かすだけの2ステップです。ただし万能ではなく、複雑な構図では境界の認識が甘くなります。体感で8割方はうまくいき、残りは手で直します。</p>
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
        <h3>合成・特殊表現の違い</h3>
        <p><strong>Lightroomは「撮った写真を整える」ソフト</strong>で、写真に写っていないものを足す作業はPhotoshopの担当になります。一方の<strong>Luminar Neoは足す作業まで1本で完結</strong>します。</p>
        <p>曇り空を夕焼けに変える、木漏れ日を足すといった編集が、ソフト内で終わります。表でLightroom側に「不可」が並ぶのは機能不足ではなく、担当範囲がそこまでだからです。</p>
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
        <h2>撮影ジャンルで選ぶ</h2>
        <p>使い方が似ていても、撮るものが変われば答えは変わります。代表的な3ジャンルで見ていきます。</p>
        <h3>風景・夜景</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/dust-after-1.jpeg" alt="風景写真の作例" className="m-media-img" width={0} height={0} sizes="(max-width: 768px) 100vw, 30vw" style={{ height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Luminar Neoに優位性あり</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>スカイAIによる空の置き換えや強調は、風景写真の印象を大きく左右します。曇り空で撮影した写真を青空やドラマチックな夕焼けに変更できるのは、撮影時の天候に左右されないという意味で強力な武器です。エンハンスAIによる風景全体の立体感強調も、ワンクリックで「おっ」という仕上がりに。</p>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>夜景で効いてくるのはノイズ除去の質です。もう一段きれいに消したいときは<strong>Proツール「Noiseless AI」</strong>（買い切りライセンスに標準搭載）を使います。ディテールを残したままノイズだけ落としてくれます。</p>
          </div>
        </div>
        <h3>ポートレート</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/portrait-after.jpg" alt="ポートレート写真の作例" className="m-media-img" width={0} height={0} sizes="(max-width: 768px) 100vw, 30vw" style={{ height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Luminar Neoが効率的</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>フェイスAI、スキンAI、ボディAIといった人物専用ツールは、顔の各パーツを認識して個別に調整できます。目の明るさ、肌のなめらかさ、顔の輪郭など、ポートレートで求められる補正がスライダーで完結します。ただし、人物の肌を細部まで追い込むレタッチ（毛穴単位の処理、複雑なシミの除去など）が必要な場合はPhotoshopの領域です。撮って出しに近い自然なポートレートを効率よく仕上げたいならLuminar Neoが向いています。</p>
          </div>
        </div>
        <h3>商品・商用写真</h3>
        <div className="m-media-box">
          <Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/MH40.jpg" alt="商品写真の作例" className="m-media-img" width={0} height={0} sizes="(max-width: 768px) 100vw, 30vw" style={{ height: 'auto' }} />
          <div className="m-media-body">
            <h4 style={{ fontWeight: 900, marginBottom: '0.5rem' }}>Lightroomの堅実さが活きる</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>商品写真は色の正確性と再現性が求められます。同じ商品を複数回撮影したとき、仕上がりの色味が揃っていなければなりません。Lightroomのカラーマネジメント機能やプロファイル適用はこの用途に最適化されています。また、大量の商品写真を一括処理する際、Lightroomのカタログ機能と同期機能が威力を発揮します。</p>
          </div>
        </div>
      </section>

      <section id="migration" className="content-card card-padding article-body">
        <h2>乗り換えるときの注意点</h2>
        <p><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/lightroom-04.jpg" alt="Lightroomから乗り換える際の作業イメージ" width={1200} height={800} sizes="(max-width: 768px) 100vw, 880px" style={{ width: '100%', height: 'auto' }} /></p>
        <p>Lightroomから移る場合、先に知っておきたい制約が2つあります。</p>
        {/* もとは3つの注意点が長い段落で並び、どれが制約でどれが対処なのか
            読み分けにくかった。制約は定義リスト、対処は本文に分けている。 */}
        <div className="definition">
          <dl className="definition-body">
            <dt>カタログは移行できない</dt>
            <dd>写真の管理情報・編集履歴・キーワードをLuminar Neoに持っていく方法はありません。そもそもLuminar Neoにカタログ機能がないためです。RAWファイルは読み込めますが、<strong>Lightroomでの編集内容は引き継げません</strong>。</dd>
            <dt>ツールの場所が変わる</dt>
            <dd>「トーンカーブを触りたい」と思っても、同じ名前のツールが同じ場所にあるわけではありません。別のツールで同じ結果は出せますが、慣れるまでは探す時間がかかります。</dd>
          </dl>
        </div>
        <p>そこで現実的なのが<strong>いきなり乗り換えないこと</strong>です。新しく撮った分だけLuminar Neoで現像し、過去のカタログはLightroomに残したままにします。慣れてきたらLightroomを開く頻度を減らしていけば、<span className="m-mark-yellow">いつでも戻れる状態を保ったまま</span>移行できます。</p>
      </section>

      <section id="faq" className="content-card card-padding article-body">
        <h2>よくある質問（FAQ）</h2>
        <dl>
          {/* 各 FAQ に id を付与し、#faq-1 形式で個別の質問へ直接リンク・引用できるようにする。
              日本語の質問文をスラッグ化すると URL エンコードで読めなくなり、文言修正でリンクが壊れるため連番で固定 */}
          <div id="faq-1" className="faq-item">
            <dt className="faq-q">Lightroomの完全な代わりになる？</dt>
            <dd className="faq-a">カタログ管理とPhotoshop連携は代替できません。RAW現像と写真の仕上げという点では十分に対応できるので、管理機能が不要で現像を効率化したい方には実質的な代替になり得ます。</dd>
          </div>
          <div id="faq-2" className="faq-item">
            <dt className="faq-q">プロでも使える？</dt>
            <dd className="faq-a">使えます。風景写真家やポートレート写真家には、Luminar Neoをメインツールにしている方も多数。ただし大量納品の商業撮影では、Lightroomのカタログ管理に軍配が上がる場面もあります。</dd>
          </div>
          <div id="faq-3" className="faq-item">
            <dt className="faq-q">RAW現像の品質は？</dt>
            <dd className="faq-a">基本品質に大きな差はありません。主要カメラメーカーのRAWに対応し、16bit処理にも対応しています。仕上がりの差は、どのツールを使ってどう仕上げるかという部分で出ます。</dd>
          </div>
          <div id="faq-4" className="faq-item">
            <dt className="faq-q">Lightroomのフォトプラン20GBはもう契約できない？</dt>
            <dd className="faq-a">2025年1月15日以降、新規受付は終了しました。既存ユーザーは継続利用可能ですが、月額1,780円に値上げされています。新規の方はフォトプラン（1TB）月額2,380円、またはLightroomプラン（1TB）月額1,480円から選ぶことになります。</dd>
          </div>
          <div id="faq-5" className="faq-item">
            <dt className="faq-q">Luminar Neoの買い切りプランでProツールは使える？</dt>
            <dd className="faq-a"><strong>はい、使えます。</strong>Proツール（Noiseless AI、HDR Mergeなど8種）は、現在はすべての買い切り（永久）ライセンスに標準で含まれており、永続的に使えます。Luminar Primeが必要なのは、AIツールの継続利用や新機能アップデートを受け取りたい場合のみです。</dd>
          </div>
          <div id="faq-6" className="faq-item">
            <dt className="faq-q">Luminar Neoで1年で使えなくなる機能はある？</dt>
            <dd className="faq-a">基本機能（Sky AI、補正AI、電線除去など）は永久に使えます。1年で期限が切れるのは「GenErase」「GenSwap」「GenExpand」という3つの<strong>生成AI機能のみ</strong>で、継続利用にはLuminar Primeの契約が必要です。なお、<strong>Proツールも買い切りに含まれており永続的に使えます</strong>。</dd>
          </div>
        </dl>
      </section>

      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ：どちらを選ぶか</h2>
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
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Neo（買い切りのみ）</strong>：15,980円（セール時）でProツール含む編集機能を永続利用可</li>
            <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>Luminar Neo（買い切り＋Luminar Prime 1年）</strong>：約23,400円で生成AI無制限＋新機能アップデートも1年分付く</li>
          </ul>
        </div>
      </section>

    </LuminarArticleLayout>
  )
}
