"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project } from "@/lib/constants";

interface MasonryProps {
  projects: Project[];
}

export function Masonry({ projects }: MasonryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReduced) return;
    const cards = containerRef.current.querySelectorAll('.masonry-card');
    
    // Simple stagger reveal on mount
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" }
    );
  }, [prefersReduced]);

  return (
    <div ref={containerRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {projects.map((project, idx) => (
        <div 
          key={project.pid} 
          className="masonry-card break-inside-avoid relative p-6 bg-[#14171C] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden group hover:border-[#FFA63D] transition-colors duration-300"
        >
          {/* Subtle gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFA63D]/0 to-[#FFA63D]/0 group-hover:from-[#FFA63D]/5 group-hover:to-transparent transition-all duration-500 z-0" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#E8EAED] leading-tight">{project.name}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[#8B92A0] hover:text-[#E8EAED]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.83s-1.13-.36-3.7 1.39a12 12 0 0 0-6.7 0c-2.57-1.75-3.7-1.39-3.7-1.39a5 5 0 0 0-.15 3.83 5.5 5.5 0 0 0-1.5 3.89c0 5.26 3 6.46 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-[#8B92A0] hover:text-[#FFA63D]">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-[#8B92A0] mb-6 line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs font-mono px-2 py-1 bg-[#0B0D10] text-[#3DA9FC] rounded-md border border-[rgba(61,169,252,0.2)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
