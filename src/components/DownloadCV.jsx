"use client";
import { useEffect, useState } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const downloadCV = () => {
    const cvFilePath = "/AyberkTigli.pdf";
    const a = document.createElement("a");
    a.href = cvFilePath;
    a.download = "AyberkTigli.pdf";
    a.click();
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-4 p-2 bg-green-700 rounded-full transition-all duration-300 ease-in hover:bg-green-900 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      <button className="focus:outline-none" onClick={downloadCV}>
        CV İndir
      </button>
    </div>
  );
};

export default ScrollUpButton;
