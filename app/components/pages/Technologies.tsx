"use client";
import { motion } from "framer-motion";

type TechnologyCategory = {
  title: string;
  technologies: string[];
  gradient: string;
};

const technologyCategories: TechnologyCategory[] = [
  {
    title: "Backend Development",
    technologies: ["Node.js", "Express.js", "Sails.js", "Ruby on Rails", "Python"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Development",
    technologies: ["React.js", "Next.js", "Angular.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "Sass"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database Management",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "Redis", "RabbitMQ"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Cloud DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "Nginx", "Apache", "Ansible", "Teleport", "Jenkins"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Testing / Debugging",
    technologies: ["Mocha.js", "Chai.js", "Test Driven Development (TDD)"],
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    title: "SaaS Product Development",
    technologies: [
      "SaaS Architecture",
      "Microservices",
      "API Design & Integration",
      "Scalability & Performance Optimization",
      "Multi-Tenancy Solutions",
      "User Authentication & Authorization",
      "Subscription Management",
      "Payment Gateway Integration",
      "Customer Feedback Systems",
      "Data Security & Compliance",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Industrial IoT",
    technologies: [
      "IoT Architecture",
      "Sensor Integration",
      "MODBUS Protocol",
      "Edge Computing",
      "Real-time Data Processing",
      "InfluxDB for Time-Series Data",
      "Device Management & Monitoring",
      "MQTT Protocol",
      "Data Visualization for IIoT",
      "Predictive Maintenance Systems",
      "Industrial Automation",
      "SCADA Systems",
    ],
    gradient: "from-teal-500 to-blue-500",
  },
  {
    title: "Project Management Collaboration",
    technologies: [
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Mentoring",
      "Team Building",
      "Cross-functional Team Leadership",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Solution Architecture",
    technologies: [
      "System Architecture",
      "API Integration",
      "Cloud Infrastructure",
      "Automation",
      "Technical Documentation",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Business Development",
    technologies: [
      "Client Relations",
      "Stakeholder Management",
      "Requirement Gathering",
      "Salesforce Commerce Cloud",
      "Business Strategy",
      "Strategic Partnerships",
      "Market Analysis",
      "Sales & Marketing Alignment",
      "Lead Generation",
      "Networking",
      "Product Demos & POCs",
      "Customer Relationship Management (CRM)",
      "Negotiation & Deal Closing",
    ],
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function Technologies() {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 text-center">
          <h2 className="font-incognito text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-zinc-900 mb-2">
            Technologies
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {technologyCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="group relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 from-white to-zinc-50 border dark:border-zinc-700 border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}></div>
                
                {/* Background glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}></div>
                
                {/* Category title */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold dark:text-white text-zinc-900 mb-1">
                    {category.title}
                  </h3>
                  <div className={`w-16 h-0.5 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.02 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <div className={`relative px-4 py-2.5 rounded-lg bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-default overflow-hidden`}>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative z-10">{tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

