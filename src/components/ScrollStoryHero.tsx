"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Star, Target, Globe, Megaphone } from "lucide-react";

/* ─── chapters ──────────────────────────────────────────────────────────── */
const CHAPTERS = [
  {
    eyebrow: "India's Premier Esports Agency",
    line1: "Esports Agency",
    line2: "Management",
    line3: "& Production",
    sub: "R4VENEOUS ESPORTS reshapes competitive gaming across India through relentless execution and high-octane experiences.",
    bg1: "rgba(168,85,247,0.22)",
    bg2: "transparent",
    pos: "50% -10%",
    accent: "#a855f7",
    showStats: false,
    showCta: false,
  },
  {
    eyebrow: "The Numbers Don't Lie",
    line1: "Proven",
    line2: "Results",
    line3: "At Scale",
    sub: "300+ tournaments. 50K+ active players. ₹90L+ in prize pools distributed. India's most trusted esports infrastructure.",
    bg1: "rgba(168,85,247,0.16)",
    bg2: "rgba(236,72,153,0.12)",
    pos: "80% 50%",
    accent: "#ec4899",
    showStats: true,
    showCta: false,
  },
  {
    eyebrow: "Full-Stack Esports Solutions",
    line1: "We Build",
    line2: "Ecosystems",
    line3: "Not Events",
    sub: "From grassroots scrims to national broadcast productions — R4VENEOUS owns every layer of the competitive stack.",
    bg1: "rgba(236,72,153,0.14)",
    bg2: "rgba(168,85,247,0.14)",
    pos: "20% 80%",
    accent: "#a855f7",
    showStats: false,
    showCta: false,
  },
  {
    eyebrow: "Your Move",
    line1: "Forge Your",
    line2: "Legacy",
    line3: "Now",
    sub: "The podium doesn't wait. Partner with R4VENEOUS and step into a new era of competitive gaming.",
    bg1: "rgba(168,85,247,0.28)",
    bg2: "rgba(236,72,153,0.14)",
    pos: "50% 50%",
    accent: "#a855f7",
    showStats: false,
    showCta: true,
  },
];

const STATS = [
  { icon: Trophy,   value: "300+",  label: "Tournaments" },
  { icon: Users,    value: "50K+",  label: "Gamers" },
  { icon: Star,     value: "₹90L+", label: "Prize Pool" },
  { icon: Target,   value: "14M+",  label: "Impressions" },
  { icon: Globe,    value: "155+",  label: "Colleges" },
  { icon: Megaphone,value: "150+",  label: "Brand Inquiries" },
];

