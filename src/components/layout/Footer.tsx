import Link from "next/link";
import Image from "next/image";
import { SITE_NAMES } from "@/lib/types";
import type { SiteLocale } from "@/lib/types";
import { getAreas, getAreasTranslated, getPurposeTags, getTotalSpotCount } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";
import { SNS_LINKS } from "@/lib/constants";

type FooterLabels = {
  description: (count: number) => string;
  areaHeading: string;
  tagHeading: string;
  contentHeading: string;
  contentLinks: { label: string; href: string }[];
  siteHeading: string;
  siteLinks: { label: string; href: string }[];
};

const FOOTER_LABELS = {
  ja: {
    description: (count: number) => `デート・撮影などにおすすめの東京の夜景スポットを定番から穴場まで${count}件紹介！今夜訪れるべき場所がわかる。`,
    areaHeading: "エリア",
    tagHeading: "タグページ",
    contentHeading: "コンテンツ",
    contentLinks: [
      { label: "おすすめスポット", href: "/recommend" },
      { label: "無料壁紙", href: "/wallpaper" },
      { label: "タイムラプス動画", href: "/time-lapse" },
      { label: "日の出・日の入りシミュレーター", href: "/simulator" },
      { label: "Luminar Neo ガイド", href: "/luminar" },
    ],
    siteHeading: "サイト情報",
    siteLinks: [
      { label: "運営者について", href: "/about" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "コンテンツ制作ポリシー", href: "/guidelines" },
      { label: "プライバシーポリシー", href: "/privacy-policy" },
      { label: "利用規約", href: "/caution" },
      { label: "リンク集", href: "/links" },
      { label: "サイトマップ", href: "/sitemap" },
    ],
  },
  en: {
    description: (count: number) => `Discover ${count} Tokyo night view spots — from popular landmarks to hidden gems. Find the best place to visit tonight.`,
    areaHeading: "Areas",
    tagHeading: "Tag Pages",
    contentHeading: "Content",
    contentLinks: [
      { label: "Recommended Spots", href: "/recommend" },
      { label: "Free Wallpapers", href: "/wallpaper" },
      { label: "Time-lapse Videos", href: "/time-lapse" },
      { label: "Sunrise/Sunset Simulator", href: "/simulator" },
    ],
    siteHeading: "Site Info",
    siteLinks: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Content Policy", href: "/guidelines" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/caution" },
      { label: "Links", href: "/links" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  ko: {
    description: (count: number) => `데이트·촬영 등에 추천하는 도쿄의 야경 명소 ${count}곳을 인기 스폿부터 숨은 명소까지 소개! 오늘 밤 방문할 곳을 찾아보세요.`,
    areaHeading: "에리어",
    tagHeading: "태그 페이지",
    contentHeading: "콘텐츠",
    contentLinks: [
      { label: "추천 스폿", href: "/recommend" },
      { label: "무료 배경화면", href: "/wallpaper" },
      { label: "타임랩스 영상", href: "/time-lapse" },
      { label: "일출·일몰 시뮬레이터", href: "/simulator" },
    ],
    siteHeading: "사이트 정보",
    siteLinks: [
      { label: "사이트 소개", href: "/about" },
      { label: "문의하기", href: "/contact" },
      { label: "콘텐츠 제작 정책", href: "/guidelines" },
      { label: "개인정보 처리방침", href: "/privacy-policy" },
      { label: "이용약관", href: "/caution" },
      { label: "링크 모음", href: "/links" },
      { label: "사이트맵", href: "/sitemap" },
    ],
  },
  tw: {
    description: (count: number) => `從經典到私房景點，為您介紹${count}個適合約會、攝影的東京夜景景點！找到今晚最值得造訪的地方。`,
    areaHeading: "地區",
    tagHeading: "標籤頁面",
    contentHeading: "內容",
    contentLinks: [
      { label: "推薦景點", href: "/recommend" },
      { label: "免費桌布", href: "/wallpaper" },
      { label: "縮時攝影影片", href: "/time-lapse" },
      { label: "日出・日落模擬器", href: "/simulator" },
    ],
    siteHeading: "網站資訊",
    siteLinks: [
      { label: "關於本站", href: "/about" },
      { label: "聯絡我們", href: "/contact" },
      { label: "內容製作政策", href: "/guidelines" },
      { label: "隱私權政策", href: "/privacy-policy" },
      { label: "使用條款", href: "/caution" },
      { label: "連結集", href: "/links" },
      { label: "網站地圖", href: "/sitemap" },
    ],
  },
  cn: {
    description: (count: number) => `从经典到小众景点，为您介绍${count}个适合约会、摄影的东京夜景景点！找到今晚最值得去的地方。`,
    areaHeading: "地区",
    tagHeading: "标签页面",
    contentHeading: "内容",
    contentLinks: [
      { label: "推荐景点", href: "/recommend" },
      { label: "免费壁纸", href: "/wallpaper" },
      { label: "延时摄影视频", href: "/time-lapse" },
      { label: "日出・日落模拟器", href: "/simulator" },
    ],
    siteHeading: "网站信息",
    siteLinks: [
      { label: "关于本站", href: "/about" },
      { label: "联系我们", href: "/contact" },
      { label: "内容制作政策", href: "/guidelines" },
      { label: "隐私政策", href: "/privacy-policy" },
      { label: "使用条款", href: "/caution" },
      { label: "链接集", href: "/links" },
      { label: "网站地图", href: "/sitemap" },
    ],
  },
} satisfies Record<SiteLocale, FooterLabels>;

export default async function Footer({ locale }: { locale: string | null }) {
  const labels = FOOTER_LABELS[(locale ?? "ja") as SiteLocale] ?? FOOTER_LABELS.ja;
  const homeHref = locale ? `/${locale}` : "/";
  const prefix = locale ? `/${locale}` : "";

  const siteLocale = (locale ?? "ja") as SiteLocale;
  const tagNames = locale
    ? getComponentLabels(siteLocale).homePage.purposeSearch.tagNames
    : undefined;

  const [areas, tags, spotCount] = await Promise.all([
    locale ? getAreasTranslated(locale) : getAreas(),
    getPurposeTags(),
    getTotalSpotCount(),
  ]);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            {locale ? (
              <Link href={homeHref} className="footer-site-name">
                {SITE_NAMES[locale]}
              </Link>
            ) : (
              <Link href="/" className="footer-logo-link">
                <Image src="/logo.png" alt="東京夜景ナビ" className="footer-logo" width={556} height={115} />
              </Link>
            )}
            <p className="footer-desc">{labels.description(spotCount)}</p>
          </div>
          <div className="footer-sns-list">
            {SNS_LINKS.map((sns) => (
              <a
                key={sns.name}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={sns.name}
                className="footer-sns-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={sns.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav-grid">
          {areas.length > 0 && (
            <nav>
              <p className="footer-nav-heading">{labels.areaHeading}</p>
              <ul className="footer-nav-list">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`${prefix}/${area.slug}`} className="footer-nav-link">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {tags.length > 0 && (
            <nav>
              <p className="footer-nav-heading">{labels.tagHeading}</p>
              <ul className="footer-nav-list">
                {tags.map((tag) => (
                  <li key={tag.slug}>
                    <Link href={`${prefix}/tag/${tag.slug}`} className="footer-nav-link">
                      {tagNames?.[tag.name] ?? tag.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav>
            <p className="footer-nav-heading">{labels.contentHeading}</p>
            <ul className="footer-nav-list">
              {labels.contentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="footer-nav-heading">{labels.siteHeading}</p>
            <ul className="footer-nav-list">
              {labels.siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`${prefix}${link.href}`} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="footer-copyright">
          &copy; 2022-{new Date().getFullYear()} nightscape.tokyo
        </p>
      </div>
    </footer>
  );
}
