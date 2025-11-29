import React from "react";

export default function SectionTitle({
  title,
  strokeColor = "#b91c1c",
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
        className=" mb-3 text-transparent text-5xl md:text-6xl font-bold text-stroke text-center px-4
                 [text-shadow:
                 1px_1px_0_red,
                 -1px_-1px_0_red,
                 1px_-1px_0_red,
                 -1px_1px_0_red]
                  drop-shadow-[0_0_8px_#b91c1c] 
                  "
        style={{
          WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
        }}
      >
        {title}
      </h2>

      {/* Bottom double lines */}
      <div className="w-full">
        
        <div
          className={`h-px mb-1 w-full bg-[#b91c1c]`}
          style={{
            boxShadow: `
              0 0 8px rgba(185, 28, 28, 0.8),
              0 0 16px rgba(185, 28, 28, 0.5)
            `,
          }}
        />
        
        <div
          className="h-px w-full bg-[#b91c1c]"
          style={{
            boxShadow: `
              0 0 5px rgba(185, 28, 28, 0.8),
              0 0 16px rgba(185, 28, 28, 0.5)
            `,
          }}
        />
      </div>
    </div>
  );
}
