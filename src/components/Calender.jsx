import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import calendarBg from "../assets/calendar.png";
import SectionTitle from "./Common/SectionTitle";

const UNITS = [
  { key: "days", screenClass: "arcade-screen-days" },
  { key: "hours", screenClass: "arcade-screen-hours" },
  { key: "mins", screenClass: "arcade-screen-mins" },
];

const Calender = () => {
  // Set your hackathon's end date and time here
  const targetDate = new Date("2026-10-10T09:30:00");

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
    <div className="w-full bg-[#222222] flex flex-col items-center pb-6 px-2 sm:px-4 font-sans overflow-hidden">
      <div className="mb-5">
        <SectionTitle
          title="Mark Your Calender"
          strokeColor="rgba(255,0,0,0.8)"
          lineColor="rgba(255,0,0,0.8)"
          lineHeight="h-[3px]"
          titleSize="text-[clamp(0.875rem,4.5vw,1.875rem)] lg:text-6xl xl:text-7xl"
        />
      </div>

      <div className="relative sm:mt-5 md:mt-15 w-full max-w-5xl mx-auto">
        <img
          src={calendarBg}
          alt="Arcade Machines"
          className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]"
        />

        <div className="absolute inset-0">
          {UNITS.map(({ key, screenClass }) => (
            <div key={key} className={`arcade-screen ${screenClass}`}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={timeLeft[key] || "00"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="arcade-value arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]"
                >
                  {timeLeft[key] || "00"}
                </motion.p>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
