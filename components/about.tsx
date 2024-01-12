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
        After earning my degree in <span className="font-medium">IT</span>, I pursued my passion for programming.
        I began my career in <span className="font-medium">full-stack development</span> at a fast-paced startup, sharpening my skills across both front-end and back-end technologies.
        My core stack includes <span className="font-medium">JavaScript, TypeScript, React, Next.js, Angular, Node.js, Express, and MongoDB</span>, allowing me to build dynamic, end-to-end applications with ease.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I enjoy gaming, watching movies, drawing, and exploring the latest tech innovations.
      </p>

    </motion.section>
  );
}
