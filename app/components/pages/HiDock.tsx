import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";

export default function HiDock() {
  return (
    <section className="hidock-section relative z-0 mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Side Project
          </h2>
        </div>
      </Slide>

      <div className="main-content-wrapper flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative" style={{ overflow: 'visible' }}>
        <div className="content flex-1 max-w-2xl">
          <Slide delay={0.18}>
            <h3 className="font-incognito text-3xl sm:text-4xl mb-4 font-bold tracking-tight dark:text-white text-zinc-900">
              HiDock
            </h3>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              A Mac app that lets you set custom Dock settings for when on different displays.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I wanted to have my Dock visible when connected to my large external display, but hidden and smaller when on my laptop, I couldn&apos;t believe that there was no way to do that so I built this.
            </p>
            <div className="mt-6">
              <RefLink
                href="https://hidock.app"
                className="inline-block font-medium text-white hover:opacity-80 transition-opacity relative"
              >
                Download for free →
              </RefLink>
            </div>
          </Slide>
        </div>
        
        {/* Showcase Container - positioned relative to main-content-wrapper */}
        <div className="showcase relative w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[600px] xl:min-w-[700px] h-[400px] lg:h-[500px] hidden lg:block" style={{ overflow: 'visible' }}>
          {/* Screenshot - Background card */}
          <div className="hidock-card-1 absolute top-[120px] left-[100px] w-[500px] h-[316px] z-[1] transition-transform duration-300 hover:scale-110 hover:-translate-y-4 hover:rotate-0 scale-100 rotate-[4deg] shadow-lg rounded-lg overflow-hidden">
            <RefLink href="https://hidock.app" className="block w-full h-full">
              <Image
                src="/hidock-screenshot.png"
                alt="HiDock Screenshot"
                width={500}
                height={316}
                className="w-full h-full object-contain rounded-lg"
              />
            </RefLink>
          </div>

          {/* App Icon - Foreground card */}
          <div className="hidock-card-2 absolute -top-[40px] left-[200px] w-[320px] h-[320px] z-[2] transition-transform duration-300 hover:scale-110 hover:-translate-y-4 shadow-lg rounded-lg overflow-hidden">
            <RefLink href="https://hidock.app" className="block w-full h-full">
              <Image
                src="/hidock-app-icon.png"
                alt="HiDock App Icon"
                width={320}
                height={320}
                className="w-full h-full object-contain rounded-lg"
              />
            </RefLink>
          </div>
        </div>

        {/* Mobile Showcase - Stacked layout for smaller screens */}
        <div className="showcase-mobile relative w-full h-auto lg:hidden mt-8 pb-8">
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <div className="hidock-card-2 w-[200px] h-[200px] transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://hidock.app" className="block w-full h-full">
                <Image
                  src="/hidock-app-icon.png"
                  alt="HiDock App Icon"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain rounded-lg"
                />
              </RefLink>
            </div>
            <div className="hidock-card-1 w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://hidock.app" className="block w-full h-full">
                <Image
                  src="/hidock-screenshot.png"
                  alt="HiDock Screenshot"
                  width={500}
                  height={316}
                  className="w-full h-full object-contain rounded-lg"
                />
              </RefLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




