import { Links } from "../../containers/Links"

const RepoCard: React.FC = (): JSX.Element => {
  return(
    <div className="repo-card">
      <Links />

      <div className="repo-card__body">
        <h2>Title of the project</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, nulla, saepe non autem dolor placeat vel, illum magni alias rerum cupiditate deleniti neque! Quisquam, aspernatur. Dolor atque esse distinctio iusto?
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