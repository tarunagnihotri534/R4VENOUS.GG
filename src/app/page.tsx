import Link from "next/link";
import Image from "next/image";
import ParallaxBg from "@/components/ParallaxBg";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  ArrowRight, Trophy, Users,
  Megaphone, Target,
  Globe, Star, Award, Gamepad2
} from "lucide-react";
import AnimatedAgencyText from "@/components/AnimatedAgencyText";
import MagneticLink from "@/components/MagneticLink";
import HeroMouseParallax from "@/components/HeroMouseParallax";

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
      <path d="M9.16667 22.75L18.3333 13L9.16667 3.25" stroke="url(#paint_esp)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22L4.5 12M6.5 24.5L16.5 14.5" stroke="url(#paint_esp)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint_esp" x1="4.5" y1="24.5" x2="18.3333" y2="3.25" gradientUnits="userSpaceOnUse">
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
    <span className="font-black text-[24px] tracking-[0.05em] text-white uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
      BATTLE
    </span>
    <span
      className="font-black text-[26px] ml-1 uppercase"
      style={{
        fontFamily: 'var(--font-montserrat)',
        background: 'linear-gradient(to right, #ffffff 50%, #f97316 50%, #ef4444 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      X
    </span>
    <span className="font-black text-[26px] text-white uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
      O
    </span>
  </div>
);

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full overflow-x-hidden bg-black text-white">

      {/* ── PARALLAX AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ParallaxBg speed={0.2} className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[220px]" />
        </ParallaxBg>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 border-b border-white/5 overflow-hidden">
        {/* radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(168,85,247,0.18),transparent)] pointer-events-none" />

        {/* Badge — loads with CSS animation (no observer needed) */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-[10px] font-black tracking-[0.3em] uppercase mb-10 hero-fade-down backdrop-blur-sm shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          India&apos;s Premier Esports Agency
        </div>

        {/* Headline */}
        <HeroMouseParallax className="hero-fade-up flex flex-col items-center w-full max-w-[1400px] mb-8" style={{ animationDelay: "0.1s" }}>
          <AnimatedAgencyText />
          <h1
            className="font-black italic uppercase tracking-tighter leading-[0.9] text-[#dedede] mt-1"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(2rem, 6.5vw, 6.5rem)", textShadow: "6px 6px 0px rgba(0,0,0,1)" }}
          >
            MANAGEMENT & PRODUCTION
          </h1>
        </HeroMouseParallax>

        {/* Subtitle */}
        <p
          className="hero-fade-up text-[10px] sm:text-[11px] text-gray-500 font-bold max-w-4xl mx-auto mb-16 leading-loose tracking-[0.3em] uppercase"
          style={{ animationDelay: "0.22s" }}
        >
          INDIA'S PREMIER ESPORTS MANAGEMENT & PRODUCTION AGENCY <span className="text-primary mx-2">•</span> NATIONAL<br className="hidden sm:block" />
          TOURNAMENT INFRASTRUCTURE <span className="text-primary mx-2">•</span> HIGH-OCTANE LIVE BROADCASTS
        </p>

        {/* CTAs */}
        <div className="hero-fade-up flex flex-col sm:flex-row items-center gap-5" style={{ animationDelay: "0.34s" }}>
          <MagneticLink
            href="#contact"
            className="group flex items-center justify-center gap-3 bg-[#b158ff] hover:bg-[#a04de6] text-black px-10 py-5 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] w-full sm:w-auto"
          >
            <Award size={16} /> Partner With Us
          </MagneticLink>
          <MagneticLink
            href="/events"
            className="group flex items-center justify-center gap-3 bg-[#0a0a0a] border border-white/10 hover:bg-white/5 hover:border-white/20 text-white px-10 py-5 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
          >
            <Gamepad2 size={16} /> Explore Events
          </MagneticLink>
        </div>
      </section>




      {/* ─── KEY METRICS GRID ─── */}
      <section className="relative z-10 py-24 px-4 sm:px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" data-stagger data-stagger-step="85">
            {[
              { icon: Trophy, value: 300, suffix: "+", label: "Tournaments Hosted", delay: "0" },
              { icon: Users, value: 50, suffix: "K+", label: "Trusted Active Gamers", delay: "100" },
              { icon: Star, value: 90, prefix: "₹", suffix: "L+", label: "Prize Pool Distributed", delay: "200" },
              { icon: Target, value: 14, suffix: "M+", label: "Event Impressions", delay: "300" },
              { icon: Globe, value: 155, suffix: "+", label: "College Communities", delay: "400" },
              { icon: Megaphone, value: 150, suffix: "+", label: "Brand Inquiries", delay: "500" },
            ].map((stat, i) => (
              <div
                key={i}
                data-animate="zoom-in"
                data-delay={stat.delay}
                className="flex flex-col items-center text-center p-5 bg-white/3 border border-white/8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL REACH ─── */}
      <section className="relative z-10 py-16 px-4 sm:px-6 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <p data-animate="fade-up" className="text-center text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-10">Community Reach</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" data-stagger data-stagger-step="75">
            {[
              { icon: "🎮", platform: "Discord", value: 15000, suffix: "+", label: "Active Players", delay: "0" },
              { icon: "📸", platform: "Instagram", value: 12000, suffix: "+", label: "Esports Audience", delay: "100" },
              { icon: "▶️", platform: "YouTube", value: 6000, suffix: "+", label: "Competitive Viewers", delay: "200" },
              { icon: "💬", platform: "WhatsApp", value: 8000, suffix: "+", label: "Community Members", delay: "300" },
              { icon: "🌐", platform: "Overall", value: 50000, suffix: "+", label: "Combined Reach", delay: "400" },
            ].map((s, i) => (
              <div
                key={i}
                data-animate="fade-up"
                data-delay={s.delay}
                className="flex flex-col items-center text-center p-5 bg-white/3 border border-white/8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</span>
                <span className="text-2xl sm:text-3xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</span>
                <span className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">{s.platform}</span>
              </div>
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
          <div className="flex items-center justify-center gap-4 mb-20 px-4">
            <div className="h-px w-10 bg-primary/20" />
            <p data-animate="fade-in" className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Brands We Work With</p>
            <div className="h-px w-10 bg-primary/20" />
          </div>

          {/* Marquee Wrapper */}
          <div data-animate="fade-in" data-delay="100" className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
          <p data-animate="fade-down" className="text-xs font-black tracking-[0.3em] text-primary uppercase mb-6">Start Your Legacy</p>
          <h2
            data-animate="slide-up"
            data-delay="100"
            className="text-5xl sm:text-7xl font-black uppercase mb-6 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Forging Legends<br />
            <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">In The Digital Crucible</span>
          </h2>
          <p data-animate="fade-up" data-delay="250" className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            R4VENEOUS is not just a team — it&apos;s a standard of excellence. Your journey to the podium begins here.
          </p>
          <MagneticLink
            data-animate="zoom-in"
            data-delay="400"
            href="mailto:contact@r4veneous.gg"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-14 py-5 font-black tracking-widest uppercase transition-all hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] text-lg"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)" }}
          >
            Talk To Us <ArrowRight size={20} />
          </MagneticLink>
          <div data-animate="fade-up" data-delay="550" className="flex items-center justify-center gap-4 mt-8 text-xs font-bold tracking-widest text-gray-600 uppercase">
            <span>#BeTheMaster</span>
            <span className="text-white/10">·</span>
            <span>#R4VENEOUSEsports</span>
            <span className="text-white/10">·</span>
            <span>#ForgeLegends</span>
          </div>
        </div>
      </section>
    </div>
  );
}
