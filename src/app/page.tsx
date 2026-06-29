import { HeroBoot } from "@/components/sections/HeroBoot";
import { AboutReadme } from "@/components/sections/AboutReadme";
import { SkillsDeps } from "@/components/sections/SkillsDeps";
import { ProjectsProcess } from "@/components/sections/ProjectsProcess";
import { Experience } from "@/components/sections/Experience";
import { ContactTerminal } from "@/components/sections/ContactTerminal";
import { TerminalSection } from "@/components/sections/TerminalSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <HeroBoot />
      <AboutReadme />
      <TerminalSection />
      <SkillsDeps />
      <ProjectsProcess />
      <Experience />
      <ContactTerminal />
    </div>
  );
}
