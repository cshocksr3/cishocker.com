"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { links as navLinks } from "@/utils/links";
import Mobile from "./mobile-menu";
import { Desktop } from "./desktop";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Ensure theme is mounted correctly
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-softgray dark:bg-slategray/70 shadow-md rounded-lg">
      {/* Dark Mode Toggle */}
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="group rounded-full bg-slategray/10 dark:bg-slategray/50 px-3 py-2 shadow-lg ring-1 ring-slategray/20 dark:ring-offwhite/20 hover:bg-cobaltblue dark:hover:bg-burntorange transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 text-slategray dark:text-offwhite"
          >
            {theme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden sm:block rounded-full bg-offwhite/90 px-3 text-sm font-medium text-slategray shadow-lg ring-1 ring-slategray/20 dark:bg-slategray/90 dark:text-offwhite dark:ring-offwhite/10">
        <Desktop
          links={navLinks}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="block sm:hidden">
        <Mobile links={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
