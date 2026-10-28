import React from "react";
import { ArrowUpRight, Radio, Award, Shield, Sparkles, Layers } from "lucide-react";
import { sponsorTiers } from "./SponsorsData";
import { motion } from "framer-motion";
import { transitionCurves } from "../../utils/motion";

export default function SponsorsSection() {
  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="sponsors">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 09 // INSTITUTIONAL ALLIANCES</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          OFFICIAL SPONSORS & PARTNERS
        </h2>

        <p className="mt-3 font-space-mono text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto">
          The verified institutional partners, tooling providers, and ecosystem benefactors powering HackInverse.
        </p>
      </div>

      {/* Tiered Sponsor Architecture */}
      <div className="space-y-14">
        {sponsorTiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className="border border-white/[0.08] p-6 sm:p-10 bg-white/[0.01] relative overflow-hidden"
          >
            {/* Top Tier Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.07] gap-3">
              <div className="flex items-center gap-3">
                <span className="p-1.5 bg-red-950/40 border border-red-500/30 text-red-500 rounded">
                  {tier.id === "gold" ? (
                    <Award className="w-4 h-4 text-amber-400" />
                  ) : tier.id === "silver" ? (
                    <Shield className="w-4 h-4 text-zinc-300" />
                  ) : (
                    <Layers className="w-4 h-4 text-red-400" />
                  )}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-space-mono tracking-[0.2em] text-red-500/90 uppercase">
                      {tier.tierBadge}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.08em] text-white">
                    {tier.tierTitle}
                  </h3>
                </div>
              </div>

              <p className="font-space-mono text-[11px] text-zinc-400 max-w-md sm:text-right">
                {tier.description}
              </p>
            </div>

            {/* Sponsor Cards Grid */}
            <div className={`grid gap-6 ${tier.gridCols}`}>
              {tier.sponsors.map((sponsor, idx) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08 + tierIdx * 0.1,
                    ease: transitionCurves.cinematic,
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group p-6 border transition-all flex flex-col items-center justify-between relative shadow-lg ${
                    sponsor.highlight
                      ? "border-amber-500/40 bg-gradient-to-b from-[#14120a] to-[#0c0d12] hover:border-amber-400"
                      : sponsor.editionBadge
                      ? "border-red-500/30 bg-gradient-to-b from-[#160c0e] to-[#0c0d12] hover:border-red-500"
                      : "border-white/[0.08] bg-[#0c0d12] hover:border-red-500/60"
                  } min-h-[200px]`}
                >
                  {/* Top Meta Line */}
                  <div className="w-full flex items-center justify-between text-[10px] font-space-mono pb-2 border-b border-white/[0.05]">
                    <span
                      className={
                        sponsor.highlight
                          ? "text-amber-400/90"
                          : sponsor.editionBadge
                          ? "text-red-400/90"
                          : "text-zinc-500"
                      }
                    >
                      {sponsor.badge}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  </div>

                  {/* Logo Display Container */}
                  <div className="w-full h-24 flex items-center justify-center my-4 px-4">
                    {sponsor.needsWhiteBg ? (
                      <div className="bg-white/95 px-5 py-2.5 rounded-sm shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={sponsor.src}
                          alt={sponsor.alt}
                          className="max-h-10 max-w-[160px] object-contain"
                        />
                      </div>
                    ) : (
                      <img
                        src={sponsor.src}
                        alt={sponsor.alt}
                        className={`max-h-14 max-w-[85%] object-contain filter brightness-110 group-hover:scale-105 transition-transform duration-300 ${
                          sponsor.name === "CodeCrafters" ? "contrast-125" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Partner Name & Role */}
                  <div className="w-full text-center pt-3 border-t border-white/[0.05]">
                    {sponsor.editionBadge && (
                      <span className="inline-block px-2 py-0.5 mb-1.5 text-[9px] font-space-mono text-red-400 bg-red-950/60 border border-red-500/30 tracking-widest uppercase rounded">
                        {sponsor.editionBadge}
                      </span>
                    )}
                    <h4 className="font-cinzel font-bold text-white text-base group-hover:text-red-400 transition-colors">
                      {sponsor.name}
                    </h4>
                    <p className="font-space-mono text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {sponsor.desc}
                    </p>
                  </div>

                  {/* Corner Accent for Highlighted Sponsors */}
                  {sponsor.highlight && (
                    <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                      <div className="absolute transform rotate-45 bg-amber-500/30 text-[8px] font-mono text-amber-200 right-[-24px] top-[6px] w-[64px] text-center">
                        KEY
                      </div>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Alliance Callout Banner */}
      <div className="mt-12 border border-white/[0.06] p-6 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-red-500 animate-pulse hidden sm:block" />
          <div>
            <div className="text-[11px] font-space-mono text-zinc-400">
              INTERESTED IN COLLABORATING OR SPONSORING FUTURE EDITIONS?
            </div>
            <div className="text-xs font-cinzel text-zinc-200 tracking-wider">
              CONNECT WITH THE MAGISTICS PARTNERSHIPS TEAM
            </div>
          </div>
        </div>

        <a
          href="mailto:hackinverse.contact@gmail.com?subject=Sponsorship%20Inquiry%20//%20HackInverse"
          className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/40 bg-red-950/30 hover:bg-red-900/50 text-[#ff2a3a] text-xs font-space-mono tracking-widest uppercase transition-all"
        >
          <span>INITIATE CONTACT</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
