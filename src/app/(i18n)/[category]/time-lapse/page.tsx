import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import HomeAuthor from "@/components/home/HomeAuthor";
import SpotShare from "@/components/spot/SpotShare";
import { getComponentLabels } from "@/lib/i18n-labels";

/* ===== 翻訳ラベル ===== */

type Labels = {
  title: string;
  seoTitle: string;
  description: string;
  leadLines: string[];
  contactLinkText: string;
  tocTitle: string;
  collectionHeading: string;
  collectionIntro: string;
  materialsHeading: string;
  materialsIntro: string;
  relatedHeading: string;
  relatedArticles: { title: string; href: string }[];
};

const LABELS: Record<string, Labels> = {
  en: {
    title: "Tokyo Night View Time-Lapse Collection",
    seoTitle: "Tokyo Night View Time-Lapse Videos & Footage | Tokyo Night View Guide",
    description: "A curated collection of time-lapse videos filmed across Tokyo's most stunning night view spots. From Tokyo Tower to Shibuya, enjoy breathtaking twilight and night footage.",
    leadLines: [
      "A collection of time-lapse videos filmed across Tokyo!",
      "Tokyo consistently ranks among the top cities in the Global Power City Index. Enjoy the beautiful night views of this world-renowned metropolis.",
      "If you wish to purchase footage used in these videos, please contact us via the inquiry form.",
    ],
    contactLinkText: "inquiry form",
    tocTitle: "≡ Table of Contents",
    collectionHeading: "Time-Lapse Collection",
    collectionIntro: "Featured time-lapse works published on YouTube.",
    materialsHeading: "Twilight Time-Lapse Footage",
    materialsIntro: "A gallery of approximately 20-second twilight time-lapse clips from each night view spot.",
    relatedHeading: "Related Articles",
    relatedArticles: [
      { title: "How to Create Time-Lapse Videos with a DSLR Camera (5 Steps)", href: "/article/create-timelapse/" },
      { title: "Time-Lapse Calculator — Interval, Shots & Frame Rate Explained", href: "/article/timelapse-calculator/" },
    ],
  },
  ko: {
    title: "도쿄 야경 타임랩스 영상집・소재집",
    seoTitle: "도쿄 야경 타임랩스 영상집・소재집 | 도쿄 야경 가이드",
    description: "도쿄 도내 각지에서 촬영한 타임랩스 영상을 한 페이지에 정리했습니다. 도쿄타워, 시부야, 마루노우치 등 인기 지역의 석양~야경 타임랩스를 다수 게재.",
    leadLines: [
      "도쿄 도내에서 촬영한 타임랩스 영상을 한 페이지에 정리했습니다!",
      "세계 도시 종합력 랭킹에서 매년 상위에 오르는 국제적으로도 유명한 도쿄의 아름다운 야경을 감상해 보세요.",
      "영상에 사용된 데이터 소재 구매를 원하시는 분은 문의 양식으로 연락해 주세요.",
    ],
    contactLinkText: "문의 양식",
    tocTitle: "≡ 탭으로 이동 가능한 목차",
    collectionHeading: "타임랩스 영상집",
    collectionIntro: "YouTube에서 공개하고 있는 타임랩스 영상 작품 중 일부를 소개합니다.",
    materialsHeading: "석양 타임랩스 소재집",
    materialsIntro: "각 야경 스폿 소개 페이지에 게재된 약 20초 정도의 석양 타임랩스를 일람으로 소개합니다.",
    relatedHeading: "타임랩스 관련 기사",
    relatedArticles: [
      { title: "DSLR 카메라로 타임랩스 동영상 만드는 방법 5단계 해설", href: "/article/create-timelapse/" },
      { title: "타임랩스 계산기 사용법 — 촬영 간격・매수・프레임레이트 해설", href: "/article/timelapse-calculator/" },
    ],
  },
  tw: {
    title: "東京夜景縮時攝影影像集・素材集",
    seoTitle: "東京夜景縮時攝影影像集・素材集 | 東京夜景導覽",
    description: "匯集了在東京都內各地拍攝的縮時攝影影像。東京鐵塔、澀谷、丸之內等人氣地區的夕景～夜景縮時攝影多數收錄。",
    leadLines: [
      "將過去在東京都內拍攝的縮時攝影影像整理成一篇文章！",
      "在全球城市綜合實力排名中每年名列前茅的國際知名城市——東京的美麗夜景，請盡情欣賞。",
      "如欲購買影像中使用的素材，請透過聯絡表單與我們聯繫。",
    ],
    contactLinkText: "聯絡表單",
    tocTitle: "≡ 可點擊的目錄",
    collectionHeading: "縮時攝影影像集",
    collectionIntro: "介紹在YouTube上公開的縮時攝影影像作品。",
    materialsHeading: "夕景縮時攝影素材集",
    materialsIntro: "一覽各夜景景點介紹頁面中收錄的約20秒夕景縮時攝影。",
    relatedHeading: "縮時攝影相關文章",
    relatedArticles: [
      { title: "【完整版】用單眼相機製作縮時攝影影片的5步驟解說", href: "/article/create-timelapse/" },
      { title: "縮時攝影計算器使用方法——拍攝間隔・張數・幀率解說", href: "/article/timelapse-calculator/" },
    ],
  },
  cn: {
    title: "东京夜景延时摄影影像集・素材集",
    seoTitle: "东京夜景延时摄影影像集・素材集 | 东京夜景导览",
    description: "汇集了在东京都内各地拍摄的延时摄影影像。东京塔、涩谷、丸之内等人气地区的夕景～夜景延时摄影多数收录。",
    leadLines: [
      "将过去在东京都内拍摄的延时摄影影像整理成一篇文章！",
      "在全球城市综合实力排名中每年名列前茅的国际知名城市——东京的美丽夜景，请尽情欣赏。",
      "如欲购买影像中使用的素材，请通过联系表单与我们联系。",
    ],
    contactLinkText: "联系表单",
    tocTitle: "≡ 可点击的目录",
    collectionHeading: "延时摄影影像集",
    collectionIntro: "介绍在YouTube上公开的延时摄影影像作品。",
    materialsHeading: "夕景延时摄影素材集",
    materialsIntro: "一览各夜景景点介绍页面中收录的约20秒夕景延时摄影。",
    relatedHeading: "延时摄影相关文章",
    relatedArticles: [
      { title: "【完整版】用单反相机制作延时摄影视频的5步骤解说", href: "/article/create-timelapse/" },
      { title: "延时摄影计算器使用方法——拍摄间隔・张数・帧率解说", href: "/article/timelapse-calculator/" },
    ],
  },
};

