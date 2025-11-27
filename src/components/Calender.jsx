import React from "react";
import { motion } from "framer-motion";
// ...existing code...

const Calender = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="will-change-transform overflow-hidden"
    >
      <h2 className="text-[#222222] text-2xl sm:text-3xl md:text-6xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.65)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
        Mark Your Calender
      </h2>

      <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-100">
        <div className="h-[2px] bg-transparent relative mt-2">
          <span className="absolute left-0 right-0 block h-[2px] bg-red-600" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 md:mt-16 text-white overflow-x-auto overflow-y-hidden px-4">
        <div className="flex flex-nowrap items-center justify-center gap-5 md:space-x-8 lg:space-x-10">
          <Timebox value="63" label="Days" />
          <Colon />
          <Timebox value="14" label="Hrs" />
          <Colon />
          <Timebox value="42" label="Mins" />
        </div>
      </div>
    </motion.div>
  );
};

function Timebox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      {/* clipped wrapper prevents scaled child from overflowing page */}
      <div className="rounded-md w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden flex items-center justify-center">
        <motion.button
          className="bg-gray-200 text-black w-full h-full flex items-center justify-center text-2xl md:text-5xl font-bold cursor-pointer focus:outline-none will-change-transform"
          initial={{ scale: 1, y: 0, boxShadow: "0 6px 18px rgba(255,0,0,0.18)" }}
          whileHover={{
            scale: 1.06,
            y: -8,
            boxShadow: "0 28px 60px rgba(255,0,0,0.22)",
            transition: { type: "spring", stiffness: 300, damping: 28 },
          }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.span
            layout
            className="select-none"
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
          >
            {value}
          </motion.span>
        </motion.button>
      </div>

      <motion.span
        className="mt-2 text-red-500 font-mono text-xs md:text-3xl"
        initial={{ y: 0, opacity: 0.95 }}
        whileHover={{ y: -6, opacity: 1, transition: { duration: 0.18, ease: "easeOut" } }}
      >
        {label}
      </motion.span>
    </div>
  );
}

function Colon() {
  return (
    <motion.div
      className="text-red-500 text-xl md:text-5xl font-bold flex flex-col justify-center -mt-2 md:-mt-8"
      initial={{ opacity: 0.95, scale: 1 }}
      animate={{ scale: [1, 1.03, 1], opacity: [0.95, 1, 0.95] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
    >
      :
    </motion.div>
  );
}

export default Calender;