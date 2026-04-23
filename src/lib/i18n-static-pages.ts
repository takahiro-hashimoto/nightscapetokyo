/* ========================================
   Translations for static pages
   (contact, guidelines, privacy-policy, caution, links, sitemap-html)
   ======================================== */

export type StaticPageLabels = {
  title: string;
  summary: string;
  description: string; // meta description
};

// ── Contact ──
export const CONTACT_LABELS: Record<string, Omit<StaticPageLabels, "summary"> & { summary: string[] }> = {
  ja: {
    title: "お問い合わせ",
    summary: [
      "写真・映像の購入や撮影のご依頼等のお問い合わせは下記のフォームからお願いいたします。",
      "基本的に24時間以内にお返事させていただきます！",
    ],
    description: "東京夜景ナビへのお問い合わせページです。写真・映像の購入や撮影のご依頼等はこちらのフォームからお願いいたします。",
  },
  en: {
    title: "Contact",
    summary: [
      "For inquiries about photo/video purchases or shooting requests, please use the form below.",
      "We will typically respond within 24 hours. Feel free to reach out!",
    ],
    description: "Contact page for Tokyo Night View Guide. Please use the form below for photo/video purchases or shooting requests.",
  },
  ko: {
    title: "문의하기",
    summary: [
      "사진·영상 구매나 촬영 의뢰 등의 문의는 아래 양식을 이용해 주세요.",
      "기본적으로 24시간 이내에 답변 드리겠습니다. 편하게 문의해 주세요!",
    ],
    description: "도쿄 야경 네비 문의 페이지입니다. 사진·영상 구매나 촬영 의뢰는 양식을 이용해 주세요.",
  },
  tw: {
    title: "聯絡我們",
    summary: [
      "如需購買照片·影片或委託拍攝，請透過下方表單聯絡我們。",
      "我們通常會在24小時內回覆，歡迎隨時聯絡！",
    ],
    description: "東京夜景導覽聯絡頁面。如需購買照片·影片或委託拍攝，請使用表單聯絡。",
  },
  cn: {
    title: "联系我们",
    summary: [
      "如需购买照片·视频或委托拍摄，请通过下方表单联系我们。",
      "我们通常会在24小时内回复，欢迎随时联系！",
    ],
    description: "东京夜景导航联系页面。如需购买照片·视频或委托拍摄，请使用表单联系。",
  },
};

// ── Guidelines ──
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

// ── Privacy Policy ──
type PrivacySection = { heading: string; texts: string[]; links?: { text: string; href: string }[] };

