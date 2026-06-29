import React from "react";
import { Terminal } from "@/components/ui/terminal";

export function TerminalSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col font-mono text-sm sm:text-base leading-relaxed pl-6">
        <div><span className="text-[#8B92A0]">$</span> <span className="text-[#E8EAED]">./init-terminal.sh</span></div>
        <div className="mt-0.5"><span className="text-green-500">→</span> <span className="text-[#E8EAED]">Launching terminal emulator...</span></div>
      </div>
      <div className="w-full py-10">
        <Terminal
          commands={[
            "whoami",
            "cat skills.txt",
            "echo 'Hello World!'",
          ]}
          outputs={{
            0: ["Keshav Prasad"],
            1: ["JavaScript, TypeScript, React, Next.js, Node.js", "Python, C++"],
            2: ["Hello World!"],
          }}
          typingSpeed={40}
          delayBetweenCommands={1500}
        />
      </div>
    </section>
  );
}
