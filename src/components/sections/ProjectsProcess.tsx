"use client";

import { projects } from "@/lib/constants";
import { Masonry } from "@/components/ui/Masonry";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProjectsProcess() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold text-[#E8EAED] tracking-tighter">
              PROJECTS
            </h2>
            <div className="w-12 h-1 bg-[#FFA63D] mt-4" />
          </div>

          <Masonry projects={projects} />
        </ScrollReveal>
      </div>
    </section>
  );
}
