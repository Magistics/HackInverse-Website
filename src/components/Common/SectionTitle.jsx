import React from "react";

export default function SectionTitle({ 
    title, 
    strokeColor = "#FF0505", 
    strokeWidth = "2px",
    lineColor = "#FF0505",
    textColor = "#222222",
    className = "",
    isTopLine = false,
    lineHeight = "h-1"
}) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            {/* Top double lines */}
            {isTopLine && (<div className="w-full mb-3">
                <div className="h-1 mb-1.5" style={{ backgroundColor: lineColor }}></div>
                <div className="h-1" style={{ backgroundColor: lineColor }}></div>
            </div>)}

            {/* Title */}
            <h2
                className="text-5xl md:text-6xl font-bold text-stroke text-center px-4"
                style={{
                    WebkitTextStrokeColor: strokeColor,
                    WebkitTextStrokeWidth: strokeWidth,
                    color: textColor
                }}
            >
                {title}
            </h2>

            {/* Bottom double lines */}
            <div className="w-full">
                <div className={`mb-1.5 ${lineHeight}`} style={{ backgroundColor: lineColor }}></div>
                <div className={lineHeight} style={{ backgroundColor: lineColor }}></div>
            </div>
        </div>
    );
}