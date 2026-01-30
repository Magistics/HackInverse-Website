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
        {/* <motion.img
          style={{ y: backgroundY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full"
          src="/parallax/stars.svg"
          alt="Stars"
        /> */}
        <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = Math.random() * 1 + 0.5;
          const scale = Math.random() * 0.5 + 0.5;
          return (
            <motion.span
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${scale * 4}px`,
                height: `${scale * 4}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [scale * 0.8, scale * 1.5, scale * 0.8],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

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
              className="border-slate-700/50 cursor-pointer text-white shadow-red-500/80  relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 rounded-full bg-slate-900/80 border shadow-[0_0_30px_rgba(220,38,38,0.22)] text-sm md:text-base whitespace-nowrap albert-sans font-bold"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" viewBox="0 0 60.3 66.2" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3770FF" d="M60.3,36.4C60.3,52,48.6,64.7,33.8,66c0,0-19.1,0.5-25.4-0.1c-2.4-0.3-4.4-1.8-5.3-4c0.9,0.4,1.8,0.7,2.8,0.8
                  C8,62.9,11.5,63,16.4,63c7.2,0,15.1-0.2,15.1-0.2h0.1c7.9-0.7,15.2-4.3,20.4-10.2c4.5-5,7.4-11.3,8.2-17.9
                  C60.3,35.2,60.3,35.8,60.3,36.4z"/>
                <path fill="#3770FF" d="M58,30c0,15.6-11.7,28.3-26.6,29.5c0,0-19.1,0.5-25.4-0.1c-3.4-0.3-5.9-3.5-6-7.1l0.1-45
                  c0.1-3.6,2.7-6.8,6.1-7.1c6.3-0.5,25.4,0.1,25.4,0.1C46.4,1.6,58,14.4,58,30z"/>
              </svg>
              Apply With Devfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
