import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ scrollToView, refs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // States for scroll animation
    const [showNav, setShowNav] = useState(true);
    const [lastYPos, setLastYPos] = useState(0);

    // Effect to handle scroll detection
    useEffect(() => {
        function handleScroll() {
            const currentYPos = window.scrollY;
            const isScrollingUp = currentYPos < lastYPos;

            // Show navbar if scrolling up or at the very top of the page
            setShowNav(isScrollingUp || currentYPos < 10);
            setLastYPos(currentYPos);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastYPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Framer Motion variants for the navbar animation
    const navbarVariants = {
        hidden: {
            y: "-100%",
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.nav
            variants={navbarVariants}
            animate={showNav ? "visible" : "hidden"}
            className="sticky top-0 w-full py-4 z-50 sofia-sans-extra-condensed"
        >
            <div className="container mx-auto px-4 md:max-w-4xl">
                <div className="relative flex items-center justify-between bg-black rounded-[61px] py-1 md:py-3 px-5">
                    {/* Logo and brand */}
                    <div className="flex items-center md:w-auto w-full md:justify-start justify-between">
                        <img
                            src="/icon.svg"
                            alt="HackInverse Logo"
                            className="h-12 w-auto rounded-full"
                        />

                        <div className="flex items-center md:hidden">
                            {/* Mobile menu button with animation */}
                            <div className="md:hidden">
                                <motion.button
                                    onClick={toggleMenu}
                                    className="text-white focus:outline-none p-2 pr-0"
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <motion.div
                                        animate={isMenuOpen ? "open" : "closed"}
                                        variants={{
                                            open: { rotate: 180 },
                                            closed: { rotate: 0 },
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {isMenuOpen ? (
                                            <motion.svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.5,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </motion.svg>
                                        ) : (
                                            <motion.svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.5,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </motion.svg>
                                        )}
                                    </motion.div>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation links - Desktop */}
                    <div className="hidden md:flex items-center justify-evenly w-[70%] space-x-8">
                        <span className="text-white hover:text-gray-300 text-xl font-medium albert_sans cursor-pointer">
                            Home
                        </span>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 text-xl font-medium albert_sans"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 text-xl font-medium albert_sans"
                        >
                            Sponsors
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 text-xl font-medium albert_sans"
                        >
                            Venue
                        </a>
                        <span className="text-white hover:text-gray-300 text-xl font-medium albert_sans cursor-pointer">
                            Agenda
                        </span>
                        <span className="text-white hover:text-gray-300 text-xl font-medium albert_sans cursor-pointer">
                            Teams
                        </span>
                    </div>
                </div>

                {/* Mobile menu with animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden mx-4 absolute top-full left-0 right-0 mt-2 py-5 bg-black rounded-[20px] google-gradient-border overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                        >
                            <motion.div
                                className="flex flex-col items-center space-y-4"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.1,
                                        },
                                    },
                                    closed: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            staggerDirection: -1,
                                        },
                                    },
                                }}
                            >
                                {[
                                    "Home",
                                    "About",
                                    "Sponsors",
                                    "Venue",
                                    "Agenda",
                                    "Teams",
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15,
                                                },
                                            },
                                            closed: {
                                                opacity: 0,
                                                y: -20,
                                                transition: {
                                                    duration: 0.2,
                                                },
                                            },
                                        }}
                                    >
                                        <a
                                            href="#"
                                            className="text-white hover:text-gray-300 text-xl albert_sans"
                                        >
                                            {item}
                                        </a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
