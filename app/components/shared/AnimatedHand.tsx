"use client";
import { motion } from "framer-motion";

export default function AnimatedHand() {
  return (
    <motion.span
      className="inline-block"
      animate={{
        rotate: [0, 14, -8, 14, -8, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
      style={{ display: "inline-block", transformOrigin: "70% 70%" }}
    >
      👋
    </motion.span>
  );
}




