"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { ALL_LOCALE_SLUGS } from "@/lib/types";

const ARIA_LABELS: Record<string, string> = {
  ja: "言語を選択",
  en: "Select language",
  ko: "언어 선택",
  tw: "選擇語言",
  cn: "选择语言",
};

type Props = {
  currentLocale: string | null;
  categorySlug: string;
  spotSlug?: string;
  availableLocales: string[];
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
    setPortalTarget(document.getElementById("header-trailing"));
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
    router.push(`${prefix}${suffix}` || "/");
  };

  const ariaLabel = ARIA_LABELS[currentValue] ?? ARIA_LABELS.en;

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

  // ヘッダー内の #header-trailing に portal で描画
  if (portalTarget) {
    return createPortal(switcher, portalTarget);
  }

  return null;
}
