import React from "react";

export default function SectionTitle({
  title,
  strokeColor = "#FF0505",
  strokeWidth = "1.5px",
  lineColor = "#FF0505",
  className = "",
  isTopLine = false,
}) {
  // Split title into first, middle, and last characters
  const firstChar = title.charAt(0);
  const middleChars = title.slice(1, -1);
  const lastChar = title.charAt(title.length - 1);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top double lines */}
      {isTopLine && (
        <div className="w-full mb-3">
          <div
            className="h-1 mb-1.5"
            style={{ 
                backgroundColor: lineColor 
            }}
          ></div>
          <div className="h-1" style={{ backgroundColor: lineColor }}></div>
        </div>
      )}

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-7xl uppercase mb-3 px-2 stranger-things-filled flex items-center tracking-tighter drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        style={{
          color: strokeColor,
        }}
      >
        <span className="text-[1.5em] mt-3 md:mt-5">{firstChar}</span>
        <span className="inline-block relative">
          {middleChars}
          <span className="absolute -bottom-0.5 md:-bottom-2 left-0 right-0 h-0.5" style={{ backgroundColor: strokeColor }}></span>
          <span className="absolute -bottom-2 md:-bottom-3.5 left-0 right-0 h-0.5" style={{ backgroundColor: strokeColor }}></span>
        </span>
        <span className="text-[1.5em] mt-3 md:mt-5">{lastChar}</span>
      </h2>

      {/* Bottom double lines
      <div className="w-full">
        <div className="w-full h-0.5 bg-red-500"></div>
        <div className="w-full h-0.5 bg-red-500 mt-1.5"></div>
      </div> */}
    </div>
  );
}
