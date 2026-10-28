import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle, ExternalLink, Shield, BookOpen, AlertOctagon } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { transitionCurves } from "../../utils/motion";

const COVENANTS = [
  {
    num: "01",
    title: "ORIGINAL CODE & 18H WINDOW",
    desc: "Development eligibility: Teams can utilize any 18 hours within the pre-event 24-hour window (10 Oct 12:00 AM – 11 Oct 12:00 AM) plus the 6-hour active on-site sprint on 11 October at JIS University.",
  },
  {
    num: "02",
    title: "MUTUAL RESPECT & ZERO TOLERANCE",
    desc: "Harassment, discrimination, offensive behaviour, or intimidation—online or physically—will result in immediate disqualification and permanent expulsion under Magistics Community Governance.",
  },
  {
    num: "03",
    title: "HARDWARE PREPARATION PROTOCOLS",
    desc: "Welding, soldering, 3D-printed enclosures, and mechanical fittings are permitted prior to the sprint. All software logic, firmware integration, and sensor telemetry must be demonstrated live.",
  },
  {
    num: "04",
    title: "CAMPUS SAFETY & PROHIBITED ITEMS",
    desc: "All operatives must check in with a valid Government-issued photo ID. Teams must bring their own electrical extension boards. Gas lighters, cigarettes, and e-cigarettes are strictly banned on campus.",
  },
];

export default function CodeOfConductSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto select-none" id="rules">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[11px] font-space-mono text-red-500 uppercase tracking-[0.25em] mb-4">
          <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
          <span>CHAPTER 13 // DIRECTIVES & ETHICS</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          CODE OF CONDUCT & HACKER GUIDE
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Official community standards, hardware safety protocols, and ethical governance."
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: transitionCurves.cinematic }}
        className="p-6 sm:p-10 bg-[#090b12] border border-zinc-800"
      >
        <div className="flex items-start gap-4 mb-8 pb-6 border-b border-zinc-800">
          <div className="w-10 h-10 bg-zinc-950 border border-red-500/40 flex items-center justify-center shrink-0 text-red-500">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel font-bold text-white text-lg md:text-xl tracking-wide">
              MAGISTICS COMMUNITY CODE OF CONDUCT & EVENT PROTOCOLS
            </h3>
            <p className="font-space-mono text-xs text-zinc-400 mt-1 leading-relaxed">
              HackInverse is governed by the official Magistics Community Code of Conduct, ensuring safety, radical inclusivity, and technical integrity for all participants.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 font-space-mono">
          {COVENANTS.map((cov, idx) => (
            <motion.div
              key={cov.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: transitionCurves.cinematic }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 20 } }}
              className="p-5 bg-[#06080e] border border-zinc-800 hover:border-red-600/70 transition-colors"
            >
              <h4 className="text-xs font-bold text-red-400 uppercase flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                {cov.num}. {cov.title}
              </h4>
              <p className="font-space-mono text-xs text-zinc-400 leading-relaxed">
                {cov.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dual Official Notion Links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-zinc-800 font-space-mono text-xs">
          <a
            href="https://app.notion.com/p/Magistics-Community-Code-of-Conduct-2ce4d7cdc44f8067b3e5d3d6bddb98d7"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white/[0.02] border border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-red-500" />
              <div>
                <span className="font-bold block text-white">MAGISTICS CODE OF CONDUCT</span>
                <span className="text-[10px] text-zinc-500">Official Notion Community Directive</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition-colors" />
          </a>

          <a
            href="https://app.notion.com/p/HackInverse-1-0-Hacker-s-Guide-3ed4d7cdc44f81cd945bc5620892bce8"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white/[0.02] border border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-red-500" />
              <div>
                <span className="font-bold block text-white">HACKINVERSE HACKER'S GUIDE</span>
                <span className="text-[10px] text-zinc-500">Rules, Check-in, Hardware Guidelines</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition-colors" />
          </a>
        </div>

        {/* Official Emergency Contact & Community Safety Outposts */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800 text-xs font-space-mono">
          <span className="text-zinc-500 text-center lg:text-left">
            EMERGENCY CONTACT & INCIDENT DISPATCH:{" "}
            <a href="mailto:hackinverse.contact@gmail.com" className="text-red-400 hover:underline font-bold">
              hackinverse.contact@gmail.com
            </a>
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/svTwnYX5XT"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#8ea1e1] hover:text-white hover:bg-[#5865F2]/25 transition-colors rounded-xs"
            >
              <FaDiscord className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>DISCORD OUTPOST</span>
            </a>
            <a
              href="https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366]/15 border border-[#25D366]/30 text-[#4ade80] hover:text-white hover:bg-[#25D366]/25 transition-colors rounded-xs"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WHATSAPP OUTPOST</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
