"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">IT</span>, I decided to pursue my
        passion for programming. <br/>Embarking on my career, I immersed myself in{" "}
        <span className="font-medium">full-stack development</span> at a startup, honing skills in both front-end and back-end technologies and thriving in a fast-paced environment that fosters innovation and adaptability.
        My core stack
        is{" "}
        <span className="font-medium">
          TypeScript, React, Next.js, Angular, Node.js, Express and MongoDB
        </span>
        , which empowers me to navigate both front-end and back-end intricacies seamlessly.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, drawing and exploring new tech.
      </p>
    </motion.section>
  );
}
