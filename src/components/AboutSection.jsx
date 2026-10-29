import React from "react";
import { FaLinkedinIn, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const socialLinks = [
    {
      label: "X (TWITTER)",
      href: "https://x.com/Magistics_main",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/company/magistics/",
      icon: FaLinkedinIn,
    },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/hackinverse",
      icon: FaInstagram,
    },
    {
      label: "DISCORD",
      href: "https://discord.gg/svTwnYX5XT",
      icon: FaDiscord,
    },
    {
      label: "WHATSAPP",
      href: "https://chat.whatsapp.com/IEFPkoRtlfPBtX2FGXZCHs",
      icon: FaWhatsapp,
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 bg-[#f6f4ee] text-[#111317] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Editorial Sub-Headline */}
        <div className="border-b border-[#e5e0d5] pb-6 mb-12 flex flex-wrap items-center justify-between gap-4 font-space-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#c9182b] font-bold">CHAPTER 03</span>
            <span className="text-[#888]">/</span>
            <span className="text-[#444] uppercase tracking-wider font-semibold">THE HACKINVERSE ORIGIN STORY</span>
          </div>
          <span className="text-[#777] text-[11px]">ARCHIVE FILE: HI-83-DOE</span>
        </div>

        {/* 2-Column Asymmetric Newspaper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Archival Evidence Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-white border border-[#e0dad0] shadow-sm">
              <img
                src="/aboutUs.png"
                alt="HackInverse Dimensional Anomaly"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover filter contrast-105"
              />
              <div className="pt-2 px-1 text-[10px] font-space-mono text-[#666] flex justify-between border-t border-[#eee] mt-2">
                <span>FIG 01. THE DIMENSIONAL SHADOW</span>
                <span>ORIGIN: HACKINVERSE ARCHIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy strictly from HackInverse.tech */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[#c9182b] font-space-mono text-[11px] uppercase tracking-widest font-bold">
                ORGANIZATIONAL PHILOSOPHY
              </span>
              <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111317] leading-tight">
                Where Creativity Meets Bold Collaboration
              </h3>
            </div>

            {/* Authentic Text from hackinverse.tech */}
            <p className="font-playfair text-base sm:text-lg text-[#333] leading-relaxed">
              <span className="drop-cap">H</span>ackInverse is the flagship hackDay by Magistics, built to bring together students, developers, designers, and innovators from all walks of life. It's a community-driven space where creativity meets collaboration.
            </p>

            <p className="font-playfair text-base sm:text-lg text-[#444] leading-relaxed">
              From brainstorming to building, HackInverse inspires participants to learn, connect, and grow while turning bold ideas into impactful innovations.
            </p>

            {/* Official Social Media Outpost */}
            <div className="pt-6 border-t border-[#e5e0d5]">
              <span className="font-space-mono text-[10px] text-[#777] uppercase tracking-widest block mb-4">
                OFFICIAL COMMUNITY & WIRE DISPATCHES
              </span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-[#ded8cb] hover:border-[#111317] text-[#222] text-xs font-space-mono transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#c9182b]" />
                      <span className="tracking-wider">{item.label}</span>
                      <ExternalLink className="w-3 h-3 text-[#999]" />
                    </a>
                  );
                })}
              </div>

              {/* Learn More Button to Magistics Linktree */}
              <div className="mt-6">
                <a
                  href="https://linktr.ee/Magistics_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111317] text-white hover:bg-[#c9182b] text-xs font-space-mono uppercase tracking-widest transition-colors"
                >
                  <span>EXPLORE MAGISTICS ECOSYSTEM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
