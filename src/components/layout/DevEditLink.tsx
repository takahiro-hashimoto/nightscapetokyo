"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

type Props = {
  spotId?: string;
  href?: string;
};

export default function DevEditLink({ spotId, href }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || process.env.NODE_ENV !== "development") return null;

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
