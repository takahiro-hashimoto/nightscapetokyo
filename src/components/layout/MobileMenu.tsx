"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";
import type { ProfileLabels } from "@/lib/i18n-labels";

type SubNavItem = { label: string; href: string; count?: number };
type NavItem = { label: string; href?: string; children?: SubNavItem[]; dropdownClass?: string; newTab?: boolean };
type NavLabels = { eventSearch: string; otherArea: string; openMenu: string; mobileMenu: string };

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
  const effectiveOpen = open && menuOpen;

  return (
    <div className="drawer-accordion">
      <button
        className="drawer-accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={effectiveOpen}
      >
        <span>{title}</span>
        <svg
          className="drawer-accordion-chevron"
          style={{ transform: effectiveOpen ? "rotate(180deg)" : undefined }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className="drawer-accordion-panel"
        style={{ maxHeight: effectiveOpen ? items.length * 50 + 16 : 0 }}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="drawer-menu-link" onClick={onLinkClick}>
            {item.label}
            {item.count != null && <span className="drawer-menu-count">{item.count}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

type Props = {
  locale: string | null;
  mainNavItems: NavItem[];
  topNavItems: SubNavItem[];
  profileLabels: ProfileLabels;
  navLabels: NavLabels;
  headerHeight: number;
};

export default function MobileMenu({
  locale,
  mainNavItems,
  topNavItems,
  profileLabels,
  navLabels,
  headerHeight,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const btn = document.getElementById("hamburger-btn");
    if (!btn) return;
    const toggle = () => setMenuOpen((v) => !v);
    btn.addEventListener("click", toggle);
    return () => btn.removeEventListener("click", toggle);
  }, []);

  useEffect(() => {
    const btn = document.getElementById("hamburger-btn");
    if (btn) {
      btn.setAttribute("aria-expanded", String(menuOpen));
      btn.classList.toggle("is-open", menuOpen);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
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
      if (savedTop) window.scrollTo(0, parseInt(savedTop) * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLangChange = useCallback((loc: string) => {
    const parts = pathname.split("/").filter(Boolean);
    const hasLocale = ALL_LOCALE_SLUGS.includes(parts[0]);
    const pathWithoutLocale = hasLocale ? parts.slice(1) : parts;
    const prefix = loc === "ja" ? "" : `/${loc}`;
    const rest = pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";
    router.push(`${prefix}${rest}` || "/");
  }, [pathname, router]);

  return createPortal(
    <>
      <div
        className={`drawer-overlay${menuOpen ? " is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        id="mobile-drawer"
        className={`drawer${menuOpen ? " is-open" : ""}`}
        style={{ top: headerHeight }}
        aria-label={navLabels.mobileMenu}
      >
        {mainNavItems.map((item) =>
          item.children ? (
            <AccordionSection
              key={item.label}
              title={item.label}
              items={
                item.dropdownClass === "site-header-dropdown--area"
                  ? [
                      ...item.children,
                      { label: navLabels.otherArea, href: `${locale ? `/${locale}` : ""}/other/` },
                      { label: navLabels.eventSearch, href: `${locale ? `/${locale}` : ""}/event/` },
                    ]
                  : item.children
              }
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
        {!locale &&
          topNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="drawer-menu-link" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

        <div className="drawer-lang-select-wrap">
          <Globe size={15} className="drawer-lang-select-icon" aria-hidden="true" />
          <select
            className="drawer-lang-select"
            value={locale ?? "ja"}
            onChange={(e) => { handleLangChange(e.target.value); closeMenu(); }}
          >
            {(["ja", ...ALL_LOCALE_SLUGS] as string[]).map((loc) => (
              <option key={loc} value={loc}>
                {loc === "ja" ? "日本語" : LOCALE_LABELS[loc]}
              </option>
            ))}
          </select>
        </div>

        <div className="drawer-profile">
          <Image
            src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
            alt="Takahiro"
            width={72}
            height={72}
            className="drawer-profile-avatar"
          />
          <p className="drawer-profile-name">Takahiro</p>
          <p className="drawer-profile-role">{profileLabels.role}</p>
          <p className="drawer-profile-bio">{profileLabels.bio}</p>
          <Link href={locale ? `/${locale}/about/` : "/about/"} className="drawer-profile-link" onClick={closeMenu}>
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
    document.body
  );
}
