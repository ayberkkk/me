import About from "@/pages/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <div className="container mx-auto">
      <div className="row-auto">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Page;
