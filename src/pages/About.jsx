"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ayberkkk", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ayberk-tigli/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/ayberktigli", label: "Twitter" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
      <div className="text-center space-y-8">
        {/* Main content */}
        <div className="relative z-10">
          <h1 className="heading-1 mb-4">
            <span className="text-black dark:text-white">Ayberk Tığlı</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-8 animate-slideIn">
            {t("frontendDeveloper")}
          </p>

          {/* About text with glass effect */}
          <div className="glass rounded-2xl p-8 mb-8 backdrop-blur-xl animate-scaleIn">
            <p className="body-text leading-relaxed">
              {t("aboutMe")}
            </p>
          </div>

          {/* Social links with hover effects */}
          <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn group"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <social.icon className="text-xl transition-transform duration-300 group-hover:scale-125" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-2">
            <span className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
