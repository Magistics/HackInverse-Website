import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import countdownBg from "../assets/countdown-bg.png";
import customFont from "../assets/fonts/Stranger-Things-Outlined.ttf";

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Calender = () => {
  const targetDate = new Date("2026-01-31T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      mins: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
        mins: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const DigitBox = ({ value, index }) => {
    const digits = value.split("");
    return (
      <div className="flex gap-1 md:gap-4">
        {digits.map((digit, idx) => (
          <div 
            key={idx} 
            className="relative w-[45px] h-[75px] sm:w-[60px] sm:h-[100px] md:w-[111px] md:h-[209px] bg-[#171815] rounded-[6px] sm:rounded-[10px] md:rounded-[20px] flex items-center justify-center overflow-hidden"
          >
            {/* Horizontal flip line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] md:h-[3px] bg-black z-10 shadow-[0_5px_30px_rgba(0,0,0,1)] md:shadow-[0_10px_60px_rgba(0,0,0,1)]"></div>
            
            <span className="arcade-text text-[35px] sm:text-[50px] md:text-[100px] leading-none">
              {digit}
            </span>

            {/* Side tabs */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[1.5px] h-[6px] sm:w-[2px] sm:h-[8px] md:w-[5px] md:h-[15px] bg-white border border-black z-20"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1.5px] h-[6px] sm:w-[2px] sm:h-[8px] md:w-[5px] md:h-[15px] bg-white border border-black z-20"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="w-full min-h-[350px] md:min-h-[591px] flex flex-col items-center justify-center py-8 md:py-12 px-2 sm:px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${countdownBg})`,
        backgroundSize: '300px 300px',
        backgroundRepeat: 'repeat',
        backgroundColor: '#f2f2f2'
      }}
    >
      <style>
        {`
          @font-face {
            font-family: 'StrangerHeader';
            src: url(${customFont}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@700&family=Spline+Sans+Mono:wght@500&display=swap');
          
          .arcade-text {
            font-family: 'Albert Sans', sans-serif;
            font-weight: 700; 
            color: #222222; 
            paint-order: stroke fill; 
            -webkit-text-stroke: 1px #FFFFFF; 
          }
          @media (min-width: 640px) {
            .arcade-text {
              -webkit-text-stroke: 1.5px #FFFFFF;
            }
          }
          @media (min-width: 768px) {
            .arcade-text {
              -webkit-text-stroke: 3px #FFFFFF;
            }
          }

          .stranger-title {
            font-family: 'StrangerHeader', serif;
            letter-spacing: 0.05em;
          }
        `}
      </style>

      {/* Title Section */}
      <motion.div 
        className="relative flex flex-col items-center mb-6 md:mb-12 w-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="stranger-title text-[28px] sm:text-[40px] md:text-[100px] text-[#FF0505] leading-tight text-center px-4"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(255,0,0,0.5)",
              "0 0 30px rgba(255,0,0,0.8)",
              "0 0 10px rgba(255,0,0,0.5)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          MARK YOUR CALENDAR
        </motion.h2>
        <div className="w-full flex flex-col items-center gap-1 md:gap-2 -mt-1 md:-mt-4">
          <motion.div 
            className="w-[85%] md:w-[938px] h-[1px] md:h-[3px] bg-[#FF0505]"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />
          <motion.div 
            className="w-[85%] md:w-[938px] h-[1px] md:h-[3px] bg-[#FF0505]"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ originX: 1 }}
          />
        </div>
      </motion.div>

      {/* Countdown Section */}
      <motion.div 
        className="flex flex-col items-center w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Labels */}
        <motion.div 
          className="grid grid-cols-3 w-full mb-3 md:mb-6 text-[#FF0505] font-['Spline_Sans_Mono'] font-medium text-[10px] sm:text-[14px] md:text-[30px] text-center"
          variants={itemVariants}
        >
          <motion.p whileHover={{ scale: 1.1 }}>DAYS</motion.p>
          <motion.p whileHover={{ scale: 1.1 }}>HOURS</motion.p>
          <motion.p whileHover={{ scale: 1.1 }}>MINUTES</motion.p>
        </motion.div>

        {/* Digits */}
        <div className="flex justify-center md:justify-between w-full gap-2 sm:gap-4 md:gap-20">
          <div className="flex-1 flex justify-center"><DigitBox value={timeLeft.days} index={0} /></div>
          <div className="flex-1 flex justify-center"><DigitBox value={timeLeft.hours} index={1} /></div>
          <div className="flex-1 flex justify-center"><DigitBox value={timeLeft.mins} index={2} /></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calender;
