import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS, SITE_URL, OG_LOCALE_MAP, ALL_OG_LOCALES, buildAreaHreflangAlternates } from "@/lib/types";
import { getTimeLapseSpots } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";

/* ===== Types ===== */

type Video = {
  id: string;
  title: string;
  caption?: string;
  captionLink?: string;
};

type SubsectionLabel = {
  heading: string;
  description: string[];
  areaHref?: string;
};

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
  materialsIntro: (count: number) => string;
  subsections: SubsectionLabel[];
};

/* ===== Video data (locale-independent) ===== */

const SUBSECTION_VIDEOS: Video[][] = [
  [{ id: "YuuQxNBHkvs", title: "Tokyo Japan Nightview TimeLapse【4K】" }],
  [{ id: "i3iA-bLEvDA", title: "Tokyo Hotels Twilight TimeLapse Vol.1" }],
  [{ id: "4aywjDgkVFI", title: "【4K】Chiyoda Ward Cityscape Time-Lapse" }],
  [{ id: "Bz4mpMwznY4", title: "【4K】Shibuya Ward Time-Lapse" }],
  [
    { id: "kwBZmsRHa3I", title: "【4K】Yokohama Minato Mirai Night View Time-Lapse" },
    { id: "FUdXp5-Vyks", title: "【4K】Yokohama Minato Mirai Twilight Time-Lapse" },
  ],
];

/* ===== Labels ===== */

