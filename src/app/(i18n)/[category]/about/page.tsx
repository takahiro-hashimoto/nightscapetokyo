import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Award,
  Newspaper,
  BookOpen,
  Mail,
  ExternalLink,
} from "lucide-react";
import ArticleLayout from "@/components/layout/ArticleLayout";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import {
  ALL_LOCALE_SLUGS,
  SITE_URL,
  LOCALE_LABELS,
  OG_LOCALE_MAP,
  ALL_OG_LOCALES,
  buildAreaHreflangAlternates,
} from "@/lib/types";
import type { CategoryPageProps as Props } from "@/lib/types";
import { EQUIPMENT, ABOUT_SNS_LINKS, ACHIEVEMENTS_BASE } from "@/lib/about-content";

/* ─── Per-locale text ─── */
type AboutLabels = {
  title: string;
  summary: string;
  profile: string;
  profileItems: { label: string; value: string }[];
  bio: string[];
  bioLinks: { href: string; text: string }[];
  equipment: string;
  equipmentDesc: string;
  equipmentArticleHref: string;
  equipmentArticleText: string;
  achievements: string;
  achievementsDesc: string;
  achievementTitles: string[];
  achievementDescs: string[][];
  media: string;
  mediaItems: { description: string; linkTitle: string; linkHref: string }[];
  story: string;
  storyTexts: string[];
  contactHeading: string;
  contactCta: string;
};

