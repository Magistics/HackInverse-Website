import React, { useState, useRef } from "react";
import "./GallerySection.css";
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
    <section className="gallery-section" style={{ "--bg": `url(${Bg})` }}>
      <div
        className="gallery-layer2"
        style={{ backgroundImage: `url(${layer2back})` }}
      />

      <div className="frames-container">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className={`polaroid-frame ${frame.isCenter ? 'center-frame' : ''}`}
            style={{
              left: `${positions[frame.id].left}%`,
              top: `${positions[frame.id].top}%`,
              transform: `translate(-50%, -50%) rotate(${positions[frame.id].rotate}deg)`,
              zIndex: frame.isCenter ? 1 : 3,
            }}
            onMouseDown={(e) => handleStart(e, frame.id)}
            onMouseMove={(e) => handleMove(e, frame.id)}
            onMouseUp={() => handleEnd(frame.id)}
            onMouseLeave={() => handleEnd(frame.id)}
            onTouchStart={(e) => handleStart(e, frame.id)}
            onTouchMove={(e) => handleMove(e, frame.id)}
            onTouchEnd={() => handleEnd(frame.id)}
          >
            <img
              src={frame.img}
              alt={`Frame ${frame.id}`}
              className="frame-img"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
