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

export default function Footer() {
  return (
    <footer className="text-white py-6 alata bg-linear-to-t from-[#480B0D] to-[#222222]">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
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
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
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
