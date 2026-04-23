"use client";

import { useSyncExternalStore } from "react";
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

// サーバーサイドでは false、クライアントでは true を返す（effect なし）
const isClient = () => true;
const isServer = () => false;
const noSubscribe = () => () => {};

export default function LanguageSwitcher({
  currentLocale,
  categorySlug,
  spotSlug,
  availableLocales,
  localeLabels,
}: Props) {
  const router = useRouter();
  const mounted = useSyncExternalStore(noSubscribe, isClient, isServer);

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
    router.push(`${prefix}${suffix}` || "/");
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

  // クライアントでのみ portal 描画（SSR では null）
  if (!mounted) return null;
  const portalTarget = document.getElementById("header-trailing");
  if (portalTarget) return createPortal(switcher, portalTarget);
  return null;
}
