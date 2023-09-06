"use client";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import ThemesComp from "./ThemesComp";
import Image from "next/image";
import { useTheme } from "next-themes";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const menu = [
    {
      name: "Projects",
      url: "#project",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <header className="flex items-center justify-between h-20 p-5">
        <div>🚀</div>
          <div className="lg:hidden flex items-center justify-between">
          <ThemesComp className="z-10" />
            <LanguageDropdown />
            <button className="p-2" onClick={openMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-between py-2 px-4">
            <ul className="flex space-x-4 gap-5">
              {menu.map((mn, i) => (
                <MenuItems mn={mn} key={i} />
              ))}
            </ul>
            <div className="px-4 py-4 flex">
              <ThemesComp />
              <LanguageDropdown />
            </div>
          </div>
        </header>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-10">
            <button
              className="absolute top-4 right-4 p-2 z-10"
              onClick={closeMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul
              className={`absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center ${
                theme === "dark" ? "dark:bg-slate-950" : "bg-white"
              } animate-slideIn`}
            >
              {menu.map((mn, i) => (
                <MenuItems mn={mn} key={i} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
