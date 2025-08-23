"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineTranslate } from "react-icons/hi";

const Header = ({ activeTab, setActiveTab }) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "about", label: t("about"), icon: "👤" },
    { id: "experience", label: t("experience"), icon: "💼" },
    { id: "skills", label: t("skills"), icon: "💡" },
    { id: "projects", label: t("projects"), icon: "🚀" },
    { id: "contact", label: t("contact"), icon: "📧" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  const downloadCV = () => {
    const cvFileName = i18n.language === "tr" ? "Aybek-Tigli-TR.pdf" : "Aybek-Tigli-EN.pdf";
    const cvFilePath = `/${cvFileName}`;
    const a = document.createElement("a");
    a.href = cvFilePath;
    a.download = cvFileName;
    a.click();
  };

  return (
    <div className="sticky top-0 z-50 glass border-b border-white/10 dark:border-gray-800/50">
      <div className="container mx-auto">
        <header className="flex items-center justify-center h-16 px-4">
          <nav className="flex items-center">
            <div className="flex bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/20 dark:border-gray-700/30">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-3 sm:px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg scale-105"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-800/50"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <span className={`text-base ${activeTab === tab.id ? 'animate-pulse' : ''}`}>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                  {activeTab === tab.id && (
                    <span className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5 blur-md -z-10 animate-pulse" />
                  )}
                </button>
              ))}
              
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-1 my-auto" />
              
              <button
                onClick={downloadCV}
                className="px-3 sm:px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-1.5 group"
                title={t("cv")}
              >
                <AiOutlineDownload className="text-lg group-hover:animate-bounce" />
                <span className="hidden sm:inline">{t("cv")}</span>
              </button>
              
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-1 my-auto" />
              
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-1 group"
                title="Change language"
              >
                <HiOutlineTranslate className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xs font-medium uppercase text-black dark:text-white">
                  {i18n.language || "en"}
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
