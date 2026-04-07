import Breadcrumb from "./Breadcrumb";

type BreadcrumbItem = { label: string; href?: string };

type Props = {
  children: React.ReactNode;
  breadcrumb?: BreadcrumbItem[];
  /** Locale slug for breadcrumb home link (e.g. "en", "ko") */
  locale?: string | null;
  title?: string;
  /** SVG icon shown before the title */
  icon?: React.ReactNode;
  /** Short summary shown below the title */
  summary?: string;
  description?: string;
  heroImage?: string;
  heroAlt?: string;
  lastUpdated?: string;
  jsonLd?: object;
  className?: string;
};

export default function ArticleLayout({
  children,
  breadcrumb,
  locale,
  title,
  icon,
  summary,
  description,
  heroImage,
  heroAlt,
  lastUpdated,
  jsonLd,
  className,
}: Props) {
  return (
    <div className="l-article-body">
      <div className={`l-article-container ${className ?? ""}`}>
        {breadcrumb && <Breadcrumb items={breadcrumb} locale={locale} />}

        {heroImage && (
          <div className="content-card">
            <div className="hero-image-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt={heroAlt ?? title ?? ""}
                className="hero-image"
              />
            </div>
          </div>
        )}

        {title && (
          <div className="content-card card-padding">
            <h1 className="article-title">
              {icon && <span className="heading-icon">{icon}</span>}
              {title}
            </h1>
            {summary && <p className="article-summary">{summary}</p>}
            {lastUpdated && (
              <p className="article-meta">
                <time dateTime={lastUpdated}>
                  {lastUpdated.replace(/-/g, ".")}
                </time>
              </p>
            )}
            {description && <p className="article-lead">{description}</p>}
          </div>
        )}

        {children}

        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </div>
    </div>
  );
}
