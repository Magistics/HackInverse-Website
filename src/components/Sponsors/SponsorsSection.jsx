import React from "react";
import { motion } from "framer-motion";
import SponsorsCategory from "./SponsorsCategory";
import { sponsorsData } from "./SponsorsData";
import customFont from "../../assets/fonts/Stranger-Things-Outlined.ttf";
import { MoveRight } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const SponsorsSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 text-white overflow-hidden">
      <style>
        {`
          @font-face {
            font-family: 'StrangerHeader';
            src: url(${customFont}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          .stranger-title {
            font-family: 'StrangerHeader', serif;
            letter-spacing: 0.05em;
          }

          .sponsor-category-title {
            font-family: 'StrangerHeader', serif;
            text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.57);
            letter-spacing: 0.02em;
          }

          .glow-container {
            box-shadow: 0px 4px 19px 0px #000000, 0px 4px 67px 0px rgba(255, 0, 0, 0.6);
          }
        `}
      </style>

      {/* Main Title Section with floating animation */}
      <motion.div 
        className="relative flex flex-col items-center mb-16 md:mb-24 w-full max-w-[509px] glow-container bg-black/20 pt-16 md:pt-24 pb-6 px-10 rounded-sm"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{ 
          boxShadow: [
            "0px 4px 19px 0px #000000, 0px 4px 67px 0px rgba(255, 0, 0, 0.4)",
            "0px 4px 19px 0px #000000, 0px 4px 90px 0px rgba(255, 0, 0, 0.7)",
            "0px 4px 19px 0px #000000, 0px 4px 67px 0px rgba(255, 0, 0, 0.4)",
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          opacity: { duration: 0.8, type: "spring" },
          y: { duration: 0.8, type: "spring" }
        }}
      >
        <motion.h1 
          className="stranger-title absolute top-0 left-1/2 -translate-x-1/2 text-[60px] md:text-[100px] text-[#FF0505] leading-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SPONSORS
        </motion.h1>
        <div className="w-full flex flex-col items-center gap-1 md:gap-1.5 mt-2">
          <motion.div 
            className="w-full h-[2px] md:h-[3px] bg-[#FF0505]"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
          <motion.div 
            className="w-full h-[2px] md:h-[3px] bg-[#FF0505]"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ originX: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="w-full max-w-5xl flex flex-col items-center gap-16 md:gap-24">
        {/* Title Sponsor */}
        <motion.div 
          className="w-full flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="sponsor-category-title text-[40px] md:text-[70px] text-white mb-8"
            whileHover={{ textShadow: "0 0 30px rgba(255,0,0,0.5)" }}
          >
            TITLE SPONSOR
          </motion.h2>
          <SponsorsCategory
            sponsors={sponsorsData.title}
            columns={1}
            hideTitle={true}
          />
        </motion.div>

        <motion.div 
          className="w-full h-[2px] md:h-[5px] bg-[#FF060642]"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />

        {/* Gold Sponsor */}
        <motion.div 
          className="w-full flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="sponsor-category-title text-[40px] md:text-[70px] text-white mb-8"
            whileHover={{ textShadow: "0 0 30px rgba(255,215,0,0.5)" }}
          >
            GOLD SPONSOR
          </motion.h2>
          <SponsorsCategory
            sponsors={sponsorsData.gold}
            columns={3}
            hideTitle={true}
          />
        </motion.div>

        <motion.div 
          className="w-full h-[2px] md:h-[5px] bg-[#FF060642]"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ originX: 1 }}
        />

        {/* Silver Sponsor */}
        <motion.div 
          className="w-full flex flex-col items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="sponsor-category-title text-[40px] md:text-[70px] text-white mb-8"
            whileHover={{ textShadow: "0 0 30px rgba(192,192,192,0.5)" }}
          >
            SILVER SPONSOR
          </motion.h2>
          <SponsorsCategory
            sponsors={sponsorsData.silver}
            columns={3}
            hideTitle={true}
          />
        </motion.div>

        <motion.div 
          className="w-full h-[2px] md:h-[5px] bg-[#FF060642]"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ originX: 0.5 }}
        />

        {/* Become a Sponsor Button */}
        <motion.a
          href="#"
          className="flex items-center justify-center gap-3 bg-[#222222] border border-[#FF0505] rounded-[10px] px-6 py-4 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(255,0,0,0.5)",
            borderColor: "#ff3333"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-['Spline_Sans_Mono'] font-semibold text-[16px] md:text-[17px] text-white tracking-wide">
            BECOME A SPONSOR
          </span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <MoveRight className="w-5 h-5 text-white" />
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default SponsorsSection;


// import React from 'react'

// const SponsorsSection = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
//       <div className="max-w-6xl w-full px-6 text-center">
//         <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
//           SPONSORS
//         </h1>
//         <Sponsors heading = "TITLE SPONSOR"/>
//       </div>
//     </div>
//   )
// }

// function Sponsors({heading, logo}) {
//   return(
//     <div>
//     <div className='text-xl md:text-4xl font-bold text-white'>{heading}</div>
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto'>
//       {logo}
//     </div>
//     </div>
//   )
// }

// export default SponsorsSection
