import React from "react";
import { motion } from "framer-motion";
import track1 from "../../assets/track1.png" 
import track2 from "../../assets/track2.png"
import track3 from "../../assets/track3.png"
import track4 from "../../assets/track4.png"
import track5 from "../../assets/track5.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const TracksSection = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
      <div className="max-w-6xl w-full px-6 text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TRACKS
        </motion.h1>
        <motion.p 
          className="text-xl md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Select Your Domain
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:text-left max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Tracks img={track1} heading="OPEN INNOVATION" detail="Solve problems that don't exist yet using unconventional methods" />
          <Tracks img={track2} heading="WEB APP" detail="Build portals that bridge the gap between users and mainframe" />
          <Tracks img={track3} heading="AI & ML" detail="Harness Machine Intelligence to predict and shape the future" />
          <Tracks img={track4} heading="DESIGN & CREATIVITY" detail="Craft designs that defy logic and captivate every senses" />
          <div className="md:col-span-2">
            <Tracks img={track5} heading="ANYTHING YOU WANT" detail="Wildcard Protocol. No rules applied. If you can dream it, you can build it. This track is for mad scientists and reality benders." />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function Tracks({ heading, detail, img }) {
  return (
    <motion.div 
      className="relative border border-red-600 rounded-xl p-4 overflow-hidden group cursor-pointer"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 0 40px rgba(255,0,0,0.4)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated gradient border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(255,0,0,0.3), rgba(255,100,100,0.1), rgba(255,0,0,0.3))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glow pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(255,0,0,0.1)",
            "inset 0 0 40px rgba(255,0,0,0.2)",
            "inset 0 0 20px rgba(255,0,0,0.1)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.img 
          src={img} 
          className="h-15 w-15 border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h3 className="text-red-500 font-bold tracking-wider mb-2 mt-3">{heading}</h3>
        <p className="text-sm md:text-base leading-relaxed text-gray-200">
          {detail}
        </p>
      </div>
    </motion.div>
  );
}

export default TracksSection;
