import { Links } from "../../containers/Links"

interface RepoCardProps {
  title: string;
  repo: string;
  online: string;
  description: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ title, repo, online, description }): JSX.Element => {
  return(
    <div className="repo-card">
      <Links repo={repo} online={online} />

      <div className="repo-card__body">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>

      <div className="repo-card__tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>TypeScript</span>
      </div>
    </div>
  )
}

export { RepoCard }