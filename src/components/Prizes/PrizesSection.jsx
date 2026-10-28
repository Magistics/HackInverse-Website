import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Trophy, Radio, Sparkles } from "lucide-react";
import prize1Inner from "../../assets/1st-inner.png";
import prize2Inner from "../../assets/2nd-inner.png";
import prize3Inner from "../../assets/3rd-inner.png";
import { transitionCurves } from "../../utils/motion";

const MAIN_PRIZES = [
  {
    tier: "02 // SECOND POSITION",
    title: "FIRST RUNNER-UP",
    team: "TEAM CHATMASALA",
    cash: "₹4,000 CASH",
    totalVal: "$180/MEMBER ($720/TEAM)",
    inner: prize2Inner,
    accent: "#cbd5e1",
    orderClass: "order-2 md:order-1",
    perks: [
      "₹4,000 Cash Bounty",
      "1-Year CodeCrafters VIP Platform Access ($180 worth per member)",
      "First Runner-Up Custom Trophy",
      "Mercy for Animals Books & Pens",
      "Official HackInverse Contraband & Stickers",
    ],
  },
  {
    tier: "01 // GRAND CHAMPION",
    title: "HAWKINS APEX WINNER",
    team: "TEAM TROPICAL CRUSH",
    cash: "₹5,000 CASH",
    totalVal: "$360/MEMBER ($1,440/TEAM)",
    inner: prize1Inner,
    accent: "#e50914",
    featured: true,
    orderClass: "order-1 md:order-2",
    perks: [
      "₹5,000 Cash Bounty",
      "2-Year CodeCrafters VIP Platform Access ($360 worth per member)",
      "Grand Champion Demogorgon Trophy",
      "Mercy for Animals Books & Exclusive Pens",
      "Exclusive HackInverse Contraband & Stickers Pack",
      "Verified Devfolio Season 1 Winner Badge",
    ],
  },
  {
    tier: "03 // THIRD POSITION",
    title: "SECOND RUNNER-UP",
    team: "TEAM DRAFT",
    cash: "₹3,000 CASH",
    totalVal: "$90/MEMBER ($360/TEAM)",
    inner: prize3Inner,
    accent: "#f59e0b",
    orderClass: "order-3 md:order-3",
    perks: [
      "₹3,000 Cash Bounty",
      "6-Month CodeCrafters VIP Platform Access ($90 worth per member)",
      "Second Runner-Up Custom Trophy",
      "Mercy for Animals Books & Pens",
      "Official HackInverse Stickers",
    ],
  },
];

const SPECIAL_AWARDS = [
  {
    title: "HARDWARE TRACK CHAMPION",
    team: "TEAM CODE BREAKERZ",
    amount: "₹2,000 CASH",
    sponsor: "HARDWARE TRACK",
    desc: "Awarded for exceptional physical computing, embedded circuits, and IoT architecture.",
  },
  {
    title: "JUDGES' SPECIAL MENTION",
    team: "TEAM LOGIC FORGE",
    amount: "₹1,000 CASH",
    sponsor: "EXCELLENCE IN INNOVATION",
    desc: "Awarded by the technical evaluation panel for remarkable problem-solving and architectural grit.",
  },
];

export default function PrizesSection() {
  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="prizes">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 06 // DECLASSIFIED ROLL OF HONOR</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          THE WINNERS & BOUNTIES
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Official HackInverse 1.0 winners, cash allocations, and CodeCrafters VIP memberships."
        </p>

        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-400 font-space-mono text-xs uppercase tracking-widest">
          <span>TOTAL POOL: ₹15,000 CASH + $2,500+ IN CODECRAFTERS VIP SUBSCRIPTIONS</span>
        </div>
      </div>

      {/* Main 3 Podiums Array with Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16 pt-8">
        {MAIN_PRIZES.map((prize, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: transitionCurves.cinematic }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 350, damping: 20 } }}
            className={`relative flex flex-col justify-between border bg-[#06080e] p-6 sm:p-8 transition-all ${prize.orderClass} ${
              prize.featured
                ? "border-[#e50914] md:-translate-y-6 shadow-[0_0_40px_rgba(229,9,20,0.35)] bg-gradient-to-b from-[#130709] to-[#06080e]"
                : "border-white/[0.1] hover:border-white/20"
            }`}
          >
            {prize.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#e50914] text-white font-space-mono text-[10px] tracking-widest uppercase font-bold shadow-md flex items-center gap-1.5">
                <Trophy className="w-3 h-3" />
                <span>CHAMPION OF THE BREACH</span>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="font-space-mono text-[11px] text-zinc-500 tracking-wider">
                  {prize.tier}
                </span>
                <span className="text-xs font-space-mono font-bold" style={{ color: prize.accent }}>
                  {prize.totalVal}
                </span>
              </div>

              {/* Inner Artistic Graphic */}
              <div className="w-full h-36 flex items-center justify-center my-4 overflow-hidden">
                <img
                  src={prize.inner}
                  alt={prize.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Winner Name Banner */}
              <div className="my-4 p-3 bg-white/[0.03] border border-white/10 text-center">
                <span className="block font-space-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-0.5">
                  VERIFIED WINNER
                </span>
                <span className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wider">
                  {prize.team}
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                  {prize.title}
                </h3>
                <div className="mt-2 text-2xl sm:text-3xl font-space-mono font-bold text-[#e50914]">
                  {prize.cash}
                </div>
              </div>

              {/* Perks List */}
              <ul className="space-y-3 pt-6 border-t border-white/[0.08] font-space-mono text-xs text-zinc-300">
                {prize.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#e50914] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Track & Jury Mention Awards */}
      <div className="border border-white/[0.08] p-6 sm:p-10 bg-white/[0.01]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#e50914]" />
            <h4 className="font-cinzel font-bold text-white text-lg tracking-wider uppercase">
              TRACK & SPECIAL JURY RECOGNITIONS
            </h4>
          </div>
          <span className="font-space-mono text-[10px] text-zinc-400">
            TOTAL ALLOCATED: ₹3,000 CASH
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIAL_AWARDS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: transitionCurves.cinematic }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 border border-white/[0.08] bg-[#0c0d12] hover:border-red-500/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="font-space-mono text-[10px] text-zinc-400 tracking-widest uppercase block">
                    {item.sponsor}
                  </span>
                  <h5 className="font-cinzel font-bold text-white text-base mt-0.5">
                    {item.title}
                  </h5>
                </div>
                <span className="font-space-mono text-lg font-bold text-red-500 shrink-0">
                  {item.amount}
                </span>
              </div>

              {/* Verified Winner Squad */}
              <div className="mb-3 px-3 py-1.5 bg-red-950/20 border border-red-500/30 font-space-mono text-xs text-zinc-200">
                <span className="text-zinc-400 text-[10px] uppercase block">WINNING SQUAD:</span>
                <span className="text-white font-bold tracking-wider">{item.team}</span>
              </div>

              <p className="font-space-mono text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
