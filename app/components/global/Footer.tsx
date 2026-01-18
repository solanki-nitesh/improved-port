import Link from "next/link";
import { socialLinks } from "@/app/data/social";
import UnmountStudio from "./Unmount";
import {
  BiLogoGithub,
  BiLogoYoutube,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { profileQuery } from "@/lib/sanity.query";
import { sanityFetch } from "@/lib/sanity.client";
import type { ProfileType } from "@/types";
import GetInTouchSection from "./GetInTouchSection";

function AboutSection({ fullName, shortBio }: { fullName?: string; shortBio?: string }) {
  const mainSocialLinks = socialLinks
    .filter((link) => 
      link.name === "GitHub" || 
      link.name === "Youtube" || 
      link.name === "X" || 
      link.name === "Linkedin"
    )
    .slice(0, 4);

  const getIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return BiLogoGithub;
      case "Youtube":
        return BiLogoYoutube;
      case "X":
        return FaSquareXTwitter;
      case "Linkedin":
        return BiLogoLinkedinSquare;
      default:
        return null;
    }
  };

  return (
    <div>
      <h4 className="font-incognito font-bold text-2xl md:text-3xl dark:text-white text-zinc-900 mb-4">
        {fullName || "Nitesh Solanki"}
      </h4>
      <div className="w-16 h-1 bg-zinc-900 dark:bg-white rounded-full mb-6"></div>
      <p className="text-base md:text-lg dark:text-zinc-400 text-zinc-600 max-w-md leading-relaxed">
        {shortBio || "Full time developer making our world better"}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {mainSocialLinks.map((link) => {
          const Icon = getIcon(link.name);
          if (!Icon) return null;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 flex items-center justify-center rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 text-zinc-500 hover:text-white dark:hover:text-zinc-900 hover:bg-zinc-900 dark:hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label={link.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <h6 className="font-incognito font-semibold text-lg dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-zinc-900 dark:bg-white rounded-full"></span>
        Contact
      </h6>
      <ul className="mt-4 space-y-3">
        <li>
          <a
            href="mailto:solankiniteshs77@gmail.com"
            className="group flex items-center gap-2 text-base dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Email Me
          </a>
        </li>
        <li>
          <a
            href="facetime://+919974742300"
            className="group flex items-center gap-2 text-base dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Call Nitesh
          </a>
        </li>
        <li>
          <a
            href="https://cal.com/niteshsolanki"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-base dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Get in Touch
          </a>
        </li>
      </ul>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    { name: "PMC", slug: "work/pmc-milksecure" },
    { name: "Mobilize", slug: "work/mobilize-rescue" },
    { name: "FTC", slug: "work/ftc" },
    { name: "PeerFive", slug: "work/peerfive" },
    { name: "PacificLife", slug: "work/pacificlife" },
  ];

  return (
    <div>
      <h6 className="font-incognito font-semibold text-lg dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-zinc-900 dark:bg-white rounded-full"></span>
        Projects
      </h6>
      <ul className="mt-4 space-y-3">
        {projects.map((project) => (
          <FooterLink key={project.slug} name={project.name} href={`/projects/${project.slug}`} />
        ))}
        <FooterLink name="Many more" href="/projects" />
      </ul>
    </div>
  );
}

function SitemapSection() {
  return (
    <div>
      <h6 className="font-incognito font-semibold text-lg dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-zinc-900 dark:bg-white rounded-full"></span>
        Sitemap
      </h6>
      <ul className="mt-4 space-y-3">
        <FooterLink name="Home" href="/" />
        <FooterLink name="About" href="/about" />
        <FooterLink name="Blog" href="/blog" />
        <FooterLink name="Projects" href="/projects" />
        <FooterLink name="Photos" href="/photos" />
      </ul>
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-base dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {name}
      </Link>
    </li>
  );
}

export default async function Footer() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });


  return (
    <UnmountStudio>
      <footer className="relative border-t dark:border-zinc-800 border-zinc-200 pb-16 pt-48 mt-44 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto md:px-16 px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="md:col-span-2 lg:col-span-1">
              <AboutSection 
                fullName={profile?.fullName || "Nitesh Solanki"}
                shortBio={profile?.shortBio || "Full time developer making our world better"}
              />
            </div>

            <div>
              <ContactSection />
            </div>

            <div>
              <ProjectsSection />
            </div>

            <div>
              <SitemapSection />
            </div>

            <div>
              <GetInTouchSection />
            </div>
          </div>

          {/* Cool divider */}
          <div className="mt-16 mb-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t dark:border-zinc-800 border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 dark:bg-zinc-900 bg-white">
                <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-zinc-500 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Copyright with cool design */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm dark:text-zinc-400 text-zinc-600">
              <span>All rights reserved</span>{" "}
              <span className="block md:inline">
                © Nitesh Solanki {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs dark:text-zinc-500 text-zinc-500">
              <span>Built with</span>
              <span className="text-zinc-900 dark:text-white animate-pulse">❤️</span>
              <span>and</span>
              <span className="dark:text-white text-zinc-900 font-semibold">Next.js</span>
            </div>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
