import React from "react";
import { Activity, MapPin, Compass, ArrowRight, Award, CheckCircle } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Duration() {
  return (
    <div className="relative w-full py-16 px-4 sm:px-8 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Minimalist Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERATIONAL DOSSIER // HACKINVERSE 1.0</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] text-white uppercase">
            THE 11-HOUR EXPEDITION
          </h2>
          <p className="mt-3 font-space-mono text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            HackInverse 1.0: A single-day offline hackday organized by Magistics on 11 October 2026 at JIS University, Agarpara.
          </p>
        </div>

        {/* 4 Chronological Temporal Chronograph Stat Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.08] divide-x divide-y md:divide-y-0 divide-white/[0.08] bg-white/[0.01] mb-12 text-center">
          {[
            { label: "ON-SITE SPRINT", val: "6", unit: "HOURS", id: "01", sub: "Intensive physical prototyping" },
            { label: "EVENT HOURS", val: "11", unit: "HOURS", id: "02", sub: "8:00 AM to 7:00 PM" },
            { label: "ONLINE BUILD", val: "24", unit: "HOURS", id: "03", sub: "12 AM 10 Oct – 12 AM 11 Oct" },
            { label: "PRIZE POOL", val: "15", unit: "THOUSAND ₹", id: "04", sub: "Distributed to 5 winning teams" },
          ].map((item) => (
            <div key={item.id} className="p-3.5 sm:p-6 md:p-8 flex flex-col items-center justify-center">
              <span className="font-space-mono text-[9px] sm:text-[10px] tracking-widest text-zinc-500 mb-1">
                INDEX // {item.id}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-space-mono text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                  {item.val}
                </span>
                <span className="font-space-mono text-xs sm:text-sm text-red-500 font-bold">
                  {item.unit}
                </span>
              </div>
              <span className="mt-2 font-space-mono text-[11px] tracking-widest text-zinc-300 font-medium uppercase">
                {item.label}
              </span>
              <span className="mt-1 font-space-mono text-[10px] text-zinc-500">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Authentic Specification Columns: DURATION, MODE, LOCATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] py-2 mb-10 bg-[#07090f]/75 backdrop-blur-md">
          {/* Spec 01: DURATION */}
          <div className="p-6 text-left">
            <div className="flex items-center justify-between text-zinc-500 font-space-mono text-[10px] mb-2">
              <span>SPECIFICATION // 01</span>
              <Activity className="w-3.5 h-3.5 text-[#e50914]" />
            </div>
            <span className="text-red-500 font-space-mono text-xs uppercase tracking-widest block font-bold">HACKING TIME</span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
              6 HOURS ON-SITE
            </h3>
            <p className="font-space-mono text-xs text-zinc-400 mt-2 leading-relaxed">
              6 hours of intense physical hacking plus pre-event online build window from 12 AM 10 Oct to 12 AM 11 Oct.
            </p>
          </div>

          {/* Spec 02: MODE */}
          <div className="p-6 text-left">
            <div className="flex items-center justify-between text-zinc-500 font-space-mono text-[10px] mb-2">
              <span>SPECIFICATION // 02</span>
              <Compass className="w-3.5 h-3.5 text-[#e50914]" />
            </div>
            <span className="text-red-500 font-space-mono text-xs uppercase tracking-widest block font-bold">EVENT FORMAT</span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
              OFFLINE HACKDAY
            </h3>
            <p className="font-space-mono text-xs text-zinc-400 mt-2 leading-relaxed">
              Single-day offline hackday organized exclusively by Magistics for student developers and creators.
            </p>
          </div>

          {/* Spec 03: LOCATION */}
          <div className="p-6 text-left">
            <div className="flex items-center justify-between text-zinc-500 font-space-mono text-[10px] mb-2">
              <span>SPECIFICATION // 03</span>
              <MapPin className="w-3.5 h-3.5 text-[#e50914]" />
            </div>
            <span className="text-red-500 font-space-mono text-xs uppercase tracking-widest block font-bold">CAMPUS VENUE</span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
              JIS UNIVERSITY
            </h3>
            <p className="font-space-mono text-xs text-zinc-400 mt-2 leading-relaxed">
              Agarpara, Kolkata. Complete campus facility with dedicated power grids, high-speed connectivity, and mentor support.
            </p>
          </div>
        </div>

        {/* Direct Action Hub */}
        <div id="community-outposts" className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white/[0.02] border border-white/[0.08] text-xs font-space-mono scroll-mt-24">
          <div className="flex items-center gap-2 text-zinc-400">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>SEASON 01 CONCLUDED // ALL AWARDS & DEVFOLIO RESULTS ARCHIVED</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://linktr.ee/Magistics_official"
              target="_blank"
              rel="noreferrer"
              className="text-[#e50914] hover:underline flex items-center gap-1 font-bold text-xs"
            >
              <span>MAGISTICS HUB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://discord.gg/svTwnYX5XT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5865F2]/20 border border-[#5865F2]/40 text-[#8ea1e1] hover:bg-[#5865F2]/30 transition-colors rounded-xs"
            >
              <FaDiscord className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>DISCORD</span>
            </a>
            <a
              href="https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ade80] hover:bg-[#25D366]/30 transition-colors rounded-xs"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