const LABELS: Record<string, Labels> = {
  en: {
    title: "Tokyo Night View Time-Lapse Collection",
    seoTitle: "Tokyo Night View Time-Lapse Videos & Footage | Tokyo Night View Guide",
    description:
      "A curated collection of time-lapse videos filmed across Tokyo's most stunning night view spots. From Tokyo Tower to Shibuya, enjoy breathtaking twilight and night footage.",
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
    materialsIntro: (count) =>
      `A gallery of approximately 20-second twilight time-lapse clips from each night view spot (${count} clips total).`,
    subsections: [
      {
        heading: "Tokyo Night View Time-Lapse",
        description: [
          "A luxurious time-lapse video capturing the most beautiful night views in Chiyoda, Minato, Koto, Shibuya, and Shinjuku wards — compiled over 3 years. Definitely worth a watch!",
        ],
      },
      {
        heading: "Twilight Time-Lapse from Tokyo Hotels",
        description: [
          "A compilation of twilight time-lapse videos filmed from hotels with stunning night views.",
          "Watch as Tokyo's cityscape gradually lights up in a dazzling display of brilliance!",
        ],
      },
      {
        heading: "Chiyoda Ward Cityscape Time-Lapse",
        areaHref: "/chiyoda/",
        description: [
          "Chiyoda Ward is home to Tokyo Station, the Imperial Palace, the National Diet Building, and government offices — the true heart of Japan's capital.",
          "Its beautifully maintained streets carry a classic atmosphere, blending modernity with nostalgia.",
          "This time-lapse captures that unique urban landscape in a single film.",
        ],
      },
      {
        heading: "Shibuya Ward Time-Lapse",
        areaHref: "/shibuya/",
        description: [
          "Shibuya Ward is home to the world-famous Scramble Crossing, one of Tokyo's most iconic sights.",
          "Massive redevelopment has made it a hub for Japan's leading tech companies — a city full of energy.",
          "This time-lapse captures the vibrant urban landscape of one of Tokyo's most representative districts.",
        ],
      },
      {
        heading: "Yokohama Minato Mirai Time-Lapse",
        description: [
          "Minato Mirai features Yokohama Landmark Tower, the striking Cosmo Clock 21 ferris wheel, and the beautifully illuminated Bay Bridge — a spectacular skyline full of highlights.",
          "These time-lapse videos capture all the charm of this iconic waterfront district. Check them out!",
        ],
      },
    ],
  },
  ko: {
    title: "도쿄 야경 타임랩스 영상집・소재집",
    seoTitle: "도쿄 야경 타임랩스 영상집・소재집 | 도쿄 야경 가이드",
    description:
      "도쿄 도내 각지에서 촬영한 타임랩스 영상을 한 페이지에 정리했습니다. 도쿄타워, 시부야, 마루노우치 등 인기 지역의 석양~야경 타임랩스를 다수 게재.",
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
    materialsIntro: (count) =>
      `각 야경 스폿 소개 페이지에 게재된 약 20초 정도의 석양 타임랩스 전${count}편을 일람으로 소개합니다.`,
    subsections: [
      {
        heading: "도쿄 야경 타임랩스",
        description: [
          "도쿄 도내에서도 특히 야경이 아름다운 치요다구, 미나토구, 고토구, 시부야구, 신주쿠구의 야경을 담은 타임랩스 영상입니다. 3년간 모은 영상이니 꼭 확인해 보세요!",
        ],
      },
      {
        heading: "도쿄 호텔에서 촬영한 석양 타임랩스",
        description: [
          "야경이 아름다운 호텔에 숙박하면서 촬영한 석양 타임랩스 모음 영상입니다.",
          "도쿄의 거리가 서서히 화려하게 물들어 가는 모습이 매우 아름다우니 꼭 재생해 보세요!",
        ],
      },
      {
        heading: "치요다구 도시 풍경 타임랩스",
        areaHref: "/chiyoda/",
        description: [
          "도쿄의 관문인 도쿄역과 황궁·국회의사당·관청가 등 일본의 수도 기능을 담당하는 치요다구.",
          "아름답게 정비된 거리는 어딘가 클래식한 분위기를 풍기며 매력적입니다.",
          "일본의 최첨단을 달리면서도 향수를 자아내는 도시 풍경을 하나의 타임랩스 영상으로 담았습니다.",
        ],
      },
      {
        heading: "시부야구 타임랩스 영상",
        areaHref: "/shibuya/",
        description: [
          "세계적으로도 유명한 관광 명소인 시부야 스크램블 교차로가 있는 시부야구.",
          "대규모 재개발로 일본을 대표하는 IT 기업들이 모이는 비즈니스 거점이 된 활기찬 도시입니다.",
          "도쿄를 대표하는 에리어 중 하나인 시부야구의 도시 풍경을 하나의 타임랩스 영상으로 담았습니다.",
        ],
      },
      {
        heading: "요코하마 미나토미라이 타임랩스 영상",
        description: [
          "요코하마 랜드마크타워를 비롯한 고층 빌딩군, 대관람차 코스모클락21, 아름답게 라이트업된 베이브리지 등 볼거리 가득한 미나토미라이.",
          "이 매력적인 거리를 담은 타임랩스 영상입니다. 꼭 확인해 보세요.",
        ],
      },
    ],
  },
  tw: {
    title: "東京夜景縮時攝影影像集・素材集",
    seoTitle: "東京夜景縮時攝影影像集・素材集 | 東京夜景導覽",
    description:
      "匯集了在東京都內各地拍攝的縮時攝影影像。東京鐵塔、澀谷、丸之內等人氣地區的夕景～夜景縮時攝影多數收錄。",
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
    materialsIntro: (count) =>
      `一覽各夜景景點介紹頁面中收錄的約20秒夕景縮時攝影（共${count}部）。`,
    subsections: [
      {
        heading: "東京夜景縮時攝影",
        description: [
          "匯集了東京都內夜景最為壯觀的千代田區、港區、江東區、澀谷區、新宿區等地的縮時攝影影像，歷經3年積累而成，請務必欣賞！",
        ],
      },
      {
        heading: "從東京飯店拍攝的夕景縮時攝影",
        description: [
          "入住東京夜景優美的飯店時拍攝的夕景縮時攝影合輯。",
          "東京街景逐漸璀璨點亮的過程非常美麗，請務必播放觀看！",
        ],
      },
      {
        heading: "千代田區都市風景縮時攝影",
        areaHref: "/chiyoda/",
        description: [
          "千代田區擁有東京車站、皇居、國會議事堂及官廳街等日本首都核心設施。",
          "美麗整備的街道帶有一股古典氛圍，魅力十足。",
          "這部縮時攝影影像呈現了這座既現代又帶有鄉愁的都市風景。",
        ],
      },
      {
        heading: "澀谷區縮時攝影影像",
        areaHref: "/shibuya/",
        description: [
          "澀谷區擁有享譽全球的觀光名勝——澀谷十字路口。",
          "大規模再開發使其成為日本代表性IT企業匯聚的商業重鎮，充滿活力。",
          "這部縮時攝影影像呈現了東京代表性地區之一的澀谷都市風景。",
        ],
      },
      {
        heading: "橫濱港未來縮時攝影影像",
        description: [
          "港未來地區擁有橫濱地標塔、大型摩天輪宇宙時鐘21，以及美麗夜燈的海灣大橋，景點豐富。",
          "這部縮時攝影影像濃縮了該地區的所有魅力，請務必欣賞。",
        ],
      },
    ],
  },
  cn: {
    title: "东京夜景延时摄影影像集・素材集",
    seoTitle: "东京夜景延时摄影影像集・素材集 | 东京夜景导览",
    description:
      "汇集了在东京都内各地拍摄的延时摄影影像。东京塔、涩谷、丸之内等人气地区的夕景～夜景延时摄影多数收录。",
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
    materialsIntro: (count) =>
      `一览各夜景景点介绍页面中收录的约20秒夕景延时摄影（共${count}部）。`,
    subsections: [
      {
        heading: "东京夜景延时摄影",
        description: [
          "汇集了东京都内夜景最为壮观的千代田区、港区、江东区、涩谷区、新宿区等地的延时摄影影像，历经3年积累而成，请务必欣赏！",
        ],
      },
      {
        heading: "从东京酒店拍摄的夕景延时摄影",
        description: [
          "入住东京夜景优美的酒店时拍摄的夕景延时摄影合辑。",
          "东京街景逐渐璀璨点亮的过程非常美丽，请务必播放观看！",
        ],
      },
      {
        heading: "千代田区都市风景延时摄影",
        areaHref: "/chiyoda/",
        description: [
          "千代田区拥有东京车站、皇居、国会议事堂及官厅街等日本首都核心设施。",
          "美丽整备的街道带有一股古典氛围，魅力十足。",
          "这部延时摄影影像呈现了这座既现代又带有乡愁的都市风景。",
        ],
      },
      {
        heading: "涩谷区延时摄影影像",
        areaHref: "/shibuya/",
        description: [
          "涩谷区拥有享誉全球的观光名胜——涩谷十字路口。",
          "大规模再开发使其成为日本代表性IT企业汇聚的商业重镇，充满活力。",
          "这部延时摄影影像呈现了东京代表性地区之一的涩谷都市风景。",
        ],
      },
      {
        heading: "横滨港未来延时摄影影像",
        description: [
          "港未来地区拥有横滨地标塔、大型摩天轮宇宙时钟21，以及美丽夜灯的海湾大桥，景点丰富。",
          "这部延时摄影影像浓缩了该地区的所有魅力，请务必欣赏。",
        ],
      },
    ],
  },
};

