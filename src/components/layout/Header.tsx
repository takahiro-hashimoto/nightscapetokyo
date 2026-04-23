import Link from "next/link";
import { ChevronDown } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import DevAdminLink from "./DevAdminLink";
import HeaderShell from "./HeaderShell";
import type { SiteLocale } from "@/lib/types";
import { NAV_STATIC_LABELS, PROFILE_LABELS } from "@/lib/i18n-labels";
import { AREA_NAME, TAG_NAME } from "@/lib/constants";

/* -------------------------------------------------- */
/*  Navigation data types                             */
/* -------------------------------------------------- */

type AreaData = { slug: string; name: string; spot_count: number };
type TagData = { slug: string; name: string; spot_count: number; image_url?: string | null };
type SubNavItem = { label: string; href: string; count?: number };
type NavItem = { label: string; href?: string; children?: SubNavItem[]; dropdownClass?: string; newTab?: boolean };

function buildTopNavItems(locale: string | null): SubNavItem[] {
  const prefix = locale ? `/${locale}` : "";
  const labels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];
  return [
    { label: "運営者", href: `${prefix}/about/` },
    { label: labels.contact, href: `${prefix}/contact/` },
    { label: "サイトマップ", href: `/sitemap/` },
  ];
}

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
/*  Desktop nav item renderer (static — no JS needed) */
/* -------------------------------------------------- */

function DesktopNavItem({ item, locale }: { item: NavItem; locale: string | null }) {
  const labels = NAV_STATIC_LABELS[(locale ?? "ja") as SiteLocale] ?? NAV_STATIC_LABELS["ja"];

  if (item.children) {
    return (
      <div className="site-header-nav-item">
        <button className="site-header-nav-link site-header-nav-trigger" type="button">
          {item.label}
          <ChevronDown size={13} aria-hidden="true" />
        </button>
        <div className={`site-header-dropdown${item.dropdownClass ? ` ${item.dropdownClass}` : ""}`}>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="site-header-dropdown-link"
            >
              {child.count != null ? `${child.label}（${child.count}）` : child.label}
            </Link>
          ))}
          {item.dropdownClass === "site-header-dropdown--area" && (
            <Link
              href={`${locale ? `/${locale}` : ""}/event/`}
              className="site-header-dropdown-link"
            >
              {labels.eventSearch}
            </Link>
          )}
        </div>
      </div>
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

  const logo = <HeaderLogo locale={locale} />;

  const desktopNav = (
    <nav className="site-header-nav">
      {mainNavItems.map((item) => (
        <DesktopNavItem key={item.label} item={item} locale={locale} />
      ))}
    </nav>
  );

  const topNav = locale === null ? (
    <nav className="site-header-top-nav">
      {topNavItems.map((item) => (
        <Link key={item.href} href={item.href} className="site-header-top-nav-link">
          {item.label}
        </Link>
      ))}
    </nav>
  ) : null;

  const devLink = <DevAdminLink />;

  const tagline = locale === null && spotCount > 0 ? (
    <div className="site-header-tagline">
      <span className="site-header-tagline-count">掲載スポット数{spotCount}件</span>
      <span className="site-header-tagline-desc">東京夜景の専門サイト</span>
    </div>
  ) : null;

  return (
    <HeaderShell
      locale={locale}
      mainNavItems={mainNavItems}
      topNavItems={topNavItems}
      profileLabels={profileLabels}
      navLabels={navLabels}
      logo={logo}
      desktopNav={desktopNav}
      topNav={topNav}
      tagline={tagline}
      devLink={devLink}
    />
  );
}
