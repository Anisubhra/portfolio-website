import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import genius from "@/public/genius.png";
import threads from "@/public/threads.png";
import metaversus from "@/public/metaversus.png";
import hoobank from "@/public/hoobank.png";
import snake from "@/public/snake_mania.jpeg";
import mole from "@/public/whack_a_mole.jpeg";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Ovonts, Kolkata",
    description:
      "After graduating in 2019, I quickly secured a position as a full-stack developer. This role allowed me to leverage my comprehensive skills in both front-end and back-end development, contributing to the successful delivery of our Influencer Commerce product from scratch. My experience in this position has honed my ability to navigate complex technical challenges, collaborate effectively with cross-functional teams, and deliver high-quality solutions in a fast-paced environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Lolly, Remote",
    description:
      "As a Senior Frontend Developer, I played a pivotal role in the development of the AI Co-Pilot platform, specifically tailored to meet the unique needs of marketing teams. My contributions were instrumental in designing and implementing user-friendly interfaces that enhanced the overall user experience. By collaborating closely with cross-functional teams, I ensured that the platform delivered high-quality, efficient solutions that empowered marketing professionals to achieve their goals more effectively.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Senior Software Engineer",
    location: "EPAM Systems, Remote",
    description:
      "Led a team in the creation of a sophisticated data lake platform, utilizing AWS's open-source codebase. This project involved designing and implementing scalable, high-performance solutions to manage and analyze large datasets. My leadership ensured seamless collaboration among team members, resulting in a robust and efficient platform that significantly improved data accessibility and insights for the organization.",
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
    title: "Genius",
    description:
      "An AI SaaS platform designed for creativity and efficiency, it offers a seamless user experience for unique content generation. 🚀🤖",
    tags: ["Next.js", "TypeScript", "MySQL", "Tailwind", "Prisma", "Stripe"],
    imageUrl: genius,
    link: 'https://ai-saas-pi-orpin.vercel.app/'
  },
  {
    title: "Metaversus",
    description:
      "Metaversus is a futuristic and interactive website with a sleek design, smooth animations, and a responsive layout, perfect for showcasing the metaverse experience. Explore now! 🌐✨",
    tags: ["Next.js", "Tailwind", "Framer"],
    imageUrl: metaversus,
    link: 'https://metaverse-landing-vert.vercel.app/'
  },
  {
    title: "HooBank",
    description:
      "A sleek and modern website designed for a financial institution, it features a responsive layout, smooth animations, and a user-friendly interface. Explore it now! 💳🏦",
    tags: ["Vite.js", "Tailwind"],
    imageUrl: hoobank,
    link: 'https://bank-landing-app.vercel.app/'
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
  "HTML5",
  "CSS",
  "SASS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Redux",
  "Next.js",
  "GraphQL",
  "REST",
  "Tailwind",
  "Material UI",
  "Framer Motion",
  "Angular",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "CI/CD",
  "Kubernetes"
] as const;
