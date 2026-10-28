import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Signal, ArrowUpRight, X, ChevronRight, Activity, Terminal } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Navbar({ scrollToView, refs }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentYPos = window.scrollY;
      const isScrollingUp = currentYPos < lastYPos;
      setShowNav(isScrollingUp || currentYPos < 20);
      setLastYPos(currentYPos);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastYPos]);

  // Lock body scroll when surveillance dial is active on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "ABOUT", ref: refs.about },
    { label: "EXPEDITION", ref: refs.home },
    { label: "HIGHLIGHTS", id: "highlights" },
    { label: "SCHEDULE", ref: refs.agenda },
    { label: "SPONSORS", ref: refs.sponsors },
    { label: "TEAM", id: "team" },
    { label: "VENUE", ref: refs.venue },
  ];

  const channels = [
    { freq: "102.5", ch: "01", label: "HAWKINS APEX", desc: "Hero & Live Reel", ref: refs.home },
    { freq: "103.1", ch: "02", label: "THE DISPATCH", desc: "Mission & Metrics", ref: refs.about },
    { freq: "104.2", ch: "03", label: "CHALLENGE TRACKS", desc: "Open & Hardware Vectors", id: "tracks" },
    { freq: "105.8", ch: "04", label: "SCHEDULE", desc: "Operation Timeline", ref: refs.agenda },
    { freq: "106.4", ch: "05", label: "BOUNTY PODIUM", desc: "Prizes & Grants", id: "prizes" },
    { freq: "107.0", ch: "06", label: "ADVISORY COUNCIL", desc: "Judges & Mentors", id: "mentors" },
    { freq: "107.5", ch: "07", label: "FIELD HIGHLIGHTS", desc: "35mm Event Archive", id: "highlights" },
    { freq: "107.9", ch: "08", label: "ALLIANCES", desc: "Sponsors & Partners", ref: refs.sponsors },
    { freq: "108.5", ch: "09", label: "SQUAD ROSTER", desc: "Field Operatives", id: "team" },
    { freq: "109.2", ch: "10", label: "LABORATORY VENUE", desc: "JIS University", ref: refs.venue },
    { freq: "109.9", ch: "11", label: "PROTOCOL FAQ", desc: "Declassified Intel", id: "faq" },
  ];

  const handleChannelSelect = (channel) => {
    setIsMenuOpen(false);
    if (channel.ref && channel.ref.current) {
      scrollToView(channel.ref);
    } else if (channel.id) {
      const el = document.getElementById(channel.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleNavItemClick = (item) => {
    if (item.ref && item.ref.current) {
      scrollToView(item.ref);
    } else if (item.id) {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 w-full z-50 backdrop-blur-md bg-[#0a0b0e]/85 border-b border-white/[0.08] select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
        {/* Brand: Dual Magistics x HackInverse Logos */}
        <div 
          onClick={() => scrollToView(refs.home)}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
        >
          <div className="flex items-center gap-2 bg-black/40 px-2 py-1 border border-zinc-800/80 rounded-xs shrink-0">
            <img
              src="/magistics_logo.svg"
              alt="Magistics"
              className="h-5 sm:h-6 w-auto object-contain filter brightness-110"
            />
            <span className="text-zinc-600 text-xs font-mono">✕</span>
            <img
              src="/logo_dark.png"
              alt="HackInverse"
              className="h-5 sm:h-6 w-auto object-contain filter contrast-125"
            />
          </div>
          <div className="hidden min-[440px]:flex flex-col text-left">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] text-white group-hover:text-[#e50914] transition-colors leading-tight">
              HACKINVERSE <span className="text-[#e50914]">1.0</span>
            </span>
            <span className="font-space-mono text-[9px] text-zinc-400 tracking-wider">
              BY MAGISTICS
            </span>
          </div>
        </div>

        {/* Minimalist Desktop Navigation (lg+) */}
        <div className="hidden lg:flex items-center gap-6 font-space-mono text-xs tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavItemClick(item)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative py-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredItem === item.label && (
                <motion.span
                  layoutId="minimal-nav-underline"
                  className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#e50914] shadow-[0_0_6px_#e50914]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right Actions: Community Outposts + Devfolio CTA + Walkie-Talkie Dial */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Outposts (hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center gap-1.5 border-r border-white/10 pr-2.5">
            <a
              href="https://discord.gg/svTwnYX5XT"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-[#5865F2] hover:bg-[#5865F2]/10 rounded transition-colors"
              title="Join Official Discord Safety Outpost"
              aria-label="Discord Outpost"
            >
              <FaDiscord className="w-4 h-4" />
            </a>
            <a
              href="https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-[#25D366] hover:bg-[#25D366]/10 rounded transition-colors"
              title="Join Official WhatsApp Broadcast Outpost"
              aria-label="WhatsApp Outpost"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>

          {/* Desktop Devfolio Link Button (Visible on md+) */}
          <a
            href="https://hackinverse-s1.devfolio.co/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#e50914] hover:bg-[#d90429] text-white font-space-mono text-xs font-bold tracking-wider uppercase rounded-xs transition-all cursor-pointer shadow-[0_0_15px_rgba(229,9,20,0.35)] active:scale-[0.98]"
          >
            <span>DEVFOLIO DOSSIER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Custom Walkie-Talkie Surveillance Dial Button (Replaces generic hamburger) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative flex items-center gap-2 px-2.5 py-1.5 bg-[#07090f] border border-[#e50914]/50 hover:border-[#e50914] text-zinc-300 hover:text-white rounded-xs transition-all shadow-[0_0_12px_rgba(229,9,20,0.25)] active:scale-[0.96] cursor-pointer"
            aria-label="Walkie-Talkie Surveillance Dial"
          >
            <div className="relative flex items-center justify-center">
              <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <div className="flex items-center gap-1">
                <span className="font-space-mono text-[9px] font-bold text-white tracking-widest uppercase">
                  {isMenuOpen ? "CLOSE" : "FREQ 102.5"}
                </span>
                <span className="text-[8px] text-[#e50914] font-mono font-extrabold">
                  {isMenuOpen ? "✕" : "∿∿"}
                </span>
              </div>
              <span className="font-space-mono text-[7px] text-zinc-400 tracking-wider">
                {isMenuOpen ? "ABORT TUNER" : "WALKIE DIAL"}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 
        HAWKINS LAB WALKIE-TALKIE SURVEILLANCE TERMINAL OVERLAY
        Rendered via portal into document.body to prevent parent CSS transform clipping
      */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="lg:hidden fixed inset-0 bg-black/80 z-[9998]"
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="lg:hidden fixed inset-x-0 top-[52px] h-[calc(100dvh-52px)] bg-[#06080e]/98 backdrop-blur-3xl border-t border-white/10 z-[9999] flex flex-col justify-between overflow-y-auto select-none shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                >
                {/* Top Telemetry & Frequency Readout */}
                <div className="px-5 pt-4 pb-3 border-b border-white/[0.08] bg-black/40">
                  <div className="flex items-center justify-between font-space-mono text-[10px]">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Activity className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
                      <span className="tracking-widest uppercase text-white font-bold">
                        HAWKINS SURVEILLANCE TUNER
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9px]">
                      <span>SIGNAL:</span>
                      <span className="tracking-tighter">▂▄▆█</span>
                      <span className="text-zinc-400">LIVE</span>
                    </div>
                  </div>
                  <p className="mt-1 text-[9px] font-space-mono text-zinc-500 tracking-wider">
                    Select frequency channel to tune into live laboratory coordinates:
                  </p>
                </div>

                {/* Channels Grid (2 Columns on mobile for tactile ergonomics) */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 overflow-y-auto">
                  {channels.map((ch) => (
                    <button
                      key={ch.ch}
                      onClick={() => handleChannelSelect(ch)}
                      className="group relative text-left p-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#e50914] transition-all rounded-xs flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-black/60 border border-white/10 group-hover:border-[#e50914]/50 flex items-center justify-center font-space-mono text-[10px] text-[#e50914] font-bold">
                          {ch.ch}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-space-mono text-[9px] text-[#e50914] font-semibold">
                              {ch.freq} MHz
                            </span>
                            <span className="text-zinc-600 text-[8px]">•</span>
                            <span className="font-cinzel text-xs font-bold text-white tracking-wider group-hover:text-red-400 transition-colors">
                              {ch.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-400 font-space-mono">
                            {ch.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#e50914] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>

                {/* Bottom Command Strip: Devfolio Action & Outpost Relays */}
                <div className="p-4 border-t border-white/10 bg-black/60 space-y-3">
                  <a
                    href="https://hackinverse-s1.devfolio.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 bg-[#e50914] hover:bg-[#d90429] text-white font-space-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 rounded-xs shadow-[0_0_20px_rgba(229,9,20,0.4)] active:scale-[0.98]"
                  >
                    <span>APPLY WITH DEVFOLIO [DIRECT RELAY]</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://discord.gg/svTwnYX5XT"
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 bg-[#5865F2]/15 border border-[#5865F2]/30 hover:border-[#5865F2] text-[#8ea1e1] hover:text-white text-xs font-space-mono flex items-center justify-center gap-2 rounded-xs transition-colors"
                    >
                      <FaDiscord className="w-4 h-4 text-[#5865F2]" />
                      <span>DISCORD</span>
                    </a>
                    <a
                      href="https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs"
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 bg-[#25D366]/15 border border-[#25D366]/30 hover:border-[#25D366] text-[#4ade80] hover:text-white text-xs font-space-mono flex items-center justify-center gap-2 rounded-xs transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                      <span>WHATSAPP</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-space-mono text-zinc-500 pt-1">
                    <span>HAWKINS LAB RADIO FREQUENCY v1.0</span>
                    <span className="text-zinc-400">ENCRYPTION: ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
          document.body
        )}
    </motion.nav>
  );
}
