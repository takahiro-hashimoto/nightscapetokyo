import { jsonLdHtml } from "@/lib/json-ld-script";
import type { Metadata } from 'next'
import Link from '@/components/common/AppLink'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import type { TocItem } from '@/lib/luminar/toc'
import { PRIME, approxYen, priceWithRegular } from '@/lib/luminar/pricing'


const META = {
  slug: 'faq',
  title: 'Luminar Neo購入前FAQ｜動作環境・対応カメラ・ライセンスの疑問を解決【2026年】',
  description: 'Luminar Neoは体験版が7日間しかなく、判断しきれないまま購入を決めることになりがちです。動作環境、対応カメラ、ライセンスの仕組みなど、購入前によく寄せられる疑問をSkylum公式のカスタマーサポートにも問い合わせた上でQ&A形式でまとめました。',
  publishedAt: '2026-01-19T10:28:58',
  updatedAt: '2026-08-13T00:00:00',
  featuredImage: {
    src: 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar/faq.jpg',
    alt: 'Luminar Neoの購入前によくある質問まとめ｜動作環境・対応カメラ・ライセンスの疑問を解決【FAQ】',
    width: 1920,
    height: 1080,
  },
}

const TOC: TocItem[] = [
  { id: 'faq-purchase', level: 2, text: 'Luminar Neoの購入・料金に関する質問' },
  { id: 'faq-trial', level: 2, text: '体験版・導入前の不安' },
  { id: 'faq-features', level: 2, text: '機能・他ソフトとの違い' },
  { id: 'faq-files', level: 2, text: '対応ファイル・出力形式' },
  { id: 'faq-performance', level: 2, text: '動作環境・パフォーマンス' },
  { id: 'faq-license', level: 2, text: '購入後・ライセンス関連' },
  { id: 'faq-pro', level: 2, text: 'Proツール・Luminar Primeに関する質問' },
  { id: 'faq-legacy', level: 2, text: '旧プラン名・旧パスとの対応（名称変更まとめ）' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>Luminar Neoは体験版が7日間しかなく、判断しきれないまま購入を決めることになりがちです。自分のPCで動くのか、使っているカメラのRAWに対応しているのか、買ったあとで気づいても手遅れな項目がいくつかあります。</p>
    <p>このページでは、購入前によく寄せられる疑問をSkylum公式のカスタマーサポートにも問い合わせた上でQ&amp;A形式でまとめました。細かい解説は専門ページに任せて、ここでは「YES or NO」でサクッと判断できるようにしています。気になる項目だけチェックしてみてくださいね。</p>
    <p>なお、公式サイトにもFAQページがあるので、あわせて参考にしてみてください。<br />
    <i className="fa-solid fa-arrow-right"></i> <a href="https://skylum.evyy.net/OeGRoW" target="_blank" rel="noopener nofollow">Luminar Neo公式FAQ（Skylum）</a></p>
    <p>購入前に疑問をひととおり解消しておきたい方は、ぜひチェックしてみてください。</p>
  </>
)

const FAQ_JSON_LD = [
  { '@type': 'Question', name: 'Luminar Neoの価格はいくら？', acceptedAnswer: { '@type': 'Answer', text: `Luminar Neoの買い切りは「デスクトップ専用ライセンス（旧・永久ライセンス デスクトップ版）」「全プラットフォームライセンス（旧・クロスデバイス永続ライセンス）」「Maxライセンス（旧・永久 Maxライセンス）」の3種類。現在のセール価格はデスクトップ専用${priceWithRegular('desktop')}、全プラットフォーム${priceWithRegular('allPlatforms')}、Max${priceWithRegular('max')}です（セール価格は時期により変動します）。Proツール（Noiseless AI、HDR Mergeなど8種）は現在すべての買い切りライセンスに標準で含まれており、追加購入なしで永続的に使えます。` } },
  { '@type': 'Question', name: 'Luminar Neoを安く買う方法はある？', acceptedAnswer: { '@type': 'Answer', text: '公式サイトでは定期的にクーポンコードが発行されています。また年に数回開催されるセール時にはさらに割引率が高くなることもあります。' } },
  { '@type': 'Question', name: '買い切りとLuminar Primeの違いは？', acceptedAnswer: { '@type': 'Answer', text: 'Luminar Neoは買い切り（永久ライセンス）プランのみの販売です。一度購入すれば、Proツール（8種）を含む編集機能はずっと使い続けられます。以前あったUpgrade Pass／Ecosystem Passは廃止され、現在は年額サブスクのLuminar Primeに一本化されています。Primeは契約期間中の新機能アップデートとAIツールの無制限利用、アセットライブラリとSpacesを追加するオプションで、Primeが失効してもアプリ本体とProツールはそのまま使い続けられます。' } },
  { '@type': 'Question', name: '合わなかった場合、返金できる？', acceptedAnswer: { '@type': 'Answer', text: 'はい、購入から30日以内であれば返金を申請できます。いわゆる「30日間返金保証」がついています。' } },
  { '@type': 'Question', name: '無料体験版はある？', acceptedAnswer: { '@type': 'Answer', text: 'あります。公式サイトから7日間の無料トライアルをダウンロードできます。クレジットカードの登録も不要で、メールアドレスだけでOKです。体験版ではProツールを含むすべての機能にフルアクセスできます。' } },
  { '@type': 'Question', name: '初心者でも使える？', acceptedAnswer: { '@type': 'Answer', text: '使えます。Luminar NeoはAIが自動で良い感じに仕上げてくれるアプローチなので、初心者でも直感的に操作できます。' } },
  { '@type': 'Question', name: 'Lightroomと何が違う？', acceptedAnswer: { '@type': 'Answer', text: 'Lightroomは「写真を管理しながら現像するソフト」、Luminar Neoは「編集に特化したソフト」です。日常的に大量の写真を扱うならLightroom、1枚1枚をしっかり仕上げたいならLuminar Neoという棲み分けになります。' } },
  { '@type': 'Question', name: 'LightroomやPhotoshopと併用できる？', acceptedAnswer: { '@type': 'Answer', text: 'できます。Luminar NeoはLightroom ClassicおよびPhotoshopのプラグインとして動作します。既存のワークフローを変えずに導入することが可能です。' } },
  { '@type': 'Question', name: 'Proツール（拡張機能）は必要？', acceptedAnswer: { '@type': 'Answer', text: '用途によります。Proツールは高度なノイズ除去やHDR合成など専門的な編集機能ですが、現在はProツール8種すべてが買い切り（永久）ライセンスに標準で含まれており、追加購入なしで永続的に使えます。' } },
  { '@type': 'Question', name: '対応しているカメラは？', acceptedAnswer: { '@type': 'Answer', text: 'Canon、Nikon、Sony、Fujifilmなど主要カメラメーカーに幅広く対応しています。対応カメラのライブラリは定期的に更新されます。' } },
  { '@type': 'Question', name: 'RAW現像もできる？', acceptedAnswer: { '@type': 'Answer', text: 'はい、できます。Luminar Neoは独自の強力なRAWエンジンを搭載していて、RAW現像ソフトとしても十分に使えます。' } },
  { '@type': 'Question', name: '編集は非破壊？', acceptedAnswer: { '@type': 'Answer', text: 'はい、非破壊編集に対応しています。元の写真ファイルを直接書き換えるのではなく、編集内容を別で保持する仕組みなので、いつでも元の状態に戻せます。' } },
  { '@type': 'Question', name: '対応OS・推奨スペックは？', acceptedAnswer: { '@type': 'Answer', text: 'WindowsとMacの両方に対応しています。Macの場合はmacOS 12以降、Windowsの場合はWindows 10（バージョン1909以降、64bitのみ）またはWindows 11が必要です。メモリはAI処理を快適に使うなら16GB以上を推奨します。' } },
  { '@type': 'Question', name: '動作が重いことはある？', acceptedAnswer: { '@type': 'Answer', text: '正直に言うと、あります。特にAI機能を使った処理は負荷が高いので、PCのスペックによっては待ち時間が発生します。' } },
  { '@type': 'Question', name: '何台のPCにインストールできる？', acceptedAnswer: { '@type': 'Answer', text: 'デスクトップ専用ライセンス（旧・永久ライセンス デスクトップ版）の場合、2台のPCにインストールできます。全プラットフォームライセンス（旧・クロスデバイス版）を選ぶと、さらに3台のモバイルデバイスでも使用できます。' } },
  { '@type': 'Question', name: 'オフライン環境でも使える？', acceptedAnswer: { '@type': 'Answer', text: '基本的には使えます。ただし、ライセンス認証や一部のAI機能、アップデートの確認にはインターネット接続が必要です。' } },
  { '@type': 'Question', name: '買い切りプランだけでProツールは使える？', acceptedAnswer: { '@type': 'Answer', text: 'はい、使えます。現在はProツール（8種）がすべての買い切り（永久）ライセンスに標準で含まれており、Luminar Primeの契約は不要です。永続的に利用できます。' } },
  { '@type': 'Question', name: '一度Luminar Primeを契約したらProツールはずっと使える？', acceptedAnswer: { '@type': 'Answer', text: 'そもそもProツールはLuminar Primeの有無に関係なく、買い切りライセンスに標準で含まれ永続的に使えます。Luminar Primeが担うのは契約期間中の新機能アップデートとAIツールの無制限利用で、Primeが失効するとこれらのみ使えなくなります。アプリ本体とProツールはそのまま使い続けられます。' } },
  { '@type': 'Question', name: 'アップグレードパス（Upgrade Pass）はどこに行った？', acceptedAnswer: { '@type': 'Answer', text: 'アップグレードパス（Upgrade Pass）は現在、公式ストアで販売されていません。シーズンごとにパスを買い足していく方式は廃止され、年額サブスクのLuminar Primeに一本化されています。アップグレードパスが担っていた「新機能アップデート」と「生成AIの継続利用」は、現在はLuminar Primeが担当します。すでにアップグレードパスを購入済みの方は、その内容が失われることはありません。' } },
  { '@type': 'Question', name: 'エコシステムパス（Ecosystem Pass）は廃止されたの？', acceptedAnswer: { '@type': 'Answer', text: 'はい、エコシステムパス（Ecosystem Pass）も新規販売は終了し、Luminar Primeに統合されました。エコシステムパスの特典だったLuminar Mobile・クロスデバイス編集・Spaces（Webギャラリー）は、現在は買い切りの全プラットフォームライセンスやLuminar Primeの側に含まれる形になっています。' } },
  { '@type': 'Question', name: 'クロスデバイスライセンスという名前が見当たりません', acceptedAnswer: { '@type': 'Answer', text: '「クロスデバイス永続ライセンス」は名称が変わり、現在は「全プラットフォームライセンス」として販売されています。中身はPC2台＋モバイル3台で、Web版への対応も加わりました。旧名称で検索した場合も、指しているのは同じ系統のプランです。' } },
  { '@type': 'Question', name: '永久ライセンス デスクトップ版とデスクトップ専用ライセンスは同じ？', acceptedAnswer: { '@type': 'Answer', text: 'はい、同じプランです。以前は「永久ライセンス デスクトップ版」と表記されていましたが、現在の公式ストアでは「デスクトップ専用ライセンス」という名称になっています。PC2台で使える買い切りプランという内容は変わっていません。' } },
  { '@type': 'Question', name: 'Luminar Primeとは？', acceptedAnswer: { '@type': 'Answer', text: 'Luminar Primeは、旧アップグレードパス・旧エコシステムパスを置き換える形で登場した年額サブスクです。契約期間中の新機能アップデート、AIツール（GenErase・GenSwap・GenExpand・Restoration・AI Assistant）の無制限利用、プリセットなどのアセットライブラリ、Spacesが含まれます。任意のオプションで、契約しなくても買い切りの基本機能とProツール8種は永続的に使えます。' } },
  { '@type': 'Question', name: 'Luminar Neoの読み方は？', acceptedAnswer: { '@type': 'Answer', text: '「ルミナーネオ」と読みます。開発元のSkylumは「スカイラム」です。日本語の記事では「ルミナーネオ」「ルミナー」と表記されることもありますが、どれも同じソフトを指しています。' } },
  { '@type': 'Question', name: 'どこの国のソフト？開発元は？', acceptedAnswer: { '@type': 'Answer', text: 'ウクライナ発のSkylum（スカイラム）社が開発しています。もともとMac向けの写真編集ソフトから始まったメーカーで、Luminar 4、Luminar AIを経て現在のLuminar Neoに至ります。日本語表示に対応しており、日本の公式ストアから購入できます。' } },
  { '@type': 'Question', name: '夜景や星景写真の編集にも向いている？', acceptedAnswer: { '@type': 'Answer', text: '向いています。高感度撮影で乗ったノイズをNoiseless AIで抑えられるので、夜景のように暗所でISOを上げざるを得ない写真と相性がいいです。街灯やイルミネーションに光芒を足すMagic Light AIもあり、夜の写真に使える機能が揃っています。' } },
  { '@type': 'Question', name: '数百枚を一括で同じ設定にできる？', acceptedAnswer: { '@type': 'Answer', text: 'Lightroomのように「1枚で作った設定を選択した数百枚へ一括同期」という処理は得意ではありません。1枚ずつ丁寧に仕上げるスタイル向けのソフトです。撮影会の大量カットやタイムラプス素材のような均一処理が必要な場面では、Lightroomと併用するのが現実的です。' } },
  { '@type': 'Question', name: 'グラフィックボード（GPU）は必要？', acceptedAnswer: { '@type': 'Answer', text: 'OpenGL 3.3以降に対応したグラフィックカードが必要です。専用のグラボが必須というわけではなく、Apple SiliconのMacや内蔵GPUのノートPCでも動作します。ただしAI処理はGPUの性能に影響を受けるため、処理時間が気になる場合は体験版で実機の速度を確かめてから判断してください。' } },
  { '@type': 'Question', name: 'iPadやスマホでも使える？', acceptedAnswer: { '@type': 'Answer', text: '全プラットフォームライセンスとMaxライセンスなら、モバイルアプリを3台まで使えます。iOS（iPhone・iPad）、Android、ChromeOSに対応しており、PCとの間で編集データを同期できます。デスクトップ専用ライセンスはPCのみなので、iPadでも編集したい場合は上位プランを選ぶ必要があります。' } },
  { '@type': 'Question', name: 'コスパの良い買い方は？', acceptedAnswer: { '@type': 'Answer', text: `「Proツールを含む編集機能だけ使えればいい」という方は、デスクトップ専用ライセンス（旧・永久ライセンス デスクトップ版）だけの購入が最もコスパの良い選択です（セール時${priceWithRegular('desktop')}）。Proツール8種も標準で含まれ永続的に使えます。AIツールの継続利用や新機能アップデートが欲しい場合のみ、Luminar Primeを追加・更新する形になります。` } },
]

export default async function Page() {
  return (
    <>
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="faq-purchase" className="content-card card-padding article-body">
        <h2>Luminar Neoの購入・料金に関する質問</h2>
        <p>個別の疑問に答えるページです。全体像から把握したい場合は<Link href="/luminar/">Luminar Neoの完全ガイド</Link>をご覧ください。</p>
        {/* 各 FAQ に id を付与し、#faq-1 形式で個別の質問へ直接リンク・引用できるようにする。
            日本語の質問文をスラッグ化すると URL エンコードで読めなくなり、文言修正でリンクが壊れるため連番で固定 */}
        <div id="faq-1" className="faq-item">
          <dt className="faq-q">Luminar Neoの価格はいくら？</dt>
          <dd className="faq-a">
            Luminar Neoの価格は、選ぶプランによって変わります。現在は「デスクトップ専用ライセンス」「全プラットフォームライセンス」「Maxライセンス」の3種類が用意されていて（それぞれ旧称は「永久ライセンス デスクトップ版」「クロスデバイス永続ライセンス」「永久 Maxライセンス」）、モバイルアプリやCreative Libraryへのアクセスが含まれるかどうかで価格が異なります。現在のセール価格は、デスクトップ専用{priceWithRegular('desktop')}、全プラットフォーム{priceWithRegular('allPlatforms')}、Max{priceWithRegular('max')}です。セール価格は時期により変動します。
            <strong>重要：</strong>Proツール（Noiseless AI、HDR Mergeなど8種）は、現在すべての買い切りライセンスに標準搭載。追加購入なしで永続的に使えます。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/luminar-plan/">Luminar Neoの料金プラン詳細はこちら</Link>
          </dd>
        </div>
        <div id="faq-2" className="faq-item">
          <dt className="faq-q">Luminar Neoを安く買う方法はある？</dt>
          <dd className="faq-a">
            公式サイトでは定期的にクーポンコードが発行されています。また、年に数回開催されるセール時にはさらに割引率が高くなることもあるので、急ぎでなければセール情報もチェックしてみてください。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/sale-and-coupon-info/">セール・クーポン情報をチェックする</Link>
          </dd>
        </div>
        <div id="faq-3" className="faq-item">
          <dt className="faq-q">買い切りとLuminar Primeの違いは？</dt>
          <dd className="faq-a">
            Luminar Neoは買い切り（永久ライセンス）プランのみの販売となっています。一度購入すれば、Proツール（8種）を含む編集機能はずっと使い続けられます。
            年額サブスクのLuminar Prime（初年度{approxYen(PRIME.firstYear)}／2年目以降{approxYen(PRIME.renewal)}）は、以下を追加するオプションです。なお以前あったUpgrade Pass／Ecosystem Passは廃止され、Primeに一本化されています：
            <ul>
              <li><strong>新機能アップデート</strong>：Primeの契約期間中にリリースされる新機能・アップデートを受け取れます</li>
              <li><strong>生成AI機能の無制限利用</strong>：GenErase、GenSwap、GenExpand → 買い切りのみの場合は購入日から1年間利用可、以後はPrimeで更新</li>
              <li><strong>アセットライブラリとSpaces</strong>：プリセット・LUT・オーバーレイ・空素材、Webギャラリー</li>
            </ul>
            Primeが失効しても、アプリ本体とProツールはそのまま永続的に使えます。失効で止まるのは生成AIと以後のアップデートのみです。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/luminar-plan/">プラン形式の詳細を確認する</Link>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">合わなかった場合、返金できる？</dt>
          <dd className="faq-a">
            はい、購入から30日以内であれば返金を申請できます。いわゆる「30日間返金保証」がついているので、実際に使ってみて「思っていたのと違う」と感じた場合でも安心です。
            体験版と違って、購入後にすべての機能を試せるのが返金保証のメリットですね。
          </dd>
        </div>
        <div id="faq-25" className="faq-item">
          <dt className="faq-q">Luminar Neoの読み方は？</dt>
          <dd className="faq-a">
            「ルミナーネオ」と読みます。開発元のSkylumは「スカイラム」です。日本語の記事では「ルミナーネオ」「ルミナー」と表記されることもありますが、どれも同じソフトを指しています。
          </dd>
        </div>
        <div id="faq-26" className="faq-item">
          <dt className="faq-q">どこの国のソフト？開発元は？</dt>
          <dd className="faq-a">
            ウクライナ発のSkylum（スカイラム）社が開発しています。もともとMac向けの写真編集ソフトから始まったメーカーで、Luminar 4、Luminar AIを経て現在のLuminar Neoに至ります。日本語表示に対応しており、日本の公式ストアから購入できます。
          </dd>
        </div>
      </section>

      <section id="faq-trial" className="content-card card-padding article-body">
        <h2>体験版・導入前の不安</h2>
        <div id="faq-4" className="faq-item">
          <dt className="faq-q">無料体験版はある？</dt>
          <dd className="faq-a">
            あります。公式サイトから7日間の無料トライアルをダウンロードできます。クレジットカードの登録も不要で、メールアドレスだけでOK。
            基本的な操作感やインターフェースを確認するには十分な期間です。「自分のPCでちゃんと動くか」「操作感が合うか」をまず試してみてください。
            体験版ではProツールを含むすべての機能にフルアクセスできるので、購入前に一通りの機能を試せます。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/trial/">体験版のダウンロードと詳細について</Link>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">初心者でも使える？</dt>
          <dd className="faq-a">
            使えます。むしろLuminar Neoは、初心者でも直感的に操作できるように設計されたソフトです。
            Lightroomのように細かくパラメータを追い込むというより、AIが自動で良い感じに仕上げてくれるアプローチなので、「まず触ってみる」だけでも楽しめると思います。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/merit-demerit/">Luminar Neoのメリット・デメリットを見る</Link>
          </dd>
        </div>
      </section>

      <section id="faq-features" className="content-card card-padding article-body">
        <h2>機能・他ソフトとの違い</h2>
        <div id="faq-5" className="faq-item">
          <dt className="faq-q">Luminar Neoでは何ができる？</dt>
          <dd className="faq-a">
            Luminar Neoが得意なのは、AIを活用した写真編集です。空の置き換え、人物の肌補正、背景のぼかしなど、従来は手間がかかっていた作業をワンクリックでこなせます。
            一方で、写真の管理機能は最小限なので、大量の写真をカタログ的に整理したい方には向いていません。
          </dd>
        </div>
        <div id="faq-6" className="faq-item">
          <dt className="faq-q">Lightroomと何が違う？</dt>
          <dd className="faq-a">
            ざっくり言うと、Lightroomは「写真を管理しながら現像するソフト」、Luminar Neoは「編集に特化したソフト」です。日常的に大量の写真を扱うならLightroom、1枚1枚をしっかり仕上げたいならLuminar Neoという棲み分けになります。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/lightroom-compare/">Lightroomとの詳細比較はこちら</Link>
          </dd>
        </div>
        <div id="faq-7" className="faq-item">
          <dt className="faq-q">Lightroomと併用できる？</dt>
          <dd className="faq-a">
            できます。Luminar NeoはLightroom Classicのプラグインとして使えるので、Lightroomで管理している写真をLuminar Neoで編集し、また戻すという使い方が可能です。
            「どちらか一方」ではなく「いいとこ取り」したい方には、この併用スタイルがおすすめです。
          </dd>
        </div>
        <div id="faq-8" className="faq-item">
          <dt className="faq-q">Photoshopプラグインとして使える？</dt>
          <dd className="faq-a">
            はい、使えます。PhotoshopからLuminar Neoを呼び出して編集し、結果をPhotoshopに戻すことができます。
            Photoshopのレイヤー編集とLuminar NeoのAI機能を組み合わせたい方には便利な機能ですね。macOSの「写真」アプリの拡張機能としても使用できます。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">Proツール（拡張機能）は必要？</dt>
          <dd className="faq-a">
            <strong>用途によります。</strong>Proツール（旧称：拡張機能・エクステンション）は、高度なノイズ除去やHDR合成など、より専門的な編集機能です。
            嬉しいのは、<strong>現在はProツール8種すべてが買い切り（永久）ライセンスに標準で含まれている</strong>こと。Luminar Primeなどの追加購入は不要で、どの買い切りプランでも永続的に使えます。
            Proツール全8種：
            <ul>
              <li>Supersharp AI（シャープネス強化）</li>
              <li>Noiseless AI（ノイズ除去）</li>
              <li>Upscale AI（解像度アップ）</li>
              <li>Focus Stacking（深度合成）</li>
              <li>Background Removal AI（背景除去）</li>
              <li>HDR Merge（HDR合成）</li>
              <li>Magic Light AI（光の演出）</li>
              <li>Panorama Stitching（パノラマ合成）</li>
            </ul>
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/expand/">Proツール（拡張機能）の詳細と選び方</Link>
          </dd>
        </div>
        <div id="faq-27" className="faq-item">
          <dt className="faq-q">夜景や星景写真の編集にも向いている？</dt>
          <dd className="faq-a">
            向いています。高感度撮影で乗ったノイズをNoiseless AIで抑えられるので、夜景のように暗所でISOを上げざるを得ない写真と相性がいいです。街灯やイルミネーションに光芒を足すMagic Light AIもあり、夜の写真に使える機能が揃っています。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/expand/">Proツール8種でできることを見る</Link>
          </dd>
        </div>
      </section>

      <section id="faq-files" className="content-card card-padding article-body">
        <h2>対応ファイル・出力形式</h2>
        <div id="faq-9" className="faq-item">
          <dt className="faq-q">対応しているカメラは？</dt>
          <dd className="faq-a">
            Canon、Nikon、Sony、Fujifilmなど、主要カメラメーカーに幅広く対応しています。対応カメラのライブラリは定期的に更新されていますが、発売されたばかりの最新機種については対応が少し遅れることがあります。
            購入前に公式の対応カメラリストを確認しておくと安心です。
            <i className="fa-solid fa-arrow-right"></i> <a href="https://media.macphun.com/uploads/uploads/LuminarNeo/Luminar_Neo_1150_Supported_Cameras.pdf" target="_blank" rel="noopener">対応カメラ一覧（公式PDF）</a>
          </dd>
        </div>
        <div id="faq-10" className="faq-item">
          <dt className="faq-q">RAW現像もできる？</dt>
          <dd className="faq-a">
            はい、できます。Luminar Neoは独自の強力なRAWエンジンを搭載していて、RAW現像ソフトとしても十分に使えます。
            露出やホワイトバランスの調整はもちろん、AI機能と組み合わせた編集も可能です。
          </dd>
        </div>
        <div id="faq-11" className="faq-item">
          <dt className="faq-q">RAW以外（JPEG/HEIF/TIFF）も扱える？</dt>
          <dd className="faq-a">
            はい、扱えます。JPEG、TIFF、PNGはもちろん、iPhoneで撮影したHEIF形式にも対応しています。
            RAW現像ソフトというイメージが強いかもしれませんが、JPEGの簡単な補正にも普通に使えますよ。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">編集は非破壊？</dt>
          <dd className="faq-a">
            はい、非破壊編集に対応しています。元の写真ファイルを直接書き換えるのではなく、編集内容を別で保持する仕組みなので、いつでも元の状態に戻せます。
            試行錯誤しながら編集したい方にとっては、安心できるポイントですね。
          </dd>
        </div>
      </section>

      <section id="faq-performance" className="content-card card-padding article-body">
        <h2>動作環境・パフォーマンス</h2>
        <div id="faq-12" className="faq-item">
          <dt className="faq-q">対応OS・推奨スペックは？</dt>
          <dd className="faq-a">
            WindowsとMacの両方に対応しています。Macの場合はmacOS 12以降（macOS 10.13〜10.15は非対応）、Windowsの場合はWindows 10（バージョン1909以降、64bitのみ）またはWindows 11が必要です。
            CPUはIntel Core i5の第8世代以上、またはAMD Ryzen 5以上が求められます。メモリは最低8GBですが、AI処理を快適に使うなら16GB以上を推奨します。グラフィックカードはOpenGL 3.3以降対応が必要です。
            ストレージは10GBの空き容量が必要で、SSDだとより快適に動作します。なおmacOS 12を導入できるMacが対象になるため、それ以前のOSしか動かない古いMacでは利用できません。
          </dd>
        </div>
        <div id="faq-13" className="faq-item">
          <dt className="faq-q">動作が重いことはある？</dt>
          <dd className="faq-a">
            正直に言うと、あります。特にAI機能を使った処理は負荷が高いので、PCのスペックによっては待ち時間が発生します。
            写真1枚の編集なら気にならなくても、連続で処理すると重さを感じることも。このあたりは実際の使用感として知っておいたほうがいいポイントです。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/merit-demerit/">動作の重さ含め、デメリットを正直に解説</Link>
          </dd>
        </div>
        <div id="faq-14" className="faq-item">
          <dt className="faq-q">起動しない／落ちることはある？</dt>
          <dd className="faq-a">
            環境によっては起こり得ます。グラフィックドライバが古い、メモリが不足している、他のソフトと競合しているなど、原因はさまざまです。
            頻繁に起こるわけではありませんが、「絶対に落ちない」とは言えません。公式サポートページにトラブルシューティングがあるので、問題が起きたらまずそちらを確認してみてください。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/merit-demerit/">安定性に関する情報も含めて確認する</Link>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">Windows / Macで挙動は違う？</dt>
          <dd className="faq-a">
            基本的な機能や操作性に違いはありません。ただ、細かい部分ではOSごとの差が出ることもあります。
            たとえばApple Silicon（M1/M2/M3/M4）搭載Macではネイティブ対応が進んでいて、比較的軽快に動作する傾向があります。Windows 11でも問題なく動きますが、グラフィックドライバの更新は忘れずに。
          </dd>
        </div>
        <div id="faq-28" className="faq-item">
          <dt className="faq-q">数百枚を一括で同じ設定にできる？</dt>
          <dd className="faq-a">
            Lightroomのように「1枚で作った設定を選択した数百枚へ一括同期」という処理は得意ではありません。1枚ずつ丁寧に仕上げるスタイル向けのソフトです。撮影会の大量カットやタイムラプス素材のような均一処理が必要な場面では、Lightroomと併用するのが現実的です。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/merit-demerit/">長期使用で感じた弱点をまとめて見る</Link>
          </dd>
        </div>
        <div id="faq-29" className="faq-item">
          <dt className="faq-q">グラフィックボード（GPU）は必要？</dt>
          <dd className="faq-a">
            OpenGL 3.3以降に対応したグラフィックカードが必要です。専用のグラボが必須というわけではなく、Apple SiliconのMacや、内蔵GPUのノートPCでも動作します。ただしAI処理はGPUの性能に影響を受けるため、処理時間が気になる場合は体験版で実機の速度を確かめてから判断してください。
          </dd>
        </div>
      </section>

      <section id="faq-license" className="content-card card-padding article-body">
        <h2>購入後・ライセンス関連</h2>
        <div id="faq-15" className="faq-item">
          <dt className="faq-q">何台のPCにインストールできる？</dt>
          <dd className="faq-a">
            デスクトップ専用ライセンス（旧・永久ライセンス デスクトップ版）の場合、2台のPCにインストールできます。自宅のデスクトップと持ち運び用のノートPCなど、使い分けている方でも1ライセンスでカバーできるのは嬉しいポイントです。
            全プラットフォームライセンス（旧・クロスデバイス版）を選ぶと、さらに3台のモバイルデバイスでも使用できます。
          </dd>
        </div>
        <div id="faq-16" className="faq-item">
          <dt className="faq-q">機種変更したら再インストールできる？</dt>
          <dd className="faq-a">
            できます。PCを買い替えた場合でも、新しいデバイスにアプリをダウンロードし、Skylumアカウントでログインすれば使えるようになります。
            すでにすべてのライセンス席が使用中なら、古いデバイスのアプリを非アクティブ化してから新しいデバイスでアクティブ化する形です。操作はアカウント管理画面から数クリックで済みます。
          </dd>
        </div>
        <div id="faq-17" className="faq-item">
          <dt className="faq-q">オフライン環境でも使える？</dt>
          <dd className="faq-a">
            基本的には使えます。常時インターネット接続が必要なわけではないので、オフラインの環境でも編集作業は可能です。
            ただし、ライセンス認証や一部のAI機能、アップデートの確認にはインターネット接続が必要になります。完全オフラインで使い続けるのは難しいですが、一時的にネットがない環境でも作業は止まりません。
          </dd>
        </div>
        <div id="faq-18" className="faq-item">
          <dt className="faq-q">Luminar Primeはどこで買える？</dt>
          <dd className="faq-a">
            Skylum公式サイトから購入できます。すでに買い切りライセンスを持っている方は、Skylumアカウント（<a href="https://skylum.evyy.net/7a3mLg" target="_blank" rel="noopener nofollow">https://skylum.com/account/my-software</a>）にログインすると、Luminar Primeのみを追加購入するオファーが表示されることがあります。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">購入後のダウンロードや有効化は？</dt>
          <dd className="faq-a">
            購入が完了すると、インストーラーが自動でダウンロードされます。あわせて、登録したメールアドレス宛にダウンロードリンクとアクティベーション手順が届くので、そちらからでもOKです。ダウンロードリンクはSkylumアカウント内でいつでも確認できるので、再インストール時も困りません。
            アクティベーションは、アプリ内でSkylumアカウントにログインするだけ。ライセンスキーやアクティベーションコードの入力は不要です。購入時と同じメールアドレスでログインすれば、自動的にライセンスが有効化されます。
            GoogleやAppleなどの外部アカウントで登録した場合は、該当のボタンからサインインしてください。もし別のメールアドレスで購入してしまった場合でも、「My Software &gt; App isn&apos;t showing?」セクションからアカウント統合ができますよ。
          </dd>
        </div>
        <div id="faq-30" className="faq-item">
          <dt className="faq-q">iPadやスマホでも使える？</dt>
          <dd className="faq-a">
            全プラットフォームライセンスとMaxライセンスなら、モバイルアプリを3台まで使えます。iOS（iPhone・iPad）、Android、ChromeOSに対応しており、PCとの間で編集データを同期できます。デスクトップ専用ライセンスはPCのみなので、iPadでも編集したい場合は上位プランを選ぶ必要があります。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/luminar-plan/">プランごとの対応デバイスを確認する</Link>
          </dd>
        </div>
      </section>

      <section id="faq-pro" className="content-card card-padding article-body">
        <h2>Proツール・Luminar Primeに関する質問</h2>
        <div id="faq-19" className="faq-item">
          <dt className="faq-q">買い切りプランだけでProツールは使える？</dt>
          <dd className="faq-a">
            <strong>はい、使えます。</strong>現在は、Proツール（旧：拡張機能・エクステンション）8種すべてが買い切りプランに標準搭載。
            Luminar Primeなどの追加購入は不要で、どの買い切りライセンスでも永続的に利用できます。
          </dd>
        </div>
        <div id="faq-20" className="faq-item">
          <dt className="faq-q">一度Luminar Primeを契約したらProツールはずっと使える？</dt>
          <dd className="faq-a">
            そもそも<strong>ProツールはLuminar Primeの有無に関係なく、買い切りライセンスで永続的に使えます</strong>。Luminar Primeを契約・更新しなくても、Proツールが消えることはありません。
            Luminar Primeが担うのは、契約期間中の新機能アップデートとAIツール（GenErase、GenSwap、GenExpand、Restoration、AI Assistant）の無制限利用です。Primeが失効すると、これらのみ使えなくなります。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">コスパの良い買い方は？</dt>
          <dd className="faq-a">
            「Proツールを含む編集機能だけ使えればいい」という方は、<strong>デスクトップ専用ライセンス（旧・永久ライセンス デスクトップ版）だけ</strong>を購入するのが最もコスパの良い選択です。
            セール時なら{priceWithRegular('desktop')}で、Proツール8種も標準で含まれて永続的に使えます。5年使っても追加費用はかかりません。
            AIツールを継続して使いたい場合や、新機能アップデートを受け取りたい場合のみ、Luminar Primeを追加・更新する形になります。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/luminar-plan/">料金プランの詳細とコストシミュレーション</Link>
          </dd>
        </div>
      </section>

      <section id="faq-legacy" className="content-card card-padding article-body">
        <h2>旧プラン名・旧パスとの対応（名称変更まとめ）</h2>
        <p>Luminar Neoはプラン名とオプションの体系が過去に何度か変わっています。検索して出てくる解説記事には旧名称のまま書かれているものが多いので、対応関係をここで整理しておきます。</p>
        <div className="m-table-wrap">
          <table className="m-table">
            <thead>
              <tr>
                <th>旧名称</th>
                <th>現在の名称・扱い</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>永久ライセンス デスクトップ版</td>
                <td>デスクトップ専用ライセンス（内容は同じ・PC2台）</td>
              </tr>
              <tr>
                <td>クロスデバイス永続ライセンス</td>
                <td>全プラットフォームライセンス（PC2台＋モバイル3台、Web版にも対応）</td>
              </tr>
              <tr>
                <td>永久 Maxライセンス</td>
                <td>Maxライセンス（Luminar Primeが1年分同梱）</td>
              </tr>
              <tr>
                <td>アップグレードパス（Upgrade Pass）</td>
                <td><span className="text-warn">廃止</span> → Luminar Primeに統合</td>
              </tr>
              <tr>
                <td>エコシステムパス（Ecosystem Pass）</td>
                <td><span className="text-warn">廃止</span> → Luminar Primeに統合</td>
              </tr>
              <tr>
                <td>拡張機能・エクステンション（別売り）</td>
                <td>Proツール8種として全買い切りプランに標準搭載</td>
              </tr>
              <tr>
                <td>月額・年額サブスクプラン</td>
                <td><span className="text-warn">新規販売終了</span> → 買い切り＋Luminar Primeのみ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="faq-21" className="faq-item">
          <dt className="faq-q">アップグレードパス（Upgrade Pass）はどこに行った？</dt>
          <dd className="faq-a">
            アップグレードパスは現在、公式ストアで販売されていません。シーズンごとにパスを買い足していく方式そのものが廃止され、年額サブスクの<strong>Luminar Prime</strong>に一本化されました。
            アップグレードパスが担っていた「新機能アップデート」と「生成AIの継続利用」は、現在はPrimeが担当します。すでに購入済みの方は、その内容が失われることはありません。
          </dd>
        </div>
        <div id="faq-22" className="faq-item">
          <dt className="faq-q">エコシステムパス（Ecosystem Pass）は廃止されたの？</dt>
          <dd className="faq-a">
            はい、エコシステムパスも新規販売は終了し、Luminar Primeに統合されました。
            エコシステムパスの特典だったLuminar Mobile・クロスデバイス編集・Spaces（Webギャラリー）は、現在は買い切りの全プラットフォームライセンスやPrimeの側に含まれる形になっています。
          </dd>
        </div>
        <div id="faq-23" className="faq-item">
          <dt className="faq-q">クロスデバイスライセンスという名前が見当たりません</dt>
          <dd className="faq-a">
            「クロスデバイス永続ライセンス」は名称が変わり、現在は<strong>全プラットフォームライセンス</strong>として販売されています。
            中身はPC2台＋モバイル3台で、Web版への対応も加わりました。旧名称で検索した場合も、指しているのは同じ系統のプランです。
          </dd>
        </div>
        <div id="faq-24" className="faq-item">
          <dt className="faq-q">永久ライセンス デスクトップ版とデスクトップ専用ライセンスは同じ？</dt>
          <dd className="faq-a">
            はい、同じプランです。以前は「永久ライセンス デスクトップ版」と表記されていましたが、現在の公式ストアでは<strong>デスクトップ専用ライセンス</strong>という名称になっています。PC2台で使える買い切りプランという内容は変わっていません。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">Luminar Primeとは？</dt>
          <dd className="faq-a">
            旧アップグレードパス・旧エコシステムパスを置き換える形で登場した<strong>年額サブスク</strong>です。契約期間中の新機能アップデート、AIツール（GenErase・GenSwap・GenExpand・Restoration・AI Assistant）の無制限利用、プリセットなどのアセットライブラリ、Spacesが含まれます。
            任意のオプションなので、契約しなくても買い切りの基本機能とProツール8種は永続的に使えます。
            <i className="fa-solid fa-arrow-right"></i> <Link href="/luminar/luminar-plan/">Luminar Primeを含む料金体系の詳細はこちら</Link>
          </dd>
        </div>
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
