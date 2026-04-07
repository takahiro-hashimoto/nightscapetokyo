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

/* ── SNS ── */
const SNS_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1", icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "X", href: "https://twitter.com/takahiro__1202", icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { name: "Instagram", href: "https://www.instagram.com/nightscape.tokyo/", icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "TikTok", href: "https://www.tiktok.com/@nightscape_tokyo", icon: "M19.3 5.8a5.2 5.2 0 0 1-3.1-2.7A5.1 5.1 0 0 1 15.6 1h-3.8v14.4a2.9 2.9 0 0 1-2.9 2.7 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V7.5a6.7 6.7 0 0 0-.9-.1A6.8 6.8 0 0 0 2 14.2a6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8V8.4a9 9 0 0 0 5.4 1.8V6.4a5.2 5.2 0 0 1-1.7-.6z" },
  { name: "Pinterest", href: "https://www.pinterest.jp/nightscape_tokyo/", icon: "M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.7-.3 1.1.6 2 1.7 2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.4 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.4 3 7.4 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1 2.5-1.5 3.3A12 12 0 1 0 12 0z" },
  { name: "Lemon8", href: "https://www.lemon8-app.com/nightscape_tokyo", icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3.5a2.2 2.2 0 0 0-2.2 2.2c0 .5.2 1 .5 1.4A4.5 4.5 0 0 0 7.5 13 4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-2.8-4.2c.3-.3.5-.8.5-1.3A2.2 2.2 0 0 0 12 5.5z" },
];

const PROFILE = [
  { label: "名前", value: "タカヒロ" },
  { label: "職業", value: "Webディレクター / ブロガー / フォトグラファー" },
  { label: "出身地", value: "愛知県" },
  { label: "年齢", value: "1989年12月生まれ" },
  { label: "趣味", value: "カメラ、旅行、ドライブ" },
];

const EQUIPMENT = [
  { name: "Sony α7Ⅳ", href: "https://amzn.to/3LI54Xb" },
  { name: "Sony α7III", href: "https://amzn.to/3WJ8Rd1" },
  { name: "Sony α7C", href: "https://amzn.to/3LEzwBn" },
  { name: "Sony FE 24-105mm F4 G OSS", href: "https://amzn.to/3SzE4Nh" },
  { name: "TAMRON 28-75mm F/2.8 Di III RXD", href: "https://amzn.to/3WCvRu4" },
  { name: "TAMRON 17-28mm F/2.8 Di III RXD", href: "https://amzn.to/3WDiWrU" },
  { name: "TAMRON 70-180mm F/2.8 Di III VXD", href: "https://amzn.to/3YkH0kD" },
  { name: "SONY Sonnar T* FE 55mm F1.8 ZA", href: "https://amzn.to/4c4xlSm" },
  { name: "Voigtlander ULTRA WIDE-HELIAR 12mm F5.6 Aspherical III", href: "https://amzn.to/3A6HpNk" },
];

