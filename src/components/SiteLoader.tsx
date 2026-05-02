"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function SiteLoader() {
  const [phase, setPhase] = useState<"loading" | "ready" | "revealing" | "done">("loading");
  const [loadProgress, setLoadProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Particle system for the purple landing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || phase === "done") return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decay: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = [
      "rgba(168, 85, 247,",  // primary purple
      "rgba(192, 132, 252,", // lighter purple
      "rgba(236, 72, 153,",  // pink
      "rgba(139, 92, 246,",  // violet
      "rgba(217, 70, 239,",  // fuchsia
    ];

    const spawnParticle = () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.3,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        decay: Math.random() * 0.003 + 0.001,
        color,
      });
    };

    // Spawn initial batch
    for (let i = 0; i < 60; i++) spawnParticle();

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles
      if (particles.length < 80 && Math.random() > 0.7) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `${p.color} ${p.alpha})`);
        gradient.addColorStop(1, `${p.color} 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [phase]);

  // Loading progress simulation
  useEffect(() => {
    if (phase !== "loading") return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 12 + 3;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => setPhase("ready"), 400);
      } else {
        setLoadProgress(progress);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [phase]);

  const handleEnter = useCallback(() => {
    if (phase !== "ready") return;
    setPhase("revealing");
    // After reveal animation completes, mark as done
    setTimeout(() => setPhase("done"), 1600);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loaderPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes loaderGlowOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes loaderTextReveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          100% { clip-path: inset(0 0% 0 0); opacity: 1; }
        }
        @keyframes loaderLetterDance {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes loaderBarGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.3); }
        }
        @keyframes loaderReadyPulse {
          0%, 100% { transform: scale(1); letter-spacing: 0.3em; }
          50% { transform: scale(1.04); letter-spacing: 0.38em; }
        }
        @keyframes curtainLeft {
          0% { transform: translateX(0) scaleX(1); }
          30% { transform: translateX(0) scaleX(1.02); }
          100% { transform: translateX(-105%) scaleX(0.8); }
        }
        @keyframes curtainRight {
          0% { transform: translateX(0) scaleX(1); }
          30% { transform: translateX(0) scaleX(1.02); }
          100% { transform: translateX(105%) scaleX(0.8); }
        }
        @keyframes curtainContentFade {
          0% { opacity: 1; transform: scale(1); }
          40% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        @keyframes flashBang {
          0% { opacity: 0; }
          15% { opacity: 0.7; }
          100% { opacity: 0; }
        }

        .loader-curtain-left {
          animation: curtainLeft 1.4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .loader-curtain-right {
          animation: curtainRight 1.4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .loader-content-fade {
          animation: curtainContentFade 0.6s cubic-bezier(0.4, 0, 1, 1) forwards;
        }
        .loader-flash {
          animation: flashBang 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.15s;
        }
      `}} />

      {/* Flash of light during reveal */}
      {phase === "revealing" && (
        <div
          className="fixed inset-0 z-[200] pointer-events-none loader-flash"
          style={{
            background: "radial-gradient(circle at center, rgba(168,85,247,0.5), rgba(255,255,255,0.3), transparent 70%)",
          }}
        />
      )}

      {/* LEFT CURTAIN */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-full z-[100] ${phase === "revealing" ? "loader-curtain-left" : ""}`}
        style={{
          background: "linear-gradient(135deg, #0c001a 0%, #1a0033 30%, #2d0059 60%, #1a0033 100%)",
          transformOrigin: "left center",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 120% 80% at 80% 50%, rgba(168,85,247,0.15), transparent 60%)",
        }} />
      </div>

      {/* RIGHT CURTAIN */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full z-[100] ${phase === "revealing" ? "loader-curtain-right" : ""}`}
        style={{
          background: "linear-gradient(225deg, #0c001a 0%, #1a0033 30%, #2d0059 60%, #1a0033 100%)",
          transformOrigin: "right center",
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 120% 80% at 20% 50%, rgba(168,85,247,0.15), transparent 60%)",
        }} />
      </div>

      {/* CENTER SEAM GLOW — vertical light line */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-px h-full z-[101] ${phase === "revealing" ? "loader-content-fade" : ""}`}
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.3) 20%, rgba(168,85,247,0.5) 50%, rgba(168,85,247,0.3) 80%, transparent)",
          boxShadow: "0 0 30px 8px rgba(168,85,247,0.15)",
        }}
      />

      {/* PARTICLE CANVAS */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 z-[102] pointer-events-none ${phase === "revealing" ? "loader-content-fade" : ""}`}
      />

      {/* CONTENT OVERLAY */}
      <div
        className={`fixed inset-0 z-[103] flex flex-col items-center justify-center ${phase === "revealing" ? "loader-content-fade" : ""}`}
        style={{ pointerEvents: phase === "revealing" ? "none" : "auto" }}
      >
        {/* Orbiting glow ring */}
        <div
          className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]"
          style={{
            animation: "loaderGlowOrbit 8s linear infinite",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{
              background: "radial-gradient(circle, #a855f7, transparent)",
              boxShadow: "0 0 20px 8px rgba(168,85,247,0.4)",
            }}
          />
        </div>

        {/* Central glow */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            animation: "loaderPulse 3s ease-in-out infinite",
          }}
        />

        {/* Logo / Brand Mark */}
        <div className="relative mb-10">
          {/* Outer ring */}
          <div
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-white/10 flex items-center justify-center overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.1), rgba(0,0,0,0.5))",
              boxShadow: "0 0 60px rgba(168,85,247,0.2), inset 0 0 30px rgba(168,85,247,0.1)",
            }}
          >
            <Image
              src="/logo.png"
              alt="R4VENEOUS Esports"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Brand name with letter-by-letter animation */}
        <div className="relative mb-6">
          <h2
            className="text-[11px] sm:text-[13px] font-black tracking-[0.4em] uppercase text-white/80"
            style={{
              fontFamily: "var(--font-montserrat)",
              animation: "loaderTextReveal 1s cubic-bezier(0.16,1,0.3,1) 0.3s both",
            }}
          >
            R4VENEOUS ESPORTS
          </h2>
          <div
            className="h-px w-full mt-3"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-12"
          style={{
            animation: "loaderTextReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both",
          }}
        >
          BE THE MASTER
        </p>

        {/* Loading bar / Enter button */}
        <div className="relative w-[280px] sm:w-[340px]">
          {phase === "loading" && (
            <>
              {/* Progress track */}
              <div className="relative h-[2px] bg-white/8 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${loadProgress}%`,
                    background: "linear-gradient(90deg, #7c3aed, #a855f7, #d946ef)",
                    animation: "loaderBarGlow 2s ease-in-out infinite",
                  }}
                />
              </div>
              {/* Progress text */}
              <p className="text-center mt-4 text-[10px] font-bold tracking-[0.25em] text-white/25 uppercase">
                Initializing Platform... {Math.round(loadProgress)}%
              </p>
            </>
          )}

          {phase === "ready" && (
            <button
              onClick={handleEnter}
              className="w-full py-4 sm:py-5 cursor-pointer group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.05))",
                border: "1px solid rgba(168,85,247,0.3)",
                animation: "loaderReadyPulse 2.5s ease-in-out infinite",
              }}
            >
              {/* Hover glow sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
                }}
              />
              <span
                className="relative text-[10px] sm:text-[11px] font-black tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ENTER THE ARENA
              </span>
            </button>
          )}
        </div>

        {/* Bottom decorative element */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "loaderTextReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" />
          <span className="text-[8px] font-bold tracking-[0.4em] text-white/15 uppercase">
            ESTD. 2024
          </span>
        </div>
      </div>
    </>
  );
}
