"use client";

import { useState, useEffect } from "react";
import HeroImage from "./HeroImage";

const slides = [
  {
    id: 1,
    title1: "Real Fruit.",
    title2: "Crazy Crunch.",
    subheading1: "No Added Sugar.",
    subheading2: "Just Pure Snack Joy.",
    color: "#D41C5E",
    bgImageSrc: "/product-hero-2/product-2-bg.png",
    imageSrc: "/product-hero-2/product-dryfriuts-front.png",
  },
  {
    id: 2,
    title1: "Premium Quality.",
    title2: "Raw Hazelnuts.",
    subheading1: "Unroasted & Unsalted.",
    subheading2: "Healthy & Delicious.",
    color: "#daaa41",
    bgImageSrc: "/product-hero-1/product-1-bg.png",
    imageSrc: "/product-hero-1/product-drynuts-front.png",
  },
  {
    id: 3,
    title1: "Natural Sweetness.",
    title2: "Premium Dates.",
    subheading1: "Sourced from Saudi Arabia.",
    subheading2: "Soft, Chewy & Rich.",
    color: "#A1B932",
    bgImageSrc: "/product-hero-2/product-2-bg.png",
    imageSrc: "/product-hero-2/product-dryfriuts-front.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      triggerTransition((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, []);

  // Handle smooth transition by fading out, swapping content, then fading in
  const triggerTransition = (nextIndex: number | ((prev: number) => number)) => {
    setIsTransitioning(true);
    
    // Wait for fade out animation to finish (400ms) before swapping content
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      // Wait a tiny bit for React to render the new content, then fade in
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 400);
  };

  const setSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    triggerTransition(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-12 lg:gap-0 relative">
      
      {/* Background glow syncing with active slide color */}
      <div 
        className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -z-10 transition-colors duration-1000"
        style={{ backgroundColor: `${slide.color}20` }}
      />

      {/* Left Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl z-10 lg:-mt-10 relative">
        
        {/* Main Headline */}
        <h1 
          className={`text-6xl md:text-[5.5rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase transform transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 -translate-y-8 blur-sm scale-95' : 'opacity-100 translate-y-0 blur-none scale-100'}`}
        >
          <span className="block text-[#0a1128]">{slide.title1}</span>
          <span className="block mt-3 transition-colors duration-1000" style={{ color: slide.color }}>
            {slide.title2}
          </span>
        </h1>

        {/* Divider with Leaf */}
        <div className={`flex items-center w-full max-w-[280px] mb-8 gap-4 mx-auto lg:mx-0 transform transition-all duration-500 ease-out delay-75 ${isTransitioning ? 'opacity-0 scale-50 blur-sm' : 'opacity-100 scale-100 blur-none'}`}>
          <div className="h-[2px] bg-[#daaa41]/30 flex-grow transition-all duration-1000" style={{ backgroundColor: `${slide.color}40` }}></div>
          <svg className="w-5 h-5 transition-colors duration-1000 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24" style={{ color: slide.color }}>
            <path d="M17 3.322c-.443.08-1.554.407-2.658.917C12.565 5.064 10.61 6.556 9.4 8.35c-1.396 2.063-1.897 4.14-1.815 6.13l-.53.53a1 1 0 0 0 1.414 1.414l.53-.53c1.99.082 4.067-.419 6.13-1.815 1.794-1.21 3.286-3.165 4.11-4.94.51-1.106.838-2.217.918-2.66.088-.48.145-1.077-.107-1.328-.25-.252-.847-.195-1.328-.107z"/>
            <path d="M5.293 17.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414l-2-2z"/>
          </svg>
          <div className="h-[2px] bg-[#daaa41]/30 flex-grow transition-all duration-1000" style={{ backgroundColor: `${slide.color}40` }}></div>
        </div>

        {/* Subheading */}
        <p className={`text-xl md:text-[1.6rem] text-[#0a1128] font-medium mb-10 flex flex-col md:flex-row md:items-baseline gap-2 transform transition-all duration-500 ease-out delay-100 ${isTransitioning ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-none'}`}>
          <span>{slide.subheading1}</span> 
          <span className="italic font-serif opacity-90 text-2xl md:text-[1.8rem] transition-colors duration-1000" style={{ color: slide.color }}>
            {slide.subheading2}
          </span>
        </p>

        {/* Features Grid */}
        <div className={`grid grid-cols-4 gap-2 md:gap-5 mb-10 w-full transform transition-all duration-500 ease-out delay-150 ${isTransitioning ? 'opacity-0 translate-y-8 blur-sm scale-95' : 'opacity-100 translate-y-0 blur-none scale-100'}`}>
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] border-[#daaa41]/50 flex items-center justify-center mb-3 text-[#daaa41] bg-[#daaa41]/5 transition-all duration-1000 group-hover:scale-110" style={{ borderColor: `${slide.color}80`, color: slide.color, backgroundColor: `${slide.color}15` }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3.322c-.443.08-1.554.407-2.658.917C12.565 5.064 10.61 6.556 9.4 8.35c-1.396 2.063-1.897 4.14-1.815 6.13l-.53.53a1 1 0 0 0 1.414 1.414l.53-.53c1.99.082 4.067-.419 6.13-1.815 1.794-1.21 3.286-3.165 4.11-4.94.51-1.106.838-2.217.918-2.66.088-.48.145-1.077-.107-1.328-.25-.252-.847-.195-1.328-.107z"/></svg>
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-center leading-tight tracking-wider text-[#0a1128]">100%<br/>PREMIUM</p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] border-[#daaa41]/50 flex items-center justify-center mb-3 text-[#daaa41] bg-[#daaa41]/5 transition-all duration-1000 group-hover:scale-110" style={{ borderColor: `${slide.color}80`, color: slide.color, backgroundColor: `${slide.color}15` }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M9 5l3-3 3 3M19 9l3 3-3 3M15 19l-3 3-3-3M5 15l-3-3 3-3"/>
              </svg>
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-center leading-tight tracking-wider text-[#0a1128]">TOP<br/>QUALITY</p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] border-[#daaa41]/50 flex items-center justify-center mb-3 text-[#daaa41] bg-[#daaa41]/5 transition-all duration-1000 group-hover:scale-110" style={{ borderColor: `${slide.color}80`, color: slide.color, backgroundColor: `${slide.color}15` }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" stroke="currentColor"/>
              </svg>
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-center leading-tight tracking-wider text-[#0a1128]">NO ADDED<br/>SUGAR</p>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[2px] border-[#daaa41]/50 flex items-center justify-center mb-3 text-[#daaa41] bg-[#daaa41]/5 transition-all duration-1000 group-hover:scale-110" style={{ borderColor: `${slide.color}80`, color: slide.color, backgroundColor: `${slide.color}15` }}>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.31-.22-4-2.52-4-5.24 0-2.85 2.1-5.11 4.79-5.25v10.49zm2 0V6.51c2.69.14 4.79 2.4 4.79 5.25 0 2.72-1.69 5.02-4 5.24z"/>
              </svg>
            </div>
            <p className="text-[9px] md:text-[11px] font-bold text-center leading-tight tracking-wider text-[#0a1128]">NATURAL<br/>GOODNESS</p>
          </div>
          
        </div>

        {/* Button & Navigation */}
        <div className={`flex flex-col md:flex-row items-center gap-8 transform transition-all duration-500 ease-out delay-200 ${isTransitioning ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-none'}`}>
          <button 
            className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#0a1128] text-white rounded shadow-2xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            style={{ '--hover-color': slide.color } as React.CSSProperties}
          >
            <span className="font-bold tracking-widest text-sm md:text-base transition-colors duration-300 group-hover:text-[var(--hover-color)]">SHOP NOW</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 group-hover:text-[var(--hover-color)]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="flex gap-4">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSlide(idx)}
                className="relative flex items-center justify-center w-6 h-6 group"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Active Outline Ring */}
                <div 
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ease-out ${idx === currentSlide && !isTransitioning ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                  style={{ borderColor: slide.color }}
                />
                {/* Inner Dot */}
                <div 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentSlide && !isTransitioning ? 'scale-100' : 'bg-[#0a1128]/20 group-hover:bg-[#0a1128]/50 group-hover:scale-125'}`}
                  style={{ backgroundColor: idx === currentSlide && !isTransitioning ? slide.color : undefined }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right 3D Interactive Image Stack */}
      <div className={`w-full max-w-lg lg:max-w-2xl flex justify-center transform transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-100 ${isTransitioning ? 'opacity-0 scale-75 rotate-3 translate-x-12 blur-md' : 'opacity-100 scale-100 rotate-0 translate-x-0 blur-none'}`}>
        <HeroImage 
          bgImageSrc={slide.bgImageSrc}
          imageSrc={slide.imageSrc}
        />
      </div>
      
    </div>
  );
}
