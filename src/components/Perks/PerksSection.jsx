import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, Sparkles, Coffee, Radio, Check } from "lucide-react";
import { transitionCurves } from "../../utils/motion";

const PERKS = [
  {
    code: "PROVISION // 01",
    icon: Award,
    title: "CODECRAFTERS VIP PLATFORM ACCESS",
    summary: "Winners received free platform subscriptions from CodeCrafters, unlocking advanced systems programming challenges, shell internals, and compiler construction tracks.",
    tag: "FOR WINNERS",
    sponsor: "POWERED BY CODECRAFTERS",
  },
  {
    code: "PROVISION // 02",
    icon: BookOpen,
    title: "MERCY FOR ANIMALS BOOKS & STATIONERY",
    summary: "Curated companion books, high-grade writing pens, and awareness literature provided to hackers on-site courtesy of our global partner Mercy for Animals.",
    tag: "ALL ATTENDEES",
    sponsor: "COURTESY OF MERCY FOR ANIMALS",
  },
  {
    code: "PROVISION // 03",
    icon: Sparkles,
    title: "HACKINVERSE DIE-CUT CONTRABAND & STICKERS",
    summary: "Exclusive Stranger Things themed HackInverse vinyl die-cut laptop stickers and official event collectibles.",
    tag: "OFFICIAL SWAG",
    sponsor: "HACKINVERSE PRODUCTION LAB",
  },
  {
    code: "PROVISION // 04",
    icon: Coffee,
    title: "ON-SITE COMMISSARY RATIONS & NETWORK",
    summary: "Continuous commissary catering, hot refreshments, lunch, and high-speed dedicated network infrastructure at JIS University, Agarpara.",
    tag: "CAMPUS AMENITIES",
    sponsor: "JIS UNIVERSITY FACILITY",
  },
];

export default function PerksSection() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="perks">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 05 // SWAG & PROVISIONS</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          SWAG & PERKS
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Verified partner contraband, educational subscriptions, and physical provisions."
        </p>
      </div>

      {/* 2-Column Minimalist Grid with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {PERKS.map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <motion.div
              key={perk.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: transitionCurves.cinematic }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
              className="p-8 border border-white/[0.08] bg-[#0c0d12] hover:border-red-600/70 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-red-500/30 bg-red-950/20 flex items-center justify-center text-red-500">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-space-mono text-[10px] text-zinc-400 tracking-widest uppercase">
                      {perk.code}
                    </span>
                  </div>
                  <span className="font-space-mono text-[9px] px-2 py-0.5 bg-red-950/40 border border-red-500/30 text-red-400 uppercase tracking-wider font-bold">
                    {perk.tag}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white tracking-wide mb-3">
                  {perk.title}
                </h3>

                <p className="font-space-mono text-xs text-zinc-300 leading-relaxed">
                  {perk.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-space-mono text-[10px]">
                <span className="text-zinc-500 uppercase">{perk.sponsor}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> VERIFIED
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* General Participant Reviews Callout as specified in doc */}
      <div className="mt-12 p-6 border border-white/[0.08] bg-white/[0.02] text-center font-space-mono text-xs text-zinc-300">
        <span className="text-red-500 font-bold uppercase tracking-widest block mb-1">
          COMMUNITY FEEDBACK & REVIEWS
        </span>
        <p className="max-w-2xl mx-auto text-zinc-400 text-[11px] leading-relaxed">
          Participant feedback across all 43 teams and 146 attendees was overwhelmingly positive, praising the intense 6-hour sprint focus, seamless on-site hospitality at JIS University, and collaborative mentor atmosphere.
        </p>
      </div>
    </section>
  );
}