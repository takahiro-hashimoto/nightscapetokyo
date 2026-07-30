import { Fragment } from "react";
import Image from "next/image";
import { Camera, ArrowRight, ExternalLink } from "lucide-react";
import type { PhotographyLabels } from "@/lib/i18n-static/photography";
import {
  PHOTOGRAPHY_PRICING,
  PHOTOGRAPHY_MIN_BUDGET,
  PHOTOGRAPHY_FLOW_DAYS,
} from "@/data/photography";
import { ACHIEVEMENTS_BASE, EQUIPMENT } from "@/lib/about-content";

/** ページ内の複数箇所に置く CTA（フォームへスクロール） */
function InquiryCta({ label, note }: { label: string; note?: string }) {
  return (
    <div className="photo-cta-wrap">
      <a href="#inquiry" className="photo-cta">
        {label}
        <ArrowRight size={17} aria-hidden="true" />
      </a>
      {note && <p className="photo-cta-note">{note}</p>}
    </div>
  );
}

export default function PhotographySections({ l }: { l: PhotographyLabels }) {
  return (
    <>
      {/* 3.2 クライアント実績（文言は発注者向けに統一した書き下ろし＝l.clients.items。
          画像・参照リンクは about-content の ACHIEVEMENTS_BASE と同順で共有） */}
      <section id="photo-clients" className="content-card card-padding article-body">
        <h2>{l.clients.heading}</h2>
        <p style={{ marginBottom: 24 }}>{l.clients.lead}</p>

        {ACHIEVEMENTS_BASE.map((base, i) => (
          <div key={base.image}>
            <h3>{l.clients.items[i]?.title ?? base.link.title}</h3>
            <div className="about-achievement-image">
              <Image
                src={base.image}
                alt={l.clients.items[i]?.title ?? ""}
                width={960}
                height={640}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </div>
            {l.clients.items[i]?.desc.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            <a href={base.link.href} target="_blank" rel="noopener noreferrer" className="ref-card">
              {base.link.thumbnail && (
                <div className="ref-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={base.link.thumbnail} alt="" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="ref-body">
                <span className="ref-title">{base.link.title}</span>
                {base.link.siteName && <span className="ref-site">{base.link.siteName}</span>}
                {base.link.excerpt && <span className="ref-excerpt">{base.link.excerpt}</span>}
              </div>
              <ExternalLink size={14} className="ref-icon" />
            </a>
          </div>
        ))}
        <InquiryCta label={l.hero.cta} note={l.hero.ctaNote} />
      </section>

      {/* 3.3 対応できる撮影（definition 定義リスト: dl/dt/dd) */}
      <section id="photo-services" className="content-card card-padding article-body">
        <h2>{l.services.heading}</h2>
        <p>{l.services.lead}</p>
        <div className="definition l-bottom-large">
          <dl className="definition-body">
            {l.services.cards.map((card) => (
              <Fragment key={card.title}>
                <dt>{card.title}</dt>
                <dd>{card.desc}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
        <InquiryCta label={l.hero.cta} note={l.hero.ctaNote} />
      </section>

      {/* 3.4 料金の目安 */}
      <section id="photo-pricing" className="content-card card-padding article-body">
        <h2>{l.pricing.heading}</h2>
        <p>{l.pricing.lead}</p>
        <table>
          <thead>
            <tr>
              <th>{l.pricing.colItem}</th>
              <th>{l.pricing.colPrice}</th>
            </tr>
          </thead>
          <tbody>
            {l.pricing.rows.map((row) => {
              const amount = PHOTOGRAPHY_PRICING[row.key];
              const priceText = amount && amount !== "TBD" ? amount : l.pricing.tbd;
              return (
                <tr key={row.key}>
                  <th scope="row">
                    {row.item}
                    {row.unit && <span className="photo-price-unit">（{row.unit}）</span>}
                  </th>
                  <td>{priceText}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {PHOTOGRAPHY_MIN_BUDGET && (
          <p>
            <strong>{l.pricing.minBudgetLabel}：</strong>
            {PHOTOGRAPHY_MIN_BUDGET}
          </p>
        )}
        <ul className="photo-notes">
          {l.pricing.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <InquiryCta label={l.pricing.cta} note={l.hero.ctaNote} />
      </section>

      {/* 3.5 依頼から納品までの流れ */}
      <section id="photo-flow" className="content-card card-padding article-body">
        <h2>{l.flow.heading}</h2>
        <p>{l.flow.lead}</p>
        <ol className="photo-flow">
          {l.flow.steps.map((step) => {
            const days = PHOTOGRAPHY_FLOW_DAYS[step.key];
            return (
              <li key={step.key}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {days && (
                  <p className="photo-flow-days">
                    {l.flow.daysLabel}: {days}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
        <InquiryCta label={l.hero.cta} note={l.hero.ctaNote} />
      </section>

      {/* 3.6 撮影機材について（/about/ と同じ構成。機材名のみ・アフィリエイトリンクなし） */}
      <section id="photo-equipment" className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon">
            <Camera size={18} aria-hidden="true" />
          </span>
          {l.equipment.heading}
        </h2>
        <div className="about-achievement-image">
          <Image
            src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/07/my-favorite-camera-items.jpg.w1920.webp"
            alt={l.equipment.heading}
            width={960}
            height={640}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </div>
        <p>{l.equipment.lead}</p>
        <p>
          {l.equipment.articlePrefix}
          <a
            href="https://nightscape.tokyo/article/my-photographic-equipment/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.equipment.articleText}
          </a>
          {l.equipment.articleSuffix}
        </p>
        <ul className="about-equipment-list">
          {EQUIPMENT.map((item) => (
            <li key={item.name}>
              <Camera size={14} color="#64748b" aria-hidden="true" />
              {item.name}
            </li>
          ))}
        </ul>
        <InquiryCta label={l.hero.cta} note={l.hero.ctaNote} />
      </section>

      {/* 3.9 よくある質問（home の faq-item 構造を流用: dl > .faq-item > .faq-q/.faq-a） */}
      <section id="photo-faq" className="content-card card-padding article-body">
        <h2>{l.faq.heading}</h2>
        <dl style={{ margin: 0 }}>
          {/* 個別の質問を #faq-1 形式で直接引用・共有できるようにするアンカー
              （セクション全体は #photo-faq のまま） */}
          {l.faq.items.map((item, i) => (
            <div key={i} id={`faq-${i + 1}`} className="faq-item">
              <dt className="faq-q">{item.q}</dt>
              <dd className="faq-a">{item.a}</dd>
            </div>
          ))}
        </dl>
        <InquiryCta label={l.hero.cta} note={l.hero.ctaNote} />
      </section>
    </>
  );
}
