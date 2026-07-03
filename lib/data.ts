import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import aisaas from "@/public/ai-saas.jpeg";
import social from "@/public/social.png";
import metaverse from "@/public/metaverse.jpeg";
import snake from "@/public/snake_mania.jpeg";
import mole from "@/public/whack_a_mole.jpeg";
import gaming from "@/public/gaming.jpeg";
import { color } from "framer-motion";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
] as const;

export const experiencesData = [
  {
    title: "Junior Engineer (Founding Member)",
    location: "Ovonts",
    description:
      "Built and launched an Influencer Commerce product from scratch, handling both front-end and back-end development. Gained hands-on experience tackling complex challenges in a fast-paced, cross-functional team.",
    icon: React.createElement("img", {
      src: "/ovonts.jpeg",
      alt: "Ovonts",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    }),
    date: "2019 - 2021",
    color: "text-pink-600/100",
  },
  {
    title: "Associate Software Engineer",
    location: "Utah Tech Labs",
    description:
      "Built a SaaS video conferencing platform with real-time collaboration, optimized a sales analytics dashboard for faster decision-making, and improved usability and performance of an executive education dashboard — consistently delivering scalable, high-impact frontend solutions.",
    icon: React.createElement("img", {
      src: "/utl.jpeg",
      alt: "Utah Tech Labs",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    }),
    date: "2021 - 2023",
    color: "text-lime-500/100",
  },
  {
    title: "Senior Frontend Engineer (Founding Member)",
    location: "Lolly",
    description:
      "Developed AI Co-Pilot for marketing teams, creating intuitive, high-performance UIs to enhance user experience. Worked closely with cross-functional teams to ensure smooth, efficient delivery.",
    icon: React.createElement("img", {
      src: "/lolly.jpeg",
      alt: "Lolly",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    }),
    date: "2023 - 2024",
    color: "text-black-600/100",
  },
  {
    title: "Senior Software Engineer",
    location: "EPAM",
    description:
      "Senior developer responsible for building a scalable data lake platform from scratch. Led the architecture and implementation of high-performance solutions for large-scale data processing, improving data accessibility and delivering actionable insights.",
    icon: React.createElement("img", {
      src: "/epam.jpeg",
      alt: "EPAM",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
    }),
    date: "2024 - PRESENT",
    color: "text-sky-600/100",
  },
] as const;


export const projectsData = [
  {
    title: "Twine",
    description: "Microblogging for short posts and real-time threaded conversations with profiles and communities.",
    tags: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: social,
    link: "https://social-app-eta-seven.vercel.app/"
  },
  {
    title: "Gene",
    description:
      "SaaS platform for teams to quickly generate images, video, music, code, and chat content via an intuitive editor.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Prisma", "Stripe"],
    imageUrl: aisaas,
    link: 'https://ai-saas-pi-orpin.vercel.app/'
  },
  {
    title: "HorizonX",
    description:
      "A sleek, interactive landing site that showcases a metaverse experience with smooth animations and responsive design — crafted for visual impact and engagement.",
    tags: ["Next.js", "Tailwind", "Framer"],
    imageUrl: metaverse,
    link: 'https://metaverse-landing-vert.vercel.app/'
  },
  // {
  //   title: "QuestPoint",
  //   description:
  //     "🎮 QuestPoint — the ultimate gaming hub built for speed, style, and seamless animations. Dive into an immersive experience that feels as thrilling as the games you love! 🚀✨",
  //   tags: ["Vite", "Tailwind CSS", "GSAP"],
  //   imageUrl: gaming,
  //   link: "https://modern-gaming-website.vercel.app/",
  // },
  {
    title: "Snake Mania",
    description:
      "A browser version of the classic Snake game with smooth controls and responsive play — jump in, eat the food, and see how long you can survive.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: snake,
    link: 'https://snake-game-topaz-three.vercel.app/'
  },
  {
    title: "Whack a Mole",
    description:
      "A fast, whimsical Whack-a-Mole game built for quick reflex challenges — click the moles as they pop up and beat your high score.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: mole,
    link: 'https://whack-a-mole-livid.vercel.app/'
  },
] as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/anisubhrasarkar/",
    icon: "FaLinkedinIn",
    tooltip: "LinkedIn",
    bg: "bg-white",
    text: "text-gray-700",
    tooltipBg: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    href: "https://github.com/Anisubhra",
    icon: "FaGithubAlt",
    tooltip: "GitHub",
    bg: "bg-white",
    text: "text-gray-700",
    tooltipBg: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    href: "https://x.com/anisubhrasarkar",
    icon: "FaSquareXTwitter",
    tooltip: "X / Twitter",
    bg: "bg-white",
    text: "text-gray-700",
    tooltipBg: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    href: "https://dev.to/anisubhra_sarkar",
    icon: "FaDev",
    tooltip: "Tech Blogs",
    bg: "bg-white",
    text: "text-gray-700",
    tooltipBg: "bg-black text-white dark:bg-white dark:text-black",
  },
  // {
  //   href: "https://medium.com/@anisubhrasarkar",
  //   icon: "FaMedium",
  //   tooltip: "Ideas & Experiences",
  //   bg: "bg-white",
  //   text: "text-gray-700",
  //   tooltipBg: "bg-black text-white dark:bg-white dark:text-black",
  // },

] as const;

export const skillsData = [
  // 🔥 Core Web / Frontend
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "Vite",
  "React Native",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Material-UI",
  "Framer Motion",
  "Three.js",

  // 🧩 State & Data
  "Redux / Redux Toolkit",
  "Zustand",
  "Context API",
  "GraphQL",
  "REST API",

  // 🔧 Backend & Databases
  "Node.js",
  "Express",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  

  // ☁️ Cloud, Infra & DevOps
  "Docker",
  "AWS",
  "Vercel",
  "GitHub Actions",

  // 🤖 AI / LLMs & Data Engineering
  "LLM integration (OpenAI, Anthropic)",
  "MCP (Model Context Protocol)",
  "Agentic AI",

  // ✅ Testing & Quality
  "Jest",
  "ESLint",
  "Prettier",

  // 🛠 Tools & Design
  "Git",
  "Figma",
  "Webpack",
  "Chrome DevTools",
] as const;


