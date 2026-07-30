import type { Metadata } from "next";
import PhotographyArticle from "@/components/photography/PhotographyArticle";
import "@/components/photography/photography.css";
import { SITE_URL } from "@/lib/types";
import { getPhotographyLabels } from "@/lib/i18n-static/photography";
import {
  buildPhotographyServiceJsonLd,
  buildFaqJsonLd,
} from "@/lib/json-ld";
import { PHOTOGRAPHY_HERO_IMAGE, PHOTOGRAPHY_OG_IMAGE, PHOTOGRAPHY_OFFERS } from "@/data/photography";

export const dynamic = "force-static";

// 日本語のみ提供（英語版は廃止）
const l = getPhotographyLabels("ja");
const canonicalUrl = `${SITE_URL}/photography/`;

export const metadata: Metadata = {
  title: l.meta.title,
  description: l.meta.description,
  openGraph: {
    title: l.meta.title,
    description: l.meta.description,
    url: canonicalUrl,
    locale: "ja_JP",
    images: [{ url: `${SITE_URL}${PHOTOGRAPHY_OG_IMAGE}`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function PhotographyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildPhotographyServiceJsonLd({
        name: l.meta.title,
        description: l.meta.description,
        url: canonicalUrl,
        inLanguage: "ja",
        offers: PHOTOGRAPHY_OFFERS,
      }),
      buildFaqJsonLd(
        l.faq.items.map((f) => ({ question: f.q, answer: f.a })),
        { inLanguage: "ja" },
      ),
      // BreadcrumbList はここには書かない。PhotographyArticle 内の
      // <Breadcrumb> が DOM と一致したものを出力しており、二重定義になるため。
      // 運営者 Person はレイアウトの Organization.founder として出力済み
    ],
  };

  return (
    <PhotographyArticle
      l={l}
      locale="ja"
      heroImage={PHOTOGRAPHY_HERO_IMAGE}
      breadcrumbLabel="撮影のご依頼"
      jsonLd={jsonLd}
    />
  );
}
