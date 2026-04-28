"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

let activeProgressInstanceId: number | null = null;
let nextProgressInstanceId = 1;

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isPrimaryInstance, setIsPrimaryInstance] = useState(false);
  const prevPathname = useRef(pathname);
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

    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      // 戻る/進む（popstate）はスクロールを維持、前向き遷移のみトップへ
      if (!isPopStateRef.current) {
        window.scrollTo(0, 0);
      }
      isPopStateRef.current = false;
      const frame = window.requestAnimationFrame(() => {
        setLoading(false);
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [isPrimaryInstance, pathname]);

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
