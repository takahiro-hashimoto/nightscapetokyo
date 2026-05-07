import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { createAuthClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: {
    default: "管理画面",
    template: "%s | 管理画面",
  },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Not logged in: render children (login form) without sidebar
  if (!user) {
    return <>{children}</>;
  }

  // Logged in but not admin: show 403
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
