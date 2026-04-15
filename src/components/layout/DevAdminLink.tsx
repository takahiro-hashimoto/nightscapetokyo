import Link from "next/link";
import { Settings } from "lucide-react";

/**
 * 開発環境でのみヘッダーに表示するAdmin リンク
 */
export default function DevAdminLink() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Link
      href="/admin"
      className="dev-admin-link"
      title="Admin"
    >
      <Settings size={16} />
    </Link>
  );
}
