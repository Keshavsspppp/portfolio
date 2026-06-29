import React from "react";
import { Keyboard } from "@/components/ui/keyboard";

export function KeyboardSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col font-mono text-sm sm:text-base leading-relaxed pl-6">
        <div><span className="text-[#8B92A0]">$</span> <span className="text-[#E8EAED]">./load-keyboard.sh</span></div>
        <div className="mt-0.5"><span className="text-green-500">→</span> <span className="text-[#E8EAED]">Initializing virtual keyboard...</span></div>
        <div className="mt-0.5"><span className="text-[#FFA63D]">→</span> <span className="text-[#E8EAED]">Ready for input.</span></div>
      </div>
      <div className="flex min-h-96 w-full items-center justify-center py-10 md:min-h-180 overflow-hidden">
        <Keyboard enableSound />
      </div>
    </section>
  );
}
