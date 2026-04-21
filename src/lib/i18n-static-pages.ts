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
export const GUIDELINES_LABELS: Record<string, StaticPageLabels & { sections: { heading: string; text: string }[] }> = {
  ja: {
    title: "コンテンツ制作ポリシー",
    summary: "東京夜景ナビでは、読者の皆さまが安心して情報を参考にできるよう、以下の方針に基づきコンテンツを制作しています。",
    description: "東京夜景ナビのコンテンツ制作ポリシーです。情報の正確性・写真の取り扱い・表現方針・法的配慮など、記事制作の基本方針をご案内します。",
    sections: [],
  },
  en: {
    title: "Content Policy",
    summary: "Tokyo Night View Guide creates content based on the following principles to ensure readers can rely on our information with confidence.",
    description: "Content creation policy for Tokyo Night View Guide. Covers accuracy, photo handling, expression guidelines, and legal considerations.",
    sections: [
      { heading: "Accuracy & Reliability", text: "All information is primarily gathered through on-site research and original photography. Business hours, lighting schedules, and admission fees are verified against official sources, public agencies, and tourism boards." },
      { heading: "Photo & Video Policy", text: "All photos and videos are either self-shot or used with explicit permission. Post-processing is limited to adjustments that preserve the authentic atmosphere of each location." },
      { heading: "Update Schedule", text: "Event dates and facility information are reviewed when changes occur or seasonally. New night view spots and limited-time illuminations are added as soon as they are confirmed." },
      { heading: "Expression Guidelines", text: "We avoid exaggeration and factual errors, providing real information based on actual experiences. We use clear, accessible language suitable for both local visitors and international tourists." },
      { heading: "User Contributions", text: "We welcome photo submissions and experience sharing from readers, but all content is reviewed and edited as necessary before publication." },
      { heading: "Legal & Ethical Considerations", text: "We do not introduce restricted or photography-prohibited areas. We avoid any expression that could encourage nuisance behavior toward residents or facility staff." },
    ],
  },
  ko: {
    title: "콘텐츠 제작 정책",
    summary: "도쿄 야경 네비는 독자 여러분이 안심하고 정보를 참고할 수 있도록 다음 방침에 따라 콘텐츠를 제작하고 있습니다.",
    description: "도쿄 야경 네비의 콘텐츠 제작 정책입니다. 정보의 정확성, 사진 취급, 표현 방침, 법적 배려 등을 안내합니다.",
    sections: [
      { heading: "정보의 정확성과 신뢰성", text: "게재 정보는 원칙적으로 현지 취재와 직접 촬영을 통해 수집합니다. 영업시간, 라이트업 시각, 입장료 등은 시설 공식 발표나 공적 기관의 1차 정보를 확인하여 정확성을 보장합니다." },
      { heading: "사진·영상 취급", text: "게재하는 사진·영상은 모두 직접 촬영하거나 권리자로부터 사용 허락을 받은 소재만 사용합니다." },
      { heading: "정보 업데이트 시기", text: "이벤트 일정이나 시설 정보는 내용이 변경된 경우나 시즌마다 재검토합니다." },
      { heading: "표현 방침", text: "과장이나 사실 오인을 피하고, 실제 경험에 기반한 리얼한 정보를 제공합니다." },
      { heading: "이용자 정보 제공", text: "독자분들의 사진 제공이나 경험담 공유는 환영하지만, 게재 시에는 사전에 내용을 확인합니다." },
      { heading: "법적·윤리적 배려", text: "출입 금지 구역이나 촬영 금지 구역의 소개는 하지 않습니다." },
    ],
  },
  tw: {
    title: "內容製作政策",
    summary: "東京夜景導覽根據以下方針製作內容，讓讀者能安心地參考資訊。",
    description: "東京夜景導覽的內容製作政策。說明資訊準確性、照片處理、表達方針、法律考量等。",
    sections: [
      { heading: "資訊的準確性與可靠性", text: "刊載資訊原則上透過實地採訪與自行拍攝收集。營業時間、點燈時間、入場費等資料會確認設施官方發布或公共機關的第一手資訊。" },
      { heading: "照片·影片處理", text: "刊載的照片·影片全部為自行拍攝或取得權利人使用許可的素材。" },
      { heading: "資訊更新時機", text: "活動日程或設施資訊在內容變更或每季時進行檢視。" },
      { heading: "表達方針", text: "避免誇張與事實錯誤，提供基於實際體驗的真實資訊。" },
      { heading: "使用者提供資訊", text: "歡迎讀者提供照片或分享體驗，但刊載前會先確認內容。" },
      { heading: "法律·倫理考量", text: "不介紹禁止進入區域或禁止拍攝區域。" },
    ],
  },
  cn: {
    title: "内容制作政策",
    summary: "东京夜景导航根据以下方针制作内容，让读者能安心地参考信息。",
    description: "东京夜景导航的内容制作政策。说明信息准确性、照片处理、表达方针、法律考量等。",
    sections: [
      { heading: "信息的准确性与可靠性", text: "刊载信息原则上通过实地采访与自行拍摄收集。营业时间、亮灯时间、入场费等数据会确认设施官方发布或公共机关的第一手信息。" },
      { heading: "照片·视频处理", text: "刊载的照片·视频全部为自行拍摄或取得权利人使用许可的素材。" },
      { heading: "信息更新时间", text: "活动日程或设施信息在内容变更或每季时进行审视。" },
      { heading: "表达方针", text: "避免夸张与事实错误，提供基于实际体验的真实信息。" },
      { heading: "用户提供信息", text: "欢迎读者提供照片或分享体验，但刊载前会先确认内容。" },
      { heading: "法律·伦理考量", text: "不介绍禁止进入区域或禁止拍摄区域。" },
    ],
  },
};

