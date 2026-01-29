import React from "react";
import track1 from "../../assets/track1.png" 
import track2 from "../../assets/track2.png"
import track3 from "../../assets/track3.png"
import track4 from "../../assets/track4.png"
import track5 from "../../assets/track5.png"
import SectionTitle from "../Common/SectionTitle";

const TracksSection = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
      <div className="max-w-6xl w-full px-6 text-center">
        <SectionTitle title="TRACKS" titleSize="text-3xl sm:text-4xl md:text-7xl"/>
        <p className="text-xl md:text-4xl">Select Your Domain</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:text-left max-w-4xl mx-auto">
          <Tracks
          img = {track1}
            heading="OPEN INNOVATION"
            detail="Solve problems that don't exist yet using unconventional methods"
          />

          <Tracks
          img = {track2}
            heading="WEB APP"
            detail="Build portals that bridge the gap between users and mainframe"
          />

          <Tracks
            img = {track3}
            heading="AI & ML"
            detail="Harness Machine Intelligence to predict and shape the future"
          />

          <Tracks
          img = {track4}
            heading="DESIGN & CREATIVITY"
            detail="Craft designs that defy logic and captivate every senses"
          />
          <div className="md:col-span-2">
          <Tracks
          img = {track5}
            heading="ANYTHING YOU WANT"
            detail="Wildcard Protocol. No rules applied. If you can dream it, you can build it. This track is for mad scientists and reality benders."
          />
          </div>
        </div>
      </div>
    </div>
  );
};

function Tracks({ heading, detail,img }) {
  return (
    <div className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
      <img src = {img} className="h-15 w-15 border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]"></img>
      <h3 className="text-red-500 font-bold tracking-wider mb-2">{heading}</h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-200">
        {detail}
      </p>
    </div>
  );
}

export default TracksSection;
