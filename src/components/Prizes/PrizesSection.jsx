import React from "react";
import prize1 from "../../assets/1st.png";
import prize2 from "../../assets/2nd.png";
import prize3 from "../../assets/3rd.png";
import patternBg from "../../assets/BgPattern.png";

const PrizesSection = () => {
  const prizes = [
    { img: prize2, title: "2nd Prize", text: "coming soon" },
    { img: prize1, title: "1st Prize", text: "coming soon" },
    { img: prize3, title: "3rd Prize", text: "coming soon" },
  ];

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] px-2 text-center text-white font-cinzel-decorative"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "auto",
      }}
    >
      <h1 className="prizes-heading relative mb-6 inline-block text-[clamp(60px,8vw,150px)] font-medium leading-none text-[#1a1818] [text-shadow:0_0_4px_#c11c1c,0_0_10px_#c11c1c,0_0_20px_#c11c1c,0_0_30px_#c11c1c] [-webkit-text-stroke:3px_#c11c1c] lg:[-webkit-text-stroke:3px_#c11c1c] sm:[-webkit-text-stroke:2px_#c11c1c] xs:[-webkit-text-stroke:1px_#c11c1c]">
        PRIZES
        <span className="block mt-[1.2vw] h-1.5 w-[clamp(200px,45vw,450px)] rounded-[3px] bg-[#c11c1c]"></span>
        <span className="block mt-[0.8vw] h-1.5 w-[clamp(200px,45vw,450px)] rounded-[3px] bg-[#c11c1c]"></span>
      </h1>

      {/* PRIZE CARDS */}
      <div className="mt-[5vw] flex max-w-[95vw] flex-wrap items-center justify-center gap-[8vw] lg:gap-[6vw] md:gap-[5vw] sm:gap-[4vw] xs:gap-[3vw]">
        {prizes.map((p, index) => (
          <div
            className={`flex flex-col items-center justify-center text-center ${
              index === 0 ? "translate-x-[-2vw]" : ""
            } ${index === 2 ? "translate-x-[2vw]" : ""}`}
            key={index}
          >
            {/* Prize Image Wrapper */}
            <div
              className={`relative flex items-center justify-center rounded-full border-[3px] border-[#1a1a1a] bg-[rgba(0,0,0,0.3)] z-10 flex-shrink-0 overflow-hidden
                ${index === 1 ? "prize-card-first" : ""}
              `}
              style={{
                width:
                  index === 1
                    ? "clamp(220px, 25vw, 420px)"
                    : "clamp(180px, 20vw, 360px)",
                height:
                  index === 1
                    ? "clamp(220px, 25vw, 420px)"
                    : "clamp(180px, 20vw, 360px)",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover scale-[1.15]"
              />
            </div>

            <p className="mt-[2vw] text-[clamp(20px,1.9vw,30px)] text-[#b3b3b3] md:text-[clamp(14px,1.3vw,22px)] sm:text-[clamp(12px,1.2vw,18px)] xs:text-[clamp(10px,1vw,16px)]">
              {p.text}
            </p>
            <h3 className="mt-[0.7vw] font-inter text-[clamp(24px,3.5vw,63px)] font-bold text-white [text-shadow:0_0_8px_#c11c1c,0_0_20px_#c11c1c] md:text-[clamp(20px,3vw,40px)] sm:text-[clamp(18px,2.5vw,30px)] xs:text-[clamp(16px,2vw,24px)]">
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
