import React from "react";
import { motion } from "framer-motion";
import MainTitle from "./Common/MainTitle";

export default function HeroSection() {
    return (
        <>
            <div className="overflow-hidden">
                <div
                    className="relative h-[50vh] md:h-screen w-full flex justify-center items-center"
                    style={{
                        background:
                            "linear-gradient(#111220, #282A57 50%, #162D3D)",
                    }}
                >
                    {/* Mountains */}
                    <motion.img
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute -bottom-10 w-full z-30"
                        src="/parallax/mountain3.svg"
                    />
                    <motion.img
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute -bottom-5 w-full z-20"
                        src="/parallax/mountain-2.svg"
                    />
                    <motion.img
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute bottom-0 w-full z-10"
                        src="/parallax/mountain-1.svg"
                    />

                    {/* Clouds */}
                    <motion.img
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute left-0 top-30 md:top-0 w-[30%] md:w-[13%]"
                        src="/parallax/clouds-left.svg"
                    />
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute right-0 top-30 md:top-0 w-[30%] md:w-[13%]"
                        src="/parallax/clouds-right.svg"
                    />
                    <motion.img
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute bottom-0 w-full"
                        src="/parallax/cloud-bottom.svg"
                    />

                    {/* Stars */}
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        className="absolute top-0 left-0 w-full"
                        src="/parallax/stars.svg"
                    />

                    {/* Title Block */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="relative z-30 md:-translate-y-30"
                    >
                        <MainTitle />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
