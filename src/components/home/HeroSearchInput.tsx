"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import type { SuggestItem } from "@/app/api/search-suggest/route";

type Props = {
  localeSlug?: string;
};

/**
 * サジェスト overlay のみを担当する client component。
 * フォーム本体は HeroSection がサーバー側で id="hero-search" / id="hero-q" として描画する。
 * このコンポーネントはフォームの DOM に attach し、入力サジェストを portal で表示する。
 */
export default function HeroSearchInput({ localeSlug }: Props) {
  const prefix = localeSlug ? `/${localeSlug}` : "";
  const router = useRouter();

  const [suggestions, setSuggestions] = useState<SuggestItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null);

  // event handler 内でのステール closure を避けるための ref
  const routerRef = useRef(router);
  const prefixRef = useRef(prefix);
  const suggestionsRef = useRef(suggestions);
  const activeIndexRef = useRef(activeIndex);
  const openRef = useRef(open);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { routerRef.current = router; });
  useEffect(() => { prefixRef.current = prefix; });
  useEffect(() => { suggestionsRef.current = suggestions; });
  useEffect(() => { activeIndexRef.current = activeIndex; });
  useEffect(() => { openRef.current = open; });

  // open/close に合わせてネイティブ input の aria-expanded を更新
  useEffect(() => {
    const input = document.getElementById("hero-q") as HTMLInputElement | null;
    if (input) input.setAttribute("aria-expanded", String(open));
  }, [open]);

  useEffect(() => {
    const form = document.getElementById("hero-search") as HTMLFormElement | null;
    const input = document.getElementById("hero-q") as HTMLInputElement | null;
    if (!form || !input) return;

    const updateRect = () => {
      const r = form.getBoundingClientRect();
      setDropdownRect({
        top: r.bottom + window.scrollY + 4,
        left: r.left + window.scrollX,
        width: r.width,
      });
    };

    const fetchSuggestions = async (q: string) => {
      if (q.trim().length < 1) {
        setSuggestions([]);
        setOpen(false);
        return;
      }
      try {
        const params = new URLSearchParams({ q });
        if (localeSlug) params.set("locale", localeSlug);
        const res = await fetch(`/api/search-suggest?${params}`);
        const { spots } = await res.json();
        setSuggestions(spots ?? []);
        if ((spots ?? []).length > 0) {
          updateRect();
          setOpen(true);
        } else {
          setOpen(false);
        }
        setActiveIndex(-1);
      } catch {
        setSuggestions([]);
        setOpen(false);
      }
    };

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => fetchSuggestions(val), 200);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openRef.current) return;
      const items = suggestionsRef.current;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
      } else if (e.key === "Enter") {
        const idx = activeIndexRef.current;
        if (idx >= 0 && items[idx]) {
          e.preventDefault();
          const item = items[idx];
          setOpen(false);
          setSuggestions([]);
          routerRef.current.push(`${prefixRef.current}/${item.categorySlug}/${item.slug}`);
        }
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (!form.contains(e.target as Node)) setOpen(false);
    };

    const handleSubmit = (e: SubmitEvent) => {
      setOpen(false);
      const q = input.value.trim();
      if (q) {
        e.preventDefault();
        routerRef.current.push(`${prefixRef.current}/search/?q=${encodeURIComponent(q)}`);
      }
    };

    const handleScrollResize = () => {
      if (openRef.current) updateRect();
    };

    input.addEventListener("input", handleInput);
    input.addEventListener("keydown", handleKeyDown);
    form.addEventListener("submit", handleSubmit);
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScrollResize, { passive: true });
    window.addEventListener("resize", handleScrollResize);

    return () => {
      input.removeEventListener("input", handleInput);
      input.removeEventListener("keydown", handleKeyDown);
      form.removeEventListener("submit", handleSubmit);
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []); // mount 時に一度だけ設定。可変値は ref 経由でアクセスする

  if (!open || !dropdownRect || suggestions.length === 0) return null;

  return createPortal(
    <ul
      className="hero-suggest"
      role="listbox"
      aria-label="検索候補"
      style={{
        position: "absolute",
        top: dropdownRect.top,
        left: dropdownRect.left,
        width: dropdownRect.width,
      }}
    >
      {suggestions.map((item, i) => (
        <li
          key={item.slug}
          className={`hero-suggest-item${i === activeIndex ? " hero-suggest-item--active" : ""}`}
          role="option"
          aria-selected={i === activeIndex}
          onMouseDown={() => {
            setOpen(false);
            setSuggestions([]);
            router.push(`${prefix}/${item.categorySlug}/${item.slug}`);
          }}
          onMouseEnter={() => setActiveIndex(i)}
        >
          <Search size={14} className="hero-suggest-icon" />
          {item.name}
        </li>
      ))}
    </ul>,
    document.body
  );
}
