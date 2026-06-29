"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LogoLoopProps {
  items: string[];
  speed?: number; // duration for one full scroll
}

export function LogoLoop({ items, speed = 20 }: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!trackRef.current || prefersReduced) return;
    
    // We clone the track content so it can loop seamlessly
    const track = trackRef.current;
    
    // Animate the track moving left
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: speed,
      repeat: -1,
    });

    // Pause on hover
    const pause = () => tween.pause();
    const play = () => tween.play();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", play);
    }

    return () => {
      tween.kill();
      if (container) {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", play);
      }
    };
  }, [speed, prefersReduced]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden py-10 my-10 border-y border-[rgba(255,255,255,0.05)] bg-[#0B0D10]/50 backdrop-blur-sm"
    >
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#0B0D10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#0B0D10] to-transparent z-10 pointer-events-none" />
      
      <div 
        ref={trackRef}
        className="flex w-fit whitespace-nowrap items-center"
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div 
            key={`${item}-${idx}`} 
            className="flex items-center justify-center px-10 text-xl md:text-3xl font-mono font-bold text-[#E8EAED]/50 hover:text-[#FFA63D] transition-colors cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
