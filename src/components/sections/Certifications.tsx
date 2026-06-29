"use client";

import Image from "next/image";
import { certificationsList } from "@/lib/constants";
import { FileTab } from "@/components/ui/FileTab";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <FileTab filename="certifications" />
          <div className="bg-[#14171C] border border-[rgba(255,255,255,0.06)] rounded-b-lg rounded-tr-lg p-6 sm:p-8">
            {certificationsList.length === 0 ? (
              <p className="font-mono text-sm text-[#8B92A0]">
                <span className="text-[#8B92A0]">{"// "}</span>
                No entries yet. Check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certificationsList.map((cert) => (
                  <div
                    key={cert.id}
                    className="group relative border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden bg-[#0B0D10] hover:border-[rgba(255,255,255,0.15)] transition-colors"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0D10]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4 border-t border-[rgba(255,255,255,0.06)]">
                      <h3 className="font-mono text-[#E8EAED] font-bold text-sm sm:text-base mb-1 line-clamp-1">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-xs text-[#8B92A0] line-clamp-1">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
