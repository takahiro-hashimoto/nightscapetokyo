import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL, SITE_NAMES } from "@/lib/types";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  locale?: string | null;
};

export default function Breadcrumb({ items, locale }: Props) {
  const homeLabel = (locale && SITE_NAMES[locale]) ? `${SITE_NAMES[locale]} TOP` : "東京夜景ナビTOP";
  const homeHref = locale ? `/${locale}` : "/";
  const homeUrl = locale ? `${SITE_URL}/${locale}` : SITE_URL;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: homeUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
      })),
    ],
  };

  const navAriaLabel = locale
    ? { en: "Breadcrumb", ko: "탐색 경로", tw: "導覽路徑", cn: "导航路径" }[locale] ?? "Breadcrumb"
    : "パンくずリスト";

  return (
    <nav className="breadcrumb" aria-label={navAriaLabel}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link href={homeHref}>{homeLabel}</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} />
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
