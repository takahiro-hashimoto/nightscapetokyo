"use client";

import { useEffect } from "react";
import { LOCALE_SLUG_MAP } from "@/lib/types";

/**
 * 翻訳ページで <html lang="..."> を動的に設定する Client Component。
 * アンマウント時に "ja" に戻す。
 */
export default function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    const bcp47 = LOCALE_SLUG_MAP[locale] ?? locale;
    document.documentElement.lang = bcp47;
    return () => {
      document.documentElement.lang = "ja";
    };
  }, [locale]);

  return null;
}
