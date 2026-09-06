export interface DeveloperInfo {
  name: string;
  role: string;
  subRole: string;
  availability: string;
  heroBio: string;
  primaryPills: string[];
  aboutStatement: string;
  aboutBio: string;
  quote: string;
  profile: {
    role: string;
    focus: string;
    location: string;
    status: string;
  };
  email: string;
  telegram: string;
  telegramHandle: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export const DEVELOPER_INFO: DeveloperInfo = {
  name: "Alex Rozz",
  role: "Junior Python Backend Developer",
  subRole: "Junior Python Backend\nDeveloper",
  availability: "AVAILABLE FOR NEW OPPORTUNITIES",
  heroBio: "I build robust, scalable server-side systems with a focus on clean architectures and performance. Currently obsessed with building tools that simplify complex workflows.",
  primaryPills: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
  aboutStatement: "I'm a backend engineer who enjoys turning complex problems into elegant, maintainable code.",
  aboutBio: "I specialize in building high-performance APIs and automated systems. My interest lies in distributed systems, microservices architecture, and anything that involves Python. Currently, I am deepening my knowledge in asynchronous programming and system design.",
  quote: "I don't just write code; I design systems that solve real-world problems.",
  profile: {
    role: "Backend Developer",
    focus: "Python / APIs / DevOps",
    location: "Uzbekistan",
    status: "Open to opportunities",
  },
  email: "aroziboyev07@gmail.com",
  telegram: "https://t.me/ralex_02",
  telegramHandle: "@ralex_02",
  github: "https://github.com/azamroziboyev",
  linkedin: "https://www.linkedin.com/in/azamruzibaev/",
  twitter: "https://twitter.com",
};

export const TECH_STACK = {
  backend: [
    "Python",
    "Django / DRF",
    "FastAPI",
    "Flask",
  ],
  database: [
    "PostgreSQL",
    "SQLite",
    "Redis",
  ],
  tools: [
    "Git & GitHub",
    "Docker",
    "Linux / Bash",
    "Nginx / Gunicorn",
  ],
  frontend: [
    "HTML / CSS",
    "JavaScript (Basic)",
    "Tailwind CSS",
  ],
};

export interface PortfolioProject {
  id: string;
  tag: string;
  title: string;
  description: string;
  tags: string[];
  primaryLinkText: string;
  primaryLinkUrl: string;
  secondaryLinkText?: string;
  secondaryLinkUrl?: string;
  imageType: 'architectural' | 'slides' | 'shelf';
}

export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: "hamroh-taxi",
    tag: "TAXI BOOKING PLATFORM",
    title: "Hamroh Taxi",
    description: "A comprehensive taxi dispatch and booking system. I developed the backend architecture, real-time tracking APIs, and the driver management portal.",
    tags: ["Django", "PostgreSQL", "Redis", "WebSockets"],
    primaryLinkText: "Source Code",
    primaryLinkUrl: "https://github.com/azamroziboyev/taxibot",
    secondaryLinkText: "Live Demo",
    secondaryLinkUrl: "https://hamroh-taxi.uz",
    imageType: "architectural",
  },
  {
    id: "slaydchi",
    tag: "AUTOMATION TOOL",
    title: "Slaydchi",
    description: "An automated presentation generator. Users can input text or topics, and the tool generates structured slides using AI and custom templates.",
    tags: ["FastAPI", "OpenAI API", "Python-PPTX"],
    primaryLinkText: "GitHub",
    primaryLinkUrl: "https://github.com/azizbek-samandarov/slaydchi",
    imageType: "slides",
  },
  {
    id: "hemisvoy",
    tag: "EDUCATION HELPER",
    title: "Hemisvoy",
    description: "A browser-based tool to simplify HEMIS platform interactions. It automates repetitive tasks for students and organizes academic schedules.",
    tags: ["Python", "Selenium", "Chrome Ext"],
    primaryLinkText: "Repository",
    primaryLinkUrl: "https://github.com/azizbek-samandarov/hemisvoy",
    imageType: "shelf",
  },
];

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2026 — Present",
    title: "Refining the Craft",
    description: "Deep diving into Distributed Systems and High-Performance API design. Working on several open-source backend utilities.",
  },
  {
    year: "2025",
    title: "Backend Development Focus",
    description: "Intensive focus on Python frameworks. Developed the \"Hamroh Taxi\" backend and \"Slaydchi\" automation tool.",
  },
  {
    year: "2024",
    title: "Foundations & Automation",
    description: "Started with Python scripts and web scraping. Built \"Hemisvoy\" to solve personal academic productivity challenges.",
  },
];

export const PHILOSOPHY_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Deeply analyzing the core problem before writing a single line of code. User needs first.",
  },
  {
    step: "02",
    title: "Architect",
    description: "Designing schemas, flowcharts, and choosing the right tech stack for the specific scale.",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "Clean code, robust error handling, and unit testing to ensure reliability in production.",
  },
];

export const PIPELINE_NODES = [
  { label: "Idea", icon: "idea" },
  { label: "Design", icon: "design" },
  { label: "Build", icon: "build" },
  { label: "Test", icon: "test" },
];

export const EDUCATION_DATA = {
  degree: "Computer Science & Engineering",
  institution: "Tashkent State Technical University / Ongoing",
  certifications: [
    "Professional Python Developer (PPD)",
    "Django Enterprise Mastery",
    "Google Cloud Foundations",
  ],
  courses: [
    "Advanced Algorithms & Data Structures",
    "Database Management Systems",
    "Linux System Administration",
  ],
};
