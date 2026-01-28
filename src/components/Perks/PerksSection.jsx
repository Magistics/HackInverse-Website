import React, { useEffect, useState, useRef } from 'react';
import { Layout as Layout2, BarChart3, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ number, delay = 0 }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetNum = parseInt(number);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1000;
        const increment = targetNum / (duration / 50);
        const interval = setInterval(() => {
          start += increment;
          if (start >= targetNum) {
            setDisplayNumber(targetNum);
            clearInterval(interval);
          } else {
            setDisplayNumber(Math.floor(start));
          }
        }, 50);
        return () => clearInterval(interval);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, targetNum, delay]);

  return (
    <span ref={ref}>
      {String(displayNumber).padStart(2, '0')}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function PerksSection() {
  const perks = [
    {
      id: 1,
      number: '01',
      icon: Layout2,
      title: 'OFFLINE BUILD ENVIRONMENT',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
    {
      id: 2,
      number: '02',
      icon: BarChart3,
      title: 'REAL COLLABORATION',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
    {
      id: 3,
      number: '03',
      icon: Clock,
      title: 'LEARNING UNDER PRESSURE',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 px-16 md:px-20 lg:px-32 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <motion.div
                key={perk.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
                  borderColor: "rgba(220, 38, 38, 1)"
                }}
                className="relative max-w-[20rem] rounded-[10px] border border-red-600 overflow-hidden group transition-colors duration-300"
              >
                {/* Animated gradient border overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(220,38,38,0.1), transparent)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Card Content */}
                <div className="p-4 md:p-6 h-full flex flex-col relative z-10">
                  {/* Header: Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className="border border-red-800 p-1 rounded"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={28} className="text-white" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-400">
                      <AnimatedNumber number={perk.number} delay={index * 0.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-red-600 font-bold text-[1.2rem] md:text-lg tracking-wider mb-6 leading-tight">
                    {perk.title}
                  </h3>

                  {/* Animated Divider */}
                  <motion.div 
                    className="h-0.5 mt-36 bg-red-600 mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ originX: 0 }}
                  />

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-mono flex-grow">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}