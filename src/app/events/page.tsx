import { MapPin, Trophy, Users, Calendar, Swords, Crosshair } from "lucide-react";
import { ArrowRight } from "lucide-react";

const TOURNAMENTS = [
  {
    title: "LUCKNOW SHOWDOWN 2026",
    game: "BGMI",
    location: "Ekana Stadium, Lucknow",
    prize: "₹50,000 Prize Pool",
    date: "June 15, 2026",
    desc: "The biggest LAN event in Uttar Pradesh featuring 16 invited professional teams and 4 underdog qualifiers fighting for the crown.",
    thumbnail: "/INT1.webp",
  },
  {
    title: "AWADH CLASH SERIES",
    game: "Free Fire",
    location: "Phoenix Palassio, Lucknow",
    prize: "₹25,000 Prize Pool",
    date: "July 02, 2026",
    desc: "An exclusive offline invitational showcasing the fastest emerging Free Fire squads from the central region.",
    thumbnail: "/INT2.jpg",
  },
  {
    title: "GOMTI BATTLE ARENA",
    game: "Valorant",
    location: "R4VENEOUS HQ, Lucknow",
    prize: "₹10,000 Prize Pool",
    date: "Aug 10, 2026",
    desc: "5v5 tactical shooter LAN event. Open brackets available for local PC gaming communities across Lucknow.",
    thumbnail: "/INF8.jpg",
  },
];

const SCRIMS = [
  {
    title: "T3 DAILY PRACTICE",
    game: "BGMI",
    freq: "Daily @ 6 PM IST",
    slots: "100+ Teams",
    status: "Open Registration",
    desc: "Grassroots building ground. Perfect for new rosters looking to establish synergy and practice competitive rotations.",
    thumbnail: "/INF7.jpg",
  },
  {
    title: "T1 PRACTICE SCRIMS",
    game: "BGMI",
    freq: "Weekends @ 8 PM IST",
    slots: "Top 20 Teams",
    status: "Invite & Promo Only",
    desc: "High-tier lobbies filled with semi-pro tier performers. Fast-paced action with strict competitive moderation.",
    thumbnail: "/INF6.jpg",
  },
  {
    title: "FF SURVIVAL LEAGUE",
    game: "Free Fire",
    freq: "Daily @ 4 PM IST",
    slots: "50+ Teams",
    status: "Open Registration",
    desc: "Consistent daily drop practice for Free Fire athletes aiming to refine their late-game strategy.",
    thumbnail: "/INF9.webp",
  },
];