// ── Privacy Policy ──
export const PRIVACY_LABELS: Record<string, StaticPageLabels & { sections: { heading: string; texts: string[] }[] }> = {
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
      { heading: "Purpose of Personal Information Use", texts: ["This site uses collected user information for: web service provision, content quality improvement, traffic and behavior measurement, ad delivery and performance measurement, site-related notifications, responding to inquiries, and handling violations."] },
      { heading: "Third-Party Disclosure", texts: ["Personal information will not be disclosed to third parties without user consent, except when required by law or for external service integration."] },
      { heading: "Use of Cookies", texts: ["This site uses cookies for ad delivery and access analysis. Cookies identify browsers but do not identify specific individuals. You can disable cookies in your browser settings."] },
      { heading: "Advertising", texts: ["This site uses third-party ad services (Google AdSense, A8.net) that use cookies to display ads based on user interests."] },
      { heading: "Analytics", texts: ["This site uses Google Analytics to collect, record, and analyze access data via cookies. This data does not include personally identifiable information."] },
      { heading: "Disclaimer", texts: ["This site is not responsible for any damages arising from published content. While we strive for accuracy, we cannot guarantee the correctness or safety of all information."] },
      { heading: "Copyright", texts: ["All text and images on this site are copyrighted by the operator. Unauthorized reproduction beyond legally permitted quotation is prohibited."] },
      { heading: "Policy Changes", texts: ["This site complies with applicable Japanese laws regarding personal information and will revise this privacy policy as needed. The latest version is always available on this page.", "Established: January 1, 2023 — Tokyo Night View Guide, Operator: Takahiro"] },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    summary: "도쿄 야경 네비의 개인정보 처리방침 및 면책사항을 다음과 같이 기재합니다.",
    description: "도쿄 야경 네비의 개인정보 처리방침입니다.",
    sections: [
      { heading: "개인정보 이용 목적", texts: ["본 사이트는 수집한 이용자 정보를 웹 서비스 제공, 콘텐츠 품질 개선, 트래픽 측정, 광고 배신, 문의 대응 등의 목적으로 이용합니다."] },
      { heading: "제3자 제공", texts: ["개인정보는 법령에 의한 경우나 외부 서비스 연계를 제외하고 이용자 동의 없이 제3자에게 제공하지 않습니다."] },
      { heading: "쿠키 사용", texts: ["본 사이트는 광고 배신 및 접속 분석을 위해 쿠키를 사용합니다. 브라우저 설정에서 쿠키를 비활성화할 수 있습니다."] },
      { heading: "광고", texts: ["본 사이트는 Google 애드센스, A8.net 등의 제3자 광고 서비스를 이용하고 있습니다."] },
      { heading: "접속 분석", texts: ["본 사이트는 Google 애널리틱스를 사용하여 접속 데이터를 수집·분석합니다."] },
      { heading: "면책사항", texts: ["본 사이트의 정보로 인한 손해에 대해 일체의 책임을 지지 않습니다."] },
      { heading: "저작권", texts: ["본 사이트에 게재된 문장·이미지의 저작권은 운영자에게 귀속됩니다."] },
      { heading: "방침 변경", texts: ["본 방침은 필요에 따라 수정됩니다. 최신 버전은 항상 본 페이지에서 확인할 수 있습니다.", "제정: 2023년 1월 1일 — 도쿄 야경 네비, 운영 책임자: 타카히로"] },
    ],
  },
  tw: {
    title: "隱私權政策",
    summary: "東京夜景導覽的隱私權政策及免責聲明如下。",
    description: "東京夜景導覽的隱私權政策。",
    sections: [
      { heading: "個人資訊使用目的", texts: ["本網站將收集的使用者資訊用於：網站服務提供、內容品質改善、流量測量、廣告投放、回覆諮詢等。"] },
      { heading: "第三方提供", texts: ["除法令要求或外部服務連攜外，不會在未經使用者同意的情況下向第三方提供個人資訊。"] },
      { heading: "Cookie使用", texts: ["本網站為廣告投放及存取分析使用Cookie。您可在瀏覽器設定中停用Cookie。"] },
      { heading: "廣告", texts: ["本網站使用Google AdSense、A8.net等第三方廣告服務。"] },
      { heading: "存取分析", texts: ["本網站使用Google Analytics收集·分析存取數據。"] },
      { heading: "免責聲明", texts: ["對於因本網站資訊造成的損害，概不負責。"] },
      { heading: "著作權", texts: ["本網站刊載的文章·圖片著作權歸營運者所有。"] },
      { heading: "政策變更", texts: ["本政策將根據需要進行修訂。最新版本始終在本頁面公開。", "制定：2023年1月1日 — 東京夜景導覽，營運負責人：Takahiro"] },
    ],
  },
  cn: {
    title: "隐私政策",
    summary: "东京夜景导航的隐私政策及免责声明如下。",
    description: "东京夜景导航的隐私政策。",
    sections: [
      { heading: "个人信息使用目的", texts: ["本网站将收集的用户信息用于：网站服务提供、内容质量改善、流量测量、广告投放、回复咨询等。"] },
      { heading: "第三方提供", texts: ["除法令要求或外部服务联携外，不会在未经用户同意的情况下向第三方提供个人信息。"] },
      { heading: "Cookie使用", texts: ["本网站为广告投放及访问分析使用Cookie。您可在浏览器设置中停用Cookie。"] },
      { heading: "广告", texts: ["本网站使用Google AdSense、A8.net等第三方广告服务。"] },
      { heading: "访问分析", texts: ["本网站使用Google Analytics收集·分析访问数据。"] },
      { heading: "免责声明", texts: ["对于因本网站信息造成的损害，概不负责。"] },
      { heading: "著作权", texts: ["本网站刊载的文章·图片著作权归运营者所有。"] },
      { heading: "政策变更", texts: ["本政策将根据需要进行修订。最新版本始终在本页面公开。", "制定：2023年1月1日 — 东京夜景导航，运营负责人：Takahiro"] },
    ],
  },
};

