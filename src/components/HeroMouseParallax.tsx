"use client";

import { useRef } from "react";

type HeroMouseParallaxProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function HeroMouseParallax({ children, className, style }: HeroMouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      className={`hero-mouse-parallax ${className ?? ""}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
