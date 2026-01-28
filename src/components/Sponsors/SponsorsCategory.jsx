import React from 'react'
import { motion } from 'framer-motion'
import SponsorsLogo from './SponsorsLogo'
import BlurCard from './BlurCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const SponsorsCategory = ({ title, sponsors, columns = 3, hideTitle = false }) => {
  return (
    <div className="w-full text-center">
      {!hideTitle && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      <motion.div
        className={`grid gap-6 md:gap-12 justify-items-center w-full
        ${columns === 1 && "grid-cols-1"} 
        ${columns === 2 && "grid-cols-2"} 
        ${columns === 3 && "grid-cols-2 md:grid-cols-3"}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {sponsors.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)"
            }}
            className="transition-all duration-300"
          >
            {item?.src ? (
              <SponsorsLogo src={item.src} alt={item.alt} />
            ) : (
              <BlurCard />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SponsorsCategory

