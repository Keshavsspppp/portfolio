// ─── Types ───────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  taglines: string[];
  bio: string;
  location: string;
  email: string;
  socials: Social[];
}

export interface Social {
  label: string;
  href: string;
  platform: string;
}

export interface SkillCategory {
  category: string;
  items: Record<string, string>;
}

export interface Project {
  pid: string;
  name: string;
  status: "live" | "in-progress" | "archived";
  problem: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  role: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  status: "ongoing" | "completed";
}

export interface Achievement {
  text: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Keshav Prasad",
  title: "Full-Stack Developer · AI/ML Enthusiast · Competitive Programmer",
  taglines: [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Competitive Programmer",
  ],
  bio: `Computer Science student at IIIT Naya Raipur building full-stack applications and AI-powered tools. I solve problems on CodeChef, LeetCode, and Codeforces when I'm not shipping production code.`,
  location: "Raipur, Chhattisgarh, India",
  email: "keshavssp04@gmail.com",
  socials: [
    {
      label: "github.com/Keshavsspppp",
      href: "https://github.com/Keshavsspppp",
      platform: "GitHub",
    },
    {
      label: "linkedin.com/in/keshavprasad-ai",
      href: "https://www.linkedin.com/in/keshavprasad-ai/",
      platform: "LinkedIn",
    },
    {
      label: "leetcode.com/u/vCtAUvUZ5B",
      href: "https://leetcode.com/u/vCtAUvUZ5B/",
      platform: "LeetCode",
    },
    {
      label: "codechef.com/users/keshavssp04",
      href: "https://www.codechef.com/users/keshavssp04",
      platform: "CodeChef",
    },
    {
      label: "codeforces.com/profile/keshavssp04",
      href: "https://codeforces.com/profile/keshavssp04",
      platform: "Codeforces",
    },
    {
      label: "keshavssp04@gmail.com",
      href: "mailto:keshavssp04@gmail.com",
      platform: "Email",
    },
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "languages",
    items: {
      "C++": "competitive-programming",
      Python: "ai/ml, backend",
      JavaScript: "full-stack",
      TypeScript: "full-stack",
      SQL: "databases",
    },
  },
  {
    category: "frameworks",
    items: {
      react: "^18.x",
      "next.js": "^14.x",
      "node.js": "^20.x",
      express: "^4.x",
      fastapi: "^0.100",
      tailwindcss: "^3.x",
      pytorch: "^2.x",
      mongoose: "^8.x",
    },
  },
  {
    category: "tools",
    items: {
      git: "version-control",
      docker: "containerization",
      vercel: "deployment",
      postman: "api-testing",
      linux: "ubuntu/kali",
      "mongodb-atlas": "cloud-db",
      hadoop: "big-data",
      "apache-spark": "data-processing",
    },
  },
  {
    category: "databases",
    items: {
      mongodb: "nosql",
      mysql: "relational",
      postgresql: "relational",
    },
  },
];

