import type { Metadata } from "next";
import NotFoundView, { notFoundTitle } from "@/components/not-found/NotFoundView";

// notFound() をこのレイアウト（ヘッダー・フッター・lang 付き）の内側で受ける。
// 以前は app/not-found.tsx しか無く、どのルートレイアウトよりも外で描かれるため、
// 本文が空の HTML（<html id="__next_error__">）が返っていた
export async function generateMetadata(): Promise<Metadata> {
  return { title: await notFoundTitle(), robots: { index: false, follow: true } };
}

export default function NotFound() {
  return <NotFoundView />;
}
