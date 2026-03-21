"use client";

import Link from "next/link";
import { Pencil } from "lucide-react";

type Props = {
  spotId?: string;
  href?: string;
};

/**
 * 開発環境でのみ記事ページに表示する編集リンク（フローティングボタン）
 * spotId を渡すと /admin/spots/{id}/edit へ、href を渡すと任意のパスへ遷移
 */
export default function DevEditLink({ spotId, href }: Props) {
  if (process.env.NODE_ENV !== "development") return null;

  const target = href ?? (spotId ? `/admin/spots/${spotId}/edit` : null);
  if (!target) return null;

  return (
    <Link
      href={target}
      className="dev-edit-link"
      title="この記事を編集"
    >
      <Pencil size={16} />
    </Link>
  );
}
