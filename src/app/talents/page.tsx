import { Star, Zap, ArrowDownUp } from "lucide-react";

export default function TalentsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#050505] text-white overflow-x-hidden pt-32 pb-20 min-h-screen relative">
      
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(168,85,247,0.15),transparent)] pointer-events-none" />
      
      {/* Badge */}
      <div className="flex items-center justify-center mb-8 relative z-10" data-animate="fade-down">
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 bg-[#0a0a0a]/50 rounded-full text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Elite Talent
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center flex flex-col items-center relative z-10 mb-24 px-4">
        <h1 
          className="font-black italic uppercase leading-[0.85] tracking-tighter" 
          style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(5rem, 16vw, 13rem)" }}
        >
          <span className="block text-white" data-animate="slide-up">TOP</span>
          <span 
            className="block mt-2" 
            data-animate="slide-up" 
            data-delay="100"
            style={{
              background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.8) 40%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              paddingRight: "0.1em" // prevent clipping of italic text
            }}
          >
            CREATORS.
          </span>
        </h1>
      </div>

      {/* Creator Hub Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div 
          className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          data-animate="fade-up"
          data-delay="200"
        >
          {/* Left: Title */}
          <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-primary/80">
              <Star size={12} className="text-primary/80" /> Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              Creator Hub
            </h2>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            {/* Filter */}
            <button className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-6 px-6 py-4 bg-[#111] border border-white/5 hover:border-white/20 rounded-xl text-[10px] font-black tracking-widest uppercase transition-colors text-gray-300">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 
                All Categories
              </div>
              <ArrowDownUp size={14} className="text-gray-500" />
            </button>
            
            {/* Join CTA */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-black rounded-xl text-[11px] font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Zap size={14} /> Join Squad
            </button>
          </div>
        </div>

        {/* Creator Cards Grid (Placeholders matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { subs: "2.2M+", name: "Pahadi Gaming", title: "Sniper", image: "/pahadi_gaming.png" },
            { subs: "1.5M+", name: "Arrow Gaming", title: "Caster", image: "/arrow_gaming.png" },
            { subs: "3.2M+", name: "Nonstop Gaming", title: "Caster", image: "/nonstop_gaming.png" },
            { subs: "557" },
          ].map((creator, i) => (
            <div 
              key={i}
              data-animate="fade-up"
              data-delay={String((i + 3) * 100)}
              className="group relative h-64 sm:h-80 w-full bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]"
            >
              {creator.image && (
                <>
                  <img src={creator.image} alt={creator.name} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </>
              )}
              
              <div className="relative h-full p-5 flex flex-col items-start z-10">
                <div className="px-3 py-1.5 bg-[#1a1a1a]/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 mb-auto shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-sm bg-red-600 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[4px] border-l-white border-b-[3px] border-b-transparent ml-[1px]"></div>
                  </div>
                  <span className="text-[10px] font-bold text-white">{creator.subs}</span>
                </div>
                
                {creator.name ? (
                  <div className="mt-auto w-full text-left">
                    <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-1 text-white tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>{creator.name}</h3>
                    <div className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">{creator.title}</div>
                  </div>
                ) : (
                  <div className="mt-auto w-full text-center opacity-[0.03] select-none pointer-events-none">
                    <span className="text-8xl font-black uppercase tracking-tighter" style={{ fontFamily: "var(--font-montserrat)" }}>MC</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
