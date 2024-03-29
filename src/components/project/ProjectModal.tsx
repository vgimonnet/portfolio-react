import { Transition } from "@headlessui/react";
import { Project, Techno } from "../../types/project.type";
import { useEffect } from "react";

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  closeModal: () => void;
}

const ProjectModal = ({ project, isOpen, closeModal }: ProjectModalProps) => {

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.id === 'overlay') {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleClick);
    } else {
      window.removeEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('click', handleClick);
    }
  });

  return (
    <Transition
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen"
      show={isOpen}
      enter="transition-all ease-in-out duration-500 delay-[150ms]"
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-0"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
        <div id="overlay" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden bg-overlay bg-blend-lighten fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen ">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute right-4" onClick={closeModal}>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>
                  <div className="p-4 md:p-5 space-y-4">
                    <img className="rounded border" src={ project.picture } alt={ project.title } />
                  </div>
                  <div className="p-4 md:p-5 border-t rounded-b border-gray-600">
                    <p className="text-base leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-4 md:p-5 border-t rounded-b border-gray-600">
                    <ul className="flex flex-row flex-wrap items-center justify-center text-gray-400 pt-6">
                        { project.technos && project.technos.map((techno: Techno, index: number) => {
                          return (
                            <li className="w-1/3 flex flex-col justify-center items-center pb-6" key={index}>
                              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: techno.picture }}></span>
                              <p>{techno.name}</p>
                            </li>
                          );
                        }) }
                      </ul>
                  </div>
                  <div className="flex items-center justify-center p-4 md:p-5 border-t rounded-b border-gray-600">
                    { project.link && 
                      <a
                        href={project.link} 
                        target="_blank"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Go on website
                      </a>
                    }
                    { !project.link && (
                      <p className="text-gray-400">Restricted access website</p>
                    ) }
                  </div>
              </div>
          </div>
      </div>
    </Transition>
  )
};

export default ProjectModal;