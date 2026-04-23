import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import {
  ALL_LOCALE_SLUGS,
  LOCALE_LABELS,
  SITE_URL,
  OG_LOCALE_MAP,
  ALL_OG_LOCALES,
  buildAreaHreflangAlternates,
} from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";

export const dynamic = "force-static";

type LinksLabels = {
  title: string;
  summary: string;
  thName: string;
  thDesc: string;
  links: { name: string; href: string; description: string }[];
};

const LINKS_LABELS: Record<string, LinksLabels> = {
  en: {
    title: "Links",
    summary: "A collection of sites that have exchanged links with Tokyo Night View Guide, as well as recommended sites.",
    thName: "Site Name",
    thDesc: "Description",
    links: [
      {
        name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト",
        href: "https://www.nightview.info/",
        description: "A night view website run by night view photographer Mr. Iwasaki, introducing over 2,500 night view spots.",
      },
      {
        name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-",
        href: "https://blog.osakanight.com/",
        description: "A photography blog sharing night views and urban development news in Osaka.",
      },
      {
        name: "使い道のない風景",
        href: "https://useless-landscape.com/",
        description: "A blog introducing night view spots and retro townscapes.",
      },
      {
        name: "Nighthiking＆Nightview",
        href: "https://nighthiking.jp/",
        description: "A site introducing night hiking courses from across Japan.",
      },
      {
        name: "気ままな飛行機人のプログ",
        href: "https://tanukineko.net/",
        description: "A blog featuring a large number of domestic and international travel articles.",
      },
      {
        name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報",
        href: "https://www.ryokolink.com/",
        description: "A site compiling travel-related information including travel agencies, airlines/LCC, trains/buses, and hotels.",
      },
      {
        name: "Airランキング",
        href: "https://airw.net/art/rank.cgi?id=Night10",
        description: "A ranking site where various popular blogs and websites are registered.",
      },
      {
        name: "Urawa Night View",
        href: "https://www.sirius.gr.jp/~satoh/yakei/index.html",
        description: "A website introducing night view and sunset photos from across Japan.",
      },
    ],
  },

  ko: {
    title: "링크 모음",
    summary: "본 사이트와 상호 링크를 맺고 있는 사이트 및 추천 사이트를 소개합니다.",
    thName: "사이트명",
    thDesc: "소개",
    links: [
      {
        name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト",
        href: "https://www.nightview.info/",
        description: "야경 사진작가 이와사키 씨가 운영하는 야경 사이트로, 2,500곳 이상의 야경 명소를 소개합니다.",
      },
      {
        name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-",
        href: "https://blog.osakanight.com/",
        description: "오사카의 야경과 도시 개발 정보를 발신하는 사진 블로그입니다.",
      },
      {
        name: "使い道のない風景",
        href: "https://useless-landscape.com/",
        description: "야경 명소와 레트로한 거리 풍경 등을 소개하는 블로그입니다.",
      },
      {
        name: "Nighthiking＆Nightview",
        href: "https://nighthiking.jp/",
        description: "일본 전국의 나이트 하이킹 코스를 소개하는 사이트입니다.",
      },
      {
        name: "気ままな飛行機人のプログ",
        href: "https://tanukineko.net/",
        description: "국내외 여행기를 다수 게재하고 있는 블로그입니다.",
      },
      {
        name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報",
        href: "https://www.ryokolink.com/",
        description: "여행사, 항공사/LCC, 철도/버스, 호텔 등 여행 관련 정보를 정리한 사이트입니다.",
      },
      {
        name: "Airランキング",
        href: "https://airw.net/art/rank.cgi?id=Night10",
        description: "다양한 인기 블로그와 웹사이트가 등록된 랭킹 사이트입니다.",
      },
      {
        name: "Urawa Night View",
        href: "https://www.sirius.gr.jp/~satoh/yakei/index.html",
        description: "일본 전국의 야경 및 석양 사진을 소개하는 웹사이트입니다.",
      },
    ],
  },

  tw: {
    title: "友情連結",
    summary: "介紹與本站進行相互連結的網站，以及推薦的相關網站。",
    thName: "網站名稱",
    thDesc: "說明",
    links: [
      {
        name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト",
        href: "https://www.nightview.info/",
        description: "由夜景攝影師岩崎先生經營的夜景網站，介紹超過2,500處夜景景點。",
      },
      {
        name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-",
        href: "https://blog.osakanight.com/",
        description: "發布大阪夜景與都市開發資訊的攝影部落格。",
      },
      {
        name: "使い道のない風景",
        href: "https://useless-landscape.com/",
        description: "介紹夜景景點及復古街道風景的部落格。",
      },
      {
        name: "Nighthiking＆Nightview",
        href: "https://nighthiking.jp/",
        description: "介紹日本全國夜間健行路線的網站。",
      },
      {
        name: "気ままな飛行機人のプログ",
        href: "https://tanukineko.net/",
        description: "刊載大量國內外旅遊紀錄的部落格。",
      },
      {
        name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報",
        href: "https://www.ryokolink.com/",
        description: "匯整旅行社、航空公司/廉航、鐵路/巴士、旅館及飯店等旅遊相關資訊的網站。",
      },
      {
        name: "Airランキング",
        href: "https://airw.net/art/rank.cgi?id=Night10",
        description: "各種人氣部落格與網站登錄的排名網站。",
      },
      {
        name: "Urawa Night View",
        href: "https://www.sirius.gr.jp/~satoh/yakei/index.html",
        description: "介紹日本全國夜景及夕陽照片的網站。",
      },
    ],
  },

  cn: {
    title: "友情链接",
    summary: "介绍与本站进行相互链接的网站，以及推荐的相关网站。",
    thName: "网站名称",
    thDesc: "简介",
    links: [
      {
        name: "夜景INFO 国内最大級の夜景ドライブ＆デート情報サイト",
        href: "https://www.nightview.info/",
        description: "由夜景摄影师岩崎先生运营的夜景网站，介绍2,500处以上的夜景景点。",
      },
      {
        name: "大阪 at Night ブログ -大阪の夜景と都市風景探訪-",
        href: "https://blog.osakanight.com/",
        description: "发布大阪夜景与城市开发信息的摄影博客。",
      },
      {
        name: "使い道のない風景",
        href: "https://useless-landscape.com/",
        description: "介绍夜景景点及复古街道风景的博客。",
      },
      {
        name: "Nighthiking＆Nightview",
        href: "https://nighthiking.jp/",
        description: "介绍日本全国夜间徒步路线的网站。",
      },
      {
        name: "気ままな飛行機人のプログ",
        href: "https://tanukineko.net/",
        description: "刊载大量国内外旅行游记的博客。",
      },
      {
        name: "「旅行リンク Travel Page®」海外と国内の旅行・観光情報",
        href: "https://www.ryokolink.com/",
        description: "汇总旅行社、航空公司/廉航、铁路/巴士、旅馆及酒店等旅行相关信息的网站。",
      },
      {
        name: "Airランキング",
        href: "https://airw.net/art/rank.cgi?id=Night10",
        description: "各类人气博客与网站注册的排名网站。",
      },
      {
        name: "Urawa Night View",
        href: "https://www.sirius.gr.jp/~satoh/yakei/index.html",
        description: "介绍日本全国夜景及夕阳照片的网站。",
      },
    ],
  },
};

export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const l = LINKS_LABELS[category] ?? LINKS_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[category] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${category}/links/`;
  return {
    title: l.title,
    description: l.summary,
    openGraph: {
      title: l.title,
      description: l.summary,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "links", ALL_LOCALE_SLUGS),
    },
  };
}

export default async function LinksPageI18n({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = LINKS_LABELS[locale] ?? LINKS_LABELS.en;

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="links"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <ArticleLayout
        locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        <div className="content-card card-padding article-body">
          <table className="article-table">
            <thead>
              <tr>
                <th>{l.thName}</th>
                <th>{l.thDesc}</th>
              </tr>
            </thead>
            <tbody>
              {l.links.map((link) => (
                <tr key={link.href}>
                  <td>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </td>
                  <td>{link.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleLayout>
    </>
  );
}