export const PRIVACY_LABELS: Record<string, StaticPageLabels & { sections: PrivacySection[] }> = {
  ja: {
    title: "プライバシーポリシー",
    summary: "東京夜景ナビにおけるプライバシーポリシー・免責事項を次の通り記載します。",
    description: "東京夜景ナビのプライバシーポリシーです。",
    sections: [],
  },
  en: {
    title: "Privacy Policy",
    summary: "The privacy policy and disclaimers for Tokyo Night View Guide are described below.",
    description: "Privacy policy for Tokyo Night View Guide. Covers personal information handling, cookies, advertising, and analytics.",
    sections: [
      {
        heading: "Purpose of Personal Information Use",
        texts: [
          "This site uses collected user information for the following purposes: web service provision, content and service quality improvement, traffic and behavioral measurement, ad delivery and performance measurement, site-related notifications, responding to inquiries, and handling violations.",
          "Collected user information is used solely for the above purposes and will not be used for any purpose beyond the original intent at the time of collection.",
        ],
      },
      {
        heading: "Third-Party Disclosure",
        texts: [
          "Personal information collected by this site will not be disclosed to third parties without user consent, except in the following cases: when providing user information to an external service provider for integration or authentication purposes; when cooperating with a national or local government agency carrying out statutory duties; or when otherwise permitted by law.",
        ],
      },
      {
        heading: "Use of Cookies",
        texts: [
          "This site uses cookies for ad delivery and access analysis purposes.",
          "Cookies are used to identify browsers but cannot identify specific individuals, so anonymity is maintained.",
          "If you do not want cookies to be used, you can disable them in your browser settings.",
        ],
      },
      {
        heading: "Advertising",
        texts: [
          "This site uses third-party advertising services (Google AdSense, A8.net). Cookies are used to display ads relevant to your interests.",
          "While cookies allow this site to identify your computer, they cannot identify you personally.",
        ],
        links: [
          { text: "Advertising – Policies and Terms – Google", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "Analytics",
        texts: [
          "This site uses Google Analytics to collect, record, and analyze access data via cookies.",
          "Information collected by Google Analytics does not include personally identifiable information, and is managed under Google's Privacy Policy.",
          "You can opt out of data collection by disabling cookies in your browser settings.",
        ],
        links: [
          { text: "Google Privacy Policy", href: "https://policies.google.com/privacy?hl=en" },
          { text: "How Google uses data from sites that use Google services", href: "https://policies.google.com/technologies/partner-sites?hl=en" },
        ],
      },
      {
        heading: "Disclaimer",
        texts: [
          "This site accepts no responsibility whatsoever for any damages arising from its published content.",
          "While we make every effort to provide accurate and up-to-date information, we cannot guarantee the accuracy or safety of all content.",
          "We also accept no responsibility for the information or services provided by linked external sites.",
        ],
      },
      {
        heading: "Copyright",
        texts: [
          "The copyright for all text and images published on this site belongs to the operator.",
          "Unauthorized reproduction beyond the legally permitted scope of quotation is prohibited.",
        ],
      },
      {
        heading: "Policy Changes",
        texts: [
          "This site complies with applicable Japanese laws regarding personal information and will revise this privacy policy as needed.",
          "The latest version of this policy is always published on this page.",
          "Established: January 1, 2023 — Tokyo Night View Guide, Operator: Takahiro",
        ],
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    summary: "도쿄 야경 네비의 개인정보 처리방침 및 면책사항을 다음과 같이 기재합니다.",
    description: "도쿄 야경 네비의 개인정보 처리방침입니다. 개인정보 이용 목적, 쿠키·광고·접속 분석 도구의 취급, 면책사항에 대해 기재합니다.",
    sections: [
      {
        heading: "개인정보 이용 목적",
        texts: [
          "본 사이트는 수집한 이용자 정보를 이하에 정하는 목적을 위해 이용합니다: 웹 서비스 제공, 콘텐츠·서비스 품질 개선, 트래픽 측정 및 행동 측정, 광고 배신 및 효과 측정, 본 사이트에 관한 안내, 문의 대응, 위반 사항 대응.",
          "취득한 이용자 정보는 상기 목적에만 이용하며, 정보를 제공받았을 때의 목적 이외에는 이용하지 않습니다.",
        ],
      },
      {
        heading: "개인정보 제3자 제공",
        texts: [
          "본 사이트가 취득한 이용자 정보 중 개인정보는, 외부 서비스 연계 또는 인증을 위해 해당 외부 서비스 운영 회사에 이용자 정보를 제공하는 경우, 국가 기관 또는 지방 공공 단체의 위탁을 받아 법령에 정한 사무를 수행하는 것에 협력이 필요한 경우, 그 외 법령에서 인정되는 경우를 제외하고, 이용자의 동의 없이 제3자에게 개시하지 않습니다.",
        ],
      },
      {
        heading: "쿠키 사용",
        texts: [
          "본 사이트에서는 광고 배신과 접속 분석을 위해 쿠키를 사용하고 있습니다.",
          "쿠키에 의해 브라우저를 식별하고 있지만, 특정 개인을 식별할 수 없는 상태로 익명성이 유지됩니다.",
          "쿠키 사용을 원하지 않는 경우, 브라우저에서 쿠키를 비활성화할 수 있습니다.",
        ],
      },
      {
        heading: "광고",
        texts: [
          "본 사이트에서는 제3자 배신 광고 서비스(Google 애드센스, A8.net)를 이용하며, 이용자의 관심에 맞는 광고를 표시하기 위해 쿠키를 사용하고 있습니다.",
          "쿠키를 사용함으로써 본 사이트는 이용자의 컴퓨터를 식별할 수 있게 되지만, 이용자 개인을 특정할 수 있는 것은 아닙니다.",
        ],
        links: [
          { text: "광고 – 정책과 약관 – Google", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "접속 분석",
        texts: [
          "본 사이트에서는 접속 분석 도구 Google 애널리틱스를 사용하여 쿠키 정보를 통해 접속을 수집·기록·분석하고 있습니다.",
          "Google 애널리틱스의 정보에는 특정 개인을 식별하는 정보가 포함되지 않으며, Google사의 개인정보 처리방침에 의해 관리됩니다.",
          "접속 정보 수집은 쿠키를 비활성화하여 거부할 수 있습니다.",
        ],
        links: [
          { text: "Google 개인정보 처리방침", href: "https://policies.google.com/privacy?hl=ko" },
          { text: "Google의 정보 수집 방식에 대하여", href: "https://policies.google.com/technologies/partner-sites?hl=ko" },
        ],
      },
      {
        heading: "면책사항",
        texts: [
          "본 사이트는 게재 내용으로 인해 발생한 손해에 대한 일체의 책임을 지지 않습니다.",
          "각 콘텐츠에서는 가능한 한 정확한 정보 제공을 위해 노력하고 있으나, 정확성이나 안전성을 보장하는 것은 아닙니다.",
          "또한 링크처의 다른 사이트에서 제공되는 정보·서비스에 대해서도 책임을 지지 않으므로 양해 부탁드립니다.",
        ],
      },
      {
        heading: "저작권",
        texts: [
          "본 사이트에 게재되어 있는 문장·이미지의 저작권은 운영자에게 귀속됩니다.",
          "법적으로 인정된 인용 범위를 초과하여 무단으로 전재하는 것을 금지합니다.",
        ],
      },
      {
        heading: "개인정보 처리방침 변경",
        texts: [
          "본 사이트는 개인정보에 관해 적용되는 일본 법령을 준수하며, 본 개인정보 처리방침의 내용을 적절히 검토하여 개선에 노력합니다.",
          "수정된 최신 개인정보 처리방침은 항상 본 페이지에서 공개됩니다.",
          "제정: 2023년 1월 1일 — 도쿄 야경 네비, 운영 책임자: 타카히로",
        ],
      },
    ],
  },
  tw: {
    title: "隱私權政策",
    summary: "東京夜景導覽的隱私權政策及免責聲明如下。",
    description: "東京夜景導覽的隱私權政策。個人資訊使用目的、Cookie·廣告·存取分析工具的處理及免責聲明。",
    sections: [
      {
        heading: "個人資訊使用目的",
        texts: [
          "本網站將收集的使用者資訊用於以下目的：網站服務提供、內容·服務品質改善、流量測量及行為測量、廣告投放及效果測量、本網站相關通知、回覆諮詢、處理違規事項。",
          "取得的使用者資訊僅用於上述目的，不會用於收集資訊時目的以外的用途。",
        ],
      },
      {
        heading: "個人資訊第三方提供",
        texts: [
          "本網站取得的使用者資訊中的個人資訊，除以下情況外，不會在未取得使用者同意的情況下向第三方揭露：為與外部服務連攜或認證而向該外部服務營運公司提供使用者資訊；配合國家機關或地方公共團體及其委託者履行法令規定事務需要協助；或其他法令允許的情況。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本網站為廣告投放及存取分析使用Cookie。",
          "Cookie用於識別瀏覽器，但無法識別特定個人，匿名性得以維護。",
          "若不希望使用Cookie，可在瀏覽器設定中停用。",
        ],
      },
      {
        heading: "廣告",
        texts: [
          "本網站使用第三方廣告服務（Google AdSense、A8.net），並使用Cookie以根據使用者興趣顯示廣告。",
          "雖然Cookie可使本網站識別您的電腦，但無法識別您個人。",
        ],
        links: [
          { text: "廣告 – Google政策與條款", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "存取分析",
        texts: [
          "本網站使用存取分析工具Google Analytics，透過Cookie資訊收集、記錄及分析存取情況。",
          "Google Analytics的資訊不包含可識別特定個人的資訊，由Google的隱私權政策管理。",
          "您可透過停用Cookie來拒絕存取資訊的收集。",
        ],
        links: [
          { text: "Google隱私權政策", href: "https://policies.google.com/privacy?hl=zh-TW" },
          { text: "關於Google的資訊收集方式", href: "https://policies.google.com/technologies/partner-sites?hl=zh-TW" },
        ],
      },
      {
        heading: "免責聲明",
        texts: [
          "本網站對因刊載內容產生的任何損害概不負責。",
          "各項內容雖盡力提供準確資訊，但不保證其正確性或安全性。",
          "對於連結至外部網站所提供的資訊·服務，本網站亦不承擔責任，請事先知悉。",
        ],
      },
      {
        heading: "著作權",
        texts: [
          "本網站刊載的文章·圖片著作權歸營運者所有。",
          "禁止超出法律允許的引用範圍進行未授權轉載。",
        ],
      },
      {
        heading: "隱私權政策變更",
        texts: [
          "本網站遵守適用於個人資訊的日本法令，並將適時審視本隱私權政策的內容，致力於改善。",
          "修訂後的最新隱私權政策將始終在本頁面公開。",
          "制定：2023年1月1日 — 東京夜景導覽，營運負責人：Takahiro",
        ],
      },
    ],
  },
  cn: {
    title: "隐私政策",
    summary: "东京夜景导航的隐私政策及免责声明如下。",
    description: "东京夜景导航的隐私政策。个人信息使用目的、Cookie·广告·访问分析工具的处理及免责声明。",
    sections: [
      {
        heading: "个人信息使用目的",
        texts: [
          "本网站将收集的用户信息用于以下目的：网站服务提供、内容·服务质量改善、流量测量及行为测量、广告投放及效果测量、本网站相关通知、回复咨询、处理违规事项。",
          "取得的用户信息仅用于上述目的，不会用于收集信息时目的以外的用途。",
        ],
      },
      {
        heading: "个人信息第三方提供",
        texts: [
          "本网站取得的用户信息中的个人信息，除以下情况外，不会在未取得用户同意的情况下向第三方披露：为与外部服务联携或认证而向该外部服务运营公司提供用户信息；配合国家机关或地方公共团体及其受托者履行法令规定事务需要协助；或其他法令允许的情况。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本网站为广告投放及访问分析使用Cookie。",
          "Cookie用于识别浏览器，但无法识别特定个人，匿名性得以维护。",
          "若不希望使用Cookie，可在浏览器设置中禁用。",
        ],
      },
      {
        heading: "广告",
        texts: [
          "本网站使用第三方广告服务（Google AdSense、A8.net），并使用Cookie以根据用户兴趣显示广告。",
          "虽然Cookie可使本网站识别您的电脑，但无法识别您个人。",
        ],
        links: [
          { text: "广告 – Google政策与条款", href: "https://policies.google.com/technologies/ads?gl=jp" },
        ],
      },
      {
        heading: "访问分析",
        texts: [
          "本网站使用访问分析工具Google Analytics，通过Cookie信息收集、记录及分析访问情况。",
          "Google Analytics的信息不包含可识别特定个人的信息，由Google的隐私政策管理。",
          "您可通过禁用Cookie来拒绝访问信息的收集。",
        ],
        links: [
          { text: "Google隐私政策", href: "https://policies.google.com/privacy?hl=zh-CN" },
          { text: "关于Google的信息收集方式", href: "https://policies.google.com/technologies/partner-sites?hl=zh-CN" },
        ],
      },
      {
        heading: "免责声明",
        texts: [
          "本网站对因刊载内容产生的任何损害概不负责。",
          "各项内容虽尽力提供准确信息，但不保证其正确性或安全性。",
          "对于链接至外部网站所提供的信息·服务，本网站亦不承担责任，请事先知悉。",
        ],
      },
      {
        heading: "著作权",
        texts: [
          "本网站刊载的文章·图片著作权归运营者所有。",
          "禁止超出法律允许的引用范围进行未授权转载。",
        ],
      },
      {
        heading: "政策变更",
        texts: [
          "本网站遵守适用于个人信息的日本法令，并将适时审视本隐私政策的内容，致力于改善。",
          "修订后的最新隐私政策将始终在本页面公开。",
          "制定：2023年1月1日 — 东京夜景导航，运营负责人：Takahiro",
        ],
      },
    ],
  },
};

// ── Caution (Terms of Use) ──
type CautionSection = { heading: string; texts: string[]; contactLink?: string };

export const CAUTION_LABELS: Record<string, StaticPageLabels & { sections: CautionSection[] }> = {
  ja: {
    title: "利用規約",
    summary: "東京夜景ナビをご利用いただくにあたり、著作権・免責事項・Cookie・リンク等に関するルールを記載しています。",
    description: "東京夜景ナビの利用規約です。",
    sections: [],
  },
  en: {
    title: "Terms of Use",
    summary: "Rules regarding copyright, disclaimers, cookies, advertising, analytics, and links for using Tokyo Night View Guide.",
    description: "Terms of use for Tokyo Night View Guide. Covers copyright, disclaimers, cookies, advertising, analytics, and links.",
    sections: [
      {
        heading: "Copyright",
        texts: [
          "All photos, images, and text published on Tokyo Night View Guide are protected by copyright. Unauthorized reproduction, copying, or modification is strictly prohibited.",
          "Photos on this site are not free stock materials. In principle, commercial use requires a fee. Please contact us via the inquiry form for photo purchases or commercial licensing inquiries.",
          "Please do not redistribute the free smartphone wallpapers available on this site on other websites or social media.",
        ],
        contactLink: "Contact / Inquiry Form",
      },
      {
        heading: "Disclaimer",
        texts: [
          "While we make every effort to provide the latest and most accurate information about night view spots and other content, we strongly recommend verifying business hours, admission fees, and other critical details on official websites.",
          "We accept no responsibility for any accidents, troubles, or damages arising from information published on this site.",
        ],
      },
      {
        heading: "Use of Cookies",
        texts: [
          "This site uses cookies for ad delivery and access analysis purposes.",
          "Cookies are used to identify browsers but cannot identify specific individuals, so anonymity is maintained.",
          "If you do not want cookies to be used, you can disable them in your browser settings.",
        ],
      },
      {
        heading: "Advertising",
        texts: [
          "This site uses third-party advertising services (Google AdSense, A8.net) that use cookies to display ads relevant to users' interests.",
          "While cookies allow this site to identify your computer, they cannot identify you personally.",
          "For details on disabling cookies and Google AdSense, please refer to 'Advertising – Policies and Terms – Google' (https://policies.google.com/technologies/ads).",
        ],
      },
      {
        heading: "Analytics",
        texts: [
          "This site uses Google Analytics to collect, record, and analyze access data via cookies.",
          "The information collected by Google Analytics does not include personally identifiable information, and is managed under Google's privacy policy.",
          "You can opt out of data collection by disabling cookies in your browser settings. For more information on Google's data collection practices, please refer to Google's policy pages.",
        ],
      },
      {
        heading: "Links",
        texts: [
          "All pages on this site are link-free, but please refrain from displaying them within framesets.",
          "URLs for pages other than the top page may change without notice. Please be aware of this in advance.",
        ],
      },
    ],
  },
  ko: {
    title: "이용약관",
    summary: "도쿄 야경 네비 이용 시 저작권·면책사항·쿠키·광고·접속 분석·링크 등에 관한 규칙을 기재합니다.",
    description: "도쿄 야경 네비의 이용약관입니다. 저작권·면책사항·쿠키·광고·접속 분석·링크에 관한 규칙을 기재합니다.",
    sections: [
      {
        heading: "저작권",
        texts: [
          "도쿄 야경 네비(이하 본 사이트)에 게재된 사진·이미지·문장 등 모든 것에 저작권이 있습니다. 무단 전재·복제·가공을 일체 금지합니다.",
          "본 사이트에 게재된 사진은 프리 소재가 아닙니다. 사진 이용은 원칙적으로 유료입니다. 사진의 상업적 이용·구매 등에 관해서는 문의 양식을 통해 연락해 주세요.",
          "무료 배포 중인 스마트폰 배경화면을 웹사이트나 SNS에서 공개하거나 배포하는 것은 삼가해 주세요.",
        ],
        contactLink: "문의 양식",
      },
      {
        heading: "면책사항",
        texts: [
          "본 사이트에 게재된 야경 스폿 등의 정보는 가능한 한 최신·정확한 정보를 게재하도록 노력하고 있으나, 영업시간·요금 등의 정확한 정보는 공식 사이트 등에서 확인하실 것을 권장합니다.",
          "만약 본 사이트 정보로 인해 사고·트러블 등이 발생하더라도 일체의 책임을 지지 않으므로 미리 양해해 주시기 바랍니다.",
        ],
      },
      {
        heading: "쿠키 사용",
        texts: [
          "본 사이트에서는 광고 배신과 접속 분석을 위해 쿠키를 사용하고 있습니다.",
          "쿠키에 의해 브라우저를 식별하고 있지만, 특정 개인을 식별할 수 없는 상태로 익명성이 유지됩니다.",
          "쿠키 사용을 원하지 않는 경우, 브라우저에서 쿠키를 비활성화할 수 있습니다.",
        ],
      },
      {
        heading: "광고",
        texts: [
          "본 사이트에서는 제3자 배신 광고 서비스(Google 애드센스, A8.net)를 이용하며, 이용자의 관심에 맞는 광고를 표시하기 위해 쿠키를 사용하고 있습니다.",
          "쿠키를 사용함으로써 본 사이트는 이용자의 컴퓨터를 식별할 수 있게 되지만, 이용자 개인을 특정할 수는 없습니다.",
          "쿠키 비활성화 방법과 Google 애드센스에 관한 자세한 내용은 「광고 – 정책과 약관 – Google」(https://policies.google.com/technologies/ads)을 확인해 주세요.",
        ],
      },
      {
        heading: "접속 분석",
        texts: [
          "본 사이트에서는 접속 분석 도구 Google 애널리틱스를 사용하여 쿠키 정보를 통해 접속을 수집·기록·분석하고 있습니다.",
          "Google 애널리틱스의 정보에는 특정 개인을 식별하는 정보가 포함되지 않으며, Google사의 개인정보 처리방침에 의해 관리됩니다.",
          "접속 정보 수집은 쿠키를 비활성화하여 거부할 수 있습니다. Google사의 정보 수집 방식에 대해서는 Google사의 정책 페이지를 참조해 주세요.",
        ],
      },
      {
        heading: "링크",
        texts: [
          "본 사이트는 기본적으로 모든 페이지가 링크 프리입니다. 단, 프레임셋 내 표시는 삼가해 주세요.",
          "톱 페이지 이외의 URL은 사이트 운영 사정상 예고 없이 변경될 수 있습니다. 미리 양해해 주시기 바랍니다.",
        ],
      },
    ],
  },
  tw: {
    title: "使用條款",
    summary: "使用東京夜景導覽時，關於著作權·免責聲明·Cookie·廣告·存取分析·連結等規則。",
    description: "東京夜景導覽的使用條款。著作權·免責聲明·Cookie·廣告·存取分析·連結相關規則。",
    sections: [
      {
        heading: "著作權",
        texts: [
          "東京夜景導覽（以下稱本網站）刊載的照片、圖片、文章等所有內容均有著作權。禁止未經授權的轉載、複製及加工。",
          "本網站刊載的照片非免費素材。照片使用原則上為付費。如需商業使用·購買照片，請透過詢問表單聯繫我們。",
          "請勿在網站或社群媒體上公開或散布本網站提供的免費手機桌布。",
        ],
        contactLink: "聯絡表單",
      },
      {
        heading: "免責聲明",
        texts: [
          "本網站對夜景景點等刊載資訊盡力提供最新·準確的內容，但建議您在官方網站等確認營業時間·費用等的正確資訊。",
          "萬一因本網站資訊發生事故·糾紛等，本網站概不負責，敬請事先知悉。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本網站為廣告投放及存取分析使用Cookie。",
          "Cookie用於識別瀏覽器，但無法識別特定個人，匿名性得以維護。",
          "若不希望使用Cookie，可在瀏覽器設定中停用。",
        ],
      },
      {
        heading: "廣告",
        texts: [
          "本網站使用第三方廣告服務（Google AdSense、A8.net），並使用Cookie以根據使用者興趣顯示商品及服務的廣告。",
          "雖然Cookie可使本網站識別您的電腦，但無法識別您個人。",
          "停用Cookie的方法及Google AdSense的詳細資訊，請參閱「廣告 – Google政策與條款」（https://policies.google.com/technologies/ads）。",
        ],
      },
      {
        heading: "存取分析",
        texts: [
          "本網站使用存取分析工具Google Analytics，透過Cookie資訊收集、記錄及分析存取情況。",
          "Google Analytics的資訊不包含可識別特定個人的資訊，由Google的隱私權政策管理。",
          "您可透過停用Cookie來拒絕存取資訊的收集。關於Google的資訊收集方式，請參閱Google的政策頁面。",
        ],
      },
      {
        heading: "連結",
        texts: [
          "本網站基本上所有頁面均可自由連結，但請勿在框架集內顯示。",
          "頂層頁面以外的URL可能因網站運營需要而不另行通知地變更，敬請事先知悉。",
        ],
      },
    ],
  },
  cn: {
    title: "使用条款",
    summary: "使用东京夜景导航时，关于著作权·免责声明·Cookie·广告·访问分析·链接等规则。",
    description: "东京夜景导航的使用条款。著作权·免责声明·Cookie·广告·访问分析·链接相关规则。",
    sections: [
      {
        heading: "著作权",
        texts: [
          "东京夜景导航（以下称本网站）刊载的照片、图片、文章等所有内容均受著作权保护。禁止未经授权的转载、复制及加工。",
          "本网站刊载的照片非免费素材。照片使用原则上为付费。如需商业使用·购买照片，请通过咨询表单联系我们。",
          "请勿在网站或社交媒体上公开或散布本网站提供的免费手机壁纸。",
        ],
        contactLink: "联系表单",
      },
      {
        heading: "免责声明",
        texts: [
          "本网站对夜景景点等刊载信息尽力提供最新·准确的内容，但建议您在官方网站等确认营业时间·费用等的正确信息。",
          "万一因本网站信息发生事故·纠纷等，本网站概不负责，敬请事先知悉。",
        ],
      },
      {
        heading: "Cookie使用",
        texts: [
          "本网站为广告投放及访问分析使用Cookie。",
          "Cookie用于识别浏览器，但无法识别特定个人，匿名性得以维护。",
          "若不希望使用Cookie，可在浏览器设置中禁用。",
        ],
      },
      {
        heading: "广告",
        texts: [
          "本网站使用第三方广告服务（Google AdSense、A8.net），并使用Cookie以根据用户兴趣显示商品及服务的广告。",
          "虽然Cookie可使本网站识别您的电脑，但无法识别您个人。",
          "禁用Cookie的方法及Google AdSense的详细信息，请参阅「广告 – Google政策与条款」（https://policies.google.com/technologies/ads）。",
        ],
      },
      {
        heading: "访问分析",
        texts: [
          "本网站使用访问分析工具Google Analytics，通过Cookie信息收集、记录及分析访问情况。",
          "Google Analytics的信息不包含可识别特定个人的信息，由Google的隐私政策管理。",
          "您可通过禁用Cookie来拒绝访问信息的收集。关于Google的信息收集方式，请参阅Google的政策页面。",
        ],
      },
      {
        heading: "链接",
        texts: [
          "本网站基本上所有页面均可自由链接，但请勿在框架集内显示。",
          "顶层页面以外的URL可能因网站运营需要而不另行通知地变更，敬请事先知悉。",
        ],
      },
    ],
  },
};

// ── Links ──
export const LINKS_LABELS: Record<string, StaticPageLabels & { thSite: string; thDesc: string }> = {
  ja: { title: "リンク集", summary: "当サイトと相互リンクしていただいているサイトや、おすすめのサイトをご紹介します。", description: "東京夜景ナビのリンク集です。", thSite: "サイト名", thDesc: "概要" },
  en: { title: "Links", summary: "Sites that have exchanged links with us, and other recommended sites.", description: "Link collection for Tokyo Night View Guide.", thSite: "Site Name", thDesc: "Description" },
  ko: { title: "링크 모음", summary: "상호 링크 사이트 및 추천 사이트를 소개합니다.", description: "도쿄 야경 네비 링크 모음입니다.", thSite: "사이트명", thDesc: "개요" },
  tw: { title: "連結集", summary: "與本站互相連結的網站及推薦網站。", description: "東京夜景導覽連結集。", thSite: "網站名稱", thDesc: "概要" },
  cn: { title: "链接集", summary: "与本站互相链接的网站及推荐网站。", description: "东京夜景导航链接集。", thSite: "网站名称", thDesc: "概要" },
};

// ── Sitemap ──
type SitemapOtherLink = { href: string; label: string };

export const SITEMAP_LABELS: Record<string, StaticPageLabels & {
  areaHeading: string;
  tagHeading: string;
  pageHeading: string;
  otherHeading: string;
  otherLinks: SitemapOtherLink[];
}> = {
  ja: {
    title: "サイトマップ", summary: "東京夜景ナビに掲載中の全ページへのリンク一覧です。", description: "東京夜景ナビのサイトマップです。",
    areaHeading: "エリア別 夜景スポット", tagHeading: "目的別 夜景スポット", pageHeading: "固定ページ",
    otherHeading: "その他",
    otherLinks: [
      { href: "/", label: "ホーム" },
      { href: "/search", label: "スポット検索" },
      { href: "/recommend", label: "おすすめの夜景スポット" },
      { href: "/time-lapse", label: "タイムラプス映像集" },
      { href: "/simulator", label: "日の出・日の入り方角シミュレーター" },
      { href: "/about", label: "運営者情報" },
      { href: "/privacy-policy", label: "プライバシーポリシー" },
    ],
  },
  en: {
    title: "Sitemap", summary: "A list of all pages published on Tokyo Night View Guide.", description: "Sitemap for Tokyo Night View Guide.",
    areaHeading: "Night View Spots by Area", tagHeading: "Night View Spots by Purpose", pageHeading: "Pages",
    otherHeading: "Other Pages",
    otherLinks: [
      { href: "/", label: "Home" },
      { href: "/search", label: "Spot Search" },
      { href: "/recommend", label: "Recommended Night View Spots" },
      { href: "/time-lapse", label: "Time-lapse Videos" },
      { href: "/wallpaper", label: "Smartphone Wallpapers" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/guidelines", label: "Content Policy" },
      { href: "/caution", label: "Terms of Use" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
  ko: {
    title: "사이트맵", summary: "도쿄 야경 네비에 게재된 모든 페이지 링크 목록입니다.", description: "도쿄 야경 네비 사이트맵입니다.",
    areaHeading: "지역별 야경 스폿", tagHeading: "목적별 야경 스폿", pageHeading: "고정 페이지",
    otherHeading: "기타 페이지",
    otherLinks: [
      { href: "/", label: "홈" },
      { href: "/search", label: "스폿 검색" },
      { href: "/recommend", label: "추천 야경 스폿" },
      { href: "/time-lapse", label: "타임랩스 영상집" },
      { href: "/wallpaper", label: "스마트폰 배경화면" },
      { href: "/about", label: "운영자 정보" },
      { href: "/contact", label: "문의하기" },
      { href: "/guidelines", label: "콘텐츠 제작 정책" },
      { href: "/caution", label: "이용약관" },
      { href: "/privacy-policy", label: "개인정보 처리방침" },
    ],
  },
  tw: {
    title: "網站地圖", summary: "東京夜景導覽所有頁面的連結一覽。", description: "東京夜景導覽網站地圖。",
    areaHeading: "按地區的夜景景點", tagHeading: "按目的的夜景景點", pageHeading: "固定頁面",
    otherHeading: "其他頁面",
    otherLinks: [
      { href: "/", label: "首頁" },
      { href: "/search", label: "景點搜尋" },
      { href: "/recommend", label: "推薦夜景景點" },
      { href: "/time-lapse", label: "縮時攝影集" },
      { href: "/wallpaper", label: "手機桌布" },
      { href: "/about", label: "關於我們" },
      { href: "/contact", label: "聯絡我們" },
      { href: "/guidelines", label: "內容製作政策" },
      { href: "/caution", label: "使用條款" },
      { href: "/privacy-policy", label: "隱私權政策" },
    ],
  },
  cn: {
    title: "网站地图", summary: "东京夜景导航所有页面的链接列表。", description: "东京夜景导航网站地图。",
    areaHeading: "按地区的夜景景点", tagHeading: "按目的的夜景景点", pageHeading: "固定页面",
    otherHeading: "其他页面",
    otherLinks: [
      { href: "/", label: "首页" },
      { href: "/search", label: "景点搜索" },
      { href: "/recommend", label: "推荐夜景景点" },
      { href: "/time-lapse", label: "延时摄影集" },
      { href: "/wallpaper", label: "手机壁纸" },
      { href: "/about", label: "关于我们" },
      { href: "/contact", label: "联系我们" },
      { href: "/guidelines", label: "内容制作政策" },
      { href: "/caution", label: "使用条款" },
      { href: "/privacy-policy", label: "隐私政策" },
    ],
  },
};
