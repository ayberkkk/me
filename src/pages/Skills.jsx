"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "HTML", level: 95, icon: "/skills/html.svg" },
        { name: "CSS", level: 90, icon: "/skills/css.svg" },
        { name: "JavaScript", level: 85, icon: "/skills/js.svg" },
        { name: "jQuery", level: 80, icon: "/skills/jquery.png" },
        { name: "React", level: 75, icon: "/skills/react.svg" },
        { name: "Next.js", level: 70, icon: "/skills/next.png" },
      ],
    },
    {
      title: "CSS Frameworks & Tools",
      icon: "🎨",
      skills: [
        { name: "Bootstrap", level: 90, icon: "/skills/bootstrap.svg" },
        { name: "Tailwind CSS", level: 85, icon: "/skills/tailwind.svg" },
        { name: "SASS/SCSS", level: 80, icon: "/skills/sass.svg" },
      ],
    },
    {
      title: "Backend & Others",
      icon: "⚙️",
      skills: [
        { name: "PHP", level: 75, icon: "/skills/php.png" },
        { name: "Laravel", level: 70, icon: "/skills/laravel.png" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="heading-2 mb-4">
          <span className="text-black dark:text-white">{t("skills")}</span>
        </h2>
        <p className="body-text">
          {t("myTechnicalExpertise")}
        </p>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="animate-slideIn"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-float" style={{ animationDelay: `${categoryIndex * 300}ms` }}>
                {category.icon}
              </span>
              <h3 className="heading-3">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="card card-hover group animate-scaleIn"
                  style={{ animationDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 p-2 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative">
                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black dark:bg-white rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 200) + (index * 100) + 500}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 animate-shimmer"></div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {t("proficiency")}: {t(skill.name.toLowerCase().replace(/[.\s]/g, ''))}
                      </div>
                    </div>
                  </div>
                </div>
          ))}
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
