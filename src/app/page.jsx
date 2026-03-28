"use client";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Preloader from "@/components/Loader";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 150);
  };

  const renderContent = () => {
    const contentClass = `transition-all duration-500 ${
      isTransitioning 
        ? 'opacity-0 transform translate-y-4 scale-95' 
        : 'opacity-100 transform translate-y-0 scale-100'
    }`;

    return (
      <div className={contentClass}>
        {(() => {
          switch (activeTab) {
            case "about":
              return <About />;
            case "skills":
              return <Skills />;
            case "projects":
              return <Projects />;
            case "contact":
              return <Contact />;
            case "experience":
              return <Experience />;
            default:
              return <About />;
          }
        })()}
      </div>
    );
  };

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="min-h-screen bg-white pb-32 pt-0 noise-overlay shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </main>
    </>
  );
}

// Export state for layout
