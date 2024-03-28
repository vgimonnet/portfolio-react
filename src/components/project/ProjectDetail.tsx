import { Project, Techno } from "../../types/project.type"

type ProjectDetailProps = {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {

  return (
    <section>
      <img src={project.picture} alt={project.title} />
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <ul>
          { project.technos.map((techno: Techno) => {
            return (
              <li>
                <span dangerouslySetInnerHTML={{ __html: techno.picture }}></span>
                <span>{techno.name}</span>
              </li>
            );
          }) }
        </ul>
      </div>
    </section>
  )
}

export default ProjectDetail;