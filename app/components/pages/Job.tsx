import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiBriefcase3Fill } from "react-icons/ri";
import JobCard from "./JobCard";

export default async function Job() {
  const jobs: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  // Sort jobs: running jobs first (no endDate or future endDate), then by startDate descending
  const sortedJobs = [...jobs].sort((a, b) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const aEndDate = a.endDate ? new Date(a.endDate) : null;
    const bEndDate = b.endDate ? new Date(b.endDate) : null;
    
    const aIsRunning = !aEndDate || aEndDate >= today;
    const bIsRunning = !bEndDate || bEndDate >= today;
    
    // If one is running and the other is not, running job comes first
    if (aIsRunning && !bIsRunning) return -1;
    if (!aIsRunning && bIsRunning) return 1;
    
    // Both are running or both are ended, sort by startDate descending (most recent first)
    const aStartDate = new Date(a.startDate);
    const bStartDate = new Date(b.startDate);
    
    return bStartDate.getTime() - aStartDate.getTime();
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-12 text-center">
          <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 mb-2">
            Work Experience
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </Slide>

      {sortedJobs.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {sortedJobs.map((job, index) => (
              <JobCard key={job._id} job={job} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Work Experience Not Provided"
          message="We could not find any work experience at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
