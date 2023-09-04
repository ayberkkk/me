"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Wheel2 from "./Whell-2";
import Link from "next/link";
import { useTheme } from "next-themes";

const projects = [
  {
    id: 1,
    title: "Çağlak Süt Ürünleri",
    imageSrc: "/projects/caglak.png",
    link: "caglak.feelmedya.com",
  },
  {
    id: 2,
    title: "Ribat Panel System",
    imageSrc: "/projects/ribat.png",
    link: "ribat.feelmedya.com",
  },
  {
    id: 3,
    title: "Cartoon",
    imageSrc: "/projects/cartoon.png",
  },
  {
    id: 4,
    title: "Bank Mobile App Landing Page",
    imageSrc: "/projects/landing.png",
  },
  {
    id: 5,
    title: "NFT",
    imageSrc: "/projects/nft.png",
  },
  {
    id: 6,
    title: "Software Company",
    imageSrc: "/projects/software.png",
  },
  {
    id: 7,
    title: "Nursery",
    imageSrc: "/projects/nursery.png",
  },
];

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
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg desc-box p-2 relative"
        ref={cardRef}
      >
        <Image
          className="w-full"
          src={project.imageSrc}
          alt={project.title}
          width={250}
          height={250}
        />
        <div className="py-4">
          <div
            className={`text-2xl mb-2 tracking-wide ${
              theme === "dark" ? "dark:text-white" : "text-black"
            }`}
          >
            {project.title}
          </div>
        </div>
        <div class="pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tracking-widest">
            #bootstrap
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tracking-widest">
            #animate
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tracking-widest">
            #js
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tracking-widest">
            #jquery
          </span>
        </div>
        <span class="absolute rounded-lg top-0 left-0"></span>
        <span class="absolute rounded-lg top-0 right-0"></span>
        <span class="absolute rounded-lg bottom-0 left-0"></span>
        <span class="absolute rounded-lg bottom-0 right-0"></span>
      </div>
    </a>
  );
};

export default function Projects() {
  const { theme } = useTheme();
  return (
    <div id="project" className="lg:p-40 p-10">
      <Wheel2 />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        className={`button rounded-lg p-3 table mx-auto mt-5 transition-all ease-in ${
          theme === "dark" ? "dark:bg-slate-800 hover:bg-slate-700" : "bg-slate-950 text-white hover:bg-slate-700"
        }`}
        href="https://github.com/ayberkkk"
      >
        All My Project
      </Link>
    </div>
  );
}
