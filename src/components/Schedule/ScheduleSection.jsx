import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Radio } from "lucide-react";
import { transitionCurves } from "../../utils/motion";

const schedulePhases = {
  phase1: {
    phase: "PHASE 01",
    title: "ONLINE BUILD & ON-SITE INFILTRATION",
    date: "10-11 OCTOBER 2026 // MORNING",
    tagline: "Pre-event online build window, check-in at JIS University, opening keynote, and on-site sprint initiation.",
    events: [
      {
        time: "12:00 AM (10 OCT)",
        title: "Online Build Window Commences",
        tag: "VIRTUAL",
        desc: "24-hour virtual build window opens for participating squads across India.",
        status: "PRE-EVENT",
      },
      {
        time: "08:00 AM (11 OCT)",
        title: "Operative Check-In & Physical Badging",
        tag: "ON-SITE",
        desc: "Check-in at JIS University, Agarpara. 146 operatives and 43 teams badged and cleared.",
        status: "MANDATORY",
      },
      {
        time: "09:30 AM (11 OCT)",
        title: "Opening Ceremony & Problem Release",
        tag: "AUDITORIUM",
        desc: "Official keynote by Magistics leadership detailing track parameters and jury rubric.",
        status: "DIRECTIVE",
      },
      {
        time: "10:00 AM (11 OCT)",
        title: "6-Hour On-Site Hackday Sprint Commences",
        tag: "HACKING LIVE",
        desc: "Power grids active. Squads commence physical and software sprint.",
        status: "CRITICAL",
      },
    ],
  },
  phase2: {
    phase: "PHASE 02",
    title: "MID-DAY SPRINT & COMMISSARY FUEL",
    date: "11 OCTOBER 2026 // AFTERNOON",
    tagline: "Intensive building, mentor triage, meals, and project commit preparations.",
    events: [
      {
        time: "01:00 PM",
        title: "Commissary Lunch & Refreshment Break",
        tag: "RATIONS",
        desc: "Complimentary lunch and fuel served to keep all participating squads building at peak efficiency.",
        status: "INCLUDED",
      },
      {
        time: "02:30 PM",
        title: "Technical Mentorship & Desk-Side Triage",
        tag: "MENTORSHIP",
        desc: "Domain experts visit team stations to advise on architecture and live prototype demos.",
        status: "CHECKPOINT",
      },
      {
        time: "03:30 PM",
        title: "Final Commit Push & Devfolio Preparation",
        tag: "WAR ROOM",
        desc: "Teams finalize git repositories, demo videos, and submission documentation on Devfolio.",
        status: "CRITICAL",
      },
      {
        time: "04:00 PM",
        title: "HARD CODE FREEZE & PROJECT SUBMISSION LOCK",
        tag: "DEADLINE",
        desc: "The on-site 6-hour sprint officially concludes. 45 projects locked and submitted on Devfolio.",
        status: "TERMINAL",
      },
    ],
  },
  phase3: {
    phase: "PHASE 03",
    title: "EVALUATION, AWARDS & CLOSING",
    date: "11 OCTOBER 2026 // EVENING",
    tagline: "Live prototype judging, jury deliberation, grand awards ceremony, and event conclusion.",
    events: [
      {
        time: "04:30 PM",
        title: "Live Prototype Demonstrations & Judging",
        tag: "EVALUATION",
        desc: "Teams showcase live working systems across Open Innovation and Hardware tracks to the evaluation panel.",
        status: "JUDGING",
      },
      {
        time: "06:15 PM",
        title: "Grand Awards Ceremony & Declassification",
        tag: "CEREMONY",
        desc: "Announcement of top 3 winners, Hardware Champion, and Judges' Mention. ₹15,000 cash prizes awarded.",
        status: "AWARDS",
      },
      {
        time: "07:00 PM",
        title: "Official Close of HackInverse 1.0",
        tag: "DISPATCH",
        desc: "The 11-hour single-day offline hackday concludes. Swag distribution and photo archival.",
        status: "CONCLUDED",
      },
    ],
  },
};

export default function ScheduleSection() {
  const [activePhase, setActivePhase] = useState("phase1");

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-6xl mx-auto select-none" id="agenda">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Radio className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 07 // 11-HOUR TIMELINE</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          THE AGENDA
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Chronological schedule of HackInverse 1.0 on 11 October 2026 at JIS University."
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="flex justify-center mb-10 border-b border-white/[0.08]">
        <div className="flex flex-wrap gap-2 sm:gap-4 p-1">
          {Object.entries(schedulePhases).map(([key, data]) => {
            const isActive = activePhase === key;
            return (
              <motion.button
                key={key}
                onClick={() => setActivePhase(key)}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 sm:px-6 py-2.5 font-space-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  isActive
                    ? "text-white font-bold bg-[#e50914]/20 border-t-2 border-[#e50914]"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span>{data.phase}</span>
                <span className="hidden sm:inline text-zinc-500 text-[10px] ml-2">
                  // {data.title.split("&")[0].trim()}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: transitionCurves.cinematic }}
          className="border border-white/[0.08] p-6 sm:p-10 bg-[#06080e]/90"
        >
          {/* Phase Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-2">
            <div>
              <span className="font-space-mono text-[10px] text-red-500 font-bold uppercase tracking-widest block">
                {schedulePhases[activePhase].phase} // {schedulePhases[activePhase].date}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
                {schedulePhases[activePhase].title}
              </h3>
            </div>
            <p className="font-space-mono text-xs text-zinc-400 max-w-sm">
              {schedulePhases[activePhase].tagline}
            </p>
          </div>

          {/* Event Sequence Rows */}
          <div className="space-y-4">
            {schedulePhases[activePhase].events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: transitionCurves.cinematic }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 bg-white/[0.01] border border-white/[0.06] hover:border-red-500/50 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex items-center gap-1.5 font-space-mono text-xs text-red-400 font-bold min-w-[130px] shrink-0">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.time}</span>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-white text-sm sm:text-base tracking-wide">
                      {event.title}
                    </h4>
                    <p className="font-space-mono text-xs text-zinc-400 mt-1 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <span className="font-space-mono text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-zinc-300 uppercase">
                    {event.tag}
                  </span>
                  <span className="font-space-mono text-[9px] px-2 py-0.5 bg-red-950/30 border border-red-500/30 text-red-400 uppercase font-bold">
                    {event.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
