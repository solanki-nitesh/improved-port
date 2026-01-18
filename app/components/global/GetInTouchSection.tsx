"use client";

import Link from "next/link";
import { socialLinks } from "@/app/data/social";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export default function GetInTouchSection() {
  const linkedInLink = socialLinks.find((link) => link.name === "Linkedin");

  return (
    <div>
      <h6 className="font-incognito font-semibold text-lg dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-zinc-900 dark:bg-white rounded-full"></span>
        Get in touch
      </h6>
      <div className="mt-4 max-w-md">
        <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
          Get in touch on{" "}
          <a
            href={linkedInLink?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 dark:text-zinc-200 hover:underline inline-flex items-center gap-1 font-medium"
          >
            LinkedIn
            <BiLogoLinkedinSquare className="inline-block" />
          </a>{" "}
          send a connection request with a short message or question. No solicitations.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href="https://buymeacoffee.com/niteshsolanki"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 border border-zinc-800 dark:border-zinc-200"
        >
          <span className="text-base">☕</span>
          <span>Buy me a coffee</span>
          <svg 
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-sm dark:text-zinc-400 text-zinc-600">
          Enjoyed my work? A coffee is always appreciated!
        </p>
      </div>
    </div>
  );
}

