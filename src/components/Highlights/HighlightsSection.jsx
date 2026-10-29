import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Film, Eye, X, ZoomIn, Radio, Sparkles } from "lucide-react";

const HIGHLIGHT_PHOTOS = [
  {
    id: "photo-01",
    src: "/highlights/check-in-line.jpg",
    title: "OPERATIVE REGISTRATION QUEUE",
    location: "Main Auditorium Corridor",
    timestamp: "11 OCT 2025 // 08:30 AM",
    caption: "Over 140 checked-in builders queueing up for badge verification and event registration.",
  },
  {
    id: "photo-02",
    src: "/highlights/check-in.jpg",
    title: "ACCREDITATION & BADGE DISPATCH",
    location: "Registration Terminal",
    timestamp: "11 OCT 2025 // 09:15 AM",
    caption: "Participating hacker squads receiving their official identity credentials and access passes.",
  },
  {
    id: "photo-03",
    src: "/highlights/starting-keynote.jpg",
    title: "INCOMING MISSION BRIEFING",
    location: "Main Auditorium",
    timestamp: "11 OCT 2025 // 09:45 AM",
    caption: "The auditorium buzzing with anticipation as squads assemble for the HackInverse 1.0 commencement.",
  },
  {
    id: "photo-04",
    src: "/highlights/speech-lead-organizer.png",
    title: "KEYNOTE & CHALLENGE REVEAL",
    location: "Stage Podium",
    timestamp: "11 OCT 2025 // 10:15 AM",
    caption: "Lead Organizer Abhirup Datta Khan addressing the 45 finalist engineering squads before sprint launch.",
  },
  {
    id: "photo-05",
    src: "/highlights/hacking-area.jpg",
    title: "THE SPRINT ARENA IN MOTION",
    location: "Central Hacking Chamber",
    timestamp: "11 OCT 2025 // 11:30 AM",
    caption: "Teams locked in intense focus, prototyping autonomous systems, web architectures, and hardware circuits.",
  },
  {
    id: "photo-06",
    src: "/highlights/mentoring-round-1.jpg",
    title: "FIELD ARCHITECTURE TRIAGE",
    location: "Consultation Bay",
    timestamp: "11 OCT 2025 // 12:45 PM",
    caption: "Deep dive triage session debugging concurrency bugs and physical microcontroller sensor telemetry.",
  },
  {
    id: "photo-07",
    src: "/highlights/mentoring-round.jpg",
    title: "TECHNICAL JURY MENTORSHIP",
    location: "Squad Workstations",
    timestamp: "11 OCT 2025 // 01:30 PM",
    caption: "Industry mentors reviewing system architectures, database schemas, and edge case resilience.",
  },
  {
    id: "photo-08",
    src: "/highlights/swags-distribution.jpg",
    title: "CONTRABAND & SWAG DISPATCH",
    location: "Logistics Outpost",
    timestamp: "11 OCT 2025 // 02:15 PM",
    caption: "Official HackInverse stickers, merchandise, and partner kits distributed to all operatives.",
  },
  {
    id: "photo-09",
    src: "/highlights/hacking-area-1.jpg",
    title: "DAYLIGHT PROTOTYPING SPRINT",
    location: "Lab Bay 04",
    timestamp: "11 OCT 2025 // 02:45 PM",
    caption: "Builders collaborating across microcontrollers, LoRa sensors, and web microservices.",
  },
  {
    id: "photo-10",
    src: "/highlights/judging-round.jpg",
    title: "THE EVALUATION GAUNTLET",
    location: "Hardware & AI Arena",
    timestamp: "11 OCT 2025 // 03:30 PM",
    caption: "Live demonstrations of working prototypes under the scrutiny of our 6-member expert jury.",
  },
  {
    id: "photo-11",
    src: "/highlights/final-moments.jpg",
    title: "FINAL CODE FREEZE",
    location: "Countdown Terminal",
    timestamp: "11 OCT 2025 // 04:00 PM",
    caption: "The electric final seconds as squads push git tags and finalize their Devfolio submissions.",
  },
  {
    id: "photo-12",
    src: "/highlights/orgs-and-leads.jpg",
    title: "THE ORGANIZING COMMITTEE COUNCIL",
    location: "Auditorium Stage",
    timestamp: "11 OCT 2025 // 05:15 PM",
    caption: "HackInverse organizing leadership and core team leads assembled following the successful evaluation rounds.",
  },
  {
    id: "photo-13",
    src: "/highlights/prize-distribution.jpg",
    title: "THE VICTORY PODIUM",
    location: "Main Stage",
    timestamp: "11 OCT 2025 // 05:45 PM",
    caption: "₹15,000 cash bounties and CodeCrafters VIP grants awarded to top champion teams.",
  },
  {
    id: "photo-14",
    src: "/highlights/group-image.jpg",
    title: "THE ALLIANCE COMMUNION",
    location: "JIS University Quad",
    timestamp: "11 OCT 2025 // 06:30 PM",
    caption: "The entire HackInverse 1.0 builder syndicate, organizers, judges, and mentors assembled.",
  },
];

