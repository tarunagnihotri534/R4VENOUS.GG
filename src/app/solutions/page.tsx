import { Zap, Film, Star, Target, Search, Briefcase } from "lucide-react";
import { ArrowRight } from "lucide-react";

// Add specific requested solutions from the screenshots
const SOLUTIONS = [
  { 
    icon: Briefcase, 
    tag: "Esports", 
    title: "Bootcamp Coordination", 
    desc: "Global bootcamp logistics including facility rentals, hardware provisioning, and high-performance environment setup.",
    features: ["Travel Logistics", "High-End PCs", "Catering & Diet", "Optimal Training Environment"]
  },
  { 
    icon: Zap, 
    tag: "Esports", 
    title: "Mental Wellness Node", 
    desc: "Holistic support systems focused on player mental health, burnout prevention, and peak cognitive performance.",
    features: ["Mental Coaching", "Stress Management", "Sleep Optimization", "Sustainability Focus"]
  },
  { 
    icon: Film, 
    tag: "Content", 
    title: "Cinematic Production", 
    desc: "High-end visual storytelling including player documentaries, hype reels, and cinematic tournament recaps.",
    features: ["4K Cinematography", "Documentary Series", "Hype Trailers", "Color Grading"]
  },
  { 
    icon: Star, 
    tag: "Esports", 
    title: "Roster Management", 
    desc: "End-to-end professional management for elite gaming rosters covering contracts, salary negotiations, and legal representation.",
    features: ["Player Contracts", "Salary Management", "Legal Representation", "Career Roadmap"]
  },
  { 
    icon: Target, 
    tag: "Esports", 
    title: "Performance & Coaching", 
    desc: "Specialized performance tracking and coaching systems to push players beyond their limits in high-stakes environments.",
    features: ["VOD Review Systems", "Performance Metrics", "Coach Placement", "Tactical Drills"]
  },
  { 
    icon: Search, 
    tag: "Esports", 
    title: "Scouting & Talent ID", 
    desc: "Deep-data scouting to identify upcoming prodigies and build championship-winning rosters from the ground up.",
    features: ["Data Analytics", "Grassroots Discovery", "Tryout Coordination", "Roster Architecture"]
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#050505] text-white overflow-x-hidden border-t border-white/5">

      {/* Hero */}
      <div className="relative py-24 px-6 text-center border-b border-white/5 bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(168,85,247,0.15),transparent)] pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black tracking-[0.25em] uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Full-Stack Esports Services
        </div>
        <div className="relative">
          <div
            className="block font-black uppercase italic leading-[0.85] select-none"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(4rem, 14vw, 10rem)", color: "#ffffff" }}
          >
            Our
          </div>
          <div
            className="block font-black uppercase italic leading-[0.85] select-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(4rem, 14vw, 10rem)",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Solutions
          </div>
        </div>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-8 leading-relaxed">
          Comprehensive esports infrastructure built for the South Asian market and beyond.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">
          {SOLUTIONS.map((s, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={String((i % 3) * 100)}
              className="group relative flex flex-col bg-[#0b0b0b] border border-white/[0.04] hover:border-primary/80 transition-all duration-500 overflow-hidden rounded-[28px] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]"
            >
              {/* Subtle top-right curve blob */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.015] group-hover:bg-primary/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-[40%] transition-colors duration-700 pointer-events-none" />
              
              <div className="p-9 flex flex-col flex-1 relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors duration-500" strokeWidth={1.8} />
                  </div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-white/20 group-hover:text-primary/70 transition-colors duration-500 uppercase italic">
                    // {s.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[26px] font-black uppercase italic mb-6 leading-[1.05] bg-gradient-to-br from-primary to-secondary bg-clip-text text-white group-hover:text-transparent transition-colors duration-500"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.1em] leading-loose mb-10 flex-1 pr-4">
                  {s.desc}
                </p>
                
                {/* Features list */}
                <ul className="space-y-4 mb-12">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-4 text-[10px] font-black tracking-widest text-[#777] uppercase group-hover:text-white/80 transition-colors duration-500">
                      <span className="w-[5px] h-[5px] bg-white/10 group-hover:bg-primary rounded-full flex-shrink-0 transition-colors duration-500 shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                
                {/* Inquire Now Button */}
                <button className="w-full flex items-center justify-center gap-3 bg-[#111] border border-white/[0.04] text-gray-400 py-4 rounded-2xl text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 group-hover:bg-primary group-hover:text-black group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  Inquire Now
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-black transition-colors duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
