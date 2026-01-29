import React, { useRef } from "react";
import topLeftTreeImage from "../assets/bottomlefttree.png";
import topRightTreeImage from "../assets/bottomrighttree.png";
import shadowsImage from "../assets/shadows.png";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function ShadowSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const shadowsXRaw = useTransform(
        scrollYProgress,
        [0, 0.4],
        ["-100vw", "100vw"],
    );

    const shadowsX = useSpring(shadowsXRaw, {
        stiffness: 30,
        damping: 40,
        mass: 1,
    });

    return (
        <div
            ref={sectionRef}
            className="relative lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#9E1C1E]"
        >
            {/* MAIN BACKGROUND WRAPPER */}
            <div
                className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-[30vh] md:pt-[60vh] lg:pt-[100vh] z-10 bg-no-repeat"
                style={{
                    backgroundImage: `url(${topLeftTreeImage}), url(${topRightTreeImage})`,
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition: "left top, right top",
                    backgroundSize: "30vw auto, 30vw auto",
                }}
            >
                {/* SHADOWS */}
                <motion.div
                    className="absolute top-0 w-[45vw] h-[10vh] xs:w-[40vw] xs:h-[16vh] sm:w-[60vw] sm:h-[22vh] md:w-[55vw] md:h-[28vh] lg:w-[50vw] lg:h-[32vh] xl:w-[45vw] xl:h-[35vh] z-10"
                    style={{
                        backgroundImage: `url(${shadowsImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center top",
                        backgroundSize: "contain",
                        x: shadowsX,
                    }}
                ></motion.div>
            </div>
        </div>
    );
}
