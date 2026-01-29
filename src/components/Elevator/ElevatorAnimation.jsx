import React from "react";
import ElevatorImage from "../../assets/Elevator.png";

export default function ElevatorAnimation() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#9E1C1E]"> 
      {/* Elevator Image */}
      <img
        src={ElevatorImage}
        alt="Elevator with person"
        className="w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] object-contain h-auto max-h-[90vh]"
      />
    </div>
  );
}