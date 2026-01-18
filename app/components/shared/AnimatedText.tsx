"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Senior Full Stack Engineer", 
  "Technical Developer Lead",
  "Tech Enthusiast",
  "Problem Solver", 
  "Explorer"
];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[2.5rem]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-incognito font-semibold tracking-tight text-xl sm:text-2xl md:text-3xl mb-6 lg:leading-[2.5rem] leading-tight lg:min-w-[700px] min-w-full absolute inset-0"
        >
          {roles[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}




