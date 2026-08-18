import type { Metadata } from "next";

/**
 * 管理画面共通のメタデータのみ。認証は (protected)/layout.tsx が担当する。
 * ここで認証すると /admin/login まで弾いてしまうため、ゲートは置かない。
 */
export const metadata: Metadata = {
  title: {
    default: "管理画面",
    template: "%s | 管理画面",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
