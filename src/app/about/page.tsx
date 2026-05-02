import Image from "next/image";
import { Globe, Shield, Sparkles, Video } from "lucide-react";
import ScrollReveal, { TextSplitReveal, ScrollScale } from "@/components/ScrollReveal";

const STORY_CARDS = [
  {
    eyebrow: "Our Story",
    title: "How We Started",
    desc: "Founded in 2024, R4VENOUS ESPORTS emerged to build a stronger and more professional ecosystem for competitive players in India.",
  },
  {
    eyebrow: "Mission",
    title: "The Goal",
    desc: "To scout, train, and elevate the next generation of esports champions while creating a sustainable pathway for talent.",
  },
  {
    eyebrow: "Vision",
    title: "Our Future",
    desc: "To become India's most complete esports infrastructure, bridging raw talent with world-class competition and content.",
  },
];

const PILLARS = [
  {
    icon: Shield,
    tag: "Elite",
    title: "Elite\nScouting",
    desc: "Finding the next generation of champions.",
  },
  {
    icon: Sparkles,
    tag: "Pro",
    title: "Pro Training",
    desc: "World-class bootcamps and coaching systems.",
  },
  {
    icon: Globe,
    tag: "Global",
    title: "Global Reach",
    desc: "Our vision spans across borders.",
  },
  {
    icon: Video,
    tag: "Content",
    title: "Content Mastery",
    desc: "Elite storytelling and production.",
  },
];

const STATS = [
  { value: "2024", label: "Founded" },
  { value: "380+", label: "Championships" },
  { value: "10000+", label: "Roster Size" },
  { value: "12", label: "Team Members" },
];

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#050505] text-white overflow-x-hidden relative">
      <section className="relative pt-32 pb-24 px-4 sm:px-6 border-b border-white/5 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,85,247,0.15),transparent)]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
          <ScrollReveal variant="fade-down" className="w-fit mx-auto mb-10 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg text-[10px] font-black tracking-[0.3em] uppercase text-gray-300">
            <span className="text-primary mr-2 animate-pulse">●</span> Our Story
          </ScrollReveal>

          <h1
            className="text-center font-black italic uppercase leading-[0.86] tracking-tighter w-full"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(4.5rem, 12vw, 10rem)" }}
          >
            <ScrollReveal variant="slide-up">
              <span className="block text-white">Born To</span>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={150}>
              <span className="block mt-2" style={{
                background: "linear-gradient(180deg, #ffffff 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "0.1em"
              }}>
                Win
              </span>
            </ScrollReveal>
          </h1>

          <ScrollReveal variant="scale-bounce" delay={300} duration={1000} className="w-full mt-20 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-5 border border-white/10 rounded-3xl overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              {/* Highlight bar at top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="p-6 sm:p-8 col-span-2 lg:col-span-1 lg:border-r border-b lg:border-b-0 border-white/10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-white/[0.02]">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/80 mb-2">// Team</p>
                <p className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Our Team
                </p>
              </div>

              {STATS.map((item, i) => (
                <div key={item.label} className="p-6 sm:p-8 border-r last:border-r-0 border-b lg:border-b-0 border-white/10 flex flex-col justify-center items-center text-center group hover:bg-white/[0.03] transition-colors duration-300">
                  <span className="text-3xl sm:text-4xl font-black italic mb-2 text-white group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {item.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-black tracking-[0.25em] uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ─── FOUNDER SECTION ─── */}
          <div className="mt-24 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Card (Left/Center) */}
            <ScrollReveal variant="fade-right" delay={200}>
              <div className="relative group cursor-pointer">
                {/* Card Container */}
                <div className="relative w-[340px] h-[480px] rounded-[2rem] overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]">
                  
                  {/* Image Layer */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/ESP_TARUN-removebg-preview.png"
                      alt="Founder"
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(0,0,0,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                    <div className="flex items-center gap-3 mb-1 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="w-8 h-[2px] bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      <p className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">Founder</p>
                    </div>
                    
                    <h3 
                      className="text-5xl font-black italic uppercase text-white tracking-tighter leading-[0.8] mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" 
                      style={{ fontFamily: "var(--font-montserrat)", textShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
                    >
                      TARUN
                    </h3>
                    
                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                  </div>
                  <div className="absolute -inset-20 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                </div>
                <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 group-hover:border-primary/10 transition-all duration-700" />
              </div>
            </ScrollReveal>

            {/* Quote (Right/Below) */}
            <ScrollReveal variant="fade-left" delay={400} className="max-w-md lg:max-w-xl">
              <div className="relative p-10 lg:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-primary/10 transition-all duration-700" />
                
                {/* Quote Icon */}
                <div className="mb-8">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-primary/30 group-hover:text-primary/50 transition-colors duration-500">
                    <path d="M0 17.1429V0H15.5556V17.1429H7.77778L11.6667 30H3.88889L0 17.1429ZM24.4444 17.1429V0H40V17.1429H32.2222L36.1111 30H28.3333L24.4444 17.1429Z" fill="currentColor"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="space-y-6">
                  {[
                    "Life will never be free of problems, but dreams give those problems a purpose.",
                    "Every obstacle is a test of how badly you want what you started.",
                    "Keep going when it’s uncomfortable, when it’s uncertain, when it’s slow.",
                    "That’s how ordinary paths turn into extraordinary journeys."
                  ].map((line, idx) => (
                    <p 
                      key={idx} 
                      className="text-lg lg:text-xl font-medium leading-relaxed text-gray-300 italic"
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Signature/Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-1">Founder Manifesto</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">R4VENEOUS ESPORTS</span>
                  </div>
                  <div className="h-px w-12 bg-white/10" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STORY_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} variant="fade-up" delay={i * 150} duration={800}>
                <article className="h-full p-8 border border-white/10 rounded-3xl bg-gradient-to-b from-[#0f0f13] to-[#050505] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-500" />
                  <p className="text-[10px] font-black tracking-[0.35em] uppercase text-primary mb-6 relative z-10">{card.eyebrow}</p>
                  <h2 className="text-3xl font-black uppercase italic leading-[0.95] mb-6 text-white relative z-10" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {card.title}
                  </h2>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-medium relative z-10">{card.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((item, i) => (
              <ScrollReveal key={item.title} variant="flip-up" delay={i * 100} duration={700}>
                <article className="group h-full p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f15] hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 bg-black flex items-center justify-center mb-10 group-hover:bg-primary group-hover:scale-110 group-hover:border-primary transition-all duration-500 shadow-xl">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors duration-500" />
                  </div>

                  <p className="relative z-10 text-[10px] font-black tracking-[0.35em] uppercase text-primary/80 mb-5">// {item.tag}</p>
                  <h3 className="relative z-10 text-3xl sm:text-4xl font-black uppercase italic leading-[0.85] mb-5 whitespace-pre-line text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
