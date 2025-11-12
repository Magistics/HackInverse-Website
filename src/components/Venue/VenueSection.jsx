import React from 'react';
import tvCornerImage from '../../assets/TvCorner.png';
import tvDisplayImage from '../../assets/TvDisplay.png';

const Venue = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-8 lg:p-16 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            #9E1C1E,
            #9D1B1D,
            #9C1B1D,
            #8E191B,
            #7E1A1C,
            #791B1C,
            #691C1D
          )`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-12 lg:gap-8 xl:gap-16">
        
        {/* Text Section */}
        <div className="flex flex-col gap-8 text-white text-center lg:text-left lg:w-1/2">
          {/* Header */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-[clamp(4rem,9vw,7rem)] font-extrabold tracking-[0.15em] uppercase leading-none [color:transparent] [-webkit-text-stroke:4px_#fff] font-cinzel-decorative md:[-webkit-text-stroke:2px_#fff]" style={{ fontFamily: 'StrangerThingsOutlined' }}>
              VENUE
            </h1>

            {/* Underlines */}
            <div className="relative w-[460px] h-1 bg-white mx-auto lg:mx-0">
              <div className="absolute bottom-[-10px] left-0 w-[460px] h-1 bg-white"></div>
            </div>
          </div>

          {/* Venue Info */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
              Vedic Village
            </h2>
            <address className="text-[clamp(1.35rem,3.3vw,1.8rem)] not-italic leading-relaxed opacity-95">
              Shikharpur P.O, Bagu, Sikharpur,<br />
              Kolkata, West Bengal 700135
            </address>
          </div>

          {/* Button */}
          <button className="bg-white text-black text-2xl md:text-xl font-semibold py-4 px-10 rounded-full shadow-lg self-center lg:self-start transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Get Directions
          </button>
        </div>

        {/* TV Section - moved further right */}
        <div className="relative flex items-center justify-center w-full max-w-[1300px] translate-x-16">
          <img
            src={tvCornerImage}
            alt="Retro TV frame"
            className="relative z-30 w-full h-auto object-contain pointer-events-none"
            style={{ aspectRatio: '20/20' }}
          />
          <img
            src={tvDisplayImage}
            alt="Venue image inside TV screen"
            className="absolute z-20 object-cover"
            style={{
              top: '20%',
              left: '4%',
              width: '92%',
              height: '58%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Venue;
