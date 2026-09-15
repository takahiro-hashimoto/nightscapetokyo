import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import NotFoundView from "@/components/not-found/NotFoundView";

export const metadata: Metadata = {
  // 見出し（labels の notFound.title）と同じ文言にそろえる
  title: "ページが見つかりませんでした",
  robots: { index: false, follow: true },
};

// (ja)/(public) 配下（タグ・記事・Luminar など）の notFound() を受ける。
// PublicLayout はヘッダーしか持たず、main とフッターは (root) などの子レイアウト側にある。
// この境界はそれらの外側なので、main とフッターをここで出す
export default function NotFound() {
  return (
    <>
      <main className="flex-1">
        <NotFoundView locale={null} />
      </main>
      <Footer locale={null} />
    </>
  );
}
