import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaMedium,
} from "react-icons/fa6";

export type SocialItem = {
  href: string;
  icon: any;
  username: string;
  subtext?: string;
};

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
  tech: string[];
  description: string;
  repoUrl?: string;
  img?: string;
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

export type Socials = {
  github: string;
  linkedin: string;
  x: string;
  medium: string;
  instagram: string;
};

export type Profile = {
  name: string;
  image: string;
  subtitle: string;
  taglineList: string[];
  summary: string;
  socials: Socials;
};

export const profile = {
  name: "Harshal Patil",
  image: "/me/hero_harshal_patil.jpeg",
  subtitle: "Engineer @ Keychain",
  taglineList: [
    "MLH Top 50 (2025)",
    "Open Source Contributor",
    "Ex-Frontend Intern @ Fyle",
    "Hack4TKM 2024 Winner",
    "Runner-Up @ HackOdisha 3.0",
  ],
  summary:
    "I’m Harshal Patil, an engineer passionate about building scalable, impactful products.",
  socials: {
    github: "https://github.com/Harshal141",
    instagram: "https://www.instagram.com/harshal_patil_141/",
    linkedin: "https://www.linkedin.com/in/harshalmukundapatil",
    x: "https://x.com/Harshal41471486",
    medium: "https://medium.com/@harshalmukundapatil",
  },
};

export const socials: SocialItem[] = [
  {
    href: "https://github.com/Harshal141",
    icon: FaGithub,
    username: "@Harshal141",
    subtext: "GitHub Profile",
  },
  {
    href: "https://www.instagram.com/harshal_patil_141/",
    icon: FaInstagram,
    username: "@harshal_patil_141",
    subtext: "Instagram",
  },
  {
    href: "https://x.com/Harshal41471486",
    icon: FaXTwitter,
    username: "@Harshal41471486",
    subtext: "Twitter / X",
  },
  {
    href: "https://www.linkedin.com/in/harshalmukundapatil",
    icon: FaLinkedin,
    username: "Harshal Patil",
    subtext: "LinkedIn",
  },
  {
    href: "https://medium.com/@harshalmukundapatil",
    icon: FaMedium,
    username: "@harshalmukundapatil",
    subtext: "Medium Articles",
  },
];

export const personalEmail: string = "harshalmukundapatil@gmail.com";

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Keychain",
    companyUrl: "https://keychain.com",
    location: "Gurugram (On-site)",
    period: "Dec 2024 - Present",
    bullets: [
      "Contributing to core product features and platform reliability.",
      "Implementing backend services and integrations; improving DX and delivery speed.",
    ],
  },
  {
    title: "Frontend Intern",
    company: "Fyle (Sage)",
    companyUrl: "https://www.fylehq.com/",
    period: "Jul 2023 - Mar 2024 · Remote",
    bullets: [
      "AngularJS → Angular migration; user-facing features.",
      "AWS Lambda automations integrating ClickUp and Slack APIs.",
    ],
  },
  {
    title: "Technical Lead",
    company: "AIT OSS Club",
    companyUrl: "https://aitoss.club/",
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
    title: "Anubhav",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Project Management"],
    description:
      "Anubhav is an interview-sharing platform for students of AIT.",
    repoUrl: "https://anubhav.aitoss.club/",
    img: "/project/anubhav.png",
  },
  {
    title: "i-Moisture",
    tech: ["React", "Flask", "AWS"],
    description:
      "Soil moisture prediction via multiple linear regression; gamified irrigation approach.",
    repoUrl: "https://github.com/Harshal141/iMoisture",
    img: "/project/i-moist.png",
  },
  {
    title: "Water Monitoring System",
    tech: ["NodeJS", "Maptiler", "ChartJS", "R Language"],
    description:
      "Low-cost IoT system for real-time water quality monitoring with Wi‑Fi data access.",
    repoUrl: "https://github.com/Harshal141/Water-Management-System",
    img: "/project/water-man.png",
  },
  {
    title: "NFC based Pass Issuer",
    tech: ["Flutter", "Firebase", "RazorPay", "nfc-manager"],
    description:
      "NFC bus pass system for Indian metropolitan transit; sustainable and efficient.",
    repoUrl: "https://github.com/March-Madnes/PuneConnect",
    img: "/project/nfc-pass.png",
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
  {
    degree: "Bachelor of Engineering",
    institute: "Army Institute Of Technology, Pune",
    period: "2021-2025",
  },
  {
    degree: "Higher Education",
    institute: "Army Public School Dighi.",
    period: "2020-2021",
  },
];
