import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Shield, Gavel, Compass, Building2, Briefcase, CheckCircle2 } from "lucide-react";

const judgesAndMentors = [
  // --- JUDGES (6) ---
  {
    id: "jury-01",
    name: "Shounak Ghosh",
    role: "Judge",
    category: "judges",
    company: "Heizen",
    jobTitle: "Forward Deployed Engineer",
    domain: "Distributed Systems & Scalable Architecture",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-01",
    image: "/judges/shounak-ghosh.png",
  },
  {
    id: "jury-02",
    name: "Anirban Basak",
    role: "Judge",
    category: "judges",
    company: "Switch Digits",
    jobTitle: "Design Engineer",
    domain: "Hardware Interfaces & Embedded Products",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-02",
    image: "/judges/anirban-basak.png",
  },
  {
    id: "jury-03",
    name: "Krishnendu Dasgupta",
    role: "Judge",
    category: "judges",
    company: "Altor",
    jobTitle: "Ex- Backend",
    domain: "High-Throughput Microservices & Reliability",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-03",
    image: "/judges/krishnendu-dasgupta.png",
  },
  {
    id: "jury-04",
    name: "Devesh Tulshyan",
    role: "Judge",
    category: "judges",
    company: "Tata Consultancy Services",
    jobTitle: "Full Stack Engineer",
    domain: "Enterprise Full Stack & Modern Web Systems",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-04",
    image: "/judges/devesh-tulshyan.png",
  },
  {
    id: "jury-05",
    name: "Daipayan Guha",
    role: "Judge",
    category: "judges",
    company: "TCS",
    jobTitle: "AI + Cloud Engineer",
    domain: "Autonomous AI Pipelines & Cloud Native Infra",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-05",
    image: "/judges/daipayan-guha.png",
  },
  {
    id: "jury-06",
    name: "Avik Agarwala",
    role: "Judge",
    category: "judges",
    company: "TCS",
    jobTitle: "AI Engineer",
    domain: "Deep Learning, Neural Models & Algorithmic Optimization",
    clearance: "CLEARANCE LVL-5",
    idCode: "JURY-06",
    image: "/judges/avik-agarwala.png",
  },

  // --- MENTORS (3) ---
  {
    id: "mentor-01",
    name: "Viraj Anand",
    role: "Mentor",
    category: "mentors",
    company: "TCS",
    jobTitle: "Systems Engineer",
    domain: "Core Operating Systems, Concurrency & Triage",
    clearance: "CLEARANCE LVL-4",
    idCode: "MENTOR-01",
    image: "/judges/viraj-anand.png",
  },
  {
    id: "mentor-02",
    name: "Arpan Chowdhury",
    role: "Mentor",
    category: "mentors",
    company: "Green Tree Capital & Asset Management",
    jobTitle: "SDE Trainee",
    domain: "Financial Engineering & Quantitative Systems",
    clearance: "CLEARANCE LVL-4",
    idCode: "MENTOR-02",
    image: "/judges/arpan-chowdhury.png",
  },
  {
    id: "mentor-03",
    name: "Supriya Saha",
    role: "Mentor",
    category: "mentors",
    company: "Digitalyz",
    jobTitle: "Software Engineer",
    domain: "Full-Lifecycle Application Delivery & Web Infra",
    clearance: "CLEARANCE LVL-4",
    idCode: "MENTOR-03",
    image: "/judges/supriya-saha.png",
  },
];

