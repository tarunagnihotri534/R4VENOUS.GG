"use client";

import React, { useState, useEffect, useRef } from "react";

export default function AnimatedAgencyText() {
  const [isTapped, setIsTapped] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  const handleTap = () => {
    setIsTapped(true);
    // Trigger haptic feedback on mobile if available
    if (navigator.vibrate) navigator.vibrate(80);
    setTimeout(() => setIsTapped(false), 900);
  };

  // Scroll velocity based vibration
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let lastScrollY = window.scrollY;
    let velocity = 0;

    const render = () => {
      const currentScrollY = window.scrollY;
      // Calculate smoothed scroll velocity
      const delta = currentScrollY - lastScrollY;
      velocity = velocity * 0.8 + delta * 0.2;
      lastScrollY = currentScrollY;

      // Only apply scroll shake if we are not currently playing the tap animation
      if (!el.classList.contains("animate-hero-shake")) {
        if (Math.abs(velocity) > 1) {
          // Create a random vibration intensity based on scroll speed
          const intensity = Math.min(Math.abs(velocity) * 0.4, 15);
          const randomX = (Math.random() - 0.5) * intensity * 2;
          const randomY = (Math.random() - 0.5) * intensity;
          el.style.transform = `translate3d(${randomX}px, ${randomY}px, 0) skew(${randomX * 0.2}deg)`;
        } else {
          // Reset when stopped
          el.style.transform = `translate3d(0px, 0px, 0px) skew(0deg)`;
        }
      } else {
        el.style.transform = ''; // Let CSS animation take over
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

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

        @keyframes heroShake {
          0% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-8px, -4px) rotate(-1deg); }
          20% { transform: translate(8px, 2px) rotate(1deg); }
          30% { transform: translate(-6px, 4px) rotate(-0.5deg); }
          40% { transform: translate(6px, -2px) rotate(0.5deg); }
          50% { transform: translate(-4px, 2px) rotate(-0.3deg); }
          60% { transform: translate(4px, -2px) rotate(0.3deg); }
          70% { transform: translate(-2px, 2px) rotate(-0.1deg); }
          80% { transform: translate(2px, 0) rotate(0.1deg); }
          90% { transform: translate(0, -2px) rotate(0deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-hero-shake {
          animation: heroShake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
        }

        @keyframes esportsGlitch {
          0% { transform: translate(0) skew(0deg); text-shadow: 8px 8px 0px rgba(0,0,0,1); }
          10% { transform: translate(-5px, -2px) skew(-4deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), -5px 0 #ff00ff, 5px 0 #00ffff; }
          20% { transform: translate(5px, 4px) skew(2deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), 4px 0 #ff00ff, -4px 0 #00ffff; }
          30% { transform: translate(-4px, -2px) skew(-2deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), -2px 0 #a855f7, 2px 0 #ec4899; }
          40% { transform: translate(4px, 2px) skew(1deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), 4px 0 #a855f7, -4px 0 #ec4899; }
          50% { transform: translate(-2px) skew(-1deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), -2px 0 #ff00ff, 2px 0 #00ffff; clip-path: inset(20% 0 30% 0); }
          55% { clip-path: inset(0); }
          60% { transform: translate(2px, -2px) skew(0.5deg); text-shadow: 8px 8px 0px rgba(0,0,0,1), 2px 0 #a855f7; }
          70% { transform: translate(-2px) skew(0deg); text-shadow: 8px 8px 0px rgba(0,0,0,1); }
          100% { transform: translate(0) skew(0deg); text-shadow: 8px 8px 0px rgba(0,0,0,1); }
        }
        .animate-esports-glitch {
          animation: esportsGlitch 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
        }
      `}} />
      <h1
        ref={containerRef}
        className={`font-black italic uppercase tracking-tighter leading-[0.95] flex flex-wrap justify-center w-full gap-x-6 cursor-pointer select-none ${isTapped ? "animate-hero-shake" : ""}`}
        style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(3.5rem, 11vw, 10.5rem)", willChange: "transform" }}
        onClick={handleTap}
      >
        <span 
          className={`text-[#f5f5f5] transition-transform duration-300 inline-block ${isTapped ? "animate-esports-glitch" : "hover:scale-[1.02]"}`}
          style={isTapped ? {} : { textShadow: "8px 8px 0px rgba(0,0,0,1)" }}
        >
          ESPORTS
        </span>
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
