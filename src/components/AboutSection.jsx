import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import SectionTitle from "./Common/SectionTitle";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { BsDiscord } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section
      id="about"
      className=" relative flex justify-center items-center min-h-screen overflow-hidden"
    >
      {/* Monster Image - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2">
        <img
          src="/aboutUs.png"
          alt="HackInverse Monster"
          className="w-full h-full object-cover opacity-30 md:opacity-100"
        />
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#222222] to-transparent" />
      </div>

      {/* Content - Right Side */}
      <div className=" md:absolute md:right-[10%] w-full md:w-[55%] lg:w-[50%] text-center md:text-right">
        <div className=" flex flex-col md:items-end ">
          {/* About Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-2"
          >
            ABOUT
          </motion.h2>

          {/* HackInverse Title */}

          <SectionTitle
            title="HACKINVERSE"
            lineHeight="h-[3px]"
            titleSize="text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
          />
        </div>

        {/* Description Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 mx-10 sm:mx-0 md:mb-6"
        >
          HackInverse is the flagship hackathon by Magistics, built to bring
          together students, developers, designers, and innovators from all
          walks of life. It's a community-driven space where creativity meets
          collaboration
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 mx-10 sm:mx-0 md:mb-8"
        >
          From brainstorming to building, HackInverse inspires participants to
          learn, connect, and grow while turning bold ideas into impactful
          innovations.
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 mb-6 md:mb-8"
        >
          {[
            
            {
              icon: () => (
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
              href: "https://x.com/Magistics_main",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/magistics/",
            },
            { icon: Instagram, href: "https://www.instagram.com/hackinverse" },
            { icon: BsDiscord, href: "https://discord.gg/QrpFxmAA" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-white hover:text-red-500 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <motion.a
            href="https://linktr.ee/Magistics_official"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

function Link(props) {
  return (
    <a
      href={props.ahref}
      target="blank"
      className="bg-gray-700 hover:bg-red-500 p-2 rounded-md transition hover:scale-110 
      hover:shadow-[0_0_30px_#ff0000dd]"
    >
      {props.value}
    </a>
  );
}

export default AboutSection;