type Achievement = {
  title: string;
  image: string;
  imageAlt: string;
  description: string[];
  link: {
    title: string;
    href: string;
    siteName?: string;
    thumbnail?: string;
    excerpt?: string;
  };
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "株式会社TOKYO TOWER様 PC版トップページのタイムラプス映像を撮影",
    image: "/images/about/tokyo-tower.jpg",
    imageAlt: "東京タワー展望台から眺める夜景",
    description: [
      "株式会社TOKYO TOWERより依頼いただき、公式サイトのトップページに使用するタイムラプス映像を撮影させていただきました。",
      "タイムラプス映像が再生されるのはPC版のみですが気になった方は是非ご覧ください！",
    ],
    link: {
      title: "東京タワー",
      href: "https://www.tokyotower.co.jp/",
      siteName: "tokyotower.co.jp",
      excerpt: "東京タワーは1958年12月23日に開業した東京のランドマーク。2023年12月23日に開業65周年を迎えました。",
    },
  },
  {
    title: "ザ・プリンス パークタワー東京様の客室・レストランのプロモーション用写真を撮影",
    image: "/images/about/prince-park-tower.jpg",
    imageAlt: "ザ・プリンス パークタワー東京のコーナールームの雰囲気",
    description: [
      "ザ・プリンス パークタワー東京様にて、客室から望む夜景、レストランフロアの内観、さらには夕暮れから夜にかけての移ろいを表現したタイムラプス映像を撮影させていただきました。",
      "これらの写真・映像は公式サイトをはじめ、楽天トラベルやじゃらんなど大手旅行予約サイトの掲載素材としてご活用いただいております。",
    ],
    link: {
      title: "お部屋から見える景色",
      href: "https://www.princehotels.co.jp/parktower/plan/guestroom_view/",
      siteName: "ザ・プリンス パークタワー東京",
      thumbnail: "https://www.princehotels.co.jp/image/pla_guestroomview.jpg",
      excerpt: "都会の中心で非日常を味わえるラグジュアリーな滞在を求める方や、夜景を愛する方におすすめのホテルです。",
    },
  },
  {
    title: "ザ・プリンス パークタワー東京様 リニューアルプロジェクト用写真撮影",
    image: "/images/about/prince-renewal.jpg",
    imageAlt: "ザ・プリンス パークタワー東京 リニューアルフロア",
    description: [
      "20周年記念リニューアルにあたり、「THE TOKYO FUSION」をテーマとした33・32階フロアの室内撮影を担当。",
      "伝統とモダンが融合するデザインコンセプトを活かし、上質な空気感と光のニュアンスを重視した撮影を行いました。",
    ],
    link: {
      title: "20th ANNIVERSARY｜ザ・プリンス パークタワー東京",
      href: "https://www.princehotels.co.jp/parktower/contents/20th/renewal.html",
      siteName: "ザ・プリンス パークタワー東京",
      excerpt: "ザ・プリンス パークタワー東京は、2025年で開業20周年を迎えます。",
    },
  },
  {
    title: "名古屋プリンスホテルスカイタワー様の客室からの眺望を撮影",
    image: "/images/about/nagoya-prince.jpg",
    imageAlt: "名古屋プリンスホテルスカイタワーからの夜景",
    description: [
      "名古屋プリンスホテルスカイタワー様の客室からの夜景写真、タイムラプス映像を撮影させて頂きました。",
      "公式サイト、楽天トラベル、じゃらんといった旅行サイトの素材として使用いただいております。",
    ],
    link: {
      title: "ホテルからの眺望紹介",
      href: "https://www.princehotels.co.jp/nagoya/plan/view/",
      siteName: "名古屋プリンスホテル スカイタワー",
      thumbnail: "https://www.princehotels.co.jp/nagoya/images/north-night-03.jpg",
      excerpt: "名古屋プリンスホテル スカイタワーから眼下に広がる夜景をお楽しみください",
    },
  },
  {
    title: "動画コンテスト「港、動く 15秒の物語」の審査員を担当",
    image: "/images/about/minato-ugoku.jpg",
    imageAlt: "動画コンテスト「港、動く」",
    description: [
      "港区のナイトスポットを魅力を発信することを目的とした動画コンテスト「港、動く 15秒の物語」の審査員を担当。",
      "2025年2月28日に行われた表彰式にも参加しました。",
    ],
    link: {
      title: "港、動く",
      href: "https://minato-ugoku.com/",
      siteName: "minato-ugoku.com",
      excerpt: "港区のナイトスポットの魅力を発信する動画コンテスト公式サイト。",
    },
  },
  {
    title: "日本電設工業株式会社 Webサイトのメインビジュアルを納品",
    image: "/images/about/densetsuko.jpg",
    imageAlt: "日本電設工業 Webサイト",
    description: [
      "日本電設工業 Webサイトのメインビジュアルとして弊サイトが撮影したタイムラプス映像を採用いただきました。",
      "丸ビルから撮影した霞ヶ関周辺の街並みやライトアップされた東京駅など複数の素材を使用いただいているのでぜひチェックしてみてください。",
    ],
    link: {
      title: "HOME – 日本電設工業株式会社",
      href: "https://www.densetsuko.co.jp/",
      siteName: "日本電設工業株式会社",
      thumbnail: "https://www.densetsuko.co.jp/wp/wp-content/uploads/2024/11/og-image.png",
      excerpt: "インフラで 日本を支え 未来を築く 総合インフラ設備工事会社、日本電設工業（NDK）のWebサイトです。",
    },
  },
  {
    title: "ヘリコプター遊覧サービスのAIROS Skyview PR記事を作成",
    image: "/images/about/airos.jpg",
    imageAlt: "ヘリコプターから撮影した東京夜景",
    description: [
      "ヘリコプター遊覧サービスのAIROS Skyviewを運営されているAirX様よりご依頼をいただき、PR記事を作成させていただきました。",
      "非日常を味わいながら東京夜景を堪能できる素敵なサービスなので、ぜひ特別な日のデートや空撮をする際に利用してみてはいかがでしょうか。",
    ],
    link: {
      title: "【体験記】AIROS Skyviewのヘリコプター遊覧で東京夜景を堪能してきた話。",
      href: "https://nightscape.tokyo/pickup/airos-skyview/",
      siteName: "東京夜景ナビ",
      thumbnail: "https://nightscape.tokyo/wp-content/uploads/2024/02/21-300x200.jpg",
      excerpt: "東京タワーやスカイツリーなどのランドマークを上空から堪能できるヘリコプター遊覧の体験レポート。",
    },
  },
  {
    title: "レストランルークの期間限定イベント「SKY TERRACE」の取材記事を担当",
    image: "/images/about/restaurant-luke.jpg",
    imageAlt: "東京タワーと港区方面の夜景",
    description: [
      "レストランルーク ウィズ スカイラウンジにて2025年1月6日〜3月31日の期間限定で開催されたイベント「SKY TERRACE」の取材記事を執筆させていただきました。",
    ],
    link: {
      title: "「東京夜景ナビ」に当店の『SKY TERRACE』をご紹介いただきました",
      href: "https://www.restaurant-luke.com/news/8381/",
      siteName: "Restaurant LUKE with SKY LOUNGE",
      thumbnail: "https://www.restaurant-luke.com/wp-content/uploads/2024/02/221029-10.jpg",
      excerpt: "東京の夜景スポットを紹介する「東京夜景ナビ」にて、当店の期間限定プラン『SKY TERRACE』が紹介されました。",
    },
  },
  {
    title: "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
    image: "/images/about/photo-contest.jpg",
    imageAlt: "丸ビル35階展望フロアから撮影した霞が関方面の夜景",
    description: [
      "第8回東京大回廊写真コンテストにて応募総数911点の中から「出光美術館賞」を受賞しました。",
    ],
    link: {
      title: "東京大回廊写真コンテスト｜Visit Chiyoda",
      href: "https://visit-chiyoda.tokyo/photo_contest/",
      siteName: "Visit Chiyoda",
      excerpt: "東京大回廊写真コンテスト｜東京の中心、東京都千代田区の観光情報公式ウェブサイト。",
    },
  },
  {
    title: "BS TBS カンニング竹山の昼酒は人生の味。にタイムラプス映像を提供",
    image: "/images/about/bs-tbs.jpg",
    imageAlt: "BS TBS カンニング竹山の昼酒は人生の味。",
    description: [
      "2025年4月21日（月）放送のBS TBS「カンニング竹山の昼酒は人生の味。」の冒頭映像にウィングインターナショナルセレクト浅草駒形から撮影したタイムラプス映像を提供しました。",
    ],
    link: {
      title: "カンニング竹山の昼酒は人生の味。",
      href: "https://bs.tbs.co.jp/entertainment/hiruzake/",
      siteName: "BS-TBS",
      thumbnail: "https://bs.tbs.co.jp/images/program/5476.jpg",
      excerpt: "飲み仲間を探しに街へと繰り出す昼呑み番組。青空の下で、ルール無用の人情トークを展開！",
    },
  },
  {
    title: "NHK総合「〜天才ピアニスト 10年の空白を越えて〜」にタイムラプス映像を提供",
    image: "/images/about/nhk.jpg",
    imageAlt: "マグネット渋谷109 屋上展望台の夜景",
    description: [
      "2024年1月1日に放送されたNHK総合「スタニスラフ・ブーニン　〜天才ピアニスト 10年の空白を超えて〜」にてマグネットバイ渋谷109 屋上展望台から撮影したタイムラプス映像が使用されました。",
    ],
    link: {
      title: "〜天才ピアニスト 10年の空白を越えて〜 | スタニスラフ・ブーニン",
      href: "https://www.nhk.jp/p/ts/581332RQ53/episode/te/M6NWNQX4YG/",
      siteName: "NHK",
      thumbnail: "https://imgu.web.nhk/static/assets/images/tvseries/ts/581332RQ53/581332RQ53-eyecatch_3661a0c5dee272b624595807286efb99.jpg",
      excerpt: "天才ピアニスト、スタニスラフ・ブーニン。ケガを乗り越え、10年ぶりに本格ツアーを再開。復活までの格闘に密着。",
    },
  },
  {
    title: "テレビ朝日「ザワつく!金曜日」に写真素材を提供",
    image: "/images/about/tv-asahi.jpg",
    imageAlt: "ザワつく!金曜日",
    description: [
      "2024年11月29日（金）放送の「ザワつく!金曜日」へ六本木けやき坂通りとさくら坂の写真を提供しました。",
    ],
    link: {
      title: "ザワつく!金曜日｜テレビ朝日",
      href: "https://www.tv-asahi.co.jp/zawatsukufriday/",
      siteName: "テレビ朝日",
      thumbnail: "https://www.tv-asahi.co.jp/zawatsukufriday/OG.jpg",
      excerpt: "テレビ朝日「ザワつく!金曜日」番組公式サイト",
    },
  },
  {
    title: "朝日新聞のコラムにインタビュー記事が掲載",
    image: "/images/about/asahi.jpg",
    imageAlt: "風媒銀乱のリフレクション",
    description: [
      "朝日新聞に晴海埠頭のオブジェ「風媒銀乱」を撮影した時のインタビューが掲載されました。",
      "今はもう見ることができなくなってしまったオブジェですが、撮影した写真は今でも記憶に残っています。",
    ],
    link: {
      title: "コラム／アートリップ／風媒銀乱　伊原通夫作（東京都中央区）－朝日マリオン・コム－",
      href: "https://www.asahi-mullion.com/column/article/artrip/2470",
      siteName: "朝日マリオン・コム",
      thumbnail: "https://dn9bqdq7w42e9.cloudfront.net/articles/main/2f4ab2392d105ce4b877a8e038f18e0800091395.jpg",
      excerpt: "夕闇迫る東京湾。海の玄関口晴海客船ターミナルで、カメラを持った人々に行き会った。",
    },
  },
];

