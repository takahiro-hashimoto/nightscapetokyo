import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Award,
  Newspaper,
  BookOpen,
  Mail,
  ExternalLink,
} from "lucide-react";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import { EQUIPMENT, ABOUT_SNS_LINKS, ACHIEVEMENTS_BASE } from "@/lib/about-content";

export const dynamic = "force-static";

const TITLE = "運営者情報";
const DESCRIPTION =
  "東京夜景ナビの運営者タカヒロのプロフィール・活動実績・撮影機材について紹介します。";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
      languages: buildAreaHreflangAlternates(SITE_URL, "about", ALL_LOCALE_SLUGS),
    },
  };
}

const PROFILE = [
  { label: "経歴", value: "Webデザイナー → フロントエンドエンジニア → Webディレクター → PM" },
  { label: "出身地", value: "愛知県" },
  { label: "居住地", value: "東京都" },
  { label: "ブログ歴", value: "2015年12月〜（10年以上）" },
];

const MEDIA = [
  {
    description: "ライフスタイル比較メディア「Abemaチョイス」の記事の監修をさせていただきました。",
    linkTitle: "Kindle端末のおすすめ人気ランキング5選！ | Amebaチョイス",
    linkHref: "https://choice.ameba.jp/tablet/kindle/",
  },
  {
    description: "家電・ガジェット紹介メディア「Picky's」のおすすめの雲台を紹介する記事の監修をさせていただきました。",
    linkTitle: "安定した撮影に！雲台おすすめ20選｜種類による違いも分かりやすく解説",
    linkHref: "https://picky-s.jp/camera-platform/",
  },
  {
    description: "AI総研のオウンドメディアにておすすめのメディアとして当サイトを紹介いただきました。",
    linkTitle: "おすすめのWebメディア運営会社",
    linkHref: "https://metaversesouken.com/ai/ai/webmedia/",
  },
  {
    description: "月刊GoodsPress 2024年3月号にインタビュー記事が掲載されました。iPadを用いたテザー撮影や現像方法を取り上げていただいています。",
    linkTitle: "月刊GoodsPress（グッズプレス） 2024年8月・9月合併号",
    linkHref: "https://www.fujisan.co.jp/product/613/new/",
  },
];

