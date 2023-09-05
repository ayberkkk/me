import React from "react";
import Wheel from "./Whell";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const SkillItem = ({ src, text }) => {
  const { theme } = useTheme();
  const skillItemClasses = `my-2 text-center p-4 ${
    theme === "dark" ? "dark:text-white" : "text-black"
  }`;

  return (
    <li className="px-4 text-center">
      <Image className="table m-auto" src={src} width={40} height={40} />
      <span className={skillItemClasses}>{text}</span>
    </li>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    { src: "/skills/html.svg", text: t('html') },
    { src: "/skills/css.svg", text: t('css') },
    { src: "/skills/sass.svg", text: t('sass') },
    { src: "/skills/bootstrap.svg", text: t('bootstrap') },
  ];
  const skills2 = [
    { src: "/skills/tailwind.svg", text: t('tailwind') },
    { src: "/skills/js.svg", text: t('js') },
    { src: "/skills/jquery.png", text: t('jquery') },
  ];

  const skills3 = [
    { src: "/skills/react.svg", text: t('react') },
    { src: "/skills/next.png", text: t('next') },
  ];

  return (
    <div id="skills" className="p-30 mt-10 lg:p-40 p-10">
      <Wheel />
      <div className="desc-box relative">
        <ul className="flex flex-1 items-center justify-center p-10 mt-10">
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </ul>
        <ul className="flex flex-1 items-center justify-center p-10">
          {skills2.map((skill2, index) => (
            <SkillItem key={index} {...skill2} />
          ))}
        </ul>
        <ul className="flex flex-1 items-center justify-center p-10">
          {skills3.map((skill3, index) => (
            <SkillItem key={index} {...skill3} />
          ))}
        </ul>
        <span className="absolute rounded-lg top"></span>
        <span className="absolute rounded-lg float-right right"></span>
        <span className="absolute rounded-lg bottom"></span>
        <span className="absolute rounded-lg float-left left"></span>
      </div>
    </div>
  );
};

export default Skills;
