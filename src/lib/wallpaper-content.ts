export type WallpaperLabels = {
  title: string;
  description: string;
  lead1: string;
  lead2: string;
  topLink: string;
};

export const WALLPAPER_LABELS: Record<string, WallpaperLabels> = {
  ja: {
    title: "東京夜景の無料スマホ壁紙（大人向けおしゃれな壁紙）",
    description:
      "iPhoneやAndroidで使用できる高画質な東京夜景の壁紙を無料でプレゼントします！掲載しているのは大人の方が使いやすいお洒落な画像ばかり。気に入った画像がありましたら、長押ししてスマホに保存してください。",
    lead1: "iPhoneやAndroidで使用できる高画質な東京夜景の壁紙を無料でプレゼントします！",
    lead2:
      "掲載しているのは大人の方が使いやすいお洒落な画像ばかり。気に入った画像がありましたら、長押ししてスマホに保存してください。壁紙に設定頂けた場合はぜひSNS等で紹介してもらえると今後の活動の励みになります。",
    topLink: "東京都内の夜景情報一覧",
  },
  en: {
    title: "Free Tokyo Night View Phone Wallpapers",
    description:
      "Free high-quality Tokyo night view wallpapers for iPhone and Android. Long-press any image to save it to your phone.",
    lead1: "Free high-quality Tokyo night view wallpapers for iPhone and Android!",
    lead2:
      "We offer stylish, sophisticated wallpapers perfect for adults. Long-press any image to save it to your phone. If you set one as your wallpaper, we'd love it if you shared it on social media!",
    topLink: "Tokyo Night View Spot List",
  },
  ko: {
    title: "도쿄 야경 무료 스마트폰 배경화면",
    description:
      "iPhone 및 Android에서 사용할 수 있는 고화질 도쿄 야경 배경화면을 무료로 제공합니다. 마음에 드는 이미지를 길게 눌러 저장하세요.",
    lead1: "iPhone 및 Android에서 사용 가능한 고화질 도쿄 야경 배경화면을 무료로 제공합니다!",
    lead2:
      "어른스럽고 세련된 이미지만 엄선했습니다. 마음에 드는 이미지가 있으면 길게 눌러 스마트폰에 저장하세요. 배경화면으로 설정하셨다면 SNS 등에서 소개해 주시면 감사하겠습니다!",
    topLink: "도쿄 야경 스폿 목록",
  },
  tw: {
    title: "東京夜景免費手機桌布",
    description:
      "免費提供可用於iPhone和Android的高畫質東京夜景桌布！長按喜歡的圖片即可儲存至手機。",
    lead1: "免費提供可用於iPhone和Android的高畫質東京夜景桌布！",
    lead2:
      "精選適合成熟風格的高質感圖片。如有喜歡的圖片，請長按保存至手機。若能設為桌布，歡迎在SNS等平台分享，這將是我們持續創作的動力！",
    topLink: "東京夜景景點一覽",
  },
  cn: {
    title: "东京夜景免费手机壁纸",
    description:
      "免费提供可用于iPhone和Android的高清东京夜景壁纸！长按喜欢的图片即可保存到手机。",
    lead1: "免费提供可用于iPhone和Android的高清东京夜景壁纸！",
    lead2:
      "精选适合成熟风格的高质感图片。如有喜欢的图片，请长按保存到手机。若能设为壁纸，欢迎在社交媒体等平台分享，这将是我们持续创作的动力！",
    topLink: "东京夜景景点一览",
  },
};

export type WallpaperItem = {
  src: string;
  thumb: string;
  captions: Record<string, string>;
};

