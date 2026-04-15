import { sanitizeHtml } from "@/lib/sanitize";
import { Ticket } from "lucide-react";

type Props = {
  asoview: string | null;
  asoview02: string | null;
};

export default function SpotAffiliate({ asoview, asoview02 }: Props) {
  if (!asoview && !asoview02) return null;

  return (
    <section className="content-card card-padding cv-auto">
      <h2>
        <span className="heading-icon">
          <Ticket size={18} aria-hidden="true" />
        </span>
        チケット・予約
      </h2>
      <div className="affiliate-links">
        {asoview && (
          <div
            className="affiliate-primary"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(asoview) }}
          />
        )}
        {asoview02 && (
          <div
            className="affiliate-secondary"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(asoview02) }}
          />
        )}
      </div>
    </section>
  );
}
