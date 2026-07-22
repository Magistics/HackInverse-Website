import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "../Common/SectionTitle";

/* -------------------------------------------------------------------------- */
/*  TEAM DATA — replace the placeholder images/names with the real members.   */
/* -------------------------------------------------------------------------- */
const organizers = [
  { name: "Abhirup Dutta Khan", role: "Lead / Organizer", img: "/team/abhirup.jpg" },
  { name: "Rupsha Das", role: "Co. / Organizer", img: "/team/rupsha.jpg" },
];

const teams = [
  {
    title: "Tech Team",
    members: [
      { name: "Atrika Show", role: "Tech Team", img: "/team/atrika.jpg" },
      { name: "Rahul Pal", role: "Tech Team", img: "/team/rahul.jpg" },
      { name: "Hiya Sarkar", role: "Tech Team", img: "/team/hiya.jpg" },
      { name: "Srijani Pal Chaudhuri", role: "Tech Team", img: "/team/srijani.jpg" },
      // { name: "Karan rajput", role: "Tech Team", img: "" },
    ],
  },
  {
    title: "Design Team",
    members: [
      { name: "Tarun Binay Das", role: "Graphics Team", img: "/team/tarun.jpg" },
      { name: "Adrija Karmakar", role: "Graphics Team", img: "/team/adrija.png" },
      { name: "Aishik Mondal", role: "Graphics Team", img: "/team/aishik.jpg" },
      { name: "Anusree Ghosh", role: "Graphics Team", img: "/team/anusree.jpg" },
      { name: "Debosmita Paul", role: "Graphics Team", img: "/team/debosmita.jpeg" },
      { name: "Meraj Hussain", role: "Graphics Team", img: "/team/meraj.jpg" },
      { name: "Riya Pathak", role: "Graphics Team", img: "/team/riya.jpg" },
      { name: "Sagnika Sinha", role: "Graphics Team", img: "/team/sagnika.jpeg" },
      { name: "Tamajit Pal", role: "Graphics Team", img: "/team/tamajit.jpeg" },
      { name: "Tamali Khan ", role: "Graphics Team", img: "/team/tamali.jpg" },
    ],
  },
  {
    title: "Event Team",
    members: [
      { name: "Samyamay Bhattacharjee", role: "Event Team", img: "/team/samyamay.jpg" },
      { name: "Sohamjit Roy Chowdhury", role: "Event Team", img: "/team/sohamjit.jpg" },
      { name: "Anagh Biswas", role: "Event Team", img: "/team/anagh.jpg" },
      { name: "Ratul Chatterjee", role: "Event Team", img: "/team/ratul.jpeg" },
      { name: "Protim Sinha", role: "Event Team", img: "/team/protim.jpg" },
      { name: "Ishita Bose", role: "Event Team", img: "/team/ishita.jpg" },
      { name: "Dishant Kothari", role: "Event Team", img: "/team/dishant.jpeg" },
    ],
  },
  {
    title: "Marketing Team",
    members: [
      { name: "Nandini Pandey", role: "Marketing", img: "/team/nandini.jpg" },
      { name: "Archita Mitra", role: "Marketing", img: "/team/archita.jpg" },
      { name: "Chandan Ghosh", role: "Marketing", img: "/team/chandan.jpg" },
      { name: "Sneha Sarkar", role: "Marketing", img: "/team/sneha.jpg" },
      { name: "Tirthankar Das", role: "Marketing", img: "/team/tirthankar.jpeg" },
      { name: "Asmit Biswas", role: "Marketing", img: "/team/asmit.jpg" },
      { name: "Satavisa Kesh", role: "Marketing", img: "/team/satavisa.jpg" },
      { name: "Sania Anjum", role: "Marketing", img: "/team/sania.jpg" },
    ],
  },
  {
    title: "Media & Videography",
    members: [
      { name: "Pritam sardar", role: "Media & Videography", img: "/team/pritam.jpg" },
      { name: "Sudeb Rana", role: "Media & Videography", img: "/team/sudev.jpg" },
    ]
  },
  {
    title: "Video Editing",
    members: [
      { name: "Karishma Gupta", role: "Video Editing", img: "/team/karishma.jpg" },
      { name: "Priyanshu Ghosh", role: "Video Editing", img: "/team/priyanshu.jpg" },
    ]
  },
  {
    title: "Sponsors",
    members: [
      { name: "Saptorsi Ghose Dastidar", role: "Sponsors", img: "/team/saptorsi.jpg" },
      { name: "Raunak Biswas", role: "Sponsors", img: "/team/raunak.jpg" },
    ]
  },
];

