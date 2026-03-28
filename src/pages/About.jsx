"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    // Random 3 projects
    const projects = [
      "plan/lab",
      "Weather App",
      "Quiz App",
      "Mata",
      "Nada Hub",
      "Feel Export",
    ];
    const shuffled = [...projects].sort(() => Math.random() - 0.5).slice(0, 3);
    setRandomProjects(shuffled);
  }, []);

  const topSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 70 },
  ];

  const getProficiency = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Basic";
  };

  return (
    <div className="min-h-screen w-full px-4 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Ayberk Tığlı
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal">
            Frontend-Focused Full-Stack Developer
          </p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-8">
          {t("heroDescription")}
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/ayberkkk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ayberk-tigli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.633h3.554v1.364c.429-.643 1.189-1.554 2.898-1.554 2.117 0 3.704 1.385 3.704 4.362v5.461zM5.337 9.433c-1.144 0-1.915-.757-1.915-1.704 0-.951.771-1.713 1.956-1.713 1.184 0 1.924.762 1.955 1.713 0 .947-.771 1.704-1.996 1.704zm1.586 11.019H3.487V9.819h3.436v10.633zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
