import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import DevAdminLink from "./DevAdminLink";
import DesktopNavDropdown from "./DesktopNavDropdown";
import type { SiteLocale } from "@/lib/types";
import { SITE_URL } from "@/lib/types";
import { NAV_STATIC_LABELS, PROFILE_LABELS } from "@/lib/i18n-labels";
import { AREA_NAME, TAG_NAME } from "@/lib/constants";
import MobileMenu from "./MobileMenuLoader";

/* -------------------------------------------------- */
/*  Navigation data types                             */
/* -------------------------------------------------- */

type AreaData = { slug: string; name: string; spot_count: number };
type TagData = { slug: string; name: string; spot_count: number; image_url?: string | null };
type SubNavItem = { label: string; href: string; count?: number };
type NavItem = { label: string; href?: string; children?: SubNavItem[]; dropdownClass?: string; newTab?: boolean };

export function flattenNavToLinks(
  mainNavItems: NavItem[],
  topNavItems: SubNavItem[],
): { name: string; url: string }[] {
  const result: { name: string; url: string }[] = [];
  for (const item of mainNavItems) {
    if (item.href) result.push({ name: item.label, url: `${SITE_URL}${item.href}` });
    if (item.children) {
      for (const child of item.children) {
        result.push({ name: child.label, url: `${SITE_URL}${child.href}` });
      }
    }
  }
  for (const item of topNavItems) {
    result.push({ name: item.label, url: `${SITE_URL}${item.href}` });
  }
  return result;
}

export function buildTopNavItems(locale: string | null): SubNavItem[] {
  const prefix = locale ? `/${locale}` : "";
  const labels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];
  return [
    { label: "運営者", href: `${prefix}/about/` },
    { label: labels.contact, href: `${prefix}/contact/` },
    { label: "サイトマップ", href: `${prefix}/sitemap/` },
  ];
}

export function buildMainNavItems(
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
      { label: "おすすめ現像ソフト", href: "/luminar/" },
    );
  } else {
    items.push(
      { label: labels.about, href: `${prefix}/about/` },
      { label: labels.contact, href: `${prefix}/contact/` },
    );
  }

  return items;
}

/* -------------------------------------------------- */
/*  Desktop nav item renderer                         */
/* -------------------------------------------------- */

function DesktopNavItem({ item, locale }: { item: NavItem; locale: string | null }) {
  const labels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];

  if (item.children) {
    const extraLinks = item.dropdownClass === "site-header-dropdown--area"
      ? [{ href: `${locale ? `/${locale}` : ""}/event/`, label: labels.eventSearch }]
      : undefined;
    return (
      <DesktopNavDropdown
        label={item.label}
        dropdownClass={item.dropdownClass}
        items={item.children}
        extraLinks={extraLinks}
      />
    );
  }

  return (
    <Link
      href={item.href!}
      className="site-header-nav-link"
      {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {item.label}
    </Link>
  );
}

/* -------------------------------------------------- */
/*  Header — server component                         */
/* -------------------------------------------------- */

type Props = {
  areaData?: AreaData[];
  tagData?: TagData[];
  spotCount?: number;
  locale?: string | null;
};

export default function Header({ areaData = [], tagData = [], spotCount = 0, locale = null }: Props) {
  const mainNavItems = buildMainNavItems(locale, areaData, tagData);
  const topNavItems = buildTopNavItems(locale);
  const profileLabels = PROFILE_LABELS[(locale ?? "ja") as SiteLocale];
  const navLabels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];
  const headerHeight = locale !== null ? 72 : 93;

  const hamburger = (
    <button
      id="hamburger-btn"
      className="hamburger"
      aria-label={navLabels.openMenu}
      aria-expanded="false"
      aria-controls="mobile-drawer"
    >
      <span className="hamburger-line" />
      <span className="hamburger-line" />
      <span className="hamburger-line" />
    </button>
  );

  const desktopNav = (
    <nav className="site-header-nav">
      {mainNavItems.map((item) => (
        <DesktopNavItem key={item.label} item={item} locale={locale} />
      ))}
    </nav>
  );

  return (
    <>
      <header className="site-header">
        {locale ? (
          /* ---- 単段ヘッダー: 非 ja ロケール ---- */
          <div className="site-header-inner">
            <HeaderLogo locale={locale} />
            <div className="site-header-right">
              {desktopNav}
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
                <div className="site-header-top-left">
                  <HeaderLogo locale={locale} />
                  {spotCount > 0 && (
                    <div className="site-header-tagline">
                      <span className="site-header-tagline-count">掲載スポット数{spotCount}件</span>
                      <span className="site-header-tagline-desc">東京夜景の専門サイト</span>
                    </div>
                  )}
                </div>
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
                    {hamburger}
                  </div>
                </div>
              </div>
            </div>
            <div className="site-header-bottom">
              <div className="site-header-bottom-inner">
                {desktopNav}
              </div>
            </div>
          </>
        )}
      </header>

      <MobileMenu
        locale={locale}
        mainNavItems={mainNavItems}
        topNavItems={topNavItems}
        profileLabels={profileLabels}
        navLabels={navLabels}
        headerHeight={headerHeight}
      />
    </>
  );
}
