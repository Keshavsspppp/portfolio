"use client";

import { skills } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LogoLoop } from "@/components/ui/LogoLoop";

export function SkillsDeps() {
  const languages = Object.keys(skills.find(s => s.category === "languages")?.items || {});
  const frameworks = Object.keys(skills.find(s => s.category === "frameworks")?.items || {});
  const tools = Object.keys(skills.find(s => s.category === "tools")?.items || {});

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#14171C]/20 border-y border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="px-6 sm:px-8 lg:px-12 mb-8 flex flex-col items-center sm:items-start">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold text-[#E8EAED] tracking-tighter">
              TECH_STACK
            </h2>
          </div>

          <div className="flex flex-col gap-0 mt-12">
            <LogoLoop items={languages} speed={25} />
            <LogoLoop items={frameworks} speed={30} />
            <LogoLoop items={tools} speed={20} />
          </div>
          
        </ScrollReveal>
      </div>
    </section>
  );
}
