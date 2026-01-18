export type WorkProjectType = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  type: "work" | "side";
  category: string;
  industry: string;
  technology: string[];
  role: string;
  company: string;
  logo?: string;
  coverImage?: string;
  keyPoints: string[];
  outcomes: string[];
  caseStudyUrl?: string;
  projectUrl?: string;
  description: string;
  fullDescription: string;
};

export const workProjects: WorkProjectType[] = [
  {
    id: "pmc",
    name: "Paul Mueller Company - MilkSecure IIoT Platform",
    slug: "pmc-milksecure",
    tagline: "A next-generation IIoT control platform designed for connected dairy operations",
    type: "work",
    category: "IIoT / Dairy Operations",
    industry: "IIoT / Dairy Operations",
    technology: ["React", "Node.js", "Sails.js", "MongoDB", "SQLite", "AWS", "Cloud Analytics"],
    role: "Junior Developer (2019)",
    company: "Solvative",
    logo: "/hiperform.webp",
    coverImage: "/PMC-Phone-Digital.avif",
    keyPoints: [
      "Hardware Integration with Multiple Sensor Sections",
      "Real-time Sensor Data Collection & Cloud Backup",
      "Comprehensive Alert System for Critical Parameters",
      "Touchscreen Interface with Intuitive Navigation",
      "Electronic Time & Temperature Recorder",
      "Report Generation & Download (Daily, Monthly, Yearly)",
      "Remote Access from Any Device",
      "Built-In Robotic Interface Integration"
    ],
    outcomes: [
      "Real-time monitoring of milk temperature and volume",
      "Automated alerts for faster response",
      "Digital data capture replacing manual logging",
      "Remote operation enabling flexibility"
    ],
    caseStudyUrl: "https://solvative.com/case-study/pmc",
    description: "A next-generation IIoT control platform designed for connected dairy operations, combining cloud connectivity, automation, and intuitive user experience.",
    fullDescription: "I started my journey as a junior developer in 2019 with this project at Solvative. Paul Mueller Company partnered with us to modernize their existing HiPerForm™ III cooling and wash control system into a future-ready IIoT platform called MilkSecure™. The solution transformed how dairies operate by providing real-time monitoring, cloud analytics, automated alerts, and remote access capabilities replacing manual paper-based logging with intelligent digital systems. We worked extensively on the hardware integration, implementing multiple sections that continuously receive data from sensors. This constant stream of sensor data is securely stored in our cloud backup system, ensuring reliable data persistence and accessibility. The platform features a comprehensive alert system that monitors all critical parameters and notifies operators in real-time. Built with MongoDB, React, SQLite, Node.js, and Sails.js, the system enables users to download detailed reports for any time period daily, monthly, or yearly—providing complete visibility into dairy operations and compliance tracking."
  },
  {
    id: "mobilize-rescue",
    name: "Mobilize Rescue - Intelligent Emergency Response System",
    slug: "mobilize-rescue",
    tagline: "Building intelligent workflows for real-time emergency care",
    type: "work",
    category: "Healthcare & Medical",
    industry: "Healthcare & Medical",
    technology: ["Native Mobile Apps", "Backend Systems", "Real-time Workflows"],
    role: "Developer",
    company: "Solvative (now part of ZOLL Medical)",
    logo: "/project.png",
    coverImage: "/project.png",
    keyPoints: [
      "Digital-First Emergency Response Workflows",
      "Real-Time Inventory Tracking & Management",
      "Automated Supply Replenishment",
      "Native Mobile Applications (Phone & Tablet)",
      "Dynamic, Condition-Based Rescue Paths",
      "Scalable Architecture for Multiple Kit Types"
    ],
    outcomes: [
      "Streamlined emergency response workflows",
      "Real-time inventory visibility",
      "Higher confidence and usability for bystanders",
      "Scalable digital ecosystem",
      "Increased adoption and sales"
    ],
    caseStudyUrl: "https://solvative.com/case-study/mobilize-rescue",
    description: "A healthcare technology solution that transforms first aid kits into intelligent, app-powered emergency response systems.",
    fullDescription: "Mobilize Rescue partnered with Solvative to create a digital-first experience that guides anyone—regardless of medical training—through high-stress rescue situations with confidence. We developed a suite of native mobile applications and backend systems that delivered dynamic, condition-based rescue workflows, real-time inventory tracking, and automated supply replenishment. The solution replaced static paper charts with intuitive, guided workflows that assist users step-by-step in real time, ensuring every kit stayed fully stocked and ready for use."
  },
  {
    id: "thwip",
    name: "Thwip",
    slug: "thwip",
    tagline: "Your portable soundboard, available for iOS and watchOS",
    type: "side",
    category: "Mobile App",
    industry: "Consumer Software",
    technology: ["iOS", "watchOS", "Swift"],
    role: "Creator & Developer",
    company: "Personal Project",
    logo: "/thwip-app-icon.png",
    coverImage: "/thwip-demo-1.jpg",
    keyPoints: [
      "Portable soundboard for iOS and watchOS",
      "Custom boards for sound effects",
      "Quick audio recordings",
      "Apple Watch integration",
      "Simple and intuitive interface"
    ],
    outcomes: [
      "Available on the App Store",
      "Personal use for family moments",
      "Easy-to-use soundboard solution"
    ],
    projectUrl: "https://thwip.app",
    caseStudyUrl: "https://apps.apple.com/iq/app/thwip-soundboard/id6466668240",
    description: "Your portable soundboard, available for iOS and watchOS.",
    fullDescription: "What started as a simple soundboard app for Apple Watch, evolved motivated by playtime with my son — a way to have custom boards for all the Mario sound effects, animal sounds, and quick audio recordings of him saying cute things, that I know won't last long enough."
  },
  {
    id: "hidock",
    name: "HiDock",
    slug: "hidock",
    tagline: "A Mac app that lets you set custom Dock settings for when on different displays",
    type: "side",
    category: "Desktop App",
    industry: "Consumer Software",
    technology: ["macOS", "Swift"],
    role: "Creator & Developer",
    company: "Personal Project",
    logo: "/hidock-app-icon.png",
    coverImage: "/hidock-screenshot.png",
    keyPoints: [
      "Custom Dock settings per display",
      "Automatic switching between displays",
      "Dock visibility control",
      "Dock size adjustment",
      "Native macOS integration"
    ],
    outcomes: [
      "Free download available",
      "Solves display-specific Dock preferences",
      "Seamless user experience"
    ],
    projectUrl: "https://hidock.app",
    description: "A Mac app that lets you set custom Dock settings for when on different displays.",
    fullDescription: "I wanted to have my Dock visible when connected to my large external display, but hidden and smaller when on my laptop, I couldn't believe that there was no way to do that so I built this."
  }
];

