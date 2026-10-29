import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

const squadData = [
  {
    id: "command",
    title: "COMMAND DIRECTORS",
    badge: "DIRECTORATE // LEVEL-5 CLEARANCE",
    members: [
      {
        name: "Abhirup Datta Khan",
        role: "Lead Organizer & Founder",
        tagline: "Igniting the vision and leading the expedition with boundless energy, relentless grit, and heart.",
        dept: "Executive Command",
        idCode: "DIR-01",
        img: "/team/abhirup.jpg",
        lead: true,
      },
      {
        name: "Rupsha Das",
        role: "Co-Organizer",
        tagline: "Bringing clarity and calm to the chaos, keeping every moving gear perfectly aligned and inspired.",
        dept: "Executive Command",
        idCode: "DIR-02",
        img: "/team/rupsha.jpg",
        lead: false,
      },
    ],
  },
  {
    id: "tech",
    title: "TECH SYNDICATE",
    badge: "SYSTEMS ARCHITECTURE & INFRA",
    members: [
      {
        name: "Atrika Show",
        role: "Tech Team Lead",
        tagline: "Turning high-stakes architectural challenges into elegant, rock-solid realities with quiet brilliance.",
        dept: "Core Systems",
        idCode: "TECH-01",
        img: "/team/atrika.jpg",
        lead: true,
      },
      {
        name: "Rahul Pal",
        role: "Systems Architect",
        tagline: "A calm problem solver who untangles complex logic and makes difficult challenges look effortless.",
        dept: "Core Systems",
        idCode: "TECH-02",
        img: "/team/rahul.jpg",
      },
      {
        name: "Hiya Sarkar",
        role: "Full Stack Engineer",
        tagline: "Weaving robust code, creative curiosity, and unstoppable energy into every milestone.",
        dept: "Core Systems",
        idCode: "TECH-03",
        img: "/team/hiya.jpg",
      },
      {
        name: "Srijani Pal Chaudhuri",
        role: "Frontend Engineer",
        tagline: "Building snappy, delightful interfaces that make users feel right at home.",
        dept: "Core Systems",
        idCode: "TECH-04",
        img: "/team/srijani.jpg",
        hidden: true,
      },
    ],
  },
  {
    id: "design",
    title: "DESIGN GUILD",
    badge: "CREATIVE & VISUAL SYSTEMS",
    members: [
      {
        name: "Tarun Binay Das",
        role: "Creative Design Lead",
        tagline: "Shaping the aesthetic soul and visual identity with visionary creative flair.",
        dept: "Visual Guild",
        idCode: "DSGN-01",
        img: "/team/tarun.jpg",
        lead: true,
      },
      {
        name: "Adrija Karmakar",
        role: "UI/UX & Product Design",
        tagline: "Crafting intuitive, immersive digital journeys with deep empathy and artistic precision.",
        dept: "Visual Guild",
        idCode: "DSGN-02",
        img: "/team/adrija.png",
      },
      {
        name: "Aishik Mondal",
        role: "Visual & Brand Designer",
        tagline: "Exploring fresh perspectives to craft bold and memorable brand visuals.",
        dept: "Visual Guild",
        idCode: "DSGN-03",
        img: "/team/aishik.jpg",
        hidden: true,
      },
      {
        name: "Anusree Ghosh",
        role: "Brand Identity Specialist",
        tagline: "Infusing vibrant life, sharp distinction, and elegance into every creative visual asset.",
        dept: "Visual Guild",
        idCode: "DSGN-04",
        img: "/team/anusree.jpg",
      },
      {
        name: "Debosmita Paul",
        role: "Visual Graphics Operative",
        tagline: "Illuminating ideas with an exceptional eye for typography, balance, and visual harmony.",
        dept: "Visual Guild",
        idCode: "DSGN-05",
        img: "/team/debosmita.jpeg",
      },
      {
        name: "Meraj Hussain",
        role: "3D & Spatial Graphics",
        tagline: "Transforming abstract 3D concepts into stunning spatial compositions.",
        dept: "Visual Guild",
        idCode: "DSGN-06",
        img: "/team/meraj.jpg",
        hidden: true,
      },
      {
        name: "Riya Pathak",
        role: "Vector & Asset Illustrator",
        tagline: "Bringing warmth, imagination, and expressive brilliance into every custom illustration.",
        dept: "Visual Guild",
        idCode: "DSGN-07",
        img: "/team/riya.jpg",
      },
      {
        name: "Sagnika Sinha",
        role: "UI & Visual Designer",
        tagline: "Designing thoughtful, sleek user interfaces with genuine care and style.",
        dept: "Visual Guild",
        idCode: "DSGN-08",
        img: "/team/sagnika.jpeg",
        hidden: true,
      },
      {
        name: "Tamajit Pal",
        role: "Motion & Asset Design",
        tagline: "Breathing dynamic motion, fluid rhythm, and polished magic into every frame.",
        dept: "Visual Guild",
        idCode: "DSGN-09",
        img: "/team/tamajit.jpeg",
      },
      {
        name: "Tamali Khan",
        role: "Graphic Communications",
        tagline: "Connecting people through striking graphic storytelling and purposeful visual language.",
        dept: "Visual Guild",
        idCode: "DSGN-10",
        img: "/team/tamali.jpg",
      },
    ],
  },
  {
    id: "ops",
    title: "EVENT OPERATIONS",
    badge: "FIELD PROTOCOL & LOGISTICS",
    members: [
      {
        name: "Samyamay Bhattacharjee",
        role: "Event Operations Lead",
        tagline: "The steadfast anchor whose sheer grit and leadership keep the entire ship steady.",
        dept: "Field Protocol",
        idCode: "OPS-01",
        img: "/team/samyamay.jpg",
        lead: true,
      },
      {
        name: "Sohamjit Roy Chowdhury",
        role: "Logistics Coordinator",
        tagline: "Always anticipating what comes next, turning fast-paced logistics into seamless teamwork.",
        dept: "Field Protocol",
        idCode: "OPS-02",
        img: "/team/sohamjit.jpg",
      },
      {
        name: "Anagh Biswas",
        role: "On-Ground Logistics",
        tagline: "Energetic, dependable, and always ready with a smile whenever the team needs a hand.",
        dept: "Field Protocol",
        idCode: "OPS-03",
        img: "/team/anagh.jpg",
      },
      {
        name: "Ratul Chatterjee",
        role: "Venue Coordinator",
        tagline: "Master of spatial coordination and on-ground synergy, ensuring flawless event flow.",
        dept: "Field Protocol",
        idCode: "OPS-04",
        img: "/team/ratul.jpeg",
      },
      {
        name: "Protim Sinha",
        role: "Hacker Experience Lead",
        tagline: "Championing hacker comfort, warmth, and hospitality with infectious positive spirit.",
        dept: "Field Protocol",
        idCode: "OPS-05",
        img: "/team/protim.jpg",
      },
      {
        name: "Ishita Bose",
        role: "Hospitality Lead",
        tagline: "Spreading genuine hospitality, warmth, and supportive care to every attendee and guest.",
        dept: "Field Protocol",
        idCode: "OPS-06",
        img: "/team/ishita.jpg",
      },
      {
        name: "Dishant Kothari",
        role: "Security & Crowd Flow",
        tagline: "Maintaining calm, steady vigilance and keeping everyone moving forward smoothly.",
        dept: "Field Protocol",
        idCode: "OPS-07",
        img: "/team/dishant.jpeg",
        hidden: true,
      },
    ],
  },
  {
    id: "marketing",
    title: "MARKETING & COMMUNICATIONS",
    badge: "PUBLIC INTELLIGENCE & MEDIA",
    members: [
      {
        name: "Nandini Pandey",
        role: "Marketing Lead",
        tagline: "Amplifying our message and building unstoppable momentum across student communities.",
        dept: "Public Outreach",
        idCode: "MKT-01",
        img: "/team/nandini.jpg",
        lead: true,
      },
      {
        name: "Archita Mitra",
        role: "Social Media Lead",
        tagline: "Crafting vibrant narratives and digital excitement with authentic flair and resonance.",
        dept: "Public Outreach",
        idCode: "MKT-02",
        img: "/team/archita.jpg",
      },
      {
        name: "Chandan Ghosh",
        role: "Public Relations Lead",
        tagline: "Building meaningful bridges and sparking memorable conversations across communities.",
        dept: "Public Outreach",
        idCode: "MKT-03",
        img: "/team/chandan.jpg",
      },
      {
        name: "Sneha Sarkar",
        role: "Content Strategist",
        tagline: "Transforming complex ideas into compelling stories that truly inspire and engage.",
        dept: "Public Outreach",
        idCode: "MKT-04",
        img: "/team/sneha.jpg",
      },
      {
        name: "Tirthankar Das",
        role: "Campaign Strategist",
        tagline: "Strategizing creative outreach campaigns with sharp focus, initiative, and dedication.",
        dept: "Public Outreach",
        idCode: "MKT-05",
        img: "/team/tirthankar.jpeg",
      },
      {
        name: "Asmit Biswas",
        role: "Campus Outreach Lead",
        tagline: "Energizing campus builders with grassroots passion, great humor, and drive.",
        dept: "Public Outreach",
        idCode: "MKT-06",
        img: "/team/asmit.jpg",
      },
      {
        name: "Satavisa Kesh",
        role: "Digital Growth Operative",
        tagline: "Igniting digital growth and engagement through thoughtful and inventive campaigns.",
        dept: "Public Outreach",
        idCode: "MKT-07",
        img: "/team/satavisa.jpg",
      },
      {
        name: "Sania Anjum",
        role: "Community Engagement",
        tagline: "Cultivating a welcoming, close-knit community where every builder feels at home.",
        dept: "Public Outreach",
        idCode: "MKT-08",
        img: "/team/sania.jpg",
      },
    ],
  },
  {
    id: "media",
    title: "MEDIA & PRODUCTION",
    badge: "CINEMATOGRAPHY & VIDEO",
    members: [
      {
        name: "Pritam Sardar",
        role: "Media Lead",
        tagline: "Freezing unforgettable fleeting milestones into timeless, cinematic visual memories.",
        dept: "Media Syndicate",
        idCode: "MED-01",
        img: "/team/pritam.jpg",
        lead: true,
        leadBadge: "MEDIA LEAD",
      },
      {
        name: "Karishma Gupta",
        role: "Video Editing Lead",
        tagline: "Stitching every candid snapshot into high-energy, memorable video retrospectives.",
        dept: "Broadcast Ops",
        idCode: "VID-01",
        img: "/team/karishma.jpg",
        lead: true,
        leadBadge: "VIDEO LEAD",
      },
      {
        name: "Sudeb Rana",
        role: "Director of Photography",
        tagline: "Capturing the raw emotion, passion, and electric atmosphere through a visionary lens.",
        dept: "Cinematography",
        idCode: "MED-02",
        img: "/team/sudev.jpg",
      },
      {
        name: "Priyanshu Ghosh",
        role: "Motion Graphics & FX",
        tagline: "Elevating the screen experience with dynamic motion graphics and creative flair.",
        dept: "Broadcast Ops",
        idCode: "VID-02",
        img: "/team/priyanshu.jpg",
      },
    ],
  },
  {
    id: "sponsors",
    title: "CORPORATE ALLIANCES",
    badge: "INSTITUTIONAL PARTNERSHIPS",
    members: [
      {
        name: "Saptorsi Ghose Dastidar",
        role: "Head of Corporate Alliances",
        tagline: "Forging strong partnerships and opening doors to exciting opportunities for hackers.",
        dept: "Alliances",
        idCode: "SPN-01",
        img: "/team/saptorsi.jpg",
        lead: true,
      },
      {
        name: "Raunak Biswas",
        role: "Sponsor Relations Lead",
        tagline: "Nurturing lasting relationships with trust, genuine dedication, and professionalism.",
        dept: "Alliances",
        idCode: "SPN-02",
        img: "/team/raunak.jpg",
      },
    ],
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  const activeSquadData = squadData.map((squad) => ({
    ...squad,
    members: squad.members.filter((m) => !m.hidden),
  }));

  const totalMembers = activeSquadData.reduce(
    (acc, squad) => acc + squad.members.length,
    0
  );

  const displayedSquads =
    activeTab === "all"
      ? activeSquadData
      : activeSquadData.filter((squad) => squad.id === activeTab);

  return (
    <section className="relative w-full py-28 px-4 sm:px-8 max-w-7xl mx-auto select-none" id="team">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] font-space-mono text-[#e50914] uppercase tracking-[0.25em] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-pulse" />
          <span>CHAPTER 11 // THE FIELD OPERATIVES</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] text-white uppercase">
          MEET THE SQUAD
        </h2>

        <p className="mt-3 font-courier text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          The {totalMembers} organizers, engineers, and researchers responsible for constructing HackInverse 2026.
        </p>

        {/* Tactical Division Filter Tabs with Framer Motion layout */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl">
          <motion.button
            type="button"
            layout
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 font-space-mono text-xs tracking-wider uppercase transition-all border cursor-pointer ${
              activeTab === "all"
                ? "bg-[#e50914] border-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            ALL OPERATIVES ({totalMembers})
          </motion.button>

          {activeSquadData.map((squad) => (
            <motion.button
              key={squad.id}
              type="button"
              layout
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(squad.id)}
              className={`px-4 py-2 font-space-mono text-xs tracking-wider uppercase transition-all border cursor-pointer ${
                activeTab === squad.id
                  ? "bg-[#e50914] border-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                  : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {squad.title} ({squad.members.length})
            </motion.button>
          ))}
        </div>
      </div>

      {/* Roster Display */}
      <motion.div layout className="space-y-16">
        <AnimatePresence mode="popLayout">
          {displayedSquads.map((squad) => (
            <motion.div
              key={squad.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative text-left"
            >
              {/* Squad Header Bar */}
              <div className="flex flex-wrap items-center justify-between pb-3 mb-8 border-b border-white/[0.08] gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {squad.title}
                  </h3>
                  <span className="font-space-mono text-xs text-zinc-500 hidden sm:inline">
                    // {squad.badge}
                  </span>
                </div>
                <div className="font-space-mono text-xs text-zinc-400">
                  <span>{squad.members.length} VERIFIED OPERATIVES</span>
                </div>
              </div>

              {/* Minimalist Polaroid Cards Grid with Fluid Layout Animation */}
              {squad.id === "command" ? (
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-10 max-w-3xl mx-auto pt-8 pb-4">
                  {squad.members.map((member) => (
                    <motion.div
                      key={member.name}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: member.lead ? -10 : -6,
                        transition: { type: "spring", stiffness: 350, damping: 20 },
                      }}
                      className={`group transition-all flex flex-col justify-between w-full max-w-[285px] sm:w-[280px] p-3.5 sm:p-4 ${
                        member.lead
                          ? "border-2 border-[#e50914] bg-[#07090f]/95 shadow-[0_0_35px_rgba(229,9,20,0.35)] sm:-translate-y-6"
                          : "border border-white/20 bg-[#07090f]/80 hover:border-[#e50914]/70 shadow-[0_0_20px_rgba(255,255,255,0.05)] translate-y-0"
                      }`}
                    >
                      <div
                        className={`relative aspect-[4/5] overflow-hidden bg-black mb-3 ${
                          member.lead ? "border border-red-500/30" : ""
                        }`}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute top-2 right-2">
                          <span
                            className={`px-2 py-0.5 text-[9px] font-space-mono font-bold tracking-widest uppercase ${
                              member.lead
                                ? "bg-[#e50914] text-white shadow-[0_0_12px_#e50914]"
                                : "bg-zinc-800/90 border border-zinc-700 text-zinc-200"
                            }`}
                          >
                            {member.lead ? "FOUNDER & LEAD" : "CO-ORGANIZER"}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-[10px] font-space-mono text-zinc-500 mb-1">
                          <span className={member.lead ? "text-[#e50914] font-bold" : "text-zinc-400 font-bold"}>
                            {member.idCode}
                          </span>
                          <span>{member.dept}</span>
                        </div>
                        <h4 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide truncate group-hover:text-[#e50914] transition-colors">
                          {member.name}
                        </h4>
                        <p className="font-courier italic leading-snug mt-1.5 line-clamp-2 text-[11px] text-zinc-300/85">
                          "{member.tagline}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  layout
                  className={`grid gap-6 ${
                    squad.members.length === 2
                      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
                      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {squad.members.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      whileHover={{ y: -6, transition: { type: "spring", stiffness: 350, damping: 20 } }}
                      className="group p-3 border border-white/[0.08] bg-[#07090f]/70 hover:border-red-600/70 transition-all flex flex-col justify-between"
                    >
                      {/* Archival Photograph */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-black mb-3">
                        <img
                          src={member.img}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        {member.lead && (
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-0.5 bg-[#e50914] text-white text-[9px] font-space-mono font-bold tracking-widest uppercase">
                              {member.leadBadge || "LEAD"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Member Details */}
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-space-mono text-zinc-500 mb-1">
                          <span>{member.idCode}</span>
                          <span>{member.dept}</span>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white tracking-wide truncate group-hover:text-[#e50914] transition-colors">
                          {member.name}
                        </h4>
                        <p className="font-courier italic text-[11px] text-zinc-300/85 leading-snug mt-1.5 line-clamp-2">
                          "{member.tagline}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer Info */}
      <div className="mt-16 p-4 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-space-mono text-xs text-zinc-400 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#e50914] shrink-0" />
          <span>The HackInverse Organizing Committee is comprised of dedicated student researchers and designers.</span>
        </div>
        <span className="text-[#e50914] font-bold shrink-0">{totalMembers} ACTIVE SQUAD MEMBERS</span>
      </div>
    </section>
  );
}
