import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "コンテンツ制作ポリシー | 東京夜景ナビ",
  description:
    "東京夜景ナビのコンテンツ制作ポリシーです。情報の正確性・写真の取り扱い・表現方針・法的配慮など、記事制作の基本方針をご案内します。",
};

const REFERENCE_SITES = [
  {
    category: "観光・総合案内",
    sites: [
      { name: "東京都公式観光サイト「GO TOKYO」", href: "https://www.gotokyo.org/jp/", description: "東京都が運営する観光ポータル。夜景スポットやイベント情報、アクセス方法を網羅。多言語対応で旅行者にも便利です。" },
      { name: "東京都観光財団（TCVB）", href: "https://tcvb.or.jp/", description: "観光動向やプロモーション情報を提供する公的機関。観光統計や施策資料も参照可能です。" },
    ],
  },
  {
    category: "行政・ルール",
    sites: [
      { name: "東京都庁 公式サイト", href: "https://www.metro.tokyo.lg.jp/", description: "条例や施設案内の一次情報。都庁展望室の営業情報やイベント予定も確認できます。" },
    ],
  },
  {
    category: "主要展望スポット（公式）",
    sites: [
      { name: "東京タワー 公式サイト", href: "https://www.tokyotower.co.jp/", description: "ライトアップスケジュール、展望台イベント、チケット情報を掲載。" },
      { name: "東京スカイツリー 公式サイト", href: "https://www.tokyo-skytree.jp/", description: "点灯カラーや展望台イベント情報、混雑状況などを案内。" },
    ],
  },
  {
    category: "夜景の見えるホテル検索",
    sites: [
      { name: "じゃらんnet", href: "https://www.jalan.net/", description: "夜景の見える客室や高層階ホテルを条件指定して検索可能。宿泊プラン、口コミ、空室状況をリアルタイムで確認できます。" },
      { name: "楽天トラベル", href: "https://travel.rakuten.co.jp/", description: "全国のホテル・旅館を予約できる大手予約サイト。夜景ビューの部屋条件や周辺スポット情報も豊富です。" },
      { name: "Booking.com", href: "https://www.booking.com/", description: "海外利用者にも人気の宿泊予約サイト。写真やレビューを通じて夜景の見え方を事前確認可能。" },
    ],
  },
  {
    category: "夜景の見えるレストラン検索",
    sites: [
      { name: "TableCheck", href: "https://www.tablecheck.com/ja/", description: "夜景が見える席を条件に検索・予約可能なレストラン予約プラットフォーム。席の位置指定やイベント時の予約にも対応。" },
      { name: "一休.comレストラン", href: "https://restaurant.ikyu.com/", description: "高級レストラン予約サイト。夜景席や窓際席の指定ができ、料理内容や写真も詳細に確認可能です。" },
      { name: "ホットペッパーグルメ（東京 夜景）", href: "https://www.hotpepper.jp/SA11/G002/", description: "夜景が見える東京の飲食店をジャンル別・エリア別に検索可能。クーポンやレビューも掲載。" },
    ],
  },
  {
    category: "ライトアップ・インフラ",
    sites: [
      { name: "東京都建設局", href: "https://www.kensetsu.metro.tokyo.lg.jp/", description: "橋梁や河川施設のライトアップ日程や特別演出情報を提供。" },
    ],
  },
  {
    category: "天候・日の入り・視程",
    sites: [
      { name: "気象庁", href: "https://www.jma.go.jp/", description: "天気予報や雲量、視程データを提供。撮影日選びの参考になります。" },
      { name: "国立天文台 暦計算室", href: "https://eco.mtk.nao.ac.jp/koyomi/", description: "日の入り・薄明時刻を計算でき、夜景撮影の最適タイミングを計画可能。" },
    ],
  },
  {
    category: "交通・運行情報",
    sites: [
      { name: "東京メトロ", href: "https://www.tokyometro.jp/", description: "路線図や終電情報を提供。夜景観光の移動計画に便利です。" },
      { name: "都営交通（都営地下鉄・都営バス）", href: "https://www.kotsu.metro.tokyo.jp/", description: "運行状況や時刻表を確認可能。深夜移動にも対応できます。" },
      { name: "JR東日本", href: "https://www.jreast.co.jp/", description: "首都圏広域のアクセスや運行見合わせ、臨時列車情報を提供。" },
    ],
  },
  {
    category: "マナー・安全",
    sites: [
      { name: "警視庁", href: "https://www.keishicho.metro.tokyo.lg.jp/", description: "防犯情報やドローン規制の一次情報。安全に夜景を楽しむために確認必須。" },
    ],
  },
  {
    category: "撮影・許認可",
    sites: [
      { name: "東京都公園協会", href: "https://www.ppo.metro.tokyo.lg.jp/", description: "公園での撮影ルールや商用利用申請方法を案内。" },
      { name: "国土交通省", href: "https://www.mlit.go.jp/", description: "港湾・河川エリアの占用許可や使用ルールの一次情報を提供。" },
    ],
  },
];

