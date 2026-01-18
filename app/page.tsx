import Image from "next/image";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import ContributionGraph from "./components/pages/GithubCalendarComponent";
import StoryTimeline from "./components/pages/StoryTimeline";
import Technologies from "./components/pages/Technologies";
import WorkProjects from "./components/pages/WorkProjects";
import AnimatedText from "./components/shared/AnimatedText";
import AnimatedHand from "./components/shared/AnimatedHand";

export default async function Home() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (  
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      {/* Profile Section - Shows first on all screens */}
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-between justify-between gap-x-12 mb-16 min-h-[60vh] lg:min-h-[70vh]">
        <Slide>
          <div className="flex-shrink-0 w-full flex justify-center xl:justify-start mb-8 xl:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 dark:bg-zinc-300 dark:border-2 dark:border-zinc-200 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 p-1">
                  <Image
                    src="/Nitesh Photo.JPG"
                    alt={profile?.fullName || "Nitesh Solanki"}
                    width={400}
                    height={400}
                    className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <div key={profile?._id} className="lg:max-w-2xl max-w-2xl xl:flex-1">
          <Slide delay={0.1}>
            <h2 className="font-incognito font-bold text-2xl sm:text-3xl md:text-4xl mb-4 dark:text-white text-zinc-900 tracking-tight">
              Hello,  I&apos;m {profile?.fullName ?? "Nitesh Solanki"} <AnimatedHand />
            </h2>
            <AnimatedText />
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mt-4 text-justify">
              {profile?.shortBio 
                ? (() => {
                    const bio = profile.shortBio;
                    const breakPoint = bio.indexOf('I’m a Senior Full-Stack Developer');
                    if (breakPoint > 0) {
                      return (
                        <>
                          {bio.substring(0, breakPoint).trim()}
                          <br />
                          {bio.substring(breakPoint).trim()}
                        </>
                      );
                    }
                    return bio;
                  })()
                : "Short bio description"}
            </p>

            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mt-4 text-justify">
              {profile?.shortBio2 
                ? (() => {
                    const bio = profile.shortBio2;
                    const breakPoint = bio.indexOf('I’m a Senior Full-Stack Developer');
                    if (breakPoint > 0) {
                      return (
                        <>
                          {bio.substring(0, breakPoint).trim()}
                          <br />
                          {bio.substring(breakPoint).trim()}
                        </>
                      );
                    }
                    return bio;
                  })()
                : "Short bio description 2"}
            </p>          </Slide>
          <Slide delay={0.2}>
            <Social type="social" />
          </Slide>
        </div>
      </section>

      {/* Below sections - Appear when scrolling down */}
      <ContributionGraph />
      <Job />
      <StoryTimeline />
      <Technologies />
      <WorkProjects />
    </main>
  );
}
