"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { Menu, X, User as UserIcon, LogOut, Activity, FileText, Atom, Ticket, Video, Info, BarChart2, ChevronDown, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     href: "/",           icon: Activity },
  { label: "News",     href: "/news",       icon: FileText },
  { label: "Solutions",href: "/solutions",  icon: Atom },
  { label: "Events",   href: "/events",     icon: Ticket,   dropdown: true },
  { label: "Talent",   href: "/talents",    icon: Video,    dropdown: true },
  { label: "About Us", href: "/about",      icon: Info,     dropdown: true },
];

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const displayName =
    user?.user_metadata?.display_name ||
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Player";

  return (
    <>
      {/* Floating Pill Nav Wrapper */}
      <nav className={`fixed w-full z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? "top-2" : "top-6"}`}>
        {/* Glow Effects behind the pill */}
        <div className="absolute top-1/2 left-1/4 w-[20vw] h-10 bg-primary/20 blur-[40px] -translate-y-1/2 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[20vw] h-10 bg-primary/20 blur-[40px] -translate-y-1/2 rounded-full pointer-events-none" />
        
        <div className={`relative max-w-[1400px] w-full mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4 transition-all duration-500 rounded-full border shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl ${scrolled ? "bg-[#050505]/95 border-white/10" : "bg-[#0a0a0a]/80 border-white/[0.08]"}`}>
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.png"
              alt="R4VENEOUS Esports"
              width={140}
              height={40}
              className="h-10 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
              priority
            />
            <span className="hidden sm:block text-white font-black text-xs lg:text-sm tracking-[0.15em] uppercase italic" style={{ fontFamily: "var(--font-montserrat)" }}>
              R4VENEOUS <span className="text-primary">ESPORTS</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-1.5 px-4 py-2 text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded-full border ${
                    isActive 
                      ? "text-white bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
                      : "text-[#777] hover:text-white border-transparent hover:bg-white/5"
                  }`}
                >
                  <Icon size={12} className={`${isActive ? "text-primary" : "text-[#555] group-hover:text-primary"} transition-colors`} />
                  {item.label}
                  {item.dropdown && <ChevronDown size={10} className={`${isActive ? "text-primary/70" : "text-[#444]"} group-hover:translate-y-px transition-transform`} />}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE (AUTH & CTA) */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary tracking-widest uppercase ml-2">
                  <UserIcon size={12} />
                  <span className="max-w-[120px] truncate">{displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2.5 rounded-full bg-[#111] border border-white/5 hover:border-red-500/50 text-gray-400 hover:text-red-400 font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={12} /> Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2 ml-2">
                <Link
                  href="/login"
                  className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-black font-black text-[9px] tracking-[0.25em] uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2 group border border-primary"
                >
                  Sign In <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-gray-400 hover:text-white p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col pt-28 px-6 gap-2 transition-all duration-300 xl:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-4 border-b border-white/5 text-sm font-black tracking-widest text-gray-400 hover:text-white uppercase transition-colors"
            >
              <Icon size={16} className="text-primary" />
              {item.label}
            </Link>
          );
        })}

        <div className="mt-8 space-y-4">
          {user ? (
            <>
              <div className="flex items-center gap-3 text-xs font-bold text-primary px-4 py-4 uppercase tracking-widest bg-[#111] rounded-2xl">
                <UserIcon size={14} />
                <span>{displayName}</span>
              </div>
              <button
                onClick={() => { handleLogout(); setMobileOpen(false); }}
                className="w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-500 py-4 rounded-2xl text-xs font-black tracking-widest uppercase transition-colors"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-black py-4 rounded-2xl text-[11px] font-black tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                Sign In <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
