import React from "react";
import bottomLeftTreeImage from "../../assets/toplefttree.png";
import bottomRightTreeImage from "../../assets/toprighttree.png";
import cyclistsImage from "../../assets/cyclists.png";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const FloatingParticle = ({ delay, duration, size, left, startY }) => (
  <motion.div
    className="absolute rounded-full bg-red-500/20"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      bottom: `${startY}%`,
    }}
    animate={{
      y: [0, -100, -200],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

export default function Description() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cyclistsXRaw = useTransform(scrollYProgress, [0.4, 1], ["100vw", "-70vw"]);
  const leftTreeY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const rightTreeY = useTransform(scrollYProgress, [0, 1], ["15%", "0%"]);
  const leftTreeScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const rightTreeScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const cyclistsX = useSpring(cyclistsXRaw, {
    stiffness: 30,
    damping: 40,
    mass: 1,
  });

  const particles = [
    { delay: 0, duration: 4, size: 6, left: 10, startY: 5 },
    { delay: 1, duration: 5, size: 8, left: 25, startY: 8 },
    { delay: 2, duration: 4.5, size: 5, left: 40, startY: 3 },
    { delay: 0.5, duration: 5.5, size: 7, left: 60, startY: 6 },
    { delay: 1.5, duration: 4, size: 6, left: 75, startY: 4 },
    { delay: 2.5, duration: 5, size: 9, left: 90, startY: 7 },
    { delay: 3, duration: 4.2, size: 5, left: 15, startY: 10 },
    { delay: 0.8, duration: 5.2, size: 8, left: 85, startY: 2 },
  ];

  return (
    <div
      ref={sectionRef}
      className="
        relative min-h-screen w-full bg-[#222222] overflow-hidden text-white font-inter 
        flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16
        pt-[30vh] sm:pt-[12vh] md:pt-[14vh] lg:pt-[16vh]
      "
    >
      {/* Ambient glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 100%, rgba(255,0,0,0.05) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 100%, rgba(255,0,0,0.1) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 100%, rgba(255,0,0,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-black z-30"></div>

      {/* LEFT TREE with parallax */}
      <motion.div
        className="
          absolute bottom-0 left-0
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
          y: leftTreeY,
          scale: leftTreeScale,
        }}
      />

      {/* RIGHT TREE with parallax */}
      <motion.div
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
          y: rightTreeY,
          scale: rightTreeScale,
        }}
      />

      {/* CYCLISTS with enhanced animation */}
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
      />
    </div>
  );
}
