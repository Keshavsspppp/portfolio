"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TextPressureProps {
  text: string;
}

export function TextPressure({ text }: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReduced) return;
    const chars = containerRef.current.querySelectorAll('.pressure-char');
    
    const handleMouseMove = (e: MouseEvent) => {
      chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;
        
        const distX = e.clientX - charCenterX;
        const distY = e.clientY - charCenterY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        
        // Max distance to affect
        const maxDist = 300;
        
        if (dist < maxDist) {
          // Weight calculation (closer = higher weight)
          const weight = 1 - (dist / maxDist);
          const fontStretch = 100 + (weight * 100); // 100% to 200%
          const fontWeight = 700 + (weight * 200); // 700 to 900
          
          gsap.to(char, {
            fontWeight: fontWeight,
            fontStretch: `${fontStretch}%`,
            duration: 0.2,
            ease: "power2.out"
          });
        } else {
          gsap.to(char, {
            fontWeight: 700,
            fontStretch: "100%",
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-nowrap justify-center sm:justify-start whitespace-nowrap overflow-visible"
      style={{ perspective: "1000px" }}
    >
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className="pressure-char inline-block font-pixel text-4xl sm:text-6xl md:text-8xl text-[#E8EAED] tracking-tighter transition-colors"
          style={{ 
            fontStretch: "100%", 
            fontWeight: 700,
            // Add a subtle text shadow that also reacts? Optional.
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
