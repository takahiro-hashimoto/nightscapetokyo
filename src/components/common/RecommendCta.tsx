import Link from "next/link";
import { Crown, ChevronRight } from "lucide-react";
import type { SiteLocale } from "@/lib/types";

const RECOMMEND_CTA_LABELS = {
  ja: {
    title: "東京の夜景スポットおすすめランキング",
    desc: "実際に訪問した200ヶ所以上から厳選したおすすめスポットをチェック",
  },
  en: {
    title: "Best Tokyo Night View Spots Ranking",
    desc: "Hand-picked from 200+ spots we actually visited — check our top recommendations",
  },
  ko: {
    title: "도쿄 야경 스폿 추천 랭킹",
    desc: "실제로 방문한 200곳 이상에서 엄선한 추천 스폿을 확인하세요",
  },
  tw: {
    title: "東京夜景景點推薦排名",
    desc: "從實際造訪的200多個景點中精選推薦，快來看看吧",
  },
  cn: {
    title: "东京夜景景点推荐排名",
    desc: "从实际造访的200多个景点中精选推荐，快来看看吧",
  },
} satisfies Record<SiteLocale, { title: string; desc: string }>;

type Props = {
  locale: string | null;
};

export default function RecommendCta({ locale }: Props) {
  const cta = RECOMMEND_CTA_LABELS[(locale ?? "ja") as SiteLocale];
  return (
    <Link
      href={locale ? `/${locale}/recommend` : "/recommend"}
      className="recommend-cta"
    >
      <span className="recommend-cta-icon">
        <Crown size={24} />
      </span>
      <span className="recommend-cta-body">
        <span className="recommend-cta-label">Ranking</span>
        <span className="recommend-cta-title">{cta.title}</span>
        <span className="recommend-cta-desc">{cta.desc}</span>
      </span>
      <span className="recommend-cta-arrow">
        <ChevronRight size={20} />
      </span>
    </Link>
  );
}
