"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ayberktigli", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/ayberktigli", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "https://twitter.com/ayberktigli", label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fadeIn">
      <div className="text-center space-y-8">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="heading-1 mb-4">
            <span className="gradient-text-hover">Ayberk Tığlı</span>
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
                className={`icon-btn group ${social.color}`}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <social.icon className="text-xl transition-transform duration-300 group-hover:scale-125" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