type MediaItem = {
  description: string;
  linkTitle: string;
  linkHref: string;
};

const MEDIA: MediaItem[] = [
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
      breadcrumb={[
        
        { label: TITLE },
      ]}
    >
      {/* ── 運営者について ── */}
      <div className="content-card card-padding article-body">
        <h2>運営者について</h2>

        <div className="about-hero-card">
          <div className="about-hero-avatar">
            <Image
              src="/images/about/profile.jpg"
              alt="タカヒロ"
              width={140}
              height={140}
            />
          </div>
          <div className="about-hero-info">
            <h3 style={{ fontSize: 20, margin: "0 0 4px" }}>タカヒロ</h3>
            <p>Webディレクター / ブロガー / フォトグラファー</p>
            <p>東京夜景ナビ 運営者</p>
            <div className="about-sns-row">
              {SNS_LINKS.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sns.name}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={sns.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <table className="info-table">
          <tbody>
            {PROFILE.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 24 }}>
          <p className="about-section-text">
            東京都内にあるIT企業でWebディレクターとして働く傍ら、東京の夜景スポットについて情報発信をしています。
          </p>
          <p className="about-section-text">
            <strong>東京タワーが見える夜景スポット</strong>や<strong>ウォーターフロントの夜景スポット</strong>が大好きです。
          </p>
          <p className="about-section-text">
            東京都内のメジャーな夜景スポットはほぼ制覇しており、最近は「<a href="/tag/hotel">夜景が綺麗な都内のホテル</a>」に宿泊して客室からの眺めを堪能するのがマイブーム。
          </p>
          <p className="about-section-text">
            本サイトの他にも「<a href="https://digital-style.jp/" target="_blank" rel="noopener noreferrer">ガジェットレビューブログ・デジスタ</a>」、「<a href="https://used-lab.jp" target="_blank" rel="noopener noreferrer">ユーズドラボ</a>」、「<a href="https://biz-shelf.com" target="_blank" rel="noopener noreferrer">ビズシェルフ</a>」を運営していたり、カメラマン、Webコンサルタントとしても活動しています。
          </p>
        </div>
      </div>

      {/* ── 撮影機材 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Camera size={18} /></span>
          撮影機材について
        </h2>
        <p className="about-section-text">
          夜景写真の撮影には下記のようなアイテムを使用しています。
        </p>
        <p className="about-section-text">
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
        <p className="about-section-text" style={{ marginBottom: 24 }}>
          本サイトを通じてご依頼いただいたお仕事などの活動実績を一部ご紹介します。
        </p>

        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="about-achievement-card">
            <h3 className="about-achievement-title">{a.title}</h3>
            <div className="about-achievement-image">
              <Image
                src={a.image}
                alt={a.imageAlt}
                width={960}
                height={640}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </div>
            {a.description.map((p, i) => (
              <p key={i} className="about-section-text">{p}</p>
            ))}
            <a
              href={a.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="about-ref-card"
            >
              {a.link.thumbnail && (
                <div className="about-ref-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.link.thumbnail} alt="" />
                </div>
              )}
              <div className="about-ref-body">
                <span className="about-ref-title">{a.link.title}</span>
                {a.link.siteName && (
                  <span className="about-ref-site">{a.link.siteName}</span>
                )}
                {a.link.excerpt && (
                  <span className="about-ref-excerpt">{a.link.excerpt}</span>
                )}
              </div>
              <ExternalLink size={14} className="about-ref-icon" />
            </a>
          </div>
        ))}
      </div>

      {/* ── メディア掲載 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Newspaper size={18} /></span>
          メディア掲載
        </h2>
        {MEDIA.map((item) => (
          <div key={item.linkHref} className="about-media-item">
            <p className="about-section-text">{item.description}</p>
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
        <p className="about-section-text">
          東京の夜景の魅力に取り憑かれたのは2012年ごろ。就職活動で何度か東京に足を運ぶ機会があったのですが、当時はお金がなかったのでもっぱら深夜バスが主な交通手段でした。
        </p>
        <p className="about-section-text">
          夜に地元の名古屋を出て朝方に窓の外を眺めると、そこには首都高速道路の両脇に高層ビル群が立ち並ぶダイナミックな光景が広がっていました。美しい早朝の茜色の空も相まって「こんなに美しい景色が東京にはあるんだ…。」と感動したのを覚えています。
        </p>
        <p className="about-section-text">
          その後名古屋の企業に新卒として働き始めましたが、就職活動で見た東京の街並みが忘れられず、給料を貯めてカメラ機材を購入し、毎年冬に東京の夜景スポットを撮り歩くのが恒例行事になりました。
        </p>
        <p className="about-section-text">
          2022年には東京の会社に転職。それをきっかけに今まで撮り溜めていた夜景スポットの写真を整理して本サイトを開設しました。一年に数回東京を訪れるだけでは撮りに行けないマイナーな夜景スポットにも気軽に訪問できるようになり、掲載している夜景スポットは200を超えるまでに。
        </p>
        <p className="about-section-text">
          ありがたいことにカメラマンとしての仕事を依頼いただく機会も増え、東京の夜の街並みを撮り歩くのがライフワークの一つとなっています。これからもどんどん発展していく東京の街並みを記録していきたいと思っています。
        </p>
      </div>

      {/* ── お問い合わせ CTA ── */}
      <div className="content-card about-cta">
        <p className="about-section-text" style={{ marginBottom: 20, textAlign: "center" }}>
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
