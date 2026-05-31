import { useEffect, useRef } from "react";

/**
 * Applies a subtle motion-blur effect to a target element while the user is
 * actively scrolling, and removes it once scrolling stops.
 */
export function useScrollBlur(targetRef: React.RefObject<HTMLElement | null>) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const onScroll = () => {
      el.style.willChange = "filter";
      el.style.filter = "blur(1.2px)";
      el.style.transition = "filter 0.08s linear";

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        el.style.filter = "blur(0px)";
        el.style.transition = "filter 0.28s ease";
        timerRef.current = null;
      }, 90);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [targetRef]);
}
