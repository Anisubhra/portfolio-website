"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 group">
      <button
        onClick={toggleTheme}
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-gray-700"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 dark:bg-white dark:text-black">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </div>
    </div>

  );
}