export default function MentorsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredRoster = judgesAndMentors.filter((person) => {
    if (activeTab === "all") return true;
    return person.category === activeTab;
  });

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="mentors">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 08 // TECHNICAL JURY & MENTORSHIP COUNCIL</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          THE ADVISORY COUNCIL
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-2xl">
          "Declassified dossiers of our industry judges and on-site technical mentors who benchmarked, guided, and evaluated the 45 finalist engineering squads at JIS University."
        </p>

        {/* Interactive Segmented Filter */}
        <div className="mt-8 flex items-center p-1 bg-[#090b12] border border-white/10 rounded-sm font-space-mono text-xs">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 transition-all cursor-pointer relative uppercase tracking-wider ${
              activeTab === "all" ? "text-white font-bold bg-[#e50914]" : "text-zinc-400 hover:text-white"
            }`}
          >
            ALL OPERATIVES ({judgesAndMentors.length})
          </button>
          <button
            onClick={() => setActiveTab("judges")}
            className={`px-4 py-2 transition-all cursor-pointer relative uppercase tracking-wider ${
              activeTab === "judges" ? "text-white font-bold bg-[#e50914]" : "text-zinc-400 hover:text-white"
            }`}
          >
            JUDGES PANEL (6)
          </button>
          <button
            onClick={() => setActiveTab("mentors")}
            className={`px-4 py-2 transition-all cursor-pointer relative uppercase tracking-wider ${
              activeTab === "mentors" ? "text-white font-bold bg-[#e50914]" : "text-zinc-400 hover:text-white"
            }`}
          >
            MENTORSHIP CORPS (3)
          </button>
        </div>
      </div>

      {/* Roster Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <AnimatePresence>
          {filteredRoster.map((person) => {
            const isJudge = person.role === "Judge";

            return (
              <motion.div
                layout
                key={person.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between border border-white/[0.08] hover:border-white/20 bg-[#090b12]/90 backdrop-blur-md p-5 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(229,9,20,0.15)]"
              >
                {/* Stranger Things Corner Crosshairs */}
                <span className="absolute top-1.5 left-1.5 text-zinc-600 font-mono text-[9px] pointer-events-none">+</span>
                <span className="absolute top-1.5 right-1.5 text-zinc-600 font-mono text-[9px] pointer-events-none">+</span>
                <span className="absolute bottom-1.5 left-1.5 text-zinc-600 font-mono text-[9px] pointer-events-none">+</span>
                <span className="absolute bottom-1.5 right-1.5 text-zinc-600 font-mono text-[9px] pointer-events-none">+</span>

                <div>
                  {/* Card Header Telemetry */}
                  <div className="flex items-center justify-between text-[10px] font-space-mono text-zinc-400 pb-3 mb-4 border-b border-white/[0.08]">
                    <span className="tracking-widest font-bold text-zinc-300">{person.idCode}</span>
                    <span
                      className={`px-2 py-0.5 border text-[9px] font-semibold tracking-wider uppercase inline-flex items-center gap-1 ${
                        isJudge
                          ? "bg-[#e50914]/15 border-[#e50914]/40 text-[#ff4d5a]"
                          : "bg-cyan-950/30 border-cyan-500/40 text-cyan-400"
                      }`}
                    >
                      {isJudge ? <Gavel className="w-2.5 h-2.5" /> : <Compass className="w-2.5 h-2.5" />}
                      {isJudge ? "EVALUATION JURY" : "TECHNICAL MENTOR"}
                    </span>
                  </div>

                  {/* Photo / Classified Avatar Container */}
                  <div className="relative w-full aspect-square mb-5 overflow-hidden border border-white/[0.1] bg-[#05060a]">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      /* Stylized Monogram Fallback for Shounak Ghosh */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0e1017] via-[#08090d] to-[#040407] text-center p-4 relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-20 pointer-events-none"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, rgba(229,9,20,0.3) 1px, transparent 1px)",
                            backgroundSize: "14px 14px",
                          }}
                        />
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center font-cinzel text-2xl font-bold text-zinc-300 mb-2 group-hover:border-[#e50914] group-hover:text-[#e50914] transition-colors shadow-lg">
                          SG
                        </div>
                        <span className="font-space-mono text-[9px] tracking-widest text-[#e50914] uppercase">
                          CLASSIFIED PROFILE
                        </span>
                        <span className="font-space-mono text-[8px] text-zinc-500 mt-0.5">
                          FORWARD DEPLOYED JURY
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>

                  {/* Operative Identity */}
                  <div className="text-left">
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-[#e50914] transition-colors leading-snug">
                      {person.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-space-mono text-zinc-300 font-semibold mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{person.jobTitle}</span>
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/10 text-[11px] font-space-mono text-zinc-200">
                      <Building2 className="w-3 h-3 text-[#e50914] shrink-0" />
                      <span className="font-medium tracking-wide">{person.company}</span>
                    </div>

                    <p className="mt-3 text-[11px] font-space-mono text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-2.5">
                      {person.domain}
                    </p>
                  </div>
                </div>

                {/* Card Footer Telemetry */}
                <div className="pt-3.5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-space-mono text-zinc-500">
                  <span className="inline-flex items-center gap-1 text-zinc-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    VERIFIED DOSSIER
                  </span>
                  <span className={isJudge ? "text-[#e50914] font-semibold" : "text-cyan-400 font-semibold"}>
                    {person.clearance}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Summary Clearance Strip */}
      <div className="mt-12 p-4 border border-white/[0.08] bg-[#07090f]/75 flex flex-wrap items-center justify-between gap-4 font-space-mono text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#e50914]" />
          <span className="text-white font-semibold">COUNCIL BENCHMARK:</span>
          <span>6 JURY MEMBERS • 3 TECHNICAL MENTORS • 45 SUBMITTED PROJECTS</span>
        </div>
        <div className="text-[10px] text-zinc-500 tracking-widest uppercase">
          EVALUATION PROTOCOL: JIS UNIVERSITY // KOLKATA
        </div>
      </div>
    </section>
  );
}
