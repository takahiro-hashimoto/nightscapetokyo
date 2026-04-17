import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomeAuthorLabels } from "@/lib/i18n-labels";

const JA_LABELS: HomeAuthorLabels = {
  heading: "東京夜景ナビについて",
  name: "タカヒロ",
  title: "夜景フォトグラファー / Webディレクター",
  desc1: "月間20〜30万PVの東京夜景専門メディア。実際に足を運んで撮影した夜景スポットを定番から穴場まで200ヶ所以上紹介しています。",
  desc2: "国内外の多くの方に東京夜景の魅力を伝えていきたい。そんな思いでこのサイトを運営しています。",
  achievementsLabel: "主な実績",
  achievements: [
    "東京タワー公式サイトのタイムラプス映像を撮影",
    "ザ・プリンス パークタワー東京の客室・レストラン写真を撮影",
    "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
    "NHK総合・BS TBS・テレビ朝日などに映像・写真を提供",
  ],
  moreLink: "プロフィール・活動実績をもっと見る",
};

type Props = {
  labels?: HomeAuthorLabels;
  locale?: string;
};

export default function HomeAuthor({ labels = JA_LABELS, locale }: Props) {
  const aboutHref = locale ? `/${locale}/about` : "/about";
  return (
    <section className="home-section" id="about">
      <div className="home-container">
        <h2 className="home-section-heading">
          {labels.heading}
        </h2>
        <div className="home-author-card">
          <div className="home-author-left">
            <div className="home-author-avatar">
              <Image
                src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
                alt="東京夜景ナビ 運営者タカヒロ"
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="home-author-name">{labels.name}</p>
            <p className="home-author-title">{labels.title}</p>
          </div>
          <div className="home-author-body">
            <p>{labels.desc1}</p>
            <p>{labels.desc2}</p>
            <h3 className="home-author-achievements-label">{labels.achievementsLabel}</h3>
            <ul className="home-author-achievements">
              {labels.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <div className="home-author-link">
              <Link href={aboutHref}>
                {labels.moreLink}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
