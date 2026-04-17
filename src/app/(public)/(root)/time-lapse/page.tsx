import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import { getTimeLapseSpots } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";

const PAGE_TITLE = "東京夜景のタイムラプス映像集・素材集";
const PAGE_DESCRIPTION =
  "東京都内で撮影したタイムラプス映像をまとめてご紹介。東京タワー・渋谷・丸の内など人気エリアの夕景〜夜景タイムラプスを多数掲載。映像素材の購入も可能です。";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | 東京夜景ナビ` },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "ja_JP",
    alternateLocale: ["en_US", "ko_KR", "zh_TW", "zh_CN"],
  },
  twitter: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  alternates: {
    canonical: `${SITE_URL}/time-lapse/`,
    languages: {
      ja: `${SITE_URL}/time-lapse/`,
      "x-default": `${SITE_URL}/time-lapse/`,
    },
  },
};

export const revalidate = 3600;
export const fetchCache = "force-cache";

/* ===== Video data ===== */

type Video = {
  id: string;
  title: string;
  caption?: string;
  captionLink?: string;
};

type Subsection = { heading: string; description: string[]; videos: Video[]; areaHref?: string };

const COLLECTION_SUBSECTIONS: Subsection[] = [
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
    areaHref: "/chiyoda/",
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
    areaHref: "/shibuya/",
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
];

/* ===== Utilities ===== */

/** movie フィールドの HTML から YouTube ID をすべて抽出する */
function extractYouTubeIds(html: string): string[] {
  return [...html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g)].map((m) => m[1]);
}

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

export default async function TimeLapsePage() {
  const timeLapseSpots = await getTimeLapseSpots();

  const materialVideos: Video[] = timeLapseSpots.flatMap((spot) => {
    const ids = extractYouTubeIds(spot.movie);
    return ids.map((id) => ({
      id,
      title: spot.name,
      caption: spot.name,
      captionLink: `/${spot.categorySlug}/${spot.slug}/`,
    }));
  });

  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug="time-lapse"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: PAGE_TITLE }]} />

          <article>
            {/* firstVisual: ヒーロー画像 + タイトル + リード文 */}
            <div className="firstVisual">
              <figure className="firstVisual-image">
                <Image
                  src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/wakura-park-2.jpg"
                  alt={PAGE_TITLE}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </figure>
              <header className="firstVisual-header">
                <h1 className="firstVisual-title">{PAGE_TITLE}</h1>
              </header>
              <div className="firstVisual-body">
                <p>過去に東京都内で撮影したタイムラプス映像を一本の記事にまとめました！</p>
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
          <nav className="toc content-card card-padding">
            <p className="toc-title">≡ タップできる目次</p>
            <ol className="toc-list">
              <li>
                <a href="#section-collection">タイムラプス映像集</a>
                <ol className="toc-sublist">
                  {COLLECTION_SUBSECTIONS.map((sub, i) => (
                    <li key={i}>
                      <a href={`#sub-collection-${i}`}>{sub.heading}</a>
                    </li>
                  ))}
                </ol>
              </li>
              {materialVideos.length > 0 && (
                <li>
                  <a href="#section-materials">夕景タイムラプス素材集</a>
                </li>
              )}
            </ol>
          </nav>

          {/* タイムラプス映像集 */}
          <div id="section-collection">
            <div className="spot-section-header">
              <h2 className="section-heading">タイムラプス映像集</h2>
              <p className="section-intro">YouTubeで公開しているタイムラプス映像作品の一部を紹介します。</p>
            </div>
            {COLLECTION_SUBSECTIONS.map((sub, i) => (
              <section
                key={i}
                id={`sub-collection-${i}`}
                className="content-card card-padding tl-subsection"
              >
                <h3 className="tl-subsection-heading">
                  {sub.areaHref ? (
                    <Link href={sub.areaHref}>{sub.heading}</Link>
                  ) : (
                    sub.heading
                  )}
                </h3>
                {sub.description.map((p, j) => (
                  <p key={j} className="tl-subsection-desc">{p}</p>
                ))}
                {sub.videos.map((v) => (
                  <YouTubeEmbed key={v.id} video={v} />
                ))}
              </section>
            ))}
          </div>

          {/* 夕景タイムラプス素材集（動的） */}
          {materialVideos.length > 0 && (
            <div id="section-materials">
              <div className="spot-section-header">
                <h2 className="section-heading">夕景タイムラプス素材集</h2>
                <p className="section-intro">各夜景スポットの紹介ページに記載している20秒ほどの夕景タイムラプス（全{materialVideos.length}件）を一覧でご紹介します。</p>
              </div>
              <div className="content-card card-padding tl-material-wrapper">
                <div className="tl-material-grid">
                  {materialVideos.map((v) => (
                    <div key={v.id} className="tl-material-item">
                      <YouTubeEmbed video={v} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          </article>

          {/* 関連する夜景スポット */}
          <section className="content-card card-padding">
            <h2 className="area-section-heading">映像に登場する夜景スポットを探す</h2>
            <p className="area-page-lead" style={{ marginBottom: "16px" }}>タイムラプスの撮影地を実際に訪れてみませんか？各エリアの夜景スポット情報をご覧いただけます。</p>
            <div className="pill-tag-list">
              <Link href="/chiyoda/" className="pill-tag">千代田区（東京駅・丸の内）</Link>
              <Link href="/shibuya/" className="pill-tag">渋谷区（スクランブル交差点）</Link>
              <Link href="/minato/" className="pill-tag">港区（東京タワー）</Link>
              <Link href="/sumida/" className="pill-tag">墨田区（スカイツリー）</Link>
              <Link href="/tag/timelapse/" className="pill-tag">タイムラプス撮影スポット一覧</Link>
              <Link href="/recommend/" className="pill-tag">おすすめ夜景スポット一覧</Link>
            </div>
          </section>

          <RecommendCta locale={null} />
          <SpotShare
            url={`${SITE_URL}/time-lapse/`}
            title={PAGE_TITLE}
            labels={getComponentLabels("ja").share}
          />
        </div>
      </div>
    </>
  );
}
