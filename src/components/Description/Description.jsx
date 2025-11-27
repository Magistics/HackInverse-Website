import React from "react";
import bottomLeftTreeImage from "../../assets/toplefttree.png";
import bottomRightTreeImage from "../../assets/toprighttree.png";
import cyclistsImage from "../../assets/cyclists.png";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function Description() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
  });

  const cyclistsXRaw = useTransform(scrollYProgress, [0.4, 1], ["100vw", "-70vw"]);

  const cyclistsX = useSpring(cyclistsXRaw, {
    stiffness: 30,
    damping: 40,
    mass: 1,
  })
  return (
    <div
      ref={sectionRef}
      className="
        relative min-h-screen w-full bg-[#222222] overflow-hidden text-white font-inter 
        flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16

        /* MOBILE: less top gap */
        pt-[30vh]     
        sm:pt-[12vh] md:pt-[14vh] lg:pt-[16vh]
      "
    >
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-black z-30"></div>

      {/* LEFT TREE */}
      <div
        className="
          absolute bottom-0 left-0

          /* responsive sizes */
          max-sm:w-[33vw] max-sm:h-[27vh]
          w-[65vw] h-[35vh]
          sm:w-[50vw] sm:h-[45vh]
          md:w-[40vw] md:h-[70vh]

          z-10
        "
        style={{
          backgroundImage: `url(${bottomLeftTreeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "contain",
        }}
      ></div>

      {/* RIGHT TREE */}
      <div
        className="
          absolute bottom-0 right-0

          max-sm:w-[33vw] max-sm:h-[27vh]
          w-[65vw] h-[35vh]
          sm:w-[50vw] sm:h-[45vh]
          md:w-[40vw] md:h-[70vh]

          z-10
        "
        style={{
          backgroundImage: `url(${bottomRightTreeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
        }}
      ></div>

      {/* CYCLISTS */}
      <motion.div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2

          max-sm:w-[35vw] max-sm:h-[12vh]

          w-[80vw] h-[18vh]
          sm:w-[60vw] sm:h-[22vh]
          md:w-[55vw] md:h-[28vh]

          z-10
        "
        style={{
          backgroundImage: `url(${cyclistsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          x: cyclistsX,
        }}
      ></motion.div>
    </div>
  );
}
