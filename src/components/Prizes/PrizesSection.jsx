import React from "react";
import { motion } from "framer-motion";

import prize1Inner from "../../assets/1st-inner.png";
import prize2Inner from "../../assets/2nd-inner.png";
import prize3Inner from "../../assets/3rd-inner.png";

import patternBg from "../../assets/BgPattern.png";
import SectionTitle from "../Common/SectionTitle";

const PrizesSection = () => {
  const prizes = [
    {
      inner: prize2Inner,
      title: "Runner up",
      duration: "1-year",
      text: "CodeCrafters VIP membership",
      status: "Target Locking...",
      progress: 60,
      accent: "#D6D6D6",
      glow: "rgba(214,214,214,0.45)",
      pillBg: "rgba(214,214,214,0.06)",
      featured: false,
    },
    {
      inner: prize1Inner,
      title: "Grand Champion",
      duration: "2-years",
      text: "CodeCrafters VIP membership",
      status: "Target Locked",
      progress: 100,
      accent: "#FF2A2A",
      glow: "rgba(255,42,42,0.6)",
      pillBg: "rgba(255,42,42,0.14)",
      featured: true,
    },
    {
      inner: prize3Inner,
      title: "Second Runner up",
      duration: "6-months",
      text: "CodeCrafters VIP membership",
      status: "Target Locking...",
      progress: 55,
      accent: "#E2A312",
      glow: "rgba(226,163,18,0.45)",
      pillBg: "rgba(226,163,18,0.08)",
      featured: false,
    },
  ];

  // the badge ring and the progress-bar sweep run on one shared cadence:
  // a full rotation takes exactly as long as one sweep + its pause
  const SWEEP_DURATION = 1.6;
  const SWEEP_REPEAT_DELAY = 0.7;
  const SWEEP_START_DELAY = 1.6;
  const CYCLE = SWEEP_DURATION + SWEEP_REPEAT_DELAY + SWEEP_START_DELAY;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#222222] px-4 py-16 text-center text-white"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "auto",
      }}
    >
      {/* ===== HEADING ===== */}
      <div className="mt-15">
        <SectionTitle
          title="Prize"
          strokeColor="rgba(255,0,0,0.8)"
          lineColor="rgba(255,0,0,0.8)"
          lineHeight="h-[3px]"
          titleSize="text-3xl sm:text-4xl md:text-7xl"
        />
      </div>

      {/* ===== PRIZE CARDS ===== */}
      <div className="spline-mono mt-24 grid w-full max-w-7xl grid-cols-1 gap-24 md:mt-32 md:grid-cols-3 md:gap-6 lg:gap-10">
        {prizes.map((p, index) => (
          <div
            key={index}
            className={`
              flex
              ${index === 1 ? "order-1 md:order-0 md:-translate-y-10" : ""}
              ${index === 0 ? "order-2 md:order-0 md:translate-y-20" : ""}
              ${index === 2 ? "order-3 md:order-0 md:translate-y-20" : ""}
            `}
          >
            {/* ===== CARD ===== */}
            <div
              className="relative flex w-full flex-col rounded-2xl border-2 mx-10 md:mx-0 px-10 pb-7 pt-16 transition-all duration-300 md:pt-20"
              style={{
                borderColor: p.accent,
                backgroundColor: "#222222",
                boxShadow: `0 0 20px ${p.glow}, inset 0 0 20px ${p.pillBg}`,
              }}
            >
              {/* ===== BADGE (overlaps the top border) ===== */}
              <div className="absolute left-1/2 top-0 w-24 -translate-x-1/2 -translate-y-1/2 md:w-28">
                {/* glow arcs orbiting the badge; masked hollow so the medal stays clean */}
                <motion.span
                  className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[105%] rounded-full"
                  style={{
                    x: "-50%",
                    y: "-50%",
                    background: `conic-gradient(from 0deg, transparent 0deg, ${p.accent} 60deg, transparent 145deg, transparent 215deg, ${p.accent} 300deg, transparent 360deg)`,
                    filter: "blur(8px)",
                    WebkitMaskImage:
                      "radial-gradient(circle, transparent 46%, #000 66%, #000 100%)",
                    maskImage:
                      "radial-gradient(circle, transparent 46%, #000 66%, #000 100%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: CYCLE,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src={p.inner}
                  alt={`${p.title} badge`}
                  className="relative w-full rounded-full"
                  style={{ filter: `drop-shadow(0 0 12px ${p.glow})` }}
                />
              </div>

              {/* ===== TITLE ===== */}
              <h3
                className="text-xl font-bold uppercase leading-tight tracking-[0.12em] md:text-2xl"
                style={{
                  color: p.accent,
                }}
              >
                {p.title}
              </h3>
              <span
                className="mx-auto mt-2 block h-0.5 w-28 md:w-32 mb-5"
                style={{
                  backgroundColor: p.accent,
                  boxShadow: `0 0 8px ${p.glow}`,
                }}
              />

              {/* ===== DURATION ===== */}
              <p className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                {p.duration}
              </p>

              {/* ===== TEXT PILL ===== */}
              <p
                className="mx-auto mt-5 w-full rounded-md border px-4 py-2.5 text-sm leading-snug text-[#e6e6e6] md:text-base"
                style={{
                  borderColor: p.accent,
                  backgroundColor: p.pillBg,
                }}
              >
                {p.text}
              </p>

              {/* ===== STATUS + PROGRESS BAR ===== */}
              {p.status && (
                <div className="mt-auto pt-10">
                  {/* still locking on = keep the label breathing, locked = steady */}
                  <motion.p
                    className="text-[11px] tracking-wide text-[#9a9a9a] md:text-xs"
                    animate={
                      p.progress < 100 ? { opacity: [0.45, 1, 0.45] } : undefined
                    }
                    transition={
                      p.progress < 100
                        ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    {p.status}
                  </motion.p>
                  <div
                    className="mx-auto mt-5 h-2 w-4/5 overflow-hidden rounded-full border bg-white/10"
                    style={{ borderColor: p.accent }}
                  >
                    {/* fills from empty up to the card's progress once it scrolls in */}
                    <motion.div
                      className="relative h-full overflow-hidden rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                      style={{
                        backgroundColor: p.accent,
                        boxShadow: `0 0 10px ${p.glow}`,
                      }}
                    >
                      {/* scanning highlight so the bar keeps reading as "live" */}
                      <motion.span
                        className="absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/70 to-transparent"
                        animate={{ x: ["0%", "400%"] }}
                        transition={{
                          duration: SWEEP_DURATION,
                          repeat: Infinity,
                          repeatDelay: SWEEP_REPEAT_DELAY,
                          ease: "linear",
                          delay: SWEEP_START_DELAY,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
