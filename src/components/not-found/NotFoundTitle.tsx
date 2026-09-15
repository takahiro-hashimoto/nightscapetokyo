"use client";

import { useEffect } from "react";

/**
 * 404 のタブタイトルを保つ。
 * ページ描画中の notFound() では Next が本文の空の予備の HTML（__next_error__）を返し、
 * 404 の中身はブラウザ側で描き直される。その描き直しでタイトルがレイアウトの既定値
 * （サイト名だけ）に戻ってしまうため、描画後に 404 のタイトルを入れ直す。
 */
export default function NotFoundTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
