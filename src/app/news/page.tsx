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

export default function NewsPage() {
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
