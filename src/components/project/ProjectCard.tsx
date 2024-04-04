import { useContext } from "react";
import { Project } from "../../types/project.type"
import { projectModalContext } from "../../context/ProjectModalContext";

type ProjectCardProps = {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  const { setIsOpen, setProject } = useContext(projectModalContext);

  const openModal = () => {
    document.querySelector('body')?.classList.add('overflow-hidden');
    setProject(project);
    setIsOpen(true);
  };

  return (
    <div className="
      flex p-4 gap-4 w-64 text-white
      sm:w-96
      md:w-fit
    ">
      <div className="border rounded-xl bg-gray-800 px-4 py-6 flex flex-col items-center gap-4 w-80">
        <img className="rounded border" src={ project.picture } alt={ project.title } loading="lazy" />
        <h1 className="text-lg font-bold tracking-wider">
          { project.title }
        </h1>
        <p className="text-sm font-medium tracking-wider line-clamp-3 h-16">
          { project.description }
        </p>
        <button
          className="
            text-sm font-medium tracking-wider text-white no-underline transition-all duration-500 px-4 py-2 border rounded
            hover:bg-white hover:text-gray-800
          "
          onClick={() => openModal()}
        >
          Voir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard;