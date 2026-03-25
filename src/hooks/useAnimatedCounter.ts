import { useState, useEffect } from "react";

/**
 * Counts from 0 up to `target` over `duration` ms using requestAnimationFrame.
 * Re-runs whenever `target` changes (e.g. when a calendar day is selected).
 */
export function useAnimatedCounter(target: number, duration = 500): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId: number;
    const start = performance.now();

    function raf(now: number) {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * t));
      if (t < 1) {
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return value;
}
