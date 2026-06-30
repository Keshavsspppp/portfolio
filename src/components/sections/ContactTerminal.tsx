"use client";

import { useState, FormEvent } from "react";
import { personalInfo } from "@/lib/constants";
import { TerminalInput, TerminalTextarea } from "@/components/ui/TerminalInput";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Send } from "lucide-react";
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandLeetcode, 
  IconChefHat, 
  IconCode, 
  IconMail 
} from "@tabler/icons-react";

export function ContactTerminal() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    setFormState("sending");

    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
      "_blank"
    );

    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setName("");
        setEmail("");
        setMessage("");
      }, 3000);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#E8EAED] mb-2">
            Contact
          </h2>
          <p className="font-mono text-sm text-[#8B92A0] mb-8">
            $ contact --send
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10">
          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <TerminalInput
                id="contact-name"
                label="name"
                type="text"
                required
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TerminalInput
                id="contact-email"
                label="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TerminalTextarea
                id="contact-message"
                label="message"
                required
                placeholder="what's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={formState !== "idle"}
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold bg-[#FFA63D] text-[#0B0D10] rounded hover:bg-[#ffb860] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full sm:w-auto"
              >
                {formState === "idle" && (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    send
                  </>
                )}
                {formState === "sending" && "sending..."}
                {formState === "sent" && "✓ sent"}
              </button>
            </form>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-3">
              <p className="font-mono text-xs text-[#8B92A0] uppercase tracking-wider mb-4">
                Or reach me at
              </p>
              {personalInfo.socials.map((social) => (
                <div key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-mono text-sm text-[#3DA9FC] hover:text-[#6bbfff] transition-colors duration-150"
                  >
                    <span className="text-[#8B92A0] flex items-center justify-center w-5 h-5 mr-2">
                      {social.platform === "GitHub" && <IconBrandGithub className="w-4 h-4" />}
                      {social.platform === "LinkedIn" && <IconBrandLinkedin className="w-4 h-4" />}
                      {social.platform === "LeetCode" && <IconBrandLeetcode className="w-4 h-4" />}
                      {social.platform === "CodeChef" && <IconChefHat className="w-4 h-4" />}
                      {social.platform === "Codeforces" && <IconCode className="w-4 h-4" />}
                      {social.platform === "Email" && <IconMail className="w-4 h-4" />}
                    </span>
                    {social.label}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