// ── Caution (Terms of Use) ──
export const CAUTION_LABELS: Record<string, StaticPageLabels & { sections: { heading: string; texts: string[] }[] }> = {
  ja: {
    title: "利用規約",
    summary: "東京夜景ナビをご利用いただくにあたり、著作権・免責事項・Cookie・リンク等に関するルールを記載しています。",
    description: "東京夜景ナビの利用規約です。",
    sections: [],
  },
  en: {
    title: "Terms of Use",
    summary: "Rules regarding copyright, disclaimers, cookies, and links for using Tokyo Night View Guide.",
    description: "Terms of use for Tokyo Night View Guide.",
    sections: [
      { heading: "Copyright", texts: ["All photos, images, and text published on this site are copyrighted. Unauthorized reproduction, copying, or modification is strictly prohibited.", "Photos on this site are not free materials. Commercial use requires a fee. Please contact us via the inquiry form for purchases.", "Please do not redistribute free smartphone wallpapers on websites or social media."] },
      { heading: "Disclaimer", texts: ["While we strive to provide the latest and most accurate information, please verify business hours, fees, and other details on official websites.", "We accept no responsibility for any accidents or troubles arising from information on this site."] },
      { heading: "Use of Cookies", texts: ["This site uses cookies for ad delivery and access analysis. Cookies identify browsers but do not identify individuals. You can disable cookies in your browser settings."] },
      { heading: "Advertising", texts: ["This site uses third-party ad services (Google AdSense, A8.net) that use cookies to display interest-based ads."] },
      { heading: "Analytics", texts: ["This site uses Google Analytics. The collected data does not include personally identifiable information."] },
      { heading: "Links", texts: ["All pages on this site are link-free, but please refrain from displaying them within framesets. URLs other than the top page may change without notice."] },
    ],
  },
  ko: {
    title: "이용약관",
    summary: "도쿄 야경 네비 이용 시 저작권·면책사항·쿠키·링크 등에 관한 규칙을 기재합니다.",
    description: "도쿄 야경 네비의 이용약관입니다.",
    sections: [
      { heading: "저작권", texts: ["본 사이트에 게재된 사진·이미지·문장의 저작권은 운영자에게 있습니다. 무단 전재·복제·가공을 금지합니다.", "사진은 프리 소재가 아닙니다. 상업적 이용은 유료입니다."] },
      { heading: "면책사항", texts: ["정확한 정보 제공에 노력하고 있으나, 영업시간·요금 등은 공식 사이트에서 확인해 주세요.", "본 사이트 정보로 인한 사고·문제에 대해 일체의 책임을 지지 않습니다."] },
      { heading: "쿠키 사용", texts: ["본 사이트는 광고 배신 및 접속 분석을 위해 쿠키를 사용합니다."] },
      { heading: "광고", texts: ["본 사이트는 Google 애드센스, A8.net 등의 제3자 광고 서비스를 이용합니다."] },
      { heading: "접속 분석", texts: ["본 사이트는 Google 애널리틱스를 사용합니다."] },
      { heading: "링크", texts: ["본 사이트의 모든 페이지는 링크 프리입니다. 단, 프레임 내 표시는 삼가해 주세요."] },
    ],
  },
  tw: {
    title: "使用條款",
    summary: "使用東京夜景導覽時，關於著作權·免責聲明·Cookie·連結等規則。",
    description: "東京夜景導覽的使用條款。",
    sections: [
      { heading: "著作權", texts: ["本網站刊載的照片·圖片·文章的著作權歸營運者所有。禁止未經授權的轉載·複製·加工。", "照片非免費素材，商業使用需付費。"] },
      { heading: "免責聲明", texts: ["雖盡力提供準確資訊，但營業時間·費用等請在官方網站確認。", "對因本網站資訊造成的事故·糾紛概不負責。"] },
      { heading: "Cookie使用", texts: ["本網站為廣告投放及存取分析使用Cookie。"] },
      { heading: "廣告", texts: ["本網站使用Google AdSense、A8.net等第三方廣告服務。"] },
      { heading: "存取分析", texts: ["本網站使用Google Analytics。"] },
      { heading: "連結", texts: ["本網站所有頁面均可自由連結，但請勿在框架內顯示。"] },
    ],
  },
  cn: {
    title: "使用条款",
    summary: "使用东京夜景导航时，关于著作权·免责声明·Cookie·链接等规则。",
    description: "东京夜景导航的使用条款。",
    sections: [
      { heading: "著作权", texts: ["本网站刊载的照片·图片·文章的著作权归运营者所有。禁止未经授权的转载·复制·加工。", "照片非免费素材，商业使用需付费。"] },
      { heading: "免责声明", texts: ["虽尽力提供准确信息，但营业时间·费用等请在官方网站确认。", "对因本网站信息造成的事故·纠纷概不负责。"] },
      { heading: "Cookie使用", texts: ["本网站为广告投放及访问分析使用Cookie。"] },
      { heading: "广告", texts: ["本网站使用Google AdSense、A8.net等第三方广告服务。"] },
      { heading: "访问分析", texts: ["本网站使用Google Analytics。"] },
      { heading: "链接", texts: ["本网站所有页面均可自由链接，但请勿在框架内显示。"] },
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
