import React from "react";
import Wheel from "@/components/Whell";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="p-40">
      <Wheel />
      <div className="desc-box relative">
        <ul className="flex flex-1 items-center justify-center p-10 mt-10">
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/html.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Advenced</span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/css.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">
              Intermediate
            </span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/sass.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Middle</span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/bootstrap.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">
              Intermediate
            </span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/tailwind.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Basic</span>
          </li>
        </ul>
        <ul className="flex flex-1 items-center justify-center p-10">
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/js.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Basic</span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/jquery.png"
              width={40}
              height={40}
            />
            <span className="dark:text-white text-sm text-center p-4">
              Basic
            </span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/react.svg"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Basic</span>
          </li>
          <li className="px-4">
            <Image
              className="table m-auto"
              src="/skills/next.png"
              width={40}
              height={40}
            />
            <span className="text-white text-sm text-center p-4">Basic</span>
          </li>
        </ul>
        <span class="absolute rounded-lg top"></span>
        <span class="absolute rounded-lg float-right right"></span>
        <span class="absolute rounded-lg bottom"></span>
        <span class="absolute rounded-lg float-left left"></span>
      </div>
    </div>
  );
};

export default Skills;
