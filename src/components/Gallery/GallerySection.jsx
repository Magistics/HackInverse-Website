import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
    { id: 1, img: frame1, initialLeft: 50, initialTop: 15, initialRotate: -5, animation: "fade-down" }, // Top
    { id: 2, img: frame2, initialLeft: 75, initialTop: 30, initialRotate: 8, animation: "fade-left" }, // Top-right
    { id: 3, img: frame3, initialLeft: 75, initialTop: 70, initialRotate: -3, animation: "fade-left" }, // Bottom-right
    { id: 4, img: frame4, initialLeft: 50, initialTop: 50, initialRotate: 0, isCenter: true, animation: "zoom-in" }, // Center frame (back layer)
    { id: 5, img: frame5, initialLeft: 25, initialTop: 70, initialRotate: 10, animation: "fade-right" }, // Bottom-left
    { id: 6, img: frame6, initialLeft: 25, initialTop: 30, initialRotate: -8, animation: "fade-right" }, // Top-left
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

  // Prevent default touch behaviors when dragging
  useEffect(() => {
    const preventTouchStart = (e) => {
      // Check if the touch started on a draggable frame
      const target = e.target.closest('[data-draggable="true"]');
      if (target) {
        e.preventDefault();
      }
    };

    const preventTouchMove = (e) => {
      // Prevent scrolling when any frame is being dragged
      if (Object.keys(dragState.current).length > 0) {
        e.preventDefault();
      }
    };

    // Add passive: false to allow preventDefault
    document.addEventListener('touchstart', preventTouchStart, { passive: false });
    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', preventTouchStart);
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, []);

  const handleStart = (e, id) => {
    e.preventDefault();

    const clientX = e.type === "mousedown" ? e.clientX : e.touches?.[0]?.clientX;
    const clientY = e.type === "mousedown" ? e.clientY : e.touches?.[0]?.clientY;

    if (clientX === undefined || clientY === undefined) {
      console.log('Invalid touch coordinates:', { clientX, clientY, touches: e.touches });
      return;
    }

    console.log(`Starting drag for frame ${id}:`, { clientX, clientY, initialLeft: positions[id].left, initialTop: positions[id].top });

    dragState.current[id] = {
      startX: clientX,
      startY: clientY,
      initialLeft: positions[id].left,
      initialTop: positions[id].top,
    };

    // Disable transitions during drag to prevent conflicts
    e.currentTarget.style.transition = 'none';
  };

  const handleMove = (e, id) => {
    if (!dragState.current[id]) return;

    e.preventDefault();

    const clientX = e.type === "mousemove" ? e.clientX : e.touches?.[0]?.clientX;
    const clientY = e.type === "mousemove" ? e.clientY : e.touches?.[0]?.clientY;

    if (clientX === undefined || clientY === undefined) return;

    const deltaX = clientX - dragState.current[id].startX;
    const deltaY = clientY - dragState.current[id].startY;

    // Increase movement sensitivity for better mobile experience
    const moveFactor = 0.1; // Increased from 0.05 for better responsiveness

    // Calculate new positions
    let newLeft = dragState.current[id].initialLeft + deltaX * moveFactor;
    let newTop = dragState.current[id].initialTop + deltaY * moveFactor;

    // Constrain movement within reasonable bounds (prevent frames from going too far)
    // Container is roughly 1000px tall, frames are ~200-300px wide/tall
    const constrainedLeft = Math.max(-10, Math.min(110, newLeft));
    const constrainedTop = Math.max(-10, Math.min(110, newTop));

    console.log(`Moving frame ${id}:`, {
      deltaX, deltaY,
      newLeft, newTop,
      constrainedLeft, constrainedTop,
      wasConstrained: constrainedLeft !== newLeft || constrainedTop !== newTop
    });

    setPositions((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        left: constrainedLeft,
        top: constrainedTop,
      },
    }));
  };

  const handleEnd = (id) => {
    console.log(`Ending drag for frame ${id}`);
    delete dragState.current[id];
  };

  // Function to restore transitions
  const restoreTransitions = (element) => {
    element.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
          <motion.div
            key={frame.id}
            data-draggable="true"
            className="absolute w-[clamp(220px,20vw,300px)] h-[clamp(270px,25vw,360px)] cursor-grab select-none origin-center max-[992px]:w-[clamp(180px,22vw,300px)] max-[992px]:h-[clamp(230px,27vw,370px)] max-[768px]:w-[clamp(154px,14vw,210px)] max-[768px]:h-[clamp(189px,17.5vw,252px)] max-[576px]:w-[clamp(91px,12.6vw,140px)] max-[576px]:h-[clamp(112px,15.75vw,182px)]"
            style={{
              left: `${positions[frame.id].left}%`,
              top: `${positions[frame.id].top}%`,
              zIndex: frame.isCenter ? 1 : 3,
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              touchAction: 'none',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: frame.isCenter ? 0 : index * 0.1,
              ease: "easeOut"
            }}
            animate={{
              rotate: positions[frame.id].rotate,
              x: "-50%",
              y: "-50%"
            }}
            onMouseDown={(e) => handleStart(e, frame.id)}
            onMouseMove={(e) => handleMove(e, frame.id)}
            onMouseUp={(e) => {
              handleEnd(frame.id);
              restoreTransitions(e.currentTarget);
            }}
            onTouchStart={(e) => handleStart(e, frame.id)}
            onTouchMove={(e) => handleMove(e, frame.id)}
            onTouchEnd={(e) => {
              handleEnd(frame.id);
              restoreTransitions(e.currentTarget);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 12px 25px rgba(0, 0, 0, 0.6))';
            }}
            onMouseLeave={(e) => {
              handleEnd(frame.id);
              if (!dragState.current[frame.id]) {
                e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
              }
            }}
            onTouchStartCapture={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7))';
              e.currentTarget.style.zIndex = '10';
            }}
            onTouchEndCapture={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))';
              e.currentTarget.style.zIndex = frame.isCenter ? '1' : '3';
              restoreTransitions(e.currentTarget);
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
              restoreTransitions(e.currentTarget);
            }}
          >
            <img
              src={frame.img}
              alt={`Frame ${frame.id}`}
              className="w-full h-full object-contain block pointer-events-none"
              draggable="false"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;


