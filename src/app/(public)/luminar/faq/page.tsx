import type { Metadata } from 'next'
import LuminarArticleLayout, { buildArticleMetadata } from '@/components/luminar/LuminarArticleLayout'
import LuminarCtaMini from '@/components/luminar/LuminarCtaMini'
import type { TocItem } from '@/lib/luminar/toc'

export const dynamic = 'force-static'

const META = {
  slug: 'faq',
  title: 'Luminar Neoの購入前によくある質問まとめ｜動作環境・対応カメラ・ライセンスの疑問を解決【FAQ】',
  description: '「Luminar Neoって自分に合うのかな？」「買ってから後悔しない？」——そんな不安を抱えている方、多いと思います。このページでは、購入前によく寄せられる疑問をSkylum公式のカスタマーサポートにも問い合わせた上でQ&A形式でまとめました。',
  publishedAt: '2026-01-19T10:28:58',
  updatedAt: '2026-01-23T13:49:18',
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
  { id: 'faq-pro', level: 2, text: 'Proツール・パスに関する質問' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(META)
}

const lead = (
  <>
    <p>「Luminar Neoって自分に合うのかな？」「買ってから後悔しない？」——そんな不安を抱えている方、多いと思います。</p>
    <p>このページでは、購入前によく寄せられる疑問をSkylum公式のカスタマーサポートにも問い合わせた上でQ&amp;A形式でまとめました。細かい解説は専門ページに任せて、ここでは「YES or NO」でサクッと判断できるようにしています。気になる項目だけチェックしてみてくださいね。</p>
    <p>なお、公式サイトにもFAQページがあるので、あわせて参考にしてみてください。<br />
    <i className="fa-solid fa-arrow-right"></i> <a href="https://skylum.evyy.net/OeGRoW" target="_blank" rel="noopener nofollow">Luminar Neo公式FAQ（Skylum）</a></p>
    <LuminarCtaMini />
  </>
)

export default async function Page() {
  return (
    <LuminarArticleLayout {...META} categoryIds={[1]} toc={TOC} lead={lead}>

      <section id="faq-purchase" className="content-card card-padding article-body">
        <h2>Luminar Neoの購入・料金に関する質問</h2>
        <div className="faq-item">
          <dt className="faq-q">Luminar Neoの価格はいくら？</dt>
          <dd className="faq-a">
            Luminar Neoの価格は、選ぶプランによって変わります。現在は「永久ライセンス デスクトップ版」「クロスデバイス 永続ライセンス」「永久 Maxライセンス」の3種類が用意されていて、モバイルアプリやCreative Libraryへのアクセスが含まれるかどうかで価格が異なります。
            <strong>重要：</strong>買い切りプランには基本機能のみが含まれます。Proツール（Noiseless AI、HDR Mergeなど8種）を使いたい場合は、別途Upgrade PassまたはEcosystem Passの購入が必要です。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/luminar-plan/">Luminar Neoの料金プラン詳細はこちら</a>
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">Luminar Neoを安く買う方法はある？</dt>
          <dd className="faq-a">
            公式サイトでは定期的にクーポンコードが発行されています。また、年に数回開催されるセール時にはさらに割引率が高くなることもあるので、急ぎでなければセール情報もチェックしてみてください。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/sale-and-coupon-info/">セール・クーポン情報をチェックする</a>
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">買い切りとパスの違いは？</dt>
          <dd className="faq-a">
            Luminar Neoは買い切り（永久ライセンス）プランのみの販売となっています。一度購入すれば基本機能はずっと使い続けられます。
            ただし、以下の機能には別途パスの購入が必要です：
            <ul>
              <li><strong>Proツール（8種）</strong>：Noiseless AI、Supersharp AI、HDR Merge、Background Removal AIなど → <strong>Upgrade PassまたはEcosystem Passが必要</strong>（一度購入すれば永続利用可）</li>
              <li><strong>生成AI機能</strong>：GenErase、GenSwap、GenExpand → 買い切りのみの場合は購入から1年間、パス購入時は2026年12月末まで</li>
              <li><strong>最新アップデート</strong>：パス購入者のみ</li>
            </ul>
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/luminar-plan/">プラン形式の詳細を確認する</a>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">合わなかった場合、返金できる？</dt>
          <dd className="faq-a">
            はい、購入から30日以内であれば返金を申請できます。いわゆる「30日間返金保証」がついているので、実際に使ってみて「思っていたのと違う」と感じた場合でも安心です。
            体験版と違って、購入後にすべての機能を試せるのが返金保証のメリットですね。
          </dd>
        </div>
      </section>

      <section id="faq-trial" className="content-card card-padding article-body">
        <h2>体験版・導入前の不安</h2>
        <div className="faq-item">
          <dt className="faq-q">無料体験版はある？</dt>
          <dd className="faq-a">
            あります。公式サイトから7日間の無料トライアルをダウンロードできます。クレジットカードの登録も不要で、メールアドレスだけでOK。
            基本的な操作感やインターフェースを確認するには十分な期間です。「自分のPCでちゃんと動くか」「操作感が合うか」をまず試してみてください。
            ※Proツールについては、体験版での利用に制限がある場合があります。詳細は公式サイトでご確認ください。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/trial/">体験版のダウンロードと詳細について</a>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">初心者でも使える？</dt>
          <dd className="faq-a">
            使えます。むしろLuminar Neoは、初心者でも直感的に操作できるように設計されたソフトです。
            Lightroomのように細かくパラメータを追い込むというより、AIが自動で良い感じに仕上げてくれるアプローチなので、「まず触ってみる」だけでも楽しめると思います。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/merit-demerit/">Luminar Neoのメリット・デメリットを見る</a>
          </dd>
        </div>
      </section>

      <section id="faq-features" className="content-card card-padding article-body">
        <h2>機能・他ソフトとの違い</h2>
        <div className="faq-item">
          <dt className="faq-q">Luminar Neoでは何ができる？</dt>
          <dd className="faq-a">
            Luminar Neoが得意なのは、AIを活用した写真編集です。空の置き換え、人物の肌補正、背景のぼかしなど、従来は手間がかかっていた作業をワンクリックでこなせます。
            一方で、写真の管理機能は最小限なので、大量の写真をカタログ的に整理したい方には向いていません。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">Lightroomと何が違う？</dt>
          <dd className="faq-a">
            ざっくり言うと、Lightroomは「写真を管理しながら現像するソフト」、Luminar Neoは「編集に特化したソフト」です。日常的に大量の写真を扱うならLightroom、1枚1枚をしっかり仕上げたいならLuminar Neoという棲み分けになります。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/lightroom-compare/">Lightroomとの詳細比較はこちら</a>
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">Lightroomと併用できる？</dt>
          <dd className="faq-a">
            できます。Luminar NeoはLightroom Classicのプラグインとして使えるので、Lightroomで管理している写真をLuminar Neoで編集し、また戻すという使い方が可能です。
            「どちらか一方」ではなく「いいとこ取り」したい方には、この併用スタイルがおすすめです。
          </dd>
        </div>
        <div className="faq-item">
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
            <strong>【重要】Proツールは買い切りプランには含まれていません。</strong>公式カスタマーサポートによると、Proツールを使うにはUpgrade Pass（年額約¥7,400）またはEcosystem Pass（年額約¥10,400）の購入が必要です。
            嬉しいのは、<strong>一度パスを購入すれば、Proツールは永続的に使える</strong>こと。翌年パスを更新しなくても、Proツールは消えません（生成AI機能と最新アップデートは使えなくなります）。
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
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/expand/">Proツール（拡張機能）の詳細と選び方</a>
          </dd>
        </div>
      </section>

      <section id="faq-files" className="content-card card-padding article-body">
        <h2>対応ファイル・出力形式</h2>
        <div className="faq-item">
          <dt className="faq-q">対応しているカメラは？</dt>
          <dd className="faq-a">
            Canon、Nikon、Sony、Fujifilmなど、主要カメラメーカーに幅広く対応しています。対応カメラのライブラリは定期的に更新されていますが、発売されたばかりの最新機種については対応が少し遅れることがあります。
            購入前に公式の対応カメラリストを確認しておくと安心です。
            <i className="fa-solid fa-arrow-right"></i> <a href="https://media.macphun.com/uploads/uploads/LuminarNeo/Luminar_Neo_1150_Supported_Cameras.pdf" target="_blank" rel="noopener">対応カメラ一覧（公式PDF）</a>
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">RAW現像もできる？</dt>
          <dd className="faq-a">
            はい、できます。Luminar Neoは独自の強力なRAWエンジンを搭載していて、RAW現像ソフトとしても十分に使えます。
            露出やホワイトバランスの調整はもちろん、AI機能と組み合わせた編集も可能です。
          </dd>
        </div>
        <div className="faq-item">
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
        <div className="faq-item">
          <dt className="faq-q">対応OS・推奨スペックは？</dt>
          <dd className="faq-a">
            WindowsとMacの両方に対応しています。Macの場合はmacOS 12以降（macOS 10.13〜10.15は非対応）、Windowsの場合はWindows 10（バージョン1909以降、64bitのみ）が必要です。
            CPUはIntel Core i5の第8世代以上、またはAMD Ryzen 5以上が求められます。メモリは最低8GBですが、AI処理を快適に使うなら16GB以上を推奨します。グラフィックカードはOpenGL 3.3以降対応が必要です。
            ストレージは10GBの空き容量が必要で、SSDだとより快適に動作します。Macは2010年初頭以降のモデルに対応しています。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">動作が重いことはある？</dt>
          <dd className="faq-a">
            正直に言うと、あります。特にAI機能を使った処理は負荷が高いので、PCのスペックによっては待ち時間が発生します。
            写真1枚の編集なら気にならなくても、連続で処理すると重さを感じることも。このあたりは実際の使用感として知っておいたほうがいいポイントです。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/merit-demerit/">動作の重さ含め、デメリットを正直に解説</a>
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">起動しない／落ちることはある？</dt>
          <dd className="faq-a">
            環境によっては起こり得ます。グラフィックドライバが古い、メモリが不足している、他のソフトと競合しているなど、原因はさまざまです。
            頻繁に起こるわけではありませんが、「絶対に落ちない」とは言えません。公式サポートページにトラブルシューティングがあるので、問題が起きたらまずそちらを確認してみてください。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/merit-demerit/">安定性に関する情報も含めて確認する</a>
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">Windows / Macで挙動は違う？</dt>
          <dd className="faq-a">
            基本的な機能や操作性に違いはありません。ただ、細かい部分ではOSごとの差が出ることもあります。
            たとえばApple Silicon（M1/M2/M3/M4）搭載Macではネイティブ対応が進んでいて、比較的軽快に動作する傾向があります。Windows 11でも問題なく動きますが、グラフィックドライバの更新は忘れずに。
          </dd>
        </div>
      </section>

      <section id="faq-license" className="content-card card-padding article-body">
        <h2>購入後・ライセンス関連</h2>
        <div className="faq-item">
          <dt className="faq-q">何台のPCにインストールできる？</dt>
          <dd className="faq-a">
            永久ライセンス デスクトップ版の場合、2台のPCにインストールできます。自宅のデスクトップと持ち運び用のノートPCなど、使い分けている方でも1ライセンスでカバーできるのは嬉しいポイントです。
            クロスデバイス版を選ぶと、さらに3台のモバイルデバイスでも使用できます。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">機種変更したら再インストールできる？</dt>
          <dd className="faq-a">
            できます。PCを買い替えた場合でも、新しいデバイスにアプリをダウンロードしてSkylumアカウントでログインすれば使えるようになります。
            すでにすべてのライセンス席が使用中の場合は、古いデバイスのアプリを非アクティブ化してから新しいデバイスでアクティブ化する形になります。アカウント管理画面から簡単に操作できますよ。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">オフライン環境でも使える？</dt>
          <dd className="faq-a">
            基本的には使えます。常時インターネット接続が必要なわけではないので、オフラインの環境でも編集作業は可能です。
            ただし、ライセンス認証や一部のAI機能、アップデートの確認にはインターネット接続が必要になります。完全オフラインで使い続けるのは難しいですが、一時的にネットがない環境でも作業は止まりません。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">Upgrade Pass・Ecosystem Passはどこで買える？</dt>
          <dd className="faq-a">
            Skylum公式サイトから購入できます。すでに買い切りライセンスを持っている方は、Skylumアカウント（<a href="https://skylum.evyy.net/7a3mLg" target="_blank" rel="noopener nofollow">https://skylum.com/account/my-software</a>）にログインすると、パスのみを追加購入するオファーが表示されることがあります。
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
      </section>

      <section id="faq-pro" className="content-card card-padding article-body">
        <h2>Proツール・パスに関する質問</h2>
        <div className="faq-item">
          <dt className="faq-q">買い切りプランだけでProツールは使える？</dt>
          <dd className="faq-a">
            <strong>いいえ、使えません。</strong>公式カスタマーサポートに確認したところ、Proツール（旧：拡張機能・エクステンション）は買い切りプランには含まれていません。
            Proツールを使うには、Upgrade Pass（年額約¥7,400）またはEcosystem Pass（年額約¥10,400）の購入が必要です。
          </dd>
        </div>
        <div className="faq-item">
          <dt className="faq-q">一度パスを買ったらProツールはずっと使える？</dt>
          <dd className="faq-a">
            <strong>はい、永続的に使えます。</strong>パスを購入するとProツールは永続的にアンロックされます。翌年パスを更新しなくても、Proツールは消えません。
            ただし、生成AI機能（GenErase、GenSwap、GenExpand）と最新アップデートは、パスを継続しないと使えなくなります。
          </dd>
        </div>
        <div className="faq-item faq-item-last">
          <dt className="faq-q">コスパの良い買い方は？</dt>
          <dd className="faq-a">
            「Proツールだけ使えればいい」という方は、<strong>買い切りプラン＋Upgrade Pass 1年だけ</strong>が最もコスパの良い選択です。
            初期費用は約¥25,200（買い切り約¥17,850＋パス約¥7,400）ですが、一度パスを購入すればProツールは永続的に使えます。5年使っても追加費用はかかりません。
            生成AI機能も継続して使いたい場合は、毎年パスを更新する形になります。
            <i className="fa-solid fa-arrow-right"></i> <a href="/luminar/luminar-plan/">料金プランの詳細とコストシミュレーション</a>
          </dd>
        </div>
      </section>

    </LuminarArticleLayout>
  )
}
