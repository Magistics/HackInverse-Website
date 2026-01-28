import React from "react";

const SponsorsLogo = ({ src, alt }) => {
  return (
    <div
      className="bg-white p-4 md:p-6 rounded-lg flex items-center justify-center
                    w-full max-w-[266px] h-[100px] md:h-[127px]
                    hover:scale-105 transition-all duration-300
                    shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
    >
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
};

export default SponsorsLogo;
