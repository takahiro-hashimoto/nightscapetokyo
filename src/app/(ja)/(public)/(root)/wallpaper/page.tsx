import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import { WALLPAPER_LABELS, WALLPAPERS } from "@/lib/wallpaper-content";

const { title: PAGE_TITLE, description: PAGE_DESCRIPTION, lead1, lead2, topLink } = WALLPAPER_LABELS.ja;

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | 東京夜景ナビ` },
  description: PAGE_DESCRIPTION,
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  twitter: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  alternates: {
    canonical: `${SITE_URL}/wallpaper/`,
    languages: buildAreaHreflangAlternates(SITE_URL, "wallpaper", ALL_LOCALE_SLUGS),
  },
};

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default function WallpaperPage() {
  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug="wallpaper"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: PAGE_TITLE }]} />

        <article>
          {/* firstVisual: タイトル + リード文 */}
          <div className="firstVisual">
            <header className="firstVisual-header">
              <h1 className="firstVisual-title">{PAGE_TITLE}</h1>
            </header>
            <div className="firstVisual-body">
              <p>{lead1}</p>
              <p>{lead2}</p>
              <Link href="/" className="content-top-link">{topLink}</Link>
            </div>
          </div>

          {/* 壁紙グリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {WALLPAPERS.map((w, i) => (
                <figure key={i} className="m-0">
                  <a href={w.src} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={w.src}
                      alt={w.captions.ja}
                      width={473}
                      height={1024}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      style={{ width: "100%", height: "auto", display: "block" }}
                      loading={i < 8 ? "eager" : "lazy"}
                    />
                  </a>
                  <figcaption className="text-xs text-center mt-1 text-gray-500">
                    {w.captions.ja}
                  </figcaption>
                </figure>
            ))}
          </div>


          <RecommendCta locale={null} />

          <SpotShare
            url={`${SITE_URL}/wallpaper/`}
            title={PAGE_TITLE}
            labels={{
              heading: "この記事が役に立ったらシェアしてください",
              x: "ポスト",
              line: "LINE",
              hatena: "はてブ",
              copy: "URLコピー",
              copied: "コピーしました",
            }}
          />
          </article>
        </div>
      </div>
    </>
  );
}