/* ===== Video data (shared across locales) ===== */

type Video = {
  id: string;
  title: string;
  caption?: string;
  captionLink?: string;
};

type Subsection = { heading: string; description: string[]; videos: Video[] };

const COLLECTION_SUBSECTIONS: Subsection[] = [
  {
    heading: "Tokyo Night View Time-Lapse",
    description: ["A luxurious time-lapse video capturing the most beautiful night views in Chiyoda, Minato, Koto, Shibuya, and Shinjuku wards."],
    videos: [{ id: "YuuQxNBHkvs", title: "東京夜景タイムラプス | Tokyo Japan Nightview TimeLapse【4K】" }],
  },
  {
    heading: "Twilight Time-Lapse from Tokyo Hotels",
    description: ["A compilation of twilight time-lapse videos filmed from hotels with stunning night views."],
    videos: [{ id: "i3iA-bLEvDA", title: "Tokyo Hotels Twilight TimeLapse Vol.1" }],
  },
  {
    heading: "Chiyoda Ward Cityscape Time-Lapse",
    description: ["A time-lapse of the elegant cityscape around Tokyo Station, the Imperial Palace, and Kasumigaseki."],
    videos: [{ id: "4aywjDgkVFI", title: "【4K】Chiyoda Ward Cityscape Time-Lapse" }],
  },
  {
    heading: "Shibuya Ward Time-Lapse",
    description: ["A time-lapse capturing the vibrant urban landscape of Shibuya, home to the world-famous Scramble Crossing."],
    videos: [{ id: "Bz4mpMwznY4", title: "【4K】Shibuya Ward Time-Lapse" }],
  },
  {
    heading: "Yokohama Minato Mirai Time-Lapse",
    description: ["Time-lapse videos showcasing the stunning skyline, Cosmo Clock 21 ferris wheel, and Bay Bridge of Minato Mirai."],
    videos: [
      { id: "kwBZmsRHa3I", title: "【4K】Yokohama Minato Mirai Night View Time-Lapse" },
      { id: "FUdXp5-Vyks", title: "【4K】Yokohama Minato Mirai Twilight Time-Lapse" },
    ],
  },
];

