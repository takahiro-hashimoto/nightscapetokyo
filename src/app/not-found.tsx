import Link from "next/link";
import { headers } from "next/headers";
import { getComponentLabels } from "@/lib/i18n-labels";
import { ALL_LOCALE_SLUGS } from "@/lib/types";

export default async function NotFound() {
  const headersList = await headers();
  const localeSlug = headersList.get("x-locale") ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(localeSlug) ? localeSlug : "ja";

  const labels = getComponentLabels(locale).notFound;
  const homeHref = locale === "ja" ? "/" : `/${locale}`;

  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-title">{labels.title}</p>
      <p className="not-found-desc">{labels.desc}</p>
      <Link href={homeHref} className="not-found-btn">
        {labels.button}
      </Link>
    </div>
  );
}