export const WALLPAPERS: WallpaperItem[] = [
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-01.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-01-473x1024.jpg",
    captions: { ja: "ライトアップされる東京タワー", en: "Illuminated Tokyo Tower", ko: "야간 조명의 도쿄 타워", tw: "燈光璀璨的東京鐵塔", cn: "灯光璀璨的东京铁塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/odaiba-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/odaiba-vertical-473x1024.jpg",
    captions: { ja: "夕暮れ時のお台場の街並み", en: "Odaiba cityscape at dusk", ko: "황혼 무렵의 오다이바 풍경", tw: "黃昏時分的台場街景", cn: "黄昏时分的台场街景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-jikken-bridge.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-jikken-bridge-473x1024.jpg",
    captions: { ja: "東京スカイツリーの水鏡", en: "Tokyo Skytree reflected in water", ko: "물에 비친 도쿄 스카이트리", tw: "東京晴空塔的水中倒影", cn: "东京晴空塔的水中倒影" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/asakusa.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/asakusa-473x1024.jpg",
    captions: { ja: "ライトアップされる浅草寺", en: "Illuminated Senso-ji Temple", ko: "야간 조명의 아사쿠사 절", tw: "燈光璀璨的淺草寺", cn: "灯光璀璨的浅草寺" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/kasumigaseki-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/kasumigaseki-vertical.jpg",
    captions: { ja: "夕暮れ時の霞ヶ関の街並み", en: "Kasumigaseki cityscape at dusk", ko: "황혼 무렵의 가스미가세키 풍경", tw: "黃昏時分的霞關街景", cn: "黄昏时分的霞关街景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-02.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-prince-hotel-02.jpg",
    captions: { ja: "ライトアップされる東京タワー", en: "Illuminated Tokyo Tower", ko: "야간 조명의 도쿄 타워", tw: "燈光璀璨的東京鐵塔", cn: "灯光璀璨的东京铁塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/carreta-shiodome-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/carreta-shiodome-vertical.jpg",
    captions: { ja: "汐留・竹芝エリアの夜景", en: "Shiodome & Takeshiba area night view", ko: "시오도메·다케시바 지역 야경", tw: "汐留・竹芝地區夜景", cn: "汐留·竹芝地区夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-1.jpg",
    captions: { ja: "ライトアップされる東京スカイツリー", en: "Illuminated Tokyo Skytree", ko: "야간 조명의 도쿄 스카이트리", tw: "燈光璀璨的東京晴空塔", cn: "灯光璀璨的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/tokyo-tower-vertical.jpg",
    captions: { ja: "ライトアップされる東京タワー", en: "Illuminated Tokyo Tower", ko: "야간 조명의 도쿄 타워", tw: "燈光璀璨的東京鐵塔", cn: "灯光璀璨的东京铁塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/shinjyuku-vertical.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/shinjyuku-vertical.jpg",
    captions: { ja: "東京都庁から眺める夜景", en: "Night view from Tokyo Metropolitan Government Building", ko: "도쿄도청에서 바라본 야경", tw: "從東京都廳俯瞰的夜景", cn: "从东京都厅俯瞰的夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/skytree-vertical-2.jpg",
    captions: { ja: "ライトアップされる東京スカイツリー", en: "Illuminated Tokyo Skytree", ko: "야간 조명의 도쿄 스카이트리", tw: "燈光璀璨的東京晴空塔", cn: "灯光璀璨的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tower-detail.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tower-detail.jpg",
    captions: { ja: "東京タワーを見上げる様子", en: "Looking up at Tokyo Tower", ko: "도쿄 타워를 올려다보는 광경", tw: "仰望東京鐵塔的景色", cn: "仰望东京铁塔的景色" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/shibuya.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/shibuya.jpg",
    captions: { ja: "渋谷スカイから眺める夜景", en: "Night view from Shibuya Sky", ko: "시부야 스카이에서 바라본 야경", tw: "從澀谷Sky俯瞰的夜景", cn: "从涩谷Sky俯瞰的夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/skytree.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/skytree.jpg",
    captions: { ja: "東京スカイツリーと駒形橋", en: "Tokyo Skytree and Komagata Bridge", ko: "도쿄 스카이트리와 고마가타 다리", tw: "東京晴空塔與駒形橋", cn: "东京晴空塔与驹形桥" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/wadakura.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/10/wadakura.jpg",
    captions: { ja: "和田蔵噴水公園の夜景", en: "Wadakura Fountain Park night view", ko: "와다쿠라 분수 공원 야경", tw: "和田倉噴水公園夜景", cn: "和田仓喷水公园夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tokyo-station.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/02/tokyo-station.jpg",
    captions: { ja: "ライトアップされる東京駅", en: "Illuminated Tokyo Station", ko: "야간 조명의 도쿄역", tw: "燈光璀璨的東京車站", cn: "灯光璀璨的东京车站" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1-2.jpg",
    captions: { ja: "渋谷スクランブル交差点と渋谷の街並み", en: "Shibuya Scramble Crossing and cityscape", ko: "시부야 스크램블 교차로와 시부야 시가지", tw: "澀谷十字路口與澀谷街景", cn: "涩谷十字路口与涩谷街景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/shibuya-sky-1.jpg",
    captions: { ja: "銀座エリアの夜景", en: "Ginza area night view", ko: "긴자 지역 야경", tw: "銀座地區夜景", cn: "银座地区夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/civic-vertical-01.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/civic-vertical-01.jpg",
    captions: { ja: "富士山と新宿の摩天楼", en: "Mt. Fuji and Shinjuku skyscrapers", ko: "후지산과 신주쿠 고층 빌딩군", tw: "富士山與新宿摩天大樓群", cn: "富士山与新宿摩天大楼群" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-1.jpg",
    captions: { ja: "ライトアップされる東京スカイツリー", en: "Illuminated Tokyo Skytree", ko: "야간 조명의 도쿄 스카이트리", tw: "燈光璀璨的東京晴空塔", cn: "灯光璀璨的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/prince-tower.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/prince-tower.jpg",
    captions: { ja: "首都高速道路と富士山", en: "Metropolitan Expressway and Mt. Fuji", ko: "수도고속도로와 후지산", tw: "首都高速公路與富士山", cn: "首都高速公路与富士山" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-twilight.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/skytree-twilight.jpg",
    captions: { ja: "夜明け前の東京スカイツリー", en: "Tokyo Skytree before dawn", ko: "새벽 전의 도쿄 스카이트리", tw: "破曉前的東京晴空塔", cn: "破晓前的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/meguro-sakura.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/meguro-sakura.jpg",
    captions: { ja: "目黒川の夜桜ライトアップ", en: "Meguro River cherry blossom illumination", ko: "메구로강의 야간 벚꽃 조명", tw: "目黑川夜間櫻花燈飾", cn: "目黑川夜间樱花灯饰" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/lavista-tokyobay-1-4.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/lavista-tokyobay-1-4.jpg",
    captions: { ja: "豊洲ぐるり公園とレインボーブリッジ", en: "Toyosu Gururi Park and Rainbow Bridge", ko: "도요스 구루리 공원과 레인보우 브리지", tw: "豐洲Gururi公園與彩虹橋", cn: "丰洲Gururi公园与彩虹桥" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/smuda-park-8.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/smuda-park-8.jpg",
    captions: { ja: "ライトアップされる東京スカイツリー", en: "Illuminated Tokyo Skytree", ko: "야간 조명의 도쿄 스카이트리", tw: "燈光璀璨的東京晴空塔", cn: "灯光璀璨的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/a-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/a-1-945x2048.jpg",
    captions: { ja: "渋谷桜坂のライトアップ", en: "Shibuya Sakurazaka illumination", ko: "시부야 사쿠라자카의 야간 조명", tw: "澀谷櫻坂的燈飾", cn: "涩谷樱坂的灯饰" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/rainbow-bridge.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/rainbow-bridge.jpg",
    captions: { ja: "ライトアップされるレインボーブリッジ", en: "Illuminated Rainbow Bridge", ko: "야간 조명의 레인보우 브리지", tw: "燈光璀璨的彩虹橋", cn: "灯光璀璨的彩虹桥" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/marunouchi-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/04/marunouchi-1.jpg",
    captions: { ja: "夕暮れ時のKITTE丸の内", en: "KITTE Marunouchi at dusk", ko: "황혼 무렵의 KITTE 마루노우치", tw: "黃昏時分的KITTE丸之內", cn: "黄昏时分的KITTE丸之内" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC08939.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC08939-473x1024.jpg",
    captions: { ja: "富士山と東京ゲートブリッジ", en: "Mt. Fuji and Tokyo Gate Bridge", ko: "후지산과 도쿄 게이트 브리지", tw: "富士山與東京港灣大橋", cn: "富士山与东京港湾大桥" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC03238.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC03238-473x1024.jpg",
    captions: { ja: "ライトアップされる東京駅", en: "Illuminated Tokyo Station", ko: "야간 조명의 도쿄역", tw: "燈光璀璨的東京車站", cn: "灯光璀璨的东京车站" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC00164-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC00164-2-473x1024.jpg",
    captions: { ja: "東京スカイツリーを見上げる", en: "Looking up at Tokyo Skytree", ko: "도쿄 스카이트리를 올려다보는 광경", tw: "仰望東京晴空塔", cn: "仰望东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC05551.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC05551-473x1024.jpg",
    captions: { ja: "羽田空港の夜景", en: "Haneda Airport night view", ko: "하네다 공항 야경", tw: "羽田機場夜景", cn: "羽田机场夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09265.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09265-473x1024.jpg",
    captions: { ja: "横浜ランドマークタワーとみなとみらいの街並み", en: "Yokohama Landmark Tower and Minato Mirai cityscape", ko: "요코하마 랜드마크 타워와 미나토미라이 시가지", tw: "橫濱地標塔與港未來街景", cn: "横滨地标塔与港未来街景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09691.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/06/DSC09691-473x1024.jpg",
    captions: { ja: "ライトアップされる日本丸メモリアルパーク", en: "Illuminated Nippon Maru Memorial Park", ko: "야간 조명의 니혼마루 메모리얼 파크", tw: "燈光璀璨的日本丸紀念公園", cn: "灯光璀璨的日本丸纪念公园" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-473x1024.jpg",
    captions: { ja: "横浜ランドマークタワーと日本丸メモリアルパーク", en: "Yokohama Landmark Tower and Nippon Maru Memorial Park", ko: "요코하마 랜드마크 타워와 니혼마루 메모리얼 파크", tw: "橫濱地標塔與日本丸紀念公園", cn: "横滨地标塔与日本丸纪念公园" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aa-1-2-473x1024.jpg",
    captions: { ja: "虎ノ門エリアの夜景", en: "Toranomon area night view", ko: "도라노몬 지역 야경", tw: "虎之門地區夜景", cn: "虎之门地区夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/makura-bridge-4.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/makura-bridge-4-473x1024.jpg",
    captions: { ja: "ライトアップされる東京スカイツリー", en: "Illuminated Tokyo Skytree", ko: "야간 조명의 도쿄 스카이트리", tw: "燈光璀璨的東京晴空塔", cn: "灯光璀璨的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/vertical-asakusa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/12/vertical-asakusa-1-473x1024.jpg",
    captions: { ja: "ライトアップされる浅草寺五重塔", en: "Illuminated Senso-ji Five-Story Pagoda", ko: "야간 조명의 아사쿠사 오층탑", tw: "燈光璀璨的淺草寺五重塔", cn: "灯光璀璨的浅草寺五重塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/ebis-garden-place-wall-1-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/ebis-garden-place-wall-1-2-473x1024.jpg",
    captions: { ja: "麻布台ヒルズと虎ノ門の夜景", en: "Azabudai Hills and Toranomon night view", ko: "아자부다이 힐스와 도라노몬 야경", tw: "麻布台之丘與虎之門夜景", cn: "麻布台之丘与虎之门夜景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-473x1024.jpg",
    captions: { ja: "札の辻橋歩道橋から眺める東京タワー", en: "Tokyo Tower viewed from Fuda-no-Tsuji pedestrian bridge", ko: "후다노쓰지 육교에서 바라본 도쿄 타워", tw: "從札辻橋人行天橋眺望東京鐵塔", cn: "从札辻桥人行天桥眺望东京铁塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-473x1024.jpg",
    captions: { ja: "ライトアップされる東京都庁", en: "Illuminated Tokyo Metropolitan Government Building", ko: "야간 조명의 도쿄도청", tw: "燈光璀璨的東京都廳", cn: "灯光璀璨的东京都厅" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/iphone-cool-1-1-473x1024.jpg",
    captions: { ja: "スカイツリーと清洲橋", en: "Skytree and Kiyosu Bridge", ko: "스카이트리와 기요스 다리", tw: "晴空塔與清洲橋", cn: "晴空塔与清洲桥" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/shibuya-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/shibuya-1-473x1024.jpg",
    captions: { ja: "新宿エリアの高層ビル群", en: "Shinjuku area skyscrapers", ko: "신주쿠 지역 고층 빌딩군", tw: "新宿地區高樓群", cn: "新宿地区高楼群" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aaa-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/aaa-1-473x1024.jpg",
    captions: { ja: "黄色に輝く東京スカイツリー", en: "Tokyo Skytree glowing in yellow", ko: "노란빛으로 빛나는 도쿄 스카이트리", tw: "閃耀黃光的東京晴空塔", cn: "闪耀黄光的东京晴空塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-2.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-2-473x1024.jpg",
    captions: { ja: "象の鼻パークから眺めるクイーンの塔", en: "Queen's Tower viewed from Zounohana Park", ko: "조노하나 공원에서 바라본 퀸 타워", tw: "從象鼻公園眺望皇后之塔", cn: "从象鼻公园眺望皇后之塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/09/wall-paper-1-473x1024.jpg",
    captions: { ja: "コスモロック21とパシフィコ横浜", en: "Cosmo Clock 21 and Pacifico Yokohama", ko: "코스모 클락 21과 퍼시피코 요코하마", tw: "宇宙時鐘21與橫濱太平洋會展中心", cn: "宇宙时钟21与横滨太平洋会展中心" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/s-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/s-1-473x1024.jpg",
    captions: { ja: "ライトアップされる横浜マリンタワー", en: "Illuminated Yokohama Marine Tower", ko: "야간 조명의 요코하마 마린 타워", tw: "燈光璀璨的橫濱海洋塔", cn: "灯光璀璨的横滨海洋塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-1.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/yokohama-queen-park-1-473x1024.jpg",
    captions: { ja: "大桟橋に寄港する豪華客船", en: "Luxury cruise ship at Osanbashi Pier", ko: "오산바시 부두에 입항하는 호화 여객선", tw: "停靠大棧橋的豪華郵輪", cn: "停靠大栈桥的豪华邮轮" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/02/restaurant-luke-wall.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/02/restaurant-luke-wall-473x1024.jpg",
    captions: { ja: "富士山と東京タワー", en: "Mt. Fuji and Tokyo Tower", ko: "후지산과 도쿄 타워", tw: "富士山與東京鐵塔", cn: "富士山与东京铁塔" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-18.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-18-473x1024.jpg",
    captions: { ja: "桜田門周辺の街並み", en: "Sakuradamon area cityscape", ko: "사쿠라다몬 주변 시가지", tw: "櫻田門周邊街景", cn: "樱田门周边街景" },
  },
  {
    src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-17.jpg",
    thumb: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2025/03/grandarc-17-473x1024.jpg",
    captions: { ja: "ライトアップされる国会議事堂", en: "Illuminated National Diet Building", ko: "야간 조명의 국회의사당", tw: "燈光璀璨的國會議事堂", cn: "灯光璀璨的国会议事堂" },
  },
];
