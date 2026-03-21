import Link from "next/link";
import { Bell, Video } from "lucide-react";
import type { RecentSpotItem } from "@/lib/supabase/queries";

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
          <div className="news-column">
            <h2 className="home-section-heading">
              <span className="heading-icon"><Bell size={20} /></span>
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
          </div>

          {/* タイムラプス動画 */}
          <div className="videos-column">
            <h2 className="home-section-heading">
              <span className="heading-icon"><Video size={20} /></span>
              タイムラプス動画
            </h2>
            <p className="videos-intro">
              Youtubeに投稿している<Link href="/time-lapse/">東京のタイムラプス映像集</Link>の一部をご紹介します！
            </p>
            <div className="videos-list">
              {YOUTUBE_VIDEOS.map((v) => (
                <div key={v.id} className="video-card">
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="video-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
