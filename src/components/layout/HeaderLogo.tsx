"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_LOCALE_SLUGS, SITE_NAMES } from "@/lib/types";

export default function HeaderLogo() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(firstSegment) ? firstSegment : null;

  if (locale) {
    return (
      <Link
        href={`/${locale}`}
        className="block text-lg font-bold tracking-tight"
      >
        {SITE_NAMES[locale]}
      </Link>
    );
  }

  return (
    <Link href="/" className="block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="東京夜景ナビ"
        height={42}
        style={{ height: 42, width: "auto" }}
      />
    </Link>
  );
}
