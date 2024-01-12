import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import genius from "@/public/genius.png";
import threads from "@/public/threads.png";
import metaversus from "@/public/metaversus.png";
import hoobank from "@/public/hoobank.png";

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
      "After graduating in 2019 I found a job immediately as a full-stack developer. \nTech Stack - Angular, Bootstrap, Node, Express, PostgreSQL, AWS",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Utah Tech Labs, Remote",
    description:
      "Worked as a front-end developer for 2 years. In my spare times, I have also upskilled my full-stack development skills. \nTech Stack - React, Next.js, Context API, Bootstrap",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Lolly, Remote",
    description:
      "Currently working as a front-end developer for a fulltime role and my Tech Stack includes Angular, TypeScript, Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Threads Clone",
    description:
      "Full-stack threads clone app which has features like search, activity, create, community, profile details etc.",
    tags: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: threads,
    link: 'https://threads-app-ochre.vercel.app/'
  },
  {
    title: "Genius",
    description:
      "An AI SaaS platform built from scratch which leverages OpenAI and Replicate to generate unique media content.",
    tags: ["Next.js", "TypeScript", "MySQL", "Tailwind", "Prisma", "Stripe"],
    imageUrl: genius,
    link: 'https://ai-saas-pi-orpin.vercel.app/'
  },
  {
    title: "Metaversus",
    description:
      "Metaverse landing app with fully responsive design, modern UI elements and fluid animations.",
    tags: ["Next.js", "Tailwind", "Framer"],
    imageUrl: metaversus,
    link: 'https://metaverse-landing-vert.vercel.app/'
  },
  {
    title: "HooBank",
    description:
      "A modern banking landing website designed and developed from figma design which is not only lightweight but pixel perfect and works seamlessly across all the devices.",
    tags: ["Vite.js", "Tailwind"],
    imageUrl: hoobank,
    link: 'https://bank-landing-app.vercel.app/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Docker"
] as const;
