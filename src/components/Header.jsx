"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Home, Briefcase, Code2, FolderOpen, Mail, Download, Globe } from "lucide-react";

const Header = ({ activeTab, setActiveTab }) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { id: "about", label: t("about"), icon: Home },
    { id: "experience", label: t("experience"), icon: Briefcase },
    { id: "skills", label: t("skills"), icon: Code2 },
    { id: "projects", label: t("projects"), icon: FolderOpen },
    { id: "contact", label: t("contact"), icon: Mail },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
    setShowDropdown(false);
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
    <>
      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-4 left-4 right-4 h-20 bg-white rounded-2xl z-50 flex items-center justify-center px-4 shadow-lg">
        <div className="flex items-center justify-center gap-4 max-w-md w-full">
          {/* Nav Items */}
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500/15 text-teal-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  title={item.label}
                >
                  <Icon size={24} strokeWidth={1.5} />
                  {isActive && (
                    <div className="w-1 h-1 bg-teal-500 rounded-full mt-1"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto relative">
            {/* CV Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                title={t("cv")}
              >
                <Download size={20} strokeWidth={1.5} />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-40 z-50">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      downloadCV();
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Download CV (EN)
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("tr");
                      downloadCV();
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    CV İndir (TR)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 font-semibold text-xs"
              title="Change language"
            >
              {i18n.language === "en" ? "TR" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
