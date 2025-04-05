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
        After graduating in <span className="font-medium">Computer Science</span>, I pursued my passion for programming.
        I began my career at a fast-paced startup, where I quickly gained hands-on experience building real-world applications from the ground up. Working across both the front and back end, I developed a solid foundation in modern web technologies and a problem-solving mindset that thrives in dynamic environments.
        Over the years, I've built robust, scalable applications using modern JavaScript frameworks and libraries, with a strong focus on creating seamless user experiences and efficient server-side logic.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I enjoy gaming, drawing, and exploring the latest tech innovations.
      </p>

    </motion.section>
  );
}
