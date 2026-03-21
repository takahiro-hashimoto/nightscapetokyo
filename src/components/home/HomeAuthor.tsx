import Image from "next/image";
import Link from "next/link";
import { Camera, ChevronRight } from "lucide-react";

export default function HomeAuthor() {
  return (
    <section className="home-section" id="about">
      <div className="home-container">
        <h2 className="home-section-heading">
          <span className="heading-icon">
            <Camera size={20} />
          </span>
          東京夜景ナビの運営者情報
        </h2>
        <div className="home-author-card">
          <div className="home-author-logo">
            <Image
              src="/cta-mv.jpg"
              alt="東京夜景ナビ"
              width={280}
              height={160}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="home-author-body">
            <p>
              夜景フォトグラファーが運営する月間20〜30万PVの地域情報サイトです。
            </p>
            <p>
              今まで実際に足を運んで訪れた東京都内の夜景スポットを
              <strong>定番から穴場まで200ヶ所以上</strong>紹介しています。
            </p>
            <p>
              今夜訪れたい夜景スポットを探すのにぜひ参考にしてみてください。
            </p>
            <div className="home-author-link">
              <Link href="/about">
                運営者情報（プロフィール・活動実績）を見る
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