const MATERIAL_VIDEOS: Video[] = [
  { id: "TUgmy67Rzqw", title: "東京ミッドタウン八重洲 八重洲テラスの夕景タイムラプス", caption: "Tokyo Midtown Yaesu Terrace", captionLink: "/chuo/tokyo-midtow-yaesu-terrace/" },
  { id: "pVRrDU77ZWo", title: "ウィングインターナショナルセレクト浅草駒形 夕景タイムラプス", caption: "Wing International Select Asakusa", captionLink: "/taito/wing-international-select-asakusa-komagata/" },
  { id: "F1v0MWkxhY8", title: "TSUTAYA 丸の内シェアラウンジ 夕景タイムラプス", caption: "Marunouchi Building (TSUTAYA Share Lounge)", captionLink: "/chiyoda/marubiru-f5/" },
  { id: "IWG_hLYSrsM", title: "和田倉噴水公園の夕景タイムラプス映像", caption: "Wadakura Fountain Park", captionLink: "/chiyoda/wadakura-park/" },
  { id: "fmQ3pSUyCS4", title: "新宿高島屋タイムズスクエア 夕景タイムラプス", caption: "Shinjuku Takashimaya Rooftop Garden", captionLink: "/shibuya/white-gardern/" },
  { id: "qbBQIT5t_mE", title: "お台場海浜公園 夕景タイムラプス", caption: "Odaiba Seaside Park", captionLink: "/minato/odaiba-seaside-park/" },
  { id: "6sEwv9Yh_tg", title: "越中島公園の夕景タイムラプス", caption: "Etchujima Park", captionLink: "/koto/etchujima-park/" },
  { id: "VVPF0Wu996w", title: "テレコムセンター展望台 夕景タイムラプス", caption: "Telecom Center Observatory", captionLink: "/koto/telecom-center/" },
  { id: "nFONDe9KzdU", title: "キャロットタワー展望台 タイムラプス", caption: "Carrot Tower Observatory", captionLink: "/setagaya/carrot-tower-observation/" },
  { id: "NYnO7imixQc", title: "パークホテル東京 夕景タイムラプス", caption: "Park Hotel Tokyo", captionLink: "/minato/park-hotel-tokyo/" },
  { id: "tTj5HVN1a1Q", title: "ホテルメトロポリタン丸の内 タイムラプス", caption: "Hotel Metropolitan Marunouchi", captionLink: "/chiyoda/hotel-metropolitan-marunouchi/" },
  { id: "b1vgjxL22k8", title: "浅草ビューホテル 夕景タイムラプス", caption: "Asakusa View Hotel", captionLink: "/taito/asakusa-view-hotel/" },
  { id: "c-Ei_gJJAhs", title: "ラビスタ東京ベイ 夕景タイムラプス", caption: "La Vista Tokyo Bay", captionLink: "/koto/la_tokyobay/" },
  { id: "Is9PkofQNJ0", title: "アンダーズ東京 夕景タイムラプス", caption: "Andaz Tokyo", captionLink: "/minato/andaz-tokyo-toranomon-hills/" },
  { id: "PuckWPdAdbY", title: "京王プラザ 夕景タイムラプス", caption: "Keio Plaza Hotel", captionLink: "/shinjyuku/keio-plaza/" },
  { id: "BMHQJxE7_Rg", title: "インターコンチネンタル東京ベイ タイムラプス", caption: "InterContinental Tokyo Bay", captionLink: "/minato/interconti-tokyo-bay/" },
  { id: "9uH2O4xIcc4", title: "渋谷スカイ 夕景タイムラプス", caption: "Shibuya Sky", captionLink: "/shibuya/shibuya-sky/" },
  { id: "dHvZkbUv5Tw", title: "渋谷スカイ 夕景タイムラプス 2", caption: "Shibuya Sky", captionLink: "/shibuya/shibuya-sky/" },
  { id: "7ObfAzb-SBs", title: "渋谷スカイ 夕景タイムラプス 3", caption: "Shibuya Sky", captionLink: "/shibuya/shibuya-sky/" },
  { id: "qD1neeRqG8c", title: "羽田空港 展望デッキ タイムラプス", caption: "Haneda Airport Terminal 1", captionLink: "/ota/haneda-airport/" },
  { id: "3oH3IoLshNg", title: "三井ガーデンホテル豊洲プレミア タイムラプス", caption: "Mitsui Garden Hotel Toyosu Premier", captionLink: "/koto/mitsuitoyosu-premier/" },
  { id: "n0j3lWFRt2A", title: "六本木ヒルズ展望台 タイムラプス", caption: "Roppongi Hills Observatory", captionLink: "/minato/tokyo-city-view/" },
  { id: "-iWVNXHiCLk", title: "サンシャインシティ60 タイムラプス", caption: "Sunshine 60 Observatory", captionLink: "/toshima/sunshine-60/" },
];

