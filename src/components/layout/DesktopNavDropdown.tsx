"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";

type SubNavItem = { label: string; href: string; count?: number };

export default function DesktopNavDropdown({
  label,
  dropdownClass,
  items,
  extraLinks,
}: {
  label: string;
  dropdownClass?: string;
  items: SubNavItem[];
  extraLinks?: { href: string; label: string }[];
}) {
  const navItemRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = useCallback(() => {
    const el = navItemRef.current;
    if (!el) return;
    el.classList.add("is-closing");
    setTimeout(() => el.classList.remove("is-closing"), 300);
  }, []);

  return (
    <div ref={navItemRef} className="site-header-nav-item">
      <button className="site-header-nav-link site-header-nav-trigger" type="button">
        {label}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`site-header-dropdown${dropdownClass ? ` ${dropdownClass}` : ""}`}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="site-header-dropdown-link"
            onClick={handleLinkClick}
          >
            {item.count != null ? `${item.label}（${item.count}）` : item.label}
          </Link>
        ))}
        {extraLinks?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="site-header-dropdown-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
