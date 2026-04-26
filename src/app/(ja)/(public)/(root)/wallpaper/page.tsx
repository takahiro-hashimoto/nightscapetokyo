import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import { SITE_URL, ALL_LOCALE_SLUGS, LOCALE_LABELS } from "@/lib/types";

const PAGE_TITLE = "東京夜景の無料スマホ壁紙（大人向けおしゃれな壁紙）";
const PAGE_DESCRIPTION =
  "iPhoneやAndroidで使用できる高画質な東京夜景の壁紙を無料でプレゼントします！掲載しているのは大人の方が使いやすいお洒落な画像ばかり。気に入った画像がありましたら、長押ししてスマホに保存してください。";

export const metadata: Metadata = {
  title: { absolute: `${PAGE_TITLE} | 東京夜景ナビ` },
  description: PAGE_DESCRIPTION,
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  twitter: { title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  alternates: {
    canonical: `${SITE_URL}/wallpaper/`,
    languages: {
      ja: `${SITE_URL}/wallpaper/`,
      "x-default": `${SITE_URL}/wallpaper/`,
    },
  },
};

export const revalidate = 86400;
export const fetchCache = "force-cache";

type WallpaperItem = {
  src: string;
  thumb: string;
  caption: string;
};

const WALLPAPERS: WallpaperItem[] = [
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-01.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-01-473x1024.jpg",
    caption: "ライトアップされる東京タワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/odaiba-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/odaiba-vertical-473x1024.jpg",
    caption: "夕暮れ時のお台場の街並み",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-jikken-bridge.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-jikken-bridge-473x1024.jpg",
    caption: "東京スカイツリーの水鏡",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/asakusa.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/asakusa-473x1024.jpg",
    caption: "ライトアップされる浅草寺",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/kasumigaseki-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/kasumigaseki-vertical.jpg",
    caption: "夕暮れ時の霞ヶ関の街並み",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-02.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-02.jpg",
    caption: "ライトアップされる東京タワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/carreta-shiodome-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/carreta-shiodome-vertical.jpg",
    caption: "汐留・竹芝エリアの夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-1.jpg",
    caption: "ライトアップされる東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-vertical.jpg",
    caption: "ライトアップされる東京タワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/shinjyuku-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/shinjyuku-vertical.jpg",
    caption: "東京都庁から眺める夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-2.jpg",
    caption: "ライトアップされる東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tower-detail.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tower-detail.jpg",
    caption: "東京タワーを見上げる様子",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/shibuya.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/shibuya.jpg",
    caption: "渋谷スカイから眺める夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/skytree.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/skytree.jpg",
    caption: "東京スカイツリーと駒形橋",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/wadakura.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/wadakura.jpg",
    caption: "和田蔵噴水公園の夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tokyo-station.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tokyo-station.jpg",
    caption: "ライトアップされる東京駅",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1-2.jpg",
    caption: "渋谷スクランブル交差点と渋谷の街並み",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1.jpg",
    caption: "銀座エリアの夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/civic-vertical-01.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/civic-vertical-01.jpg",
    caption: "富士山と新宿の摩天楼",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-1.jpg",
    caption: "ライトアップされる東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/prince-tower.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/prince-tower.jpg",
    caption: "首都高速道路と富士山",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-twilight.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-twilight.jpg",
    caption: "夜明け前の東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/meguro-sakura.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/meguro-sakura.jpg",
    caption: "目黒川の夜桜ライトアップ",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/lavista-tokyobay-1-4.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/lavista-tokyobay-1-4.jpg",
    caption: "豊洲ぐるり公園とレインボーブリッジ",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/smuda-park-8.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/smuda-park-8.jpg",
    caption: "ライトアップされる東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/a-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/a-1-945x2048.jpg",
    caption: "渋谷桜坂のライトアップ",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/rainbow-bridge.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/rainbow-bridge.jpg",
    caption: "ライトアップされるレインボーブリッジ",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/marunouchi-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/marunouchi-1.jpg",
    caption: "夕暮れ時のKITTE丸の内",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC08939.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC08939-473x1024.jpg",
    caption: "富士山と東京ゲートブリッジ",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC03238.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC03238-473x1024.jpg",
    caption: "ライトアップされる東京駅",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC00164-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC00164-2-473x1024.jpg",
    caption: "東京スカイツリーを見上げる",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC05551.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC05551-473x1024.jpg",
    caption: "羽田空港の夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09265.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09265-473x1024.jpg",
    caption: "横浜ランドマークタワーとみなとみらいの街並み",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09691.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09691-473x1024.jpg",
    caption: "ライトアップされる日本丸メモリアルパーク",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-473x1024.jpg",
    caption: "横浜ランドマークタワーと日本丸メモリアルパーク",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-2-473x1024.jpg",
    caption: "虎ノ門エリアの夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/makura-bridge-4.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/makura-bridge-4-473x1024.jpg",
    caption: "ライトアップされる東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/vertical-asakusa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/vertical-asakusa-1-473x1024.jpg",
    caption: "ライトアップされる浅草寺五重塔",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/ebis-garden-place-wall-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/ebis-garden-place-wall-1-2-473x1024.jpg",
    caption: "麻布台ヒルズと虎ノ門の夜景",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-473x1024.jpg",
    caption: "札の辻橋歩道橋から眺める東京タワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-473x1024.jpg",
    caption: "ライトアップされる東京都庁",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-1-473x1024.jpg",
    caption: "スカイツリーと清洲橋",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/shibuya-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/shibuya-1-473x1024.jpg",
    caption: "新宿エリアの高層ビル群",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aaa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aaa-1-473x1024.jpg",
    caption: "黄色に輝く東京スカイツリー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-2-473x1024.jpg",
    caption: "象の鼻パークから眺めるクイーンの塔",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-1-473x1024.jpg",
    caption: "コスモロック21とパシフィコ横浜",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/s-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/s-1-473x1024.jpg",
    caption: "ライトアップされる横浜マリンタワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-1-473x1024.jpg",
    caption: "大桟橋に寄港する豪華客船",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/02/restaurant-luke-wall.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/02/restaurant-luke-wall-473x1024.jpg",
    caption: "富士山と東京タワー",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-18.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-18-473x1024.jpg",
    caption: "桜田門周辺の街並み",
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-17.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-17-473x1024.jpg",
    caption: "ライトアップされる国会議事堂",
  },
];

