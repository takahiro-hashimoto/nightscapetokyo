"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import DevAdminLink from "./DevAdminLink";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";
import type { SiteLocale } from "@/lib/types";
import { NAV_STATIC_LABELS, PROFILE_LABELS } from "@/lib/i18n-labels";
import { AREA_NAME, TAG_NAME } from "@/lib/constants";

/* -------------------------------------------------- */
/*  Navigation data                                   */
/* -------------------------------------------------- */

type AreaData = { slug: string; name: string; spot_count: number };
type TagData = { slug: string; name: string; spot_count: number; image_url?: string | null };
type SubNavItem = { label: string; href: string; count?: number };
type NavItem = { label: string; href?: string; children?: SubNavItem[]; dropdownClass?: string; newTab?: boolean };

/** Row 1 右側: 運営者・お問い合わせ・サイトマップ (ja のみ使用) */
function buildTopNavItems(locale: string | null): SubNavItem[] {
  const prefix = locale ? `/${locale}` : "";
  const labels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];
  return [
    { label: "運営者", href: `${prefix}/about` },
    { label: labels.contact, href: `${prefix}/contact` },
    { label: "サイトマップ", href: `/sitemap/` },
  ];
}

/** Row 2: メインナビ */
function buildMainNavItems(
  locale: string | null,
  areaData: AreaData[],
  tagData: TagData[],
): NavItem[] {
  const loc = locale ?? "ja";
  const prefix = locale ? `/${locale}` : "";
  const labels = NAV_STATIC_LABELS[loc as SiteLocale] ?? NAV_STATIC_LABELS["ja"];

  const sortedAreas = [...areaData].sort((a, b) => {
    if (a.slug === "other") return 1;
    if (b.slug === "other") return -1;
    if (a.slug === "yokohama") return b.slug === "other" ? -1 : 1;
    if (b.slug === "yokohama") return a.slug === "other" ? 1 : -1;
    return b.spot_count - a.spot_count;
  });

  const areaChildren: SubNavItem[] = sortedAreas.map((a) => ({
    label: AREA_NAME[a.slug]?.[loc as SiteLocale] ?? a.name,
    href: `${prefix}/${a.slug}`,
    count: a.spot_count,
  }));

  const tagChildren: SubNavItem[] = tagData.map((t) => ({
    label: TAG_NAME[t.slug]?.[loc as SiteLocale] ?? t.name,
    href: `${prefix}/tag/${t.slug}/`,
    count: t.spot_count,
  }));

  const items: NavItem[] = [
    { label: labels.recommend, href: `${prefix}/recommend/` },
    { label: labels.area, children: areaChildren, dropdownClass: "site-header-dropdown--area" },
    { label: labels.tag, children: tagChildren },
  ];

  if (loc === "ja") {
    items.push(
      { label: "無料スマホ壁紙", href: "/wallpaper/" },
      { label: "タイムラプス動画", href: "/time-lapse/" },
      { label: "ブログ", href: "/article/" },
      { label: "おすすめ現像ソフト", href: "/luminar/", newTab: true },
    );
  } else {
    items.push(
      { label: labels.about, href: `${prefix}/about` },
      { label: labels.contact, href: `${prefix}/contact` },
    );
  }

  return items;
}

/* -------------------------------------------------- */
/*  Accordion Section                                 */
/* -------------------------------------------------- */

