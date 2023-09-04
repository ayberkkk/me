"use client"
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 bg-gray-800 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      <button onClick={scrollToTop} className="focus:outline-none">
        <FaArrowCircleUp size={32} color="#fff" />
      </button>
    </div>
  );
};

export default ScrollUpButton;
