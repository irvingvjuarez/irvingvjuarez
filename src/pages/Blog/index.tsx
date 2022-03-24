const Blog: React.FC = (): JSX.Element => {
  return(
    <article className="blog">

      <section className="blog__wrapper">
        <h2>Recent blog posts.</h2>

        <section className="blog__cards"></section>

      </section>

    </article>
  )
}

export { Blog }