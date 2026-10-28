import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function HawkinsHUD() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Dynamic frequency tuning simulation based on scroll
  const freq = useTransform(scrollYProgress, [0, 1], [98.4, 108.9]);
  const [freqDisplay, setFreqDisplay] = useState("98.4");

  useEffect(() => {
    const unsubFreq = freq.on("change", (latest) => {
      setFreqDisplay(latest.toFixed(1));
    });
    return () => unsubFreq();
  }, [freq]);

  return (
    <aside
      aria-label="Hawkins Lab Telemetry HUD"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none flex-col items-center gap-4 py-4 px-2"
    >
      {/* Top Protocol Status Badge */}
      <div className="flex flex-col items-center gap-1.5 font-space-mono text-[9px] uppercase tracking-[0.25em] text-zinc-400">
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#ff003c] shadow-[0_0_8px_#ff003c]"
          />
          <span className="text-[#ff003c] font-bold">LIVE</span>
        </div>
        <span className="text-[8px] text-zinc-400 font-mono">HNL-83</span>
      </div>

      {/* Vertical Hairline Progress Track */}
      <div className="relative w-[2px] h-44 bg-white/10 rounded-full overflow-hidden backdrop-blur-xs">
        <motion.div
          style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          className="absolute inset-x-0 top-0 w-full h-full bg-gradient-to-b from-[#ff334b] via-[#e50914] to-[#7a040b] shadow-[0_0_10px_#e50914]"
        />
      </div>

      {/* Realtime Depth Percentage */}
      <div className="font-space-mono text-[10px] text-zinc-300 font-semibold tracking-widest">
        {String(percent).padStart(2, "0")}%
      </div>

      {/* Vertical Telemetry Strip */}
      <div className="flex flex-col items-center gap-2 pt-1 font-space-mono text-[8px] tracking-[0.28em] text-zinc-400 uppercase">
        <span className="[writing-mode:vertical-rl] rotate-180">
          SEC // 22.57°N 88.36°E
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-700" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-zinc-400">
          FM {freqDisplay} MHz
        </span>
      </div>
    </aside>
  );
}
