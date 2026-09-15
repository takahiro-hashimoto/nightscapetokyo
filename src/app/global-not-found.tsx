// どのルートにも一致しない URL（/luminar/xxx/ や4階層以上など）用の 404。
// レイアウトを通らないので、グローバル CSS・ヘッダー・フッターをここで読み込む。
// ルートの外なのでどの言語の URL かは分からず、日本語で出す。
// （next.config.ts の experimental.globalNotFound で有効化）
import "./globals.css";
import "./ui-components.css";
import type { Metadata } from "next";
import BaseLayout from "@/components/layout/BaseLayout";
import RootShell from "@/components/layout/RootShell";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import Footer from "@/components/layout/Footer";
import NotFoundView from "@/components/not-found/NotFoundView";
import { SITE_URL } from "@/lib/types";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ページが見つかりませんでした | 東京夜景ナビ",
  robots: { index: false, follow: true },
  icons: { icon: "/faviconV2.png", apple: "/faviconV2.png" },
};

export default function GlobalNotFound() {
  return (
    <BaseLayout lang="ja">
      <RootShell>
        <HeaderWrapper locale={null} />
        <main className="flex-1">
          <NotFoundView locale={null} />
        </main>
        <Footer locale={null} />
      </RootShell>
    </BaseLayout>
  );
}
