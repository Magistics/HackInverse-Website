import React from "react";
import ElevatorImage from "../../assets/Elevator.png";

export default function ElevatorAnimation() {
  return (
    <div className="relative flex h-screen w-full items-start justify-center overflow-hidden bg-[#9E1C1E] pt-[10vh]">
      {/* Elevator Image */}
      <img
        src={ElevatorImage}
        alt="Elevator with person"
        className="w-[50vw] md:w-[45vw] lg:w-[40vw] object-contain"
      />
    </div>
  );
}
