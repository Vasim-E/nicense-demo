"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

interface HeroImageProps {
  bgImageSrc?: string;
  imageSrc: string;
}

export default function HeroImage({ bgImageSrc, imageSrc }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate cursor position percentage for dynamic lighting
    const xPct = ((e.clientX - left) / width) * 100;
    const yPct = ((e.clientY - top) / height) * 100;
    setLightPos({ x: xPct, y: yPct });
    
    // Calculate rotation based on cursor position relative to the center
    const x = (e.clientX - left - width / 2) / 30; 
    const y = (e.clientY - top - height / 2) / 30;
    
    // Apply 3D rotation with a slightly stronger cinematic scale
    setTransform(`perspective(1200px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.08, 1.08, 1.08)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg lg:max-w-2xl h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center z-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {/* Cinematic Spotlight Backdrop */}
      <div 
        className="absolute inset-0 m-auto w-[120%] h-[120%] rounded-full opacity-60 mix-blend-overlay pointer-events-none transition-all duration-300"
        style={{ 
          background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          transform: "translateZ(-50px)"
        }}
      />

      {/* Deep Shadow Plate for contrast */}
      <div 
        className="absolute bottom-10 w-[60%] h-12 bg-black/40 blur-[30px] rounded-[100%]"
        style={{ transform: "translateZ(-20px) translateY(150px)" }}
      />

      {/* Background Image (Base) - with depth blur */}
      {bgImageSrc && (
        <div 
          className="absolute inset-0 m-auto w-[95%] h-[95%] transition-transform duration-[600ms] ease-out pointer-events-none"
          style={{ transform: "translateZ(20px)" }} 
        >
          <div className="relative w-full h-full animate-float blur-[2px] opacity-90 mix-blend-multiply">
            <Image
              src={bgImageSrc}
              alt="Product Background"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 50vw"
              priority
            />
          </div>
        </div>
      )}
      
      {/* Foreground Image (Stacked Above) - Sharp & High Contrast */}
      <div 
        className="absolute inset-0 m-auto w-[85%] h-[85%] transition-transform duration-[600ms] ease-out pointer-events-none"
        style={{ transform: "translateZ(120px)" }} 
      >
        {/* Dynamic Edge Lighting (Rim Light) overlaying the image */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 mix-blend-screen transition-all duration-300 z-20 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.9) 0%, transparent 40%)` 
          }}
        />
        
        <div className="relative w-full h-full animate-float-delayed">
          <Image
            src={imageSrc}
            alt="Product Foreground"
            fill
            className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] contrast-[1.1] saturate-[1.1]"
            sizes="(max-width: 1024px) 90vw, 60vw"
            priority
          />
        </div>
      </div>

      {/* Cinematic Lens Flare / Light Leak (Moves slightly faster than the mouse) */}
      <div 
        className="absolute inset-0 m-auto w-[150%] h-[150%] rounded-full opacity-40 mix-blend-screen blur-[60px] transition-all duration-200 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at ${100 - lightPos.x}% ${100 - lightPos.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(218, 170, 65, 0.1) 30%, transparent 60%)`,
          transform: "translateZ(150px)"
        }}
      />
    </div>
  );
}