/* smoothstep — maps t ∈ [edge0,edge1] → [0,1] with ease */
const smoothstep = (edge0: number, edge1: number, t: number) => {
  const x = Math.max(0, Math.min(1, (t - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
};

export default function ScrollStoryHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0→1 across entire sticky scroll

  const onScroll = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const { top, height } = el.getBoundingClientRect();
    const range = height - window.innerHeight;
    const scrolled = -top;
    setProgress(Math.min(Math.max(scrolled / range, 0), 1));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  /* ── map progress → which two chapters to cross-fade ── */
  const N = CHAPTERS.length;                    // 4
  const TRANSITIONS = N - 1;                    // 3
  const raw = progress * TRANSITIONS;           // 0 → 3
  const ci  = Math.min(Math.floor(raw), TRANSITIONS - 1); // 0 | 1 | 2  (current chapter index)
  const cf  = raw - ci;                         // 0→1 within this transition

  const currChapter = CHAPTERS[ci];
  const nextChapter = CHAPTERS[ci + 1] ?? currChapter;

  /* ── cross-fade: curr fades OUT in last 40%, next fades IN in first 40% ──
     They OVERLAP so combined visibility never drops below 0.6             */
  const currOpacity = 1 - smoothstep(0.55, 1, cf);    // 1 → 0 (55%–100%)
  const nextOpacity =     smoothstep(0, 0.45, cf);     // 0 → 1 (0%–45%)

  /* ── background cross-fade ── */
  const bgBlend = smoothstep(0.2, 0.8, cf);

  /* ── global fade in on very first load ── */
  const globalOpacity = smoothstep(0, 0.04, progress === 0 ? 1 : progress);

  /* ── stats — visible during chapter 1 transition zone ── */
  const statsVisible = progress > 0.22 && progress < 0.55;
  const statsOpacity = smoothstep(0.22, 0.30, progress) * (1 - smoothstep(0.48, 0.55, progress));

  /* ── cta — visible during chapter 3 ── */
  const ctaOpacity = smoothstep(0.78, 0.92, progress);

  /* ── scroll progress line across top ── */
  const lineColor = ci >= 2 ? "#ec4899" : currChapter.accent;

  return (
    <div ref={wrapperRef} style={{ height: "320vh" }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* ── BACKGROUNDS ── */}
        <div className="absolute inset-0 bg-black z-0" />
        {/* current bg */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 75% 60% at ${currChapter.pos}, ${currChapter.bg1}, ${currChapter.bg2 || "transparent"})`,
            opacity: 1 - bgBlend,
          }}
        />
        {/* next bg */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 75% 60% at ${nextChapter.pos}, ${nextChapter.bg1}, ${nextChapter.bg2 || "transparent"})`,
            opacity: bgBlend,
          }}
        />
        {/* subtle grid */}
        <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* ── CONTENT AREA ── */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center"
          style={{ opacity: globalOpacity }}
        >
          {/* ── CURRENT CHAPTER TEXT ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ opacity: currOpacity, transform: `translateY(${-cf * 18}px)` }}>
            <ChapterContent chapter={currChapter} />
          </div>

          {/* ── NEXT CHAPTER TEXT ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ opacity: nextOpacity, transform: `translateY(${(1 - cf) * 18}px)` }}>
            <ChapterContent chapter={nextChapter} />
          </div>

          {/* spacer so parent has height */}
          <div className="invisible pointer-events-none">
            <ChapterContent chapter={currChapter} />
          </div>

          {/* ── STATS (chapter 1) ── */}
          <div
            className="absolute bottom-24 left-6 right-6 z-20"
            style={{ opacity: statsOpacity, transform: `translateY(${(1 - statsOpacity) * 12}px)`, pointerEvents: statsVisible ? "auto" : "none" }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-3xl mx-auto">
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col items-center p-3 border border-white/8 bg-black/40 backdrop-blur-sm">
                  <s.icon className="w-4 h-4 text-purple-400 mb-1.5" />
                  <span className="text-lg font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{s.value}</span>
                  <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA (chapter 3) ── */}
          <div
            className="absolute bottom-16 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-4 z-20"
            style={{ opacity: ctaOpacity, transform: `translateY(${(1 - ctaOpacity) * 16}px)`, pointerEvents: ctaOpacity > 0.5 ? "auto" : "none" }}
          >
            <Link
              href="#solutions"
              className="group flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-10 py-4 font-black tracking-widest uppercase transition-all hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 100%, 14px 100%)" }}
            >
              Be The Master <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-3 bg-white/5 border border-white/15 hover:bg-white/10 text-white px-10 py-4 font-bold tracking-widest uppercase transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 100%, 14px 100%)" }}
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* ── TOP PROGRESS BAR ── */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/5 z-30">
          <div
            className="h-full transition-none"
            style={{
              width: `${progress * 100}%`,
              background: `linear-gradient(to right, ${lineColor}, #ec4899)`,
              boxShadow: `0 0 6px ${lineColor}`,
            }}
          />
        </div>

        {/* ── CHAPTER DOTS ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          {CHAPTERS.map((ch, i) => {
            const isActive = i === ci || i === ci + 1;
            const isExact = i === Math.round(raw);
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-400"
                style={{
                  width: isExact ? "20px" : "6px",
                  height: "6px",
                  backgroundColor: isExact ? ch.accent : isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.12)",
                  boxShadow: isExact ? `0 0 6px ${ch.accent}` : "none",
                }}
              />
            );
          })}
        </div>

        {/* ── SCROLL HINT (only at start) ── */}
        <div
          className="absolute bottom-6 right-8 flex flex-col items-center gap-1 z-30 transition-opacity duration-500"
          style={{ opacity: 1 - smoothstep(0, 0.06, progress) }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
          <span className="text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        </div>
      </div>
    </div>
  );
}

/* ── Single chapter's text content ── */
function ChapterContent({ chapter }: { chapter: typeof CHAPTERS[0] }) {
  return (
    <div className="flex flex-col items-center text-center px-6 pb-32">
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 text-xs font-bold tracking-[0.25em] uppercase mb-6 backdrop-blur-sm"
        style={{ color: chapter.accent }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: chapter.accent, boxShadow: `0 0 6px ${chapter.accent}` }}
        />
        {chapter.eyebrow}
      </div>

      <h2
        className="font-black uppercase tracking-tighter leading-[0.83] mb-6 select-none"
        style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: "clamp(3rem, 9vw, 7.5rem)",
        }}
      >
        <span className="text-white block">{chapter.line1}</span>
        <span
          className="block"
          style={{
            background: `linear-gradient(135deg, ${chapter.accent} 0%, #ec4899 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {chapter.line2}
        </span>
        <span
          className="block text-[0.45em] tracking-[0.35em] mt-1"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)", WebkitTextFillColor: "transparent" }}
        >
          {chapter.line3}
        </span>
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
        {chapter.sub}
      </p>
    </div>
  );
}
