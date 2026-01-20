"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LogoImage from "@/public/logo.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide loader after page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center dark:bg-zinc-900 bg-white"
        >
          <div className="relative flex items-center justify-center">
            {/* Circular progress indicator */}
            <svg
                className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                viewBox="0 0 200 200"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="dark:text-zinc-800 text-zinc-200"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="dark:text-zinc-400 text-zinc-600"
                  strokeDasharray={`${2 * Math.PI * 90}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 90 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 90 * (1 - progress / 100) }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  transform="rotate(-90 100 100)"
                />
            </svg>

            {/* Logo Image */}
            <div className="relative z-10 flex items-center justify-center w-[90px] h-[66px] sm:w-[110px] sm:h-[80px] md:w-[130px] md:h-[95px] lg:w-[150px] lg:h-[110px]">
                <Image
                  src={LogoImage}
                  alt="Nitesh Solanki Logo"
                  width={150}
                  height={110}
                  className="h-full w-full object-contain dark:invert dark:brightness-0 dark:contrast-200"
                  priority
                />
              </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

