import React from "react";
import ElevatorImage from "../../assets/Elevator.png";

export default function ElevatorAnimation() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#9E1C1E] py-[5vh] max-[768px]:py-[3vh] max-[576px]:py-[2vh]">
      {/* Elevator Image */}
      <img
        src={ElevatorImage}
        alt="Elevator with person"
        className="w-[80vw] h-auto object-contain max-[992px]:w-[85vw] max-[768px]:w-[90vw] max-[576px]:w-[95vw] min-[993px]:w-[50vw] min-[1200px]:w-[45vw] min-[1400px]:w-[40vw]"
      />
    </div>
  );
}
