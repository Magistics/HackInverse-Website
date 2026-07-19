import React from "react";

const SponsorsLogo = ({
  src,
  alt,
  href,
  className = "",
  imgClassName = "",
  style = {},
  imgStyle = {},
}) => {
  const logo = (
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

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {logo}
    </a>
  ) : (
    logo
  );
};

export default SponsorsLogo;
