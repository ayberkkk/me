"use client"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {t("language")}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={() => changeLanguage("en")}>English</li>
          <li onClick={() => changeLanguage("tr")}>Türkçe</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
