import type { Metadata } from "next";
import NotFoundView, { notFoundTitle } from "@/components/not-found/NotFoundView";

// notFound() をこのレイアウト（ヘッダー・フッター・lang 付き）の内側で受ける。
// 言語は next/root-params の [category] から NotFoundView が判定する
export async function generateMetadata(): Promise<Metadata> {
  return { title: await notFoundTitle(), robots: { index: false, follow: true } };
}

export default function NotFound() {
  return <NotFoundView />;
}
