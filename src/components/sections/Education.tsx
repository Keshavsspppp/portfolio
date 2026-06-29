"use client";

import { education } from "@/lib/constants";
import { FileTab } from "@/components/ui/FileTab";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Education() {
  return (
    <section id="education" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <FileTab filename="education" />
          <div className="bg-[#14171C] border border-[rgba(255,255,255,0.06)] rounded-b-lg rounded-tr-lg p-6 sm:p-8">
            {education.map((edu, i) => (
              <div key={i}>
                <h3 className="font-mono text-lg font-bold text-[#E8EAED] mb-2">
                  <span className="text-[#8B92A0] font-normal"># </span>
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#E8EAED] mb-1">{edu.institution}</p>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-xs text-[#8B92A0]">{edu.duration}</p>
                  {edu.status === "ongoing" && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-xs bg-[#FFA63D]/10 text-[#FFA63D] border border-[#FFA63D]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFA63D] animate-pulse" />
                      ongoing
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
