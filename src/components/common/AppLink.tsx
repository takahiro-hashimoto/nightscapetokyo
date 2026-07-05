import NextLink from "next/link";
import type { ComponentProps } from "react";

/*
 * next/link のラッパー。prefetch をデフォルト無効にする。
 *
 * Next.js の Link はビューポートに入った瞬間に RSC ペイロードを先読みするため、
 * スポット一覧・記事カードが並ぶページでは 1PV あたり数十件の Edge Request /
 * Fast Data Transfer が発生し、Vercel の課金を押し上げる。実際にクリックされる
 * リンクはごく一部なので、サイト全体で prefetch はオプトイン方式にする。
 * 先読みが必要な箇所では <Link prefetch> と明示すること。
 */
export default function Link({
  prefetch = false,
  ...props
}: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
