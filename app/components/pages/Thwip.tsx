import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";

export default function Thwip() {
  return (
    <section className="thwip-section relative z-0 mt-32">
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
              Thwip
            </h3>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Your portable soundboard, available for iOS and watchOS.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              What started as a simple soundboard app for Apple Watch, evolved motivated by playtime with my son — a way to have custom boards for all the Mario sound effects, animal sounds, and quick audio recordings of him saying cute things, that I know won&apos;t last long enough.
            </p>
            <div className="mt-6 space-y-2">
              <RefLink
                href="https://apps.apple.com/iq/app/thwip-soundboard/id6466668240"
                className="inline-block font-medium text-[#f0d8fd] hover:text-[#8700f3] dark:text-[#f0d8fd] dark:hover:text-[#8700f3] transition-colors relative"
              >
                Download on the App Store →
              </RefLink>
              <br />
              <RefLink
                href="https://thwip.app"
                className="inline-block font-medium text-[#f0d8fd] hover:text-[#8700f3] dark:text-[#f0d8fd] dark:hover:text-[#8700f3] transition-colors relative"
              >
                Marketing site →
              </RefLink>
            </div>
          </Slide>
        </div>
        
        {/* Showcase Container - positioned relative to main-content-wrapper */}
        <div className="showcase relative w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[650px] xl:min-w-[750px] h-[600px] lg:h-[600px] hidden lg:block" style={{ overflow: 'visible' }}>
          {/* App Icon - Centrally positioned, highest z-index */}
          <div className="thwip-card-1 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[256px] h-[256px] rounded-[22%] z-[99] transition-transform duration-300 hover:scale-100 hover:-translate-y-[calc(50%+16px)] hover:translate-x-[-50%] scale-[0.8] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)]">
            <RefLink href="https://thwip.app" className="block w-full h-full">
              <Image
                src="/thwip-app-icon.png"
                alt="Thwip App Icon"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-[22%]"
              />
            </RefLink>
          </div>

          {/* Demo 1 - Top left area */}
          <div className="thwip-card-2 absolute top-[5%] left-[15%] w-[400px] h-[260px] z-[3] transition-transform duration-300 hover:scale-100 hover:-translate-y-4 hover:rotate-0 scale-[0.8] rotate-[6deg] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)] rounded-lg overflow-hidden">
            <RefLink href="https://thwip.app" className="block w-full h-full">
              <Image
                src="/thwip-demo-1.jpg"
                alt="Thwip Demo 1"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </RefLink>
          </div>

          {/* Demo 2 - Bottom left area */}
          <div className="thwip-card-3 absolute top-[55%] left-[20%] w-[400px] h-[260px] z-[2] transition-transform duration-300 hover:scale-100 hover:-translate-y-4 hover:rotate-0 scale-[0.8] -rotate-[8deg] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)] rounded-lg overflow-hidden">
            <RefLink href="https://thwip.app" className="block w-full h-full">
              <Image
                src="/thwip-demo-2.jpg"
                alt="Thwip Demo 2"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </RefLink>
          </div>

          {/* Demo 3 - Top right area */}
          <div className="thwip-card-4 absolute top-[10%] left-[-15%] w-[400px] h-[260px] z-[1] transition-transform duration-300 hover:scale-100 hover:-translate-y-4 hover:rotate-0 scale-[0.8] rotate-[4deg] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)] rounded-lg overflow-hidden">
            <RefLink href="https://thwip.app" className="block w-full h-full">
              <Image
                src="/thwip-demo-3.jpg"
                alt="Thwip Demo 3"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </RefLink>
          </div>

          {/* Demo 4 - Bottom right area */}
          <div className="thwip-card-5 absolute top-[50%] left-[-15%] w-[400px] h-[260px] z-[1] transition-transform duration-300 hover:scale-100 hover:-translate-y-4 hover:rotate-0 scale-[0.8] -rotate-[16deg] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)] rounded-lg overflow-hidden">
            <RefLink href="https://thwip.app" className="block w-full h-full">
              <Image
                src="/thwip-demo-4.jpg"
                alt="Thwip Demo 4"
                width={400}
                height={260}
                className="w-full h-full object-cover rounded-lg"
              />
            </RefLink>
          </div>

          {/* Video Card - Top right */}
          <div className="thwip-video-card absolute top-[40%] right-[-8%] w-auto h-auto overflow-hidden z-[9] transition-transform duration-300 hover:scale-100 hover:-translate-y-4 hover:rotate-0 scale-[0.8] rotate-[6deg] shadow-[0px_4px_24px_2px_rgba(14,30,37,0.16)] rounded-2xl">
            <RefLink href="/thwip-video.mp4" className="block">
              <video
                preload="auto"
                playsInline
                muted
                autoPlay
                loop
                className="relative rounded-2xl w-[224px]"
              >
                <source src="/thwip-video.mp4" type="video/mp4" />
              </video>
            </RefLink>
          </div>
        </div>

        {/* Mobile Showcase - Stacked layout for smaller screens */}
        <div className="showcase-mobile relative w-full h-auto lg:hidden mt-8 pb-8">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="thwip-card-1 col-span-2 mx-auto w-[200px] h-[200px] rounded-[22%] transition-transform duration-300 hover:scale-105 shadow-lg">
              <RefLink href="https://thwip.app" className="block w-full h-full">
                <Image
                  src="/thwip-app-icon.png"
                  alt="Thwip App Icon"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-[22%]"
                />
              </RefLink>
            </div>
            <div className="thwip-card-2 w-full h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://thwip.app" className="block w-full h-full">
                <Image
                  src="/thwip-demo-1.jpg"
                  alt="Thwip Demo 1"
                  width={400}
                  height={260}
                  className="w-full h-full object-cover rounded-lg"
                />
              </RefLink>
            </div>
            <div className="thwip-card-3 w-full h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://thwip.app" className="block w-full h-full">
                <Image
                  src="/thwip-demo-2.jpg"
                  alt="Thwip Demo 2"
                  width={400}
                  height={260}
                  className="w-full h-full object-cover rounded-lg"
                />
              </RefLink>
            </div>
            <div className="thwip-card-4 w-full h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://thwip.app" className="block w-full h-full">
                <Image
                  src="/thwip-demo-3.jpg"
                  alt="Thwip Demo 3"
                  width={400}
                  height={260}
                  className="w-full h-full object-cover rounded-lg"
                />
              </RefLink>
            </div>
            <div className="thwip-card-5 w-full h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden">
              <RefLink href="https://thwip.app" className="block w-full h-full">
                <Image
                  src="/thwip-demo-4.jpg"
                  alt="Thwip Demo 4"
                  width={400}
                  height={260}
                  className="w-full h-full object-cover rounded-lg"
                />
              </RefLink>
            </div>
            <div className="thwip-video-card col-span-2 mx-auto w-[200px] transition-transform duration-300 hover:scale-105 shadow-lg rounded-2xl overflow-hidden">
              <RefLink href="/thwip-video.mp4" className="block">
                <video
                  preload="auto"
                  playsInline
                  muted
                  autoPlay
                  loop
                  className="relative rounded-2xl w-full"
                >
                  <source src="/thwip-video.mp4" type="video/mp4" />
                </video>
              </RefLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




