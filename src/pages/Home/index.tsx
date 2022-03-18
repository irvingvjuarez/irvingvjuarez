const Home: React.FC = (): JSX.Element => {
  return(
    <article className="home">
      <section className="home__content">
        <span className="home__subtitle">Hi there! My name is</span>

        <h2 className="home__name">Irving Juárez</h2>

        <h2 className="home__brief">I build stuff for the web</h2>

        <h3 className="home__description">
          I am a Front-end Engineer focused on UI design and user experience. Currently looking for a job.
        </h3>

        <div>
          <button>View my work.</button>
          <button>Contact me.</button>
        </div>
      </section>
    </article>
  )
}

export { Home }