"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait1.jpg"
              alt="Anisubhra portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-[15px] text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {/* <Image src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="42" height="42" /> */}
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Anisubhra.</span><br />
        I'm a <span className="font-bold">Senior Software Engineer</span> specializing in <span className="underline">Front-end</span> technologies like <span className="italic">JavaScript, React, Next.js</span>. I craft clean, responsive, and visually appealing <span className="italic">websites & apps</span>.

      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="mailto:anisubhrasarkar@gmail.com"
          className="relative group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />

          {/* Tooltip with icon */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-white text-black text-xs px-3 py-1 rounded shadow-md whitespace-nowrap z-10 flex items-center gap-1 dark:bg-white/90 dark:text-black">
            <HiOutlineMail className="text-sm" />
            Send me an email
          </span>
        </a>


        <a
          href="https://www.linkedin.com/in/anisubhrasarkar/"
          target="_blank"
          className="relative group bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaLinkedinIn />

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 dark:bg-white dark:text-black">
            LinkedIn Profile
          </span>
        </a>


        <a
          href="https://github.com/Anisubhra"
          target="_blank"
          className="relative group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubAlt />

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 dark:bg-white dark:text-black">
            GitHub Profile
          </span>
        </a>


        <a
          href="https://x.com/anisubhrasarkar"
          target="_blank"
          className="relative group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaSquareXTwitter />

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 dark:bg-white dark:text-black">
            X / Twitter
          </span>
        </a>


        <a
          href="https://medium.com/@anisubhrasarkar"
          target="_blank"
          className="relative group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaMedium />

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 dark:bg-white dark:text-black">
            Medium Blog
          </span>
        </a>

      </motion.div>
    </section>
  );
}
