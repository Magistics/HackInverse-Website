import React from "react";
import calendarBg from "../assets/calendar.png";
import customFont from "../assets/fonts/Stranger-Things-Outlined.ttf";

const Calender = () => {
  const timeData = {
    days: "21",
    hours: "04",
    mins: "42"
  };

  return (
    <div className="w-full bg-[#222222] flex flex-col items-center py-6 px-2 sm:px-4 font-sans overflow-hidden">
      <style>
        {`
          /* 2. Define the Custom Font Face */
          @font-face {
            font-family: 'StrangerHeader';
            src: url(${customFont}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@700&display=swap');
          
          .arcade-text {
            font-family: 'Albert Sans', sans-serif;
            font-weight: 700; 
            color: #222222; 
            paint-order: stroke fill; 
            line-height: 1;
            -webkit-text-stroke: 2px #FFFFFF; 
          }
          @media (min-width: 768px) {
            .arcade-text {
              -webkit-text-stroke: 4.7px #FFFFFF;
            }
          }
        `}
      </style>
      <h2
        className="text-xl sm:text-4xl md:text-7xl text-center tracking-wider uppercase -mt-6 mb-3 px-2"
        style={{
          fontFamily: "'StrangerHeader', serif",
          WebkitTextStroke: "1px #FF0505",
          color: "transparent",
          textShadow: "0 0 10px rgba(255, 0, 0, 0.6)"
        }}
      >
        Mark Your Calender
      </h2>

      <div className="w-full max-w-4xl mb-12 md:mb-24 px-4">
        <div className="w-full h-[2px] bg-red-500 shadow-[0_0_8px_red]"></div>
        <div className="w-full h-[2px] bg-red-500 mt-1.5 shadow-[0_0_8px_red]"></div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">

        <img
          src={calendarBg}
          alt="Arcade Machines"
          className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]"
        />

        <div className="absolute inset-0 grid grid-cols-3 text-center">

          <div className="relative w-full h-full flex justify-center">
            <p className="absolute top-[30%] left-[48%] md:left-[47%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]">
              {timeData.days}
            </p>
          </div>

          {/* Machine 2: HOURS */}
          <div className="relative w-full h-full flex justify-center">
            <p className="absolute top-[30%] left-[38%] md:left-[36%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]">
              {timeData.hours}
            </p>
          </div>

          {/* Machine 3: MINS */}
          <div className="relative w-full h-full flex justify-center">
            <p className="absolute top-[30%] left-[31%] md:left-[27%] arcade-text text-[6vw] sm:text-[5vw] md:text-[3.5rem] lg:text-[5.7rem]">
              {timeData.mins}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calender;