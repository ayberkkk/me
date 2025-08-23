"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mata",
      description: "Mata is a comprehensive digital marketing platform that helps businesses manage their online presence, social media campaigns, and analytics in one place.",
      image: "/projects/matabt.png",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      link: "https://mata.com.tr",
      github: null,
    },
    {
      id: 2,
      title: "Nada Hub",
      description: "A modern web application hub that provides various digital solutions and services for businesses looking to enhance their online presence.",
      image: "/projects/nadahub.png",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      link: "https://nadahub.com",
      github: null,
    },
    {
      id: 3,
      title: "Feel Export",
      description: "An international trade platform that connects exporters and importers, facilitating global business transactions with ease.",
      image: "/projects/feel-export.png",
      technologies: ["React", "Express.js", "PostgreSQL", "Redux"],
      link: "https://feelexport.com",
      github: null,
    },
    {
      id: 4,
      title: "Cronoss Tech",
      description: "Technology solutions company website showcasing innovative software development and IT consulting services.",
      image: "/projects/cronosstech.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      link: "https://cronosstech.com",
      github: null,
    },
    {
      id: 5,
      title: "HPS Lift",
      description: "Corporate website for an elevator and lift systems company, featuring product catalogs and service information.",
      image: "/projects/hps-lift.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://hpslift.com",
      github: null,
    },
    {
      id: 6,
      title: "Weather App",
      description: "A responsive weather application that provides real-time weather data and forecasts for cities worldwide.",
      image: "/projects/weather-app.png",
      technologies: ["React", "OpenWeather API", "CSS3", "Chart.js"],
      link: "https://weather-app-demo.com",
      github: "https://github.com/ayberkkk/weather-app",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="heading-2 mb-4">
          <span className="gradient-text">{t("projects")}</span>
        </h2>
        <p className="body-text">
          {t("showcasingMyWork")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative animate-scaleIn"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="card card-hover overflow-hidden h-full flex flex-col">
              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <FaExternalLinkAlt className="text-gray-900 dark:text-white" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <FaGithub className="text-gray-900 dark:text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("techStack")}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`badge ${
                          hoveredProject === project.id ? 'badge-primary' : 'badge-secondary'
                        } transition-all duration-300`}
                        style={{
                          transitionDelay: `${techIndex * 50}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative gradient border on hover */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
