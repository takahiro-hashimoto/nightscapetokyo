import type { LuminarArticle } from './types'

/**
 * Static article store — pre-Supabase migration.
 * Replace with DB fetch after migration.
 */

const ARTICLES: LuminarArticle[] = [
  {
    slug: 'luminar-plan',
    title: 'Luminar Neoの料金プランを徹底解説【2026年版】買い切りとサブスクどちらが得？',
    description:
      'Luminar Neoの買い切り・Upgrade Pass・Ecosystem Passの違いと、コスパ最強の購入方法を解説。何年使うとどちらが得か、プランシミュレーターも紹介。',
    publishedAt: '2026-01-15T10:00:00+09:00',
    updatedAt: '2026-04-01T10:00:00+09:00',
    category: '料金・購入',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/plan-image.jpg',
      alt: 'Luminar Neoの料金プラン比較',
      width: 1200,
      height: 675,
    },
    tags: ['料金', '買い切り', 'プラン'],
    relatedSlugs: ['sale-and-coupon-info', 'merit-demerit', 'lightroom-compare'],
    content: `
<p>Luminar Neoの料金体系は「<strong>買い切り＋任意のパス（年額オプション）</strong>」という構造になっています。</p>
<p>サブスク一択のAdobe製品と違い、買い切り版で基本機能を永続利用しつつ、必要な時だけパスを追加するという柔軟な購入スタイルが取れるのが大きな特徴です。</p>

<h2>Luminar Neoの料金体系まとめ</h2>

<p>まず全体像を把握しましょう。Luminar Neoには大きく2つの費用要素があります。</p>

<h3>買い切りライセンス（3グレード）</h3>

<p>買い切りライセンスは以下の3グレードが用意されています。</p>
<ul>
  <li><strong>デスクトップ版</strong>：約¥18,000（1台）</li>
  <li><strong>クロスデバイス版</strong>：約¥24,000（2台まで）</li>
  <li><strong>Max版</strong>：約¥27,000（2台＋モバイル連携）</li>
</ul>
<p>基本的なRAW現像やAI補正（Sky AI、Accent AIなど）は買い切りに含まれます。</p>

<h3>パス（年額オプション）</h3>

<p>パスは「Proツール」と「生成AI機能」を利用するための年額オプションです。</p>
<ul>
  <li><strong>Upgrade Pass</strong>：年額約¥7,400（Proツール全種＋アップデート）</li>
  <li><strong>Ecosystem Pass</strong>：年額約¥10,400（Upgrade Pass＋生成AI機能）</li>
</ul>
<p>パスを1年購入するとProツールが永続取得できる仕組みになっています。そのため「1年だけパスを契約してProツールをゲットし、翌年は更新しない」という使い方も可能です。</p>

<h2>コスパ最強の買い方はどれ？</h2>

<p>多くのユーザーが選ぶのは「<strong>クロスデバイス版 + Upgrade Pass（1年）</strong>」の組み合わせです。</p>
<p>初年度合計：約¥31,400で、</p>
<ul>
  <li>基本機能が永続利用可能</li>
  <li>Proツール（ノイズ除去AI・超解像AI・HDR合成など）が永続取得</li>
  <li>2台のPCで使用可能</li>
</ul>
<p>翌年以降はパスを更新しなくても基本機能＋Proツールは使い続けられます。</p>

<h3>生成AI機能が必要な場合</h3>
<p>GenErase・GenSwap・GenExpandなどの生成AI機能を使いたい場合は、Ecosystem Passが必要です。ただし生成AIはパス加入中のみ利用可能なため、更新が必要になる点は注意してください。</p>

<h2>Lightroomとのコスト比較（3年間）</h2>

<p>Lightroomフォトプランと3年間のコストを比較してみます。</p>
<ul>
  <li><strong>Luminar Neo</strong>（クロスデバイス＋パス1年）：約¥31,400（初年度のみ）</li>
  <li><strong>Lightroom フォトプラン</strong>：約¥14,000×3年＝約¥42,000</li>
</ul>
<p>3年間の合計ではLuminar Neoが約¥10,000以上お得になります。</p>
<p>ただし、Lightroomには優秀な写真管理機能やLightroomMobileなど独自の強みがあります。コストだけで判断せず、使用目的に合わせて選ぶことが大切です。</p>

<h2>よくある疑問</h2>

<h3>パスを更新しないとどうなる？</h3>
<p>パス未加入になると生成AI機能は使えなくなりますが、Proツールは手元に残ります。基本機能＋Proツールで十分という方は更新しなくてもOKです。</p>

<h3>セール時に購入するとどれくらいお得？</h3>
<p>ブラックフライデーなどのセール時には30〜50%オフになることもあります。急ぎでなければセール時期を狙うのが賢い選択です。詳しくはセール情報の記事を参照してください。</p>

<h3>返金保証はある？</h3>
<p>購入から30日間は全額返金保証があります。試してみて合わなければ返金申請ができます。</p>
`,
  },
  {
    slug: 'merit-demerit',
    title: 'Luminar Neoのメリット・デメリット｜1年以上使ったリアルな評価',
    description:
      'Luminar Neoのメリット・デメリットを実際に1年以上使った上で正直にレビュー。向いている人・向いていない人の特徴もまとめて解説します。',
    publishedAt: '2026-01-20T10:00:00+09:00',
    updatedAt: '2026-04-01T10:00:00+09:00',
    category: 'レビュー',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/about-luminar-neo.jpg',
      alt: 'Luminar Neoのメリット・デメリット',
      width: 1200,
      height: 675,
    },
    tags: ['レビュー', 'メリット', 'デメリット'],
    relatedSlugs: ['luminar-plan', 'lightroom-compare', 'voice'],
    content: `
<p>Luminar Neoを実際に1年以上使ってきた上で、メリット・デメリットを正直にレビューします。</p>
<p>結論から言うと、<strong>AI編集で時短したい人・失敗写真を救いたい人</strong>にとっては非常に優秀なソフトです。一方で、「撮って出しが好き」「写真管理を重視する」という方には合わない部分もあります。</p>

<h2>Luminar Neoの主なメリット</h2>

<h3>AI機能が強力で時短効果が高い</h3>
<p>Sky AI（空の置き換え）、Accent AI（全体補正）、Noiseless AI（ノイズ除去）など、強力なAI機能が豊富です。手動でマスクを切る作業が大幅に減り、編集時間を50〜70%短縮できることもあります。</p>

<h3>買い切りで永続利用できる</h3>
<p>サブスクと違い、一度購入すれば基本機能は永続利用可能。「毎月の費用が発生しないので精神的に楽」という声が多いです。</p>

<h3>失敗写真を救える可能性が高い</h3>
<p>露出ミス・ノイズが多い写真・空が白飛びした写真など、撮影ミスをAIで補正できるケースが増えました。特に夜景撮影者にとって強い味方です。</p>

<h3>LightroomやPhotoshopのプラグインとして使える</h3>
<p>今のワークフローを変えずに、特定の編集だけLuminar Neoに任せるという使い方ができます。いきなり完全移行しなくていいので敷居が低いです。</p>

<h2>Luminar Neoのデメリット・注意点</h2>

<h3>動作が重い場合がある</h3>
<p>AI処理を多用するため、スペックが低いPCでは動作が重くなります。推奨環境はRAM 16GB以上・SSD搭載。古いPCの場合は事前に体験版で確認することをおすすめします。</p>

<h3>写真管理機能が弱い</h3>
<p>Lightroomほどの写真管理・カタログ機能はありません。大量の写真を効率的に管理したい方にはLightroomの方が向いています。</p>

<h3>最新カメラへの対応が遅れることがある</h3>
<p>新しいカメラのRAWファイルへの対応がAdobeより遅れることがあります。発売直後のカメラで使いたい場合は注意が必要です。</p>

<h3>生成AI機能はパス加入が必要</h3>
<p>GenErase・GenSwapなどの生成AI機能はEcosystem Passに加入している間のみ利用可能。パスを更新しないと使えなくなる点は把握しておきましょう。</p>

<h2>こんな人に向いている・向いていない</h2>

<h3>向いている人の特徴</h3>
<ul>
  <li>AI編集で時短したい</li>
  <li>失敗写真をなるべく救いたい</li>
  <li>サブスク疲れで買い切りを探している</li>
  <li>夜景・風景写真が多い</li>
  <li>1つのソフトで現像〜レタッチを完結させたい</li>
</ul>

<h3>向いていない人の特徴</h3>
<ul>
  <li>撮って出しや基本補正のみで十分</li>
  <li>大量の写真を効率的に管理したい</li>
  <li>今のソフトで十分満足している</li>
  <li>最新カメラへの即時RAW対応が必須</li>
</ul>

<h2>まとめ：試す価値はある？</h2>

<p>結論として、<strong>7日間の無料体験版があるので、まずは試すのが一番</strong>です。購入後も30日間の全額返金保証があるため、実質リスクなしで試せます。</p>
<p>特に「夜景写真のノイズを手軽に消したい」「旅行写真の空をもっと青くしたい」という明確な目的がある方には、強くおすすめできます。</p>
`,
  },
  {
    slug: 'lightroom-compare',
    title: 'Luminar NeoとLightroomの違いを徹底比較｜どちらを選ぶべきか',
    description:
      'Luminar NeoとLightroomを料金・機能・使い勝手で徹底比較。コスト面・AI機能・写真管理など各観点からどちらが向いているかを解説します。',
    publishedAt: '2026-01-25T10:00:00+09:00',
    updatedAt: '2026-04-01T10:00:00+09:00',
    category: '比較',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/plan-image.jpg',
      alt: 'Luminar NeoとLightroom比較',
      width: 1200,
      height: 675,
    },
    tags: ['比較', 'Lightroom', '料金'],
    relatedSlugs: ['luminar-plan', 'merit-demerit', 'sale-and-coupon-info'],
    content: `
<p>「Luminar NeoとLightroom、どちらを選べばいいの？」という疑問は非常によくあります。</p>
<p>結論から言うと、<strong>コスト重視・AI編集重視ならLuminar Neo、写真管理・現場プロならLightroom</strong>という判断軸になります。</p>

<h2>料金コストの比較</h2>

<p>まず最もわかりやすい料金面から比較します。</p>

<h3>3年間の総コスト比較</h3>
<p>Lightroomフォトプラン（Lightroom + Photoshop）は月額約¥1,180（年額¥14,000）のサブスクです。</p>
<ul>
  <li><strong>Lightroom</strong>：3年間で約¥42,000</li>
  <li><strong>Luminar Neo</strong>（クロスデバイス＋パス1年）：約¥31,400（それ以降は更新なし可）</li>
</ul>
<p>3年以上使い続けるほどLuminar Neoの優位性が高まります。</p>

<h3>パス更新しない場合</h3>
<p>Luminar Neoはパスを更新しなければ追加費用ゼロ。基本機能＋Proツールで十分な方は実質買い切りと同じコスト感で使えます。</p>

<h2>機能面での違い</h2>

<h3>AI機能：Luminar Neoが優位</h3>
<p>Sky AI、Accent AI、Noiseless AI、GenErase、GenSwapなど、Luminar NeoのAI機能は非常に充実しています。特に被写体の自動認識マスクや空の置き換えは業界トップクラスの精度です。</p>

<h3>写真管理：Lightroomが優位</h3>
<p>Lightroomのカタログ管理、スマートコレクション、Lightroom Mobileとの同期など、大量の写真を体系的に管理する機能はLightroomの方が圧倒的に優れています。</p>

<h3>RAW現像の精度</h3>
<p>どちらもプロ品質のRAW現像が可能です。ただし最新カメラへの対応スピードはAdobeが速い傾向があります。</p>

<h2>使い勝手の比較</h2>

<h3>UI・操作感</h3>
<p>Luminar NeoはAI機能をワンクリックで適用できる直感的なUIが特徴。Lightroomはツールが豊富な分、習得に時間がかかります。</p>

<h3>他ソフトとの連携</h3>
<p>Luminar NeoはLightroom・PhotoshopのプラグインとしてもOK。「LightroomのカタログからLuminar Neoで仕上げ」という使い方も可能です。</p>

<h2>どちらを選ぶべきか？</h2>

<h3>Luminar Neoがおすすめの人</h3>
<ul>
  <li>AI機能をフル活用して編集を効率化したい</li>
  <li>サブスク費用を抑えたい</li>
  <li>夜景・風景・ポートレートが主な被写体</li>
  <li>写真管理はOSのフォルダで十分</li>
</ul>

<h3>Lightroomがおすすめの人</h3>
<ul>
  <li>大量の写真を効率的に管理したい</li>
  <li>常に最新のRAW対応が必要</li>
  <li>モバイルとの同期が欠かせない</li>
  <li>プロとして仕事で使っている</li>
</ul>

<h2>両方を使う選択肢も</h2>

<p>実は「LightroomとLuminar Neoを併用する」というユーザーも多くいます。Lightroomで管理・基本現像をして、特定の編集だけLuminar NeoのプラグインでAI処理を適用するというワークフローです。</p>
`,
  },
  {
    slug: 'sale-and-coupon-info',
    title: 'Luminar Neoのセール時期とクーポン情報まとめ【2026年最新版】',
    description:
      'Luminar Neoのセール時期（ブラックフライデー・サマーセールなど）と当サイト限定クーポンコードを紹介。安く買うための最新情報をまとめました。',
    publishedAt: '2026-02-01T10:00:00+09:00',
    updatedAt: '2026-04-08T10:00:00+09:00',
    category: 'セール・クーポン',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/luminar-neo-sale.jpg',
      alt: 'Luminar Neoのセール情報',
      width: 1200,
      height: 675,
    },
    tags: ['セール', 'クーポン', '割引'],
    relatedSlugs: ['luminar-plan', 'merit-demerit', 'trial'],
    content: `
<p>Luminar Neoは年間を通じて複数のセールを実施しています。タイミングさえ合えば、定価より<strong>30〜50%オフ</strong>で購入できます。</p>
<p>このページでは、過去のセール傾向・当サイト限定クーポンコード・返金保証の仕組みをまとめて解説します。</p>

<h2>Luminar Neoの主なセール時期</h2>

<p>Skylumは毎年ほぼ同じ時期にセールを実施しています。以下が主なセール時期です。</p>

<h3>大型セール（30〜50%オフ）</h3>
<ul>
  <li><strong>ブラックフライデー（11月末）</strong>：年間最大のセール。40〜50%オフになることも</li>
  <li><strong>サイバーマンデー（12月初旬）</strong>：ブラックフライデーに続く大型セール</li>
  <li><strong>アニバーサリーセール（5〜6月頃）</strong>：Skylum創業記念セール</li>
</ul>

<h3>中型セール（20〜30%オフ）</h3>
<ul>
  <li><strong>サマーセール（7〜8月）</strong>：夏の恒例セール</li>
  <li><strong>スプリングセール（4月頃）</strong>：春のセール</li>
  <li><strong>年末年始セール（12月末〜1月）</strong></li>
</ul>

<h3>不定期セール</h3>
<p>新機能リリース記念・新バージョン発表時など、不定期にセールが実施されることもあります。公式サイトやメルマガをチェックしておくとよいでしょう。</p>

<h2>当サイト限定クーポンコード</h2>

<p>当サイト（LUMINAR NEO GUIDE）経由で使える限定クーポンコードをご用意しています。</p>
<ul>
  <li><strong>クーポンコード</strong>：<code>nightscape10</code></li>
  <li><strong>割引率</strong>：10%OFF</li>
  <li><strong>セールとの併用</strong>：セールと重複適用できる場合があります</li>
</ul>
<p>購入画面のクーポンコード入力欄に入力してご利用ください。</p>

<h2>返金保証について</h2>

<p>Luminar Neoには<strong>購入から30日間の全額返金保証</strong>が付いています。</p>
<p>つまり「まず購入して実際に使ってみる→気に入らなければ返金申請」というリスクフリーな試し方も可能です。体験版だと7日間しか試せない機能も、返金保証期間を利用すれば30日間じっくり試せます。</p>

<h2>セールを逃したらどうする？</h2>

<h3>すぐ買うべき場合</h3>
<p>「今すぐ使いたい」という場合は、クーポンコードを活用して購入するのがベストです。返金保証もあるので安心です。</p>

<h3>待てる場合</h3>
<p>急ぎでないなら次のセール時期を狙うのが賢い選択。特にブラックフライデーの割引率は大きいので、タイミングが合えば待つ価値があります。</p>
`,
  },
  {
    slug: 'trial',
    title: 'Luminar Neo体験版のダウンロード方法・製品版との違い【7日間無料】',
    description:
      'Luminar Neoの無料体験版（7日間）のダウンロード手順と、製品版との機能の違いをわかりやすく解説。試す前に知っておくべきポイントもまとめています。',
    publishedAt: '2026-02-05T10:00:00+09:00',
    updatedAt: '2026-04-01T10:00:00+09:00',
    category: '使い方',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/about-luminar-neo.jpg',
      alt: 'Luminar Neo体験版ダウンロード',
      width: 1200,
      height: 675,
    },
    tags: ['体験版', '無料', 'ダウンロード'],
    relatedSlugs: ['merit-demerit', 'luminar-plan', 'sale-and-coupon-info'],
    content: `
<p>Luminar Neoには<strong>7日間の無料体験版</strong>があります。クレジットカードの登録不要で試せるので、購入前に必ず体験版を使ってみることをおすすめします。</p>

<h2>体験版のダウンロード手順</h2>

<p>体験版のダウンロードはとても簡単です。</p>

<h3>ステップ1：公式サイトにアクセス</h3>
<p>Skylumの公式サイトにアクセスして「無料体験」ボタンをクリックします。</p>

<h3>ステップ2：メールアドレスを登録</h3>
<p>メールアドレスとパスワードを入力してSkylumアカウントを作成します。クレジットカードの登録は不要です。</p>

<h3>ステップ3：インストーラーをダウンロード</h3>
<p>WindowsまたはMac用のインストーラーをダウンロードしてインストールします。</p>

<h3>ステップ4：アカウントでログインして使用開始</h3>
<p>Luminar Neoを起動してSkylumアカウントでログインすれば、7日間の体験がスタートします。</p>

<h2>体験版と製品版の違い</h2>

<h3>体験版でできること</h3>
<ul>
  <li>基本的なRAW現像・補正</li>
  <li>Sky AI、Accent AI、Portrait AI など主要AI機能</li>
  <li>画像の書き出し（透かしなし）</li>
  <li>LightroomプラグインとしてのNEO利用</li>
</ul>

<h3>体験版でできないこと</h3>
<ul>
  <li>体験期間（7日間）を超えての使用</li>
  <li>Proツール（ノイズ除去AI・超解像AIなど）※パス購入が必要</li>
  <li>生成AI機能（GenErase・GenSwapなど）※Ecosystem Pass購入が必要</li>
</ul>

<h2>体験版を使う前に知っておくべきこと</h2>

<h3>動作確認が最重要</h3>
<p>Luminar NeoはAI処理を多用するため、PCのスペックによっては動作が重くなります。体験版で自分のPCで問題なく動くか確認してから購入を決めましょう。</p>

<h3>7日間をフル活用する</h3>
<p>体験版は起動してからカウントが始まります。実際に使いたい機能（Sky AI、ポートレート補正など）を試す時間を確保してから開始するのがおすすめです。</p>

<h3>30日間返金保証も活用できる</h3>
<p>体験版で物足りなかった場合は、製品版を購入して30日間の返金保証期間中にじっくり試すという方法もあります。体験版（7日）→製品版（30日返金保証）を合わせると、実質37日間リスクなしで試せます。</p>
`,
  },
  {
    slug: 'voice',
    title: 'Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態',
    description:
      'Luminar Neoの実際の口コミ・評判を良い面・悪い面に分けて整理。SNSや購入者レビューから見えてきた実態と、購入前に知っておくべきポイントをまとめました。',
    publishedAt: '2026-02-10T10:00:00+09:00',
    updatedAt: '2026-04-01T10:00:00+09:00',
    category: 'レビュー',
    featuredImage: {
      src: 'https://nightscape.tokyo/luminar/wp-content/uploads/2026/01/about-luminar-neo.jpg',
      alt: 'Luminar Neoの口コミ・評判',
      width: 1200,
      height: 675,
    },
    tags: ['口コミ', '評判', 'レビュー'],
    relatedSlugs: ['merit-demerit', 'trial', 'luminar-plan'],
    content: `
<p>Luminar Neoを実際に使っているユーザーの口コミ・評判をSNSやレビューサイトで調査した結果をまとめました。</p>
<p>良い口コミだけでなく悪い口コミも正直に紹介しますので、購入前の参考にしてください。</p>

<h2>良い口コミ・高評価なポイント</h2>

<h3>AI機能が直感的で使いやすい</h3>
<p>「Sky AIで空の置き換えが一瞬でできる」「Noiseless AIでノイズが綺麗に消えた」など、AI機能の精度と使いやすさを評価する声が多いです。</p>

<h3>買い切りで安心感がある</h3>
<p>「Adobeのサブスクが高くて乗り換えた」「買い切りなので毎月課金の心配がない」というコスト面の評価も目立ちます。</p>

<h3>夜景・風景写真との相性が良い</h3>
<p>「夜景写真のノイズ処理が劇的に改善された」「HDR機能が素晴らしい」など、夜景・風景写真を撮るユーザーからの評価が特に高いです。</p>

<h3>失敗写真を救える</h3>
<p>「ピンぼけ気味の写真がAIで修復できた」「露出ミスした写真が使えるレベルになった」という声があります。</p>

<h2>悪い口コミ・低評価なポイント</h2>

<h3>動作が重い・クラッシュすることがある</h3>
<p>最も多い不満がこれです。「古いPCだと動作がカクカク」「高負荷の処理中に落ちることがある」という声があります。スペックの高いPCでは問題ないケースが多いようです。</p>

<h3>写真管理機能が物足りない</h3>
<p>「Lightroomのような体系的な管理ができない」「カタログ機能が弱い」という声があります。Lightroom経験者には特に不満に感じやすいポイントです。</p>

<h3>日本語サポートが弱い</h3>
<p>「公式サポートの日本語対応が遅い」「マニュアルが英語のみの部分がある」という声があります。</p>

<h3>生成AI機能はパス加入が必要</h3>
<p>「買い切り版だと思ったら生成AIは別料金だった」という誤解からの不満も見られます。購入前に料金体系を理解しておくことが重要です。</p>

<h2>口コミから見えてきた総評</h2>

<h3>こんな人には高評価</h3>
<ul>
  <li>夜景・風景・旅行写真が多い</li>
  <li>AI編集で時短・効率化したい</li>
  <li>サブスク費用を削減したい</li>
  <li>ある程度スペックのあるPCを使っている</li>
</ul>

<h3>こんな人には低評価</h3>
<ul>
  <li>写真管理を重視している（Lightroom派）</li>
  <li>古いPCを使っている</li>
  <li>生成AI機能をメインに使いたい</li>
</ul>

<h2>まとめ</h2>

<p>口コミを総合すると、Luminar Neoは<strong>AI編集目的なら高評価、写真管理目的には不満が多い</strong>という傾向があります。</p>
<p>自分の使い方に合うかどうかは7日間の体験版で試すのが確実です。返金保証もあるので、気になる方はぜひ試してみてください。</p>
`,
  },
]

export function getAllArticles(): LuminarArticle[] {
  return ARTICLES
}

export function getArticleBySlug(slug: string): LuminarArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesBySlug(slugs: string[]): LuminarArticle[] {
  return slugs.flatMap((slug) => {
    const article = getArticleBySlug(slug)
    return article ? [article] : []
  })
}
