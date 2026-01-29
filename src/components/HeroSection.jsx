import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainTitle from "./Common/MainTitle";
import "../../src/index.css"
import SectionTitle from "./Common/SectionTitle";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mountain1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const mountain3Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="relative h-[50vh] md:h-[120vh] w-full flex justify-center"
        style={{
          background: "linear-gradient(#111220, #282A57 50%, #162D3D)",
        }}
      >
        {/* Stars */}
        <motion.img
          style={{ y: backgroundY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full"
          src="/parallax/stars.svg"
          alt="Stars"
        />

        {/* Clouds */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-0 top-30 md:top-0 w-[30%] md:w-[13%]"
          src="/parallax/clouds-left.svg"
          alt="Clouds Left"
        />
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute right-0 top-30 md:top-0 w-[30%] md:w-[13%]"
          src="/parallax/clouds-right.svg"
          alt="Clouds Right"
        />
        <motion.img
          style={{ y: mountain3Y }}
          className="absolute bottom-0 w-full"
          src="/parallax/cloud-bottom.svg"
          alt="Cloud Bottom"
        />

        {/* Mountains */}
        <motion.img
          style={{ y: mountain3Y }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-10 w-full z-30"
          src="/parallax/mountain3.svg"
          alt="Mountain 3"
        />
        <motion.img
          style={{ y: mountain2Y }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -bottom-5 w-full z-20"
          src="/parallax/mountain-2.svg"
          alt="Mountain 2"
        />
        <motion.img
          style={{ y: mountain1Y }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 w-full z-10"
          src="/parallax/mountain-1.svg"
          alt="Mountain 1"
        />

        <motion.div 
          style={{ y: textY }}
          className="mt-[22%] md:mt-[18%] lg:[15%]"
        >
          {/* Title Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative z-30"
          >
            <MainTitle />
          
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-7 m-auto z-30 relative flex justify-center"
          >
            {/* decorative glow - absolutely positioned so it doesn't affect layout */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full bg-red-500 blur-[18px] w-fit h-fit"
              style={{ padding: "24px" }}
            />

            {/* actual interactive button — inline-flex so width matches content */}
            <motion.a
              href="https://unstop.com/p/hackinverse-05-magistics-1605003?lb=PEEcRdx6&utm_medium=Share&utm_source=magistic85391&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-slate-700/50 cursor-pointer text-white shadow-red-500/80  relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 rounded-full bg-slate-900/80 border shadow-[0_0_30px_rgba(220,38,38,0.22)] text-sm md:text-base whitespace-nowrap sofia-sans-extra-condensed font-bold"
            >
              Apply With Devfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
