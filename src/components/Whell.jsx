"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const Wheel2 = () => {
  const { t } = useTranslation();
  const [rotation, setRotation] = useState(0);
  const { theme, resolvedTheme,resolvedTheme2 } = useTheme(); 

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setRotation(rotation + 10);
      } else {
        setRotation(rotation - 10);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [rotation]);

  const textColor = resolvedTheme === "dark" ? "white" : "red";
  const textColor2 = resolvedTheme === "dark" ? "white" : "black";

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="MyPath"
            fill="none"
            stroke={textColor}
            d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"
          />

          <text>
            <textPath
              href="#MyPath"
              fill={textColor2}
              fontSize="20px" 
              letterSpacing="10px" 
            >
             🚀 {t("skills")} 
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Wheel2;
