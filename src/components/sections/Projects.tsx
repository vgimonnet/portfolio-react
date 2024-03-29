import { useEffect, useState } from "react";
import { PROJECTS } from "../../data/projects.data";
import { Project } from "../../types/project.type";
import ProjectCard from "../project/ProjectCard";
import { Transition } from "@headlessui/react";

const Projects = () => {

  const [showGoUpButton, setShowGoUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoUp(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section id="projects" className="h-full relative flex items-center flex-col mt-20 ">
      <h1 
        className="
          text-4xl lg:text-6xl font-bold relative pb-2
          before:content[''] before:absolute before:w-1/2 before:h-1 before:bottom-0 before:left-1/4 before:border before:border-white before:bg-white before:rounded"
      >Projets</h1>

      <div className="
        flex flex-col flex-no-wrap items-center w-full rounded mt-10 pb-20
        md:flex-row md:overflow-x-auto
        lg:mt-20
      ">
        { PROJECTS.map((project: Project, index: number) => <ProjectCard project={project}  key={index} />) }
      </div>

      <Transition
        className="h-full md:hidden"
        show={showGoUpButton}
        enter="transition-all ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button 
          className="
          bg-gray-800 text-white border rounded-full fixed bottom-1/2 right-3 cursor-pointer box-border transition-all duration-500 hover:bg-white hover:text-gray-800
            w-10 h-10 flex items-center justify-center
          "
          onClick={scrollToTop}
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
          </svg>
        </button>
      </Transition>
    </section>
  )
};

export default Projects;