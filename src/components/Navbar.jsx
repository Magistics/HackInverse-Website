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
            className="fixed top-0 w-full py-4 z-50 sofia-sans-extra-condensed backdrop-blur-sm"
        >
            <div className="container mx-auto px-4 md:max-w-5xl">
                <div className="relative flex items-center justify-between bg-black/80 border border-white/10 backdrop-blur-md rounded-full py-2 md:py-3 px-6 shadow-lg">
                    {/* Logo and brand */}
                    <div className="flex items-center md:w-auto w-full md:justify-start justify-between">
                        <a href="#" className="flex items-center gap-2 group">
                            <img
                                src="/icon.svg"
                                alt="HackInverse Logo"
                                className="h-10 w-auto rounded-full group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-white font-bold text-xl tracking-wider hidden sm:block">HACKINVERSE</span>
                        </a>

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
                    <div className="hidden md:flex items-center justify-end space-x-8 flex-1 ml-8">
                        {[
                            { name: "Home", href: "#" },
                            { name: "About", href: "#about" },
                            { name: "Tracks", href: "#tracks" },
                            { name: "Prizes", href: "#prizes" },
                            { name: "Sponsors", href: "#sponsors" },
                            { name: "FAQ", href: "#faq" },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile menu with animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden mx-4 absolute top-full left-0 right-0 mt-2 py-5 bg-black/95 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden shadow-2xl"
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
                                className="flex flex-col items-center space-y-6"
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
                                    "Tracks",
                                    "Prizes",
                                    "Sponsors",
                                    "FAQ",
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
                                            href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-white hover:text-blue-400 text-xl font-medium tracking-wide"
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
