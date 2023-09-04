"use client";
import About from "@/pages/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";
import Preloader from "@/components/Loader";
import Contact from "@/components/Contact";
import ScrollUpButton from "@/components/ScrollUp";

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
            <ScrollUpButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
