import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import frame1 from "../../assets/image/frame1.jpg";
import frame2 from "../../assets/image/frame2.jpg";
import frame3 from "../../assets/image/frame3.jpg";
import frame4 from "../../assets/image/frame4.jpg";
import frame5 from "../../assets/image/frame5.jpg";
import frame6 from "../../assets/image/frame6.jpg";
import frame7 from "../../assets/image/frame7.jpg";
import frame8 from "../../assets/image/frame8.png";
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
      { name: "Karan rajput", role: "Tech Team", img: "" },
    ],
  },
  {
    title: "Design Team",
    members: [
      { name: "Tarun Binay Das", role: "Graphics Team", img: "/team/tarun.jpg" },
      { name: "Adrija Karmakar", role: "Graphics Team", img: "/team/adrija.png" },
      { name: "Aishik Mondal", role: "Graphics Team", img: "/team/aishik.jpg" },
      { name: "ANUSREE GHOSH", role: "Graphics Team", img: "/team/anusree.jpg" },
      { name: "Debosmita Paul", role: "Graphics Team", img: "/team/debosmita.jpeg" },
      { name: "Meraj Hussain", role: "Graphics Team", img: "/team/meraj.jpg" },
      { name: "Riya Pathak", role: "Graphics Team", img: "/team/riya.jpg" },
      { name: "Sagnika Sinha", role: "Graphics Team", img: "/team/sagnika.jpeg" },
      { name: "Tamajit Pal", role: "Graphics Team", img: "/team/tamajit.jpeg" },
      { name: "TAMALI KHAN ", role: "Graphics Team", img: "/team/tamali.jpg" },
    ],
  },
  {
    title: "Marketing Team",
    members: [
      { name: "Archita Mitra", role: "Marketing", img: "/team/archita.jpg" },
      { name: "Chandan Ghosh", role: "Marketing", img: "/team/chandan.jpg" },
      { name: "Nandini Pandey", role: "Marketing", img: "/team/nandini.jpg" },
      { name: "Tarun Binay Das", role: "Marketing", img: frame2 },
      { name: "Tarun Binay Das", role: "Marketing", img: frame3 },
    ],
  },
];

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
const PolaroidCard = ({ img, name, role, className = "" }) => (
  <div
    className={`group/card relative shrink-0 select-none transition-transform duration-300 ease-out hover:z-20 hover:scale-105 ${className}`}
  >
    <div className="rounded-[3px] bg-[#e9e6dc] p-2.5 pb-2 shadow-[0_10px_25px_rgba(0,0,0,0.55)] ring-1 ring-black/20 transition-shadow duration-300 group-hover/card:shadow-[0_16px_38px_rgba(255,5,5,0.35)]">
      <div className="overflow-hidden bg-black">
        <img
          src={img}
          alt={name}
          draggable="false"
          className="aspect-4/5 w-full object-cover grayscale transition-all duration-500 group-hover/card:scale-105 group-hover/card:grayscale-0"
        />
      </div>
      <div className="pb-1 pt-2 text-center">
        <p className="stranger-things-filled leading-tight text-[clamp(12px,1vw,16px)] text-[#e00505] [text-shadow:0_0_6px_rgba(255,0,0,0.5)]">
          {name}
        </p>
        <p className="poppins uppercase tracking-wide text-[clamp(8px,0.7vw,11px)] text-neutral-600">
          {role}
        </p>
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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-5xl px-10 sm:px-14">
      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#D9D9D933] p-2 text-white transition-colors hover:bg-[#D9D9D950] sm:p-3"
      >
        <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next"
        className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#D9D9D933] p-2 text-white transition-colors hover:bg-[#D9D9D950] sm:p-3"
      >
        <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {members.map((m, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_33.333%]"
            >
              <div
                className={`flex justify-center py-8 transition-all duration-500 ease-out ${
                  index === selectedIndex
                    ? "scale-110 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <PolaroidCard
                  img={m.img}
                  name={m.name}
                  role={m.role}
                  className="w-[clamp(150px,18vw,200px)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Main section                                                               */
/* -------------------------------------------------------------------------- */
const GallerySection = () => {
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
                className="w-[clamp(160px,20vw,230px)]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== TEAM CAROUSELS (auto-move, pause on hover) ===== */}
      {teams.map((team) => (
        <div key={team.title} className="mb-14 md:mb-20">
          <SubTitle>{team.title}</SubTitle>
          <TeamCarousel members={team.members} />
        </div>
      ))}
    </section>
  );
};

export default GallerySection;
