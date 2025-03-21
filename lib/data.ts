import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import aisaas from "@/public/ai-saas.jpeg";
// import threads from "@/public/threads.png";
import metaverse from "@/public/metaverse.jpeg";
import snake from "@/public/snake_mania.jpeg";
import mole from "@/public/whack_a_mole.jpeg";
import gaming from "@/public/gaming.jpeg";

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
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Ovonts",
    description:
      "Built and launched an Influencer Commerce product from scratch, handling both front-end and back-end development. Gained hands-on experience tackling complex challenges in a fast-paced, cross-functional team.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Lolly",
    description:
      "Developed AI Co-Pilot for marketing teams, creating intuitive, high-performance UIs to enhance user experience. Worked closely with cross-functional teams to ensure smooth, efficient delivery.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Senior Software Engineer",
    location: "EPAM",
    description:
      "Led a team to build a scalable data lake platform using AWS open-source codebase. Designed high-performance solutions for large-scale data processing, improving data accessibility and insights.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - PRESENT",
  },
] as const;


export const projectsData = [
  // {
  //   title: "Threads Clone",
  //   description:
  //     "Full-stack threads clone app which has features like search, activity, create, community, profile details etc.",
  //   tags: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
  //   imageUrl: threads,
  //   link: 'https://threads-app-ochre.vercel.app/'
  // },
  {
    title: "Gene",
    description:
      "An AI SaaS platform designed for creativity and efficiency, it offers a seamless user experience for unique content generation. 🚀🤖",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Prisma", "Stripe"],
    imageUrl: aisaas,
    link: 'https://ai-saas-pi-orpin.vercel.app/'
  },
  {
    title: "HorizonX",
    description:
      "HorizonX is a futuristic and interactive website with a sleek design, smooth animations, and a responsive layout, perfect for showcasing the metaverse experience. Explore now! 🌐✨",
    tags: ["Next.js", "Tailwind", "Framer"],
    imageUrl: metaverse,
    link: 'https://metaverse-landing-vert.vercel.app/'
  },
  {
    title: "QuestPoint",
    description:
      "🎮 QuestPoint — the ultimate gaming hub built for speed, style, and seamless animations. Dive into an immersive experience that feels as thrilling as the games you love! 🚀✨ Check it out!",
    tags: ["Vite", "Tailwind CSS", "GSAP"],
    imageUrl: gaming,
    link: "https://modern-gaming-website.vercel.app/",
  },
  {
    title: "Snake Mania",
    description:
      "Snake Mania is a classic arcade-style game. Control the snake, eat food to grow, and avoid collisions to survive as long as possible. Play now and test your skills! 🐍🎮",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: snake,
    link: 'https://snake-game-topaz-three.vercel.app/'
  },
  {
    title: "Whack a Mole",
    description:
      "Whack-a-Mole is a fun and fast-paced game. Test your reflexes by clicking on the moles as they pop up—how many can you whack before time runs out? 🎯🐭 Play now!",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: mole,
    link: 'https://whack-a-mole-livid.vercel.app/'
  },
] as const;

export const skillsData = [
  // 🔥 Frontend
  "HTML5",
  "CSS3",
  "SASS/SCSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  // "Vue",
  "Vite",
  "Redux",
  // "Zustand",
  "React Query",
  "Angular",
  "Tailwind CSS",
  "Material UI",
  "Framer Motion",
  "GSAP",
  "Three.js",

  // 🎯 Build Tools
  "Webpack",
  // "Parcel",

  // ✅ Testing & Quality Assurance
  "Jest",
  "React Testing Library",
  // "Cypress",
  // "Playwright",
  // "Vitest",
  // "Storybook",

  // 🔧 Backend
  "Node.js",
  "Express",
  "GraphQL",
  "REST API",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  // "Redis",
  // "Firebase",

  // ⚙️ DevOps & Infrastructure
  "Docker",
  // "Kubernetes",
  "AWS",
  // "CI/CD (GitHub Actions, Jenkins)",
  // "Terraform",

  // 🛠️ Other Tools
  "Git",
  "WebSockets",
  "Figma",
  "Jira",
] as const;

