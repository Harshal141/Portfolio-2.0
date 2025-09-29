export type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  bullets?: string[];
};

export type Project = {
  title: string;
  tech: string;
  description: string;
  repoUrl?: string;
};

export type Achievement = {
  title: string;
  org: string;
  period: string;
  points?: string[];
};

export type Education = {
  degree: string;
  institute: string;
  period: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
};

export const profile = {
  name: "Harshal Patil",
  subtitle: "Engineer @ Keychain | MLH Top 50 | Ex-Frontend Intern @ Fyle",
  taglineList: [
    "Engineer @ Keychain",
    "MLH Top 50 (2025)",
    "Ex-Frontend Intern @ Fyle",
    "Hack4TKM 2024 Winner",
    "Runner-Up @ HackOdisha 3.0",
  ],
  summary:
    "Hello! I'm Harshal Patil, a Tech Enthusiast and Backend Developer. I’ve worked across AWS, Angular, and Node.js, building customer-facing features and automation at Fyle and now engineering at Keychain. I thrive in fast-paced environments, adapt quickly across stacks (Ionic, browser extensions), and love turning ideas into production-ready products. I also write about my journey and learnings. Always open to collaborating on impactful projects.",
  socials: {
    github: "https://github.com/Harshal141",
    instagram: "https://www.instagram.com/harshal_patil_141/",
    linkedin: "https://www.linkedin.com/in/harshalmukundapatil",
  },
  imageUrl: "/Harshal_Patil_profile.png",
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Keychain",
    companyUrl: "https://keychain.com",
    location: "Gurugram (On-site)",
    period: "Jun 2025 - Present",
    bullets: [
      "Contributing to core product features and platform reliability.",
      "Implementing backend services and integrations; improving DX and delivery speed.",
    ],
  },
  {
    title: "Engineering Intern",
    company: "Keychain",
    companyUrl: "https://keychain.com",
    period: "Dec 2024 - Jun 2025 · Remote",
    bullets: ["Backend services, internal tooling, and feature development."],
  },
  {
    title: "Frontend Intern",
    company: "Fyle",
    companyUrl: "https://www.fylehq.com/",
    period: "Jul 2023 - Mar 2024 · Remote",
    bullets: [
      "AngularJS → Angular migration; user-facing features.",
      "AWS Lambda automations integrating ClickUp and Slack APIs.",
    ],
  },
  {
    title: "Technical Lead",
    company: "AIT Open Source Software Club",
    companyUrl: "https://github.com/aitoss",
    period: "Jun 2023 - Feb 2024",
    bullets: ["Led OSS initiatives, organized INNERVE, mentored peers."],
  },
  {
    title: "Project Lead",
    company: "Tax Sarthi",
    companyUrl: "https://portal.taxsarthi.com/",
    period: "Mar 2023 - Jun 2023",
    bullets: [
      "Built a tax management portal for 10,000+ users using ReactJS and Firebase.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "i-Moisture",
    tech: "React Flask AWS",
    description:
      "Soil moisture prediction via multiple linear regression; gamified irrigation approach.",
    repoUrl: "https://github.com/Harshal141/iMoisture",
  },
  {
    title: "Water Monitoring System",
    tech: "NodeJS, Maptiler, ChartJS, R Language",
    description:
      "Low-cost IoT system for real-time water quality monitoring with Wi‑Fi data access.",
    repoUrl: "https://github.com/Harshal141/Water-Management-System",
  },
  {
    title: "NFC based Pass Issuer",
    tech: "Flutter, Firebase, RazorPay, nfc-manager",
    description:
      "NFC bus pass system for Indian metropolitan transit; sustainable and efficient.",
    repoUrl: "https://github.com/March-Madnes/PuneConnect",
  },
];

export const achievements: Achievement[] = [
  {
    title: "MLH Top 50 Hackers (2025)",
    org: "Major League Hacking",
    period: "2025",
    points: ["Recognized among MLH's Top 50 Hackers globally for 2025."],
  },
  {
    title: "Hack4TKM 2024 Winner",
    org: "TKM Collage",
    period: "Feb 16 - 18, 2024",
    points: [
      "Secured first position amongst 1000+ teams and Won a cash prize of 1Lakh.",
    ],
  },
  {
    title: "HackOdisha 3.0 Runner Up",
    org: "NIT Rourkela",
    period: "Dec 9 - 10, 2023",
    points: [
      "Runner Up in HackOdisha 3.0 - National level hackathon organized by NIT Rourkela.",
    ],
  },
];

export const education: Education[] = [
  { degree: "Bachelor of Engineering", institute: "Army Institute Of Technology, Pune", period: "2021-2025" },
  { degree: "Higher Education", institute: "Army Public School Dighi.", period: "2020-2021" },
];

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Engineering Manager",
    company: "Fyle",
    text: "Harshal consistently delivered high-quality code and showed great initiative in learning new technologies.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    company: "Keychain",
    text: "An exceptional engineer with strong problem-solving skills and attention to detail.",
  },
];

export const awards: Award[] = [
  {
    title: "Best Innovation Award",
    issuer: "Hack4TKM",
    year: "2024",
    description: "Awarded for developing innovative soil moisture prediction system",
  },
  {
    title: "Excellence in Engineering",
    issuer: "Army Institute of Technology",
    year: "2023",
    description: "Recognized for outstanding academic performance and project work",
  },
];


