import React from "react";
import ScrollReveal from "../Common/ScrollReveal";

import prize1Inner from "../../assets/1st-inner.png";
import prize1Border from "../../assets/PrizeBorder.png";

import prize2Inner from "../../assets/2nd-inner.png";
import prize2Border from "../../assets/PrizeBorder.png";

import prize3Inner from "../../assets/3rd-inner.png";
import prize3Border from "../../assets/PrizeBorder.png";

import patternBg from "../../assets/BgPattern.png";

const PrizesSection = () => {
  const prizes = [
    {
      inner: prize2Inner,
      border: prize2Border,
      title: "2nd Prize",
      text: "coming soon",
    },
    {
      inner: prize1Inner,
      border: prize1Border,
      title: "1st Prize",
      text: "coming soon",
    },
    {
      inner: prize3Inner,
      border: prize3Border,
      title: "3rd Prize",
      text: "coming soon",
    },
  ];

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#222222] px-2 text-center text-white font-cinzel-decorative"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "auto",
      }}
    >
      {/* ===== HEADING ===== */}
      <ScrollReveal>
        <div>
          <h2 className="text-[#222222] text-3xl sm:text-5xl md:text-8xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
            <span className="inline-block">Prizes</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* ===== PRIZE CARDS ===== */}
      <div className="mt-[5vw] flex max-w-[95vw] flex-wrap items-center justify-center gap-[8vw] lg:gap-[6vw] md:gap-[5vw] sm:gap-[4vw] xs:gap-[3vw]">
        {prizes.map((p, index) => (
          <ScrollReveal key={index} delay={index * 0.2} width="auto">
            <div
              className={`
            flex flex-col items-center justify-center text-center
        
            /* MOBILE ORDER ONLY */
            ${index === 1 ? "order-1 md:order-none" : ""}
            ${index === 0 ? "order-2 md:order-none" : ""}
            ${index === 2 ? "order-3 md:order-none" : ""}
        
            /* DESKTOP TRANSLATIONS (unchanged) */
            lg:${index === 0 ? "translate-x-[-2vw]" : ""}
            lg:${index === 2 ? "translate-x-[2vw]" : ""}
          `}
            >
              {/* ===== BORDER + INNER IMAGE ===== */}
              <div
                className="relative flex items-center justify-center rounded-full z-10 flex-shrink-0 overflow-visible"
                style={{
                  width:
                    index === 1
                      ? "clamp(260px, 27vw, 460px)"
                      : "clamp(220px, 23vw, 400px)",
                  height:
                    index === 1
                      ? "clamp(260px, 27vw, 460px)"
                      : "clamp(220px, 23vw, 400px)",
                }}
              >
                <img
                  src={p.border}
                  className="absolute inset-0 h-full w-full object-contain z-[1]"
                  alt="prize-border"
                />
                <img
                  src={p.inner}
                  className="relative z-[3] object-contain"
                  alt="prize-inner"
                  style={{
                    width: index === 1 ? "70%" : "65%",
                    height: "70%",
                  }}
                />
              </div>

              <p className="mt-[2vw] text-[clamp(20px,1.9vw,30px)] text-[#b3b3b3]">
                {p.text}
              </p>

              <h3 className="mt-[0.7vw] font-inter text-[clamp(24px,3.5vw,63px)] font-bold text-white [text-shadow:0_0_8px_#c11c1c,0_0_20px_#c11c1c]">
                {p.title}
              </h3>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
