import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainTitle from "./Common/MainTitle";
import "../../src/index.css"
import SectionTitle from "./Common/SectionTitle";

const DEVFOLIO_SLUG = "hackinverse-s1";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        <motion.div
          className="absolute top-0 right-[10%] z-40 flex flex-col items-center pointer-events-none md:right-[14%]"
          style={{ transformOrigin: "50% 0%" }}
          initial={{ opacity: 0, y: -16, rotate: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: [-20, 20, -20],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 1, delay: 1, ease: "easeOut" },
            rotate: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="h-16 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.65)] md:h-36" />
          <img
            className="-mt-10 w-16 sm:-mt-12 sm:w-20 md:-mt-20 md:w-28 lg:w-34 drop-shadow-[0_0_18px_rgba(255,5,5,0.45)]"
            src="/stranger-things-tag.svg"
            alt="Stranger Things tag"
          />
        </motion.div>

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
          className="mt-[40%] md:mt-[18%] lg:[15%]"
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
            {/* official Apply with Devfolio button — rendered by the Devfolio SDK */}
              <div
                className="apply-button"
                data-hackathon-slug={DEVFOLIO_SLUG}
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
              />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
