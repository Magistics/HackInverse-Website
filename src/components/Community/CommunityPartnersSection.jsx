import React from "react";
import { Users2, Network, ExternalLink, ArrowRight, Radio } from "lucide-react";

const partnersRow1 = [
  { name: "IEI SC ECE AOT", tag: "Institution of Engineers (India) • ECE", link: "#" },
  { name: "IEI SC CSE AOT", tag: "Institution of Engineers (India) • CSE", link: "#" },
  { name: "Titanium Robotics Community", tag: "Robotics & Hardware Syndicate", link: "#" },
  { name: "GDG on Campus MCKV", tag: "Google Developer Groups On Campus", link: "#" },
];

const partnersRow2 = [
  { name: "Last Minute Engineering", tag: "Engineering & Developer Collective", link: "#" },
  { name: "The Code Bird", tag: "Open Source & Coding Community", link: "#" },
  { name: "CodeRushX", tag: "Competitive Programming & Hackathons", link: "#" },
  { name: "Tech Kurukshetra", tag: "Tech Innovation & Collegiate Guild", link: "#" },
];

export default function CommunityPartnersSection() {
  return (
    <section className="relative py-24 select-none" id="community">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16 text-center">
        {/* Editorial Chapter Eyebrow */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[11px] font-space-mono text-red-500 uppercase tracking-[0.25em] mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
            <span>CHAPTER 10 // TELEMETRY NETWORK</span>
          </div>

          <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
            COMMUNITY NETWORK
          </h2>

          <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
            "United with premier collegiate engineering guilds and developer ecosystems across the subcontinent."
          </p>
        </div>
      </div>

      {/* Row 1: Leftward scroll marquee */}
      <div className="relative w-full overflow-hidden mb-4 flex border-y border-zinc-800/80 bg-[#06080e]/60 py-3">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 bg-[#0a0c12] border border-zinc-800/90 hover:border-red-600 transition-colors flex items-center gap-3.5 group shrink-0 min-w-[260px]"
            >
              <div className="w-8 h-8 bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-red-500 transition-colors shrink-0">
                <Network className="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="font-cinzel font-bold text-zinc-200 text-xs sm:text-sm group-hover:text-red-500 transition-colors truncate">
                  {partner.name}
                </h4>
                <p className="text-[10px] font-space-mono text-zinc-500 tracking-wider truncate">
                  {partner.tag}
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors ml-auto shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward scroll marquee */}
      <div className="relative w-full overflow-hidden flex border-b border-zinc-800/80 bg-[#06080e]/60 py-3">
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 bg-[#0a0c12] border border-zinc-800/90 hover:border-[#00f0ff] transition-colors flex items-center gap-3.5 group shrink-0 min-w-[260px]"
            >
              <div className="w-8 h-8 bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-[#00f0ff] transition-colors shrink-0">
                <Users2 className="w-4 h-4 text-zinc-400 group-hover:text-[#00f0ff] transition-colors" />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="font-cinzel font-bold text-zinc-200 text-xs sm:text-sm group-hover:text-[#00f0ff] transition-colors truncate">
                  {partner.name}
                </h4>
                <p className="text-[10px] font-space-mono text-zinc-500 tracking-wider truncate">
                  {partner.tag}
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors ml-auto shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Button-in-Button Minimalist CTA */}
      <div className="mt-14 flex justify-center px-4">
        <a
          href="https://discord.gg/svTwnYX5XT"
          target="_blank"
          rel="noreferrer"
          className="group pl-6 pr-2 py-2 bg-[#090b12] hover:bg-zinc-900 border border-zinc-800 hover:border-red-600/70 transition-all flex items-center gap-4 text-xs font-space-mono text-zinc-300 hover:text-white"
        >
          <span className="tracking-widest">WANT YOUR COMMUNITY TO JOIN THE EXPEDITION?</span>
          <div className="w-7 h-7 bg-red-600 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </section>
  );
}
