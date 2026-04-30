"use client";

import React, { useState } from "react";

export default function AnimatedAgencyText() {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 800); // Reset after animation
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes agencyExplosion {
          0% { text-shadow: 8px 8px 0px rgba(0,0,0,1); transform: scale(1) translateY(0); filter: brightness(1); color: #b158ff; }
          40% { text-shadow: 0 0 80px #b158ff, 0 0 120px #d946ef; transform: scale(1.08) translateY(-8px); filter: brightness(1.6); color: #ffffff; }
          70% { text-shadow: 0 0 40px #b158ff, 4px 4px 0px rgba(0,0,0,1); transform: scale(1.02) translateY(-2px); filter: brightness(1.2); color: #e8cfff; }
          100% { text-shadow: 8px 8px 0px rgba(0,0,0,1); transform: scale(1) translateY(0); filter: brightness(1); color: #b158ff; }
        }
        .animate-agency-explosion {
          animation: agencyExplosion 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
      <h1
        className="font-black italic uppercase tracking-tighter leading-[0.95] flex flex-wrap justify-center w-full gap-x-6 cursor-pointer select-none"
        style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(3.5rem, 11vw, 10.5rem)" }}
        onClick={handleTap}
      >
        <span className="text-[#f5f5f5] transition-transform duration-300 hover:scale-[1.02]" style={{ textShadow: "8px 8px 0px rgba(0,0,0,1)" }}>ESPORTS</span>
        <span 
          className={`transition-all duration-300 inline-block ${isTapped ? "animate-agency-explosion" : "text-[#b158ff] hover:brightness-125 hover:scale-[1.02]"}`} 
          style={isTapped ? {} : { textShadow: "8px 8px 0px rgba(0,0,0,1)" }}
        >
          AGENCY
        </span>
      </h1>
    </>
  );
}
