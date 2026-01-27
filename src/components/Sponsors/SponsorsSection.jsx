import React from "react";
import SponsorsCategory from "./SponsorsCategory";
import { sponsorsData } from "./SponsorsData";
const SponsorsSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6 text-white">
      <h1 className="text-6xl md:text-7xl font-bold tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
        SPONSORS
      </h1>
      <div className="w-full max-w-5xl space-y-14 text-center md:mt-10 mt-6">
        <SponsorsCategory
          title="PERKS SPONSOR"
          sponsors={sponsorsData.perks}
          columns={1}
        />
        <div className="h-0.5 w-full bg-red-500"></div>
        <SponsorsCategory
          title="TITLE SPONSOR"
          sponsors={sponsorsData.title}
          columns={1}
        />

        <div className="h-0.5 w-full bg-red-500"></div>

        <SponsorsCategory
          title="GOLD SPONSOR"
          sponsors={sponsorsData.gold}
          columns={3}
        />
        <div className="h-0.5 w-full bg-red-500"></div>

        <SponsorsCategory
          title="SILVER SPONSOR"
          sponsors={sponsorsData.silver}
          columns={3}
        />

        <div className="h-0.5 w-full bg-red-500"></div>

        <a
          href="#"
          className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)] transition hover:scale-110 
      hover:shadow-[0_0_30px_#ff0000dd] font-mono font-bold"
        >
          BECOME A SPONSOR →
        </a>

        {/* Title Sponsor */}
        {/* <SponsorsCategory
          title="TITLE SPONSOR"
          columns={1}
          logos={[
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
          ]}
        /> */}

        {/* <SponsorsCategory
          title="GOLD SPONSOR"
          columns={3}
          logos={[
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
          ]}
        />

        
        <SponsorsCategory
          title="SILVER SPONSOR"
          columns={3}
          logos={[
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
            { src: "/CodeCrafters.io full logo (Dark text).png", alt: "codecrafters" },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default SponsorsSection;

// import React from 'react'

// const SponsorsSection = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
//       <div className="max-w-6xl w-full px-6 text-center">
//         <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
//           SPONSORS
//         </h1>
//         <Sponsors heading = "TITLE SPONSOR"/>
//       </div>
//     </div>
//   )
// }

// function Sponsors({heading, logo}) {
//   return(
//     <div>
//     <div className='text-xl md:text-4xl font-bold text-white'>{heading}</div>
//     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto'>
//       {logo}
//     </div>
//     </div>
//   )
// }

// export default SponsorsSection
