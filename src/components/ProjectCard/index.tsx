import { Links } from "../../containers/Links";
import { Tags } from "../../containers/Tags";

const ProjectCard: React.FC = (): JSX.Element => {
  return(
    <div className="project-card">

      <section className="project-card__info">
        <div className="project-card__header">
          <span>Featured project</span>
        </div>

        <div className="project-card__content">
          <h2>Get Hired Code Tracker</h2>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Odio totam mollitia tempore. Ad, nulla sequi. Deserunt, officiis.</li>
            <li>Quas ducimus officia quibusdam nulla ad maxime non porro libero rerum sapiente neque.</li>
            <li>Deserunt, officiis.</li>
          </ul>
        </div>

        <Tags />

        <div className="project-card__links">
          <Links />
        </div>
      </section>

      <section className="project-card__thumbnail"></section>
    </div>
  )
}

export { ProjectCard }