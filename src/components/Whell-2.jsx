"use client";
import React, { useState, useEffect } from "react";

const Wheel = () => {
  const [rotation, setRotation] = useState(0);

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
          right: 0,
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,0 A100,100 0 0,1 200,100 A100,100 0 0,1 100,200 A100,100 0 0,1 0,100 A100,100 0 0,1 100,0"
            fill="currentColor"
          />
          <text textAnchor="middle" fill="currentColor" dy="40" x="100" y="100">
            <textPath
            className="text-gray-900"
              href="#circle-button-text"
              style={{ fontSize: "30px", letterSpacing: "10px"}}
            >
              Projects
            </textPath>
          </text>
          <defs>
            <path
              id="circle-button-text"
              d="M100,0 A100,100 0 0,1 200,100 A100,100 0 0,1 100,200 A100,100 0 0,1 0,100 A100,100 0 0,1 100,0"
            ></path>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Wheel;
