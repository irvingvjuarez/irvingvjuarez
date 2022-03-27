import { Links } from "../../containers/Links"

interface RepoCardProps {
  title: string;
  repo: string;
  online: string;
  description: string;
  technologies: Array<string>;
}

const RepoCard: React.FC<RepoCardProps> = ({ title, repo, online, description, technologies }): JSX.Element => {
  return(
    <div className="repo-card">
      <Links repo={repo} online={online} />

      <div className="repo-card__wrapper">

        <div className="repo-card__body">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>

        <div className="repo-card__tags">
          {technologies.map(technology => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

      </div>
    </div>
  )
}

export { RepoCard }