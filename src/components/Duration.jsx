import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Duration = () => {
  const infoCards = [
    { label: 'DURATION', value: '24 Hours' },
    { label: 'MODE', value: 'Offline' },
    { label: 'LOCATION', value: 'Kolkata' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white font-mono">
      <div className="max-w-6xl w-full px-6 text-center">

        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold tracking-widest text-red-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            textShadow: [
              "0 0 20px rgba(255,0,0,0.5)",
              "0 0 40px rgba(255,0,0,0.8)",
              "0 0 20px rgba(255,0,0,0.5)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          HACKINVERSE
        </motion.h1>
        
        <motion.div 
          className="w-72 h-[3px] bg-red-600 mx-auto mt-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0.5 }}
        />

        <motion.p 
          className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Enter the Unknown. A 24-hour online coding saga where developers
          breach the portal to solve problems from another dimension
        </motion.p>

        <motion.div 
          className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="relative border border-red-600 rounded-xl p-4 overflow-hidden group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,0,0,0.5)",
              }}
            >
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(255,0,0,0.15), inset 0 0 15px rgba(255,0,0,0.05)",
                    "0 0 30px rgba(255,0,0,0.3), inset 0 0 25px rgba(255,0,0,0.1)",
                    "0 0 15px rgba(255,0,0,0.15), inset 0 0 15px rgba(255,0,0,0.05)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
              />
              
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,0,0,0.1), transparent, rgba(255,0,0,0.1))",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                <p className="text-red-500 text-xl tracking-widest">{card.label}</p>
                <motion.h2 
                  className="text-4xl font-bold mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {card.value}
                </motion.h2>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="#" 
            target="blank" 
            className="px-6 py-3 border border-red-600 rounded-lg text-white transition-all duration-300 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(220,38,38,1)",
              boxShadow: "0 0 25px rgba(255,0,0,0.6)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255,0,0,0.3)",
                "0 0 20px rgba(255,0,0,0.5)",
                "0 0 10px rgba(255,0,0,0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Learn More →
          </motion.a>
          <motion.a 
            href="https://discord.gg/WxbySH72Z" 
            target="blank" 
            className="px-6 py-3 rounded-lg bg-indigo-600 transition-all duration-300 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4338ca",
              boxShadow: "0 0 25px rgba(79,70,229,0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(79,70,229,0.4)",
                "0 0 20px rgba(79,70,229,0.6)",
                "0 0 10px rgba(79,70,229,0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            DISCORD →
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Duration
