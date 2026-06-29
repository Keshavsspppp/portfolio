"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ExperienceEntry } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackProps {
  experience: ExperienceEntry[];
}

export function ScrollStack({ experience }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReduced) return;
    const cards = containerRef.current.querySelectorAll('.stack-card');
    
    // The pinning effect: as we scroll, cards stack on top of each other
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top top+=${100 + i * 20}`, // staggered pinning position
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
      
      // Scale down previous cards slightly when new ones pin over them
      if (i > 0) {
        gsap.to(cards[i - 1], {
          scale: 0.95,
          opacity: 0.5,
          scrollTrigger: {
            trigger: card,
            start: `top top+=${100 + i * 20}`,
            end: `top top+=${100 + (i - 1) * 20}`,
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [prefersReduced]);

  return (
    <div ref={containerRef} className="relative pb-32">
      {experience.map((exp, idx) => (
        <div 
          key={idx} 
          className="stack-card w-full mb-12 p-8 bg-[#14171C] border border-[rgba(255,255,255,0.05)] rounded-2xl shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#E8EAED]">{exp.role}</h3>
              <h4 className="text-lg text-[#FFA63D]">{exp.company}</h4>
            </div>
            <span className="font-mono text-sm text-[#8B92A0] mt-2 sm:mt-0 px-3 py-1 bg-[#0B0D10] rounded-full border border-[rgba(255,255,255,0.05)]">
              {exp.duration}
            </span>
          </div>
          
          <ul className="space-y-3">
            {exp.responsibilities.map((resp, rIdx) => (
              <li key={rIdx} className="flex gap-3 text-[#8B92A0]">
                <span className="text-[#3DA9FC] shrink-0">▹</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
