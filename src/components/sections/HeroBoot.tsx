"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BootLine } from "@/components/ui/BootLine";
import { BlinkingCursor } from "@/components/ui/BlinkingCursor";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { bootSequence, personalInfo } from "@/lib/constants";
import { ArrowDown, FileDown } from "lucide-react";
import { TextPressure } from "@/components/ui/TextPressure";
import { RotatingText } from "@/components/ui/RotatingText";

export function HeroBoot() {
  const prefersReduced = useReducedMotion();
  const [completedLines, setCompletedLines] = useState(prefersReduced ? bootSequence.length : 0);
  const bootDone = completedLines >= bootSequence.length;

  const handleLineComplete = useCallback(() => {
    setCompletedLines((prev) => prev + 1);
  }, []);

  // Calculate cumulative delay for each line
  const lineDelays = useMemo(() => {
    const delays: number[] = [];
    let cumulative = 600; // initial delay before first line
    bootSequence.forEach((line, i) => {
      delays.push(cumulative);
      // estimate time for this line: prompt typing + response typing + gap
      const promptTime = line.prompt.length * 40;
      const responseTime = line.response.length * 25;
      cumulative += promptTime + responseTime + 400;
      if (i < bootSequence.length - 1) cumulative += 100;
    });
    return delays;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 pt-20"
    >
      {/* Boot sequence */}
      <div className="max-w-3xl mx-auto w-full relative z-10">
        <div className="space-y-4 mb-10">
          {bootSequence.map((line, i) => (
            <div
              key={i}
              className={
                bootDone && !prefersReduced
                  ? "opacity-40 transition-opacity duration-700"
                  : ""
              }
            >
              {(i < completedLines || i === completedLines) && (
                <BootLine
                  prompt={line.prompt}
                  response={line.response}
                  delay={prefersReduced ? 0 : lineDelays[i]}
                  onComplete={handleLineComplete}
                />
              )}
            </div>
          ))}

          {/* Boot complete indicator */}
          {bootDone && (
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-mono text-xs text-[#8B92A0] mt-4"
            >
              <span className="text-green-500">[boot complete]</span>
            </motion.div>
          )}
        </div>

        {/* Main hero content post-boot */}
      {bootDone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center min-h-[60vh]"
        >
          <div className="mb-6">
            <TextPressure text={personalInfo.name.toUpperCase()} />
          </div>
          
          <div className="font-mono text-[#8B92A0] text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
            <span>&gt;</span>{" "}
            <RotatingText words={[
              "Full-Stack Developer",
              "AI/ML Enthusiast",
              "Competitive Programmer",
              "React Bits Integrator"
            ]} />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold bg-[#FFA63D] text-[#0B0D10] rounded hover:bg-[#ffb860] transition-colors duration-200"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/ResumeKeshav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold border border-[rgba(255,255,255,0.1)] text-[#E8EAED] rounded hover:border-[#FFA63D] hover:text-[#FFA63D] transition-colors duration-200"
            >
              Resume
              <FileDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
      </div>

      {/* Scroll indicator */}
      {bootDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8B92A0]">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-[#8B92A0]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
