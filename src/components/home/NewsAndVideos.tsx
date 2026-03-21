import Link from "next/link";
import { Bell, Video } from "lucide-react";

type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
};

type VideoItem = {
  id: string;
  title: string;
  caption: string;
};

const newsItems: NewsItem[] = [
  { slug: "tamagawa-sengen", category: "minato", title: "多摩川浅間神社 見晴台", date: "2026/01/11" },
  { slug: "jiyugaoka-du-aone", category: "meguro", title: "自由が丘 デュ アオーネ 屋上テラス", date: "2026/01/11" },
  { slug: "skytree-east-tower", category: "sumida", title: "スカイツリーイーストタワー 展望フロア", date: "2025/12/29" },
  { slug: "asahi-sky-room", category: "sumida", title: "展望ラウンジ アサヒスカイルーム", date: "2025/12/29" },
  { slug: "tokyo-bay-ariake", category: "koto", title: "東京ベイ有明ワシントンホテル", date: "2025/12/09" },
  { slug: "ariake-greenway", category: "koto", title: "有明北緑道公園", date: "2025/12/09" },
  { slug: "showa-kinen-park", category: "tachikawa", title: "国営昭和記念公園 秋の夜散歩 2025", date: "2025/11/23" },
  { slug: "hibiya-magic-time", category: "chiyoda", title: "ヒビヤ マジックタイム イルミネーション 2025", date: "2025/11/19" },
  { slug: "toyosu-gururi", category: "koto", title: "豊洲ぐるり公園", date: "2025/11/10" },
];

const videoItems: VideoItem[] = [
  {
    id: "YuuQxNBHkvs",
    title: "東京夜景タイムラプス | Tokyo Japan Night View",
    caption: "東京都内の各所で撮影したタイムラプス映像",
  },
  {
    id: "Bz4mpMwznY4",
    title: "【4K】東京都渋谷区のタイムラプス映像",
    caption: "渋谷区の街並みを収録したタイムラプス映像",
  },
];

export default function NewsAndVideos() {
  return (
    <section className="home-section" id="news">
      <div className="home-container">
        <div className="news-videos-grid">
          <div className="news-column home-content-card">
            <h2 className="home-section-heading">
              <span className="heading-icon">
                <Bell size={20} />
              </span>
              新着情報
            </h2>
            <ul className="news-list">
              {newsItems.map((item, i) => (
                <li key={i} className="news-item">
                  <Link
                    href={`/${item.category}/${item.slug}`}
                    className="news-item-link"
                  >
                    {item.title}
                  </Link>
                  <time className="news-item-date">{item.date}</time>
                </li>
              ))}
            </ul>
          </div>
          <div className="videos-column home-content-card">
            <h2 className="home-section-heading">
              <span className="heading-icon">
                <Video size={20} />
              </span>
              タイムラプス動画
            </h2>
            <p className="home-section-desc">
              Youtubeに投稿している
              <a
                href="https://www.youtube.com/@nightscape_tokyo"
                target="_blank"
                rel="noopener noreferrer"
                className="news-ext-link"
              >
                東京のタイムラプス映像集
              </a>
              の一部をご紹介します！
            </p>
            <div className="videos-list">
              {videoItems.map((video, i) => (
                <figure key={i} className="video-figure">
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="video-caption">
                    {video.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
