"use client";
import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  description?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Full Stack Lead + Technical Lead + Gen AI Developer",
  },
  {
    year: "2024",
    title: "Full Stack Lead + DevOps Lead",
  },
  {
    year: "2023",
    title: "Senior Full Stack Developer",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
  },
  {
    year: "2021",
    title: "Full Stack Developer + Intern Mentor",
  },
  {
    year: "2020",
    title: "Full Stack Developer",
  },
  {
    year: "July 2019",
    title: "Junior Full Stack Developer",
    description: "Promoted as Junior Full Stack Developer",
  },
  {
    year: "Jan 2019",
    title: "Full Stack Intern",
    description: "Joined Solvative as Full Stack Intern (back then it was called Quark Studios)",
  },
  {
    year: "End of 2018",
    title: "Placement Coordinator",
    description: "Joined as Placement Coordinator in LD College of Engineering",
  },
  {
    year: "May 2018 - Jun 2018",
    title: "Internship Trainee",
    description: "Bhaskaracharya Institute For Space Applications and Geo-Informatics as Android Application Developer",
  },
  {
    year: "2017",
    title: "NSS Volunteer",
    description: "Joined as NSS (National Service Scheme) Volunteer and worked as social worker",
  },
  {
    year: "2016 End",
    title: "Bachelor's Degree",
    description: "Joined L.D. College of Engineering for Bachelor's in Information Technology",
  },
  {
    year: "2016",
    title: "Practical Project Development",
    description: "L.E. College Morbi - LE Attendance System in PHP",
  },
  {
    year: "2016",
    title: "Diploma Engineering - Information Technology",
    description: "Gold medalist with 10/10 CGPA",
  },
  {
    year: "2014",
    title: "Industrial Training Institute (ITI)",
    description: "Training in Basic Computer Course",
  },
  {
    year: "2013",
    title: "Passed SSC",
  },
  {
    year: "1997",
    title: "Born",
    description: "This is when I was born",
  },
];

export default function StoryTimeline() {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 mb-2">
            Story So Far
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Cool zigzag timeline design */}
        <div className="relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative space-y-8">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className={`flex items-center gap-6 ${isEven ? "flex-row" : "flex-row-reverse md:flex-row-reverse"}`}>
                    {/* Year with cool design */}
                    <div className="flex-shrink-0 w-24 md:w-32">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-lg shadow-blue-500/50 flex items-center justify-center transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                            <span className="text-white font-bold text-sm md:text-base text-center leading-tight">
                              {event.year}
                            </span>
                          </div>
                        </motion.div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl -z-10"></div>
                      </div>
                    </div>

                    {/* Connecting line */}
                    <div className="flex-1 hidden md:block">
                      <div className={`h-0.5 bg-gradient-to-r ${
                        isEven 
                          ? "from-blue-500 via-purple-500 to-transparent" 
                          : "from-transparent via-purple-500 to-blue-500"
                      }`}></div>
                    </div>

                    {/* Content card with cool design */}
                    <div className="flex-1 md:flex-1">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="group relative">
                          {/* Glowing border effect */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                          
                          {/* Main card */}
                          <div className="relative dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 bg-gradient-to-br from-white to-zinc-50 border dark:border-zinc-700 border-zinc-200 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                            
                            <h3 className="text-lg md:text-xl font-bold dark:text-white text-zinc-900 mb-2 relative z-10">
                              {event.title}
                            </h3>
                            {event.description && (
                              <p className="text-sm md:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed relative z-10">
                                {event.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

