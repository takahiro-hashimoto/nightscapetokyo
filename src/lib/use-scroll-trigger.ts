import { useEffect } from "react";

/**
 * スクロール / タッチ時にコールバックを一度だけ呼び出す。
 * window.load 後 fallbackDelayMs が経過してもまだ発火していなければ自動実行する。
 */
export function useScrollTrigger(
  callback: () => void,
  deps: unknown[],
  fallbackDelayMs = 2000
) {
  useEffect(() => {
    let fired = false;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const fire = () => {
      if (fired) return;
      fired = true;
      if (fallbackTimer !== null) clearTimeout(fallbackTimer);
      callback();
    };

    const scheduleFallback = () => {
      fallbackTimer = setTimeout(fire, fallbackDelayMs);
    };

    window.addEventListener("scroll", fire, { once: true, passive: true });
    window.addEventListener("touchstart", fire, { once: true, passive: true });

    if (document.readyState === "complete") {
      scheduleFallback();
    } else {
      window.addEventListener("load", scheduleFallback, { once: true });
    }

    return () => {
      if (fallbackTimer !== null) clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", fire);
      window.removeEventListener("touchstart", fire);
      window.removeEventListener("load", scheduleFallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
