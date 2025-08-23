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
        { name: "HTML", level: 95, icon: "/skills/html.svg", color: "from-orange-400 to-orange-600" },
        { name: "CSS", level: 90, icon: "/skills/css.svg", color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, icon: "/skills/js.svg", color: "from-yellow-400 to-yellow-600" },
        { name: "jQuery", level: 80, icon: "/skills/jquery.png", color: "from-blue-500 to-blue-700" },
        { name: "React", level: 75, icon: "/skills/react.svg", color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 70, icon: "/skills/next.png", color: "from-gray-700 to-gray-900" },
      ],
    },
    {
      title: "CSS Frameworks & Tools",
      icon: "🎨",
      skills: [
        { name: "Bootstrap", level: 90, icon: "/skills/bootstrap.svg", color: "from-purple-500 to-purple-700" },
        { name: "Tailwind CSS", level: 85, icon: "/skills/tailwind.svg", color: "from-teal-400 to-teal-600" },
        { name: "SASS/SCSS", level: 80, icon: "/skills/sass.svg", color: "from-pink-400 to-pink-600" },
      ],
    },
    {
      title: "Backend & Others",
      icon: "⚙️",
      skills: [
        { name: "PHP", level: 75, icon: "/skills/php.png", color: "from-indigo-500 to-indigo-700" },
        { name: "Laravel", level: 70, icon: "/skills/laravel.png", color: "from-red-500 to-red-700" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="heading-2 mb-4">
          <span className="gradient-text">{t("skills")}</span>
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
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 200) + (index * 100) + 500}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
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

      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Skills;
