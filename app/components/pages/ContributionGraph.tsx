"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { github } from "@/app/data/contribution-graph-theme";
import { useState, useEffect } from "react";
import YearButton from "../shared/YearButton";
import { getGitHubYears } from "@/app/utils/calculate-years";
import EmptyState from "../shared/EmptyState";
import { IoIosAnalytics } from "react-icons/io";

// Hook to get responsive block size based on screen width
function useResponsiveBlockSize() {
  const [blockSize, setBlockSize] = useState(13);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const updateBlockSize = () => {
      if (window.innerWidth < 640) {
        // Mobile: smaller blocks
        setBlockSize(8);
      } else if (window.innerWidth < 768) {
        // Small tablets
        setBlockSize(10);
      } else if (window.innerWidth < 1024) {
        // Tablets
        setBlockSize(11);
      } else {
        // Desktop
        setBlockSize(13);
      }
    };

    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  return blockSize;
}

export default function ContributionGraph() {
  const today = new Date().getFullYear();
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    today
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const blockSize = useResponsiveBlockSize();
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  // Set theme only after rendering to avoid mismatch between client and server
  // https://github.com/vercel/next.js/issues/10608#issuecomment-589073831
  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        icon={<IoIosAnalytics />}
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      <div className="flex xl:flex-row flex-col gap-4 sm:gap-6 items-center justify-center w-full max-w-full">
        <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg max-w-full overflow-x-auto hover:shadow-xl transition-shadow duration-300">
          <div className="min-w-fit">
            <GitHubCalendar
              username={username}
              theme={github}
              colorScheme={serverTheme}
              blockSize={blockSize}
              year={calendarYear}
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex justify-center xl:flex-col flex-row flex-wrap gap-2 w-full xl:w-auto">
          {/* Display only the last five years */}
          {years.slice(0, 5).map((year) => (
            <YearButton
              key={year}
              year={year}
              currentYear={calendarYear ?? today}
              onClick={() =>
                setCalendarYear(year === calendarYear ? undefined : year)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
