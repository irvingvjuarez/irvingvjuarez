import { ProjectCard } from "../../components/ProjectCard";

const Projects: React.FC = (): JSX.Element => {
  return(
    <article className="projects">

      <section className="projects__wrapper">
        <h2>Things I've built.</h2>

        <section className="projects__cards">
          <ProjectCard />
        </section>
      </section>
    </article>
  )
}

export { Projects }