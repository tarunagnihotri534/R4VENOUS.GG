import { Globe, Shield, Sparkles, Video } from "lucide-react";

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
    desc: "To become India&apos;s most complete esports infrastructure, bridging raw talent with world-class competition and content.",
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
    <div className="flex-1 flex flex-col bg-black text-white overflow-x-hidden">
      <section className="relative pt-32 pb-16 px-4 sm:px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_50%_at_50%_-8%,rgba(168,85,247,0.2),transparent)]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.18) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div data-animate="fade-down" className="w-fit mx-auto mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.3em] uppercase text-gray-300">
            <span className="text-primary mr-2">●</span> Our Story
          </div>

          <h1
            data-animate="slide-up"
            className="text-center font-black italic uppercase leading-[0.86] tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(3.2rem, 10vw, 8rem)" }}
          >
            Born To
            <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#cfcfcf_55%,#7d7d7d_100%)] bg-clip-text text-transparent">Win</span>
          </h1>

          <div data-animate="fade-up" data-delay="150" className="mt-10 grid grid-cols-1 sm:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-[#070707]/80 backdrop-blur-md">
            <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-[9px] font-black tracking-[0.3em] uppercase text-primary mb-2">// Team</p>
              <p className="text-2xl sm:text-3xl font-black uppercase italic" style={{ fontFamily: "var(--font-montserrat)" }}>
                Our Team
              </p>
            </div>
            {STATS.map((item) => (
              <div key={item.label} className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/10 flex flex-col justify-center">
                <span className="text-2xl font-black italic mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {item.value}
                </span>
                <span className="text-[9px] text-gray-500 font-black tracking-[0.25em] uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" data-stagger data-stagger-step="90">
            {STORY_CARDS.map((card) => (
              <article key={card.title} data-animate="fade-up" className="min-h-[260px] p-7 border border-white/10 rounded-3xl bg-gradient-to-b from-[#0c0c12] to-[#08080b]">
                <p className="text-[9px] font-black tracking-[0.35em] uppercase text-primary mb-5">{card.eyebrow}</p>
                <h2 className="text-3xl font-black uppercase italic leading-[0.95] mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {card.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-stagger data-stagger-step="80">
            {PILLARS.map((item) => (
              <article
                key={item.title}
                data-animate="zoom-in"
                className="group p-6 rounded-3xl border border-white/10 bg-[#09090d] hover:bg-[#0c0c12] hover:border-primary/40 transition-all duration-400"
              >
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <p className="text-[9px] font-black tracking-[0.35em] uppercase text-primary/80 mb-4">// {item.tag}</p>
                <h3 className="text-4xl font-black uppercase italic leading-[0.85] mb-5 whitespace-pre-line" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {item.title}
                </h3>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gray-500 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
