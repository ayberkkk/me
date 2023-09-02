"use client";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import ThemesComp from "./ThemesComp";

const Header = () => {
  const menu = [
    {
      name: "Projects",
      url: "#project",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <header className="flex items-center justify-between h-20 p-5">
    <div className="flex items-center">
      <div className="p-3 text-xl font-bold rounded-lg text-sky-600">abork</div>
    </div>
    <div className="flex items-center space-x-4 gap-5">
      {menu.map((mn, i) => (
        <MenuItems mn={mn} key={i} />
      ))}
      <ThemesComp />
    </div>
  </header>
  
  );
};

export default Header;
