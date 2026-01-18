import ContributionGraph from "./ContributionGraph";
import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section className="mt-16">
      <Slide delay={0.16}>
        <div className="mb-12 text-center">
          <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 mb-2">
            Contribution Graph
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </Slide>
      
      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>

      <Slide delay={0.2}>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-zinc-800/50 bg-zinc-100/50 border dark:border-zinc-700 border-zinc-200">
            <svg
              className="w-4 h-4 dark:text-zinc-400 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm dark:text-zinc-400 text-zinc-600">
              This is my personal GitHub account. Code contributions are regularly pushed through my organization email.
            </p>
          </div>
        </div>
      </Slide>
    </section>
  );
}
