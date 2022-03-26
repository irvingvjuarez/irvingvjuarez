import { useNavigate } from "react-router-dom"
import { ActionInterface } from "../../globalTypes"

interface HomeProps {
  dispatch: React.Dispatch<ActionInterface>
}

const Home: React.FC<HomeProps> = ({ dispatch }): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (route: string) => {
    dispatch({ type: "ROUTE", payload: route })
    navigate(`/${route}`)
  }

  return(
    <article className="home">
      <section className="home__content">
        <span className="home__subtitle">Hi there! My name is</span>

        <h2 className="home__name">Irving Juárez.</h2>

        <h2 className="home__brief">I build stuff for the web.</h2>

        <h3 className="home__description">
          I am a Front-end Engineer focused on UI design and user experience. Currently looking for a job.
        </h3>

        <div className="home__ctas">
          <button onClick={() => handleClick("projects")}>
            View my work.
          </button>
          <button onClick={() => handleClick("contact")}>
            Contact me.
          </button>
        </div>
      </section>
    </article>
  )
}

export { Home }