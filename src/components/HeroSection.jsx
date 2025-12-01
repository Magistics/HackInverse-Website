import React from "react";
import MainTitle from "./Common/MainTitle";
import "../../src/index.css"

export default function HeroSection() {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="relative h-[50vh] md:h-[120vh] w-full flex justify-center"
          style={{
            background: "linear-gradient(#111220, #282A57 50%, #162D3D)",
          }}
        >
          {/* Mountains */}
          <img
            className="absolute -bottom-10 w-full z-30"
            src="/parallax/mountain3.svg"
          />
          <img
            className="absolute -bottom-5 w-full z-20"
            src="/parallax/mountain-2.svg"
          />
          <img
            className="absolute bottom-0 w-full z-10"
            src="/parallax/mountain-1.svg"
          />

          <img
            className="absolute left-0 top-30 md:top-0 w-[30%] md:w-[13%]"
            src="/parallax/clouds-left.svg"
          />
          <img
            className="absolute right-0 top-30 md:top-0 w-[30%] md:w-[13%]"
            src="/parallax/clouds-right.svg"
          />
          <img
            className="absolute bottom-0 w-full"
            src="/parallax/cloud-bottom.svg"
          />

          {/* Stars */}
          <img
            className="absolute top-0 left-0 w-full"
            src="/parallax/stars.svg"
          />

          <div className="mt-[15%]">
            {/* Title Block */}
            <div className="relative z-30">
              <MainTitle />
            </div>

            <div className="mt-7 m-auto z-30 relative flex justify-center">
              {/* decorative glow - absolutely positioned so it doesn't affect layout */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute rounded-full bg-red-500 blur-[18px] w-fit h-fit"
                style={{ padding: "24px" }}
              />

              {/* actual interactive button — inline-flex so width matches content */}
              <button
                className="border-white/30 albert-sans cursor-pointer text-white shadow-red-500/80  relative inline-flex items-center px-6 md:px-8 py-2 md:py-3 rounded-full bg-slate-900/80 border border-slate-700/50 shadow-[0_0_30px_rgba(220,38,38,0.22)] text-sm md:text-base whitespace-nowrap"
                type="button"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
