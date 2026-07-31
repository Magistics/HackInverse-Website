import React from "react";
import { motion } from "framer-motion";
import { Brain, BadgeDollarSign, Bot, CloudCog, PackageOpen } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

/*
 * The tracks hang off a single vertical rail. Every node sits one arm-length
 * away from that rail and reaches back to it with a double connector line, so
 * ARM_W and the ARM_GAP_* margins have to stay in sync — if they drift apart
 * the connectors stop short of the rail (or run past it).
 */
const NODE_W = "w-16 sm:w-20 md:w-24 lg:w-28";
const ARM_W = "w-12 md:w-30 lg:w-60";
const ARM_GAP_LEFT = "mr-12 md:mr-30 lg:mr-60";
const ARM_GAP_RIGHT = "ml-12 md:ml-30 lg:ml-60";

/*
 * Same deal vertically: the rail is stretched past the bottom of the rows by
 * exactly the gap that sits above the closing node, so it lands on that node.
 */
const ROW_GAP = "gap-y-14 sm:gap-y-20 md:gap-y-28 lg:gap-y-32";
const TAIL_GAP = "mt-14 sm:mt-20 md:mt-28 lg:mt-32";
const RAIL_TAIL = "-bottom-14 sm:-bottom-20 md:-bottom-28 lg:-bottom-32";

/*
 * Entrance: the rail draws itself downward, and no branch moves until the rail
 * has reached its row — then the arm shoots out of the rail, the node pops on
 * the end of it and the label rises underneath. Delays below are all timed
 * against the rail's own travel.
 */
const RAIL_DURATION = 0.9;
const FIRST_ROW = 0.3; // rail reaches the top row
const ROW_STEP = 0.32; // rail travel from one row to the next
const ARM_TO_BOX = 0.28; // arm lands before its node pops

const railVariants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: RAIL_DURATION, ease: [0.65, 0, 0.35, 1] },
  },
};

const armVariants = (delay) => ({
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.45, delay, ease: "easeOut" },
  },
});

const boxVariants = (delay) => ({
  hidden: { opacity: 0, scale: 0.55 },
  show: {
    opacity: 1,
    scale: 1,
    // the arm is a child of the box, so it rides this spring too — keep the
    // overshoot small or the arm briefly punches through the rail
    transition: { type: "spring", stiffness: 260, damping: 20, delay },
  },
});

const iconVariants = (delay) => ({
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.45, delay, ease: "backOut" },
  },
});

const labelVariants = (delay) => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const BRANCHES = [
  { icon: BadgeDollarSign, label: "Web3", side: "left" },
  { icon: Brain, label: "AI/ML", side: "right" },
  { icon: CloudCog, label: "Cloud Infra", side: "left" },
  { icon: Bot, label: "Hardware", side: "right" },
];

const TracksSection = () => {
  // Full height only from md up: on mobile the diagram is shorter than the
  // viewport, and centering it inside 100vh left a phone-height-dependent gap
  // before the About section.
  return (
    <div className=" w-full md:min-h-screen flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
      {/* mt-14 replaces the top half of the centering slack that min-h-screen
          used to add on mobile, so only the gap below the diagram shrinks */}
      <div className="mt-14 sm:mt-20 lg:mt-32 mb-16 md:mb-32 max-w-5xl w-full px-6 text-center">
        <SectionTitle title="TRACKS" titleSize=" text-5xl md:text-7xl"/>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 md:mt-10  text-xl md:text-4xl"
        >
          Select Your Domain
        </motion.p>

        {/* One trigger for the whole diagram — the pieces inherit "show"
            through context and stagger themselves with their own delays. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 sm:mt-20 md:mt-28"
        >
          {/* BRANCHES */}
          <div className="relative">
            <Rail className={RAIL_TAIL} />

            <div className={`grid grid-cols-2 ${ROW_GAP}`}>
              {BRANCHES.map((branch, index) => (
                <div
                  key={branch.label}
                  className={`flex ${branch.side === "left" ? "justify-end" : "justify-start"}`}
                >
                  <TrackNode
                    {...branch}
                    delay={FIRST_ROW + Math.floor(index / 2) * ROW_STEP}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* END OF THE LINE */}
          <div className={`flex justify-center ${TAIL_GAP}`}>
            <TrackNode
              icon={PackageOpen}
              label="Open Innovation"
              delay={RAIL_DURATION + 0.35}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function Rail({ className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      variants={railVariants}
      style={{ originY: 0 }}
      className={`absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 flex gap-1 md:gap-1.5 ${className}`}
    >
      <span className="w-0.5 md:w-[3px] bg-[#FF0000]" />
      <span className="w-0.5 md:w-[3px] bg-[#FF0000]" />
    </motion.div>
  );
}

// `side` left/right draws the arm back to the rail; leaving it off gives the
// bare node that closes the line at the bottom.
function TrackNode({ icon: Icon, label, side, delay }) {
  const armGap = side === "left" ? ARM_GAP_LEFT : side === "right" ? ARM_GAP_RIGHT : "";
  // A node sitting on the rail has no arm to wait for.
  const boxDelay = side ? delay + ARM_TO_BOX : delay;

  return (
    <div className={`flex flex-col items-center ${NODE_W} ${armGap}`}>
      <motion.div
        variants={boxVariants(boxDelay)}
        className="relative w-full aspect-square flex items-center justify-center border-2 md:border-[3px] border-[#FF0000] shadow-[0_0_18px_rgba(255,0,0,0.18)]"
      >
        <motion.div variants={iconVariants(boxDelay + 0.12)}>
          <Icon
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 text-white"
            strokeWidth={1.75}
          />
        </motion.div>

        {side && (
          <motion.div
            aria-hidden="true"
            variants={armVariants(delay)}
            // grow out of the rail, not out of the arm's own middle
            style={{ originX: side === "left" ? 1 : 0 }}
            className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-1.5 ${ARM_W} ${
              side === "left" ? "left-full" : "right-full"
            }`}
          >
            <span className="h-0.5 md:h-[3px] bg-[#FF0000]" />
            <span className="h-0.5 md:h-[3px] bg-[#FF0000]" />
          </motion.div>
        )}
      </motion.div>

      {/* nowrap keeps the label off the node's width so the arm still lines up */}
      <motion.p
        variants={labelVariants(boxDelay + 0.18)}
        className="mt-3 md:mt-5 albert-sans font-bold tracking-wide whitespace-nowrap text-xs sm:text-sm md:text-lg lg:text-xl"
      >
        {label}
      </motion.p>
    </div>
  );
}

export default TracksSection;
