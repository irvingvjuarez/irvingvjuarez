import { ProjectCard } from "../../components/ProjectCard";

const Projects: React.FC = (): JSX.Element => {
  return(
    <article className="projects">
      <h2>Things I've built.</h2>

      <section className="projects__cards">
        <ProjectCard />
      </section>
    </article>
  )
}

export { Projects }