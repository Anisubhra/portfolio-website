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
        After graduating in <span className="font-medium">Computer Science</span>, I joined a fast-paced startup where I built end-to-end features — from user-facing interfaces to backend services. That experience taught me how to move quickly without sacrificing quality, and gave me hands-on expertise in performance optimization, scalable architecture, and delivering user-centric experiences.
      </p>

      <p className="mb-3">
        Today I design and ship production-ready web applications that drive user engagement and measurable product impact, with a strong focus on usability, performance, and maintainability.
      </p>

      <p>
        <span className="italic">Outside work</span>, I enjoy gaming and drawing.
      </p>

    </motion.section>
  );
}
