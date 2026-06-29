"use client";

import { achievements } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#E8EAED] mb-8">
            Achievements
          </h2>
        </ScrollReveal>

        <ul className="space-y-3">
          {achievements.map((a, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <li className="text-sm sm:text-base text-[#E8EAED] pl-6 -indent-6">
                <span className="text-[#FFA63D] font-mono mr-2 inline-block">▸</span>
                <span>{a.text}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
