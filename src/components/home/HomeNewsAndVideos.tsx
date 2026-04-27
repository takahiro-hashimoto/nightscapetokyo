import Link from "next/link";
import type { RecentSpotItem } from "@/lib/supabase/queries";
import YouTubeFacade from "./YouTubeFacade";

type Props = {
  recentSpots: RecentSpotItem[];
};

const YOUTUBE_VIDEOS = [
  {
    id: "YuuQxNBHkvs",
    title: "東京夜景タイムラプス | Tokyo Japan Night View",
    desc: "東京都内の各所で撮影したタイムラプス映像",
  },
  {
    id: "Bz4mpMwznY4",
    title: "【4K】東京都渋谷区のタイムラプス映像",
    desc: "渋谷区内の各所で撮影したタイムラプス映像",
  },
];

export default function HomeNewsAndVideos({ recentSpots }: Props) {
  return (
    <section className="home-section" id="news-videos">
      <div className="home-container">
        <div className="news-videos-grid">
          {/* 新着情報 */}
          <section className="news-column" aria-labelledby="news-heading">
            <h2 id="news-heading" className="home-section-heading">
              新着情報
            </h2>
            <div className="news-card">
              <ul className="news-list">
                {recentSpots.map((spot) => (
                  <li key={spot.slug} className="news-item">
                    <Link href={`/${spot.categorySlug}/${spot.slug}`} className="news-link">
                      <span className="news-name">{spot.name}</span>
                      <span className="news-date">{spot.updatedAt}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* タイムラプス動画 */}
          <section className="videos-column" aria-labelledby="videos-heading">
            <h2 id="videos-heading" className="home-section-heading">
              タイムラプス動画
            </h2>
            <p className="videos-intro">
              Youtubeに投稿している<Link href="/time-lapse/">東京のタイムラプス映像集</Link>の一部をご紹介します！
            </p>
            <div className="videos-list">
              {YOUTUBE_VIDEOS.map((v) => (
                <div key={v.id} className="video-card">
                  <div className="video-embed">
                    <YouTubeFacade videoId={v.id} title={v.title} />
                  </div>
                  <p className="video-caption">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