function AccordionSection({
  title,
  items,
  onLinkClick,
  menuOpen,
}: {
  title: string;
  items: SubNavItem[];
  onLinkClick: () => void;
  menuOpen: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) setOpen(false);
  }, [menuOpen]);

  return (
    <div className="drawer-accordion">
      <button
        className="drawer-accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <svg
          className="drawer-accordion-chevron"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className="drawer-accordion-panel"
        style={{ maxHeight: open ? items.length * 50 + 16 : 0 }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="drawer-menu-link"
            onClick={onLinkClick}
          >
            {item.label}
            {item.count != null && (
              <span className="drawer-menu-count">{item.count}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Header Component                                  */
/* -------------------------------------------------- */

export default function Header({
  areaData = [],
  tagData = [],
  spotCount = 0,
}: {
  areaData?: AreaData[];
  tagData?: TagData[];
  spotCount?: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(firstSegment) ? firstSegment : null;
  const topNavItems = buildTopNavItems(locale);
  const mainNavItems = buildMainNavItems(locale, areaData, tagData);
  const profileLabels = PROFILE_LABELS[(locale ?? "ja") as SiteLocale];

  // ja: 2-row (52px top + 1px border + 40px bottom = 93px), non-ja: 1-row (72px)
  const initialHeaderHeight = locale !== null ? 72 : 93;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(initialHeaderHeight);
  const [closingItem, setClosingItem] = useState<string | null>(null);

  const handleDropdownLinkClick = useCallback((label: string) => {
    setClosingItem(label);
    setTimeout(() => setClosingItem(null), 400);
  }, []);
  const headerRef = useRef<HTMLElement>(null);

  // SSR guard for createPortal
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll + scrollbar compensation (iOS Safari compatible)
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const savedTop = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (savedTop) {
        window.scrollTo(0, parseInt(savedTop) * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  // ResizeObserver for header height
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeaderHeight(entry.contentRect.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLangChange = useCallback((loc: string) => {
    const parts = pathname.split("/").filter(Boolean);
    const hasLocale = ALL_LOCALE_SLUGS.includes(parts[0]);
    const pathWithoutLocale = hasLocale ? parts.slice(1) : parts;
    const prefix = loc === "ja" ? "" : `/${loc}`;
    const rest = pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";
    router.push(`${prefix}${rest}` || "/");
  }, [pathname, router]);

  const renderNavItems = (items: NavItem[]) =>
    items.map((item) =>
      item.children ? (
        <div key={item.label} className={`site-header-nav-item${closingItem === item.label ? " is-closing" : ""}`}>
          <button className="site-header-nav-link site-header-nav-trigger">
            {item.label}
            <ChevronDown size={13} aria-hidden="true" />
          </button>
          <div className={`site-header-dropdown${item.dropdownClass ? ` ${item.dropdownClass}` : ""}`}>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="site-header-dropdown-link"
                onClick={() => handleDropdownLinkClick(item.label)}
              >
                {child.count != null ? `${child.label}（${child.count}）` : child.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          key={item.href}
          href={item.href!}
          className="site-header-nav-link"
          {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {item.label}
        </Link>
      )
    );

  const hamburger = (
    <button
      className="hamburger"
      aria-label="メニューを開く"
      aria-expanded={menuOpen}
      aria-controls="mobile-drawer"
      onClick={() => setMenuOpen((v) => !v)}
    >
      <span className="hamburger-line" style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined} />
      <span className="hamburger-line" style={menuOpen ? { opacity: 0 } : undefined} />
      <span className="hamburger-line" style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined} />
    </button>
  );

  return (
    <>
      <header ref={headerRef} className="site-header">
        {locale ? (
          /* ---- 単段ヘッダー: 非 ja ロケール ---- */
          <div className="site-header-inner">
            <HeaderLogo />
            <div className="site-header-right">
              <nav className="site-header-nav">
                {renderNavItems(mainNavItems)}
              </nav>
              <div className="site-header-trailing">
                <div id="header-trailing" />
                <DevAdminLink />
                {hamburger}
              </div>
            </div>
          </div>
        ) : (
          /* ---- 2段ヘッダー: ja ---- */
          <>
            <div className="site-header-top">
              <div className="site-header-top-inner">
                {/* 左: ロゴ + スポット数・タグライン */}
                <div className="site-header-top-left">
                  <HeaderLogo />
                  {spotCount > 0 && (
                    <div className="site-header-tagline">
                      <span className="site-header-tagline-count">掲載スポット数{spotCount}件</span>
                      <span className="site-header-tagline-desc">東京夜景の専門サイト</span>
                    </div>
                  )}
                </div>

                {/* 右: 運営者情報・お問い合わせ + 言語スイッチャー */}
                <div className="site-header-top-right">
                  <nav className="site-header-top-nav">
                    {topNavItems.map((item) => (
                      <Link key={item.href} href={item.href} className="site-header-top-nav-link">
                        {item.label}
                      </Link>
                    ))}
                  </nav>
<div className="site-header-trailing">
                    <div id="header-trailing" />
                    <DevAdminLink />
                    {hamburger}
                  </div>
                </div>
              </div>
            </div>
            <div className="site-header-bottom">
              <div className="site-header-bottom-inner">
                <nav className="site-header-nav">
                  {renderNavItems(mainNavItems)}
                </nav>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Portal: overlay + drawer */}
      {isMounted &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className={`drawer-overlay${menuOpen ? " is-open" : ""}`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <nav
              id="mobile-drawer"
              className={`drawer${menuOpen ? " is-open" : ""}`}
              style={{ top: headerHeight }}
              aria-label="モバイルメニュー"
            >
              {/* Main nav links */}
              {mainNavItems.map((item) =>
                item.children ? (
                  <AccordionSection
                    key={item.label}
                    title={item.label}
                    items={item.children}
                    onLinkClick={closeMenu}
                    menuOpen={menuOpen}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="drawer-menu-link"
                    onClick={closeMenu}
                    {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                )
              )}
              {/* ja: Row 1 のリンクをドロワーにも表示 */}
              {!locale && topNavItems.map((item) => (
                <Link key={item.href} href={item.href} className="drawer-menu-link" onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}

              {/* Language switcher (SP only) */}
              <div className="drawer-lang-select-wrap">
                <Globe size={15} className="drawer-lang-select-icon" aria-hidden="true" />
                <select
                  className="drawer-lang-select"
                  value={locale ?? "ja"}
                  onChange={(e) => {
                    handleLangChange(e.target.value);
                    closeMenu();
                  }}
                >
                  {(["ja", ...ALL_LOCALE_SLUGS] as string[]).map((loc) => (
                    <option key={loc} value={loc}>
                      {loc === "ja" ? "日本語" : LOCALE_LABELS[loc]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Profile */}
              <div className="drawer-profile">
                <Image
                  src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
                  alt="タカヒロ"
                  width={72}
                  height={72}
                  className="drawer-profile-avatar"
                />
                <p className="drawer-profile-name">Takahiro</p>
                <p className="drawer-profile-role">{profileLabels.role}</p>
                <p className="drawer-profile-bio">{profileLabels.bio}</p>
                <Link href={locale ? `/${locale}/about` : "/about"} className="drawer-profile-link" onClick={closeMenu}>
                  {profileLabels.link} &rsaquo;
                </Link>
                <div className="drawer-profile-sns">
                  <a href="https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1" target="_blank" rel="noopener noreferrer nofollow" aria-label="YouTube" className="drawer-profile-sns-btn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" /></svg>
                  </a>
                  <a href="https://twitter.com/takahiro__1202" target="_blank" rel="noopener noreferrer nofollow" aria-label="X" className="drawer-profile-sns-btn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/nightscape.tokyo/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Instagram" className="drawer-profile-sns-btn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                  </a>
                </div>
              </div>
            </nav>
          </>,
          document.body,
        )}
    </>
  );
}