export default function HighlightsSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to ensure a seamless infinite horizontal marquee
  const marqueeItems = [...HIGHLIGHT_PHOTOS, ...HIGHLIGHT_PHOTOS];

  return (
    <section className="relative w-full py-24 select-none overflow-hidden" id="highlights">
      {/* Top Background Ambience & Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090f]/60 to-transparent pointer-events-none" />

      {/* Chapter Masthead */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-12 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <Film className="w-3.5 h-3.5 text-[#e50914] animate-pulse" />
          <span>CHAPTER 10 // ON-GROUND FIELD ARCHIVES</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          EVENT HIGHLIGHTS & MEMORIES
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Declassified 35mm archival snapshots capturing check-in intensity, live jury demonstrations, and the final victory podium at JIS University."
        </p>

        {/* Telemetry Tag */}
        <div className="mt-4 inline-flex items-center gap-3 text-[10px] font-space-mono text-zinc-500">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            MOTION: HORIZONTAL REEL ACTIVE
          </span>
          <span>•</span>
          <span>HOVER OVER ANY SLIDE TO PAUSE</span>
        </div>
      </div>

      {/* 
        FRAMER MOTION INFINITE HORIZONTAL MOVING FILMSTRIP
        Continuous horizontal panning marquee with pause-on-hover
      */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Cinematic Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#06080e] via-[#06080e]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#06080e] via-[#06080e]/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
          className="flex gap-6 w-max cursor-pointer will-change-transform"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedPhoto(item)}
              className="group relative w-72 sm:w-80 md:w-96 flex-shrink-0 p-3 bg-[#0a0d14]/90 border border-white/10 hover:border-[#e50914] transition-all rounded-xs shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:-translate-y-1 duration-300"
            >
              {/* Retro Film Sprocket Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-[9px] font-space-mono text-zinc-500">
                <span className="text-[#e50914] font-bold">KODAK 400TX // #{String((idx % HIGHLIGHT_PHOTOS.length) + 1).padStart(2, "0")}</span>
                <span>{item.timestamp}</span>
              </div>

              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black rounded-xs">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Inspect Overlay Trigger */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-space-mono text-xs tracking-wider">
                  <ZoomIn className="w-4 h-4 text-[#e50914]" />
                  <span>CLICK TO ENLARGE</span>
                </div>
              </div>

              {/* Details & Caption */}
              <div className="mt-3 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-[#e50914] transition-colors truncate">
                    {item.title}
                  </h4>
                </div>
                <p className="font-space-mono text-[10px] text-zinc-400 mt-1 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[8px] font-space-mono text-zinc-500">
                  <span>LOC: {item.location}</span>
                  <span className="text-[#e50914] group-hover:underline flex items-center gap-1">
                    INSPECT DOSSIER →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 
        LIGHTBOX MODAL FOR EXPANDED PHOTO INSPECTION
      */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-4xl w-full bg-[#07090f] border-2 border-[#e50914]/80 p-4 sm:p-6 shadow-[0_0_50px_rgba(229,9,20,0.4)] z-10 rounded-xs"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-[#e50914] rounded-xs cursor-pointer transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5 text-[#e50914]" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-3 font-space-mono text-xs text-zinc-400">
                <Camera className="w-4 h-4 text-[#e50914]" />
                <span className="text-white font-bold tracking-wider">{selectedPhoto.title}</span>
                <span className="text-zinc-600">//</span>
                <span>{selectedPhoto.timestamp}</span>
              </div>

              {/* Full Image */}
              <div className="relative aspect-[16/10] w-full max-h-[60vh] overflow-hidden bg-black border border-white/10 rounded-xs">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer Caption */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs font-space-mono">
                <p className="text-zinc-300">
                  {selectedPhoto.caption}
                </p>
                <span className="text-zinc-500 whitespace-nowrap text-[10px]">
                  LOCATION: {selectedPhoto.location}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
