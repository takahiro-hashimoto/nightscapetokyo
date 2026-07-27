import type { Metadata } from "next";
import PhotographyArticle from "@/components/photography/PhotographyArticle";
import "@/components/photography/photography.css";
import { SITE_URL } from "@/lib/types";
import { getPhotographyLabels } from "@/lib/i18n-static/photography";
import {
  buildBreadcrumbJsonLd,
  buildPhotographyServiceJsonLd,
  buildPhotographerPersonJsonLd,
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
      buildPhotographerPersonJsonLd({ url: `${SITE_URL}/about/` }),
      buildFaqJsonLd(
        l.faq.items.map((f) => ({ question: f.q, answer: f.a })),
        { inLanguage: "ja" },
      ),
      buildBreadcrumbJsonLd([
        { name: "東京夜景ナビ", url: `${SITE_URL}/` },
        { name: l.hero.h1, url: canonicalUrl },
      ]),
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
