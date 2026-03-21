import Link from "next/link";
import { Menu } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import DevAdminLink from "./DevAdminLink";

export default function Header() {
  return (
    <header className="bg-[#28292b] text-white">
      <div className="max-w-[960px] mx-auto px-4 flex items-center justify-between h-[60px]">
        <HeaderLogo />

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              ホーム
            </Link>
            <Link
              href="/category/tower"
              className="hover:opacity-80 transition-opacity"
            >
              展望台
            </Link>
            <Link
              href="/category/bridge"
              className="hover:opacity-80 transition-opacity"
            >
              橋
            </Link>
            <Link
              href="/category/park"
              className="hover:opacity-80 transition-opacity"
            >
              公園
            </Link>
            <Link
              href="/category/event"
              className="hover:opacity-80 transition-opacity"
            >
              イベント
            </Link>
            <Link
              href="/time-lapse/"
              className="hover:opacity-80 transition-opacity"
            >
              映像集
            </Link>
            <Link
              href="/about"
              className="hover:opacity-80 transition-opacity"
            >
              運営者情報
            </Link>
          </nav>

          {/* 言語スイッチャー等が portal でここに描画される */}
          <div id="header-trailing" />
          <DevAdminLink />
          <button
            aria-label="メニュー"
            className="p-2 md:hidden hover:opacity-80 transition-opacity"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
