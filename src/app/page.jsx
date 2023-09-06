"use client";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import { useEffect, useState } from "react";
import Preloader from "@/components/Loader";
import Contact from "@/pages/Contact";
import ScrollUpButton from "@/components/ScrollUp";
import DownloadCV from "@/components/DownloadCV";

const Page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="row-auto">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <About />
            <Skills />
            <Projects />
            <Contact/>
            <DownloadCV/>
            <ScrollUpButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
