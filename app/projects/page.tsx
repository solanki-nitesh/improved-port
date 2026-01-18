import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projectsQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "../components/shared/PageHeading";
import { workProjects } from "../data/work-projects";
import { BiLinkExternal } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Project | Nitesh Solanki",
  metadataBase: new URL("https://niteshsolanki.com/projects"),
  description: "Explore projects built by Nitesh Solanki",
  openGraph: {
    title: "Projects | Nitesh Solanki",
    url: "https://niteshsolanki.com/projects",
    description: "Explore projects built by Nitesh Solanki",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
      />

      {/* Work Projects Section */}
      {workProjects.length > 0 && (
        <div className="mb-16">
          <Slide delay={0.1}>
            <h2 className="font-incognito text-3xl mb-6 font-bold tracking-tight dark:text-white text-zinc-900">
              Work Projects
            </h2>
          </Slide>
          <Slide delay={0.15}>
            <section className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 mb-12">
              {workProjects
                .filter((p) => p.type === "work")
                .map((project) => (
                  <div
                    key={project.id}
                    className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg flex flex-col"
                  >
                    <div className="flex items-start gap-x-4 mb-4">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          width={60}
                          height={60}
                          alt={project.name}
                          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 flex-shrink-0"
                        />
                      ) : (
                        <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl flex-shrink-0">
                          🪴
                        </div>
                      )}
                      <div className="flex-1">
                        <h2 className="text-xl tracking-wide mb-2 font-semibold dark:text-white text-zinc-900">
                          {project.name}
                        </h2>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600 mb-3">
                          {project.tagline}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs px-2 py-1 rounded-md dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700">
                            {project.industry}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-md dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold dark:text-white text-zinc-900 mb-2">
                        Key Points:
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-sm dark:text-zinc-400 text-zinc-600">
                        {project.keyPoints.slice(0, 4).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                        {project.keyPoints.length > 4 && (
                          <li className="text-xs italic">
                            +{project.keyPoints.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={`/projects/work/${project.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2 font-semibold text-sm dark:text-blue-400 text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:underline underline-offset-4 decoration-2 hover:decoration-blue-500 dark:hover:decoration-blue-400"
                      >
                        View More Details
                        <BiLinkExternal className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </section>
          </Slide>
        </div>
      )}

      {/* Side Projects Section */}
      {workProjects.filter((p) => p.type === "side").length > 0 && (
        <div className="mb-16">
          <Slide delay={0.2}>
            <h2 className="font-incognito text-3xl mb-6 font-bold tracking-tight dark:text-white text-zinc-900">
              Side Projects
            </h2>
          </Slide>
          <Slide delay={0.25}>
            <section className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 mb-12">
              {workProjects
                .filter((p) => p.type === "side")
                .map((project) => (
                  <div
                    key={project.id}
                    className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg flex flex-col"
                  >
                    <div className="flex items-start gap-x-4 mb-4">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          width={60}
                          height={60}
                          alt={project.name}
                          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 flex-shrink-0"
                        />
                      ) : (
                        <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl flex-shrink-0">
                          🪴
                        </div>
                      )}
                      <div className="flex-1">
                        <h2 className="text-xl tracking-wide mb-2 font-semibold dark:text-white text-zinc-900">
                          {project.name}
                        </h2>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600 mb-3">
                          {project.tagline}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs px-2 py-1 rounded-md dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold dark:text-white text-zinc-900 mb-2">
                        Key Points:
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-sm dark:text-zinc-400 text-zinc-600">
                        {project.keyPoints.slice(0, 4).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                        {project.keyPoints.length > 4 && (
                          <li className="text-xs italic">
                            +{project.keyPoints.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={`/projects/work/${project.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2 font-semibold text-sm dark:text-blue-400 text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:underline underline-offset-4 decoration-2 hover:decoration-blue-500 dark:hover:decoration-blue-400"
                      >
                        View More Details
                        <BiLinkExternal className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </section>
          </Slide>
        </div>
      )}

      {/* Sanity CMS Projects Section */}
      <div className="mb-16">
        <Slide delay={0.3}>
          <h2 className="font-incognito text-3xl mb-6 font-bold tracking-tight dark:text-white text-zinc-900">
            Other Projects
          </h2>
        </Slide>
        <Slide delay={0.35}>
          {projects.length > 0 ? (
            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
              {projects.map((project) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project._id}
                  className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
                >
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      width={60}
                      height={60}
                      alt={project.name}
                      className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                    />
                  ) : (
                    <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                      🪴
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                    <div className="text-sm dark:text-zinc-400 text-zinc-600">
                      {project.tagline}
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          ) : (
            <EmptyState value="Projects" />
          )}
        </Slide>
      </div>
    </main>
  );
}
