"use client";

import { experience, education } from "@/lib/constants";
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

        <div className="mt-32" />

        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-mono text-4xl sm:text-6xl font-bold text-[#E8EAED] tracking-tighter">
              EDUCATION
            </h2>
            <div className="w-16 h-1 bg-[#FFA63D] mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#14171C] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[#FFA63D] transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E8EAED]">{edu.degree}</h3>
                    <div className="font-mono text-[#3DA9FC] text-sm mt-1">{edu.institution}</div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="font-mono text-sm text-[#8B92A0] bg-[#0B0D10] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.05)]">
                      {edu.duration}
                    </span>
                    <span className={`text-xs mt-2 font-mono uppercase tracking-wider ${edu.status === 'ongoing' ? 'text-green-500' : 'text-[#8B92A0]'}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
