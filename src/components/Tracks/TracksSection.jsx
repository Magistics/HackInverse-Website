import React from "react";
import topLeftTreeImage from "../../assets/bottomlefttree.png";
import topRightTreeImage from "../../assets/bottomrighttree.png";
import shadowsImage from "../../assets/shadows.png";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const TracksSection = () => {
  const sectionRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
  
    const shadowsXRaw = useTransform(scrollYProgress, [0, 0.4], ["-70vw", "80vw"]);
  
    const shadowsX = useSpring(shadowsXRaw, {
      stiffness: 30,
      damping: 40,
      mass: 1,
    })
  return (
    <div ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#9E1C1E] text-center font-['Cinzel_Decorative'] text-white">

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-black z-30"></div>

      {/* MAIN BACKGROUND WRAPPER */}
      <div
        className="
          relative flex flex-col items-center justify-center w-full 
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 
          pt-[52vh] pb-[10vh] z-10
          max-sm:pt-[46vh]
          max-sm:bg-[length:31vw_25vh,31vw_25vh,45vw_14vh]
          max-sm:bg-[left_top,right_top,center_top]
        "
        style={{
          backgroundImage: `url(${topLeftTreeImage}), url(${topRightTreeImage})`,
          backgroundRepeat: "no-repeat, no-repeat",

          /* Desktop positions */
          backgroundPosition: "left top, right top",
        }}
      >
        {/* SHADOWS */}
        <motion.div
          className="absolute top-0 max-sm:w-[35vw] max-sm:h-[12vh]

          w-[80vw] h-[18vh]
          sm:w-[60vw] sm:h-[22vh]
          md:w-[55vw] md:h-[28vh]

          z-10"
          style={{
            backgroundImage: `url(${shadowsImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "contain",
            x: shadowsX,
          }}
        ></motion.div>


        {/* Heading */}
        <h1
          className="relative z-10 mb-[8vh] text-[clamp(30px,5vw,100px)] font-semibold uppercase tracking-[0.10em] text-transparent [-webkit-text-stroke:3px_#f4e9e9]"
          style={{fontFamily: '"Merriweather", sans-serif'}}
        >
          TRACKS
          <div className="relative bottom-[1.4vh] left-1/2 h-[3.7px] w-[20vw] -translate-x-1/2 bg-[#f4e9e9] sm:w-[25vw] w-[40vw] sm:mt-0 mt-3"></div>
          <div className="relative bottom-[0.5vh] left-1/2 h-[3.7px] w-[20vw] -translate-x-1/2 bg-[#f4e9e9] sm:w-[25vw] w-[40vw] sm:mt-0 mt-4px"></div>
        </h1>

        {/* TRACKS CONTENT */}
        {/* <div className="relative z-10 flex w-full max-w-[1600px] flex-wrap justify-center gap-[4vw] px-4 md:flex-nowrap">
          
          <div className="flex min-h-[360px] flex-1 flex-col items-center justify-start p-2">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 1
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Artificial Intelligence
            </h3>
            <p className="text-[clamp(1.5rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Building models for prediction, classification, natural language
              processing, or computer vision.
            </p>
          </div>

          <div className="relative flex min-h-[360px] flex-1 flex-col items-center justify-start p-6 md:border-x-4 md:border-white">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 2
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Web Development
            </h3>
            <p className="text-[clamp(1.5rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Creating responsive, scalable, and interactive web applications.
            </p>
          </div>

          <div className="flex min-h-[360px] flex-1 flex-col items-center justify-start p-6">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 3
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Cybersecurity
            </h3>
            <p className="text-[clamp(1.5rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Protecting systems and networks through innovative security
              strategies and tools.
            </p>
          </div>

        </div> */}
        {/* Coming Soon */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative p-[2px] rounded-2xl overflow-hidden">
          {/* Rotating gradient border */}
          <motion.div
            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,#ff6b6b_120deg,#ff6b6b_180deg,#ff6b6b_240deg,transparent_300deg,transparent_360deg)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Static glow pulse effect */}
          <motion.div
            className="absolute inset-0 blur-xl bg-gradient-to-r from-red-500/30 via-black-500/30 to-red-500/30 rounded-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner card content */}
          <div className="relative bg-[#8B1D24] rounded-2xl px-12 py-8 md:px-20 md:py-12">
            <motion.p
              className="text-3xl md:text-5xl font-bold text-white tracking-wider text-center"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Coming Soon
            </motion.p>
            <p 
            className="text-white/60 animate-pulse text-center mt-3 text-sm md:text-md "
            style={{
                background: "linear-gradient(90deg, #000000 0%, #3b0101 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Stay tuned for exciting tracks
              </p>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default TracksSection;