export default function GuidelinesPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="guidelines" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title="コンテンツ制作ポリシー"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 21h8" />
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        </svg>
      }
      summary="東京夜景ナビでは、読者の皆さまが安心して情報を参考にできるよう、以下の方針に基づきコンテンツを制作しています。"
      breadcrumb={[
        
        { label: "コンテンツ制作ポリシー" },
      ]}
    >
      {/* ── 前文 ── */}
      <div className="content-card card-padding article-body">
        <p>
          当サイトは、東京の夜景の魅力を正確かつ美しく伝えることを目的に運営しています。
        </p>

        <h2>情報の正確性と信頼性</h2>
        <p>
          掲載する情報は、原則として現地取材や自主撮影を通じて収集しています。営業時間やライトアップ時刻、入場料などのデータは、施設の公式発表や公的機関・観光協会の一次情報を確認し、正確性を担保しています。SNSや口コミ等の情報は、公式発信であるかを確認したうえで掲載します。
        </p>

        <h2>写真・動画の取り扱い</h2>
        <p>
          掲載する写真・動画は、すべて自ら撮影したもの、または権利者から使用許諾を得た素材のみ使用します。加工や色調補正は、現地の雰囲気や実際の景観を損なわない範囲に限定します。被写体の肖像権や著作権には最大限の配慮を行います。
        </p>

        <h2>情報更新のタイミング</h2>
        <p>
          イベント日程や施設情報は、内容が変更された場合やシーズンごとに見直しを行います。新しい夜景スポットや期間限定ライトアップについては、確認でき次第速やかに反映します。古い情報が残る場合には、記事内に更新日や注意書きを明記します。
        </p>

        <h2>表現の方針</h2>
        <p>
          誇張や事実誤認を避け、実際の体験に基づいたリアルな情報を提供します。観光初心者や海外からの旅行者にもわかりやすい平易な言葉遣いを心がけます。安全面やマナーに関する注意点も積極的に記載します。
        </p>

        <h2>ユーザーからの情報提供</h2>
        <p>
          読者の方からの写真提供や体験談の共有は歓迎しますが、掲載にあたっては事前に内容を確認し、必要に応じて編集・修正を行います。誤りの指摘や改善の要望については、お問い合わせフォームから随時受け付けています。
        </p>

        <h2>法的・倫理的配慮</h2>
        <p>
          立入禁止エリアや撮影禁止エリアの紹介は行いません。周辺住民や施設関係者への迷惑行為を助長するような表現も避けます。また、個人情報やプライバシーの保護を徹底します。
        </p>
      </div>

      {/* ── 参考情報サイト ── */}
      <div className="content-card card-padding article-body">
        <h2>記事作成の際の参考情報サイト</h2>
        <p>
          公開中の記事は、下記の情報源・公式サイトを参考にしつつ、筆者の体験を元に書いています。
        </p>

        {REFERENCE_SITES.map((group) => (
          <div key={group.category} style={{ marginBottom: 24 }}>
            <h3>{group.category}</h3>
            <dl className="guidelines-dl">
              {group.sites.map((site) => (
                <div key={site.href} className="guidelines-dl-item">
                  <dt>
                    <a href={site.href} target="_blank" rel="noopener noreferrer">
                      {site.name}
                    </a>
                  </dt>
                  <dd>{site.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ArticleLayout>
    </>
  );
}
