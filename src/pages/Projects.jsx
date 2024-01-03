"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Wheel2 from "../components/Whell-2";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { AiOutlineLink } from "react-icons/ai";

const projects = [
  {
    id: 1,
    title: "Çağlak Süt Ürünleri",
    imageSrc: "/projects/caglak.png",
    tags: ["#bootstrap", "#animate-css", "#tiny-slider"],
    link: "https://caglak.com/",
  },
  {
    id: 2,
    title: "Ribat Panel System",
    imageSrc: "/projects/ribat.png",
    tags: ["#bootstrap", "#animate-css", "#owl-carousel", "#lightbox"],
    link: "https://ribatpanel.com",
  },
  {
    id: 3,
    title: "CronossTech",
    imageSrc: "/projects/cronosstech.png",
    tags: [
      "#bootstrap",
      "#animate-css",
      "#swiperjs",
      "#jquery",
      "#lightbox",
      "#fancybox",
    ],
    link: "http://cronosstech.feelmedya.com/",
  },
  {
    id: 3,
    title: "Rasyon Yem Katkı",
    imageSrc: "/projects/rasyon.png",
    tags: ["#bootstrap", "#animate-css", "#swiperjs", "#jquery", "#lightbox"],
    link: "http://rasyon.feelmedya.com/",
  },
  {
    id: 3,
    title: "Sahbaz Group",
    imageSrc: "/projects/sahbaz-group.png",
    tags: [
      "#bootstrap",
      "#animate-css",
      "#swiperjs",
      "#jquery",
      "#lightbox",
      "#fancybox",
    ],
    link: "http://sahbazgroup.feelmedya.com/",
  },
  {
    id: 4,
    title: "Cartoon",
    imageSrc: "/projects/cartoon.png",
    tags: ["#bootstrap", "#animate-css"],
  },
  {
    id: 5,
    title: "Bank Mobile App Landing Page",
    imageSrc: "/projects/landing.png",
    tags: ["#bootstrap", "#animate-css"],
  },
  {
    id: 6,
    title: "NFT",
    imageSrc: "/projects/nft.png",
    tags: ["#bootstrap", "#animate-css"],
  },
  {
    id: 7,
    title: "Software Company",
    imageSrc: "/projects/software.png",
    tags: ["#bootstrap", "#animate-css"],
  },
  {
    id: 8,
    title: "Nursery",
    imageSrc: "/projects/nursery.png",
    tags: ["#bootstrap", "#animate-css"],
  },
  {
    id: 9,
    title: "Frontend Mentor Challenge",
    imageSrc: "/projects/fr-mentor.png",
    link: "https://fr-challenge.netlify.app/",
    tags: ["#bootstrap", "#animate-css", "#frontend-mentor"],
  },
  {
    id: 10,
    title: "Movie App",
    imageSrc: "/projects/movie-app.png",
    link: "https://movie-app-xi-puce.vercel.app/",
    tags: ["#tailwindcss", "#nextjs", "#tmdbAPI"],
  },
  {
    id: 11,
    title: "Weather App",
    imageSrc: "/projects/weather-app.png",
    link: "https://main--helpful-daifuku-90c78f.netlify.app/",
    tags: ["#react", "#openweatherAPI", "#axios"],
  },
];

const GoLink = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="go-link"
    >
      <AiOutlineLink className="icon ml-2 text-md font-bold" />
    </a>
  );
};

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const cardRef = useRef();

  useEffect(() => {
    const delay = project.id * 100;
    cardRef.current.classList.add("animate__animated", "animate__fadeInUp");
    cardRef.current.style.animationDelay = `${delay}ms`;
  }, [project.id]);

  return (
    <a
      className="cursor-pointer border rounded-lg border-gray-500 scale-90 transition ease-in duration-300 hover:scale-100"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div ref={cardRef}>
        <Image
          className="w-full rounded"
          src={project.imageSrc}
          alt={project.title}
          width={250}
          height={250}
        />
        <div className="py-4 px-4">
          <div
            className={`flex flex-1 items-center text-2xl mb-2 tracking-wide ${
              theme === "dark" ? "dark:text-white" : "text-black"
            }`}
          >
            {project.title} {project.link && <GoLink href={project.link} />}
          </div>
        </div>
        <div class="py-4 px-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default function Projects() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div id="project" className="lg:p-40 p-30 mt-10">
      <Wheel2 />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        className={`button rounded-lg p-3 table mx-auto mt-5 transition-all ease-in ${
          theme === "dark"
            ? "dark:bg-slate-800 hover:bg-slate-700"
            : "bg-slate-950 text-white hover:bg-slate-700"
        }`}
        href="https://github.com/ayberkkk"
      >
        {t("allProjects")}
      </Link>
    </div>
  );
}
