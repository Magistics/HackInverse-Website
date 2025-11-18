import { MoveRight } from "lucide-react";
import ScrollReveal from "./Common/ScrollReveal";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-white py-6 alata bg-linear-to-t from-[#480B0D] to-[#222222]">
            <div className="container mx-auto px-4">
                <ScrollReveal>
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
                            <div className="flex space-x-3">
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
                            </div>
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
                                href="https://gdg.community.dev/events/details/google-gdg-kolkata-presents-devfest-kolkata-2024/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-2"
                            >
                                Explore Magistics
                            </a>
                            <MoveRight />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}
