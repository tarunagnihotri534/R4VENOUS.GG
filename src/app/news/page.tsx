import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NEWS = [
  {
    image: "/INF10.webp",
    category: "Championship",
    categoryIcon: "🏆",
    date: "Apr 23, 2026",
    title: "National Finals Kickoff...",
    titleGradient: true,
    desc: "The grand finals are finally here! The top 16 teams face off in the ultimate showdown for the national title.",
  },
  {
    image: "/INF11.webp",
    category: "Roster Move",
    categoryIcon: "🔥",
    date: "Apr 22, 2026",
    title: "Major Roster Shuffle...",
    titleGradient: false,
    desc: "A massive transfer window sees top tier players moving to rival organizations ahead of the summer season.",
  },
  {
    image: "/INF12.png",
    category: "Broadcast",
    categoryIcon: "🎥",
    date: "Apr 21, 2026",
    title: "New Broadcast Studio...",
    titleGradient: true,
    desc: "R4VENEOUS unveils its state-of-the-art production facility built to elevate the viewer experience to the next level.",
  },
  {
    image: "/INF13.webp",
    category: "Community",
    categoryIcon: "⚡",
    date: "Apr 20, 2026",
    title: "College League Opens...",
    titleGradient: false,
    desc: "Registrations for the collegiate esports league are now officially open. Gather your campus squad and register today.",
  },
  {
    image: "/news-bgmi.png",
    category: "Esports",
    categoryIcon: "🎯",
    date: "Apr 18, 2026",
    title: "BGMI Season Recap...",
    titleGradient: false,
    desc: "Looking back at the most intense clutches, tactical masterclasses, and defining moments of the last season.",
  },
  {
    image: "/INF14.jpg",
    category: "Events",
    categoryIcon: "🎮",
    date: "Apr 16, 2026",
    title: "Free Fire Live Events...",
    titleGradient: true,
    desc: "Experience the thrill of our upcoming Free Fire offline tournaments and community meetups across the region.",
  },
];

async function getQuickUpdates() {
  try {
    const res = await fetch('https://www.talkesport.com/feed/', { 
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (!res.ok) return [];
    const text = await res.text();
    
    const items = [];
    const itemMatches = Array.from(text.matchAll(/<item>([\s\S]*?)<\/item>/g));
    
    for (const match of itemMatches) {
      if (items.length >= 10) break;
      const content = match[1];
      const title = content.match(/<title>([\s\S]*?)<\/title>/)?.[1]
        ?.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&#8217;/g, "'")
        .replace(/&#8211;/g, "-")
        .replace(/&#038;/g, "&")
        .trim();
      const link = content.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim();
      const date = content.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1];
      
      if (title && link) {
        items.push({ 
          title, 
          link, 
          date: date ? new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : ''
        });
      }
    }
    return items;
  } catch (e) {
    console.error("News fetch error:", e);
    return [];
  }
}

export default async function NewsPage() {
  const quickUpdates = await getQuickUpdates();

  return (
    <div className="flex-1 flex flex-col bg-black text-white overflow-x-hidden">

      {/* Hero headline block */}
      <div className="relative py-24 px-6 text-center border-b border-white/5 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(168,85,247,0.15),transparent)] pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black tracking-[0.25em] uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Live Updates
        </div>
        <div className="relative">
          <div
            className="block font-black uppercase italic leading-[0.85] select-none"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(4rem, 14vw, 10rem)", color: "#ffffff" }}
          >
            Live
          </div>
          <div
            className="block font-black uppercase italic leading-[0.85] select-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(4rem, 14vw, 10rem)",
              background: "linear-gradient(135deg, #a855f7 0%, #6b21a8 60%, rgba(168,85,247,0.3) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Updates
          </div>
        </div>
      </div>

      {/* ─── QUICK UPDATES TICKER ─── */}
      <div className="w-full bg-white/[0.02] border-y border-white/5 py-5 overflow-hidden relative group backdrop-blur-sm">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-8 relative z-10">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            </div>
            <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase whitespace-nowrap drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ fontFamily: "var(--font-montserrat)" }}>Quick Updates:</span>
          </div>
          
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex animate-marquee hover:pause whitespace-nowrap gap-16">
              {quickUpdates.map((update, i) => (
                <Link 
                  key={i} 
                  href={update.link} 
                  target="_blank"
                  className="flex items-center gap-4 group/item transition-all duration-300"
                >
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase italic border-b border-primary/20">{update.date}</span>
                  <span 
                    className="text-[12px] font-black tracking-widest uppercase text-white/90 group-hover/item:text-primary transition-all duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] group-hover/item:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {update.title}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                </Link>
              ))}
              {/* Duplicate for seamless loop */}
              {quickUpdates.map((update, i) => (
                <Link 
                  key={`dup-${i}`} 
                  href={update.link} 
                  target="_blank"
                  className="flex items-center gap-4 group/item transition-all duration-300"
                >
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase italic border-b border-primary/20">{update.date}</span>
                  <span 
                    className="text-[12px] font-black tracking-widest uppercase text-white/90 group-hover/item:text-primary transition-all duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] group-hover/item:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {update.title}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>

      {/* Filter bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">// News Archive</span>
            <h3 className="text-2xl font-black uppercase italic mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>Updates</h3>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-primary/40 transition-colors cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-widest uppercase text-white">All Categories</span>
              <svg className="w-3 h-3 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-primary/40 transition-colors flex-1 sm:flex-none sm:w-52">
              <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input className="bg-transparent text-[10px] font-bold tracking-widest text-white uppercase outline-none w-full placeholder-gray-600" placeholder="Search News..." />
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {NEWS.map((post, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={String((i % 3) * 100)}
              className="group flex flex-col p-4 bg-[#080808] border border-white/[0.05] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] rounded-[2rem] transition-all duration-500 cursor-pointer"
            >
              {/* Image with overlapping badge */}
              <div className="relative mb-10">
                <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                {/* Category badge — overlapping the bottom edge on the left */}
                <div className="absolute bottom-0 left-4 translate-y-1/2 flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] border border-white/5 group-hover:border-primary/30 rounded-full z-10 shadow-2xl transition-colors duration-500">
                  <span className="text-primary text-xs">{post.categoryIcon}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/90">{post.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 px-3 pb-3">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold tracking-widest uppercase italic mb-4">
                  <svg className="w-3.5 h-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {post.date}
                </div>

                {/* Massive Italic Title */}
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase italic mb-5 leading-[1.1]"
                  style={post.titleGradient ? {
                    fontFamily: "var(--font-montserrat)",
                    background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  } : { fontFamily: "var(--font-montserrat)", color: "#ffffff" }}
                >
                  {post.title}
                </h3>

                {/* Subtext description */}
                <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] leading-loose mb-8 flex-1">
                  {post.desc}
                </p>

                {/* Read More row */}
                <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 group-hover:text-primary transition-colors duration-300">Read More</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowRight size={12} className="text-white group-hover:translate-x-px transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
