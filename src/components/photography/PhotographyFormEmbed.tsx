import Link from "@/components/common/AppLink";
import { Mail } from "lucide-react";
import type { PhotographyLabels } from "@/lib/i18n-static/photography";
import { PHOTOGRAPHY_FORM_EMBED_URL } from "@/data/photography";

/**
 * 撮影依頼専用 Google フォームの埋め込み（要件 §3.10）。
 * 既存 /contact/ と同じ埋め込み方式を踏襲。読者向け /contact/ とは分離した専用フォーム。
 * 埋め込み URL 未設定時は /contact/ への暫定リンクを表示。
 */
export default function PhotographyFormEmbed({
  l,
  locale,
}: {
  l: PhotographyLabels["form"];
  locale: string;
}) {
  const contactHref = locale === "ja" ? "/contact/" : `/${locale}/contact/`;

  if (!PHOTOGRAPHY_FORM_EMBED_URL) {
    return (
      <div className="photo-form-fallback">
        <p>{l.fallbackNote}</p>
        <Link href={contactHref} className="photo-cta">
          <Mail size={18} aria-hidden="true" />
          {l.fallbackCta}
        </Link>
      </div>
    );
  }

  return (
    <div className="photo-form-embed">
      <iframe src={PHOTOGRAPHY_FORM_EMBED_URL} title={l.frameTitle} loading="lazy">
        Loading…
      </iframe>
    </div>
  );
}