export default function EventsPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#050505] text-white overflow-x-hidden border-t border-white/5 pb-20">
      
      {/* Hero */}
      <div className="relative py-24 px-6 text-center border-b border-white/5 bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(168,85,247,0.15),transparent)] pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black tracking-[0.25em] uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          The Arena Awaits
        </div>
        <div className="relative">
          <div
            className="block font-black uppercase italic leading-[0.85] select-none text-white"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(4rem, 14vw, 10rem)" }}
          >
            Live
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
            Events
          </div>
        </div>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-8 leading-relaxed">
          From high-stakes LAN tournaments to daily tier-based practice scrims.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-20">
        
        {/* -- TOURNAMENTS SECTION -- */}
        <div className="mb-8 flex flex-col items-center text-center gap-4">
          <div>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase block mb-2">// MAJOR OFFLINE EVENTS</span>
            <h2 className="text-4xl font-black uppercase italic" style={{ fontFamily: "var(--font-montserrat)" }}>Lucknow LAN <span className="text-primary">Tournaments</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-32">
          {TOURNAMENTS.map((t, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={String((i % 3) * 100)}
              className="group relative flex flex-col p-4 bg-[#080808] border border-white/[0.05] hover:border-primary/50 transition-all duration-500 overflow-hidden rounded-[2rem] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]"
            >
              {/* Image alternative - Neon Gradient Box */}
              <div className="relative mb-8 h-48 w-full rounded-[1.5rem] bg-[#0f0f0f] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                {t.thumbnail ? (
                  <img src={t.thumbnail} alt={t.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <Trophy size={48} className="text-primary/20 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                  </>
                )}
                
                {/* Overlapping Badge */}
                <div className="absolute bottom-0 left-4 translate-y-1/2 flex items-center gap-2 px-5 py-2 bg-[#0a0a0a] border border-white/5 group-hover:border-primary/30 rounded-full z-10 shadow-2xl transition-colors duration-500">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/90">{t.game}</span>
                </div>
              </div>

              <div className="px-3 pb-3 flex flex-col flex-1">
                {/* Location */}
                <div className="flex items-center gap-2 text-primary text-[10px] font-bold tracking-widest uppercase italic mb-4">
                  <MapPin size={12} />
                  {t.location}
                </div>

                <h3 className="text-2xl font-black uppercase italic mb-4 leading-[1.05] bg-gradient-to-br from-primary to-secondary bg-clip-text text-white group-hover:text-transparent transition-colors duration-500" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {t.title}
                </h3>

                <p className="text-gray-500 text-[10px] uppercase tracking-[0.1em] leading-loose mb-8 flex-1">
                  {t.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-[#777] uppercase group-hover:text-white/80 transition-colors">
                    <Trophy size={14} className="text-primary" /> {t.prize}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-[#777] uppercase group-hover:text-white/80 transition-colors">
                    <Calendar size={14} className="text-secondary" /> {t.date}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 bg-[#111] border border-white/[0.04] text-gray-400 py-4 rounded-xl text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                  Register Squad
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-black transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* -- SCRIMS SECTION -- */}
        <div className="mb-8 flex flex-col items-center text-center gap-4 border-t border-white/5 pt-20">
          <div>
            <span className="text-[10px] font-black tracking-[0.3em] text-secondary uppercase block mb-2">// ONLINE BOOTCAMP</span>
            <h2 className="text-4xl font-black uppercase italic" style={{ fontFamily: "var(--font-montserrat)" }}>Daily <span className="text-secondary">Practice Scrims</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SCRIMS.map((s, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={String((i % 3) * 100)}
              className="group relative flex flex-col p-4 bg-[#080808] border border-white/[0.05] hover:border-secondary/50 transition-all duration-500 overflow-hidden rounded-[2rem] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.2)]"
            >
              <div className="relative mb-8 h-40 w-full rounded-[1.5rem] bg-[#0f0f0f] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-secondary/30 transition-all duration-500">
                {s.thumbnail ? (
                  <img src={s.thumbnail} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <Crosshair size={40} className="text-secondary/20 group-hover:text-secondary transition-all duration-500 group-hover:scale-110" />
                  </>
                )}
                
                <div className="absolute bottom-0 left-4 translate-y-1/2 flex items-center gap-2 px-5 py-2 bg-[#0a0a0a] border border-white/5 group-hover:border-secondary/30 rounded-full z-10 shadow-2xl transition-colors duration-500">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/90">{s.game}</span>
                </div>
              </div>

              <div className="px-3 pb-3 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary text-[10px] font-bold tracking-widest uppercase italic mb-4">
                  <Swords size={12} />
                  {s.status}
                </div>

                <h3 className="text-2xl font-black uppercase italic mb-4 leading-[1.05] bg-gradient-to-br from-secondary to-primary bg-clip-text text-white group-hover:text-transparent transition-colors duration-500" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {s.title}
                </h3>

                <p className="text-gray-500 text-[10px] uppercase tracking-[0.1em] leading-loose mb-8 flex-1">
                  {s.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-[#777] uppercase group-hover:text-white/80 transition-colors">
                    <Calendar size={14} className="text-secondary" /> {s.freq}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-[#777] uppercase group-hover:text-white/80 transition-colors">
                    <Users size={14} className="text-primary" /> {s.slots}
                  </div>
                </div>

                <a 
                  href="https://discord.gg/uRWEswyEu"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#111] border border-white/[0.04] text-gray-400 py-4 rounded-xl text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 group-hover:bg-[#5865F2] group-hover:text-white group-hover:border-[#5865F2]"
                >
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                  Join Discord
                  <ArrowRight size={14} className="text-gray-500 group-hover:text-white transition-colors ml-[-4px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
