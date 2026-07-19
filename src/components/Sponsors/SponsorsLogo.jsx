import React from "react";

const SponsorsLogo = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  style = {},
  imgStyle = {},
}) => {
  return (
    <div
      className={`bg-white p-3 rounded flex items-center justify-center
                    hover:scale-110 transition-transform duration-300
                    shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className={`h-18 object-contain ${imgClassName}`}
        style={imgStyle}
      />
    </div>
  );
};

export default SponsorsLogo;
