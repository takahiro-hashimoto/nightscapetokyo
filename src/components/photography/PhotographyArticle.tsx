import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import HomeAuthorCard from "@/components/common/HomeAuthorCard";
import PhotographySections from "@/components/photography/PhotographySections";
import PhotographyFormEmbed from "@/components/photography/PhotographyFormEmbed";
import type { PhotographyLabels } from "@/lib/i18n-static/photography";
import { jsonLdHtml } from "@/lib/json-ld-script";

/**
 * 撮影依頼ページの記事テンプレート（/article/ ベース）。
 * firstVisual（ヒーロー）→ toc（目次）→ content-card セクション、という記事と同じ構成。
 */
export default function PhotographyArticle({
  l,
  locale,
  heroImage,
  breadcrumbLabel,
  jsonLd,
}: {
  l: PhotographyLabels;
  locale: string;
  heroImage: string;
  breadcrumbLabel: string;
  jsonLd: object;
}) {
  // 目次項目（各セクションの見出しへアンカー）
  const toc: { id: string; label: string }[] = [
    { id: "photo-clients", label: l.clients.heading },
    { id: "photo-services", label: l.services.heading },
    { id: "photo-pricing", label: l.pricing.heading },
    { id: "photo-flow", label: l.flow.heading },
    { id: "photo-equipment", label: l.equipment.heading },
    { id: "photo-faq", label: l.faq.heading },
    { id: "inquiry", label: l.form.heading },
  ];

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb locale={locale} items={[{ label: breadcrumbLabel }]} />

        <article>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
          />

          {/* ① firstVisual: ヒーロー画像 + ヘッダー + リード + CTA */}
          <div className="firstVisual">
            <figure className="firstVisual-image">
              <Image
                src={heroImage}
                alt={l.hero.h1}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </figure>
            <header className="firstVisual-header">
              <h1 className="firstVisual-title">{l.hero.h1}</h1>
              <div className="firstVisual-meta">
                <span className="firstVisual-date">{l.hero.achievements}</span>
              </div>
            </header>
            <div className="firstVisual-body article-body">
              {l.hero.lead.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="photo-cta-wrap">
                <a href="#inquiry" className="photo-cta photo-cta--lg">
                  {l.hero.cta}
                </a>
                <p className="photo-cta-note">{l.hero.ctaNote}</p>
              </div>
            </div>
          </div>

          {/* ② 著者カード（E-E-A-T: 撮影者のプロフィール・実績を目次の前に提示） */}
          <HomeAuthorCard authorLabel="撮影を担当するカメラマン" locale={locale} />

          {/* ③ 目次カード */}
          <nav className="toc content-card card-padding" aria-label={locale === "ja" ? "目次" : "Contents"}>
            <p className="toc-title">{locale === "ja" ? "タップできる目次" : "Contents"}</p>
            <ol className="toc-list">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ③ 本文セクション */}
          <PhotographySections l={l} />

          {/* 3.10 問い合わせフォーム */}
          <section id="inquiry" className="content-card card-padding article-body">
            <h2>{l.form.heading}</h2>
            <p>{l.form.lead}</p>
            <PhotographyFormEmbed l={l.form} locale={locale} />
          </section>
        </article>
      </div>
    </div>
  );
}
