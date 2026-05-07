import { Hotel, ChevronRight } from "lucide-react";
import { getHotelAffiliateLink, type HotelAffiliateLang } from "@/data/hotel-affiliate";
import type { HotelCtaLabels } from "@/lib/i18n-labels/types";

type Props = {
  wardSlug: string;
  areaName: string;
  locale: HotelAffiliateLang;
  labels: HotelCtaLabels;
};

export default function HotelAffiliateCta({ wardSlug, areaName, locale, labels }: Props) {
  const href = getHotelAffiliateLink(wardSlug, locale);
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="recommend-cta hotel-cta"
    >
      <span className="recommend-cta-icon">
        <Hotel size={24} />
      </span>
      <span className="recommend-cta-body">
        <span className="recommend-cta-label">{labels.note}</span>
        <span className="recommend-cta-title">{labels.heading(areaName)}</span>
        <span className="recommend-cta-desc">{labels.body}</span>
      </span>
      <span className="recommend-cta-arrow">
        <ChevronRight size={20} />
      </span>
    </a>
  );
}
