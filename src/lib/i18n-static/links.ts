import type { StaticPageLabels } from "./types";

export const LINKS_LABELS: Record<string, StaticPageLabels & { thSite: string; thDesc: string }> = {
  ja: { title: "リンク集", summary: "当サイトと相互リンクしていただいているサイトや、おすすめのサイトをご紹介します。", description: "東京夜景ナビのリンク集です。", thSite: "サイト名", thDesc: "概要" },
  en: { title: "Links", summary: "Sites that have exchanged links with us, and other recommended sites.", description: "Link collection for Tokyo Night View Guide.", thSite: "Site Name", thDesc: "Description" },
  ko: { title: "링크 모음", summary: "상호 링크 사이트 및 추천 사이트를 소개합니다.", description: "도쿄 야경 네비 링크 모음입니다.", thSite: "사이트명", thDesc: "개요" },
  tw: { title: "連結集", summary: "與本站互相連結的網站及推薦網站。", description: "東京夜景導覽連結集。", thSite: "網站名稱", thDesc: "概要" },
  cn: { title: "链接集", summary: "与本站互相链接的网站及推荐网站。", description: "东京夜景导航链接集。", thSite: "网站名称", thDesc: "概要" },
};
