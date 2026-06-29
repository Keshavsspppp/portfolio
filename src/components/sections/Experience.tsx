"use client";

import { experience } from "@/lib/constants";
import { ScrollStack } from "@/components/ui/ScrollStack";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-mono text-4xl sm:text-6xl font-bold text-[#E8EAED] tracking-tighter">
              EXPERIENCE
            </h2>
            <div className="w-16 h-1 bg-[#FFA63D] mx-auto mt-6" />
          </div>

          <ScrollStack experience={experience} />
        </ScrollReveal>
      </div>
    </section>
  );
}
