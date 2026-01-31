import React from "react";

export default function MainTitle() {
  return (
    <>
      <div className="">
        <div className="h-2 md:h-4 flex flex-col gap-1 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
          <div className="h-0.5 md:h-1.5 background-red"></div>
          <div className="h-0.5 md:h-1 background-red md:mt-1.5"></div>
        </div>

        {/* Title text */}
        <div className="relative">
          <h1 className="font-bold text-4xl md:text-7xl xl:text-[8rem] tracking-wider text-transparent bg-clip-text background-red relative stranger-things-filled uppercase filter-[drop-shadow(0_5px_5px_rgba(0,0,0,1))_drop-shadow(0_0_25px_rgba(255,0,0,0.8))]">
            HACKINVERSE
          </h1>
        </div>

        {/* Bottom border */}
        <div className="h-2 md:h-4 flex flex-col gap-1 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
          <div className="h-0.5 md:h-1 background-red md:mb-1.5"></div>
          <div className="h-0.5 md:h-1.5 background-red"></div>
        </div>
      </div>
    </>
  );
}
