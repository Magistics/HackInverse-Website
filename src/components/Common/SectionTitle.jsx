import React from "react";

export default function SectionTitle({
  title,
  strokeColor = "#FF0505",
  strokeWidth = "1.5px",
  lineColor = "rgba(255, 0, 0)",
  className = "",
  isTopLine = false,
}) {
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
        className="text-xl sm:text-4xl md:text-7xl text-center tracking-wider uppercase mb-3 px-2"
        style={{
          fontFamily: "'StrangerHeader', serif",
          WebkitTextStroke: "1px #FF0505",
          color: "transparent",
          textShadow: "0 0 20px rgba(255, 0, 0)"
        }}
      >
        {title}
      </h2>

      {/* Bottom double lines */}
      <div className="w-full">
        <div className="w-full h-px bg-red-500 shadow-[0_0_8px_red]"></div>
        <div className="w-full h-px bg-red-500 mt-1.5 shadow-[0_0_8px_red]"></div>
      </div>
    </div>
  );
}
