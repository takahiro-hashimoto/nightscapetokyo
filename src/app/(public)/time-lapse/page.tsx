import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SITE_URL } from "@/lib/types";

const PAGE_TITLE = "東京夜景のタイムラプス映像集・素材集";
const PAGE_DESCRIPTION =
  "東京都内で撮影したタイムラプス映像をまとめてご紹介。東京タワー・渋谷・丸の内など人気エリアの夕景〜夜景タイムラプスを多数掲載。映像素材の購入も可能です。";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | 東京夜景ナビ` },
  description: PAGE_DESCRIPTION,
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  twitter: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  alternates: { canonical: `${SITE_URL}/time-lapse/` },
};

export const revalidate = 3600;

/* ===== Video data ===== */

type Video = {
  id: string;
  title: string;
  caption?: string;
  /** internal link path (no domain) */
  captionLink?: string;
};

type Section = {
  key: string;
  heading: string;
  intro: string;
  subsections?: { heading: string; description: string[]; videos: Video[] }[];
  videos?: Video[];
};

const SECTIONS: Section[] = [
  {
    key: "collection",
    heading: "タイムラプス映像集",
    intro: "YouTubeで公開しているタイムラプス映像作品の一部を紹介します。",
    subsections: [
      {
        heading: "東京夜景 タイムラプス",
        description: [
          "東京都内でも特に夜景が美しい千代田区、港区、江東区、渋谷区、新宿区の夜景を贅沢に収めたタイムラプス映像です。3年間かけて集めたタイムラプス映像なので、ぜひチェックしてみてください！",
        ],
        videos: [{ id: "YuuQxNBHkvs", title: "東京夜景タイムラプス | Tokyo Japan Nightview TimeLapse【4K】" }],
      },
      {
        heading: "都内の夜景が綺麗なホテルから撮影した夕景タイムラプス",
        description: [
          "夜景の綺麗なホテルに宿泊した際に撮影した夕景タイムラプスのまとめ映像です。",
          "東京の街並みが徐々に煌びやかになっていく様子がとても美しいのでぜひ再生してみてください！",
        ],
        videos: [
          { id: "i3iA-bLEvDA", title: "東京都内のホテルから撮影したタイムラプス映像集 | Tokyo Japan Twilight TimeLapse Vol.1" },
        ],
      },
      {
        heading: "千代田区の都市風景タイムラプス",
        description: [
          "東京の玄関口である東京駅や皇居・国会議事堂・官庁街といった日本の首都機能を有している千代田区。",
          "美しく整備され、どこかクラシカルな雰囲気をまとった街並みが魅力のエリアです。",
          "そんな日本の最先端を走りながらもどこか懐かしさが残る都市風景を一本のタイムラプス映像にしました。",
        ],
        videos: [
          {
            id: "4aywjDgkVFI",
            title: "【4K】東京駅周辺（皇居・丸の内・日比谷・霞ヶ関）の都市風景タイムラプス映像",
            caption: "千代田区の街並みを収録したタイムラプス映像",
          },
        ],
      },
      {
        heading: "渋谷区のタイムラプス映像",
        description: [
          "世界的にも人気の観光名所にもなっている渋谷スクランブル交差点がある渋谷区。",
          "大規模な再開発プロジェクトにより、日本を代表するIT企業が集まるビジネスの拠点にもなっており、非常に活気のある街です。",
          "そんな東京を代表するエリアの一つでもある渋谷区の都市風景を一本のタイムラプス映像にまとめました。",
        ],
        videos: [
          {
            id: "Bz4mpMwznY4",
            title: "【4K】東京都渋谷区のタイムラプス映像（スクランブル交差点、渋谷スカイなど）",
            caption: "渋谷区の街並みを収録したタイムラプス映像",
          },
        ],
      },
      {
        heading: "横浜みなとみらいのタイムラプス映像",
        description: [
          "横浜ランドマークタワーを始めとした高層ビル群、一際目を引く大観覧車のコスモロック21、ライトアップが美しいベイブリッジやランドマークタワーなどの見どころ満載のみなとみらいエリア。",
          "そんな街の魅力を凝縮したタイムラプス映像を作成しました！ぜひチェックしてみてください。",
        ],
        videos: [
          { id: "kwBZmsRHa3I", title: "【4K】横浜みなとみらいの夜景タイムラプス映像", caption: "横浜みなとみらいのタイムラプス映像" },
          { id: "FUdXp5-Vyks", title: "【4K】横浜みなとみらいの夕景＆夜景タイムラプス映像", caption: "横浜みなとみらいのタイムラプス映像" },
        ],
      },
    ],
  },
  {
    key: "materials",
    heading: "夕景タイムラプス素材集",
    intro: "各夜景スポットの紹介ページに記載している20秒ほどの夕景タイムラプスを一覧でご紹介します。",
    videos: [
      { id: "TUgmy67Rzqw", title: "東京ミッドタウン八重洲 八重洲テラスの夕景タイムラプス", caption: "東京ミッドタウン八重洲 八重洲テラス", captionLink: "/chuo/tokyo-midtow-yaesu-terrace/" },
      { id: "pVRrDU77ZWo", title: "ウィングインターナショナルセレクト浅草駒形から眺める夕景タイムラプス", caption: "ホテルウィングインターナショナル浅草", captionLink: "/taito/wing-international-select-asakusa-komagata/" },
      { id: "F1v0MWkxhY8", title: "【夕景タイムラプス】TSUTAYA 丸の内シェアラウンジから眺める東京駅", caption: "丸ビル（TSUTAYA丸の内シェアラウンジ）", captionLink: "/chiyoda/marubiru-f5/" },
      { id: "IWG_hLYSrsM", title: "和田倉噴水公園の夕景タイムラプス映像", caption: "和田倉噴水公園", captionLink: "/chiyoda/wadakura-park/" },
      { id: "fmQ3pSUyCS4", title: "新宿高島屋タイムズスクエア ホワイトガーデンから撮影した夕景タイムラプス", caption: "新宿高島屋タイムズスクエア 屋上庭園", captionLink: "/shibuya/white-gardern/" },
      { id: "qbBQIT5t_mE", title: "お台場海浜公園から撮影した夕景タイムラプス", caption: "お台場海浜公園", captionLink: "/minato/odaiba-seaside-park/" },
      { id: "6sEwv9Yh_tg", title: "越中島公園の夕景タイムラプス", caption: "越中島公園", captionLink: "/koto/etchujima-park/" },
      { id: "VVPF0Wu996w", title: "テレコムセンター展望台 夕景タイムラプス", caption: "テレコムセンター展望台", captionLink: "/koto/telecom-center/" },
      { id: "nFONDe9KzdU", title: "キャロットタワー 展望台から撮影した夜景【タイムラプス】", caption: "キャロットタワー展望台", captionLink: "/setagaya/carrot-tower-observation/" },
      { id: "NYnO7imixQc", title: "パークホテル東京の客室から撮影した夕景タイムラプス", caption: "パークホテル東京", captionLink: "/minato/park-hotel-tokyo/" },
      { id: "tTj5HVN1a1Q", title: "メトロポリタン丸の内の客室から撮影したタイムラプス映像", caption: "ホテルメトロポリタン丸の内", captionLink: "/chiyoda/hotel-metropolitan-marunouchi/" },
      { id: "b1vgjxL22k8", title: "浅草ビューホテル 夕景タイムラプス", caption: "浅草ビューホテル", captionLink: "/taito/asakusa-view-hotel/" },
      { id: "c-Ei_gJJAhs", title: "ラビスタ東京ベイの客室から撮影した夕景タイムラプス", caption: "ラビスタ東京ベイ", captionLink: "/koto/la_tokyobay/" },
      { id: "Is9PkofQNJ0", title: "アンダーズ東京の客室から撮影した夕景タイムラプス", caption: "アンダーズ東京", captionLink: "/minato/andaz-tokyo-toranomon-hills/" },
      { id: "PuckWPdAdbY", title: "京王プラザの客室から撮影した夕景タイムラプス", caption: "京王プラザ", captionLink: "/shinjyuku/keio-plaza/" },
      { id: "BMHQJxE7_Rg", title: "インターコンチネンタル東京ベイから撮影したタイムラプス", caption: "インターコンチネンタル東京ベイ", captionLink: "/minato/interconti-tokyo-bay/" },
      { id: "ivynO3-5p3c", title: "クレストン銀座の客室から撮影した夕景タイムラプス", caption: "クレストン銀座", captionLink: "/chuo/ginza-crestonhotel/" },
      { id: "-8DrtxLHjiE", title: "アパホテル両国駅タワーから撮影した隅田川方面のタイムラプス", caption: "アパホテル両国駅タワー", captionLink: "/sumida/apa-hotel-ryogokueki-tower/" },
      { id: "FQSgDD_uIZ8", title: "東急歌舞伎町タワー 展望台から撮影した夕景タイムラプス", caption: "東急歌舞伎町タワー", captionLink: "/shinjyuku/tokyu-kabukicho-tower/" },
      { id: "Tu10UUvUIOY", title: "有明スポーツセンター 展望回廊から撮影した夕景タイムラプス", caption: "有明スポーツセンター 展望回廊", captionLink: "/koto/ariake-sports-center/" },
      { id: "U8xj7HCu-wc", title: "丸ビル35階展望フロアから撮影した霞ヶ関方面のタイムラプス映像", caption: "丸ビル 35階 展望台", captionLink: "/chiyoda/marubiru-f35/" },
      { id: "XOsxjlf9M2c", title: "Time-lapse video of Tower Hall Funabori", caption: "タワーホール船堀 展望台", captionLink: "/edogawa/towerhall-funabori/" },
      { id: "xNjInPWnkns", title: "【夕景タイムラプス】タワーホール船堀から眺める富士山", caption: "タワーホール船堀 展望台", captionLink: "/edogawa/towerhall-funabori/" },
      { id: "-iWVNXHiCLk", title: "サンシャインシティ60展望台から撮影した池袋駅方面の夕景&夜景タイムラプス", caption: "サンシャインシティ60", captionLink: "/toshima/sunshine-60/" },
      { id: "n0j3lWFRt2A", title: "東京シティビュー・スカイデッキから撮影した渋谷方面のタイムラプス映像", caption: "六本木ヒルズ展望台", captionLink: "/minato/tokyo-city-view/" },
      { id: "3oH3IoLshNg", title: "三井ガーデンホテル豊洲プレミアの客室から撮影したタイムラプス", caption: "三井ガーデンホテル豊洲プレミア", captionLink: "/koto/mitsuitoyosu-premier/" },
      { id: "9uH2O4xIcc4", title: "渋谷スカイの夕景タイムラプス", caption: "渋谷スカイ", captionLink: "/shibuya/shibuya-sky/" },
      { id: "dHvZkbUv5Tw", title: "渋谷スカイから撮影した夕景タイムラプス", caption: "渋谷スカイ", captionLink: "/shibuya/shibuya-sky/" },
      { id: "7ObfAzb-SBs", title: "渋谷スカイから撮影した夕景タイムラプス", caption: "渋谷スカイ", captionLink: "/shibuya/shibuya-sky/" },
      { id: "qD1neeRqG8c", title: "【タイムラプス】羽田空港第1ターミナル 展望デッキからの夜景", caption: "羽田空港第一ターミナル展望デッキ", captionLink: "/ota/haneda-airport/" },
      { id: "V8P6m1JEfMs", title: "アパホテル横浜ベイタワーの客室から撮影した夕景&夜景タイムラプス", caption: "アパホテル横浜ベイタワー", captionLink: "/yokohama/yokohama-bay-tower/" },
      { id: "V3WcPobFOTU", title: "アパホテル横浜ベイタワーの客室から撮影したタイムラプス映像", caption: "アパホテル横浜ベイタワー", captionLink: "/yokohama/yokohama-bay-tower/" },
      { id: "W-iIkjWeDL4", title: "横浜ランドマークタワー展望台から撮影した夕景&夜景タイムラプス（みなとみらい側）", caption: "横浜ランドマークタワー展望台", captionLink: "/yokohama/yokohama-landmark-tower/" },
      { id: "5c6H4nFogXU", title: "横浜ランドマークタワー展望台から撮影したタイムラプス（横浜駅側）", caption: "横浜ランドマークタワー展望台", captionLink: "/yokohama/yokohama-landmark-tower/" },
      { id: "IQ8_rBAZOM0", title: "川崎市役所本庁舎 25F スカイデッキから撮影した夕景タイムラプス", caption: "川崎市役所本庁舎", captionLink: "/chiyoda/kawasaki-city-hall/" },
      { id: "rfuIJMGfrfY", title: "横浜ベイブリッジスカイウォークから眺める夕景&夜景タイムラプス", caption: "横浜ベイブリッジスカイウォーク", captionLink: "/yokohama/yokohama-baybridge-sky-walk/" },
      { id: "o0-YbdEPhGU", title: "ニューオータニイン横浜プレミアムから撮影したタイムラプス", caption: "ニューオータニイン横浜プレミアム", captionLink: "/yokohama/new-otani-inn-yokohama-premium/" },
      { id: "RJ-NkzzS8jM", title: "横浜ランドマークタワー展望台から撮影した夕景&夜景タイムラプス（富士山側）", caption: "横浜ランドマークタワー展望台", captionLink: "/yokohama/yokohama-landmark-tower/" },
      { id: "2Y4jZjhmAQk", title: "横浜マリンタワー展望台の夕景&夜景タイムラプス", caption: "横浜マリンタワー", captionLink: "/yokohama/marine-tower/" },
      { id: "2FylbKAbpqE", title: "【4K】ナビオス横浜の客室から撮影した夕景&夜景タイムラプス", caption: "ナビオス横浜", captionLink: "/yokohama/navios-yokohama/" },
    ],
  },
];

const RELATED_ARTICLES = [
  {
    title: "【保存版】一眼カメラでタイムラプス動画を作る方法を5ステップで解説",
    href: "/article/create-timelapse/",
  },
  {
    title: "タイムラプス用計算機の使い方と撮影間隔、撮影枚数、フレームレートの解説",
    href: "/article/timelapse-calculator/",
  },
];

/* ===== YouTube embed component ===== */

function YouTubeEmbed({ video }: { video: Video }) {
  return (
    <figure className="tl-video-figure">
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {video.caption && (
        <figcaption className="video-caption">
          {video.captionLink ? (
            <Link href={video.captionLink}>{video.caption}</Link>
          ) : (
            video.caption
          )}
          {video.captionLink ? "の夕景タイムラプス" : ""}
        </figcaption>
      )}
    </figure>
  );
}

/* ===== Page component ===== */

export default function TimeLapsePage() {
  /** TOC items */
  const tocItems = [
    ...SECTIONS.map((s) => ({
      key: s.key,
      label: s.heading,
      children: s.subsections?.map((sub) => sub.heading),
    })),
    { key: "related", label: "タイムラプス関連の記事", children: undefined },
  ];

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb items={[{ label: PAGE_TITLE }]} />

        <article>
          {/* ヒーロー画像 */}
          <div className="tag-hero">
            <img
              src="https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-2.jpg"
              alt={PAGE_TITLE}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* タイトル + リード */}
          <div className="content-card card-padding">
            <h1 className="tag-page-title">{PAGE_TITLE}</h1>
            <div className="tag-page-lead">
              <p>
                過去に東京都内で撮影したタイムラプス映像を一本の記事にまとめました！
              </p>
              <p>
                <strong>世界の都市総合力ランキング</strong>で毎年上位に入る国際的にも有名な
                <Link href="/">東京の美しい夜景</Link>をお楽しみ下さい。
              </p>
              <p>
                映像の中で使用しているデータ素材を購入希望の方は
                <Link href="/contact/">お問い合せフォーム</Link>
                よりご連絡下さい。
              </p>
            </div>
          </div>

          {/* 目次 */}
          <nav className="tag-toc content-card card-padding">
            <p className="tag-toc-title">≡ タップできる目次</p>
            <ol className="tag-toc-list">
              {tocItems.map((item) => (
                <li key={item.key}>
                  <a href={`#section-${item.key}`}>{item.label}</a>
                  {item.children && (
                    <ol className="tag-toc-sublist">
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <a href={`#sub-${item.key}-${i}`}>{child}</a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* セクション */}
          {SECTIONS.map((section) => (
            <div key={section.key} id={`section-${section.key}`}>
              <div className="tag-spot-section-header">
                <h2 className="tag-section-heading">{section.heading}</h2>
                <p className="tag-section-intro">{section.intro}</p>
              </div>

              {/* サブセクション (映像集) */}
              {section.subsections?.map((sub, i) => (
                <section
                  key={i}
                  id={`sub-${section.key}-${i}`}
                  className="content-card card-padding tl-subsection"
                >
                  <h3 className="tl-subsection-heading">{sub.heading}</h3>
                  {sub.description.map((p, j) => (
                    <p key={j} className="tl-subsection-desc">{p}</p>
                  ))}
                  {sub.videos.map((v) => (
                    <YouTubeEmbed key={v.id} video={v} />
                  ))}
                </section>
              ))}

              {/* フラットな動画リスト (素材集) */}
              {section.videos && (
                <div className="content-card card-padding tl-material-wrapper">
                  <div className="tl-material-grid">
                    {section.videos.map((v) => (
                      <div key={v.id} className="tl-material-item">
                        <YouTubeEmbed video={v} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* 関連記事 */}
          <div id="section-related">
            <div className="tag-spot-section-header">
              <h2 className="tag-section-heading">タイムラプス関連の記事</h2>
            </div>
            <div className="tl-related-list">
              {RELATED_ARTICLES.map((article, i) => (
                <Link key={i} href={article.href} className="tl-related-card content-card card-padding">
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
