import type { Metadata } from "next";
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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Login page renders without sidebar
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar userEmail={user.email} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
