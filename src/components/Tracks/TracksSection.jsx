import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Radio, CheckCircle, Award } from "lucide-react";
import { transitionCurves } from "../../utils/motion";

const TRACKS = [
  {
    id: "TRACK // 01",
    name: "OPEN INNOVATION TRACK",
    category: "CROSS-DISCIPLINARY SOFTWARE & CREATIVE TECH",
    hazard: "UNRESTRICTED PROBLEM SPACE",
    icon: Code,
    summary: "The primary battleground for software architects, web innovators, and algorithm designers. Teams had complete freedom to architect high-impact solutions across AI, developer tools, distributed web applications, and community platforms.",
    challenges: [
      "Open domain exploration: Full stack, cloud, system utilities, and machine learning",
      "End-to-end functionality built and demonstrated during the 6-hour on-site sprint",
      "Real-world utility, user experience, and architectural elegance evaluated by expert jury",
    ],
    tools: ["React", "Python", "Node.js", "Rust", "Next.js", "PyTorch", "TailwindCSS"],
    bounty: "₹13,000 Total Cash (1st, 2nd, 3rd + Judges' Special Mention)",
    winners: "1st: tropical crush (₹5k) • 2nd: ChatMasala (₹4k) • 3rd: Draft (₹3k) • Mention: Logic Forge (₹1k)",
  },
  {
    id: "TRACK // 02",
    name: "HARDWARE TRACK",
    category: "EMBEDDED IOT, MICROCONTROLLERS & ROBOTICS",
    hazard: "PHYSICAL COMPUTING DOMAIN",
    icon: Cpu,
    summary: "A dedicated physical computing arena where builders wired microcontrollers, sensor arrays, radio transceivers, and embedded robotics to interact directly with the tangible physical realm.",
    challenges: [
      "Tactile hardware integration with Arduino, ESP32, Raspberry Pi, and sensor networks",
      "Low-level firmware programming and reliable hardware-to-software telemetry pipelines",
      "Functional physical prototype demonstrated live before the hardware jury",
    ],
    tools: ["C/C++", "ESP32", "Arduino", "Raspberry Pi", "LoRa", "Circuitry", "Sensors"],
    bounty: "₹2,000 Cash",
    winners: "Hardware Champion: Team Code breakerz (₹2,000)",
  },
];

export default function TracksSection() {
  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="tracks">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 04 // CHALLENGE VECTORS</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          THE CHALLENGE TRACKS
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "The two verified competitive domains of HackInverse 1.0."
        </p>
      </div>

      {/* 2 Focused Editorial Track Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {TRACKS.map((track, idx) => {
          const Icon = track.icon;
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: transitionCurves.cinematic }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
              className="relative p-8 border border-white/[0.1] bg-[#0c0d12]/90 flex flex-col justify-between hover:border-red-600/70 transition-all shadow-xl group"
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-red-500/30 bg-red-950/20 flex items-center justify-center text-red-500 group-hover:bg-red-900/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-space-mono text-[10px] text-zinc-400 tracking-widest uppercase block">
                        {track.id}
                      </span>
                      <span className="font-cinzel text-lg font-bold text-white tracking-wide">
                        {track.name}
                      </span>
                    </div>
                  </div>
                  <span className="font-space-mono text-[9px] px-2 py-0.5 bg-red-950/40 border border-red-500/30 text-red-400 uppercase tracking-wider">
                    {track.hazard}
                  </span>
                </div>

                <p className="font-space-mono text-xs text-zinc-300 leading-relaxed mb-6">
                  {track.summary}
                </p>

                {/* Challenges */}
                <div className="mb-6 space-y-2">
                  <span className="font-space-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">
                    EVALUATION PILLARS:
                  </span>
                  {track.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-space-mono text-zinc-400">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Tool Stack */}
                <div className="mb-6">
                  <span className="font-space-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">
                    REPRESENTATIVE STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/[0.04] border border-white/10 text-zinc-300 text-[10px] font-space-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Winners & Bounty Band */}
              <div className="pt-5 border-t border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs font-space-mono">
                  <span className="text-zinc-400">ALLOCATION:</span>
                  <span className="text-red-400 font-bold">{track.bounty}</span>
                </div>
                <div className="p-2.5 bg-white/[0.02] border border-white/5 font-space-mono text-[11px] text-zinc-300">
                  <span className="text-zinc-500 block text-[9px] uppercase">OFFICIAL RESULTS:</span>
                  <span className="text-white font-medium">{track.winners}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
