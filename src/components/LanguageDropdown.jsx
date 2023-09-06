import React, { useState } from "react";
import Image from "next/image";
import i18n from "@/app/i18n";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languageOptions = [
    {
      code: "en",
      flagImage: "/en.svg",
    },
    {
      code: "tr",
      flagImage: "/tr.svg",
    },
  ];

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className="relative px-3 z-10">
      <button
        className="py-2 px-4 rounded"
        onClick={toggleLanguageMenu}
      >
        <Image
          src={
            languageOptions.find((opt) => opt.code === selectedLanguage)
              .flagImage
          }
          className="fill"
          width={30}
          height={30}
        />
      </button>
      {isLanguageMenuOpen && (
        <ul className="absolute mt-2 space-y-2 border rounded shadow-md">
          {languageOptions.map((opt, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2"
              onClick={() => changeLanguage(opt.code)}
            >
              <Image
                src={opt.flagImage}
                className="fill"
                width={20}
                height={20}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
