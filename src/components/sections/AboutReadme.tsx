"use client";

import { personalInfo, education, achievements } from "@/lib/constants";
import { FileTab } from "@/components/ui/FileTab";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import dynamic from "next/dynamic";

import type { Props as GitHubCalendarProps } from "react-github-calendar";

const GitHubCalendar = dynamic<GitHubCalendarProps>(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function AboutReadme() {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <FileTab filename="about.md" />
          <div className="bg-[#14171C] border border-[rgba(255,255,255,0.06)] rounded-b-lg rounded-tr-lg p-6 sm:p-8">
            {/* Title */}
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#E8EAED] mb-6">
              <span className="text-[#8B92A0] font-normal"># </span>
              {personalInfo.name}
            </h2>

            {/* Bio and Image */}
            <div className="flex flex-col-reverse md:flex-row gap-6 mb-8 items-center md:items-start">
              <div className="flex-1">
                <p className="text-[#E8EAED] leading-relaxed text-sm sm:text-base">
                  {personalInfo.bio}
                </p>
              </div>
              <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 rounded border border-[rgba(255,255,255,0.1)] overflow-hidden p-1 bg-[#0B0D10]">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/profiless.png"
                    alt="Keshav Prasad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            </div>

            {/* Currently */}
            <h3 className="font-mono text-lg font-bold text-[#E8EAED] mb-4">
              <span className="text-[#8B92A0] font-normal">## </span>
              Currently
            </h3>

            <ul className="space-y-2 mb-8">
              <li className="text-sm text-[#E8EAED] flex items-center gap-2">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </li>
              {education.map((edu, i) => (
                <li key={i} className="text-sm text-[#E8EAED] flex items-center gap-2">
                  <span>🎓</span>
                  <span>
                    {edu.degree} @ {edu.institution} ({edu.duration})
                  </span>
                </li>
              ))}
              <li className="text-sm text-[#E8EAED] flex items-center gap-2">
                <span>💼</span>
                <span>Previously interned at Elevenvance Skills</span>
              </li>
            </ul>

            {/* Highlights */}
            <h3 className="font-mono text-lg font-bold text-[#E8EAED] mb-4">
              <span className="text-[#8B92A0] font-normal">## </span>
              Highlights
            </h3>

            <ul className="space-y-2 mb-8">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="text-sm text-[#E8EAED] flex items-start gap-2"
                >
                  <span className="text-[#FFA63D] shrink-0">▸</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>

            {/* Contributions */}
            <h3 className="font-mono text-lg font-bold text-[#E8EAED] mb-4">
              <span className="text-[#8B92A0] font-normal">## </span>
              Contributions
            </h3>
            
            <div className="w-full overflow-x-auto pb-4 no-visible-scrollbar rounded-md">
              <div className="min-w-[700px]">
                <GitHubCalendar 
                  username="Keshavsspppp"
                  theme={{
                    light: ['#0B0D10', '#4A2A0C', '#844B15', '#C06B1F', '#FFA63D'],
                    dark: ['#0B0D10', '#4A2A0C', '#844B15', '#C06B1F', '#FFA63D']
                  }}
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
