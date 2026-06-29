"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  words: string[];
}

export function RotatingText({ words }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative inline-flex items-center overflow-hidden h-8 sm:h-10 text-[#3DA9FC]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="block absolute whitespace-nowrap font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to keep width consistent based on longest word */}
      <span className="invisible whitespace-nowrap font-bold">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </div>
  );
}
