"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface MobileProps {
  links: { name: string; link: string }[];
}

const Mobile: React.FC<MobileProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (link: string) => {
    setMenuOpen(false);
    router.push(link);
  };

  return (
    <div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
      >
        {/* Hamburger Menu Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 shadow-md rounded-lg text-black">
          {links.map((link) => (
            <button
              key={link.link}
              onClick={() => handleClick(link.link)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mobile;
