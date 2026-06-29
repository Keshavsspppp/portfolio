"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/constants";
import { MapPin, GitBranch, Terminal } from "lucide-react";

export function StatusBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-7 bg-[#3DA9FC] text-[#0B0D10] font-mono text-[10px] sm:text-xs flex items-center justify-between px-2 sm:px-4">
      {/* Left items */}
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1.5 h-full px-2 hover:bg-[#ffb860] cursor-pointer transition-colors">
          <Terminal className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">KESHAV_PRASAD</span>
        </div>
        
        <div className="flex items-center gap-1.5 h-full px-2 hover:bg-[#ffb860] cursor-pointer transition-colors">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>

        <a 
          href="/ResumeKeshav.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 h-full px-2 hover:bg-[#ffb860] hover:text-[#0B0D10] text-[#0B0D10] cursor-pointer transition-colors"
          aria-label="View Resume"
        >
          <span className="font-bold tracking-tight">&gt; cat resume.pdf</span>
        </a>

        <div className="hidden sm:flex items-center gap-1.5 h-full px-2 hover:bg-[#ffb860] cursor-pointer transition-colors">
          <MapPin className="w-3.5 h-3.5" />
          <span>{personalInfo.location}</span>
        </div>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1.5 h-full px-2">
          <span className="w-2 h-2 rounded-full bg-[#0B0D10] animate-pulse" />
          <span className="hidden sm:inline font-semibold">open to work</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 h-full px-2 border-l border-[#0B0D10]/20">
          <span>⏰ {time || "--:--"} IST</span>
        </div>

        <div className="flex items-center gap-2 h-full px-2 border-l border-[#0B0D10]/20">
          {personalInfo.socials.slice(0, 2).map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label={social.platform}
            >
              {social.platform === "GitHub" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              )}
              {social.platform === "LinkedIn" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
