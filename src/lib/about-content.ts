import type { LucideProps } from "lucide-react";
import { Leaf } from "lucide-react";

export const EQUIPMENT = [
  { name: "Sony α7Ⅳ",                                              href: "https://amzn.to/3LI54Xb" },
  { name: "Sony α7III",                                             href: "https://amzn.to/3WJ8Rd1" },
  { name: "Sony α7C",                                               href: "https://amzn.to/3LEzwBn" },
  { name: "Sony FE 24-105mm F4 G OSS",                              href: "https://amzn.to/3SzE4Nh" },
  { name: "TAMRON 28-75mm F/2.8 Di III RXD",                        href: "https://amzn.to/3WCvRu4" },
  { name: "TAMRON 17-28mm F/2.8 Di III RXD",                        href: "https://amzn.to/3WDiWrU" },
  { name: "TAMRON 70-180mm F/2.8 Di III VXD",                       href: "https://amzn.to/3YkH0kD" },
  { name: "SONY Sonnar T* FE 55mm F1.8 ZA",                         href: "https://amzn.to/4c4xlSm" },
  { name: "Voigtlander ULTRA WIDE-HELIAR 12mm F5.6 Aspherical III", href: "https://amzn.to/3A6HpNk" },
];

export type SnsLink =
  | { label: string; href: string; icon: string; Icon?: never }
  | { label: string; href: string; Icon: React.ComponentType<LucideProps>; icon?: never };

