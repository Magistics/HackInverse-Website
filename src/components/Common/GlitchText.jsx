import React from "react";
import { motion } from "framer-motion";

const GlitchText = ({ text, className }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[#FF0505] opacity-70"
                animate={{
                    x: [0, -2, 2, -1, 0],
                    y: [0, 1, -1, 0],
                    opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 3,
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-[#00FFFF] opacity-70"
                animate={{
                    x: [0, 2, -2, 1, 0],
                    y: [0, -1, 1, 0],
                    opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 3,
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
