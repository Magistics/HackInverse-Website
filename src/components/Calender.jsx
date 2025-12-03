import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import calendarBg from "../assets/calendar.png";
import customFont from "../assets/fonts/Stranger-Things-Outlined.ttf";
import SectionTitle from "./Common/SectionTitle";

const Calender = () => {
  // Set your hackathon's end date and time here
  const targetDate = new Date("2026-01-31T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    // Add leading zeros if the number is less than 10
    for (const key in timeLeft) {
      timeLeft[key] = timeLeft[key].toString().padStart(2, "0");
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#222222] flex flex-col items-center py-6 px-2 sm:px-4 font-sans overflow-hidden">
      <style>
        {`
          /* 2. Define the Custom Font Face */
          @font-face {
            font-family: 'StrangerHeader';
            src: url(${customFont}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@700&display=swap');
          
          .arcade-text {
            font-family: 'Albert Sans', sans-serif;
            font-weight: 700; 
            color: #222222; 
            paint-order: stroke fill; 
            line-height: 1;
            -webkit-text-stroke: 2px #FFFFFF; 
          }
          @media (min-width: 768px) {
            .arcade-text {
              -webkit-text-stroke: 4.7px #FFFFFF;
            }
          }
        `}
      </style>
      {/* <h2
        className="text-xl sm:text-4xl md:text-7xl text-center tracking-wider uppercase -mt-6 mb-3 px-2"
        style={{
          fontFamily: "'StrangerHeader', serif",
          WebkitTextStroke: "1px #FF0505",
          color: "transparent",
          textShadow: "0 0 20px rgba(255, 0, 0)"
        }}
      >
        Mark Your Calender
      </h2>

      <div className="w-full max-w-4xl mb-12 md:mb-24 px-4">
        <div className="w-full h-px bg-red-500 shadow-[0_0_8px_red]"></div>
        <div className="w-full h-px bg-red-500 mt-1.5 shadow-[0_0_8px_red]"></div>
      </div> */}
      <div className="mb-5">
        <SectionTitle
          title="Mark Your Calender"
          strokeColor="rgba(255,0,0,0.8)"
          lineColor="rgba(255,0,0,0.8)"
          lineHeight="h-[3px]"
          className="merriweather"
        />
      </div>

      <div className="relative sm:mt-5 md:mt-15 w-full max-w-5xl mx-auto">
        <img
          src={calendarBg}
          alt="Arcade Machines"
          className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]"
        />

        <div className="absolute inset-0 grid grid-cols-3 text-center">
          <div className="relative w-full h-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={timeLeft.days || "00"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-[30%] left-[48%] md:left-[47%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]"
              >
                {timeLeft.days || "00"}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Machine 2: HOURS */}
          <div className="relative w-full h-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={timeLeft.hours || "00"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-[30%] left-[38%] md:left-[36%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]"
              >
                {timeLeft.hours || "00"}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Machine 3: MINS */}
          <div className="relative w-full h-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={timeLeft.mins || "00"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-[30%] left-[31%] md:left-[27%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]"
              >
                {timeLeft.mins || "00"}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
