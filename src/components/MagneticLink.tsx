"use client";

import Link from "next/link";
import { useRef } from "react";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  ["data-animate"]?: string;
  ["data-delay"]?: string;
};

export default function MagneticLink({
  href,
  className,
  children,
  style,
  ...rest
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const moveX = Math.max(-10, Math.min(10, offsetX * 0.16));
    const moveY = Math.max(-8, Math.min(8, offsetY * 0.16));
    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={`${className ?? ""} magnetic-link`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      {...rest}
    >
      {children}
    </Link>
  );
}
