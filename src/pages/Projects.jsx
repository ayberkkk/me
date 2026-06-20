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
      image: "/projects/matabt.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
      link: "https://matabt.com",
      github: null,
    },
    {
      id: 2,
      title: "Nada Hub",
      image: "/projects/nadahub.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
      link: "https://nadahub.com",
      github: null,
    },
    {
      id: 3,
      title: "Feel Export",
      image: "/projects/feel-export.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://feelexport.com",
      github: null,
    },
    {
      id: 4,
      title: "Cronoss Tech",
      image: "/projects/cronosstech.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
      link: "https://cronosstech.com",
      github: null,
    },
    {
      id: 5,
      title: "HPS Lift",
      image: "/projects/hps-lift.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
      link: "https://hpslift.com",
      github: null,
    },
    {
      id: 6,
      title: "plan/lab",
      image: "/projects/planlab.png",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://planlab-kappa.vercel.app/tr",
      github: "https://github.com/ayberkkk/planlab",
      featured: true,
    },
    {
      id: 7,
      title: "Weather App",
      image: "/projects/weather-app.png",
      technologies: ["React", "Material UI", "OpenWeather API"],
      link: "https://main--helpful-daifuku-90c78f.netlify.app/",
      github: "https://github.com/ayberkkk/weather-web-project",
    },
    {
      id: 8,
      title: "Frontend Mentor",
      image: "/projects/fr-mentor.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "fr-challenge.netlify.app/",
      github: "https://github.com/ayberkkk/frontend-challenges",
    },
    {
        id: 9,
      title: "Quiz App",
      image: "/projects/quiz.png",
      technologies: ["React", "Material UI", "OpenTDB API", "Tailwind CSS"],
      link: "https://react-quiz-website.netlify.app/",
      github: "https://github.com/ayberkkk/quiz-app",
    },
    {
      id: 10,
      title: "Çağlak",
      image: "/projects/caglak.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
      link: "https://caglak.com",
      github: null,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="heading-2 mb-4">
          <span className="gradient-text">{t("projects")}</span>
        </h2>
        <p className="body-text">{t("showcasingMyWork")}</p>
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

                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                    Featured
                  </span>
                )}

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
                          hoveredProject === project.id
                            ? "badge-primary"
                            : "badge-secondary"
                        } transition-all duration-300`}
                        style={{
                          transitionDelay: `${techIndex * 50}ms`,
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
