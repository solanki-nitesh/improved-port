import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";

export default function PMC() {
  return (
    <section className="pmc-section relative z-0 mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Project
          </h2>
        </div>
      </Slide>

      <div className="main-content-wrapper flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative">
        <div className="content flex-1 max-w-2xl">
          <Slide delay={0.18}>
            <h3 className="font-incognito text-3xl sm:text-4xl mb-4 font-bold tracking-tight dark:text-white text-zinc-900">
              Paul Mueller Company - MilkSecure IIoT Platform
            </h3>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              A next-generation IIoT control platform designed for connected dairy operations, combining cloud connectivity, automation, and intuitive user experience.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I started my journey as a junior developer in 2019 with this project at Solvative. Paul Mueller Company partnered with us to modernize their existing HiPerForm™ III cooling and wash control system into a future-ready IIoT platform called MilkSecure™.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              The solution transformed how dairies operate by providing real-time monitoring, cloud analytics, automated alerts, and remote access capabilities replacing manual paper-based logging with intelligent digital systems.
            </p>
            <p className="mt-4 dark:text-zinc-400 text-zinc-600 leading-relaxed">
              We worked extensively on the hardware integration, implementing multiple sections that continuously receive data from sensors. This constant stream of sensor data is securely stored in our cloud backup system, ensuring reliable data persistence and accessibility. The platform features a comprehensive alert system that monitors all critical parameters and notifies operators in real-time. Built with MongoDB, React, SQLite, Node.js, and Sails.js, the system enables users to download detailed reports for any time period daily, monthly, or yearly—providing complete visibility into dairy operations and compliance tracking.
            </p>
            
            <div className="mt-6 space-y-3">
              <div>
                <h4 className="font-semibold dark:text-white text-zinc-900 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 dark:text-zinc-400 text-zinc-600 text-sm">
                  <li>Hardware Integration with Multiple Sensor Sections</li>
                  <li>Real-time Sensor Data Collection & Cloud Backup</li>
                  <li>Comprehensive Alert System for Critical Parameters</li>
                  <li>Touchscreen Interface with Intuitive Navigation</li>
                  <li>Electronic Time & Temperature Recorder</li>
                  <li>Report Generation & Download (Daily, Monthly, Yearly)</li>
                  <li>Remote Access from Any Device</li>
                  <li>Built-In Robotic Interface Integration</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <RefLink
                  href="https://solvative.com/case-study/pmc"
                  className="inline-block font-semibold text-base dark:text-blue-400 text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:underline underline-offset-4 decoration-2 hover:decoration-blue-500 dark:hover:decoration-blue-400"
                >
                  View Case Study →
                </RefLink>
              </div>
            </div>
          </Slide>
        </div>
        
        {/* Right Side - Project Details Card */}
        <div className="right-side w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[400px]">
          {/* Project Details Card */}
          <div className="project-details w-full hidden lg:block">
            <Slide delay={0.2}>
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">Project Impact</h4>
                <div className="space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Industry:</span> IIoT / Dairy Operations
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Technology:</span> React, Node, Sails, MongoDB, SQLite, <br></br> AWS, Cloud Analytics
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Role:</span> Junior Developer (2019)
                  </div>
                  <div>
                    <span className="font-semibold dark:text-white text-zinc-900">Company:</span> Solvative
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-300 dark:border-zinc-700">
                  <h5 className="font-semibold mb-3 dark:text-white text-zinc-900">Outcomes:</h5>
                  <ul className="space-y-2 text-sm dark:text-zinc-400 text-zinc-600 mb-4">
                    <li>✓ Real-time monitoring of milk temperature and volume</li>
                    <li>✓ Automated alerts for faster response</li>
                    <li>✓ Digital data capture replacing manual logging</li>
                    <li>✓ Remote operation enabling flexibility</li>
                  </ul>
                  
                  {/* Images Section Title */}
                  <h5 className="font-semibold mb-3 mt-4 dark:text-white text-zinc-900">Platform Screenshots:</h5>
                  
                  {/* Larger Images - Grid Layout (3 per row) */}
                  <div className="grid grid-cols-3 gap-3 justify-items-start relative -ml-6 pl-6">
                    <div className="pmc-thumbnail-1 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/hiperform.webp"
                          alt="MilkSecure HiPerForm Platform"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                    <div className="pmc-thumbnail-2 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/cloud.webp"
                          alt="MilkSecure Dashboard"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                    <div className="pmc-thumbnail-3 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/graff.avif"
                          alt="MilkSecure Platform Feature"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                    <div className="pmc-thumbnail-4 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/tank.avif"
                          alt="MilkSecure Analytics"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                    <div className="pmc-thumbnail-5 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/login.png"
                          alt="MilkSecure Login Page"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                    <div className="pmc-thumbnail-6 relative w-[140px] h-[105px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                      <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                        <Image
                          src="/PMC-Phone-Digital.avif"
                          alt="MilkSecure Phone Digital Interface"
                          width={320}
                          height={240}
                          className="w-full h-full object-cover rounded-md group-hover:object-contain"
                        />
                      </RefLink>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Mobile Project Details */}
        <div className="project-details-mobile w-full lg:hidden mt-8">
          <Slide delay={0.2}>
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4 dark:text-white text-zinc-900">Project Details</h4>
              <div className="space-y-3 text-sm dark:text-zinc-400 text-zinc-600">
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Industry:</span> IIoT / Dairy Operations
                </div>
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Technology:</span> MongoDB, React, SQLite, Node.js, Sails.js, AWS, Cloud Analytics
                </div>
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Role:</span> Junior Developer (2019)
                </div>
                <div>
                  <span className="font-semibold dark:text-white text-zinc-900">Company:</span> Solvative
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-zinc-300 dark:border-zinc-700">
                <h5 className="font-semibold mb-3 dark:text-white text-zinc-900">Key Outcomes:</h5>
                <ul className="space-y-2 text-sm dark:text-zinc-400 text-zinc-600 mb-4">
                  <li>✓ Real-time monitoring capabilities</li>
                  <li>✓ Automated alerts system</li>
                  <li>✓ Digital data capture</li>
                  <li>✓ Remote operation access</li>
                </ul>
                
                {/* Images Section Title */}
                <h5 className="font-semibold mb-3 mt-4 dark:text-white text-zinc-900">Platform Screenshots:</h5>
                
                {/* Larger Images - Grid Layout (3 per row) for Mobile */}
                <div className="grid grid-cols-3 gap-3 justify-items-start relative">
                  <div className="pmc-thumbnail-1 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/hiperform.webp"
                        alt="MilkSecure HiPerForm Platform"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                  <div className="pmc-thumbnail-2 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/cloud.webp"
                        alt="MilkSecure Dashboard"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                  <div className="pmc-thumbnail-3 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/graff.avif"
                        alt="MilkSecure Platform Feature"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                  <div className="pmc-thumbnail-4 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/tank.avif"
                        alt="MilkSecure Analytics"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                  <div className="pmc-thumbnail-5 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/login.png"
                        alt="MilkSecure Login Page"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                  <div className="pmc-thumbnail-6 relative w-[100px] h-[75px] rounded-md overflow-visible bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 cursor-pointer transition-all duration-300 hover:scale-[2.5] hover:z-[100] hover:shadow-2xl hover:rounded-lg group origin-center">
                    <RefLink href="https://solvative.com/case-study/pmc" className="block w-full h-full">
                      <Image
                        src="/PMC-Phone-Digital.avif"
                        alt="MilkSecure Phone Digital Interface"
                        width={320}
                        height={240}
                        className="w-full h-full object-cover rounded-md group-hover:object-contain"
                      />
                    </RefLink>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>

      </div>
    </section>
  );
}

