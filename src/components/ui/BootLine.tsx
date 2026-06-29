"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BootLineProps {
  prompt: string;
  response: string;
  delay: number;
  onComplete: () => void;
}

export function BootLine({ prompt, response, delay, onComplete }: BootLineProps) {
  const prefersReduced = useReducedMotion();
  const [phase, setPhase] = useState<"waiting" | "typing-prompt" | "typing-response" | "done">(
    prefersReduced ? "done" : "waiting"
  );
  const [displayedPrompt, setDisplayedPrompt] = useState(prefersReduced ? prompt : "");
  const [displayedResponse, setDisplayedResponse] = useState(prefersReduced ? response : "");

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    const startTimer = setTimeout(() => setPhase("typing-prompt"), delay);
    return () => clearTimeout(startTimer);
  }, [delay, prefersReduced, onComplete]);

  // Type prompt
  useEffect(() => {
    if (phase !== "typing-prompt") return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedPrompt(prompt.slice(0, i));
      if (i >= prompt.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("typing-response"), 200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [phase, prompt]);

  // Type response
  useEffect(() => {
    if (phase !== "typing-response") return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedResponse(response.slice(0, i));
      if (i >= response.length) {
        clearInterval(interval);
        setPhase("done");
        onComplete();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [phase, response, onComplete]);

  const showPrompt = phase !== "waiting";
  const showResponse = phase === "typing-response" || phase === "done";

  return (
    <div className="font-mono text-sm sm:text-base leading-relaxed">
      {showPrompt && (
        <div>
          <span className="text-[#8B92A0]">$</span>{" "}
          <span className="text-[#E8EAED]">{displayedPrompt}</span>
          {phase === "typing-prompt" && (
            <span className="cursor-blink inline-block w-[7px] h-[14px] bg-[#FFA63D] align-middle ml-2" />
          )}
        </div>
      )}
      {showResponse && (
        <div className="mt-0.5">
          <span className="text-[#FFA63D]">→</span>{" "}
          <span className="text-[#E8EAED]">{displayedResponse}</span>
          {phase === "typing-response" && (
            <span className="cursor-blink inline-block w-[7px] h-[14px] bg-[#FFA63D] align-middle ml-2" />
          )}
        </div>
      )}
    </div>
  );
}
