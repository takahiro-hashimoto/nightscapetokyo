import { sanitizeHtml } from "@/lib/sanitize";
import { PenLine } from "lucide-react";
import type { OverviewLabels } from "@/lib/i18n-labels";

type Props = {
  spotName: string | null;
  report: string | null;
  labels?: OverviewLabels;
};

export default function SpotOverview({ spotName, report, labels }: Props) {
  if (!report) return null;

  const heading = labels
    ? labels.heading(spotName)
    : spotName ? `${spotName}の訪問レポート` : "訪問レポート";

  return (
    <section
      className="content-card card-padding cv-auto"
      id="report"
      aria-labelledby="report-heading"
    >
      <h2 id="report-heading">
        <span className="heading-icon">
          <PenLine size={18} aria-hidden="true" />
        </span>
        {heading}
      </h2>
      <div
        className="report-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(report.replace(/<\/?strong>/gi, "")) }}
      />
    </section>
  );
}
