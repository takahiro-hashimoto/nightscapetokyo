import { jsonLdHtml } from "@/lib/json-ld-script";
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/common/AppLink'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import type { TocItem } from '@/lib/luminar/toc'


const META = {
  slug: 'sale-and-coupon-info',
  title: 'Luminar Neoを安く買う方法｜セール時期・クーポンコードまとめ【2026年】',
  description: '「Luminar Neoを一番安く買う方法は？」「今セールやってる？クーポンはある？」Luminar Neoは定価だと3〜7万円ほどする写真編集ソフトですが、実は購入タイミングとクーポンの使い方次第で、1万円台で手に入れることも可能です。',
  publishedAt: '2026-01-18T10:36:49',
  updatedAt: '2026-08-13T00:00:00',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/how-to-buy.jpg',
    alt: 'Luminar Neoのセール時期はいつ？クーポンコードと安く買う方法について徹底解説【2026年最新】',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'how-to-save', level: 2, text: 'Luminar Neoを安く買う3つの方法' },
  { id: 'save-coupon', level: 3, text: 'プロモーションコード（クーポン）を利用する' },
  { id: 'save-sale', level: 3, text: '公式キャンペーン・大型セールを狙う' },
  { id: 'save-loyalty', level: 3, text: '過去にSkylum製品を持っていれば「特別価格」' },
  { id: 'timing', level: 2, text: '次回のセールはいつ？' },
  { id: 'coupon-how-to', level: 2, text: 'クーポンコードの使い方' },
  { id: 'faq', level: 2, text: 'よくある質問（FAQ）' },
  { id: 'summary', level: 2, text: 'まとめ：一番安く買う方法' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

// もとはリード冒頭に「現在のセール状況」の m-notice があったが、開催状況と残り日数は
// すぐ下の CTA（LuminarCtaSale）が同じことを表示しており二重だった。
// CTA のタイトルに残り日数を出す形へ一本化したので、ここは静的なリードでよい。
const lead = (
    <>
      <p>「Luminar Neoを一番安く買う方法は？」「今セールやってる？クーポンはある？」</p>
      <p>Luminar Neoは定価だと3〜7万円ほどする写真編集ソフトですが、実は<strong>購入タイミングとクーポンの使い方次第で、1万円台で手に入れることも可能</strong>です。</p>
      <p>ただしセールの開催時期は年によってずれるので、今買うべきか次を待つべきかの判断が難しいところです。</p>
      <p>そこで本記事では、現在使えるクーポンコード、過去のセール傾向から読み解く次回セールの予想、そしてお得に購入するための具体的な方法を詳しく解説します。「今買うべきか、セールを待つべきか」の判断材料にしてください。</p>
      <div className="m-point-box">
        <div className="m-point-box__bg">!</div>
        <div className="m-point-box__header">
          <span className="m-point-box__label">まとめ</span><br />
          <span className="m-point-box__title">最安で購入するための3つのポイント</span>
        </div>
        <ul className="m-point-box__list">
          <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>セール期間中</strong>に購入する（クーポンとの併用可否は購入画面で確認）</li>
          <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> 急ぎでなければ<strong>ブラックフライデー（11月）</strong>や<strong>サマーセール（6〜8月）</strong>を狙う</li>
          <li><i className="fa-solid fa-check" style={{ color: 'var(--c-sky-600)' }}></i> <strong>30日間の返金保証</strong>があるため、セールを逃すリスクを避けて先に購入するのもあり</li>
        </ul>
      </div>
    </>
)

const FAQ_JSON_LD = [
  { '@type': 'Question', name: '購入後に気に入らなかった場合は？', acceptedAnswer: { '@type': 'Answer', text: 'Luminar Neoには購入後30日間の返金保証があります。実際に使ってみて合わないと感じた場合でも、リスクなく試せる仕組みです。返金手続きはサポートに連絡するだけで完了します。' } },
  { '@type': 'Question', name: 'クーポンはセール価格と併用できる？', acceptedAnswer: { '@type': 'Answer', text: '公式の規約上は割引の併用は不可とされており、併用できるかどうかは時期やキャンペーンによって異なります。購入画面でプロモーションコードを入力し、割引が適用されるかを確認してから決済してください。クーポン同士（複数のプロモーションコード）の併用はできません。' } },
  { '@type': 'Question', name: '何台のPCで使える？', acceptedAnswer: { '@type': 'Answer', text: '買い切りのデスクトップ専用ライセンスは2台のパソコンでアクティベートできます。全プラットフォームライセンスはさらに3台のモバイルデバイスでも利用可能です。' } },
  { '@type': 'Question', name: '1年で使えなくなる機能があるの？', acceptedAnswer: { '@type': 'Answer', text: '基本機能（Sky AI、補正AI、電線除去など）は永久に使えます。1年で期限が切れるのはGenErase・GenSwap・GenExpandという3つの生成AI機能のみで、継続利用にはLuminar Primeの契約が必要です。Proツールも買い切りに含まれており永続的に使えます。' } },
]

export default async function Page() {
  // セール状況（開催中かどうか・残り日数）は LuminarArticleLayout が DB から取得して
  // SaleSettingsProvider に流し、CTA 側が表示する。このページ側での取得は不要。

  return (
    <>
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="how-to-save" className="content-card card-padding article-body">
        <h2>Luminar Neoを安く買う3つの方法</h2>
        <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-neo-sale.jpg" alt="Luminar Neoを安く買う3つの方法" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" /></div>
        <p>そもそもLuminar Neoがどんなソフトなのかは<Link href="/luminar/">Luminar Neoの完全ガイド</Link>で解説しています。ここでは価格を下げる方法に絞ります。</p>
        <p>セールがない時期でも、安く買う手はあります。僕が実際に使っているのは次の3つです。</p>
        <h3 id="save-coupon">プロモーションコード（クーポン）を利用する</h3>
        <p>セール開催の有無にかかわらず、当サイト限定のクーポンコード「nightscape10」が使えます。購入画面でコードを入力するだけで10%OFFになります。</p>
        <p>なお公式の規約上、割引の併用は不可となっています。<strong>セール価格と併用できるかどうかは購入画面で確認してください。</strong>カートでクーポンを入れてみて、金額が下がるのを見てから決済すれば確実です。</p>

        <h3 id="save-sale">公式キャンペーン・大型セールを狙う</h3>
        <p>Skylum公式サイトでは、季節ごとにキャンペーンやセールを実施しています。通常価格から<strong>50%〜75%近い割引</strong>になることもあり、値引きの幅はクーポンの10%OFFとは桁が違います。</p>
        <p>年に5〜6回は何らかのセールが走っているので、次を待つ期間もそう長くはなりません。どの月に何が来るかは「<a href="#timing">次回のセールはいつ？</a>」にまとめました。</p>

        <h3 id="save-loyalty">過去にSkylum製品を持っていれば「特別価格」</h3>
        <p>過去にLuminar AIやLuminar 4などSkylum製品を買ったことがあるなら、<strong>「お得意様割引（ロイヤルティ割引）」</strong>が使える場合があります。</p>
        <p>確認は公式サイト下部の「お得意様割引をご利用ください」から行います。購入時のメールアドレスかシリアル番号を入れると、対象かどうかが表示されます。対象なら通常価格より下がった金額が提示されます。</p>

        {/* もとは3本目の h3 の中に置かれていたため、お得意様割引だけへの注意に見えていた。
            実際は3つの方法すべてに関わる話なのでセクション末に出す。 */}
        <div className="m-notice m-notice--warn">
          <div className="m-notice__head"><span className="m-notice__badge">注意</span><span className="m-notice__title">3つは併用できるとは限りません</span></div>
          <p>公式の規約上、割引の併用は不可とされています。セール価格・クーポン・お得意様割引のどれがいちばん安いかは時期によって変わるので、購入画面で実際の金額を確認してから決めてください。</p>
        </div>
      </section>

      <section id="timing" className="content-card card-padding article-body">
        <h2>次回のセールはいつ？</h2>
        <p>現在セールが開催されていない場合や、より大きな割引を待ちたい方のために、過去のセール傾向を分析しました。2022年〜2025年のデータに基づくと、Luminar Neoのセールは以下の時期に開催される傾向があります。</p>
        <p>セールはかなり頻繁にやっているので、急いでいないなら待つのが得です。今すぐ使いたいなら、クーポンコードだけでも入れておけば損はしません。</p>
        <div className="m-table-wrap l-bottom-large">
          <table className="m-table">
            <thead>
              <tr>
                <th>時期</th>
                <th>セール名</th>
                <th>過去の実績・特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1月</strong></td>
                <td>ニューイヤーセール</td>
                <td>年明け直後に開催。2025年は1月上旬〜中旬に実施され、70%OFF程度の割引。<br />新年の写真整理シーズンに合わせたキャンペーン。</td>
              </tr>
              <tr>
                <td><strong>2月〜3月</strong></td>
                <td>周年記念セール / スプリングセール</td>
                <td>Skylumの創業記念やLuminar Neo発売記念のタイミング。2024年は「9周年セール」として75%OFFを実施。</td>
              </tr>
              <tr>
                <td><strong>6月〜8月</strong></td>
                <td>サマーセール<span className="m-badge m-badge--amber m-badge--round">狙い目</span></td>
                <td>比較的長期間開催されるのが特徴。<br />2025年は6月下旬〜9月上旬まで継続し、75%OFFを維持。夏休みの写真編集需要に対応。</td>
              </tr>
              <tr>
                <td><strong>9月</strong></td>
                <td>Back to Schoolセール</td>
                <td>学生・教育関係者向けだが、一般ユーザーも対象。2025年は9月15日まで開催され、75%OFF。</td>
              </tr>
              <tr>
                <td><strong>11月</strong></td>
                <td>ブラックフライデー / サイバーマンデー<span className="m-badge m-badge--red m-badge--round">最大</span></td>
                <td>年間最大級の割引率。<br />2024年・2025年ともに最大77%OFFを記録。11月下旬の約1週間が勝負どころ。</td>
              </tr>
              <tr>
                <td><strong>12月</strong></td>
                <td>ホリデーセール / 年末セール</td>
                <td>クリスマス〜年末にかけて開催。ブラックフライデーほどではないが、70%前後の割引。駆け込み需要に対応。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="coupon-how-to" className="content-card card-padding article-body">
        <h2>クーポンコードの使い方</h2>
        <p>クーポンコード「nightscape10」は、セールの有無にかかわらず常時使えます。購入画面で入力するだけなので、手順は3ステップです。</p>
        <p>つまずきやすいのは2番目のコード入力だけです。半角で入っているかと、適用ボタンを押したあとに合計金額が下がっているかを見てください。</p>
        <div style={{ position: 'relative' }}>
          <div className="m-step">
            <div className="m-step__line"></div>
            <div className="m-step__num">1</div>
            <div className="m-step__content">
              <p className="m-step__title">プランを選択</p>
              <p className="m-step__desc">まずはLuminar Neo公式サイト（<a href="https://skylum.evyy.net/mO9BEa" target="_blank" rel="noopener nofollow">skylum.com</a>）にアクセス。</p>
              <p className="m-step__desc">「デスクトップ専用ライセンス」「全プラットフォームライセンス」「Maxライセンス」の3つから選択し、購入ボタンをクリック。迷ったら、スマホで編集しないかぎり<strong>デスクトップ専用ライセンス</strong>で十分です。</p>
              <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-cuopon-01.jpg" alt="Luminarの買い切り3プラン（デスクトップ専用・全プラットフォーム・Max）の価格と違いを比較した図" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" /></div>
              <p className="m-step__desc text-xsmall">※上図は通常価格です。実際の購入画面では、開催中のセールに応じて割引後の価格が表示されます。</p>
            </div>
          </div>
          <div className="m-step">
            <div className="m-step__line"></div>
            <div className="m-step__num">2</div>
            <div className="m-step__content">
              <p className="m-step__title">プロモーションコードを入力</p>
              <p className="m-step__desc">カート画面の「プロモーションコードを入力」をクリックすると入力欄が開くので、コードを入れて「適用」を押します。全角になっていると弾かれるので、半角で入っているかだけ見てください。</p>
              <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-cuopon-02.jpg" alt="Luminar Neoの購入方法、クーポンの使い方 ステップ2" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" /></div>
            </div>
          </div>
          <div className="m-step">
            <div className="m-step__num">3</div>
            <div className="m-step__content">
              <p className="m-step__title">割引を確認して決済</p>
              <p className="m-step__desc">合計金額が<strong>10%OFF</strong>になっていれば成功です。あとはメールアドレスと決済情報を入れれば購入完了。登録したアドレスにダウンロードリンクが届きます。</p>
              <div className="m-figure"><Image src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/luminar-cuopon-03.jpg" alt="Luminar Neoの購入方法、クーポンの使い方 ステップ3" width={880} height={495} sizes="(max-width: 768px) 100vw, 880px" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="content-card card-padding article-body">
        <h2>よくある質問（FAQ）</h2>
        <dl>
          {/* 各 FAQ に id を付与し、#faq-1 形式で個別の質問へ直接リンク・引用できるようにする。
              日本語の質問文をスラッグ化すると URL エンコードで読めなくなり、文言修正でリンクが壊れるため連番で固定 */}
          <div id="faq-1" className="faq-item">
            <dt className="faq-q">購入後に気に入らなかった場合は？</dt>
            <dd className="faq-a">Luminar Neoには購入後30日間の返金保証があります。実際に使ってみて合わないと感じた場合でも、リスクなく試せる仕組みです。返金手続きはサポートに連絡するだけで完了します。</dd>
          </div>
          <div id="faq-2" className="faq-item">
            <dt className="faq-q">無料体験版はある？</dt>
            <dd className="faq-a">はい、7日間の無料体験版があります。ただし、セール期間中は体験版を試している間にセールが終わってしまうリスクがあります。返金保証が30日間あるため、セール中であれば先に購入してしまうのがおすすめです。</dd>
          </div>
          <div id="faq-3" className="faq-item">
            <dt className="faq-q">クーポンはセール価格と併用できる？</dt>
            <dd className="faq-a">公式の規約上は割引の併用は不可とされており、併用できるかどうかは時期やキャンペーンによって異なります。購入画面でプロモーションコードを入力し、割引が適用されるかを確認してから決済してください。なお、クーポン同士（複数のプロモーションコード）の併用はできません。</dd>
          </div>
          <div id="faq-4" className="faq-item">
            <dt className="faq-q">何台のPCで使える？</dt>
            <dd className="faq-a">買い切りのデスクトップ専用ライセンスは2台のパソコンでアクティベートできます。全プラットフォームライセンスはさらに3台のモバイルデバイスでも利用可能です。</dd>
          </div>
          <div id="faq-5" className="faq-item">
            <dt className="faq-q">買い切りプランだけでProツールは使える？</dt>
            <dd className="faq-a">はい、使えます。Proツール（Noiseless AI、HDR Mergeなど8種）は、現在はすべての買い切り（永久）ライセンスに標準で含まれており、永続的に使えます。Luminar Primeが必要なのは、AIツールの継続利用や新機能アップデートを受け取りたい場合のみです。</dd>
          </div>
          <div id="faq-6" className="faq-item">
            <dt className="faq-q">1年で使えなくなる機能があるの？</dt>
            <dd className="faq-a">基本機能（Sky AI、補正AI、電線除去など）は永久に使えます。1年で期限が切れるのは「GenErase」「GenSwap」「GenExpand」という3つの生成AI機能のみです。これらはサーバー側で処理が必要なため、継続利用には別途Luminar Primeの契約が必要になります。なお、Proツールも買い切りに含まれており永続的に使えます。</dd>
          </div>
        </dl>
      </section>

      <section id="summary" className="content-card card-padding article-body">
        <h2>まとめ：一番安く買う方法</h2>
        {/*
          もとはここにリードとまったく同じ m-point-box（「最安で購入するための3つのポイント」）が
          置かれ、同じ箱を2度読ませていた。3つの要点は下の文章に溶かしてある。
          また、h2「どのプランを買えばいい？」の2段落（luminar-plan と重複）もここに畳んだ。
        */}
        <p>セールで安くなるのは買い切りの3プラン（デスクトップ専用／全プラットフォーム／Max）です。どれを選んでも<strong>Proツール8種は最初から付いてくる</strong>ので、セール目当てで上位プランを選ぶ必要はありません。スマホでも編集するかどうかが分かれ目で、PCだけで完結するならデスクトップ専用で足ります。</p>
        <p>料金体系は一見ややこしく見えますが、押さえるところは1つだけです。<strong>Proツールを含む編集機能は、買い切りで永久に使えます。</strong>生成AIを翌年以降も使いたいときや、新機能を追い続けたいときにだけLuminar Primeを足す。それだけの話です。</p>
        <p>あとはタイミングです。セール中にクーポンを重ねられればいちばん安く買えます。急ぎでないならブラックフライデー（11月）かサマーセール（6〜8月）が狙い目で、今すぐ必要なら30日間の返金保証があるので先に買ってしまう手もあります。</p>
        <p>プランごとの違いと総額の試算は<Link href="/luminar/luminar-plan/">買い切り3プランの価格と選び方</Link>にまとめてあります。</p>
      </section>

    </LuminarArticleLayout>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdHtml({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_JSON_LD,
        }),
      }}
    />
    </>
  )
}
