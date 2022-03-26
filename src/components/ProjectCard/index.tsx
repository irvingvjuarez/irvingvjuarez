import { Links } from "../../containers/Links";
import { Tags } from "../../containers/Tags";

interface ProjectCardProps {
  status: string;
  title: string;
  achievements: Array<string>;
  technologies: Array<string>;
  repo: string;
  online: string;
  img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ status, title, achievements, technologies, repo, online, img }): JSX.Element => {
  return(
    <div className="project-card">

      <section className="project-card__info">
        <div>
          <div className="project-card__header">
            <span>{status}</span>
          </div>

          <div className="project-card__content">
            <h2>{title}</h2>
            <ul>
              {achievements.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Tags data={technologies} />
          <div className="project-card__links">
            <Links
              repo={repo}
              online={online}
            />
          </div>
        </div>
      </section>

      <section className="project-card__thumbnail">
        <a href={online} target="_blank">
          <img src={img} alt={title} title={title}/>
        </a>
      </section>
    </div>
  )
}

export { ProjectCard }