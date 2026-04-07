"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import DevAdminLink from "./DevAdminLink";
import { ALL_LOCALE_SLUGS } from "@/lib/types";

type NavItem = { label: string; href: string };

const NAV_LABELS: Record<string, NavItem[]> = {
  ja: [
    { label: "ホーム", href: "/" },
    { label: "映像集", href: "/time-lapse/" },
    { label: "運営者情報", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "Time-lapse", href: "/en/time-lapse" },
    { label: "About", href: "/en/about" },
    { label: "Contact", href: "/en/contact" },
  ],
  ko: [
    { label: "홈", href: "/ko" },
    { label: "타임랩스", href: "/ko/time-lapse" },
    { label: "소개", href: "/ko/about" },
    { label: "문의", href: "/ko/contact" },
  ],
  tw: [
    { label: "首頁", href: "/tw" },
    { label: "縮時攝影", href: "/tw/time-lapse" },
    { label: "關於", href: "/tw/about" },
    { label: "聯絡", href: "/tw/contact" },
  ],
  cn: [
    { label: "首页", href: "/cn" },
    { label: "延时摄影", href: "/cn/time-lapse" },
    { label: "关于", href: "/cn/about" },
    { label: "联系", href: "/cn/contact" },
  ],
};

const MENU_LABELS: Record<string, { areas: string; content: string; siteInfo: string }> = {
  ja: { areas: "エリアから探す", content: "コンテンツ", siteInfo: "サイト情報" },
  en: { areas: "Browse by Area", content: "Content", siteInfo: "Site Info" },
  ko: { areas: "지역별 탐색", content: "콘텐츠", siteInfo: "사이트 정보" },
  tw: { areas: "按地區瀏覽", content: "內容", siteInfo: "網站資訊" },
  cn: { areas: "按地区浏览", content: "内容", siteInfo: "网站信息" },
};

type MenuItem = { label: string; href: string };

const MENU_ITEMS: Record<string, { areas: MenuItem[]; content: MenuItem[]; siteInfo: MenuItem[] }> = {
  ja: {
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
    content: [
      { label: "おすすめスポット", href: "/recommend" },
      { label: "タイムラプス動画", href: "/time-lapse" },
    ],
    siteInfo: [
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
    content: [
      { label: "Recommended Spots", href: "/en/recommend" },
      { label: "Time-lapse Videos", href: "/en/time-lapse" },
    ],
    siteInfo: [
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
    areas: [
      { label: "미나토구", href: "/ko/minato" },
      { label: "시부야구", href: "/ko/shibuya" },
      { label: "치요다구", href: "/ko/chiyoda" },
      { label: "신주쿠구", href: "/ko/shinjuku" },
      { label: "추오구", href: "/ko/chuo" },
      { label: "스미다구", href: "/ko/sumida" },
      { label: "도시마구", href: "/ko/toshima" },
      { label: "시나가와구", href: "/ko/shinagawa" },
    ],
    content: [
      { label: "추천 스팟", href: "/ko/recommend" },
      { label: "타임랩스 영상", href: "/ko/time-lapse" },
    ],
    siteInfo: [
      { label: "소개", href: "/ko/about" },
      { label: "문의", href: "/ko/contact" },
      { label: "콘텐츠 제작 정책", href: "/ko/guidelines" },
      { label: "개인정보 처리방침", href: "/ko/privacy-policy" },
      { label: "이용약관", href: "/ko/caution" },
      { label: "링크 모음", href: "/ko/links" },
      { label: "사이트맵", href: "/ko/sitemap" },
    ],
  },
  tw: {
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
    content: [
      { label: "推薦景點", href: "/tw/recommend" },
      { label: "縮時攝影影片", href: "/tw/time-lapse" },
    ],
    siteInfo: [
      { label: "關於", href: "/tw/about" },
      { label: "聯絡", href: "/tw/contact" },
      { label: "內容製作政策", href: "/tw/guidelines" },
      { label: "隱私權政策", href: "/tw/privacy-policy" },
      { label: "使用條款", href: "/tw/caution" },
      { label: "連結集", href: "/tw/links" },
      { label: "網站地圖", href: "/tw/sitemap" },
    ],
  },
  cn: {
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
    content: [
      { label: "推荐景点", href: "/cn/recommend" },
      { label: "延时摄影视频", href: "/cn/time-lapse" },
    ],
    siteInfo: [
      { label: "关于", href: "/cn/about" },
      { label: "联系", href: "/cn/contact" },
      { label: "内容制作政策", href: "/cn/guidelines" },
      { label: "隐私政策", href: "/cn/privacy-policy" },
      { label: "使用条款", href: "/cn/caution" },
      { label: "链接集", href: "/cn/links" },
      { label: "网站地图", href: "/cn/sitemap" },
    ],
  },
};

export default function Header() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(firstSegment) ? firstSegment : null;
  const navItems = NAV_LABELS[locale ?? "ja"];
  const menuLabels = MENU_LABELS[locale ?? "ja"];
  const menuItems = MENU_ITEMS[locale ?? "ja"];

  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="bg-[#28292b] text-white relative z-50">
        <div className="max-w-[960px] mx-auto px-4 flex items-center justify-between h-[60px]">
          <HeaderLogo />

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div id="header-trailing" />
            <DevAdminLink />
            <button
              aria-label="メニュー"
              className="p-2 md:hidden hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in mobile menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />
      <nav
        className={`mobile-menu-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-header">
          <button
            aria-label="閉じる"
            className="mobile-menu-close"
            onClick={closeMenu}
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-menu-body">
          {/* Main nav items */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-item"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} className="mobile-menu-chevron" />
            </Link>
          ))}

          <div className="mobile-menu-divider" />

          {/* Area links */}
          <p className="mobile-menu-heading">{menuLabels.areas}</p>
          {menuItems.areas.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-item"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} className="mobile-menu-chevron" />
            </Link>
          ))}

          <div className="mobile-menu-divider" />

          {/* Content links */}
          <p className="mobile-menu-heading">{menuLabels.content}</p>
          {menuItems.content.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-item"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} className="mobile-menu-chevron" />
            </Link>
          ))}

          <div className="mobile-menu-divider" />

          {/* Site info links */}
          <p className="mobile-menu-heading">{menuLabels.siteInfo}</p>
          {menuItems.siteInfo.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu-item"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} className="mobile-menu-chevron" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
