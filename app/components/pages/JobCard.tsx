"use client";
import Image from "next/image";
import type { JobType } from "@/types";
import { formatDate, calculateDuration } from "../../utils/date";
import RefLink from "../shared/RefLink";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function JobCard({ job, index }: { job: JobType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="group relative">
        {/* Glowing border effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
        
        {/* Main card */}
        <div className="relative dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 bg-gradient-to-br from-white to-zinc-50 border dark:border-zinc-700 border-zinc-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
          
          <div className="flex flex-col md:flex-row gap-6 relative z-10">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <RefLink
                href={job.url}
                className="group/logo block"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl dark:bg-zinc-800 bg-zinc-100 border-2 dark:border-zinc-700 border-zinc-200 p-3 shadow-lg group-hover/logo:shadow-xl transition-all duration-300">
                      <Image
                        src={job.logo}
                        className="object-contain w-full h-full duration-300"
                        alt={`${job.name} logo`}
                        width={80}
                        height={80}
                      />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </motion.div>
              </RefLink>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-zinc-900 mb-1">
                    {job.name}
                  </h3>
                  <p className="text-lg dark:text-zinc-300 text-zinc-700 font-medium">
                    {job.jobTitle}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <time className="text-sm font-semibold dark:text-blue-400 text-blue-600 tracking-widest uppercase whitespace-nowrap">
                    {formatDate(job.startDate)} -{" "}
                    {job.endDate ? (
                      formatDate(job.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  <span className="text-xs dark:text-zinc-500 text-zinc-500 font-medium">
                    {calculateDuration(job.startDate, job.endDate)}
                  </span>
                </div>
              </div>
              
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Client Assignment */}
              {job.clientAssignment?.clientName && (
                <div className="mt-6 pt-6 border-t dark:border-zinc-700 border-zinc-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-sm font-semibold dark:text-zinc-300 text-zinc-700 uppercase tracking-wide">
                      Client Assignment
                    </p>
                  </div>
                  <div className="flex items-start gap-4 pl-3">
                    {job.clientAssignment.clientLogo && (
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 p-2 shadow-md">
                          <Image
                            src={job.clientAssignment.clientLogo}
                            className="object-contain w-full h-full"
                            alt={`${job.clientAssignment.clientName} logo`}
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold dark:text-white text-zinc-900 mb-1">
                        {job.clientAssignment.clientName}
                      </h4>
                      {job.clientAssignment.clientRole && (
                        <p className="text-sm dark:text-zinc-300 text-zinc-700 font-medium mb-2">
                          {job.clientAssignment.clientRole}
                        </p>
                      )}
                      {(job.clientAssignment.clientStartDate || job.clientAssignment.clientEndDate) && (
                        <time className="text-xs font-semibold dark:text-blue-400 text-blue-600 tracking-widest uppercase block mb-2">
                          {job.clientAssignment.clientStartDate ? formatDate(job.clientAssignment.clientStartDate) : ""} -{" "}
                          {job.clientAssignment.clientEndDate ? (
                            formatDate(job.clientAssignment.clientEndDate)
                          ) : (
                            <span className="dark:text-primary-color text-tertiary-color">
                              Present
                            </span>
                          )}
                        </time>
                      )}
                      {job.clientAssignment.clientProject && (
                        <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                          {job.clientAssignment.clientProject}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

