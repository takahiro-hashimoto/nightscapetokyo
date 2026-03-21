import Image from "next/image";
import Link from "next/link";

type PrLink = {
  label: string;
  href: string;
  variant: "filled" | "outline";
  external?: boolean;
};

type Props = {
  heading: string;
  image: {
    src: string;
    width?: number;
    height?: number;
  };
  paragraphs: string[];
  links: PrLink[];
};

export default function PrBanner({ heading, image, paragraphs, links }: Props) {
  return (
    <aside className="tag-pr-banner">
      <p className="tag-pr-banner-heading">{heading}</p>
      <div className="tag-pr-banner-body">
        <div className="tag-pr-banner-image">
          <Image
            alt=""
            loading="lazy"
            width={image.width ?? 280}
            height={image.height ?? 187}
            src={image.src}
            style={{ color: "transparent", objectFit: "cover", borderRadius: 4 }}
          />
        </div>
        <div className="tag-pr-banner-text">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <div className="tag-pr-banner-links">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`tag-pr-banner-cta cta-${link.variant}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tag-pr-banner-cta cta-${link.variant}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
