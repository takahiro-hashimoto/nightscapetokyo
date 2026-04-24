import { Search } from "lucide-react";

type Props = {
  placeholder?: string;
  ariaLabel?: string;
  buttonLabel?: string;
  localeSlug?: string;
};

export default function HeroSearchInput({ placeholder, ariaLabel, buttonLabel, localeSlug }: Props) {
  const prefix = localeSlug ? `/${localeSlug}` : "";

  return (
    <form className="hero-search" action={`${prefix}/search/`} method="get" role="search">
      <Search size={18} className="hero-search-icon" />
      <input
        type="text"
        name="q"
        placeholder={placeholder ?? "エリアやキーワードで夜景スポットを検索"}
        className="hero-search-input"
        aria-label={ariaLabel ?? "夜景スポットを検索"}
      />
      <button
        type="submit"
        className="hero-search-btn"
        aria-label={buttonLabel ?? "検索"}
      >
        <Search size={18} />
      </button>
    </form>
  );
}
