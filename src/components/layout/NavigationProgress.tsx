"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "loading" | "completing" | "fading";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [width, setWidth] = useState(0);

  const prevPathname = useRef(pathname);
  const isLoading = useRef(false);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  };

  // クリックで内部リンクへの遷移を検知
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // 外部リンク・ハッシュ・別タブは除外
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank"
      ) return;

      try {
        const url = new URL(href, window.location.origin);
        // 同一ページ（パスもクエリも同じ）は除外
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      } catch {
        return;
      }

      clear();
      isLoading.current = true;
      setPhase("loading");
      setWidth(0);

      // 0→75%: ゆっくり伸びて「処理中」感を演出
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setWidth(75);
        });
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // pathname 変化でナビゲーション完了を検知
  useEffect(() => {
    if (!isLoading.current || pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    isLoading.current = false;
    clear();

    // 100%まで一気に伸ばしてからフェードアウト
    setPhase("completing");
    setWidth(100);

    timerRef.current = setTimeout(() => {
      setPhase("fading");
      timerRef.current = setTimeout(() => {
        setPhase("idle");
        setWidth(0);
      }, 350);
    }, 220);
  }, [pathname]);

  if (phase === "idle") return null;

  const transition =
    phase === "loading"
      ? "width 2.5s cubic-bezier(0.08, 0.04, 0, 1)"
      : phase === "completing"
      ? "width 0.22s ease-out"
      : "opacity 0.35s ease";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${width}%`,
        background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: phase === "fading" ? 0 : 1,
        transition,
        boxShadow: phase !== "fading" ? "0 0 8px var(--color-accent)" : "none",
      }}
    />
  );
}
