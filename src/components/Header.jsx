"use client";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import ThemesComp from "./ThemesComp";
import i18n from "@/app/i18n";

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

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between h-20 p-5">
        <div>🚀</div>
        <div className="flex items-center space-x-4 gap-5">
          {menu.map((mn, i) => (
            <MenuItems mn={mn} key={i} />
          ))}
          <ThemesComp />
          <div className="relative">
            <button
              className=" py-2 px-4 rounded shadow-md"
              onClick={toggleLanguageMenu}
            >
              {selectedLanguage}
            </button>
            {isLanguageMenuOpen && (
              <ul className="absolute mt-2 space-y-2  border rounded shadow-md">
                <li
                  className="cursor-pointer px-4 py-2"
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </li>
                <li
                  className="cursor-pointer px-4 py-2"
                  onClick={() => changeLanguage("tr")}
                >
                  TR
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
