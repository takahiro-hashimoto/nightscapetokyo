import Link from "next/link";
import { SITE_NAMES } from "@/lib/types";

const SNS_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1", icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "X", href: "https://twitter.com/takahiro__1202", icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { name: "Instagram", href: "https://www.instagram.com/nightscape.tokyo/", icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "TikTok", href: "https://www.tiktok.com/@nightscape_tokyo", icon: "M19.3 5.8a5.2 5.2 0 0 1-3.1-2.7A5.1 5.1 0 0 1 15.6 1h-3.8v14.4a2.9 2.9 0 0 1-2.9 2.7 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V7.5a6.7 6.7 0 0 0-.9-.1A6.8 6.8 0 0 0 2 14.2a6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8V8.4a9 9 0 0 0 5.4 1.8V6.4a5.2 5.2 0 0 1-1.7-.6z" },
  { name: "Pinterest", href: "https://www.pinterest.jp/0gsnym2k9zr0vps04rfjjkkb4fwsu4/", icon: "M12 0C5.4 0 0 5.4 0 12c0 4.7 2.7 8.7 6.6 10.7-.1-.8-.2-2 0-2.9.2-.8 1.2-5.2 1.2-5.2s-.3-.6-.3-1.6c0-1.5.9-2.6 1.9-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.8-4.2-4.2-4.2-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3-.1.3-.3 1-.3 1.2-.1.2-.2.2-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.8-.8 1.9-1.2 2.5.9.3 1.8.4 2.8.4 6.6 0 12-5.4 12-12S18.6 0 12 0z" },
  { name: "Lemon8", href: "https://www.lemon8-app.com/nightscape_tokyo", icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3.5a2.2 2.2 0 0 0-2.2 2.2c0 .5.2 1 .5 1.4A4.5 4.5 0 0 0 7.5 13 4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-2.8-4.2c.3-.3.5-.8.5-1.3A2.2 2.2 0 0 0 12 5.5z" },
];

type FooterLabels = {
  description: string;
  areaHeading: string;
  areas: { label: string; href: string }[];
  contentHeading: string;
  contentLinks: { label: string; href: string }[];
  siteHeading: string;
  siteLinks: { label: string; href: string }[];
};

