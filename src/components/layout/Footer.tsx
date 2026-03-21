"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALL_LOCALE_SLUGS, SITE_NAMES } from "@/lib/types";

const SNS_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@nightscape-tokyo?sub_confirmation=1", icon: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "X", href: "https://twitter.com/takahiro__1202", icon: "M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.2H4.3l13.3 17.4z" },
  { name: "Instagram", href: "https://www.instagram.com/nightscape.tokyo/", icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "TikTok", href: "https://www.tiktok.com/@nightscape_tokyo", icon: "M19.3 5.8a5.2 5.2 0 0 1-3.1-2.7A5.1 5.1 0 0 1 15.6 1h-3.8v14.4a2.9 2.9 0 0 1-2.9 2.7 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V7.5a6.7 6.7 0 0 0-.9-.1A6.8 6.8 0 0 0 2 14.2a6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8V8.4a9 9 0 0 0 5.4 1.8V6.4a5.2 5.2 0 0 1-1.7-.6z" },
  { name: "Pinterest", href: "https://www.pinterest.jp/0gsnym2k9zr0vps04rfjjkkb4fwsu4/", icon: "M12 0C5.4 0 0 5.4 0 12c0 4.7 2.7 8.7 6.6 10.7-.1-.8-.2-2 0-2.9.2-.8 1.2-5.2 1.2-5.2s-.3-.6-.3-1.6c0-1.5.9-2.6 1.9-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.8-4.2-4.2-4.2-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3-.1.3-.3 1-.3 1.2-.1.2-.2.2-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.8-.8 1.9-1.2 2.5.9.3 1.8.4 2.8.4 6.6 0 12-5.4 12-12S18.6 0 12 0z" },
  { name: "Lemon8", href: "https://www.lemon8-app.com/nightscape_tokyo", icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 3.5a2.2 2.2 0 0 0-2.2 2.2c0 .5.2 1 .5 1.4A4.5 4.5 0 0 0 7.5 13 4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-2.8-4.2c.3-.3.5-.8.5-1.3A2.2 2.2 0 0 0 12 5.5z" },
];

type FooterLabels = {
  description: string;
  home: string;
  about: string;
  privacy: string;
  contact: string;
};

const FOOTER_LABELS: Record<string, FooterLabels> = {
  ja: {
    description: "デート・撮影などにおすすめの東京の夜景スポットを定番から穴場まで紹介",
    home: "ホーム",
    about: "サイトについて",
    privacy: "プライバシーポリシー",
    contact: "お問い合わせ",
  },
  en: {
    description: "Discover Tokyo's best night view spots — from popular landmarks to hidden gems. Perfect for dates and photography.",
    home: "Home",
    about: "About",
    privacy: "Privacy Policy",
    contact: "Contact",
  },
  ko: {
    description: "데이트·촬영 등에 추천하는 도쿄의 야경 명소를 인기 스폿부터 숨은 명소까지 소개합니다.",
    home: "홈",
    about: "사이트 소개",
    privacy: "개인정보 처리방침",
    contact: "문의하기",
  },
  tw: {
    description: "從經典到私房景點，為您介紹適合約會、攝影的東京夜景景點。",
    home: "首頁",
    about: "關於本站",
    privacy: "隱私權政策",
    contact: "聯絡我們",
  },
  cn: {
    description: "从经典到小众景点，为您介绍适合约会、摄影的东京夜景景点。",
    home: "首页",
    about: "关于本站",
    privacy: "隐私政策",
    contact: "联系我们",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(firstSegment) ? firstSegment : null;
  const labels = FOOTER_LABELS[locale ?? "ja"];
  const homeHref = locale ? `/${locale}` : "/";

  return (
    <footer className="bg-[var(--color-header-bg)] mt-0">
      <div className="max-w-[960px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 text-sm text-[rgba(255,255,255,0.6)]">
          <div>
            {locale ? (
              <Link href={homeHref} className="text-base font-bold text-white block mb-2">
                {SITE_NAMES[locale]}
              </Link>
            ) : (
              <Link href="/" className="block mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="東京夜景ナビ"
                  height={28}
                  style={{ height: 28, width: "auto" }}
                />
              </Link>
            )}
            <p className="text-xs leading-relaxed">
              {labels.description}
            </p>
            <div className="flex items-center gap-3 mt-3">
              {SNS_LINKS.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sns.name}
                  className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={sns.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link href={homeHref} className="hover:underline text-[rgba(255,255,255,0.7)] hover:text-white">{labels.home}</Link>
            <Link href="/about" className="hover:underline text-[rgba(255,255,255,0.7)] hover:text-white">{labels.about}</Link>
            <Link href="/privacy" className="hover:underline text-[rgba(255,255,255,0.7)] hover:text-white">{labels.privacy}</Link>
            <Link href="/contact" className="hover:underline text-[rgba(255,255,255,0.7)] hover:text-white">{labels.contact}</Link>
          </nav>
        </div>
        <p className="text-center text-xs text-[rgba(255,255,255,0.4)] mt-8">
          &copy; {new Date().getFullYear()} nightscape.tokyo
        </p>
      </div>
    </footer>
  );
}
