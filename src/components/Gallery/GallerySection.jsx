import React, { useState, useRef } from "react";
import Bg from "../../assets/Bg.png";
import layer2back from "../../assets/image/layer2back.png";
import frame1 from "../../assets/image/frame1.png";
import frame2 from "../../assets/image/frame2.png";
import frame3 from "../../assets/image/frame3.png";
import frame4 from "../../assets/image/frame4.png";
import frame5 from "../../assets/image/frame5.png";
import frame6 from "../../assets/image/frame6.png";

const GallerySection = () => {
  // Circular layout: frame4 in center (behind), 5 frames circling around
  const frames = [
    { id: 1, img: frame1, initialLeft: 50, initialTop: 15, initialRotate: -5 }, // Top
    { id: 2, img: frame2, initialLeft: 75, initialTop: 30, initialRotate: 8 }, // Top-right
    { id: 3, img: frame3, initialLeft: 75, initialTop: 70, initialRotate: -3 }, // Bottom-right
    { id: 4, img: frame4, initialLeft: 50, initialTop: 50, initialRotate: 0, isCenter: true }, // Center frame (back layer)
    { id: 5, img: frame5, initialLeft: 25, initialTop: 70, initialRotate: 10 }, // Bottom-left
    { id: 6, img: frame6, initialLeft: 25, initialTop: 30, initialRotate: -8 }, // Top-left
  ];

  const [positions, setPositions] = useState(
    frames.reduce((acc, frame) => {
      acc[frame.id] = {
        left: frame.initialLeft,
        top: frame.initialTop,
        rotate: frame.initialRotate,
      };
      return acc;
    }, {})
  );

  const dragState = useRef({});

  const handleStart = (e, id) => {
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;

    dragState.current[id] = {
      startX: clientX,
      startY: clientY,
      initialLeft: positions[id].left,
      initialTop: positions[id].top,
    };
  };

  const handleMove = (e, id) => {
    if (!dragState.current[id]) return;

    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;

    const deltaX = clientX - dragState.current[id].startX;
    const deltaY = clientY - dragState.current[id].startY;

    setPositions((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        left: dragState.current[id].initialLeft + deltaX * 0.05,
        top: dragState.current[id].initialTop + deltaY * 0.05,
      },
    }));
  };

  const handleEnd = (id) => {
    delete dragState.current[id];
  };

  return (
    <section 
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-[2vw] py-[1vh] text-center text-black overflow-hidden box-border max-[992px]:min-h-[90vh] max-[992px]:py-[1.5vh] max-[768px]:min-h-[80vh] max-[768px]:py-[1vh] max-[576px]:min-h-[70vh] max-[576px]:px-[1vw] max-[576px]:py-[0.5vh]"
      style={{ 
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Cinzel Decorative", serif'
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(800px,90vw,1500px)] h-[clamp(800px,90vw,1500px)] opacity-100 pointer-events-none z-[1] max-[992px]:w-[clamp(400px,55vw,700px)] max-[992px]:h-[clamp(400px,55vw,700px)] max-[768px]:w-[clamp(350px,70vw,600px)] max-[768px]:h-[clamp(350px,70vw,600px)] max-[576px]:w-[clamp(300px,80vw,500px)] max-[576px]:h-[clamp(300px,80vw,500px)]"
        style={{ 
          backgroundImage: `url(${layer2back})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative w-full max-w-[1406px] h-[1000px] mt-[5vw] z-[2] max-[992px]:h-[500px] max-[992px]:mt-[4vw] max-[768px]:h-[400px] max-[768px]:mt-[2.5vw] max-[576px]:h-[300px] max-[576px]:mt-[1.5vw]">
        {frames.map((frame, index) => (
          <div
            key={frame.id}
            className="absolute w-[clamp(220px,20vw,300px)] h-[clamp(270px,25vw,360px)] cursor-grab select-none origin-center max-[992px]:w-[clamp(180px,22vw,300px)] max-[992px]:h-[clamp(230px,27vw,370px)] max-[768px]:w-[clamp(154px,14vw,210px)] max-[768px]:h-[clamp(189px,17.5vw,252px)] max-[576px]:w-[clamp(91px,12.6vw,140px)] max-[576px]:h-[clamp(112px,15.75vw,182px)]"
            style={{
              left: `${positions[frame.id].left}%`,
              top: `${positions[frame.id].top}%`,
              transform: `translate(-50%, -50%) rotate(${positions[frame.id].rotate}deg)`,
              zIndex: frame.isCenter ? 1 : 3,
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
              transition: 'transform 0.1s ease, filter 0.3s ease',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              touchAction: 'none'
            }}
            data-aos={frame.isCenter ? "zoom-in" : "fade-in"}
            data-aos-delay={frame.isCenter ? 0 : index * 100}
            data-aos-duration="800"
            onMouseDown={(e) => handleStart(e, frame.id)}
            onMouseMove={(e) => handleMove(e, frame.id)}
            onMouseUp={() => handleEnd(frame.id)}
            onMouseLeave={() => handleEnd(frame.id)}
            onTouchStart={(e) => handleStart(e, frame.id)}
            onTouchMove={(e) => handleMove(e, frame.id)}
            onTouchEnd={() => handleEnd(frame.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 12px 25px rgba(0, 0, 0, 0.6))';
            }}
            onMouseLeave={(e) => {
              if (!dragState.current[frame.id]) {
                e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
              }
            }}
            onMouseDownCapture={(e) => {
              e.currentTarget.style.cursor = 'grabbing';
              e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))';
              e.currentTarget.style.zIndex = '10';
            }}
            onMouseUpCapture={(e) => {
              e.currentTarget.style.cursor = 'grab';
              e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
              e.currentTarget.style.zIndex = frame.isCenter ? '1' : '3';
            }}
          >
            <img
              src={frame.img}
              alt={`Frame ${frame.id}`}
              className="w-full h-full object-contain block pointer-events-none"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;


