"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { ALL_LOCALE_SLUGS } from "@/lib/types";
import type { SiteLocale } from "@/lib/types";
import { LANG_SWITCHER_LABELS } from "@/lib/i18n-labels";

type Props = {
  currentLocale: string | null;
  categorySlug: string;
  spotSlug?: string;
  availableLocales: readonly string[];
  localeLabels: Record<string, string>;
};

export default function LanguageSwitcher({
  currentLocale,
  categorySlug,
  spotSlug,
  availableLocales,
  localeLabels,
}: Props) {
  const router = useRouter();
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // setTimeout(0) で hydration 完了後に実行し、MutationObserver(subtree) を回避
    const id = setTimeout(() => {
      setPortalTarget(document.getElementById("header-trailing"));
    }, 0);
    return () => clearTimeout(id);
  }, []);

  if (availableLocales.length === 0) return null;

  const currentValue = currentLocale ?? "ja";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const prefix = value === "ja" ? "" : `/${value}`;
    const suffix = spotSlug
      ? `/${categorySlug}/${spotSlug}`
      : categorySlug
        ? `/${categorySlug}`
        : "";
    const path = `${prefix}${suffix}`;
    router.push(path ? `${path}/` : "/");
  };

  const ariaLabel = LANG_SWITCHER_LABELS[currentValue as SiteLocale] ?? LANG_SWITCHER_LABELS.en;

  const switcher = (
    <div className="language-switcher">
      <Globe size={16} aria-hidden="true" />
      <select
        className="lang-select"
        value={currentValue}
        onChange={handleChange}
        aria-label={ariaLabel}
      >
        <option value="ja">日本語</option>
        {ALL_LOCALE_SLUGS.map((locale) => {
          if (!availableLocales.includes(locale)) return null;
          return (
            <option key={locale} value={locale}>
              {localeLabels[locale] || locale}
            </option>
          );
        })}
      </select>
    </div>
  );

  if (portalTarget) return createPortal(switcher, portalTarget);
  return null;
}
