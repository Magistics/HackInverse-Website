import React from "react";
import MainTitle from "./Common/MainTitle";
import GroupImage from "../assets/Group-133.svg"

export default function DetailsSection() {
    return (
        <>
            <div className="flex items-center md:items-start justify-center px-4 h-[50vh] md:h-screen relative overflow-hidden -mt-20 md:mt-10 mb-10">
                <div className="flex flex-col">
                    <div className="poppins w-full flex flex-wrap items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-xl lg:text-3xl xl:text-4xl md:mb-4 text-center">
                        <span className="text-white">Are you</span>
                        <span className="text-[#EA4335] font-bold">READY</span>
                        <span className="text-white">for the First</span>
                        <span className="text-[#656565]">Themed Hackathon</span>
                        <span className="text-white">of</span>
                        <span className="text-[#EA4335] font-bold">Kolkata</span>
                    </div>
                    <div>
                        <MainTitle />
                    </div>
                </div>
                <img src={GroupImage} alt="GroupImage" className="absolute left-0 right-0 w-full bottom-3 md:-bottom-30"/>
            </div> 
        </>
    );
}
