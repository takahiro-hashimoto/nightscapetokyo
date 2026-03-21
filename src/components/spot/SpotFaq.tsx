import { CircleHelp } from "lucide-react";
import type { SpotFaq as SpotFaqType } from "@/lib/types";
import type { FaqLabels } from "@/lib/i18n-labels";

type FaqItem = Pick<SpotFaqType, "question" | "answer"> & { id?: string };

type Props = {
  faqs: FaqItem[];
  heading?: string;
  labels?: FaqLabels;
};

export default function SpotFaq({ faqs, heading, labels }: Props) {
  if (faqs.length === 0) return null;

  const displayHeading = heading ?? labels?.heading ?? "よくある質問 (FAQ)";

  return (
    <section
      className="content-card card-padding cv-auto"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading">
        <span className="heading-icon">
          <CircleHelp size={18} aria-hidden="true" />
        </span>
        {displayHeading}
      </h2>
      <dl>
        {faqs.map((faq, i) => (
          <div key={faq.id ?? i} className="faq-item">
            <dt className="faq-q">{faq.question}</dt>
            <dd
              className="faq-a"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        ))}
      </dl>
    </section>
  );
}