const ABOUT_LABELS: Record<string, AboutLabels> = {
  en: {
    title: "About",
    summary: "Learn about Takahiro, the operator of Tokyo Night View Guide — profile, achievements, and camera equipment.",
    profile: "About the Operator",
    profileItems: [
      { label: "Career", value: "Web Designer → Front-end Engineer → Web Director → PM" },
      { label: "Hometown", value: "Aichi, Japan" },
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Blogging since", value: "December 2015 (10+ years)" },
    ],
    bio: [
      "I especially love night view spots with views of Tokyo Tower and waterfront areas. I've visited almost all the major night view spots in Tokyo.",
      "Lately, my hobby has been staying at hotels with great views and enjoying the scenery from the guest rooms.",
      "Besides this site, I also run a gadget review blog, work as a photographer, and provide web consulting services.",
    ],
    bioLinks: [],
    equipment: "Camera Equipment",
    equipmentDesc: "I use the following cameras and lenses for night photography.",
    equipmentArticleHref: "https://nightscape.tokyo/article/my-photographic-equipment/",
    equipmentArticleText: "A complete guide to the camera gear used by a night view photographer",
    achievements: "Achievements",
    achievementsDesc: "A selection of commissions and achievements received through this website.",
    achievementTitles: [
      "Tokyo Tower Co., Ltd. — Filmed timelapse for the official website's PC top page",
      "The Prince Park Tower Tokyo — Promotional photos of guest rooms & restaurant",
      "The Prince Park Tower Tokyo — 20th Anniversary Renovation Project photos",
      "Nagoya Prince Hotel Sky Tower — Room view photography",
      "\"Minato, Ugoku\" video contest — Served as a judge",
      "Nippon Densetsu Kogyo — Main visual footage for corporate website",
      "AIROS Skyview — Helicopter tour PR article",
      "Restaurant LUKE \"SKY TERRACE\" — Coverage article",
      "8th Tokyo Daikairou Photo Contest — Idemitsu Museum Award",
      "BS TBS \"Hiruzake\" — Timelapse footage provided",
      "NHK General \"Stanislav Bunin\" — Timelapse footage provided",
      "TV Asahi \"Zawatsuku! Friday\" — Photo materials provided",
      "Asahi Shimbun — Interview article published",
    ],
    achievementDescs: [
      ["Commissioned by Tokyo Tower Co., Ltd. to film timelapse footage for the top page of their official website. The timelapse plays on the PC version — please check it out!"],
      ["Shot promotional photos of the guest rooms' night views, restaurant interiors, and timelapse footage capturing the transition from dusk to night.", "These photos are used on the official website as well as major travel booking sites such as Rakuten Travel and Jalan."],
      ["Handled interior photography of the 33rd and 32nd floors under the 'THE TOKYO FUSION' concept for the 20th anniversary renovation.", "Photography emphasized premium atmosphere and nuanced lighting to reflect the fusion of tradition and modernity."],
      ["Shot night view photos and timelapse footage from the guest rooms of Nagoya Prince Hotel Sky Tower.", "The materials are used on the official website and travel sites such as Rakuten Travel and Jalan."],
      ["Served as a judge for the video contest 'Minato, Ugoku: 15-Second Stories', aimed at promoting the appeal of Minato Ward's night spots.", "Also attended the awards ceremony held on February 28, 2025."],
      ["Timelapse footage shot by this site was adopted as the main visual for Nippon Densetsu Kogyo's website.", "Multiple shots including the Kasumigaseki area from Marunouchi Building and illuminated Tokyo Station are featured."],
      ["Commissioned by AirX, operator of AIROS Skyview helicopter tours, to create a PR article.", "A wonderful service to enjoy Tokyo's night views in an extraordinary setting — great for special dates or aerial photography."],
      ["Wrote a coverage article for the limited-time event 'SKY TERRACE' held at Restaurant LUKE with Sky Lounge from January 6 to March 31, 2025."],
      ["Won the Idemitsu Museum of Arts Award from 911 entries at the 8th Tokyo Daikairou Photo Contest."],
      ["Provided timelapse footage for the opening sequence of BS TBS 'Kannin Takeyama no Hiruzake wa Jinsei no Aji', broadcast on April 21, 2025 (Mon)."],
      ["Timelapse footage shot from the Magnet by Shibuya109 rooftop observatory was used in NHK General 'Stanislav Bunin — Genius Pianist: 10 Years of Silence', broadcast on January 1, 2024."],
      ["Provided photos of Roppongi Keyakizaka Street and Sakurazaka for 'Zawatsuku! Friday', broadcast on November 29, 2024 (Fri)."],
      ["An interview about photographing the 'Fubai Ginran' sculpture at Harumi Pier was published in the Asahi Shimbun.", "The sculpture can no longer be seen, but the photos I took remain a vivid memory."],
    ],
    media: "Media Features",
    mediaItems: [
      { description: "Supervised an article for the lifestyle comparison media 'Abema Choice'.", linkTitle: "Best Kindle Devices Ranking | Ameba Choice", linkHref: "https://choice.ameba.jp/tablet/kindle/" },
      { description: "Supervised a camera tripod head article for electronics & gadget media 'Picky's'.", linkTitle: "Best Tripod Heads for Stable Shooting — 20 Picks", linkHref: "https://picky-s.jp/camera-platform/" },
      { description: "Our site was featured as a recommended web media by the AI Research Institute.", linkTitle: "Recommended Web Media Companies", linkHref: "https://metaversesouken.com/ai/ai/webmedia/" },
      { description: "An interview article was published in Monthly GoodsPress (March 2024), covering tethered shooting with iPad and photo editing.", linkTitle: "Monthly GoodsPress August/September 2024 Combined Issue", linkHref: "https://www.fujisan.co.jp/product/613/new/" },
    ],
    story: "How It All Started",
    storyTexts: [
      "I first fell in love with Tokyo's night views around 2012. I visited Tokyo several times for job hunting, and since I had little money back then, I mostly travelled by overnight bus.",
      "Leaving home in Nagoya at night, I would look out the window at dawn to see a stunning view of skyscrapers lining both sides of the expressway. The beautiful early-morning crimson sky made it even more breathtaking — I still remember being moved by the thought: 'Tokyo has scenery this beautiful.'",
      "After starting my career at a Nagoya company, I couldn't forget those Tokyo streetscapes from my job-hunting days. I saved up to buy camera gear and made it an annual winter tradition to photograph Tokyo's night views.",
      "In 2022, I transferred to a Tokyo company. That inspired me to organise all the night view photos I had accumulated over the years and launch this website. I could now visit even minor night view spots that I could only reach a few times a year, and the number of spots listed has grown to over 200.",
      "Thankfully, opportunities to work as a photographer have also increased. Photographing Tokyo's night streets has become one of my life's passions, and I hope to keep recording the ever-evolving city for years to come.",
    ],
    contactHeading: "Feel free to reach out for photography commissions or photo licensing.",
    contactCta: "Contact / Photography Inquiries",
  },

  ko: {
    title: "운영자 소개",
    summary: "도쿄 야경 가이드 운영자 타카히로의 프로필, 활동 실적, 촬영 장비를 소개합니다.",
    profile: "운영자 소개",
    profileItems: [
      { label: "경력", value: "웹 디자이너 → 프론트엔드 엔지니어 → 웹 디렉터 → PM" },
      { label: "출신지", value: "아이치현" },
      { label: "거주지", value: "도쿄도" },
      { label: "블로그 경력", value: "2015년 12월~ (10년 이상)" },
    ],
    bio: [
      "도쿄 타워가 보이는 야경 명소와 워터프론트 야경 명소를 특히 좋아합니다. 도쿄 내 주요 야경 명소는 거의 모두 방문했습니다.",
      "최근에는 도시 전망이 좋은 호텔에 묵으며 객실에서 야경을 즐기는 것이 취미가 되었습니다.",
      "이 사이트 외에도 가젯 리뷰 블로그 운영, 사진작가, 웹 컨설턴트로도 활동하고 있습니다.",
    ],
    bioLinks: [],
    equipment: "촬영 장비",
    equipmentDesc: "야경 촬영에 사용하는 카메라·렌즈 목록입니다.",
    equipmentArticleHref: "https://nightscape.tokyo/article/my-photographic-equipment/",
    equipmentArticleText: "야경 포토그래퍼가 애용하는 촬영 장비 정리",
    achievements: "활동 실적",
    achievementsDesc: "본 사이트를 통해 의뢰받은 주요 활동 실적을 소개합니다.",
    achievementTitles: [
      "주식회사 TOKYO TOWER 공식 사이트 톱 페이지 타임랩스 촬영",
      "더 프린스 파크 타워 도쿄 객실·레스토랑 프로모션 사진 촬영",
      "더 프린스 파크 타워 도쿄 20주년 리뉴얼 프로젝트 사진 촬영",
      "나고야 프린스 호텔 스카이 타워 객실 전망 촬영",
      "동영상 콘테스트 「미나토, 움직이다」 심사위원 담당",
      "니혼전설공업 주식회사 웹사이트 메인 비주얼 납품",
      "AIROS Skyview 헬리콥터 유람 PR 기사 작성",
      "레스토랑 루크 「SKY TERRACE」 취재 기사 담당",
      "제8회 도쿄 대회랑 사진 콘테스트 이데미츠 미술관상 수상",
      "BS TBS 「히루사케」 타임랩스 영상 제공",
      "NHK 「스타니슬라프 부닌」 타임랩스 영상 제공",
      "테레비 아사히 「자와츠쿠! 금요일」 사진 소재 제공",
      "아사히 신문 인터뷰 기사 게재",
    ],
    achievementDescs: [
      ["주식회사 TOKYO TOWER로부터 의뢰받아 공식 사이트 PC 버전 톱 페이지에 사용하는 타임랩스 영상을 촬영했습니다. PC 버전에서 재생되니 꼭 확인해 보세요!"],
      ["객실에서 바라보는 야경, 레스토랑 내부, 황혼부터 밤으로 이어지는 타임랩스 영상을 촬영했습니다.", "공식 사이트 외에도 라쿠텐 트래블, 자란 등 주요 여행 예약 사이트에서 사용되고 있습니다."],
      ["20주년 기념 리뉴얼로 「THE TOKYO FUSION」 콘셉트의 33·32층 플로어 실내 촬영을 담당했습니다.", "전통과 모던이 융합된 디자인 콘셉트를 살려 고급스러운 분위기와 빛의 뉘앙스를 중시한 촬영을 진행했습니다."],
      ["나고야 프린스 호텔 스카이 타워 객실에서 바라본 야경 사진과 타임랩스 영상을 촬영했습니다.", "공식 사이트, 라쿠텐 트래블, 자란 등 여행 사이트의 소재로 사용되고 있습니다."],
      ["미나토구 나이트 스팟의 매력을 발신하는 동영상 콘테스트 「미나토, 움직이다: 15초의 이야기」 심사위원을 담당했습니다.", "2025년 2월 28일에 열린 시상식에도 참가했습니다."],
      ["니혼전설공업 웹사이트의 메인 비주얼로 본 사이트가 촬영한 타임랩스 영상이 채택되었습니다.", "마루노우치 빌딩에서 촬영한 가스미가세키 주변 거리 및 조명된 도쿄역 등 여러 소재가 사용되었습니다."],
      ["헬리콥터 유람 서비스 AIROS Skyview를 운영하는 AirX의 의뢰로 PR 기사를 작성했습니다.", "특별한 날 데이트나 항공 촬영 시 이용해 보세요."],
      ["2025년 1월 6일~3월 31일 기간 한정으로 개최된 레스토랑 루크의 이벤트 「SKY TERRACE」 취재 기사를 작성했습니다."],
      ["제8회 도쿄 대회랑 사진 콘테스트에서 응모 총수 911점 중 「이데미츠 미술관상」을 수상했습니다."],
      ["2025년 4월 21일(월) 방송 BS TBS 「카운터 타케야마의 히루사케는 인생의 맛」 오프닝 영상에 타임랩스 영상을 제공했습니다."],
      ["NHK 종합 「스타니슬라프 부닌 ~천재 피아니스트 10년의 공백을 넘어~」(2024년 1월 1일 방송)에서 마그넷 by 시부야109 옥상 전망대에서 촬영한 타임랩스 영상이 사용되었습니다."],
      ["2024년 11월 29일(금) 방송 「자와츠쿠! 금요일」에 롯폰기 케야키자카 거리와 사쿠라자카 사진을 제공했습니다."],
      ["아사히 신문에 하루미 부두의 조형물 「후바이 긴란」을 촬영했을 때의 인터뷰가 게재되었습니다.", "지금은 볼 수 없게 된 조형물이지만, 촬영한 사진은 지금도 기억에 남아 있습니다."],
    ],
    media: "미디어 게재",
    mediaItems: [
      { description: "라이프스타일 비교 미디어 「아베마 초이스」의 기사 감수를 담당했습니다.", linkTitle: "킨들 단말기 추천 인기 랭킹 5선 | Ameba 초이스", linkHref: "https://choice.ameba.jp/tablet/kindle/" },
      { description: "가전·가젯 미디어 「Picky's」의 추천 운대(삼각대 헤드) 소개 기사 감수를 담당했습니다.", linkTitle: "안정적인 촬영을 위한 운대 추천 20선", linkHref: "https://picky-s.jp/camera-platform/" },
      { description: "AI 총연 오운드 미디어에 추천 미디어로 소개되었습니다.", linkTitle: "추천 웹 미디어 운영 회사", linkHref: "https://metaversesouken.com/ai/ai/webmedia/" },
      { description: "월간 GoodsPress 2024년 3월호에 인터뷰 기사가 게재되었습니다.", linkTitle: "월간 GoodsPress 2024년 8·9월 합병호", linkHref: "https://www.fujisan.co.jp/product/613/new/" },
    ],
    story: "야경 촬영을 시작한 계기",
    storyTexts: [
      "도쿄 야경의 매력에 빠진 것은 2012년경입니다. 취업 활동으로 도쿄를 여러 차례 방문할 기회가 있었는데, 당시에는 돈이 없어서 주로 심야버스를 이용했습니다.",
      "밤에 고향 나고야를 출발해 새벽에 창밖을 바라보면, 수도고속도로 양쪽에 초고층 빌딩이 줄지어 선 웅장한 풍경이 펼쳐졌습니다. 아름다운 새벽 노을빛과 어우러져 '도쿄에는 이렇게 아름다운 풍경이 있구나'라고 감동했던 것이 기억납니다.",
      "이후 나고야 기업에 신입으로 입사했지만 취업 활동 때 본 도쿄의 거리를 잊지 못해, 월급을 모아 카메라 장비를 구입하고 매년 겨울 도쿄 야경 명소를 촬영하는 것이 연례행사가 되었습니다.",
      "2022년 도쿄 회사로 이직한 것을 계기로, 그간 찍어온 야경 사진을 정리해 본 사이트를 개설했습니다. 일 년에 몇 번밖에 방문할 수 없었던 소소한 야경 명소도 편하게 찾아갈 수 있게 되어, 소개하는 야경 명소가 200곳을 넘게 되었습니다.",
      "덕분에 사진작가로 일을 의뢰받는 기회도 늘어, 도쿄의 야경을 촬영하는 것이 인생의 한 부분이 되었습니다. 앞으로도 계속 발전해 나가는 도쿄의 거리를 기록해 나가고 싶습니다.",
    ],
    contactHeading: "촬영 의뢰나 사진 소재 구매는 부담 없이 문의해 주세요.",
    contactCta: "문의하기 · 촬영 의뢰",
  },

  tw: {
    title: "關於本站",
    summary: "東京夜景導覽營運者Takahiro的介紹、活動實績及攝影器材。",
    profile: "關於營運者",
    profileItems: [
      { label: "經歷", value: "網頁設計師 → 前端工程師 → 網頁總監 → PM" },
      { label: "出身地", value: "愛知縣" },
      { label: "居住地", value: "東京都" },
      { label: "部落格資歷", value: "2015年12月起（10年以上）" },
    ],
    bio: [
      "特別喜歡能看到東京鐵塔的夜景景點和海濱夜景。東京市內的主要夜景景點幾乎全部造訪過。",
      "最近的愛好是入住景觀好的飯店，從客房欣賞夜景。",
      "除了本站，也經營3C評測部落格，並以攝影師和網路顧問身分活動中。",
    ],
    bioLinks: [],
    equipment: "攝影器材",
    equipmentDesc: "拍攝夜景使用的相機和鏡頭。",
    equipmentArticleHref: "https://nightscape.tokyo/article/my-photographic-equipment/",
    equipmentArticleText: "夜景攝影師常用攝影器材整理",
    achievements: "活動實績",
    achievementsDesc: "透過本站接獲委託的部分活動實績介紹。",
    achievementTitles: [
      "株式會社TOKYO TOWER 官網首頁縮時攝影",
      "The Prince Park Tower Tokyo 客房·餐廳宣傳用照片拍攝",
      "The Prince Park Tower Tokyo 20週年翻新專案照片拍攝",
      "名古屋王子大飯店Sky Tower 客房景觀攝影",
      "影片競賽「港、動く」擔任評審",
      "日本電設工業株式會社 官網主視覺納品",
      "AIROS Skyview 直升機遊覽PR文章撰寫",
      "Restaurant LUKE「SKY TERRACE」採訪文章",
      "第8屆東京大回廊攝影比賽 出光美術館獎",
      "BS TBS「昼酒」縮時影像提供",
      "NHK「斯坦尼斯拉夫·布寧」縮時影像提供",
      "テレビ朝日「ザワつく!金曜日」照片素材提供",
      "朝日新聞 採訪文章刊登",
    ],
    achievementDescs: [
      ["受株式會社TOKYO TOWER委託，拍攝官網PC版首頁所使用的縮時影像。縮時影像僅在PC版播放，歡迎前往觀看！"],
      ["拍攝了客房俯瞰夜景、餐廳內部，以及從黃昏到夜晚變化的縮時影像。", "這些照片與影像被用於官方網站及樂天旅遊、jalan等大型旅遊預訂網站。"],
      ["負責20週年紀念翻新專案中，以「THE TOKYO FUSION」為主題的33、32樓樓層室內攝影。", "以傳統與現代融合的設計概念為基礎，注重高品質氛圍與光線細節進行拍攝。"],
      ["拍攝了名古屋王子大飯店Sky Tower客房眺望的夜景照片及縮時影像。", "已用於官方網站及樂天旅遊、jalan等旅遊網站的素材。"],
      ["擔任以宣傳港區夜間景點魅力為目的的影片競賽「港、動く: 15秒故事」的評審。", "也出席了2025年2月28日舉辦的頒獎典禮。"],
      ["日本電設工業官網主視覺採用了本站拍攝的縮時影像。", "包含從丸大樓拍攝的霞關周邊街景及點燈的東京車站等多項素材。"],
      ["受運營直升機遊覽服務AIROS Skyview的AirX委託，撰寫了PR文章。", "這是一項能在非日常體驗中欣賞東京夜景的絕佳服務。"],
      ["撰寫了2025年1月6日至3月31日期間限定於Restaurant LUKE舉辦的活動「SKY TERRACE」採訪文章。"],
      ["在第8屆東京大回廊攝影比賽中，從911件應徵作品中獲得「出光美術館獎」。"],
      ["為2025年4月21日（一）播出的BS TBS《カンニング竹山の昼酒は人生の味》提供了開場縮時影像。"],
      ["2024年1月1日播出的NHK綜合《斯坦尼斯拉夫·布寧~天才鋼琴家10年的空白~》中使用了從Magnet by Shibuya109屋頂展望台拍攝的縮時影像。"],
      ["為2024年11月29日（五）播出的《ザワつく!金曜日》提供了六本木欅坂通和櫻坂的照片。"],
      ["朝日新聞刊登了拍攝晴海埠頭裝置藝術「風媒銀亂」時的採訪文章。", "雖然那件裝置已無緣再見，但當時拍下的照片至今仍歷歷在目。"],
    ],
    media: "媒體刊載",
    mediaItems: [
      { description: "擔任生活風格比較媒體「Abema Choice」文章的監修。", linkTitle: "Kindle推薦排行榜5選 | Ameba Choice", linkHref: "https://choice.ameba.jp/tablet/kindle/" },
      { description: "擔任家電·3C媒體「Picky's」雲台推薦文章的監修。", linkTitle: "安定拍攝！雲台推薦20選", linkHref: "https://picky-s.jp/camera-platform/" },
      { description: "獲AI總研自媒體介紹為推薦網路媒體。", linkTitle: "推薦網路媒體運營公司", linkHref: "https://metaversesouken.com/ai/ai/webmedia/" },
      { description: "2024年3月號月刊GoodsPress刊登了採訪文章，介紹使用iPad進行系留攝影及修圖的方法。", linkTitle: "月刊GoodsPress 2024年8·9月合刊號", linkHref: "https://www.fujisan.co.jp/product/613/new/" },
    ],
    story: "開始拍攝夜景的契機",
    storyTexts: [
      "迷上東京夜景是在2012年前後。當時多次因求職來到東京，但由於資金有限，主要交通工具是深夜巴士。",
      "深夜從名古屋出發，在清晨望向窗外，眼前出現了高速公路兩側高樓林立的壯觀景色。配上美麗的晨霞，心想「東京竟有如此美麗的景色……」，那份感動至今難忘。",
      "進入名古屋的企業工作後，仍忘不了求職時見到的東京街景，於是積攢薪水購入相機器材，每年冬天前往東京拍攝夜景，成為固定行程。",
      "2022年轉職到東京的公司，以此為契機整理了過去積累的夜景照片，創立了本站。從此可以輕鬆造訪以前一年只能去幾次的小眾夜景景點，收錄的景點已超過200處。",
      "承蒙各方委託，以攝影師身分工作的機會也逐漸增加，在東京的夜晚街道拍攝已成為生活的一部分。希望今後也能繼續記錄不斷進化的東京街景。",
    ],
    contactHeading: "攝影委託或照片素材購買，歡迎隨時聯繫。",
    contactCta: "聯絡我們 · 攝影委託",
  },

  cn: {
    title: "关于本站",
    summary: "东京夜景导航运营者Takahiro的介绍、活动实绩及摄影器材。",
    profile: "关于运营者",
    profileItems: [
      { label: "经历", value: "网页设计师 → 前端工程师 → 网页总监 → PM" },
      { label: "出身地", value: "爱知县" },
      { label: "居住地", value: "东京都" },
      { label: "博客资历", value: "2015年12月起（10年以上）" },
    ],
    bio: [
      "特别喜欢能看到东京塔的夜景景点和海滨夜景。东京市内的主要夜景景点几乎全部都去过。",
      "最近的爱好是入住景观好的酒店，从客房欣赏夜景。",
      "除了本站，也经营3C评测博客，并以摄影师和网络顾问身分活跃中。",
    ],
    bioLinks: [],
    equipment: "摄影器材",
    equipmentDesc: "拍摄夜景使用的相机和镜头。",
    equipmentArticleHref: "https://nightscape.tokyo/article/my-photographic-equipment/",
    equipmentArticleText: "夜景摄影师常用摄影器材整理",
    achievements: "活动实绩",
    achievementsDesc: "通过本站接到的部分委托工作实绩介绍。",
    achievementTitles: [
      "株式会社TOKYO TOWER 官网首页延时摄影",
      "The Prince Park Tower Tokyo 客房·餐厅宣传照片拍摄",
      "The Prince Park Tower Tokyo 20周年翻新项目照片拍摄",
      "名古屋王子大酒店Sky Tower 客房景观摄影",
      "短视频大赛「港、动く」担任评审",
      "日本电设工业株式会社 官网主视觉交付",
      "AIROS Skyview 直升机游览PR文章撰写",
      "Restaurant LUKE「SKY TERRACE」采访文章",
      "第8届东京大回廊摄影比赛 出光美术馆奖",
      "BS TBS「昼酒」延时视频提供",
      "NHK「斯坦尼斯拉夫·布宁」延时视频提供",
      "テレビ朝日「ザワつく!金曜日」照片素材提供",
      "朝日新闻 采访文章刊登",
    ],
    achievementDescs: [
      ["受株式会社TOKYO TOWER委托，拍摄了官网PC版首页所使用的延时影像。延时影像仅在PC版播放，欢迎前往查看！"],
      ["拍摄了客房俯瞰夜景、餐厅内部以及从黄昏到夜晚变化的延时影像。", "这些照片与影像被用于官方网站及乐天旅游、jalan等大型旅游预订网站。"],
      ["负责20周年纪念翻新项目中，以「THE TOKYO FUSION」为主题的33、32楼楼层室内摄影。", "以传统与现代融合的设计理念为基础，注重高品质氛围与光线细节进行拍摄。"],
      ["拍摄了名古屋王子大酒店Sky Tower客房眺望的夜景照片及延时影像。", "已用于官方网站及乐天旅游、jalan等旅游网站的素材。"],
      ["担任以宣传港区夜间景点魅力为目的的短视频大赛「港、动く: 15秒故事」的评审。", "还出席了2025年2月28日举办的颁奖典礼。"],
      ["日本电设工业官网主视觉采用了本站拍摄的延时影像。", "包含从丸大楼拍摄的霞关周边街景及亮灯的东京站等多项素材。"],
      ["受运营直升机游览服务AIROS Skyview的AirX委托，撰写了PR文章。", "这是一项能在非日常体验中欣赏东京夜景的绝佳服务。"],
      ["撰写了2025年1月6日至3月31日期间限定于Restaurant LUKE举办的活动「SKY TERRACE」采访文章。"],
      ["在第8届东京大回廊摄影比赛中，从911件参赛作品中获得「出光美术馆奖」。"],
      ["为2025年4月21日（周一）播出的BS TBS《カンニング竹山の昼酒は人生の味》提供了开场延时影像。"],
      ["2024年1月1日播出的NHK综合《斯坦尼斯拉夫·布宁~天才钢琴家10年的空白~》中使用了从Magnet by Shibuya109屋顶展望台拍摄的延时影像。"],
      ["为2024年11月29日（周五）播出的《ザワつく!金曜日》提供了六本木欅坂通和樱坂的照片。"],
      ["朝日新闻刊登了拍摄晴海码头装置艺术「风媒银乱」时的采访文章。", "虽然那件装置已无缘再见，但当时拍下的照片至今仍历历在目。"],
    ],
    media: "媒体刊载",
    mediaItems: [
      { description: "担任生活方式比较媒体「Abema Choice」文章的监修。", linkTitle: "Kindle推荐排行榜5选 | Ameba Choice", linkHref: "https://choice.ameba.jp/tablet/kindle/" },
      { description: "担任家电·3C媒体「Picky's」云台推荐文章的监修。", linkTitle: "稳定拍摄！云台推荐20选", linkHref: "https://picky-s.jp/camera-platform/" },
      { description: "获AI总研自媒体介绍为推荐网络媒体。", linkTitle: "推荐网络媒体运营公司", linkHref: "https://metaversesouken.com/ai/ai/webmedia/" },
      { description: "2024年3月号月刊GoodsPress刊登了采访文章，介绍使用iPad进行拴绳拍摄及修图的方法。", linkTitle: "月刊GoodsPress 2024年8·9月合刊号", linkHref: "https://www.fujisan.co.jp/product/613/new/" },
    ],
    story: "开始拍摄夜景的契机",
    storyTexts: [
      "迷上东京夜景是在2012年前后。当时多次因求职来到东京，但由于资金有限，主要交通工具是深夜巴士。",
      "深夜从名古屋出发，在清晨望向窗外，眼前出现了高速公路两侧高楼林立的壮观景色。配上美丽的晨霞，心想「东京竟有如此美丽的景色……」，那份感动至今难忘。",
      "进入名古屋的企业工作后，仍忘不了求职时见到的东京街景，于是积攒薪水购入相机器材，每年冬天前往东京拍摄夜景，成为固定行程。",
      "2022年转职到东京的公司，以此为契机整理了过去积累的夜景照片，创立了本站。从此可以轻松造访以前一年只能去几次的小众夜景景点，收录的景点已超过200处。",
      "承蒙各方委托，以摄影师身分工作的机会也逐渐增加，在东京的夜晚街道拍摄已成为生活的一部分。希望今后也能继续记录不断进化的东京街景。",
    ],
    contactHeading: "摄影委托或照片素材购买，欢迎随时联系。",
    contactCta: "联系我们 · 摄影委托",
  },
};

