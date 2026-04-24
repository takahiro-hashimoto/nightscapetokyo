"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

type Props = {
  placeholder?: string;
  ariaLabel?: string;
  buttonLabel?: string;
  localeSlug?: string;
};

export default function HeroSearchInput({ placeholder, ariaLabel, buttonLabel, localeSlug }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const q = query.trim();
    if (q) {
      const prefix = localeSlug ? `/${localeSlug}` : "";
      router.push(`${prefix}/search/?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="hero-search">
      <Search size={18} className="hero-search-icon" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        placeholder={placeholder ?? "エリアやキーワードで夜景スポットを検索"}
        className="hero-search-input"
        aria-label={ariaLabel ?? "夜景スポットを検索"}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="hero-search-btn"
        aria-label={buttonLabel ?? "検索"}
      >
        <Search size={18} />
      </button>
    </div>
  );
}
