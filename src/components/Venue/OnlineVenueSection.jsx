"use client";

import { motion } from "framer-motion";
import { Globe, Users, Zap, Clock } from "lucide-react";
//import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

export function OnlineVenueSection() {
  const features = [
    {
      icon: Globe,
      title: "Anywhere Access",
      description: "Join the arena from any corner of the globe.",
    },
    {
      icon: Users,
      title: "Virtual Collab",
      description: "Team up with the best, regardless of location",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Live announcements and challenges",
    },
    {
      icon: Clock,
      title: "Instant Support",
      description: "24/7 tech help and mentor pinging",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#9E1C1E]  via-red-600 to-red-800 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-20 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-20"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div className="space-y-8  flex flex-col justify-center items-center lg:items-start" variants={itemVariants}>
            <div className="space-y-4 flex flex-col justify-center items-center lg:items-start">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-center lg:text-left">
                  CODE FROM ANYWHERE, IMPACT EVERYWHERE
                </h1>
                <div className="h-[1px] m-auto lg:ml-[1px] w-[80%] bg-red-400 mt-4" />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 flex flex-col justify-center items-center lg:items-start">
                <h2 className="text-3xl lg:text-4xl font-italic text-white/90 text-center lg:text-left">
                  <i>Join Us Virtually</i>{" "}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed max-w-md text-center lg:text-left">
                  The future of hackathons is decentralized. No flights
                  required—just your talent and a Wi-Fi connection.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">

            
              <motion.a
               href="https://unstop.com/p/hackinverse-05-magistics-1605003?lb=PEEcRdx6&utm_medium=Share&utm_source=magistic85391&utm_campaign=Online_coding_challenge"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-slate-700/50 cursor-pointer text-red-500 shadow-red-500/80  relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 rounded-full bg-white border shadow-[0_0_30px_rgba(220,38,38,0.22)] text-sm md:text-base whitespace-nowrap  font-bold"
                type="button"
              >
                Claim Your Spot
              </motion.a>
            
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variants={pulseVariants}
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                  />
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4 hover:border-white/40 transition-colors duration-300">
                    <motion.div
                      className="inline-block p-3 bg-white/20 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6 text-red-800 " />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Section - Join Details */}
        {/* <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { label: "Platform", value: "Discord & Web" },
            { label: "Duration", value: "24-48 Hours" },
            { label: "Prize Pool", value: "$50,000+" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <p className="text-white/70 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* CTA Section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/50 to-transparent h-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
}
