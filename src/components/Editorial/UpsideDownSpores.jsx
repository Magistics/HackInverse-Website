import React, { useEffect, useRef } from "react";

export default function UpsideDownSpores() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate 35 subtle ambient dust motes / spores
    const sporeCount = 35;
    const spores = Array.from({ length: sporeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.15, // Drifting upwards like the Upside Down
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      hue: Math.random() > 0.4 ? "229, 9, 20" : "255, 120, 40", // Crimson & Amber
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < spores.length; i++) {
        const spore = spores[i];

        spore.x += spore.vx;
        spore.y += spore.vy;
        spore.alpha += Math.sin(Date.now() * spore.pulseSpeed) * 0.005;

        // Wrap around boundaries
        if (spore.y < -10) {
          spore.y = height + 10;
          spore.x = Math.random() * width;
        }
        if (spore.x < -10) spore.x = width + 10;
        if (spore.x > width + 10) spore.x = -10;

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, spore.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${spore.hue}, ${Math.max(0.1, Math.min(0.65, spore.alpha))})`;
        ctx.shadowBlur = spore.radius * 4;
        ctx.shadowColor = `rgba(${spore.hue}, 0.8)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-70 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
