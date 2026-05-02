"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── TYPES ─── */
type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-left"
  | "slide-up"
  | "clip-reveal"
  | "blur-in"
  | "rotate-in"
  | "scale-bounce"
  | "glitch-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  stagger?: number; // for parent wrappers
  as?: keyof HTMLElementTagNameMap;
}

/* ─── COMPONENT ─── */
export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 900,
  distance = 60,
  className = "",
  once = true,
  threshold = 0.15,
  as: Tag = "div" as any,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: "transform, opacity, filter, clip-path",
    };

    switch (variant) {
      case "fade-up":
        return { ...base, transform: `translateY(${distance}px)` };
      case "fade-down":
        return { ...base, transform: `translateY(-${distance}px)` };
      case "fade-left":
        return { ...base, transform: `translateX(-${distance}px)` };
      case "fade-right":
        return { ...base, transform: `translateX(${distance}px)` };
      case "zoom-in":
        return { ...base, transform: "scale(0.75)" };
      case "zoom-out":
        return { ...base, transform: "scale(1.2)" };
      case "flip-up":
        return { ...base, transform: "perspective(1000px) rotateX(25deg)", transformOrigin: "bottom center" };
      case "flip-left":
        return { ...base, transform: "perspective(1000px) rotateY(-20deg)", transformOrigin: "right center" };
      case "slide-up":
        return { ...base, transform: `translateY(${distance * 1.5}px)`, filter: "blur(8px)" };
      case "clip-reveal":
        return { ...base, clipPath: "inset(0 100% 0 0)", opacity: 1 };
      case "blur-in":
        return { ...base, filter: "blur(20px)", transform: "scale(0.95)" };
      case "rotate-in":
        return { ...base, transform: "rotate(-8deg) translateY(40px) scale(0.9)" };
      case "scale-bounce":
        return {
          ...base,
          transform: "scale(0.6)",
          transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
        };
      case "glitch-in":
        return { ...base, transform: "translateX(-15px) skewX(-5deg)", filter: "blur(4px)" };
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => {
    return {
      opacity: 1,
      transform: "none",
      filter: "none",
      clipPath: variant === "clip-reveal" ? "inset(0 0% 0 0)" : undefined,
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: "auto",
    };
  };

  const TagName = Tag as any;

  return (
    <TagName
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </TagName>
  );
}

/* ─── TEXT SPLIT REVEAL — letter-by-letter animation ─── */
export function TextSplitReveal({
  text,
  className = "",
  delay = 0,
  staggerMs = 30,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
  as?: keyof HTMLElementTagNameMap;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const TagName = Tag as any;

  return (
    <TagName ref={ref} className={className} style={{ display: "inline-block" }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) rotateX(0)" : "translateY(100%) rotateX(-80deg)",
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * staggerMs}ms`,
            transformOrigin: "bottom center",
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </TagName>
  );
}

/* ─── PARALLAX ON SCROLL — moves element based on scroll position ─── */
export function ScrollParallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ─── SCALE ON SCROLL — scales element as it enters/exits viewport ─── */
export function ScrollScale({
  children,
  className = "",
  maxScale = 1,
  minScale = 0.85,
}: {
  children: React.ReactNode;
  className?: string;
  maxScale?: number;
  minScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when top of element hits bottom of viewport, 1 when centered
        const progress = Math.max(0, Math.min(1, 1 - (rect.top / vh)));
        // Scale peaks at center, dips at edges
        const centered = 1 - Math.abs(progress - 0.5) * 2;
        const scale = minScale + (maxScale - minScale) * centered;
        el.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [maxScale, minScale]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", transition: "transform 0.1s linear" }}>
      {children}
    </div>
  );
}

/* ─── HORIZONTAL SCROLL SECTION — scroll-jacked horizontal movement ─── */
export function HorizontalScroll({
  children,
  className = "",
  scrollMultiplier = 1,
}: {
  children: React.ReactNode;
  className?: string;
  scrollMultiplier?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const wrapperHeight = wrapper.offsetHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / (wrapperHeight - window.innerHeight)));
        const scrollWidth = inner.scrollWidth - window.innerWidth;
        inner.style.transform = `translateX(-${progress * scrollWidth * scrollMultiplier}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollMultiplier]);

  return (
    <div ref={wrapperRef} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div ref={innerRef} className="flex gap-8" style={{ willChange: "transform" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── MAGNETIC CURSOR — element follows cursor within proximity ─── */
export function MagneticElement({
  children,
  className = "",
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
