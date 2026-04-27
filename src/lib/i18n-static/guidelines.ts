import type { StaticPageLabels } from "./types";

type GuidelinesSection = { heading: string; texts: string[] };
type ReferenceSite = { name: string; href: string; description: string };
type ReferenceSiteGroup = { category: string; sites: ReferenceSite[] };

export const GUIDELINES_LABELS: Record<string, StaticPageLabels & {
  intro: string;
  sections: GuidelinesSection[];
  refSitesHeading: string;
  refSitesIntro: string;
  refSites: ReferenceSiteGroup[];
}> = {
  ja: {
    title: "コンテンツ制作ポリシー",
    summary: "東京夜景ナビでは、読者の皆さまが安心して情報を参考にできるよう、以下の方針に基づきコンテンツを制作しています。",
    description: "東京夜景ナビのコンテンツ制作ポリシーです。情報の正確性・写真の取り扱い・表現方針・法的配慮など、記事制作の基本方針をご案内します。",
    intro: "",
    sections: [],
    refSitesHeading: "",
    refSitesIntro: "",
    refSites: [],
  },
  en: {
    title: "Content Policy",
    summary: "Tokyo Night View Guide creates content based on the following principles to ensure readers can rely on our information with confidence.",
    description: "Content creation policy for Tokyo Night View Guide. Covers accuracy, photo handling, expression guidelines, and legal considerations.",
    intro: "This site is operated with the goal of accurately and beautifully conveying the appeal of Tokyo's night views.",
    sections: [
      {
        heading: "Accuracy & Reliability",
        texts: [
          "All information is primarily gathered through on-site research and original photography.",
          "Business hours, lighting schedules, and admission fees are verified against official sources, public agencies, and tourism boards before publication.",
          "Information from social media or review sites is only included after confirming it originates from official channels.",
        ],
      },
      {
        heading: "Photo & Video Policy",
        texts: [
          "All photos and videos are either self-shot or used with explicit permission from the rights holder.",
          "Post-processing is limited to adjustments that preserve the authentic atmosphere and actual scenery of each location.",
          "We give the utmost care to portrait rights and copyright of all subjects.",
        ],
      },
      {
        heading: "Update Schedule",
        texts: [
          "Event dates and facility information are reviewed when changes occur or seasonally.",
          "New night view spots and limited-time illuminations are added as soon as they are confirmed.",
          "Where older information may remain, we note the update date or add a disclaimer within the article.",
        ],
      },
      {
        heading: "Expression Guidelines",
        texts: [
          "We avoid exaggeration and factual errors, providing real information based on actual experiences.",
          "We use clear, accessible language suitable for both first-time visitors and international tourists.",
          "Safety tips and etiquette reminders are proactively included where relevant.",
        ],
      },
      {
        heading: "User Contributions",
        texts: [
          "We welcome photo submissions and experience sharing from readers, but all content is reviewed and edited as necessary before publication.",
          "Corrections and improvement suggestions are always welcome via the contact form.",
        ],
      },
      {
        heading: "Legal & Ethical Considerations",
        texts: [
          "We do not introduce restricted or photography-prohibited areas.",
          "We avoid any expression that could encourage nuisance behavior toward nearby residents or facility staff.",
          "We strictly protect personal information and privacy.",
        ],
      },
    ],
    refSitesHeading: "Reference Sources Used in Articles",
    refSitesIntro: "Published articles are written based on the author's own experience, with reference to the following official sources and websites.",
    refSites: [
      {
        category: "Tourism & General Information",
        sites: [
          { name: "東京都公式観光サイト「GO TOKYO」", href: "https://www.gotokyo.org/jp/", description: "Official tourism portal operated by the Tokyo Metropolitan Government, covering night view spots, events, and access details. Available in multiple languages for international travellers." },
          { name: "東京都観光財団（TCVB）", href: "https://tcvb.or.jp/", description: "A public organization providing tourism trends and promotional information. Also publishes tourism statistics and policy documents." },
        ],
      },
      {
        category: "Government & Regulations",
        sites: [
          { name: "東京都庁 公式サイト", href: "https://www.metro.tokyo.lg.jp/", description: "Primary source for ordinances and facility information. Also provides operating hours for the Tokyo Metropolitan Government observation deck and event schedules." },
        ],
      },
      {
        category: "Major Observation Spots (Official)",
        sites: [
          { name: "東京タワー 公式サイト", href: "https://www.tokyotower.co.jp/", description: "Official site featuring lighting schedules, observation deck events, and ticket information." },
          { name: "東京スカイツリー 公式サイト", href: "https://www.tokyo-skytree.jp/", description: "Official site with lighting color information, observation deck events, and crowd conditions." },
        ],
      },
      {
        category: "Hotels with Night Views",
        sites: [
          { name: "じゃらんnet", href: "https://www.jalan.net/", description: "Search for hotels with night view rooms or high-floor accommodations using custom filters. Check plans, reviews, and availability in real time." },
          { name: "楽天トラベル", href: "https://travel.rakuten.co.jp/", description: "One of Japan's largest hotel and inn booking sites. Offers rich information on night view rooms and nearby sightseeing spots." },
          { name: "Booking.com", href: "https://www.booking.com/", description: "Popular booking site widely used by international travellers. Check night views in advance through photos and guest reviews." },
        ],
      },
      {
        category: "Restaurants with Night Views",
        sites: [
          { name: "TableCheck", href: "https://www.tablecheck.com/ja/", description: "Restaurant reservation platform where you can search and book night view seats. Supports seat position requests and event reservations." },
          { name: "一休.comレストラン", href: "https://restaurant.ikyu.com/", description: "Luxury restaurant booking site where you can specify night view or window seats. Detailed menus and photos are available for each restaurant." },
          { name: "ホットペッパーグルメ（東京 夜景）", href: "https://www.hotpepper.jp/SA11/G002/", description: "Search Tokyo restaurants with night views by genre or area. Includes coupons and reviews." },
        ],
      },
      {
        category: "Illumination & Infrastructure",
        sites: [
          { name: "東京都建設局", href: "https://www.kensetsu.metro.tokyo.lg.jp/", description: "Provides illumination schedules and special production information for bridges and riverside facilities." },
        ],
      },
      {
        category: "Weather, Sunset & Visibility",
        sites: [
          { name: "気象庁", href: "https://www.jma.go.jp/", description: "Provides weather forecasts, cloud cover, and visibility data — useful for choosing the best day and time to shoot." },
          { name: "国立天文台 暦計算室", href: "https://eco.mtk.nao.ac.jp/koyomi/", description: "Calculate sunset and twilight times to plan the optimal timing for night photography." },
        ],
      },
      {
        category: "Transportation",
        sites: [
          { name: "東京メトロ", href: "https://www.tokyometro.jp/", description: "Provides subway route maps and last train information, convenient for planning night view sightseeing itineraries." },
          { name: "都営交通（都営地下鉄・都営バス）", href: "https://www.kotsu.metro.tokyo.jp/", description: "Check operation status and timetables for Toei Subway and Toei Bus. Also useful for late-night travel." },
          { name: "JR東日本", href: "https://www.jreast.co.jp/", description: "Provides wide-area access across the Greater Tokyo metropolitan area, plus service interruption alerts and special train information." },
        ],
      },
      {
        category: "Etiquette & Safety",
        sites: [
          { name: "警視庁", href: "https://www.keishicho.metro.tokyo.lg.jp/", description: "Primary source for crime prevention information and drone flight regulations. Essential reference for safe night view sightseeing." },
        ],
      },
      {
        category: "Photography Permits",
        sites: [
          { name: "東京都公園協会", href: "https://www.ppo.metro.tokyo.lg.jp/", description: "Information on photography rules and commercial use permit applications within Tokyo's parks." },
          { name: "国土交通省", href: "https://www.mlit.go.jp/", description: "Primary source for occupancy permits and usage rules for port and riverside areas." },
        ],
      },
    ],
  },
  ko: {
    title: "콘텐츠 제작 정책",
    summary: "도쿄 야경 네비는 독자 여러분이 안심하고 정보를 참고할 수 있도록 다음 방침에 따라 콘텐츠를 제작하고 있습니다.",
    description: "도쿄 야경 네비의 콘텐츠 제작 정책입니다. 정보의 정확성, 사진 취급, 표현 방침, 법적 배려 등을 안내합니다.",
    intro: "본 사이트는 도쿄의 야경 매력을 정확하고 아름답게 전달하는 것을 목적으로 운영하고 있습니다.",
    sections: [
      {
        heading: "정보의 정확성과 신뢰성",
        texts: [
          "게재 정보는 원칙적으로 현지 취재와 직접 촬영을 통해 수집합니다.",
          "영업시간, 라이트업 시각, 입장료 등은 시설 공식 발표나 공적 기관·관광 협회의 1차 정보를 확인하여 정확성을 보장합니다.",
          "SNS나 리뷰 등의 정보는 공식 발신 여부를 확인한 후 게재합니다.",
        ],
      },
      {
        heading: "사진·영상 취급",
        texts: [
          "게재하는 사진·영상은 모두 직접 촬영하거나 권리자로부터 사용 허락을 받은 소재만 사용합니다.",
          "가공이나 색조 보정은 현지 분위기나 실제 경관을 해치지 않는 범위로 한정합니다.",
          "피사체의 초상권과 저작권에 최대한 배려합니다.",
        ],
      },
      {
        heading: "정보 업데이트 시기",
        texts: [
          "이벤트 일정이나 시설 정보는 내용이 변경된 경우나 시즌마다 재검토합니다.",
          "새로운 야경 스폿과 기간 한정 라이트업은 확인되는 대로 신속히 반영합니다.",
          "오래된 정보가 남아 있는 경우에는 기사 내에 업데이트 날짜나 주의 사항을 명기합니다.",
        ],
      },
      {
        heading: "표현 방침",
        texts: [
          "과장이나 사실 오인을 피하고, 실제 경험에 기반한 리얼한 정보를 제공합니다.",
          "관광 초보자와 해외 여행자에게도 알기 쉬운 평이한 언어를 사용합니다.",
          "안전 면이나 예절에 관한 주의 사항도 적극적으로 기재합니다.",
        ],
      },
      {
        heading: "이용자 정보 제공",
        texts: [
          "독자분들의 사진 제공이나 경험담 공유는 환영하지만, 게재 시에는 사전에 내용을 확인하고 필요에 따라 편집·수정합니다.",
          "오류 지적이나 개선 요청은 문의 양식을 통해 언제든지 받고 있습니다.",
        ],
      },
      {
        heading: "법적·윤리적 배려",
        texts: [
          "출입 금지 구역이나 촬영 금지 구역의 소개는 하지 않습니다.",
          "주변 주민이나 시설 관계자에게 민폐가 될 수 있는 행동을 조장하는 표현도 피합니다.",
          "또한 개인정보 및 프라이버시 보호를 철저히 합니다.",
        ],
      },
    ],
    refSitesHeading: "기사 작성 시 참고 정보 사이트",
    refSitesIntro: "공개 중인 기사는 아래 정보원·공식 사이트를 참고하면서, 필자의 체험을 바탕으로 작성되었습니다.",
    refSites: [
      {
        category: "관광·종합 안내",
        sites: [
          { name: "東京都公式観光サイト「GO TOKYO」", href: "https://www.gotokyo.org/jp/", description: "도쿄도가 운영하는 관광 포털. 야경 스폿, 이벤트 정보, 교통 안내를 망라합니다. 다국어 대응으로 여행자에게도 편리합니다." },
          { name: "東京都観光財団（TCVB）", href: "https://tcvb.or.jp/", description: "도쿄의 관광 동향과 홍보 정보를 제공하는 공적 기관. 관광 통계와 정책 자료도 참조 가능합니다." },
        ],
      },
      {
        category: "행정·규칙",
        sites: [
          { name: "東京都庁 公式サイト", href: "https://www.metro.tokyo.lg.jp/", description: "조례와 시설 안내의 1차 정보. 도청 전망대 영업 정보와 이벤트 일정도 확인할 수 있습니다." },
        ],
      },
      {
        category: "주요 전망 스폿 (공식)",
        sites: [
          { name: "東京タワー 公式サイト", href: "https://www.tokyotower.co.jp/", description: "라이트업 일정, 전망대 이벤트, 티켓 정보를 게재한 공식 사이트." },
          { name: "東京スカイツリー 公式サイト", href: "https://www.tokyo-skytree.jp/", description: "점등 색상, 전망대 이벤트, 혼잡 상황 등을 안내하는 공식 사이트." },
        ],
      },
      {
        category: "야경이 보이는 호텔 검색",
        sites: [
          { name: "じゃらんnet", href: "https://www.jalan.net/", description: "야경이 보이는 객실이나 고층 호텔을 조건 지정해 검색 가능. 숙박 플랜, 리뷰, 공실 현황을 실시간으로 확인할 수 있습니다." },
          { name: "楽天トラベル", href: "https://travel.rakuten.co.jp/", description: "전국 호텔·여관을 예약할 수 있는 일본 최대급 예약 사이트. 야경 뷰 객실 조건이나 주변 스폿 정보도 풍부합니다." },
          { name: "Booking.com", href: "https://www.booking.com/", description: "해외 이용자에게도 인기인 숙박 예약 사이트. 사진과 리뷰를 통해 야경이 보이는 정도를 사전에 확인 가능합니다." },
        ],
      },
      {
        category: "야경이 보이는 레스토랑 검색",
        sites: [
          { name: "TableCheck", href: "https://www.tablecheck.com/ja/", description: "야경이 보이는 좌석을 조건으로 검색·예약 가능한 레스토랑 예약 플랫폼. 좌석 위치 지정이나 이벤트 시 예약에도 대응합니다." },
          { name: "一休.comレストラン", href: "https://restaurant.ikyu.com/", description: "고급 레스토랑 예약 사이트. 야경석이나 창가석을 지정할 수 있으며, 요리 내용이나 사진도 상세하게 확인 가능합니다." },
          { name: "ホットペッパーグルメ（東京 夜景）", href: "https://www.hotpepper.jp/SA11/G002/", description: "야경이 보이는 도쿄의 음식점을 장르별·지역별로 검색 가능. 쿠폰과 리뷰도 게재되어 있습니다." },
        ],
      },
      {
        category: "라이트업·인프라",
        sites: [
          { name: "東京都建設局", href: "https://www.kensetsu.metro.tokyo.lg.jp/", description: "교량이나 하천 시설의 라이트업 일정과 특별 연출 정보를 제공합니다." },
        ],
      },
      {
        category: "날씨·일몰·시정",
        sites: [
          { name: "気象庁", href: "https://www.jma.go.jp/", description: "날씨 예보, 운량, 시정 데이터를 제공합니다. 촬영일 선택에 참고가 됩니다." },
          { name: "国立天文台 暦計算室", href: "https://eco.mtk.nao.ac.jp/koyomi/", description: "일몰·박명 시각을 계산할 수 있어 야경 촬영의 최적 타이밍을 계획하는 데 유용합니다." },
        ],
      },
      {
        category: "교통·운행 정보",
        sites: [
          { name: "東京メトロ", href: "https://www.tokyometro.jp/", description: "노선도와 막차 정보를 제공합니다. 야경 관광 이동 계획에 편리합니다." },
          { name: "都営交通（都営地下鉄・都営バス）", href: "https://www.kotsu.metro.tokyo.jp/", description: "운행 상황과 시각표를 확인 가능합니다. 심야 이동에도 대응합니다." },
          { name: "JR東日本", href: "https://www.jreast.co.jp/", description: "수도권 광역의 교통 접근 및 운행 중단·임시 열차 정보를 제공합니다." },
        ],
      },
      {
        category: "예절·안전",
        sites: [
          { name: "警視庁", href: "https://www.keishicho.metro.tokyo.lg.jp/", description: "방범 정보와 드론 규제의 1차 정보. 안전하게 야경을 즐기기 위해 꼭 확인해야 합니다." },
        ],
      },
      {
        category: "촬영·허가",
        sites: [
          { name: "東京都公園協会", href: "https://www.ppo.metro.tokyo.lg.jp/", description: "공원에서의 촬영 규칙과 상업 이용 신청 방법을 안내합니다." },
          { name: "国土交通省", href: "https://www.mlit.go.jp/", description: "항만·하천 지역의 점용 허가 및 사용 규칙의 1차 정보를 제공합니다." },
        ],
      },
    ],
  },
  tw: {
    title: "內容製作政策",
    summary: "東京夜景導覽根據以下方針製作內容，讓讀者能安心地參考資訊。",
    description: "東京夜景導覽的內容製作政策。說明資訊準確性、照片處理、表達方針、法律考量等。",
    intro: "本站以正確且美麗地傳達東京夜景魅力為目的而運營。",
    sections: [
      {
        heading: "資訊的準確性與可靠性",
        texts: [
          "刊載資訊原則上透過實地採訪與自行拍攝收集。",
          "營業時間、點燈時間、入場費等資料，會確認設施官方發布或公共機關·觀光協會的第一手資訊，以保障正確性。",
          "SNS或評價等資訊，確認為官方發布後才予以刊載。",
        ],
      },
      {
        heading: "照片·影片處理",
        texts: [
          "刊載的照片·影片全部為自行拍攝或取得權利人使用許可的素材。",
          "加工或色調調整僅限於不損害現場氛圍及實際景觀的範圍。",
          "對被攝體的肖像權及著作權給予最大程度的尊重。",
        ],
      },
      {
        heading: "資訊更新時機",
        texts: [
          "活動日程或設施資訊在內容變更或每季時進行檢視。",
          "新的夜景景點和期間限定點燈，確認後會盡快反映。",
          "若有舊資訊殘留，會在文章內標明更新日期或注意事項。",
        ],
      },
      {
        heading: "表達方針",
        texts: [
          "避免誇張與事實錯誤，提供基於實際體驗的真實資訊。",
          "使用淺顯易懂的語言，方便觀光初學者及海外旅客理解。",
          "也會積極記載安全面及禮儀方面的注意事項。",
        ],
      },
      {
        heading: "使用者提供資訊",
        texts: [
          "歡迎讀者提供照片或分享體驗，但刊載前會先確認內容，視需要進行編輯·修正。",
          "指正錯誤或提出改善要求，可隨時透過詢問表單聯繫我們。",
        ],
      },
      {
        heading: "法律·倫理考量",
        texts: [
          "不介紹禁止進入區域或禁止拍攝區域。",
          "也避免可能助長對周邊居民或設施相關人員造成困擾行為的表達。",
          "並徹底保護個人資訊及隱私。",
        ],
      },
    ],
    refSitesHeading: "文章撰寫時的參考資訊網站",
    refSitesIntro: "公開的文章以下列資訊來源·官方網站為參考，並以作者自身的體驗為基礎撰寫。",
    refSites: [
      {
        category: "觀光·綜合資訊",
        sites: [
          { name: "東京都公式観光サイト「GO TOKYO」", href: "https://www.gotokyo.org/jp/", description: "東京都官方觀光入口網站，涵蓋夜景景點、活動資訊及交通方式，支援多語言，方便旅客使用。" },
          { name: "東京都観光財団（TCVB）", href: "https://tcvb.or.jp/", description: "提供東京觀光趨勢及宣傳資訊的公共機構，也可查閱觀光統計及政策資料。" },
        ],
      },
      {
        category: "行政·規範",
        sites: [
          { name: "東京都庁 公式サイト", href: "https://www.metro.tokyo.lg.jp/", description: "條例及設施資訊的第一手資料，也可確認都廳展望台營業資訊及活動預定。" },
        ],
      },
      {
        category: "主要展望景點（官方）",
        sites: [
          { name: "東京タワー 公式サイト", href: "https://www.tokyotower.co.jp/", description: "刊載點燈時程、展望台活動及票價資訊的官方網站。" },
          { name: "東京スカイツリー 公式サイト", href: "https://www.tokyo-skytree.jp/", description: "提供點燈顏色、展望台活動及人潮狀況等資訊的官方網站。" },
        ],
      },
      {
        category: "可眺望夜景的飯店搜尋",
        sites: [
          { name: "じゃらんnet", href: "https://www.jalan.net/", description: "可指定條件搜尋能眺望夜景的客房或高樓層飯店，即時確認住宿方案、評價及空房狀況。" },
          { name: "楽天トラベル", href: "https://travel.rakuten.co.jp/", description: "可預訂全國飯店·旅館的大型預訂網站，提供豐富的夜景客房條件及周邊景點資訊。" },
          { name: "Booking.com", href: "https://www.booking.com/", description: "深受海外旅客歡迎的住宿預訂網站，可透過照片和評價事先確認夜景景觀。" },
        ],
      },
      {
        category: "可眺望夜景的餐廳搜尋",
        sites: [
          { name: "TableCheck", href: "https://www.tablecheck.com/ja/", description: "可依夜景座位條件搜尋·預訂的餐廳預訂平台，支援指定座位位置及活動預訂。" },
          { name: "一休.comレストラン", href: "https://restaurant.ikyu.com/", description: "高級餐廳預訂網站，可指定夜景座位或窗邊座位，並詳細確認料理內容及照片。" },
          { name: "ホットペッパーグルメ（東京 夜景）", href: "https://www.hotpepper.jp/SA11/G002/", description: "可按類別·地區搜尋能眺望夜景的東京餐廳，附有優惠券及評價。" },
        ],
      },
      {
        category: "點燈·基礎設施",
        sites: [
          { name: "東京都建設局", href: "https://www.kensetsu.metro.tokyo.lg.jp/", description: "提供橋梁及河川設施的點燈日程及特別演出資訊。" },
        ],
      },
      {
        category: "天氣·日落·能見度",
        sites: [
          { name: "気象庁", href: "https://www.jma.go.jp/", description: "提供天氣預報、雲量及能見度數據，有助於選擇最佳拍攝日期與時段。" },
          { name: "国立天文台 暦計算室", href: "https://eco.mtk.nao.ac.jp/koyomi/", description: "可計算日落及薄明時刻，規劃夜景攝影的最佳時機。" },
        ],
      },
      {
        category: "交通·運行資訊",
        sites: [
          { name: "東京メトロ", href: "https://www.tokyometro.jp/", description: "提供地鐵路線圖及末班車資訊，方便規劃夜景觀光的移動路線。" },
          { name: "都営交通（都営地下鉄・都営バス）", href: "https://www.kotsu.metro.tokyo.jp/", description: "可確認都營地鐵及都營巴士的運行狀況及時刻表，也適用於深夜出行。" },
          { name: "JR東日本", href: "https://www.jreast.co.jp/", description: "提供首都圈廣域交通資訊及服務中斷、臨時列車資訊。" },
        ],
      },
      {
        category: "禮儀·安全",
        sites: [
          { name: "警視庁", href: "https://www.keishicho.metro.tokyo.lg.jp/", description: "防犯資訊及無人機規定的第一手資料，安全欣賞夜景的必確認資訊。" },
        ],
      },
      {
        category: "攝影·許可申請",
        sites: [
          { name: "東京都公園協会", href: "https://www.ppo.metro.tokyo.lg.jp/", description: "介紹東京公園內的拍攝規則及商業使用申請方式。" },
          { name: "国土交通省", href: "https://www.mlit.go.jp/", description: "提供港灣·河川地區的占用許可及使用規則的第一手資料。" },
        ],
      },
    ],
  },
  cn: {
    title: "内容制作政策",
    summary: "东京夜景导航根据以下方针制作内容，让读者能安心地参考信息。",
    description: "东京夜景导航的内容制作政策。说明信息准确性、照片处理、表达方针、法律考量等。",
    intro: "本站以准确且美丽地传达东京夜景魅力为目的而运营。",
    sections: [
      {
        heading: "信息的准确性与可靠性",
        texts: [
          "刊载信息原则上通过实地采访与自行拍摄收集。",
          "营业时间、亮灯时间、入场费等数据，会确认设施官方发布或公共机关·观光协会的第一手信息，以保障正确性。",
          "SNS或评价等信息，确认为官方发布后才予以刊载。",
        ],
      },
      {
        heading: "照片·视频处理",
        texts: [
          "刊载的照片·视频全部为自行拍摄或取得权利人使用许可的素材。",
          "加工或色调调整仅限于不损害现场氛围及实际景观的范围。",
          "对被摄体的肖像权及著作权给予最大程度的尊重。",
        ],
      },
      {
        heading: "信息更新时间",
        texts: [
          "活动日程或设施信息在内容变更或每季时进行审视。",
          "新的夜景景点和期间限定点灯，确认后会尽快反映。",
          "若有旧信息残留，会在文章内标明更新日期或注意事项。",
        ],
      },
      {
        heading: "表达方针",
        texts: [
          "避免夸张与事实错误，提供基于实际体验的真实信息。",
          "使用浅显易懂的语言，方便观光初学者及海外旅客理解。",
          "也会积极记载安全面及礼仪方面的注意事项。",
        ],
      },
      {
        heading: "用户提供信息",
        texts: [
          "欢迎读者提供照片或分享体验，但刊载前会先确认内容，视需要进行编辑·修正。",
          "指正错误或提出改善要求，可随时通过咨询表单联系我们。",
        ],
      },
      {
        heading: "法律·伦理考量",
        texts: [
          "不介绍禁止进入区域或禁止拍摄区域。",
          "也避免可能助长对周边居民或设施相关人员造成困扰行为的表达。",
          "并彻底保护个人信息及隐私。",
        ],
      },
    ],
    refSitesHeading: "文章撰写时的参考信息网站",
    refSitesIntro: "公开的文章以下列信息来源·官方网站为参考，并以作者自身的体验为基础撰写。",
    refSites: [
      {
        category: "旅游·综合信息",
        sites: [
          { name: "東京都公式観光サイト「GO TOKYO」", href: "https://www.gotokyo.org/jp/", description: "东京都官方旅游门户网站，涵盖夜景景点、活动信息及交通方式，支持多语言，方便旅客使用。" },
          { name: "東京都観光財団（TCVB）", href: "https://tcvb.or.jp/", description: "提供东京旅游动态及宣传信息的公共机构，也可查阅旅游统计及政策资料。" },
        ],
      },
      {
        category: "政府·规定",
        sites: [
          { name: "東京都庁 公式サイト", href: "https://www.metro.tokyo.lg.jp/", description: "条例及设施信息的第一手资料，也可确认都厅展望台营业信息及活动安排。" },
        ],
      },
      {
        category: "主要观景地点（官方）",
        sites: [
          { name: "東京タワー 公式サイト", href: "https://www.tokyotower.co.jp/", description: "刊载点灯时程、展望台活动及票价信息的官方网站。" },
          { name: "東京スカイツリー 公式サイト", href: "https://www.tokyo-skytree.jp/", description: "提供点灯颜色、展望台活动及人流状况等信息的官方网站。" },
        ],
      },
      {
        category: "可眺望夜景的酒店搜索",
        sites: [
          { name: "じゃらんnet", href: "https://www.jalan.net/", description: "可指定条件搜索能眺望夜景的客房或高层酒店，实时确认住宿方案、评价及空房状况。" },
          { name: "楽天トラベル", href: "https://travel.rakuten.co.jp/", description: "可预订全国酒店·旅馆的大型预订网站，提供丰富的夜景客房条件及周边景点信息。" },
          { name: "Booking.com", href: "https://www.booking.com/", description: "深受海外旅客欢迎的住宿预订网站，可通过照片和评价事先确认夜景景观。" },
        ],
      },
      {
        category: "可眺望夜景的餐厅搜索",
        sites: [
          { name: "TableCheck", href: "https://www.tablecheck.com/ja/", description: "可按夜景座位条件搜索·预订的餐厅预订平台，支持指定座位位置及活动预订。" },
          { name: "一休.comレストラン", href: "https://restaurant.ikyu.com/", description: "高级餐厅预订网站，可指定夜景座位或窗边座位，并详细确认料理内容及照片。" },
          { name: "ホットペッパーグルメ（東京 夜景）", href: "https://www.hotpepper.jp/SA11/G002/", description: "可按类别·地区搜索能眺望夜景的东京餐厅，附有优惠券及评价。" },
        ],
      },
      {
        category: "点灯·基础设施",
        sites: [
          { name: "東京都建設局", href: "https://www.kensetsu.metro.tokyo.lg.jp/", description: "提供桥梁及河川设施的点灯日程及特别演出信息。" },
        ],
      },
      {
        category: "天气·日落·能见度",
        sites: [
          { name: "気象庁", href: "https://www.jma.go.jp/", description: "提供天气预报、云量及能见度数据，有助于选择最佳拍摄日期与时段。" },
          { name: "国立天文台 暦計算室", href: "https://eco.mtk.nao.ac.jp/koyomi/", description: "可计算日落及薄明时刻，规划夜景摄影的最佳时机。" },
        ],
      },
      {
        category: "交通·运行信息",
        sites: [
          { name: "東京メトロ", href: "https://www.tokyometro.jp/", description: "提供地铁路线图及末班车信息，方便规划夜景观光的移动路线。" },
          { name: "都営交通（都営地下鉄・都営バス）", href: "https://www.kotsu.metro.tokyo.jp/", description: "可确认都营地铁及都营巴士的运行状况及时刻表，也适用于深夜出行。" },
          { name: "JR東日本", href: "https://www.jreast.co.jp/", description: "提供首都圈广域交通信息及服务中断、临时列车信息。" },
        ],
      },
      {
        category: "礼仪·安全",
        sites: [
          { name: "警視庁", href: "https://www.keishicho.metro.tokyo.lg.jp/", description: "防犯信息及无人机规定的第一手资料，安全欣赏夜景的必确认信息。" },
        ],
      },
      {
        category: "摄影·许可申请",
        sites: [
          { name: "東京都公園協会", href: "https://www.ppo.metro.tokyo.lg.jp/", description: "介绍东京公园内的拍摄规则及商业使用申请方式。" },
          { name: "国土交通省", href: "https://www.mlit.go.jp/", description: "提供港湾·河川地区的占用许可及使用规则的第一手资料。" },
        ],
      },
    ],
  },
};
