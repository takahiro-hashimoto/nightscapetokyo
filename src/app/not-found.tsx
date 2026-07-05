import type { Metadata } from "next";
import Link from "@/components/common/AppLink";
import { getComponentLabels } from "@/lib/i18n-labels";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const labels = getComponentLabels("ja").notFound;
  const homeHref = "/";

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="not-found-container">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-title">{labels.title}</p>
        <p className="not-found-desc">{labels.desc}</p>
        <Link href={homeHref} className="not-found-btn">
          {labels.button}
        </Link>
      </div>
    </main>
  );
}
