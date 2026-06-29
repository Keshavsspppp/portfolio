"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FlowingMenu() {
  const activeSection = useScrollSpy(
    navLinks.map((link) => link.href.substring(1)),
    50
  );
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Handle liquid flowing background effect for hovered links
  useEffect(() => {
    if (!containerRef.current || prefersReduced) return;
    
    // We can animate a subtle liquid line below the hovered text
    const links = containerRef.current.querySelectorAll('.flow-link');
    links.forEach((link, idx) => {
      if (idx === hoveredIndex) {
        gsap.to(link.querySelector('.flow-bg'), { 
          height: "100%", 
          top: "0%", 
          duration: 0.4, 
          ease: "expo.out" 
        });
        gsap.to(link.querySelector('.flow-text'), {
          color: "#0B0D10",
          duration: 0.3
        });
      } else {
        gsap.to(link.querySelector('.flow-bg'), { 
          height: "0%", 
          top: "100%", 
          duration: 0.4, 
          ease: "expo.out" 
        });
        const isActive = activeSection === navLinks[idx].href.substring(1);
        gsap.to(link.querySelector('.flow-text'), {
          color: isActive ? "#FFA63D" : "#E8EAED",
          duration: 0.3
        });
      }
    });
  }, [hoveredIndex, activeSection, prefersReduced]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 sm:px-8 py-6 mix-blend-difference pointer-events-none">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto flex justify-end gap-6 sm:gap-10 pointer-events-auto"
      >
        {navLinks.map((link, idx) => {
          const isActive = activeSection === link.href.substring(1);
          
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="flow-link relative px-4 py-2 overflow-hidden rounded-sm group font-mono text-sm sm:text-base font-bold tracking-widest uppercase transition-transform active:scale-95"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Flowing background */}
              <div 
                className="flow-bg absolute left-0 w-full bg-[#FFA63D] z-[-1]"
                style={{ top: "100%", height: "0%" }}
              />
              
              <span className={`flow-text relative z-10 transition-colors ${isActive ? "text-[#FFA63D]" : "text-[#E8EAED]"}`}>
                {link.label}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFA63D]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
