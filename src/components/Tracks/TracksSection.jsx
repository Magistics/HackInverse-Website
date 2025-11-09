import React from "react";
import topLeftTreeImage from "../../assets/bottomlefttree.png";
import topRightTreeImage from "../../assets/bottomrighttree.png";
import shadowsImage from "../../assets/shadows.png";

const TracksSection = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#9E1C1E] text-center font-['Cinzel_Decorative'] text-white">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1522px] h-[2px] bg-black"></div>
      <div
        className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-[52vh] pb-[10vh] z-10" 
        style={{
          backgroundImage: `url(${topLeftTreeImage}), url(${topRightTreeImage}), url(${shadowsImage})`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition: "left top, right top, center top",
          backgroundSize: "20% auto, 20% auto, 30% auto",
        }}
      >
        {/* Heading */}
        <h1 className="relative z-10 mb-[8vh] text-[clamp(3rem,8vw,7rem)] font-semibold uppercase tracking-[0.3vw] text-transparent [-webkit-text-stroke:3px_#f4e9e9]">
          TRACKS
          <span className="absolute bottom-[2vh] left-1/2 h-[3.7px] w-[29vw] -translate-x-1/2 rounded-md bg-[#f4e9e9]"></span>
          <span className="absolute bottom-[1.2vh] left-1/2 h-[3.7px] w-[29vw] -translate-x-1/2 rounded-md bg-[#f4e9e9]"></span>
        </h1>

        {/* Tracks Content */}
        <div className="relative z-10 flex w-full max-w-[1600px] flex-wrap justify-center gap-[4vw] px-4 md:flex-nowrap">
          
          <div className="flex min-h-[360px] flex-1 flex-col items-center justify-start p-2">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 1
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Artificial Intelligence
            </h3>
            <p className="text-[clamp(2rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Building models for prediction, classification, natural language
              processing, or computer vision.
            </p>
          </div>

          <div className="relative flex min-h-[360px] flex-1 flex-col items-center justify-start p-6 md:border-x-4 md:border-white">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 2
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Web Development
            </h3>
            <p className="text-[clamp(2rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Creating responsive, scalable, and interactive web applications.
            </p>
          </div>

          <div className="flex min-h-[360px] flex-1 flex-col items-center justify-start p-6">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,3rem)] font-bold uppercase">
              TRACK - 3
            </h2>
            <h3 className="mb-5 inline-block bg-transparent text-[clamp(1.7rem,2.7vw,2.7rem)] font-bold text-black font-['Roboto_Condensed']">
              Cybersecurity
            </h3>
            <p className="text-[clamp(2rem,2.2vw,2.3rem)] font-['Roboto_Condensed']">
              Protecting systems and networks through innovative security
              strategies and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;