// ACHIEVEMENTS_BASE（画像・リンクデータ）は @/lib/about-content から共有
// 日本語テキスト（タイトル・alt・説明文）はここで定義
const JA_ACHIEVEMENT_META = [
  {
    title: "株式会社TOKYO TOWER様 PC版トップページのタイムラプス映像を撮影",
    imageAlt: "東京タワー展望台から眺める夜景",
    description: [
      "株式会社TOKYO TOWERより依頼いただき、公式サイトのトップページに使用するタイムラプス映像を撮影させていただきました。",
      "タイムラプス映像が再生されるのはPC版のみですが気になった方は是非ご覧ください！",
    ],
  },
  {
    title: "ザ・プリンス パークタワー東京様の客室・レストランのプロモーション用写真を撮影",
    imageAlt: "ザ・プリンス パークタワー東京のコーナールームの雰囲気",
    description: [
      "ザ・プリンス パークタワー東京様にて、客室から望む夜景、レストランフロアの内観、さらには夕暮れから夜にかけての移ろいを表現したタイムラプス映像を撮影させていただきました。",
      "これらの写真・映像は公式サイトをはじめ、楽天トラベルやじゃらんなど大手旅行予約サイトの掲載素材としてご活用いただいております。",
    ],
  },
  {
    title: "ザ・プリンス パークタワー東京様 リニューアルプロジェクト用写真撮影",
    imageAlt: "ザ・プリンス パークタワー東京 リニューアルフロア",
    description: [
      "20周年記念リニューアルにあたり、「THE TOKYO FUSION」をテーマとした33・32階フロアの室内撮影を担当。",
      "伝統とモダンが融合するデザインコンセプトを活かし、上質な空気感と光のニュアンスを重視した撮影を行いました。",
    ],
  },
  {
    title: "名古屋プリンスホテルスカイタワー様の客室からの眺望を撮影",
    imageAlt: "名古屋プリンスホテルスカイタワーからの夜景",
    description: [
      "名古屋プリンスホテルスカイタワー様の客室からの夜景写真、タイムラプス映像を撮影させて頂きました。",
      "公式サイト、楽天トラベル、じゃらんといった旅行サイトの素材として使用いただいております。",
    ],
  },
  {
    title: "動画コンテスト「港、動く 15秒の物語」の審査員を担当",
    imageAlt: "動画コンテスト「港、動く」",
    description: [
      "港区のナイトスポットを魅力を発信することを目的とした動画コンテスト「港、動く 15秒の物語」の審査員を担当。",
      "2025年2月28日に行われた表彰式にも参加しました。",
    ],
  },
  {
    title: "日本電設工業株式会社 Webサイトのメインビジュアルを納品",
    imageAlt: "日本電設工業 Webサイト",
    description: [
      "日本電設工業 Webサイトのメインビジュアルとして弊サイトが撮影したタイムラプス映像を採用いただきました。",
      "丸ビルから撮影した霞ヶ関周辺の街並みやライトアップされた東京駅など複数の素材を使用いただいているのでぜひチェックしてみてください。",
    ],
  },
  {
    title: "ヘリコプター遊覧サービスのAIROS Skyview PR記事を作成",
    imageAlt: "ヘリコプターから撮影した東京夜景",
    description: [
      "ヘリコプター遊覧サービスのAIROS Skyviewを運営されているAirX様よりご依頼をいただき、PR記事を作成させていただきました。",
      "非日常を味わいながら東京夜景を堪能できる素敵なサービスなので、ぜひ特別な日のデートや空撮をする際に利用してみてはいかがでしょうか。",
    ],
  },
  {
    title: "レストランルークの期間限定イベント「SKY TERRACE」の取材記事を担当",
    imageAlt: "東京タワーと港区方面の夜景",
    description: [
      "レストランルーク ウィズ スカイラウンジにて2025年1月6日〜3月31日の期間限定で開催されたイベント「SKY TERRACE」の取材記事を執筆させていただきました。",
    ],
  },
  {
    title: "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
    imageAlt: "丸ビル35階展望フロアから撮影した霞が関方面の夜景",
    description: [
      "第8回東京大回廊写真コンテストにて応募総数911点の中から「出光美術館賞」を受賞しました。",
    ],
  },
  {
    title: "BS TBS カンニング竹山の昼酒は人生の味。にタイムラプス映像を提供",
    imageAlt: "BS TBS カンニング竹山の昼酒は人生の味。",
    description: [
      "2025年4月21日（月）放送のBS TBS「カンニング竹山の昼酒は人生の味。」の冒頭映像にウィングインターナショナルセレクト浅草駒形から撮影したタイムラプス映像を提供しました。",
    ],
  },
  {
    title: "NHK総合「〜天才ピアニスト 10年の空白を越えて〜」にタイムラプス映像を提供",
    imageAlt: "マグネット渋谷109 屋上展望台の夜景",
    description: [
      "2024年1月1日に放送されたNHK総合「スタニスラフ・ブーニン　〜天才ピアニスト 10年の空白を超えて〜」にてマグネットバイ渋谷109 屋上展望台から撮影したタイムラプス映像が使用されました。",
    ],
  },
  {
    title: "テレビ朝日「ザワつく!金曜日」に写真素材を提供",
    imageAlt: "ザワつく!金曜日",
    description: [
      "2024年11月29日（金）放送の「ザワつく!金曜日」へ六本木けやき坂通りとさくら坂の写真を提供しました。",
    ],
  },
  {
    title: "朝日新聞のコラムにインタビュー記事が掲載",
    imageAlt: "風媒銀乱のリフレクション",
    description: [
      "朝日新聞に晴海埠頭のオブジェ「風媒銀乱」を撮影した時のインタビューが掲載されました。",
      "今はもう見ることができなくなってしまったオブジェですが、撮影した写真は今でも記憶に残っています。",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="about" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title={TITLE}
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      }
      summary="東京夜景ナビの運営者タカヒロのプロフィール・活動実績・撮影機材について紹介します。"
      topLink={{ href: "/", label: "東京都内の夜景情報一覧" }}
      breadcrumb={[

        { label: TITLE },
      ]}
    >
      {/* ── 運営者について ── */}
      <div className="content-card card-padding article-body">
        <h2>運営者について</h2>

        <div className="about-profile">
          <div className="about-profile-avatar">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
              alt="タカヒロ"
              width={120}
              height={120}
              className="about-avatar-img"
            />
            <p className="about-avatar-name">タカヒロ</p>
            <p className="about-avatar-role">夜景フォトグラファー</p>
          </div>
          <dl className="about-profile-dl">
            {PROFILE.map((row) => (
              <div key={row.label} className="about-profile-row">
                <dt>{row.label}：</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-profile-bio">
          <p><strong>東京タワーが見える夜景スポット</strong>や<strong>ウォーターフロントの夜景スポット</strong>が大好きです。</p>
          <p>東京都内のメジャーな夜景スポットはほぼ制覇しており、最近は「<Link href="/tag/hotel/">夜景が綺麗な都内のホテル</Link>」に宿泊して客室からの眺めを堪能するのがマイブーム。</p>
          <p>本サイトの他にも「<a href="https://digital-style.jp/" target="_blank" rel="noreferrer noopener">ガジェットレビューブログ・デジスタ</a>」、「<a href="https://used-lab.jp">ユーズドラボ</a>」、「<a href="https://biz-shelf.com">ビズシェルフ</a>」を運営していたり、カメラマン、Webコンサルタントとしても活動しています。</p>
        </div>

        <div className="about-sns-buttons">
          {ABOUT_SNS_LINKS.map((sns) => (
            <a
              key={sns.label}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              className="about-sns-btn"
            >
              {sns.Icon ? (
                <sns.Icon size={15} aria-hidden="true" />
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={sns.icon} />
                </svg>
              )}
              {sns.label}
            </a>
          ))}
          <Link href="/contact" className="about-sns-btn">
            <Mail size={15} />
            お問い合わせ
          </Link>
        </div>
      </div>

      {/* ── 撮影機材 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Camera size={18} /></span>
          撮影機材について
        </h2>
        <p>
          夜景写真の撮影には下記のようなアイテムを使用しています。
        </p>
        <p>
          これらの機材の詳細は「<a href="https://nightscape.tokyo/article/my-photographic-equipment/" target="_blank" rel="noopener noreferrer">夜景フォトグラファーの愛用する撮影機材まとめ</a>」で詳しく解説しているので、気になった方はぜひチェックしてみてください。
        </p>
        <ul className="about-equipment-list">
          {EQUIPMENT.map((item) => (
            <li key={item.name}>
              <Camera size={14} color="#64748b" />
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── 活動実績 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Award size={18} /></span>
          活動実績
        </h2>
        <p style={{ marginBottom: 24 }}>
          本サイトを通じてご依頼いただいたお仕事などの活動実績を一部ご紹介します。
        </p>

        {ACHIEVEMENTS_BASE.map((base, i) => {
          const meta = JA_ACHIEVEMENT_META[i];
          return (
            <div key={base.image}>
              <h3>{meta.title}</h3>
              <div className="about-achievement-image">
                <Image
                  src={base.image}
                  alt={meta.imageAlt}
                  width={960}
                  height={640}
                  style={{ width: "100%", height: "auto", borderRadius: 8 }}
                />
              </div>
              {meta.description.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              <a
                href={base.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-card"
              >
                {base.link.thumbnail && (
                  <div className="ref-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={base.link.thumbnail} alt="" />
                  </div>
                )}
                <div className="ref-body">
                  <span className="ref-title">{base.link.title}</span>
                  {base.link.siteName && (
                    <span className="ref-site">{base.link.siteName}</span>
                  )}
                  {base.link.excerpt && (
                    <span className="ref-excerpt">{base.link.excerpt}</span>
                  )}
                </div>
                <ExternalLink size={14} className="ref-icon" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ── メディア掲載 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Newspaper size={18} /></span>
          メディア掲載
        </h2>
        {MEDIA.map((item) => (
          <div key={item.linkHref} className="about-media-item">
            <p>{item.description}</p>
            <a
              href={item.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="about-media-link"
            >
              <ExternalLink size={14} />
              <span>{item.linkTitle}</span>
            </a>
          </div>
        ))}
      </div>

      {/* ── きっかけ ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><BookOpen size={18} /></span>
          東京の夜景を撮り始めたきっかけ
        </h2>
        <p>
          東京の夜景の魅力に取り憑かれたのは2012年ごろ。就職活動で何度か東京に足を運ぶ機会があったのですが、当時はお金がなかったのでもっぱら深夜バスが主な交通手段でした。
        </p>
        <p>
          夜に地元の名古屋を出て朝方に窓の外を眺めると、そこには首都高速道路の両脇に高層ビル群が立ち並ぶダイナミックな光景が広がっていました。美しい早朝の茜色の空も相まって「こんなに美しい景色が東京にはあるんだ…。」と感動したのを覚えています。
        </p>
        <p>
          その後名古屋の企業に新卒として働き始めましたが、就職活動で見た東京の街並みが忘れられず、給料を貯めてカメラ機材を購入し、毎年冬に東京の夜景スポットを撮り歩くのが恒例行事になりました。
        </p>
        <p>
          2022年には東京の会社に転職。それをきっかけに今まで撮り溜めていた夜景スポットの写真を整理して本サイトを開設しました。一年に数回東京を訪れるだけでは撮りに行けないマイナーな夜景スポットにも気軽に訪問できるようになり、掲載している夜景スポットは200を超えるまでに。
        </p>
        <p>
          ありがたいことにカメラマンとしての仕事を依頼いただく機会も増え、東京の夜の街並みを撮り歩くのがライフワークの一つとなっています。これからもどんどん発展していく東京の街並みを記録していきたいと思っています。
        </p>
      </div>

      {/* ── お問い合わせ CTA ── */}
      <div className="content-card about-cta">
        <p style={{ marginBottom: 20, textAlign: "center" }}>
          夜景撮影のご依頼や写真素材等の購入はお気軽にお問い合わせください。
        </p>
        <Link href="/contact">
          <Mail size={18} />
          お問い合わせ・撮影依頼
        </Link>
      </div>
    </ArticleLayout>
    </>
  );
}
