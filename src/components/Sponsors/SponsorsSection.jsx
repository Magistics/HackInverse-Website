import React from "react";
import Bg from "../../assets/Bg.png";
import spontext from "../../assets/sponsors/spontext.png";
import spon1 from "../../assets/sponsors/spon1.png";
import spon2 from "../../assets/sponsors/spon2.png";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion"

const SponsorsSection = () => {
  // const sponsors = [
  //   { id: 1, img: spon1, alt: "Sponsors Top Row" },
  //   { id: 2, img: spon2, alt: "Sponsors Bottom Row" },
  // ];

  return (
    <section
      className="relative px-[2vw] py-[4vh] text-center text-black overflow-hidden box-border max-[992px]:py-[3vh] max-[768px]:py-[2vh] max-[576px]:py-[1.5vh] max-[576px]:px-[1vw]"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Cinzel Decorative", serif',
      }}
    >
      <div
        className="flex justify-center items-center w-full  mx-auto mb-[3vh]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* <img 
          src={spontext} 
          alt="Our Sponsors" 
          className="w-full max-w-[500px] h-auto object-contain" 
        /> */}
        {/* <h2 className="text-[#222222] text-3xl sm:text-5xl md:text-8xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
          <span className="inline-block">Sponsors</span>
        </h2> */}

        <div>
          <SectionTitle
            title="Sponsors"
            strokeColor="rgba(255,0,0,0.8)"
            lineColor="rgba(255,0,0,0.8)"
            lineHeight="h-[3px]"
            className="merriweather"
          />
        </div>
      </div>

      {/* <div className="mt-8 md:mt-16 flex flex-col gap-[3vh] justify-center items-center max-w-[1400px] mx-auto max-[992px]:gap-[2.5vh] max-[768px]:gap-[2vh] max-[576px]:gap-[1.5vh]">
        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className="flex justify-center items-center w-full max-w-[1200px] transition-[transform,filter] duration-300 ease-[ease] hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(193,28,28,0.2)] max-[992px]:max-w-[1000px] max-[768px]:max-w-[800px] max-[576px]:max-w-[600px]"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              className="w-full max-w-full h-auto object-contain opacity-90 transition-opacity duration-300 ease-[ease] hover:opacity-100"
            />
          </div>
        ))}
      </div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex mt-20 mb-25 justify-center"
        >
          <div className="relative group">
            {/* Animated border container */}
            <div className="absolute rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from 0deg, transparent, transparent 60%, #ef4444 75%, #f97316 85%, transparent 90%, transparent)`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>

            {/* Secondary glow layer */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 rounded-3xl blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Main card */}
            <div className=" relative bg-[#1a1a1a]/80 rounded-2xl px-16 py-12 md:px-24 md:py-16">
              {/* Inner content */}
              <div className="text-center space-y-6">
                {/* Decorative icons */}
                <motion.div
                  className="flex justify-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.span
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                  />
                </motion.div>

                {/* Coming Soon Text */}
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-white tracking-wide"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(239, 68, 68, 0)",
                      "0 0 30px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Coming Soon
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                  className="text-gray-400 text-sm md:text-base max-w-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Exciting partnerships on the way
                </motion.p>

                {/* Animated underline */}
                <motion.div
                  className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default SponsorsSection;
