import React from "react";
import Wheel from "../components/Whell";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const SkillItem = ({ src, text, progress }) => {
  const { theme } = useTheme();
  const skillItemClasses = `my-2 text-center lg:p-4 ${
    theme === "dark" ? "dark:text-white" : "text-black"
  }`;

  return (
    <div className="px-4 text-center overflow-hidden mt-10">
      <Image
        className="table m-auto w-10 h-10 object-cover scale-90 ease-in duration-300 hover:scale-110"
        src={src}
        width={40}
        height={40}
        title={text}
        alt={text}
      />
      <span className={skillItemClasses}>{text}</span>
      <div className="bg-gray-300 dark:bg-gray-100 h-2 mt-2 rounded">
        <div
          className={`bg-green-500 h-2 w-0 transition-all ease-in-out duration-300 rounded`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const allSkills = [
    { src: "/skills/html.svg", text: t("html"), progress: 100 },
    { src: "/skills/css.svg", text: t("css"), progress: 100 },
    { src: "/skills/sass.svg", text: t("sass"), progress: 80 },
    { src: "/skills/bootstrap.svg", text: t("bootstrap"), progress: 100 },
    { src: "/skills/tailwind.svg", text: t("tailwind"), progress: 50 },
    { src: "/skills/js.svg", text: t("js"), progress: 50 },
    { src: "/skills/jquery.png", text: t("jquery"), progress: 50 },
    { src: "/skills/react.svg", text: t("react"), progress: 50 },
    { src: "/skills/next.png", text: t("next"), progress: 45 },
    { src: "/skills/php.png", text: t("php"), progress: 30 },
    { src: "/skills/laravel.png", text: t("php"), progress: 30 },
  ];

  return (
    <div id="skills" className="p-30 mt-10 lg:p-40">
      <Wheel />
      <div className="animate__animated animate__fadeInDown">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {allSkills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
