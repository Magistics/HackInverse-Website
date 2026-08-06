import React, { useRef } from "react";
import {
    useScroll,
    motion,
    useTransform,
    useSpring,
    useMotionTemplate,
} from "framer-motion";
import ElevatorImage from "../../assets/Elevator.png";

/*
 * Elevator.png is 623x664 and holds three pieces stacked on one another:
 *   - ceiling beam : y 0 -> 14   (full width)
 *   - cage         : x 175 -> 462, y 116 -> 406
 *   - cables       : the thin vertical lines at x 181 / 211 / 428 / 454
 * The beam and the cage are cropped out of the sprite, and the cables are drawn
 * with divs so they can stretch while the cage is lowered on scroll.
 */

// Cage crop, expressed against the cage width (287px) so it scales with the box.
const CAGE = {
    ratio: "287 / 291",
    imageWidth: "217.073%", // 623 / 287
    offsetX: "-60.976%", // -175 / 287
    offsetY: "-40.418%", // -116 / 287
};

// Cable positions as a % of the cage width.
const CABLES_ABOVE = [2.1, 12.5, 88.2, 97.2];
const CABLES_BELOW = [12.9, 88.5, 97.6];

const HANG = 2; // vh of cable between beam and cage before scrolling
const DROP = 100; // vh the cage travels while the section passes by
const TAIL = 100; // vh of cable hanging under the cage before scrolling

const FLOATING_WORDS = [
    { text: "Hackathon", left: "20%", top: "22%", start: 0.1, size: "text-sm sm:text-base md:text-xl", tone: "text-white/80" },
    { text: "Web3", left: "78%", top: "30%", start: 0.16, size: "text-[11px] sm:text-sm md:text-base", tone: "text-white/60" },
    { text: "AI/ML", left: "24%", top: "44%", start: 0.24, size: "text-sm sm:text-base md:text-lg", tone: "text-white/70" },
    { text: "Hardware", left: "76%", top: "52%", start: 0.3, size: "text-[11px] sm:text-sm md:text-base", tone: "text-white/55" },
    { text: "Cloud Infra", left: "30%", top: "64%", start: 0.36, size: "text-sm sm:text-base md:text-lg", tone: "text-white/65" },
    { text: "24 Hours", left: "70%", top: "74%", start: 0.42, size: "text-[11px] sm:text-sm md:text-base", tone: "text-white/50" },
    { text: "Build. Break. Repeat.", left: "50%", top: "86%", start: 0.5, size: "text-xs sm:text-sm md:text-lg", tone: "text-white/70" },
];

export default function ElevatorAnimation() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const dropRaw = useTransform(scrollYProgress, [0.08, 0.85], [0, DROP]);

    const drop = useSpring(dropRaw, {
        stiffness: 30,
        damping: 40,
        mass: 1,
    });

    // The cage rides down, the cables above it grow and the ones below shrink by
    // the same amount so their loose end stays pinned to the same spot.
    const cageY = useMotionTemplate`${drop}vh`;
    const hangHeight = useMotionTemplate`calc(${HANG}vh + ${drop}vh)`;
    const tailHeight = useMotionTemplate`calc(${TAIL}vh - ${drop}vh)`;

    return (
        <div
            ref={sectionRef}
            aria-hidden="true"
            className="relative w-full overflow-hidden min-h-[130vh] md:min-h-[150vh] pointer-events-none select-none"
            style={{
                // Starts on the red of the section above and lands on the
                // #222222 of the dark section below.
                background:
                    "linear-gradient(180deg, #9E1C1E 0%, #911A1C 14%, #771517 32%, #4F0E0F 50%, #340B0C 66%, #260809 82%, #222222 100%)",
            }}
        >
            {/* WORDS RISING FROM THE BOTTOM */}
            {FLOATING_WORDS.map((word, i) => (
                <FloatingWord
                    key={word.text}
                    progress={scrollYProgress}
                    index={i}
                    {...word}
                />
            ))}

            {/* ELEVATOR RIG */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[6vh] w-[46vw] sm:w-[34vw] md:w-[26vw] lg:w-[22vw] max-w-[360px]">
                {/* CEILING BEAM */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[190%] overflow-hidden aspect-623/15">
                    <img
                        src={ElevatorImage}
                        alt=""
                        className="block w-full"
                    />
                </div>

                {/* CABLES FROM THE BEAM DOWN TO THE CAGE */}
                <motion.div
                    style={{ height: hangHeight }}
                    className="absolute left-0 top-0 z-0 w-full"
                >
                    {CABLES_ABOVE.map((left) => (
                        <span
                            key={left}
                            style={{ left: `${left}%` }}
                            className="absolute top-0 bottom-0 w-px md:w-0.5 -translate-x-1/2 bg-black"
                        />
                    ))}
                </motion.div>

                {/* CAGE + THE CABLES HANGING UNDER IT */}
                <motion.div
                    // top pins the cage to the end of the un-scrolled cable
                    style={{ top: `${HANG}vh`, y: cageY }}
                    className="absolute left-0 z-10 w-full"
                >
                    <div
                        className="relative w-full overflow-hidden"
                        style={{ aspectRatio: CAGE.ratio }}
                    >
                        <img
                            src={ElevatorImage}
                            alt="Elevator cage with a person inside"
                            className="block max-w-none"
                            style={{
                                width: CAGE.imageWidth,
                                marginLeft: CAGE.offsetX,
                                marginTop: CAGE.offsetY,
                            }}
                        />
                    </div>

                    <motion.div
                        style={{ height: tailHeight }}
                        className="relative w-full"
                    >
                        {CABLES_BELOW.map((left) => (
                            <span
                                key={left}
                                style={{ left: `${left}%` }}
                                className="absolute top-0 bottom-0 w-px md:w-0.5 -translate-x-1/2 bg-linear-to-b from-black via-black to-transparent"
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

function FloatingWord({ progress, text, left, top, start, size, tone, index }) {
    const yRaw = useTransform(progress, [start, start + 0.18, 1], [90, 0, -60]);
    const opacity = useTransform(
        progress,
        [start, start + 0.14, 0.9, 1],
        [0, 1, 1, 0.35],
    );

    const y = useSpring(yRaw, {
        stiffness: 40,
        damping: 30,
        mass: 0.6,
    });

    // Idle drift, on its own clock per word so the group never bobs in lockstep.
    // It lives on an inner span because the outer one already owns the scroll y.
    const bobY = 7 + (index % 3) * 4;
    const bobX = 3 + (index % 2) * 3;
    const bobDuration = 4.2 + (index % 4) * 0.9;

    return (
        <motion.span
            style={{ left, top, x: "-50%", y, opacity }}
            className={`absolute z-0 whitespace-nowrap spline-mono tracking-wide ${size} ${tone}`}
        >
            <motion.span
                className="inline-block"
                animate={{
                    y: [0, -bobY, 0, bobY * 0.6, 0],
                    x: [0, bobX, 0, -bobX, 0],
                    rotate: [0, -1.2, 0, 1.2, 0],
                }}
                transition={{
                    duration: bobDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                }}
            >
                {text}
            </motion.span>
        </motion.span>
    );
}