const FOOTER_LABELS: Record<string, FooterLabels> = {
  ja: {
    description: "デート・撮影などにおすすめの東京の夜景スポットを定番から穴場まで紹介",
    areaHeading: "エリア",
    areas: [
      { label: "港区", href: "/minato" },
      { label: "渋谷区", href: "/shibuya" },
      { label: "千代田区", href: "/chiyoda" },
      { label: "新宿区", href: "/shinjuku" },
      { label: "中央区", href: "/chuo" },
      { label: "墨田区", href: "/sumida" },
      { label: "豊島区", href: "/toshima" },
      { label: "品川区", href: "/shinagawa" },
    ],
    contentHeading: "コンテンツ",
    contentLinks: [
      { label: "おすすめスポット", href: "/recommend" },
      { label: "タイムラプス動画", href: "/time-lapse" },
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
    description: "Discover Tokyo's best night view spots — from popular landmarks to hidden gems. Perfect for dates and photography.",
    areaHeading: "Areas",
    areas: [
      { label: "Minato", href: "/en/minato" },
      { label: "Shibuya", href: "/en/shibuya" },
      { label: "Chiyoda", href: "/en/chiyoda" },
      { label: "Shinjuku", href: "/en/shinjuku" },
      { label: "Chuo", href: "/en/chuo" },
      { label: "Sumida", href: "/en/sumida" },
      { label: "Toshima", href: "/en/toshima" },
      { label: "Shinagawa", href: "/en/shinagawa" },
    ],
    contentHeading: "Content",
    contentLinks: [
      { label: "Recommended Spots", href: "/en/recommend" },
      { label: "Time-lapse Videos", href: "/en/time-lapse" },
    ],
    siteHeading: "Site Info",
    siteLinks: [
      { label: "About", href: "/en/about" },
      { label: "Contact", href: "/en/contact" },
      { label: "Content Policy", href: "/en/guidelines" },
      { label: "Privacy Policy", href: "/en/privacy-policy" },
      { label: "Terms of Use", href: "/en/caution" },
      { label: "Links", href: "/en/links" },
      { label: "Sitemap", href: "/en/sitemap" },
    ],
  },
  ko: {
    description: "데이트·촬영 등에 추천하는 도쿄의 야경 명소를 인기 스폿부터 숨은 명소까지 소개합니다.",
    areaHeading: "에리어",
    areas: [
      { label: "미나토구", href: "/ko/minato" },
      { label: "시부야구", href: "/ko/shibuya" },
      { label: "치요다구", href: "/ko/chiyoda" },
      { label: "신주쿠구", href: "/ko/shinjuku" },
      { label: "주오구", href: "/ko/chuo" },
      { label: "스미다구", href: "/ko/sumida" },
      { label: "도시마구", href: "/ko/toshima" },
      { label: "시나가와구", href: "/ko/shinagawa" },
    ],
    contentHeading: "콘텐츠",
    contentLinks: [
      { label: "추천 스폿", href: "/ko/recommend" },
      { label: "타임랩스 영상", href: "/ko/time-lapse" },
    ],
    siteHeading: "사이트 정보",
    siteLinks: [
      { label: "사이트 소개", href: "/ko/about" },
      { label: "문의하기", href: "/ko/contact" },
      { label: "콘텐츠 제작 정책", href: "/ko/guidelines" },
      { label: "개인정보 처리방침", href: "/ko/privacy-policy" },
      { label: "이용약관", href: "/ko/caution" },
      { label: "링크 모음", href: "/ko/links" },
      { label: "사이트맵", href: "/ko/sitemap" },
    ],
  },
  tw: {
    description: "從經典到私房景點，為您介紹適合約會、攝影的東京夜景景點。",
    areaHeading: "地區",
    areas: [
      { label: "港區", href: "/tw/minato" },
      { label: "澀谷區", href: "/tw/shibuya" },
      { label: "千代田區", href: "/tw/chiyoda" },
      { label: "新宿區", href: "/tw/shinjuku" },
      { label: "中央區", href: "/tw/chuo" },
      { label: "墨田區", href: "/tw/sumida" },
      { label: "豐島區", href: "/tw/toshima" },
      { label: "品川區", href: "/tw/shinagawa" },
    ],
    contentHeading: "內容",
    contentLinks: [
      { label: "推薦景點", href: "/tw/recommend" },
      { label: "縮時攝影影片", href: "/tw/time-lapse" },
    ],
    siteHeading: "網站資訊",
    siteLinks: [
      { label: "關於本站", href: "/tw/about" },
      { label: "聯絡我們", href: "/tw/contact" },
      { label: "內容製作政策", href: "/tw/guidelines" },
      { label: "隱私權政策", href: "/tw/privacy-policy" },
      { label: "使用條款", href: "/tw/caution" },
      { label: "連結集", href: "/tw/links" },
      { label: "網站地圖", href: "/tw/sitemap" },
    ],
  },
  cn: {
    description: "从经典到小众景点，为您介绍适合约会、摄影的东京夜景景点。",
    areaHeading: "地区",
    areas: [
      { label: "港区", href: "/cn/minato" },
      { label: "涩谷区", href: "/cn/shibuya" },
      { label: "千代田区", href: "/cn/chiyoda" },
      { label: "新宿区", href: "/cn/shinjuku" },
      { label: "中央区", href: "/cn/chuo" },
      { label: "墨田区", href: "/cn/sumida" },
      { label: "丰岛区", href: "/cn/toshima" },
      { label: "品川区", href: "/cn/shinagawa" },
    ],
    contentHeading: "内容",
    contentLinks: [
      { label: "推荐景点", href: "/cn/recommend" },
      { label: "延时摄影视频", href: "/cn/time-lapse" },
    ],
    siteHeading: "网站信息",
    siteLinks: [
      { label: "关于本站", href: "/cn/about" },
      { label: "联系我们", href: "/cn/contact" },
      { label: "内容制作政策", href: "/cn/guidelines" },
      { label: "隐私政策", href: "/cn/privacy-policy" },
      { label: "使用条款", href: "/cn/caution" },
      { label: "链接集", href: "/cn/links" },
      { label: "网站地图", href: "/cn/sitemap" },
    ],
  },
};

export default function Footer({ locale }: { locale: string | null }) {
  const labels = FOOTER_LABELS[locale ?? "ja"];
  const homeHref = locale ? `/${locale}` : "/";

  return (
    <footer className="bg-[var(--color-header-bg)] mt-0">
      <div className="max-w-[960px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 text-sm text-[rgba(255,255,255,0.6)]">
          {/* Column 1: Site info + SNS */}
          <div>
            {locale ? (
              <Link href={homeHref} className="text-base font-bold text-white block mb-2">
                {SITE_NAMES[locale]}
              </Link>
            ) : (
              <Link href="/" className="block mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="東京夜景ナビ"
                  height={28}
                  style={{ height: 28, width: "auto" }}
                />
              </Link>
            )}
            <p className="text-xs leading-relaxed max-w-[320px]">
              {labels.description}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {SNS_LINKS.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={sns.name}
                  className="w-8 h-8 rounded-md bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={sns.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Area links */}
          <nav>
            <h3 className="text-sm font-bold text-white mb-3">{labels.areaHeading}</h3>
            <ul className="space-y-2">
              {labels.areas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Content links */}
          <nav>
            <h3 className="text-sm font-bold text-white mb-3">{labels.contentHeading}</h3>
            <ul className="space-y-2">
              {labels.contentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Site info links */}
          <nav>
            <h3 className="text-sm font-bold text-white mb-3">{labels.siteHeading}</h3>
            <ul className="space-y-2">
              {labels.siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-center text-xs text-[rgba(255,255,255,0.4)] mt-8">
          &copy; {new Date().getFullYear()} nightscape.tokyo
        </p>
      </div>
    </footer>
  );
}
