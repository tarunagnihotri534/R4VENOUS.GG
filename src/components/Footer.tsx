import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-8 border-t border-white/5 overflow-hidden font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        {/* Massive Background Text watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-[20vw] font-black italic text-white/[0.015] whitespace-nowrap leading-none select-none tracking-tighter" style={{ fontFamily: "var(--font-montserrat)" }}>
          ESPORTS
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-8">
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tight text-white mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              R4VENEOUS <span className="text-primary">ESPORTS</span>
            </h2>
            <div className="text-[10px] font-black tracking-[0.25em] text-primary uppercase mb-6">
              #BETHEMASTER
            </div>
            <p className="text-[#888] text-xs font-bold uppercase tracking-widest leading-loose max-w-sm mb-10">
              INDIA'S MOST ELITE ESPORTS ORGANIZATION FOCUSING ON TALENT SCOUTING AND PROFESSIONAL CAREER DEVELOPMENT.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="https://discord.gg/uRWEswyEu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
              </Link>
              <Link href="https://whatsapp.com/channel/0029VbBggIREKyZKIwRpYj1J" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/r4venous.gg/?hl=en" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </Link>
            </div>
          </div>

          {/* Links Column (Middle) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase italic mb-2">
                // EXPLORE
              </h4>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Tournaments", href: "/events", active: true },
                  { label: "Rosters", href: "/#rosters" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Votes", href: "/#votes" }
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="group flex items-center gap-3">
                    {link.active && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    <span className={`text-[11px] font-black tracking-widest uppercase transition-colors ${link.active ? "text-white" : "text-[#777] hover:text-white"}`}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase italic mb-2">
                // QUICK LINKS
              </h4>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Daily Results", href: "#" },
                  { label: "Rulebook", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Creators", href: "#" },
                  { label: "Contact", href: "#contact" },
                  { label: "Partners", href: "#" }
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="text-[11px] font-black tracking-widest text-[#777] hover:text-white uppercase transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details Column (Right) */}
          <div className="lg:col-span-3 flex flex-col gap-6 pl-0 lg:pl-4">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-primary uppercase italic mb-2">
              // GET IN TOUCH
            </h4>
            
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 mt-1 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300 shrink-0">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black tracking-[0.2em] text-[#555] uppercase mb-1">
                  Email Support
                </span>
                <span className="text-[11px] font-black tracking-widest text-white uppercase italic">
                  contact@r4veneous.in
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-2 group cursor-pointer">
              <div className="w-12 h-12 mt-1 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300 shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black tracking-[0.2em] text-[#555] uppercase mb-1">
                  Location
                </span>
                <span className="text-[11px] font-black tracking-widest text-white uppercase italic leading-relaxed">
                  Lucknow, <br /> India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.03]">
          <p className="text-[10px] font-black tracking-[0.2em] text-[#555] uppercase">
            © {new Date().getFullYear()} R4VENEOUS ESPORTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-[9px] font-black tracking-[0.2em] text-[#444] uppercase text-center md:text-right">
            <span>MADE WITH ♥ FOR GAMERS</span>
            <span className="hidden md:inline">·</span>
            <span>BACKED BY R4VENEOUS GROUP</span>
          </div>
        </div>

        {/* Vertical Side Text */}
        <div className="hidden 2xl:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center justify-center gap-12 text-[#222] text-[10px] font-black tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <span>ESTD. 2024</span>
          <span>·</span>
          <span>R4VENEOUS ESPORTS</span>
        </div>
      </div>
    </footer>
  );
}
