"use client";

import { useState } from "react";
import { geocodeAddress } from "@/lib/geocoder";

const SEARCH_ERRORS = {
  empty: "施設名・住所・郵便番号を入力してください",
  rate_limit: "次のリクエストを行うのに10秒待ってください。マーカーをドラッグ&ドロップで移動させることも可能です",
  session_limit: "同じセッションでのリクエストは15回までです。",
  not_found: "施設名・住所・郵便番号を入力してください",
  default: "検索中にエラーが発生しました。時間をおいて再度お試しください。",
} as const;

interface LocationSearchProps {
  onLocationFound: (lat: number, lng: number) => void;
  onSearchComplete?: () => void;
}

export default function LocationSearch({
  onLocationFound,
  onSearchComplete,
}: LocationSearchProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (loading) return;
    if (!query.trim()) {
      alert(SEARCH_ERRORS.empty);
      return;
    }

    setLoading(true);
    const result = await geocodeAddress(query.trim());
    setLoading(false);

    if (result.success) {
      onLocationFound(result.result.lat, result.result.lng);
      onSearchComplete?.();
    } else {
      const msg = SEARCH_ERRORS[result.error as keyof typeof SEARCH_ERRORS] ?? SEARCH_ERRORS.default;
      alert(msg);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="sim-search">
      <input
        type="text"
        className="sim-search__input"
        placeholder="施設名・住所・郵便番号などを入力"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="sim-search__button"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "..." : "移動"}
      </button>
    </div>
  );
}