/* ===== YouTube embed ===== */

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
        </figcaption>
      )}
    </figure>
  );
}

/* ===== Metadata + Page ===== */

type PageProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: locale } = await params;
  const l = LABELS[locale] ?? LABELS.en;
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/time-lapse/`;
  return {
    title: { absolute: l.seoTitle },
    description: l.description,
    openGraph: {
      title: l.title,
      description: l.description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    twitter: { title: l.title, description: l.description },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "time-lapse", ALL_LOCALE_SLUGS),
    },
  };
}

export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((locale) => ({ category: locale }));
}

export const revalidate = 3600;

export default async function TimeLapseLocalePage({ params }: PageProps) {
  const { category: locale } = await params;
  const l = LABELS[locale] ?? LABELS.en;
  const componentLabels = getComponentLabels(locale);

  const tocItems = [
    { key: "collection", label: l.collectionHeading, children: COLLECTION_SUBSECTIONS.map((s) => s.heading) },
    { key: "materials", label: l.materialsHeading, children: undefined as string[] | undefined },
    { key: "related", label: l.relatedHeading, children: undefined as string[] | undefined },
  ];

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="time-lapse"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: l.title }]} locale={locale} />

          <article>
            {/* firstVisual: ヒーロー画像 + タイトル + リード文 */}
            <div className="firstVisual">
              <figure className="firstVisual-image">
                <Image
                  src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/wakura-park-2.jpg"
                  alt={l.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </figure>
              <header className="firstVisual-header">
                <h1 className="firstVisual-title">{l.title}</h1>
              </header>
              <div className="firstVisual-body">
                {l.leadLines.map((line, i) => {
                  if (line.includes(l.contactLinkText)) {
                    const parts = line.split(l.contactLinkText);
                    return (
                      <p key={i}>
                        {parts[0]}
                        <Link href="/contact/">{l.contactLinkText}</Link>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>

            {/* 目次 */}
            <nav className="toc content-card card-padding">
              <p className="toc-title">{l.tocTitle}</p>
              <ol className="toc-list">
                {tocItems.map((item) => (
                  <li key={item.key}>
                    <a href={`#section-${item.key}`}>{item.label}</a>
                    {item.children && (
                      <ol className="toc-sublist">
                        {item.children.map((child, i) => (
                          <li key={i}>
                            <a href={`#sub-collection-${i}`}>{child}</a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* タイムラプス映像集 */}
            <div id="section-collection">
              <div className="spot-section-header">
                <h2 className="section-heading">{l.collectionHeading}</h2>
                <p className="section-intro">{l.collectionIntro}</p>
              </div>
              {COLLECTION_SUBSECTIONS.map((sub, i) => (
                <section
                  key={i}
                  id={`sub-collection-${i}`}
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
            </div>

            {/* 夕景タイムラプス素材集 */}
            <div id="section-materials">
              <div className="spot-section-header">
                <h2 className="section-heading">{l.materialsHeading}</h2>
                <p className="section-intro">{l.materialsIntro}</p>
              </div>
              <div className="content-card card-padding tl-material-wrapper">
                <div className="tl-material-grid">
                  {MATERIAL_VIDEOS.map((v) => (
                    <div key={v.id} className="tl-material-item">
                      <YouTubeEmbed video={v} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 関連記事 */}
            <div id="section-related">
              <div className="spot-section-header">
                <h2 className="section-heading">{l.relatedHeading}</h2>
              </div>
              <div className="tl-related-list">
                {l.relatedArticles.map((article, i) => (
                  <Link key={i} href={article.href} className="tl-related-card content-card card-padding">
                    {article.title}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
      <HomeAuthor labels={componentLabels.homeAuthor} locale={locale} />
      <SpotShare
        url={`${SITE_URL}/${locale}/time-lapse/`}
        title={l.title}
        locale={locale}
        labels={componentLabels.share}
      />
    </>
  );
}
