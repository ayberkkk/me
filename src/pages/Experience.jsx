import React from "react";
import { useTranslation } from "react-i18next";
import { BiCodeAlt } from "react-icons/bi";

const experiences = [
  {
    id: 1,
    company: "Mata - Nada Hub",
    position: "Frontend Developer",
    period: "April 2024 - Present",
    periodTr: "Nisan 2024 - Devam Ediyor",
    descriptionKey: "exp1Desc",
    technologies: [
      "React",
      "Laravel",
      "JavaScript",
      "HTML/CSS",
      "PHP",
      "Laravel",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Feel Medya & Organizasyon",
    position: "Frontend Developer",
    period: "August 2023 - February 2024",
    periodTr: "Ağustos 2023 - Şubat 2024",
    descriptionKey: "exp2Desc",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
  },
  {
    id: 3,
    company: "Serenay Yazılım",
    position: "Jr. Frontend Developer",
    period: "February 2021 - March 2023",
    periodTr: "Şubat 2021 - Mart 2023",
    descriptionKey: "exp3Desc",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "E-commerce",
      "PHP",
      "CodeIgniter",
    ],
  },
  {
    id: 4,
    company: "Blueit",
    position: "Jr. Frontend Developer (Volunteer)",
    positionTr: "Jr. Frontend Developer (Gönüllü)",
    period: "October 2021 - June 2022",
    periodTr: "Ekim 2021 - Haziran 2022",
    descriptionKey: "exp4Desc",
    technologies: ["HTML", "CSS", "JavaScript", "UI Development"],
    volunteer: true,
  },
];

const ExperienceCard = ({ experience }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 group-last:hidden" />

      {/* Timeline dot */}
      <div
        className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full ${
          experience.current ? "bg-green-500" : "bg-gray-400 dark:bg-gray-600"
        } ring-4 ring-white dark:ring-gray-900`}
      />

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {isEnglish
                ? experience.position
                : experience.positionTr || experience.position}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isEnglish ? experience.period : experience.periodTr}
            </span>
            {experience.current && (
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">
                {t("current")}
              </span>
            )}
            {experience.volunteer && (
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full font-medium">
                {t("volunteer")}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {t(experience.descriptionKey)}
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <BiCodeAlt className="text-lg" />
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("professionalExperience")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t("myJourneyInWebDev")}
        </p>
      </div>

      <div className="relative">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
