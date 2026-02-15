"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { useRef, useState, useLayoutEffect, type RefObject } from "react";

type TimelineEvent = {
  period: string;
  title: string;
  description?: string;
  image?: string;
  projectHref?: string;
  ctaText?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    period: "2026",
    title: "Project Lead · Technical Lead",
    description:
      "Leading the team and driving delivery and technical direction across AI and product initiatives.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2025",
    title: "Technical Lead · Full Stack Lead",
    description:
      "As a GenAI Developer, leading full-stack and technical initiatives using OpenAI and Gemini APIs to build scalable, intelligent systems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    projectHref: "/projects",
    ctaText: "Explore Our Journey",
  },
  {
    period: "2024",
    title: "Full Stack Lead | DevOps Lead",
    description:
      "Led full-stack development and DevOps practices, managing CI/CD pipelines and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    projectHref: "/projects",
    ctaText: "See My Work",
  },
  {
    period: "2023",
    title: "Senior Full Stack Developer",
    description:
      "Worked on complex backend architectures, serverless solutions, and automated deployments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    projectHref: "/projects",
    ctaText: "Explore Our Journey",
  },
  {
    period: "2022",
    title: "Full Stack Developer",
    description:
      "Delivered scalable full-stack applications and collaborated closely with cross-functional teams.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2021",
    title: "Full Stack Developer | Intern Mentor",
    description:
      "Contributed to production systems while mentoring interns through real-world project development.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2020",
    title: "Full Stack Developer",
    description:
      "Built and maintained full-stack features, improved performance, and supported production deployments.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "July 2019",
    title: "Junior Full Stack Developer",
    description:
      "Promoted to Junior Full Stack Developer after successful internship.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "Jan 2019",
    title: "Full Stack Intern",
    description:
      "Joined Solvative (formerly Quark Studios) as a Full Stack Intern.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2018 (End)",
    title: "Placement Coordinator",
    description:
      "Served as Placement Coordinator at L.D. College of Engineering.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "May 2018 – June 2018",
    title: "Internship Trainee (Android Developer)",
    description:
      "Completed an internship at BISAG, working as an Android Application Developer.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2017",
    title: "NSS Volunteer",
    description:
      "Joined NSS and actively participated in social and community service activities.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2016",
    title: "Bachelor's Degree (Information Technology)",
    description:
      "Started Bachelor's degree in Information Technology at L.D. College of Engineering.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2016",
    title: "Practical Project Development",
    description:
      "Developed LE Attendance System in PHP as part of academic project work.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2016",
    title: "Diploma Engineering (Information Technology)",
    description: "Graduated as a Gold Medalist with 10/10 CGPA.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2014",
    title: "ITI Training",
    description:
      "Completed Industrial Training Institute program in Basic Computer Course.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "2013",
    title: "SSC",
    description: "Passed Secondary School Certificate examination.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
  {
    period: "1997",
    title: "Born",
    description: "The journey began.",
    projectHref: "/projects",
    ctaText: "View Projects",
  },
];

const defaultImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";

