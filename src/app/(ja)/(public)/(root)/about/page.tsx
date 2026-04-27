import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Award,
  Newspaper,
  BookOpen,
  Mail,
  ExternalLink,
} from "lucide-react";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS, buildAreaHreflangAlternates } from "@/lib/types";
import { EQUIPMENT, ABOUT_SNS_LINKS, ACHIEVEMENTS_BASE } from "@/lib/about-content";
import { ABOUT_LABELS } from "@/lib/about-labels";

export const dynamic = "force-static";

const l = ABOUT_LABELS.ja;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: l.title,
    description: l.summary,
    alternates: {
      languages: buildAreaHreflangAlternates(SITE_URL, "about", ALL_LOCALE_SLUGS),
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <LanguageSwitcher currentLocale="ja" categorySlug="about" availableLocales={ALL_LOCALE_SLUGS} localeLabels={LOCALE_LABELS} />
      <ArticleLayout
      title={l.title}
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      }
      summary={l.summary}
      topLink={{ href: "/", label: "東京都内の夜景情報一覧" }}
      breadcrumb={[{ label: l.title }]}
    >
      {/* ── 運営者について ── */}
      <div className="content-card card-padding article-body">
        <h2>{l.profile}</h2>

        <div className="about-profile">
          <div className="about-profile-avatar">
            <Image
              src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
              alt="タカヒロ"
              width={120}
              height={120}
              className="about-avatar-img"
            />
            <p className="about-avatar-name">タカヒロ</p>
            <p className="about-avatar-role">夜景フォトグラファー</p>
          </div>
          <dl className="about-profile-dl">
            {l.profileItems.map((row) => (
              <div key={row.label} className="about-profile-row">
                <dt>{row.label}：</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-profile-bio">
          {l.bio.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className="about-sns-buttons">
          {ABOUT_SNS_LINKS.map((sns) => (
            <a
              key={sns.label}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
              className="about-sns-btn"
            >
              {sns.Icon ? (
                <sns.Icon size={15} aria-hidden="true" />
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={sns.icon} />
                </svg>
              )}
              {sns.label}
            </a>
          ))}
          <Link href="/contact" className="about-sns-btn">
            <Mail size={15} />
            お問い合わせ
          </Link>
        </div>
      </div>

      {/* ── 撮影機材 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Camera size={18} /></span>
          {l.equipment}
        </h2>
        <p>{l.equipmentDesc}</p>
        <p>
          これらの機材の詳細は「<a href={l.equipmentArticleHref} target="_blank" rel="noopener noreferrer">{l.equipmentArticleText}</a>」で詳しく解説しているので、気になった方はぜひチェックしてみてください。
        </p>
        <ul className="about-equipment-list">
          {EQUIPMENT.map((item) => (
            <li key={item.name}>
              <Camera size={14} color="#64748b" />
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── 活動実績 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Award size={18} /></span>
          {l.achievements}
        </h2>
        <p style={{ marginBottom: 24 }}>{l.achievementsDesc}</p>

        {ACHIEVEMENTS_BASE.map((base, i) => (
          <div key={base.image}>
            <h3>{l.achievementTitles[i]}</h3>
            <div className="about-achievement-image">
              <Image
                src={base.image}
                alt={l.achievementTitles[i] ?? ""}
                width={960}
                height={640}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </div>
            {l.achievementDescs[i]?.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            <a
              href={base.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-card"
            >
              {base.link.thumbnail && (
                <div className="ref-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={base.link.thumbnail} alt="" />
                </div>
              )}
              <div className="ref-body">
                <span className="ref-title">{base.link.title}</span>
                {base.link.siteName && (
                  <span className="ref-site">{base.link.siteName}</span>
                )}
                {base.link.excerpt && (
                  <span className="ref-excerpt">{base.link.excerpt}</span>
                )}
              </div>
              <ExternalLink size={14} className="ref-icon" />
            </a>
          </div>
        ))}
      </div>

      {/* ── メディア掲載 ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><Newspaper size={18} /></span>
          {l.media}
        </h2>
        {l.mediaItems.map((item) => (
          <div key={item.linkHref} className="about-media-item">
            <p>{item.description}</p>
            <a
              href={item.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="about-media-link"
            >
              <ExternalLink size={14} />
              <span>{item.linkTitle}</span>
            </a>
          </div>
        ))}
      </div>

      {/* ── きっかけ ── */}
      <div className="content-card card-padding article-body">
        <h2>
          <span className="heading-icon"><BookOpen size={18} /></span>
          {l.story}
        </h2>
        {l.storyTexts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      {/* ── お問い合わせ CTA ── */}
      <div className="content-card about-cta">
        <p style={{ marginBottom: 20, textAlign: "center" }}>
          {l.contactHeading}
        </p>
        <Link href="/contact">
          <Mail size={18} />
          {l.contactCta}
        </Link>
      </div>
    </ArticleLayout>
    </>
  );
}
