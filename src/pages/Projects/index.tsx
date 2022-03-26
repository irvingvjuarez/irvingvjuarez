import { ProjectCard } from "../../components/ProjectCard";
import { data } from "../../data";

const Projects: React.FC = (): JSX.Element => {
  return(
    <article className="projects">

      <section className="projects__wrapper">
        <h2>Things I've built.</h2>

        <section className="projects__cards">
          {data.projects.map(project => (
            <ProjectCard
              status={project.status}
              title={project.title}
              achievements={project.achievements}
              technologies={project.technologies}
              repo={project.repo}
              online={project.online}
              img={project.img}
            />
          ))}
        </section>
      </section>
    </article>
  )
}

export { Projects }