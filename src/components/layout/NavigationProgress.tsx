"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

let activeProgressInstanceId: number | null = null;
let nextProgressInstanceId = 1;

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [isPrimaryInstance, setIsPrimaryInstance] = useState(false);
  const currentUrl = `${pathname}${searchParams.size ? `?${searchParams.toString()}` : ""}`;
  const prevUrl = useRef(currentUrl);
  const instanceIdRef = useRef<number | null>(null);
  const isPopStateRef = useRef(false);

  useEffect(() => {
    const instanceId = nextProgressInstanceId++;
    instanceIdRef.current = instanceId;

    // Root layouts can overlap briefly during route transitions, so only the
    // first mounted progress component should control the global loading bar.
    if (activeProgressInstanceId == null) {
      activeProgressInstanceId = instanceId;
      setIsPrimaryInstance(true);
    }

    return () => {
      if (activeProgressInstanceId === instanceId) {
        activeProgressInstanceId = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isPrimaryInstance) return;
    const handler = () => { isPopStateRef.current = true; };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, [isPrimaryInstance]);

  useEffect(() => {
    if (!isPrimaryInstance) return;

    if (currentUrl !== prevUrl.current) {
      prevUrl.current = currentUrl;
      // 戻る/進む（popstate）はスクロールを維持、前向き遷移のみトップへ
      if (!isPopStateRef.current) {
        const scrollToTop = () => {
          // AdSense や各モーダルが body に残したスクロールロックを強制解除してから scrollTo する。
          // position:fixed 中は window.scrollY=0 のため scrollTo(0,0) が no-op になり、
          // fixed 解除後にブラウザが元のスクロール位置を復元して中段から描画が始まる問題を防ぐ。
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.top = "";
          document.body.style.width = "";
          window.scrollTo(0, 0);
        };

        scrollToTop();

        const raf1 = window.requestAnimationFrame(scrollToTop);
        let raf2Inner: number | null = null;
        const raf2 = window.requestAnimationFrame(() => {
          raf2Inner = window.requestAnimationFrame(scrollToTop);
        });
        const timeoutId = window.setTimeout(scrollToTop, 250);
        const handleVisibilityChange = () => {
          if (document.visibilityState === "visible") {
            scrollToTop();
          }
        };

        // { once: true } は使わない — 広告を閉じるまで何度でも再発火させる必要がある。
        // 広告は数秒〜十数秒表示されうるため、クリーンアップは15秒後に設定する。
        document.addEventListener("visibilitychange", handleVisibilityChange);

        const cleanupScrollReset = () => {
          window.cancelAnimationFrame(raf1);
          window.cancelAnimationFrame(raf2);
          if (raf2Inner !== null) window.cancelAnimationFrame(raf2Inner);
          window.clearTimeout(timeoutId);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        };

        const cleanupId = window.setTimeout(cleanupScrollReset, 15000);
        const cleanup = () => {
          window.clearTimeout(cleanupId);
          cleanupScrollReset();
        };

        isPopStateRef.current = false;
        const frame = window.requestAnimationFrame(() => {
          setLoading(false);
        });

        return () => {
          cleanup();
          window.cancelAnimationFrame(frame);
        };
      }
      isPopStateRef.current = false;
      const frame = window.requestAnimationFrame(() => {
        setLoading(false);
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [currentUrl, isPrimaryInstance]);

  useEffect(() => {
    if (!isPrimaryInstance) return;

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;
      if (
        anchor.hasAttribute("download") ||
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("#") ||
        href === pathname
      )
        return;
      setLoading(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isPrimaryInstance, pathname]);

  if (!isPrimaryInstance || !loading) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9999,
        background: "var(--color-primary)",
        animation: "nav-progress 1.4s ease-in-out forwards",
      }}
    />
  );
}
