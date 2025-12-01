import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ scrollToView, refs }) {
  const [hoveredItem, setHoveredItem] = useState(null);
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
      <div className="container mx-auto px-4 md:max-w-[60rem]">
        <div className="relative flex items-center justify-between bg-white/5 border border-white/10 rounded-[61px] py-1 md:py-3 px-5 mt-5">
      {/* Mobile: Logo and menu button */}
      <div className="flex items-center md:hidden w-full justify-between">
        <img src="/logo_light.png" alt="HackInverse Logo" className="h-8 w-auto rounded-full" />
        {/* Mobile menu button with animation */}
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Desktop Navigation - 3 items left, logo center, 3 items right */}
      <div className="hidden md:flex items-center justify-between w-full" onMouseLeave={() => setHoveredItem(null)}>
        {/* Left navigation items */}
        <div className="flex items-center space-x-5">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Sponsors", href: "#sponsors" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              className="relative px-4 py-2 text-xl font-medium albert_sans cursor-pointer"
              animate={{ color: hoveredItem === item.name ? "#FFFFFF" : "#D1D5DB" }}
              transition={{ duration: 0.3 }}
            >
              {hoveredItem === item.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-red-500/80"
                  style={{ borderRadius: "15px" }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Glow effect layer */}
            <div className="absolute -inset-1 bg-red-500/65 rounded-full blur-[10px]" />
            {/* Logo container */}
            <div className="relative bg-slate-900/65 rounded-full px-8 py-3 border border-slate-700/50 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <img src="/logo_light.png" alt="HackInverse Logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>

        {/* Right navigation items */}
        <div className="flex items-center space-x-5">
          {[
            { name: "Venue", href: "#venue" },
            { name: "Agenda", href: "#agenda" },
            { name: "Teams", href: "#teams" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              className="relative px-4 py-2 text-xl font-medium albert_sans cursor-pointer"
              animate={{ color: hoveredItem === item.name ? "#FFFFFF" : "#D1D5DB" }}
              transition={{ duration: 0.3 }}
            >
              {hoveredItem === item.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-red-500/80"
                  style={{ borderRadius: "15px" }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </div>
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
                {["Home", "About", "Sponsors", "Venue", "Agenda", "Teams"].map(
                  (item, index) => (
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
                  )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