/* -------------------------------------------------------------------------- */
/*  Track whether we're below Tailwind's `sm` breakpoint (mobile view).         */
/* -------------------------------------------------------------------------- */
const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};

/* -------------------------------------------------------------------------- */
/*  Ensure the team lead is flagged and sits first. If a member has            */
/*  `lead: true` it is used (and moved to the front); otherwise the first      */
/*  member is treated as the lead by default.                                  */
/* -------------------------------------------------------------------------- */
const normalizeLead = (members) => {
  if (members.some((m) => m.lead)) {
    return [...members.filter((m) => m.lead), ...members.filter((m) => !m.lead)];
  }
  return members.map((m, i) => (i === 0 ? { ...m, lead: true } : m));
};

/* -------------------------------------------------------------------------- */
/*  Section sub-title (red Stranger Things text + underline)                   */
/* -------------------------------------------------------------------------- */
const SubTitle = ({ children }) => (
  <div className="flex flex-col items-center">
    <h3 className="stranger-things-filled uppercase tracking-wide text-[clamp(20px,3.2vw,38px)] text-[#FF3B3B] [text-shadow:0_0_10px_rgba(255,0,0,0.6),0_3px_4px_rgba(0,0,0,0.9)]">
      {children}
    </h3>
    <span className="mt-2 h-[3px] w-[clamp(120px,18vw,230px)] background-red drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Polaroid-style member card                                                 */
/* -------------------------------------------------------------------------- */
const PolaroidCard = ({ img, name, role, className = "", colored = false, lead = false, organizer = false }) => (
  <div
    className={`group/card relative shrink-0 select-none transition-transform duration-300 ease-out hover:z-20 hover:scale-105 ${className}`}
  >
    {lead && (
      <>
        {/* Pulsing red neon glow behind the frame */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1.5 animate-pulse rounded-lg bg-[#ff0505]/50 blur-xl"
        />
      </>
    )}
    {organizer && (
      <>
        {/* Soft golden aura — richer/warmer than the lead's flat red glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2.5 animate-pulse rounded-2xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,215,0,0.6),rgba(255,120,0,0.32)_55%,transparent_75%)] blur-2xl"
        />
        {/* Floating crown */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-1/2 z-20 -translate-x-1/2 text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:-top-7 sm:text-3xl"
        >
          👑
        </span>
      </>
    )}
    <div
      className={`relative rounded-[3px] bg-[#e9e6dc] p-2.5 pb-2 transition-shadow duration-300 ${
        organizer
          ? "shadow-[0_0_0_2px_#fbbf24,0_0_34px_10px_rgba(251,191,36,0.5)]"
          : lead
          ? "shadow-[0_0_28px_rgba(255,5,5,0.6)] ring-2 ring-[#ff0505]"
          : "shadow-[0_10px_25px_rgba(0,0,0,0.55)] ring-1 ring-black/20 group-hover/card:shadow-[0_16px_38px_rgba(255,5,5,0.35)]"
      }`}
    >
      <div className="overflow-hidden bg-black">
        <img
          src={img}
          alt={name}
          draggable="false"
          className={`aspect-4/5 w-full object-cover transition-all duration-500 group-hover/card:scale-105 ${
            colored || lead || organizer ? "grayscale-0" : "grayscale group-hover/card:grayscale-0"
          }`}
        />
      </div>
      <div className="pb-1 pt-2 text-center">
        <p className="stranger-things-filled flex min-h-[2.5em] items-center justify-center leading-tight text-[clamp(12px,1vw,16px)] text-[#e00505] [text-shadow:0_0_6px_rgba(255,0,0,0.5)]">
          {name}
        </p>
        {lead ? (
          <span className="poppins mt-0.5 inline-block rounded-full bg-[#e00505] px-2 py-0.5 text-[clamp(7px,0.65vw,10px)] font-semibold uppercase tracking-wider text-white shadow-[0_0_10px_rgba(255,5,5,0.6)]">
            ★ Team Lead
          </span>
        ) : organizer ? (
          <span className="poppins mt-0.5 inline-block rounded-full bg-linear-to-r from-[#FFD700] to-[#F0A500] px-2 py-0.5 text-[clamp(7px,0.65vw,10px)] font-semibold uppercase tracking-wider text-[#3a2a00] shadow-[0_0_10px_rgba(255,215,0,0.65)]">
            ✦ {role}
          </span>
        ) : (
          <p className="poppins uppercase tracking-wide text-[clamp(8px,0.7vw,11px)] text-neutral-600">
            {role}
          </p>
        )}
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Team carousel — center-aligned, looping Embla carousel that auto-moves     */
/*  and pauses while the mouse is over it. Center card is emphasised.          */
/* -------------------------------------------------------------------------- */
const TeamCarousel = ({ members }) => {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false, dragFree: false },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-5xl px-4">
      {/* Embla viewport — cards are bottom-aligned; side cards lose top height */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-end">
          {members.map((m, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] px-2 pt-16 pb-4 sm:flex-[0_0_33.333%]"
            >
              <div
                className={`flex origin-bottom justify-center transition-all duration-500 ease-out ${
                  index === selectedIndex
                    ? "scale-110 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <PolaroidCard
                  img={m.img}
                  name={m.name}
                  role={m.role}
                  lead={m.lead}
                  colored={index === selectedIndex}
                  className="w-[clamp(150px,18vw,200px)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls — arrows with pagination dots between them, below the cards */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous"
          className="rounded-full bg-[#D9D9D933] p-2 text-white transition-colors hover:bg-[#D9D9D950] sm:p-3"
        >
          <img
            src="/left-arrow.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-auto sm:h-5"
          />
        </button>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-5 bg-[#e00505]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next"
          className="rounded-full bg-[#D9D9D933] p-2 text-white transition-colors hover:bg-[#D9D9D950] sm:p-3"
        >
          <img
            src="/right-arrow.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-auto sm:h-5"
          />
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Static team row — used when a team has three or fewer members (like the     */
/*  organizers) instead of the auto-moving carousel.                            */
/* -------------------------------------------------------------------------- */
const StaticTeamRow = ({ members }) => (
  <div className="mt-10 flex flex-wrap items-start justify-center gap-8 px-4 md:gap-14">
    {members.map((m, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
      >
        <PolaroidCard
          img={m.img}
          name={m.name}
          role={m.role}
          lead={m.lead}
          colored
          className="w-[clamp(160px,20vw,230px)]"
        />
      </motion.div>
    ))}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Main section                                                               */
/* -------------------------------------------------------------------------- */
const GallerySection = () => {
  const isMobile = useIsMobile();
  // Carousel kicks in past 1 member on mobile, past 3 on larger screens.
  const carouselThreshold = isMobile ? 1 : 3;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#222222] py-16 text-center md:py-24"
      style={{ fontFamily: '"Cinzel Decorative", serif' }}
    >
      <div className="mb-10">
        <SectionTitle
          title="Meet the Team"
          strokeColor="rgba(255,0,0,0.8)"
          lineColor="rgba(255,0,0,0.8)"
          lineHeight="h-[3px]"
          titleSize="text-[clamp(0.875rem,4.5vw,1.875rem)] lg:text-6xl xl:text-7xl"
        />
      </div>

      {/* ===== ORGANIZERS (static row) ===== */}
      <div className="mb-16 md:mb-24">
        <SubTitle>Organizers</SubTitle>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-8 px-4 md:gap-14">
          {organizers.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <PolaroidCard
                img={o.img}
                name={o.name}
                role={o.role}
                colored
                organizer
                className="w-[clamp(160px,20vw,230px)]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== TEAM CAROUSELS (auto-move, pause on hover) ===== */}
      {teams.map((team) => {
        const members = normalizeLead(team.members);
        return (
          <div key={team.title} className="mb-14 md:mb-20">
            <SubTitle>{team.title}</SubTitle>
            {members.length <= carouselThreshold ? (
              <StaticTeamRow members={members} />
            ) : (
              <TeamCarousel members={members} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default GallerySection;
