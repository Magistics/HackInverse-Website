import React from "react";
import { ArrowUp, Shield, ExternalLink } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#07090e] border-t border-zinc-800 text-zinc-300 pt-16 pb-12 select-none overflow-hidden font-space-mono">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 relative z-10">
        {/* Top Broadsheet Header Row with Dual Branding Logos */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 mb-10 border-b border-zinc-800/80 gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Dual Logos: Magistics x HackInverse */}
            <div className="flex items-center gap-4 p-3 bg-black/40 border border-zinc-800 shrink-0">
              <img
                src="/magistics_logo.svg"
                alt="Magistics Official Logo"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain filter brightness-110"
              />
              <span className="text-zinc-600 text-lg">✕</span>
              <img
                src="/logo_dark.png"
                alt="HackInverse Logo"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain filter contrast-125"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#ff003c]" />
                <span className="font-space-mono text-xs uppercase tracking-[0.25em] text-[#ffaa00]">
                  HAWKINS OUTPOST // HACKINVERSE ARCHIVE
                </span>
              </div>
              <h2 className="stranger-things-filled text-3xl sm:text-4xl tracking-widest text-[#ff0505] drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]">
                HACKINVERSE 1.0
              </h2>
              <p className="font-space-mono text-xs sm:text-sm text-zinc-300 tracking-wider mt-1">
                An Offline HackDay Experience in Kolkata, Organized by Magistics. Built for the Future.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 bg-[#0b0e15] border border-zinc-700 hover:border-red-500 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>RETURN TO SURFACE</span>
            <ArrowUp className="w-4 h-4 text-red-500 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-xs">
          {/* Col 1: Facility Dossier */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-red-500" />
              FACILITY
            </h4>
            <p className="font-space-mono text-zinc-400 leading-relaxed mb-3">
              HackInverse is the flagship hackDay by Magistics, bringing together students, developers, designers, and innovators to learn, connect, and grow.
            </p>
            <span className="text-[10px] text-zinc-500 block">
              VENUE: JIS UNIVERSITY, AGARPARA, KOLKATA
            </span>
          </div>

          {/* Col 2: Navigation Coordinates */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase mb-3">
              COORDINATES
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#about" className="hover:text-red-400 transition-colors">01 // About HackInverse</a></li>
              <li><a href="#tracks" className="hover:text-red-400 transition-colors">02 // Challenge Tracks</a></li>
              <li><a href="#prizes" className="hover:text-red-400 transition-colors">03 // Winners & Bounties</a></li>
              <li><a href="#sponsors" className="hover:text-red-400 transition-colors">04 // Official Sponsors</a></li>
              <li><a href="#venue" className="hover:text-red-400 transition-colors">05 // JIS University Venue</a></li>
            </ul>
          </div>

          {/* Col 3: Directives & Legal */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase mb-3">
              PROTOCOLS
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href="https://app.notion.com/p/Magistics-Community-Code-of-Conduct-2ce4d7cdc44f8067b3e5d3d6bddb98d7"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <span>Magistics Code of Conduct</span>
                  <ExternalLink className="w-3 h-3 text-red-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.notion.com/p/HackInverse-1-0-Hacker-s-Guide-3ed4d7cdc44f81cd945bc5620892bce8"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <span>HackInverse Hacker's Guide</span>
                  <ExternalLink className="w-3 h-3 text-red-500" />
                </a>
              </li>
              <li>
                <a href="https://devfolio.co/code-of-conduct" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">
                  Devfolio Guidelines
                </a>
              </li>
              <li>
                <a href="mailto:hackinverse.contact@gmail.com" className="hover:text-red-400 transition-colors">
                  Emergency: hackinverse.contact@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Channels */}
          <div>
            <h4 className="font-cinzel font-bold text-white text-sm tracking-wider uppercase mb-3">
              COMM CHANNELS
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://x.com/Magistics_main"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>X / Twitter: @Magistics_main</span>
              </a>
              <a
                href="https://www.linkedin.com/showcase/hackinverse"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 text-zinc-400" />
                <span>LinkedIn / HackInverse</span>
              </a>
              <a
                href="https://www.instagram.com/hackinverse"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5 text-zinc-400" />
                <span>Instagram / @hackinverse</span>
              </a>
              <a
                href="https://discord.gg/svTwnYX5XT"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <FaDiscord className="w-3.5 h-3.5 text-[#5865F2]" />
                <span>Discord / Community</span>
              </a>
              <a
                href="https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp / Community</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Telemetry Strip */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3 text-center sm:text-left">
          <div>
            <span>© HackInverse. Powered by </span>
            <a href="https://linktr.ee/Magistics_official" target="_blank" rel="noreferrer" className="text-red-500 hover:underline font-bold">
              MAGISTICS
            </a>
            <span>. Official contact: </span>
            <a href="mailto:hackinverse.contact@gmail.com" className="text-zinc-400 underline">
              hackinverse.contact@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linktr.ee/Magistics_official"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Linktree / Magistics
            </a>
            <span>•</span>
            <span className="text-emerald-500 font-bold">SEASON 01 CONCLUDED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
