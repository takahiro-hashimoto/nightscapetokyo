import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

/**
 * 管理画面（ログインページ以外）の認証ゲート。
 *
 * 以前は admin/layout.tsx が兼ねていたが、そこは /admin/login も配下に持つため
 * 未ログイン時に `return <>{children}</>` としており、
 * /admin/spots などに直接アクセスすると管理画面本体が描画される状態だった。
 * 実際に未ログインを弾いていたのは proxy.ts（middleware）だけで、
 * 「二重防御」というコメントに反して一段しか無かった。
 *
 * ログインページを (protected) の外に出したことで、このレイアウトは
 * 無条件に管理者を要求できる。レイアウトはサーバー側で必ず実行されるため、
 * proxy.ts が無くてもここで確実に止まる。
 */
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await requireAdmin();
  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar userEmail={admin.email} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
