"use client";
import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const workProjects = [
  {
    id: "pmc",
    title: "Paul Mueller Company - MilkSecure IIoT Platform",
    description: "A next-generation IIoT control platform designed for connected dairy operations, combining cloud connectivity, automation, and intuitive user experience.",
    fullDescription: "I started my journey as a junior developer in 2019 with this project at Solvative. Paul Mueller Company partnered with us to modernize their existing HiPerForm™ III cooling and wash control system into a future-ready IIoT platform called MilkSecure™. The solution transformed how dairies operate by providing real-time monitoring, cloud analytics, automated alerts, and remote access capabilities replacing manual paper-based logging with intelligent digital systems.",
    industry: "IIoT / Dairy Operations",
    technology: "React, Node, Sails, MongoDB, SQLite, AWS, Cloud Analytics",
    role: "Junior Developer (2019)",
    company: "Solvative",
    caseStudyUrl: "https://solvative.com/case-study/pmc",
    keyFeatures: [
      "Hardware Integration with Multiple Sensor Sections",
      "Real-time Sensor Data Collection & Cloud Backup",
      "Comprehensive Alert System for Critical Parameters",
      "Touchscreen Interface with Intuitive Navigation",
      "Electronic Time & Temperature Recorder",
      "Report Generation & Download (Daily, Monthly, Yearly)",
      "Remote Access from Any Device",
      "Built-In Robotic Interface Integration"
    ],
    outcomes: [
      "Real-time monitoring of milk temperature and volume",
      "Automated alerts for faster response",
      "Digital data capture replacing manual logging",
      "Remote operation enabling flexibility"
    ],
    images: [
      "/hiperform.webp",
      "/cloud.webp",
      "/graff.avif",
      "/tank.avif",
      "/login.png",
      "/PMC-Phone-Digital.avif"
    ]
  },
  {
    id: "mobilize-rescue",
    title: "Mobilize Rescue - Intelligent Emergency Response System",
    description: "Building intelligent workflows for real-time emergency care. A healthcare technology solution that transforms first aid kits into intelligent, app-powered emergency response systems.",
    fullDescription: "Mobilize Rescue partnered with Solvative to create a digital-first experience that guides anyone—regardless of medical training—through high-stress rescue situations with confidence. We developed a suite of native mobile applications and backend systems that delivered dynamic, condition-based rescue workflows, real-time inventory tracking, and automated supply replenishment.",
    industry: "Healthcare & Medical",
    technology: "Native Mobile Apps, Backend Systems, Real-time Workflows",
    role: "Developer",
    company: "Solvative (now part of ZOLL Medical)",
    caseStudyUrl: "https://solvative.com/case-study/mobilize-rescue",
    keyFeatures: [
      "Digital-First Emergency Response Workflows",
      "Real-Time Inventory Tracking & Management",
      "Automated Supply Replenishment",
      "Native Mobile Applications (Phone & Tablet)",
      "Dynamic, Condition-Based Rescue Paths",
      "Scalable Architecture for Multiple Kit Types"
    ],
    outcomes: [
      "Streamlined emergency response workflows",
      "Real-time inventory visibility",
      "Higher confidence and usability for bystanders",
      "Scalable digital ecosystem",
      "Increased adoption and sales"
    ],
    images: []
  }
];

export default function WorkProjects() {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-12 text-center">
          <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 mb-2">
            Work Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </Slide>

      <div className="max-w-7xl mx-auto space-y-16">
        {workProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof workProjects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="group relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
        
        {/* Main card */}
        <div className="relative dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 bg-gradient-to-br from-white to-zinc-50 border dark:border-zinc-700 border-zinc-200 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
          {/* Decorative gradient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold dark:text-white text-zinc-900 mb-4">
                {project.title}
              </h3>
              <p className="text-lg dark:text-zinc-300 text-zinc-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Two column layout */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Left: Description and Features */}
              <div>
                <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold dark:text-white text-zinc-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm dark:text-zinc-400 text-zinc-600">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Project Details & Outcomes */}
              <div>
                <div className="dark:bg-zinc-800/50 bg-zinc-100/50 rounded-xl p-6 mb-6 border dark:border-zinc-700 border-zinc-200">
                  <h4 className="text-lg font-bold dark:text-white text-zinc-900 mb-4">Project Impact</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold dark:text-zinc-300 text-zinc-700">Industry:</span>
                      <span className="ml-2 dark:text-zinc-400 text-zinc-600">{project.industry}</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-zinc-300 text-zinc-700">Technology:</span>
                      <span className="ml-2 dark:text-zinc-400 text-zinc-600">{project.technology}</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-zinc-300 text-zinc-700">Role:</span>
                      <span className="ml-2 dark:text-zinc-400 text-zinc-600">{project.role}</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-zinc-300 text-zinc-700">Company:</span>
                      <span className="ml-2 dark:text-zinc-400 text-zinc-600">{project.company}</span>
                    </div>
                  </div>
                </div>

                <div className="dark:bg-zinc-800/50 bg-zinc-100/50 rounded-xl p-6 border dark:border-zinc-700 border-zinc-200">
                  <h4 className="text-lg font-bold dark:text-white text-zinc-900 mb-4">Outcomes</h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm dark:text-zinc-400 text-zinc-600">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Images Gallery (only for PMC) */}
            {project.images && project.images.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-bold dark:text-white text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                  Platform Screenshots
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="relative w-full h-24 md:h-32 rounded-lg overflow-hidden border dark:border-zinc-700 border-zinc-200 cursor-pointer group"
                    >
                      <RefLink href={project.caseStudyUrl} className="block w-full h-full">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </RefLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Study Link */}
            <div className="flex justify-end">
              <RefLink
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </RefLink>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

