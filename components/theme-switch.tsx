"use client";

import { useTheme } from "@/context/theme-context";
import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={toggleTheme}
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-gray-700"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
