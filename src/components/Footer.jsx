import { MoveRight } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative w-full text-white py-6 alata overflow-hidden bg-linear-to-b from-[#040E3A] via-[#0A0B10] to-[#0B0B0B]">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = Math.random() * 3 + 2;
          const scale = Math.random() * 0.5 + 0.5;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;
          return (
            <motion.span
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${scale * 2}px`,
                height: `${scale * 2}px`,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0, 
                top: `${startY}%`, 
                left: `${startX}%` 
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [scale * 0.8, scale * 1.5, scale * 0.8],
                top: [`${startY}%`, `${endY}%`, `${startY}%`],
                left: [`${startX}%`, `${endX}%`, `${startX}%`],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-10 md:px-16">
        {/* Main footer content */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="md:-mt-10">
            <div className="text-2xl md:text-3xl font-extrabold  text-center md:text-left tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
              {" "}
              HACKINVERSE
            </div>
            <div className="text-white text-sm md:text-xl font-mono">
              An Offline Hackathon Experience In Kolkata,
              <br />
              Inspired By The Unknown, Built For The Future
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 font-mono md:text-xl text:sm mt-6">
            <div>
              <h3 className="underline">COORDINATES</h3>
              <ul>
                <li className="hover:text-red-500 cursor-pointer">About</li>
                <li className="hover:text-red-500 cursor-pointer">Sponsors</li>
                <li className="hover:text-red-500 cursor-pointer">Teams</li>
                <li className="hover:text-red-500 cursor-pointer">FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="underline">PROTOCOLS</h3>
              <ul>
                <li className="hover:text-red-500 cursor-pointer">Terms</li>
                <li className="hover:text-red-500 cursor-pointer">Rules</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Left side - Logo and text */}
          <div className="flex flex-col items-baseline mb-4 md:mb-0">
            <span className="text-white text-sm font-normal">
              Developed by MAGISTICS
            </span>
          </div>

          {/* Right side - Social links */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-white text-sm mb-3">
              Follow us to stay updated!
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 mb-6 md:mb-8"
            >
              {[
                { icon: Facebook, href: "#" },
                {
                  icon: () => (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 sm:w-5 sm:h-5 fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/showcase/hackinverse",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/hackinverse",
                },
                { icon: BsDiscord, href: "https://discord.gg/QrpFxmAA" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-3 h-3 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
            {/* <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1DBsk7vayo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/showcase/hackinverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/hackinverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://discord.gg/QrpFxmAA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaDiscord />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-gray-600 mb-3"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <div className="mb-2 md:mb-0">
            <p>© HackInverse. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              Explore Magistics
            </a>
            <MoveRight />
          </div>
        </div>
      </div>
    </footer>
  );
}
