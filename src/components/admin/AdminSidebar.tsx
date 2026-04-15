"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MapPin, FolderOpen, Tag, FileText, Newspaper, LogOut, Zap } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";

const navItems = [
  { href: "/admin", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/admin/spots", label: "スポット", icon: MapPin },
  { href: "/admin/articles", label: "記事", icon: Newspaper },
  { href: "/admin/categories", label: "カテゴリ", icon: FolderOpen },
  { href: "/admin/tags", label: "タグ", icon: Tag },
  { href: "/admin/tag-pages", label: "タグページ", icon: FileText },
  { href: "/admin/luminar-sale", label: "Luminarセール", icon: Zap },
];

type Props = {
  userEmail?: string;
};

export default function AdminSidebar({ userEmail }: Props) {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="px-5 py-4 border-b border-gray-700">
        <Link href="/admin" className="text-lg font-bold">
          nightscape 管理
        </Link>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 py-4 border-t border-gray-700">
        {userEmail && (
          <p className="text-xs text-gray-400 mb-2 truncate">{userEmail}</p>
        )}
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <LogOut size={16} />
            ログアウト
          </button>
        </form>
      </div>
    </aside>
  );
}