export const ABOUT_SNS_LINKS: SnsLink[] = [
  { label: "X（Twitter）",  href: "https://twitter.com/takahiro__1202",                           icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { label: "Instagram",    href: "https://www.instagram.com/nightscape.tokyo/",                   icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { label: "YouTube",      href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1",   icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { label: "TikTok",       href: "https://www.tiktok.com/@nightscape_tokyo",                      icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.02-.09z" },
  { label: "Lemon8",       href: "https://www.lemon8-app.com/nightscape_tokyo",                   Icon: Leaf },
  { label: "Pinterest",    href: "https://www.pinterest.jp/0gsnym2k9zr0vps04rfjjkkb4fwsu4/",      icon: "M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.3-5.5s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.7-.3 1.1.6 2 1.7 2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.4 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.4 3 7.4 6.9 0 4.1-2.6 7.5-6.2 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1 2.5-1.5 3.3A12 12 0 1 0 12 0z" },
];

export type AchievementBase = {
  image: string;
  link: {
    title: string;
    href: string;
    siteName?: string;
    thumbnail?: string;
    excerpt?: string;
  };
};

export const ACHIEVEMENTS_BASE: AchievementBase[] = [
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-station-4.jpg",
    link: { title: "東京タワー", href: "https://www.tokyotower.co.jp/", siteName: "tokyotower.co.jp", excerpt: "東京タワーは1958年12月23日に開業した東京のランドマーク。2023年12月23日に開業65周年を迎えました。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/prince-hotel-room-02.jpg",
    link: { title: "お部屋から見える景色", href: "https://www.princehotels.co.jp/parktower/plan/guestroom_view/", siteName: "ザ・プリンス パークタワー東京", thumbnail: "https://www.princehotels.co.jp/image/pla_guestroomview.jpg", excerpt: "都会の中心で非日常を味わえるラグジュアリーな滞在を求める方や、夜景を愛する方におすすめのホテルです。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/10/tower-1.jpg",
    link: { title: "20th ANNIVERSARY｜ザ・プリンス パークタワー東京", href: "https://www.princehotels.co.jp/parktower/contents/20th/renewal.html", siteName: "ザ・プリンス パークタワー東京", excerpt: "ザ・プリンス パークタワー東京は、2025年で開業20周年を迎えます。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/02/aserf-1-2.jpg",
    link: { title: "ホテルからの眺望紹介", href: "https://www.princehotels.co.jp/nagoya/plan/view/", siteName: "名古屋プリンスホテル スカイタワー", thumbnail: "https://www.princehotels.co.jp/nagoya/images/north-night-03.jpg", excerpt: "名古屋プリンスホテル スカイタワーから眼下に広がる夜景をお楽しみください" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/12/minatu-ugoku.jpg",
    link: { title: "港、動く", href: "https://minato-ugoku.com/", siteName: "minato-ugoku.com", excerpt: "港区のナイトスポットの魅力を発信する動画コンテスト公式サイト。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/01/nihon-densetu.jpg",
    link: { title: "HOME – 日本電設工業株式会社", href: "https://www.densetsuko.co.jp/", siteName: "日本電設工業株式会社", thumbnail: "https://www.densetsuko.co.jp/wp/wp-content/uploads/2024/11/og-image.png", excerpt: "インフラで 日本を支え 未来を築く 総合インフラ設備工事会社、日本電設工業（NDK）のWebサイトです。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/02/08.jpg",
    link: { title: "【体験記】AIROS Skyviewのヘリコプター遊覧で東京夜景を堪能してきた話。", href: "https://nightscape.tokyo/pickup/airos-skyview/", siteName: "東京夜景ナビ", thumbnail: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/02/21.jpg", excerpt: "東京タワーやスカイツリーなどのランドマークを上空から堪能できるヘリコプター遊覧の体験レポート。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/02/restaurant-luke-2-1.jpg",
    link: { title: "「東京夜景ナビ」に当店の『SKY TERRACE』をご紹介いただきました", href: "https://www.restaurant-luke.com/news/8381/", siteName: "Restaurant LUKE with SKY LOUNGE", thumbnail: "https://www.restaurant-luke.com/wp-content/uploads/2024/02/221029-10.jpg", excerpt: "東京の夜景スポットを紹介する「東京夜景ナビ」にて、当店の期間限定プラン『SKY TERRACE』が紹介されました。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/marunouchi-builuding-35-03.jpg",
    link: { title: "東京大回廊写真コンテスト｜Visit Chiyoda", href: "https://visit-chiyoda.tokyo/photo_contest/", siteName: "Visit Chiyoda", excerpt: "東京大回廊写真コンテスト｜東京の中心、東京都千代田区の観光情報公式ウェブサイト。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/04/sample-tbs-1.jpg",
    link: { title: "カンニング竹山の昼酒は人生の味。", href: "https://bs.tbs.co.jp/entertainment/hiruzake/", siteName: "BS-TBS", thumbnail: "https://bs.tbs.co.jp/images/program/5476.jpg", excerpt: "飲み仲間を探しに街へと繰り出す昼呑み番組。青空の下で、ルール無用の人情トークを展開！" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/07/shibuya-scrabble-1.jpg",
    link: { title: "〜天才ピアニスト 10年の空白を越えて〜 | スタニスラフ・ブーニン", href: "https://www.nhk.jp/p/ts/581332RQ53/episode/te/M6NWNQX4YG/", siteName: "NHK", thumbnail: "https://imgu.web.nhk/static/assets/images/tvseries/ts/581332RQ53/581332RQ53-eyecatch_3661a0c5dee272b624595807286efb99.jpg", excerpt: "天才ピアニスト、スタニスラフ・ブーニン。ケガを乗り越え、10年ぶりに本格ツアーを再開。復活までの格闘に密着。" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/11/zawatuku.jpg",
    link: { title: "ザワつく!金曜日｜テレビ朝日", href: "https://www.tv-asahi.co.jp/zawatsukufriday/", siteName: "テレビ朝日", thumbnail: "https://www.tv-asahi.co.jp/zawatsukufriday/OG.jpg", excerpt: "テレビ朝日「ザワつく!金曜日」番組公式サイト" },
  },
  {
    image: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/harumi-futo-1.jpg",
    link: { title: "コラム／アートリップ／風媒銀乱　伊原通夫作（東京都中央区）－朝日マリオン・コム－", href: "https://www.asahi-mullion.com/column/article/artrip/2470", siteName: "朝日マリオン・コム", thumbnail: "https://dn9bqdq7w42e9.cloudfront.net/articles/main/2f4ab2392d105ce4b877a8e038f18e0800091395.jpg", excerpt: "夕闇迫る東京湾。海の玄関口晴海客船ターミナルで、カメラを持った人々に行き会った。" },
  },
];