export default function WallpaperPage() {
  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug="wallpaper"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <div className="l-article-body">
        <div className="l-article-container">
          <Breadcrumb items={[{ label: PAGE_TITLE }]} />

        <article>
          {/* firstVisual: タイトル + リード文 */}
          <div className="firstVisual">
            <header className="firstVisual-header">
              <h1 className="firstVisual-title">{PAGE_TITLE}</h1>
            </header>
            <div className="firstVisual-body">
              <p>iPhoneやAndroidで使用できる高画質な東京夜景の壁紙を無料でプレゼントします！</p>
              <p>掲載しているのは大人の方が使いやすいお洒落な画像ばかり。気に入った画像がありましたら、長押ししてスマホに保存してください。壁紙に設定頂けた場合はぜひSNS等で紹介してもらえると今後の活動の励みになります。</p>
              <Link href="/" className="content-top-link">東京都内の夜景情報一覧</Link>
            </div>
          </div>

          {/* 壁紙グリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {WALLPAPERS.map((w, i) => (
                <figure key={i} className="m-0">
                  <a href={w.src} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={w.src}
                      alt={w.caption}
                      width={473}
                      height={1024}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      style={{ width: "100%", height: "auto", display: "block" }}
                      loading={i < 8 ? "eager" : "lazy"}
                    />
                  </a>
                  <figcaption className="text-xs text-center mt-1 text-gray-500">
                    {w.caption}
                  </figcaption>
                </figure>
            ))}
          </div>


          <RecommendCta locale={null} />

          <SpotShare
            url={`${SITE_URL}/wallpaper/`}
            title={PAGE_TITLE}
            labels={{
              heading: "この記事が役に立ったらシェアしてください",
              x: "ポスト",
              line: "LINE",
              hatena: "はてブ",
              copy: "URLコピー",
              copied: "コピーしました",
            }}
          />
          </article>
        </div>
      </div>
    </>
  );
}
