import Image from "next/image";
import { Metadata } from "next";
import { workProjects, WorkProjectType } from "@/app/data/work-projects";
import { Slide } from "@/app/animation/Slide";
import RefLink from "@/app/components/shared/RefLink";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = workProjects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://niteshsolanki.com/projects/work/${project.slug}`),
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `https://niteshsolanki.com/projects/work/${project.slug}`,
    },
  };
}

export default function WorkProjectDetail({ params }: Props) {
  const project: WorkProjectType | undefined = workProjects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto lg:px-16 px-8">
        <Slide>
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="dark:text-zinc-400 text-zinc-600">
              The project you're looking for doesn't exist.
            </p>
          </div>
        </Slide>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                >
                  <BiLinkExternal aria-hidden="true" />
                  Case Study
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                >
                  <BiLinkExternal aria-hidden="true" />
                  Live URL
                </a>
              )}
            </div>
          </div>

          {project.coverImage && project.coverImage !== "/project.png" && (
            <div className="relative w-full h-64 sm:h-80 md:h-96 pt-[52.5%] mb-8">
              <Image
                className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
                fill
                src={project.coverImage}
                alt={project.name}
                quality={100}
              />
            </div>
          )}

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <p className="text-lg mb-4">{project.description}</p>
            <p className="mb-6">{project.fullDescription}</p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">
                  Project Details
                </h4>
                <div className="space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Type:</span>{" "}
                    {project.type === "work" ? "Work Project" : "Side Project"}
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Industry:</span>{" "}
                    {project.industry}
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Technology:</span>{" "}
                    {project.technology.join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Role:</span>{" "}
                    {project.role}
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Company:</span>{" "}
                    {project.company}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">
                  Key Outcomes
                </h4>
                <ul className="space-y-2 text-sm dark:text-zinc-400 text-zinc-600">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index}>✓ {outcome}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">
                Key Features
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm dark:text-zinc-400 text-zinc-600">
                {project.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Slide>
    </main>
  );
}

