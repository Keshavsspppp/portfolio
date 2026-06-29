"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TargetCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!cursorRef.current || !dotRef.current || prefersReduced) return;
    
    // Hide default cursor
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      // Move dot instantly
      gsap.set(dotRef.current, {
        x: e.clientX,
        y: e.clientY
      });
      
      // Move outer ring smoothly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.1 });
    };

    // Make it react to links
    const onMouseEnterLink = () => {
      gsap.to(cursorRef.current, { scale: 1.5, borderColor: "#FFA63D", backgroundColor: "rgba(255, 166, 61, 0.1)", duration: 0.2 });
      gsap.to(dotRef.current, { opacity: 0, duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorRef.current, { scale: 1, borderColor: "rgba(61, 169, 252, 0.5)", backgroundColor: "transparent", duration: 0.2 });
      gsap.to(dotRef.current, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Attach hover effects to all clickable elements
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      links.forEach(link => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[rgba(61,169,252,0.5)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
      >
        <div className="absolute top-1/2 left-0 w-1 h-[1px] bg-[rgba(61,169,252,0.5)] -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-1 h-[1px] bg-[rgba(61,169,252,0.5)] translate-x-1/2" />
        <div className="absolute top-0 left-1/2 w-[1px] h-1 bg-[rgba(61,169,252,0.5)] -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-[1px] h-1 bg-[rgba(61,169,252,0.5)] translate-y-1/2" />
      </div>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#3DA9FC] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}
