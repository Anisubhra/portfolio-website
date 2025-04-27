import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import aisaas from "@/public/ai-saas.jpeg";
import social from "@/public/social.png";
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
    title: "Full-Stack Engineer (Founding Member)",
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
    date: "2019 - 2022",
  },
  {
    title: "Senior Front-End Engineer (Founding Member)",
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
    date: "2022 - 2024",
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
  },
] as const;


export const projectsData = [
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
    title: "Twine",
    description:
      "🧵 A full-stack microblogging app with real-time posts, threaded conversations, search, activity feed, communities, user profiles, and more. 💬👥",
    tags: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: social,
    link: "https://social-app-eta-seven.vercel.app/"
  },
  {
    title: "QuestPoint",
    description:
      "🎮 QuestPoint — the ultimate gaming hub built for speed, style, and seamless animations. Dive into an immersive experience that feels as thrilling as the games you love! 🚀✨",
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
  "Vue",
  "Angular",
  "Svelte",
  "Redux",
  "Zustand",
  "React Query",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",

  // 🎯 Build Tools
  "Webpack",
  "Vite",

  // ✅ Testing & Quality Assurance
  "Jest",

  // 🔧 Backend
  "Node.js",
  "Express",
  "GraphQL",
  "REST API",
  "PostgreSQL",
  "MongoDB",

  // ⚙️ DevOps & Infrastructure
  "Docker",
  "AWS",
  "CI/CD",

  // 🛠️ Other Tools
  "Git",
  "Figma",
] as const;


