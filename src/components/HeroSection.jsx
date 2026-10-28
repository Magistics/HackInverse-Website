import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cyclistsImg from "../assets/cyclists.png";
import shadowsImg from "../assets/shadows.png";
import { hairlineDraw, textMaskReveal, transitionCurves } from "../utils/motion";
import { Film, Pause, Play, ArrowDown, Users, CheckCircle } from "lucide-react";

const DEVFOLIO_SLUG = "hackinverse-s1";

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
    setVideoPlaying(!videoPlaying);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });



  const heroContentY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const shadowY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cyclistsX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[95vh] md:min-h-[110vh] w-full flex flex-col justify-between overflow-hidden bg-[#06080e] select-none"
    >
      {/* 
        CINEMATIC VIDEO HERO LAYER 
        Official High-Definition MP4 Stream from Imaginary Forces (Creators of the Stranger Things Title Sequence)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Looping Native HTML5 Video Stream */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`w-[112%] h-[112%] -left-[6%] -top-[6%] absolute object-cover transition-opacity duration-1000 scale-[1.18] origin-center ${
              videoPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://imaginaryforces.com/videos/17830_ST_S5_Cutdown_HD_v2.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Cinematic Film Vignette & Tone Mapping Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/40 to-[#06080e]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06080e]/30 to-[#06080e] mix-blend-multiply" />
        <div
          className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(229, 9, 20, 0.28) 0%, rgba(6, 8, 14, 0.65) 70%, #06080e 100%)",
          }}
        />

        {/* Central High-Contrast Text Scrim (Calibrated for Vivid Background & WCAG Legibility) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(6, 8, 14, 0.78) 0%, rgba(6, 8, 14, 0.50) 44%, rgba(6, 8, 14, 0.15) 76%, transparent 100%)",
          }}
        />
      </div>

      {/* Horizon Silhouettes: Mind Flayer & Cyclists (Adjusted for Higher Video Luminance) */}
      <div className="absolute bottom-0 left-0 right-0 h-72 md:h-96 pointer-events-none overflow-hidden z-10">
        <motion.div
          style={{ y: shadowY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl filter drop-shadow-[0_0_45px_rgba(229,9,20,0.7)]"
        >
          <img
            src={shadowsImg}
            alt="The Mind Flayer Silhouette"
            className="w-full h-auto object-contain mx-auto"
          />
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#06080e] via-[#06080e]/80 to-transparent z-10" />

        <motion.div
          style={{ x: cyclistsX }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.95, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: transitionCurves.cinematic }}
          className="absolute bottom-4 left-[6%] md:left-[12%] w-44 md:w-64 z-20 filter drop-shadow-[0_0_16px_rgba(0,0,0,1)]"
        >
          <img
            src={cyclistsImg}
            alt="Hawkins Operatives on Bikes"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Main Editorial Hero Broadside */}
      <motion.div
        style={{ y: heroContentY, opacity: heroContentOpacity }}
        className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-28 flex flex-col items-center text-center"
      >
        {/* Dual Co-Branding Insignia */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: transitionCurves.cinematic }}
          className="inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-1.5 mb-6 border border-white/10 bg-black/50 backdrop-blur-md rounded-xs font-space-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-zinc-300 shadow-lg"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 pr-2 border-r border-white/10">
            <img src="/magistics_logo.svg" alt="Magistics Logo" className="h-4 sm:h-4.5 w-auto object-contain brightness-110" />
            <span className="text-zinc-600 text-[9px]">✕</span>
            <img src="/logo_dark.png" alt="HackInverse Logo" className="h-4 sm:h-4.5 w-auto object-contain contrast-125" />
          </div>
          <span className="text-zinc-400">MAGISTICS PRESENTS</span>
          <span className="text-zinc-600">|</span>
          <span className="text-[#e50914] font-bold">HACKINVERSE 1.0</span>
        </motion.div>

        {/* 
          STRANGER THINGS TITLE ARCHITECTURE
          Fixed: Generous container + responsive typography + padding prevents cut-off
        */}
        <div className="relative w-full max-w-5xl my-2 px-2 sm:px-4">
          {/* Top Crimson Hairline Rule with smooth scaleX draw */}
          <motion.div
            variants={hairlineDraw}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="stranger-rule-top mb-3 sm:mb-4 opacity-95 origin-center w-full"
          />

          {/* Fully Visible Title without clipping */}
          <div className="overflow-visible py-2 sm:py-3 px-1 sm:px-2 flex justify-center items-center">
            <motion.h1
              variants={textMaskReveal}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="stranger-things-filled text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.5rem] tracking-[0.03em] sm:tracking-[0.05em] md:tracking-[0.06em] leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-[#ff334b] via-[#e50914] to-[#7a040b] uppercase filter drop-shadow-[0_0_35px_rgba(229,9,20,0.65)] whitespace-nowrap"
            >
              HACKINVERSE
            </motion.h1>
          </div>

          {/* Bottom Crimson Hairline Rule with smooth scaleX draw */}
          <motion.div
            variants={hairlineDraw}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="stranger-rule-bottom mt-3 sm:mb-4 opacity-95 origin-center w-full"
          />
        </div>

        {/* Editorial Subtitle with Masked Entrance */}
        <div className="overflow-hidden mt-3 mb-2">
          <motion.p
            variants={textMaskReveal}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="font-cinzel text-base sm:text-xl md:text-2xl text-zinc-100 tracking-[0.25em] uppercase font-semibold"
          >
            THE UPSIDE DOWN HACKDAY // SEASON 01
          </motion.p>
        </div>

        {/* Restrained Manifesto Copy strictly from hackinverse-1-0-website-data.md */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: transitionCurves.cinematic }}
          className="font-space-mono text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed mt-2 mb-8 tracking-wide"
        >
          An offline single-day hackday organized by Magistics. 6 hours of high-intensity on-site building at JIS University, Agarpara, Kolkata.
        </motion.p>

        {/* Minimalist Hairline Telemetry Grid with Authentic Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: transitionCurves.cinematic }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full max-w-3xl mb-10 border border-white/[0.08] divide-x divide-y md:divide-y-0 divide-white/[0.08] bg-[#07090f]/75 backdrop-blur-md font-space-mono text-left shadow-xl"
        >
          <div className="p-4 hover:bg-white/[0.02] transition-colors">
            <span className="text-zinc-500 block text-[9px] sm:text-[10px] tracking-widest uppercase">FORMAT</span>
            <span className="text-white font-bold text-xs sm:text-sm tracking-wider">OFFLINE HACKDAY</span>
          </div>
          <div className="p-4 hover:bg-white/[0.02] transition-colors">
            <span className="text-zinc-500 block text-[9px] sm:text-[10px] tracking-widest uppercase">DATE</span>
            <span className="text-white font-bold text-xs sm:text-sm tracking-wider">11 OCTOBER 2026</span>
          </div>
          <div className="p-4 hover:bg-white/[0.02] transition-colors">
            <span className="text-zinc-500 block text-[9px] sm:text-[10px] tracking-widest uppercase">PRIZE POOL</span>
            <span className="text-[#e50914] font-bold text-xs sm:text-sm tracking-wider">₹15,000 CASH</span>
          </div>
          <div className="p-4 hover:bg-white/[0.02] transition-colors">
            <span className="text-zinc-500 block text-[9px] sm:text-[10px] tracking-widest uppercase">VENUE</span>
            <span className="text-white font-bold text-xs sm:text-sm tracking-wider">JIS UNIVERSITY</span>
          </div>
        </motion.div>

        {/* Official Devfolio Console & Unified Community Portal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: transitionCurves.cinematic }}
          className="relative z-30 flex flex-col items-center gap-3.5 max-w-md w-full"
        >
          {/* Devfolio Official Console (Strict Single-Button Policy Compliant) */}
          <div className="w-full p-5 border border-white/[0.12] bg-[#0c0d12]/95 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col items-center gap-3.5">
            <div className="w-full flex items-center justify-between text-[11px] font-space-mono text-zinc-400 border-b border-white/[0.08] pb-2">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                STATUS: COMPLETED
              </span>
              <span className="text-[#e50914] font-bold">DEVFOLIO VERIFIED</span>
            </div>

            {/* Devfolio Official Button (Strict Single-Button Policy Compliant // Zero Downtime) */}
            <div className="w-full flex justify-center py-1">
              <a
                href={`https://${DEVFOLIO_SLUG}.devfolio.co/`}
                target="_blank"
                rel="noreferrer"
                id="devfolio-apply-btn"
                className="w-[312px] h-[44px] bg-white hover:bg-neutral-100 text-[#27333f] font-sans font-bold text-base tracking-normal rounded-[4px] shadow-[0_4px_20px_rgba(255,255,255,0.18)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.35)] transition-all flex items-center justify-center gap-2.5 cursor-pointer select-none group border border-white"
              >
                <svg
                  className="w-5 h-5 fill-[#27333f] transition-transform group-hover:scale-105"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.46 123.46"
                >
                  <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123.37a8 8 0 0 1-7.79-8.15C8.36 100.8 7.3 64.85 7.14 47.9A8 8 0 0 1 15 39.81c12.39-.77 48.6-1.57 48.6-1.57A55.45 55.45 0 0 1 115.46 68Z" />
                </svg>
                <span>Apply with Devfolio</span>
              </a>
            </div>

            {/* Unified "Join the Community" CTA Button pointing to Discord & WhatsApp in section below */}
            <a
              href="#community-outposts"
              className="w-full py-2.5 px-4 bg-white/[0.04] hover:bg-[#e50914]/20 border border-white/10 hover:border-[#e50914] text-zinc-300 hover:text-white transition-all text-xs font-space-mono uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#e50914] group-hover:scale-110 transition-transform" />
              <span>JOIN THE COMMUNITY</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#e50914] group-hover:translate-y-0.5 transition-transform" />
            </a>

            <p className="text-[10px] font-space-mono text-zinc-500 text-center pt-1 border-t border-white/[0.06] w-full">
              2,703 applications processed • 146 checked-in operatives • 45 projects submitted
            </p>
          </div>
        </motion.div>

        {/* Video Cinema Control Panel */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] font-space-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-[#e50914]" />
            <span className="tracking-wider">IMAGINARY FORCES // TITLE REEL</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleVideoPlayback}
              className="flex items-center gap-1 text-zinc-400 hover:text-white underline cursor-pointer"
            >
              {videoPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#e50914]" /> PAUSE VIDEO
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#e50914]" /> PLAY VIDEO
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hairline Bottom Telemetry Bar */}
      <div className="relative z-20 w-full border-t border-white/[0.08] bg-[#06080e] px-4 sm:px-8 py-2.5 font-space-mono text-[10px] text-zinc-500 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="text-[#e50914] font-semibold tracking-widest">
            COORDINATES: 22.6759° N, 88.3783° E
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline">FACILITY: JIS UNIVERSITY, AGARPARA</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-400">TELEMETRY LINK: ONLINE // DEVFOLIO: {DEVFOLIO_SLUG}</span>
        </div>
      </div>
    </div>
  );
}
