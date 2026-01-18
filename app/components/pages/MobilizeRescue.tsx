import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";

export default function MobilizeRescue() {
  return (
    <section className="mobilize-rescue-section relative z-0 mt-32">
      <div className="main-content-wrapper flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative">
        <div className="content flex-1 max-w-2xl">
          <Slide delay={0.18}>
            <h3 className="font-incognito text-3xl sm:text-4xl mb-4 font-bold tracking-tight dark:text-white text-zinc-900">
              Mobilize Rescue - Intelligent Emergency Response System
            </h3>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Building intelligent workflows for real-time emergency care. A healthcare technology solution that transforms first aid kits into intelligent, app-powered emergency response systems.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Mobilize Rescue partnered with Solvative to create a digital-first experience that guides anyone—regardless of medical training—through high-stress rescue situations with confidence. We developed a suite of native mobile applications and backend systems that delivered dynamic, condition-based rescue workflows, real-time inventory tracking, and automated supply replenishment.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              The solution replaced static paper charts with intuitive, guided workflows that assist users step-by-step in real time, ensuring every kit stayed fully stocked and ready for use.
            </p>
            
            <div className="mt-6 space-y-3">
              <div>
                <h4 className="font-semibold dark:text-white text-zinc-900 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 dark:text-zinc-400 text-zinc-600 text-sm">
                  <li>Digital-First Emergency Response Workflows</li>
                  <li>Real-Time Inventory Tracking & Management</li>
                  <li>Automated Supply Replenishment</li>
                  <li>Native Mobile Applications (Phone & Tablet)</li>
                  <li>Dynamic, Condition-Based Rescue Paths</li>
                  <li>Scalable Architecture for Multiple Kit Types</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <RefLink
                  href="https://solvative.com/case-study/mobilize-rescue"
                  className="inline-block font-semibold text-base dark:text-blue-400 text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:underline underline-offset-4 decoration-2 hover:decoration-blue-500 dark:hover:decoration-blue-400"
                >
                  View Case Study →
                </RefLink>
              </div>
            </div>
          </Slide>
        </div>
        
        {/* Right Side - Project Details Card and Images */}
        <div className="right-side w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[500px] flex flex-col gap-8">
          {/* Project Details Card */}
          <div className="project-details w-full hidden lg:block">
            <Slide delay={0.2}>
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">Project Impact</h4>
                <div className="space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Industry:</span> Healthcare & Medical
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Technology:</span> Native Mobile Apps, Backend Systems, Real-time Workflows
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Company:</span> Solvative (now part of ZOLL Medical)
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-300 dark:border-zinc-700">
                  <h5 className="font-semibold mb-2 dark:text-white text-zinc-900">Outcomes:</h5>
                  <ul className="space-y-2 text-sm dark:text-zinc-400 text-zinc-600">
                    <li>✓ Streamlined emergency response workflows</li>
                    <li>✓ Real-time inventory visibility</li>
                    <li>✓ Higher confidence and usability for bystanders</li>
                    <li>✓ Scalable digital ecosystem</li>
                    <li>✓ Increased adoption and sales</li>
                  </ul>
                </div>
              </div>
            </Slide>
          </div>

          {/* Showcase Container - Images below Project Impact */}
          <div className="showcase relative w-full h-[400px] lg:h-[500px] hidden lg:block" style={{ overflow: 'visible' }}>
            {/* Mobile App Interface - Background card */}
            <div className="mobilize-card-1 absolute top-[120px] left-[50px] w-[450px] h-[300px] z-[1] transition-transform duration-300 hover:scale-110 hover:-translate-y-4 hover:rotate-0 scale-100 rotate-[4deg] shadow-lg rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <RefLink href="https://solvative.com/case-study/mobilize-rescue" className="block w-full h-full">
                <Image
                  src="/mobilize-app.png"
                  alt="Mobilize Rescue Mobile App Interface"
                  width={450}
                  height={300}
                  className="w-full h-full object-contain rounded-lg"
                />
              </RefLink>
            </div>

            {/* Tablet Interface - Foreground card */}
            <div className="mobilize-card-2 absolute -top-[40px] left-[150px] w-[380px] h-[280px] z-[2] transition-transform duration-300 hover:scale-110 hover:-translate-y-4 shadow-lg rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <RefLink href="https://solvative.com/case-study/mobilize-rescue" className="block w-full h-full">
                <Image
                  src="/mobilize-tablet.png"
                  alt="Mobilize Rescue Tablet Interface"
                  width={380}
                  height={280}
                  className="w-full h-full object-contain rounded-lg"
                />
              </RefLink>
            </div>
          </div>
        </div>

        {/* Mobile Project Details */}
        <div className="project-details-mobile w-full lg:hidden mt-8">
          <Slide delay={0.2}>
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">Project Details</h4>
              <div className="space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Industry:</span> Healthcare & Medical
                </div>
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Technology:</span> Native Mobile Apps, Backend Systems, Real-time Workflows
                </div>
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Company:</span> Solvative (now part of ZOLL Medical)
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-300 dark:border-zinc-700">
                <h5 className="font-semibold mb-2 dark:text-white text-zinc-900">Key Outcomes:</h5>
                <ul className="space-y-2 text-sm dark:text-zinc-400 text-zinc-600">
                  <li>✓ Streamlined emergency response</li>
                  <li>✓ Real-time inventory tracking</li>
                  <li>✓ Higher user confidence</li>
                  <li>✓ Scalable digital ecosystem</li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>

        {/* Mobile Showcase - Stacked layout for smaller screens */}
        <div className="showcase-mobile relative w-full h-auto lg:hidden mt-8 pb-8">
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <div className="mobilize-card-2 w-full max-w-[350px] h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <RefLink href="https://solvative.com/case-study/mobilize-rescue" className="block w-full h-full">
                <Image
                  src="/mobilize-tablet.png"
                  alt="Mobilize Rescue Tablet Interface"
                  width={380}
                  height={280}
                  className="w-full h-full object-contain rounded-lg"
                />
              </RefLink>
            </div>
            <div className="mobilize-card-1 w-full max-w-[400px] h-auto transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <RefLink href="https://solvative.com/case-study/mobilize-rescue" className="block w-full h-full">
                <Image
                  src="/mobilize-app.png"
                  alt="Mobilize Rescue Mobile App Interface"
                  width={450}
                  height={300}
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




