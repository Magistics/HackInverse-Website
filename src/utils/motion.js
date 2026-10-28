// Reusable Framer Motion Variants & Curves for HackInverse Editorial Experience

export const transitionCurves = {
  cinematic: [0.16, 1, 0.3, 1],
  smooth: [0.25, 0.1, 0.25, 1],
  anticipate: [0.4, 0, 0.2, 1],
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => ({
  hidden: {
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
    x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration,
      ease: transitionCurves.cinematic,
      delay,
    },
  },
});

export const textMaskReveal = {
  hidden: { y: "110%", opacity: 0 },
  visible: (delay = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: transitionCurves.cinematic,
      delay,
    },
  }),
};

export const hairlineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: transitionCurves.cinematic,
      delay,
    },
  }),
};

export const cardSpringHover = {
  rest: { y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  hover: {
    y: -6,
    transition: { type: "spring", stiffness: 350, damping: 18 },
  },
};