export const projects: Project[] = [
  {
    pid: "PID-2048",
    name: "Internshala-Clone",
    status: "live",
    problem: "Need for a comprehensive internship portal platform.",
    description: "A comprehensive clone of the Internshala platform that connects students with employers for job and internship postings. Implemented robust authentication and a highly responsive Next.js frontend to handle real-time application tracking.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Keshavsspppp/Internshala-Clone",
    live: "https://internshala-clone-keshav.vercel.app",
    role: "Solo Developer",
  },
  {
    pid: "PID-8192",
    name: "AI-Interviewer",
    status: "live",
    problem: "Candidates need realistic mock interview practice.",
    description: "An AI-powered mock interviewer that conducts dynamic technical and behavioral interviews using OpenAI's API. Overcame context-window limitations by optimizing prompt chunks to provide real-time, highly contextual feedback to users.",
    stack: ["TypeScript", "OpenAI", "React"],
    github: "https://github.com/Keshavsspppp/AI-Interviewer",
    live: "https://ai-interviewer-keshav.vercel.app",
    role: "Solo Developer",
  },
  {
    pid: "PID-1024",
    name: "Aeroshield",
    status: "in-progress",
    problem: "Advanced defense and tracking systems require precision.",
    description: "A sophisticated tracking system focused on creating shielded environments and monitoring capabilities for aviation contexts. Designed a low-latency Node.js backend capable of processing high-frequency spatial coordinate data without bottlenecks.",
    stack: ["TypeScript", "Node.js"],
    github: "https://github.com/Keshavsspppp/Aeroshield",
    live: "https://aeroshield.vercel.app",
    role: "Solo Developer",
  },
  {
    pid: "PID-4096",
    name: "PrepWise-AI",
    status: "live",
    problem: "Students need personalized exam preparation.",
    description: "An intelligent study assistant that leverages AI to instantly generate customized quizzes, flashcards, and study schedules. Architected the prompt engineering pipeline to ensure deterministic, structured JSON outputs from the LLM for seamless UI rendering.",
    stack: ["JavaScript", "React", "AI API"],
    github: "https://github.com/Keshavsspppp/PrepWise-AI",
    live: "https://prepwise-ai.vercel.app",
    role: "Solo Developer",
  },
  {
    pid: "PID-3301",
    name: "Trackerr",
    status: "live",
    problem: "Personal tracking and analytics can be disjointed.",
    description: "A unified tracking dashboard for seamlessly managing daily habits, tasks, and personal metrics. Built custom React hooks and optimized state management to ensure smooth, immediate UI updates even with large datasets.",
    stack: ["TypeScript", "React"],
    github: "https://github.com/Keshavsspppp/Trackerr",
    live: "https://trackerr-app.vercel.app",
    role: "Solo Developer",
  },
  {
    pid: "PID-0982",
    name: "traderrr",
    status: "archived",
    problem: "Simulating market trades requires fast execution.",
    description: "A fast-paced trading simulator built to track stock and crypto prices and execute mock trades instantly. Solved critical race conditions in trade execution by implementing atomic state updates and optimized polling for market data.",
    stack: ["TypeScript", "Next.js"],
    github: "https://github.com/Keshavsspppp/traderrr",
    role: "Solo Developer",
  },
  {
    pid: "PID-1103",
    name: "LTHPro",
    status: "live",
    problem: "Complex data analysis requires robust scripts.",
    description: "A robust Python-based utility designed for advanced data processing and automated machine learning pipelines. Handled massive dataset ingestion by utilizing generator patterns to prevent memory overflow during model training phases.",
    stack: ["Python", "Machine Learning"],
    github: "https://github.com/Keshavsspppp/LTHPro",
    role: "Solo Developer",
  },
  {
    pid: "PID-7764",
    name: "ExpenseTracking",
    status: "archived",
    problem: "Managing personal finances is tedious.",
    description: "An intuitive expense tracking web app for logging daily transactions and visualizing monthly financial summaries. Developed complex aggregation pipelines to generate accurate, on-the-fly chart data from unstructured user entries.",
    stack: ["JavaScript", "React"],
    github: "https://github.com/Keshavsspppp/ExpenseTracking",
    role: "Solo Developer",
  },
  {
    pid: "PID-9921",
    name: "devproject",
    status: "archived",
    problem: "Testing environments needed quick scaffolding.",
    description: "A foundational developer sandbox utilized for scaffolding and rigorously testing new JavaScript environments and architectural patterns. Created modular, reusable configuration scripts to drastically cut down setup time for new microservices.",
    stack: ["JavaScript", "Node.js"],
    github: "https://github.com/Keshavsspppp/devproject",
    role: "Solo Developer",
  }
];

export const experience: ExperienceEntry[] = [
  {
    company: "Elevenvance Skills",
    role: "Full Stack Developer Intern",
    duration: "May 2026 – Jun 2026",
    responsibilities: [
      "Built responsive full-stack web applications using modern frameworks",
      "Developed REST APIs and integrated backend services",
      "Collaborated with the development team on feature implementation",
      "Identified and fixed bugs, optimized application performance",
      "Used Git for version control and collaborative workflows",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IIIT Naya Raipur",
    duration: "2023 – 2027",
    status: "ongoing",
  },
  {
    degree: "Class 1-12",
    institution: "Kendriya Vidyalaya No.2 Raipur CG",
    duration: "2010 – 2022",
    status: "completed",
  },
];

export const achievements: Achievement[] = [
  { text: "400+ DSA problems solved across platforms" },
  { text: "3★ CodeChef Programmer" },
  { text: "Active competitive programmer on CodeChef, LeetCode, and Codeforces" },
  { text: "Amazon ML Summer School 2026 — Selection Test Qualifier" },
  { text: "Built multiple AI, Full Stack, and Big Data production projects" },
];

export const certificationsList: Certification[] = [
  {
    id: "cert-1",
    title: "Certification Title 1",
    issuer: "Issuer Name",
    image: "/cert-1.png",
  },
  {
    id: "cert-2",
    title: "Certification Title 2",
    issuer: "Issuer Name",
    image: "/cert-2.png",
  },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export const bootSequence = [
  { prompt: "whoami", response: "Keshav Prasad" },
  { prompt: "role", response: "Full-Stack Developer · AI/ML Enthusiast · Competitive Programmer" },
  { prompt: "status", response: "shipping" },
  { prompt: "location", response: "Raipur, India" },
];
