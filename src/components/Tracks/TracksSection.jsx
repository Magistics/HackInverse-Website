import React from "react";
import { Gamepad2, Code, Brain, Palette, Zap } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const TracksSection = () => {
  return (
    <div className=" min-h-screen w-full flex items-center justify-center text-white font-mono -mt-10 md:-mt-50">
      <div className="sm:mt-20 lg:mt-32 mb-32 max-w-6xl w-full px-6 text-center">
        <SectionTitle title="TRACKS" titleSize=" text-5xl  md:text-7xl"/>
        <p className="mt-2 md:mt-10  text-xl md:text-4xl">Select Your Domain</p>

        <div className="grid grid-cols-1 px-14 md:px-0 md:grid-cols-3 gap-4 mt-10 md:text-left max-w-4xl mx-auto">
          <Tracks
          icon = {Gamepad2}
            heading="Game Development"
            detail="Design immersive worlds and interactive experiences that push the boundaries of gameplay and creativity"
          />

          <Tracks
          icon = {Code}
            heading="WEB APP"
            detail="Build portals that bridge the gap between users and mainframe"
          />

          <Tracks
            icon = {Brain}
            heading="AI & ML"
            detail="Harness Machine Intelligence to predict and shape the future"
          />

          <Tracks
          icon = {Palette}
            heading="DESIGN & CREATIVITY"
            detail="Craft designs that defy logic and captivate every senses"
          />
          <div className="md:col-span-2">
          <Tracks
          icon = {Zap}
            heading="ANYTHING YOU WANT"
            detail="Wildcard Protocol. No rules applied. If you can dream it, you can build it. This track is for mad scientists and reality benders."
          />
          </div>
        </div>
      </div>
    </div>
  );
};

function Tracks({ heading, detail, icon: Icon }) {
  return (
    <div className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
      <Icon className="h-12 w-12 mb-3 text-red-500 shadow-[0_0_20px_rgba(255,0,0,0.2)]" strokeWidth={1.5} />
      <h3 className="text-red-500 font-bold tracking-wider my-2 uppercase">{heading}</h3>
      <p className="text-sm md:text-base leading-relaxed text-gray-200">
        {detail}
      </p>
    </div>
  );
}

export default TracksSection;