function EventContent({
  event,
  href,
  align = "left",
}: {
  event: TimelineEvent;
  href: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`flex flex-col justify-center h-full ${isRight ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="text-teal-500 dark:text-teal-400 font-semibold text-sm md:text-base mb-1">
        {event.period}
      </span>
      <h3 className="text-xl md:text-2xl font-bold dark:text-white text-zinc-900 mb-2">
        {event.title}
      </h3>
      {event.description && (
        <p className="text-sm md:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-4">
          {event.description}
        </p>
      )}
      <Link
        href={href}
        className="inline-flex items-center gap-3 w-fit font-bold text-black dark:text-white text-base hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 rounded"
      >
        <span>{event.ctaText ?? "View Projects"}</span>
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-black dark:border-white flex-shrink-0"
          aria-hidden
        >
          <BiRightArrowAlt className="w-4 h-4 text-black dark:text-white" aria-hidden />
        </span>
      </Link>
    </div>
  );
}

function EventImage({
  src,
  href,
  alt,
}: {
  src: string;
  href: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="block relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      aria-label={`View projects for ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 45vw"
        unoptimized={src.startsWith("http")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </Link>
  );
}

function EventImagePlaceholder({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-gradient-to-br from-teal-500/10 to-blue-500/10 dark:from-teal-500/20 dark:to-blue-500/20 shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      aria-label={`View projects for ${title}`}
    >
      <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
        View projects →
      </span>
    </Link>
  );
}

export default function StoryTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const [lineStartTop, setLineStartTop] = useState<number>(0);

  useLayoutEffect(() => {
    const container = timelineContainerRef.current;
    const firstRow = firstRowRef.current;
    if (!container || !firstRow) return;
    const update = () => {
      const top = firstRow.offsetTop + firstRow.offsetHeight / 2;
      setLineStartTop(top);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef as RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const lineFillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const latestEvent = timelineEvents[0];
  const pastEvents = timelineEvents.slice(1);

  return (
    <section className="mt-32 pb-24">
      <div ref={sectionRef}>
        {/* Title + Hero: Latest 2026 — Content LEFT, Image RIGHT, center line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 md:mb-16 text-left max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 text-center md:text-left">
              The Journey of{" "}
              <span className="relative inline-block">
                Nitesh
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-1.5 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:from-transparent dark:via-blue-400 dark:to-transparent"
                  aria-hidden
                />
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div ref={timelineContainerRef} className="relative">
            {/* Central line: starts at first dot (main point), no line above; white track, fill on scroll */}
            <div
              className="absolute left-1/2 bottom-0 w-0.5 -translate-x-1/2 bg-white dark:bg-zinc-700 rounded-full shadow-sm"
              style={{ top: lineStartTop }}
              aria-hidden
            />
            <div
              className="absolute left-1/2 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden rounded-full"
              style={{ top: lineStartTop }}
              aria-hidden
            >
              <motion.div style={{ height: lineFillHeight }} aria-hidden>
                <div className="w-full h-full rounded-full bg-teal-500 dark:bg-teal-400" />
              </motion.div>
            </div>

            {/* Hero: 2026 — Left: content, Right: image (first main point) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                ref={firstRowRef}
                className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-12 py-8 md:py-12 min-h-[320px]"
              >
                <div className="flex-1 md:pr-8 flex flex-col justify-center order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <EventContent
                      event={latestEvent}
                      href={latestEvent.projectHref ?? "/projects"}
                      align="left"
                    />
                  </motion.div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-4 h-4 rounded-full bg-teal-500 dark:bg-teal-400 ring-4 ring-white dark:ring-zinc-900 shadow-lg" />

                <div className="flex-1 md:pl-8 order-1 md:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <EventImage
                      src={latestEvent.image ?? defaultImage}
                      href={latestEvent.projectHref ?? "/projects"}
                      alt={latestEvent.title}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Past events: image LEFT, content RIGHT (alternating) */}
            {pastEvents.map((event, index) => {
              const imageLeft = index % 2 === 0;
              const hasImage = !!event.image;
              const imgSrc = event.image ?? defaultImage;
              const href = event.projectHref ?? "/projects";

              return (
                <motion.div
                  key={`${event.period}-${event.title}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-12 py-8 md:py-12 min-h-[280px]">
                    {/* Left half */}
                    <div className="flex-1 flex flex-col justify-center md:pr-8 order-2 md:order-1">
                      {imageLeft ? (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          {hasImage ? (
                            <EventImage
                              src={imgSrc}
                              href={href}
                              alt={event.title}
                            />
                          ) : (
                            <EventImagePlaceholder href={href} title={event.title} />
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <EventContent event={event} href={href} align="left" />
                        </motion.div>
                      )}
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-3 h-3 rounded-full bg-teal-400 dark:bg-teal-500 ring-4 ring-white dark:ring-zinc-900 shadow" />

                    {/* Right half */}
                    <div className="flex-1 flex flex-col justify-center md:pl-8 order-1 md:order-2">
                      {imageLeft ? (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          <EventContent event={event} href={href} align="right" />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                        >
                          {hasImage ? (
                            <EventImage
                              src={imgSrc}
                              href={href}
                              alt={event.title}
                            />
                          ) : (
                            <EventImagePlaceholder href={href} title={event.title} />
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
