"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Trophy, Users,
  Megaphone, Target,
  Globe, Star, Award, Gamepad2
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParallaxBg from "@/components/ParallaxBg";
import MagneticLink from "@/components/MagneticLink";
import ScrollReveal, {
  TextSplitReveal,
  ScrollParallax,
  ScrollScale,
} from "@/components/ScrollReveal";

/* ─── BRAND LOGOS (inline) ─── */
const GamehokLogo = () => (
  <div className="flex items-center gap-[6px] opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H12.3846V10.7692H22C22 5.2464 17.5228 2 12 2ZM4.46154 12C4.46154 7.8369 7.8369 4.46154 12 4.46154C16.1631 4.46154 19.5385 7.8369 19.5385 12C19.5385 16.1631 16.1631 19.5385 12 19.5385C7.8369 19.5385 4.46154 16.1631 4.46154 12Z" fill="#15803d" />
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.9213 2.54018 15.716 3.47359 17.2343" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    <span className="font-bold text-[26px] tracking-tight text-[#d4d4d4]" style={{ fontFamily: 'var(--font-inter)' }}>AMEHOK</span>
  </div>
);

const EspotzLogo = () => (
  <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16667 22.75L18.3333 13L9.16667 3.25" stroke="url(#paint_esp2)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22L4.5 12M6.5 24.5L16.5 14.5" stroke="url(#paint_esp2)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint_esp2" x1="4.5" y1="24.5" x2="18.3333" y2="3.25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
    <span className="font-bold text-[22px] tracking-tighter text-[#e5e5e5] lowercase" style={{ fontFamily: 'var(--font-montserrat)' }}>espotz</span>
  </div>
);

const CgLogo = () => (
  <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9L5 16L12 23V18H21L12 11V9Z" fill="#9ca3af" />
      <path d="M19 5L29 15L19 25L19 21H10L20 11L19 5Z" stroke="#9ca3af" strokeWidth="2" strokeLinejoin="miter" />
    </svg>
    <div className="flex flex-col items-start leading-[0.8] justify-center text-[#e5e5e5]">
      <span className="text-[10px] font-black tracking-[0.1em] text-gray-400 uppercase">Community</span>
      <span className="text-[22px] font-black tracking-widest uppercase">Gaming</span>
    </div>
  </div>
);

const BattleXoLogo = () => (
  <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer">
    <span className="font-black text-[24px] tracking-[0.05em] text-white uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>BATTLE</span>
    <span className="font-black text-[26px] ml-1 uppercase" style={{
      fontFamily: 'var(--font-montserrat)',
      background: 'linear-gradient(to right, #ffffff 50%, #f97316 50%, #ef4444 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}>X</span>
    <span className="font-black text-[26px] text-white uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>O</span>
  </div>
);

/* ─── PARTNER LOGOS (inline) ─── */
const GodlikeLogo = () => (
  <a href="https://www.instagram.com/godlike.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 group">
    <div className="relative h-16 w-16 mb-1">
      <Image 
        src="/GODL-removebg-preview.png" 
        alt="Godlike Esports" 
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
      />
    </div>
    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-primary uppercase">Godlike</span>
  </a>
);

const K9Logo = () => (
  <a href="https://www.instagram.com/k9squad_esports/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 group">
    <div className="relative h-16 w-16 mb-1">
      <Image 
        src="/K9-removebg-preview.png" 
        alt="K9 Esports" 
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
      />
    </div>
    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-primary uppercase">K9 Squad</span>
  </a>
);

const RntxLogo = () => (
  <a href="https://www.instagram.com/rntxspark/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 group">
    <div className="relative h-16 w-32 mb-1">
      <Image 
        src="/RNTX-removebg-preview.png" 
        alt="RNTX" 
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      />
    </div>
    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-primary uppercase">RNTX</span>
  </a>
);

const S8ulLogo = () => (
  <a href="https://www.instagram.com/s8ul.esports/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 group">
    <div className="relative h-16 w-16 mb-1">
      <Image 
        src="/s8ul-removebg-preview.png" 
        alt="S8UL" 
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
      />
    </div>
    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-primary uppercase">S8UL</span>
  </a>
);

const GdrLogo = () => (
  <a href="https://www.instagram.com/godsreign.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 group">
    <div className="relative h-16 w-16 mb-1">
      <Image 
        src="/GDR-removebg-preview.png" 
        alt="GDR PROS" 
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      />
    </div>
    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-primary uppercase">GDR PROS</span>
  </a>
);

/* ─── SCROLL PROGRESS BAR ─── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full transition-none"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #7c3aed, #a855f7, #d946ef, #ec4899)",
          boxShadow: "0 0 12px rgba(168,85,247,0.6), 0 0 24px rgba(168,85,247,0.3)",
        }}
      />
    </div>
  );
}

/* ─── SCROLL-DRIVEN TEXT MARQUEE ─── */
function ScrollMarquee({ text, direction = "left" }: { text: string; direction?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
        const offset = progress * 300 * (direction === "left" ? -1 : 1);
        el.style.transform = `translateX(${offset}px)`;

        // Move the shine sweep across text based on scroll
        const shinePos = progress * 200 - 50; // -50% to 150%
        textEl.style.backgroundPosition = `${shinePos}% center`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [direction]);

  return (
    <div ref={ref} className="whitespace-nowrap relative" style={{ willChange: "transform" }}>
      {/* Glow layer behind text */}
      <span
        className="absolute inset-0 text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-montserrat)",
          WebkitTextStroke: "3px rgba(168,85,247,0.3)",
          WebkitTextFillColor: "transparent",
          filter: "blur(15px)",
        }}
      >
        {text}
      </span>
      {/* Main text with shine gradient */}
      <span
        ref={textRef}
        className="relative text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter select-none"
        style={{
          fontFamily: "var(--font-montserrat)",
          WebkitTextStroke: "1.5px rgba(168,85,247,0.5)",
          background: "linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.1) 35%, rgba(168,85,247,0.6) 48%, rgba(255,255,255,0.6) 50%, rgba(168,85,247,0.6) 52%, rgba(168,85,247,0.1) 65%, rgba(168,85,247,0.1) 100%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background-position 0.05s linear",
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ─── SECTION DIVIDER WITH SCROLL-DRIVEN ANIMATION ─── */
function ScrollDivider() {
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
        const progress = Math.max(0, Math.min(1, 1 - rect.top / (vh * 0.8)));
        el.style.setProperty("--progress", `${progress}`);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative py-4 overflow-hidden">
      <div
        className="h-px mx-auto transition-none"
        style={{
          width: "calc(var(--progress, 0) * 80%)",
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
          boxShadow: "0 0 20px rgba(168,85,247,0.2)",
        }}
      />
    </div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function ScrollAnimations() {
  return (
    <>
      <ScrollProgressBar />

      {/* ── SCROLL MARQUEE TRANSITION ── */}
      <section className="relative z-10 py-12 overflow-hidden border-b border-white/5 opacity-80">
        <ScrollMarquee text="R4VENEOUS • ESPORTS • AGENCY • R4VENEOUS • ESPORTS • AGENCY • " direction="left" />
      </section>

      {/* ─── KEY METRICS GRID ─── */}
      <section className="relative z-10 py-24 px-4 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Section header with text split reveal */}
          <ScrollReveal variant="fade-up" className="text-center mb-16">
            <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-3">The Numbers</p>
            <h2
              className="text-4xl sm:text-6xl font-black uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <TextSplitReveal text="PROVEN RESULTS" className="text-white" staggerMs={40} />
            </h2>
          </ScrollReveal>

          <ScrollDivider />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
            {[
              { icon: Trophy, value: 300, suffix: "+", label: "Tournaments Hosted", delay: 0 },
              { icon: Users, value: 50, suffix: "K+", label: "Trusted Active Gamers", delay: 80 },
              { icon: Star, value: 90, prefix: "₹", suffix: "L+", label: "Prize Pool Distributed", delay: 160 },
              { icon: Target, value: 14, suffix: "M+", label: "Event Impressions", delay: 240 },
              { icon: Globe, value: 155, suffix: "+", label: "College Communities", delay: 320 },
              { icon: Megaphone, value: 150, suffix: "+", label: "Brand Inquiries", delay: 400 },
            ].map((stat, i) => (
              <ScrollReveal key={i} variant="scale-bounce" delay={stat.delay}>
                <div className="flex flex-col items-center text-center p-5 bg-white/3 border border-white/8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC TEXT REVEAL SECTION ── */}
      <section className="relative z-10 py-32 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollParallax speed={-0.15}>
            <ScrollReveal variant="blur-in" duration={1200}>
              <p className="text-[10px] font-black tracking-[0.5em] text-primary/60 uppercase mb-8">What We Do</p>
            </ScrollReveal>
          </ScrollParallax>

          <ScrollReveal variant="clip-reveal" duration={1400}>
            <h2
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-white block">WE BUILD</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ECOSYSTEMS
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} distance={40}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              From grassroots scrims to national broadcast productions — R4VENEOUS owns every layer of the competitive stack.
            </p>
          </ScrollReveal>
        </div>

        {/* Background scroll-driven marquee */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] overflow-hidden">
          <ScrollMarquee text="ECOSYSTEMS • NOT EVENTS • ECOSYSTEMS • NOT EVENTS • " direction="right" />
        </div>
      </section>

      {/* ── SCROLL MARQUEE TRANSITION (reverse) ── */}
      <section className="relative z-10 py-8 overflow-hidden border-y border-white/5">
        <ScrollMarquee text="TOURNAMENTS • BROADCASTS • PRODUCTION • TALENT • BRANDS • COMMUNITY • " direction="right" />
      </section>

      {/* ─── SOCIAL REACH ─── */}
      <section className="relative z-10 py-16 px-4 sm:px-6 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fade-down">
            <p className="text-center text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-10">Community Reach</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { icon: "🎮", platform: "Discord", value: 15000, suffix: "+", label: "Active Players", delay: 0 },
              { icon: "📸", platform: "Instagram", value: 12000, suffix: "+", label: "Esports Audience", delay: 100 },
              { icon: "▶️", platform: "YouTube", value: 6000, suffix: "+", label: "Competitive Viewers", delay: 200 },
              { icon: "💬", platform: "WhatsApp", value: 8000, suffix: "+", label: "Community Members", delay: 300 },
              { icon: "🌐", platform: "Overall", value: 50000, suffix: "+", label: "Combined Reach", delay: 400 },
            ].map((s, i) => (
              <ScrollReveal key={i} variant="flip-up" delay={s.delay} duration={800}>
                <div className="flex flex-col items-center text-center p-5 bg-white/3 border border-white/8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</span>
                  <span className="text-2xl sm:text-3xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</span>
                  <span className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">{s.platform}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-white/5 overflow-hidden bg-[#050505]">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="w-full mx-auto text-center">
          <ScrollReveal variant="zoom-in">
            <div className="flex items-center justify-center gap-4 mb-20 px-4">
              <div className="h-px w-10 bg-primary/20" />
              <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Brands We Work With</p>
              <div className="h-px w-10 bg-primary/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="animate-infinite-scroll flex items-center justify-center space-x-24 md:space-x-32 pr-24 md:pr-32">
                {/* Sequence 1 */}
                <GamehokLogo />
                <EspotzLogo />
                <CgLogo />
                <BattleXoLogo />

                {/* Sequence 2 for seamless loop */}
                <GamehokLogo />
                <EspotzLogo />
                <CgLogo />
                <BattleXoLogo />

                {/* Sequence 3 for safety on ultrawide monitors */}
                <GamehokLogo />
                <EspotzLogo />
                <CgLogo />
                <BattleXoLogo />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── GDR PROS STATS ─── */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fade-down" className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">GDR PROS SOCIAL REACH</span>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ScrollReveal variant="scale-bounce" delay={0}>
              <div className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-all duration-500" />
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 text-[#5865F2]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-5xl font-black italic text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                    <AnimatedCounter value={1000} suffix="+" />
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-[11px] font-black tracking-[0.2em] text-white uppercase mb-1">Active Players</p>
                  <p className="text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase">Discord</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale-bounce" delay={200}>
              <div className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] group-hover:bg-red-500/20 transition-all duration-500" />
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 text-[#FF0000]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-5xl font-black italic text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                    <AnimatedCounter value={4000} suffix="+" />
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-[11px] font-black tracking-[0.2em] text-white uppercase mb-1">Subscribers</p>
                  <p className="text-[10px] font-bold tracking-[0.4em] text-red-500/60 uppercase">YouTube</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-white/5 overflow-hidden bg-white/[0.01]">
        <div className="w-full mx-auto text-center">
          <ScrollReveal variant="zoom-in">
            <div className="flex items-center justify-center gap-4 mb-20 px-4">
              <div className="h-px w-10 bg-primary/20" />
              <p className="text-[12px] font-black tracking-[0.5em] text-white uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>Our Partners</p>
              <div className="h-px w-10 bg-primary/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="animate-infinite-scroll flex items-center justify-center space-x-24 md:space-x-32 pr-24 md:pr-32" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
                {/* Sequence 1 */}
                <RntxLogo />
                <S8ulLogo />
                <GodlikeLogo />
                <K9Logo />
                <GdrLogo />

                {/* Sequence 2 for seamless loop */}
                <RntxLogo />
                <S8ulLogo />
                <GodlikeLogo />
                <K9Logo />
                <GdrLogo />

                {/* Sequence 3 for safety on ultrawide monitors */}
                <RntxLogo />
                <S8ulLogo />
                <GodlikeLogo />
                <K9Logo />
                <GdrLogo />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="relative z-10 py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxBg speed={0.25}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_65%)]" />
          </ParallaxBg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <ScrollReveal variant="fade-down">
            <p className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-6">Start Your Legacy</p>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={100}>
            <h2
              className="text-5xl sm:text-7xl font-black uppercase mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <TextSplitReveal text="Forging Legends" className="block text-white" staggerMs={35} delay={200} />
              <br />
              <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
                <TextSplitReveal text="In The Digital Crucible" staggerMs={25} delay={600} />
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="blur-in" delay={400}>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              R4VENEOUS is not just a team — it&apos;s a standard of excellence. Your journey to the podium begins here.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="zoom-in" delay={500}>
            <MagneticLink
              href="mailto:contact@r4veneous.gg"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-14 py-5 font-black tracking-widest uppercase transition-all hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] text-lg"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)" }}
            >
              Talk To Us <ArrowRight size={20} />
            </MagneticLink>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={600}>
            <div className="flex items-center justify-center gap-4 mt-8 text-xs font-bold tracking-widest text-gray-600 uppercase">
              <span>#BeTheMaster</span>
              <span className="text-white/10">·</span>
              <span>#R4VENEOUSEsports</span>
              <span className="text-white/10">·</span>
              <span>#ForgeLegends</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