/* ===== Utilities ===== */

function extractYouTubeIds(html: string): string[] {
  return [...html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g)].map((m) => m[1]);
}

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

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function TimeLapseLocalePage({ params }: PageProps) {
  const { category: locale } = await params;
  const l = LABELS[locale] ?? LABELS.en;
  const componentLabels = getComponentLabels(locale);

  const timeLapseSpots = await getTimeLapseSpots();
  const materialVideos: Video[] = timeLapseSpots.flatMap((spot) => {
    const ids = extractYouTubeIds(spot.movie);
    return ids.map((id) => ({
      id,
      title: spot.name,
      captionLink: `/${locale}/${spot.categorySlug}/${spot.slug}/`,
    }));
  });

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
                <li>
                  <a href="#section-collection">{l.collectionHeading}</a>
                  <ol className="toc-sublist">
                    {l.subsections.map((sub, i) => (
                      <li key={i}>
                        <a href={`#sub-collection-${i}`}>{sub.heading}</a>
                      </li>
                    ))}
                  </ol>
                </li>
                {materialVideos.length > 0 && (
                  <li>
                    <a href="#section-materials">{l.materialsHeading}</a>
                  </li>
                )}
              </ol>
            </nav>

            {/* タイムラプス映像集 */}
            <div id="section-collection">
              <div className="spot-section-header">
                <h2 className="section-heading">{l.collectionHeading}</h2>
                <p className="section-intro">{l.collectionIntro}</p>
              </div>
              {l.subsections.map((sub, i) => (
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
                  {(SUBSECTION_VIDEOS[i] ?? []).map((v) => (
                    <YouTubeEmbed key={v.id} video={v} />
                  ))}
                </section>
              ))}
            </div>

            {/* 夕景タイムラプス素材集（動的） */}
            {materialVideos.length > 0 && (
              <div id="section-materials">
                <div className="spot-section-header">
                  <h2 className="section-heading">{l.materialsHeading}</h2>
                  <p className="section-intro">{l.materialsIntro(materialVideos.length)}</p>
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

          <RecommendCta locale={locale} />
          <SpotShare
            url={`${SITE_URL}/${locale}/time-lapse/`}
            title={l.title}
            locale={locale}
            labels={componentLabels.share}
          />
        </div>
      </div>
    </>
  );
}
