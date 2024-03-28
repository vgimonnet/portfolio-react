type Project = {
  title: string;
  description: string;
  link: string;
  picture: string;
}

const PROJECTS: Project[] = [
  {
    title: 'UCA Sport',
    description: 'Gestion des activité culturelles et sportives de l\'université de Nice.',
    link: 'https://sport.univ-cotedazur.fr/fr/',
    picture: 'public/projects/uca.png'
  },
  {
    title: 'UCA Sport',
    description: 'Gestion des activité culturelles et sportives de l\'université de Nice.',
    link: 'https://sport.univ-cotedazur.fr/fr/',
    picture: 'public/projects/uca.png'
  },
  {
    title: 'UCA Sport',
    description: 'Gestion des activité culturelles et sportives de l\'université de Nice.',
    link: 'https://sport.univ-cotedazur.fr/fr/',
    picture: 'public/projects/uca.png'
  }
]

const Projects = () => {

  return (
    <section id="projects" className="h-full relative flex justify-around items-center flex-col my-20 ">
      <h1 
        className="
          text-4xl lg:text-6xl font-bold relative pb-2
          before:content[''] before:absolute before:w-1/2 before:h-1 before:bottom-0 before:left-1/4 before:border before:border-white before:bg-white before:rounded"
      >Projects</h1>

      {/* <ul className="flex flex-row justify-start items-center flex-nowrap overflow-auto h-8/10 mt-10 gap-2"> */}
      <ul className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">      
        {
          PROJECTS.map((project: Project) => {
            return (
              // <li className="flex flex-col justify-center items-center gap-2 w-[28rem] border rounded p-2" key={project.title}>
              <li className="carousel-item" key={project.title}>
                <a href={project.link} target="_blank">
                  <img src={project.picture} alt={project.title} className="h-48" />
                </a>
                <p>{project.title}</p>
                <p>{project.description}</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
};

export default Projects;