/* ─── Static params & metadata ─── */
export function generateStaticParams() {
  return ALL_LOCALE_SLUGS.map((lang) => ({ category: lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const locale = category;
  const l = ABOUT_LABELS[locale] ?? ABOUT_LABELS.en;
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  const canonicalUrl = `${SITE_URL}/${locale}/about/`;
  return {
    title: l.title,
    description: l.summary,
    openGraph: {
      title: l.title,
      description: l.summary,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAreaHreflangAlternates(SITE_URL, "about", ALL_LOCALE_SLUGS),
    },
  };
}

export const revalidate = 86400;

/* ─── Page ─── */
export default async function AboutPageI18n({ params }: Props) {
  const { category } = await params;
  const locale = category;
  const l = ABOUT_LABELS[locale] ?? ABOUT_LABELS.en;

  return (
    <>
      <LanguageSwitcher
        currentLocale={locale}
        categorySlug="about"
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
      <ArticleLayout
        locale={locale}
        title={l.title}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
        summary={l.summary}
        breadcrumb={[{ label: l.title }]}
      >
        {/* ── Profile ── */}
        <div className="content-card card-padding article-body">
          <h2>{l.profile}</h2>

          <div className="about-profile">
            <div className="about-profile-avatar">
              <Image
                src="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/10/images.jpg"
                alt="Takahiro"
                width={120}
                height={120}
                className="about-avatar-img"
              />
              <p className="about-avatar-name">Takahiro</p>
              <p className="about-avatar-role">Night View Photographer</p>
            </div>
            <dl className="about-profile-dl">
              {l.profileItems.map((row) => (
                <div key={row.label} className="about-profile-row">
                  <dt>{row.label}：</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about-profile-bio">
            {l.bio.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="about-sns-buttons">
            {ABOUT_SNS_LINKS.map((sns) => (
              <a
                key={sns.label}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-sns-btn"
              >
                {sns.Icon ? (
                  <sns.Icon size={15} aria-hidden="true" />
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={sns.icon} />
                  </svg>
                )}
                {sns.label}
              </a>
            ))}
            <Link href={`/${locale}/contact`} className="about-sns-btn">
              <Mail size={15} />
              {l.contactCta}
            </Link>
          </div>
        </div>

        {/* ── Equipment ── */}
        <div className="content-card card-padding article-body">
          <h2>
            <span className="heading-icon"><Camera size={18} /></span>
            {l.equipment}
          </h2>
          <p>{l.equipmentDesc}</p>
          <p>
            <a href={l.equipmentArticleHref} target="_blank" rel="noopener noreferrer">
              {l.equipmentArticleText}
            </a>
          </p>
          <ul className="about-equipment-list">
            {EQUIPMENT.map((item) => (
              <li key={item.name}>
                <Camera size={14} color="#64748b" />
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Achievements ── */}
        <div className="content-card card-padding article-body">
          <h2>
            <span className="heading-icon"><Award size={18} /></span>
            {l.achievements}
          </h2>
          <p style={{ marginBottom: 24 }}>{l.achievementsDesc}</p>

          {ACHIEVEMENTS_BASE.map((base, i) => (
            <div key={base.image}>
              <h3>{l.achievementTitles[i]}</h3>
              <div className="about-achievement-image">
                <Image
                  src={base.image}
                  alt={l.achievementTitles[i] ?? ''}
                  width={960}
                  height={640}
                  style={{ width: "100%", height: "auto", borderRadius: 8 }}
                />
              </div>
              {l.achievementDescs[i]?.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              <a
                href={base.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-card"
              >
                {base.link.thumbnail && (
                  <div className="ref-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={base.link.thumbnail} alt="" />
                  </div>
                )}
                <div className="ref-body">
                  <span className="ref-title">{base.link.title}</span>
                  {base.link.siteName && (
                    <span className="ref-site">{base.link.siteName}</span>
                  )}
                  {base.link.excerpt && (
                    <span className="ref-excerpt">{base.link.excerpt}</span>
                  )}
                </div>
                <ExternalLink size={14} className="ref-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* ── Media ── */}
        <div className="content-card card-padding article-body">
          <h2>
            <span className="heading-icon"><Newspaper size={18} /></span>
            {l.media}
          </h2>
          {l.mediaItems.map((item) => (
            <div key={item.linkHref} className="about-media-item">
              <p>{item.description}</p>
              <a
                href={item.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="about-media-link"
              >
                <ExternalLink size={14} />
                <span>{item.linkTitle}</span>
              </a>
            </div>
          ))}
        </div>

        {/* ── Story ── */}
        <div className="content-card card-padding article-body">
          <h2>
            <span className="heading-icon"><BookOpen size={18} /></span>
            {l.story}
          </h2>
          {l.storyTexts.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="content-card about-cta">
          <p style={{ marginBottom: 20, textAlign: "center" }}>
            {l.contactHeading}
          </p>
          <Link href={`/${locale}/contact`}>
            <Mail size={18} />
            {l.contactCta}
          </Link>
        </div>
      </ArticleLayout>
    </>
  );
}
