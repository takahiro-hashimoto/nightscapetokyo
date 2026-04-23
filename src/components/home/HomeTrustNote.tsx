import Link from "next/link";
import type { HomePageLabels } from "@/lib/i18n-labels";

type Props = {
  labels: NonNullable<HomePageLabels["trustNote"]>;
  localeSlug: string;
};

export default function HomeTrustNote({ labels, localeSlug }: Props) {
  const base = `/${localeSlug}`;
  return (
    <div className="home-trust-note">
      <div className="home-container">
        <p className="home-trust-note-text">
          {labels.text}{" "}
          <Link href={`${base}/about/`}>{labels.aboutLinkText}</Link>
          {" · "}
          <Link href={`${base}/guidelines/`}>{labels.guidelinesLinkText}</Link>
        </p>
      </div>
    </div>
  );
}
