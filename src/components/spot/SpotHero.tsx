import Image from "next/image";
import Link from "next/link";

type Props = {
  seoTitle: string;
  visualTitle: string | null;
  featuredImage: string | null;
  imageAlt?: string;
  closed?: boolean;
  isRecommended?: boolean;
  closedBadge?: string;
};

export default function SpotHero({
  seoTitle,
  visualTitle,
  featuredImage,
  imageAlt,
  closed,
  isRecommended,
  closedBadge = "",
}: Props) {
  return (
    <header className="content-card header-card">
      <div className="title-area">
        <h1 className="seo-title">{seoTitle}</h1>
        <p className="visual-title" itemProp="name">
          {visualTitle || seoTitle}
        </p>
      </div>
      {featuredImage && (
        <figure className="hero-image-container" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <Image
            src={featuredImage}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 960px"
            itemProp="contentUrl"
          />
          <meta itemProp="url" content={featuredImage} />
          {closed && (
            <span className="spot-card-closed-badge">{closedBadge}</span>
          )}
          {isRecommended && !closed && (
            <Link href="/recommend/" className="spot-card-recommend-badge">おすすめTOP30</Link>
          )}
        </figure>
      )}
    </header>
  );
}
