"use client";

import { useEffect, useRef } from "react";

interface ParallaxBgProps {
  /** Speed multiplier: positive = slower (moves up less), negative = opposite direction */
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Wraps children and applies a smooth parallax translateY on scroll.
 * Uses `requestAnimationFrame` for 60fps performance.
 */
export default function ParallaxBg({ speed = 0.3, className = "", children }: ParallaxBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastScrollY = window.scrollY;

    const update = () => {
      if (!el) return;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const offsetFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      const translateY = -(offsetFromCenter * speed);
      el.style.transform = `translateY(${translateY.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) < 1) return;
      lastScrollY = window.scrollY;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    update(); // initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-layer ${className}`}>
      {children}
    </div>
  );
}
