import { Tags } from "../../containers/Tags"

const BlogCard: React.FC = (): JSX.Element => {
  return(
    <div className="blog-card">
      <section className="blog-card__thumbnail"></section>

      <section className="blog-card__content">
        <Tags data={["Education"]}/>

        <div  className="blog-card__description">
          <h2>Title of the article</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptas eius voluptatibus ex explicabo.
          </p>
        </div>
      </section>


    </div>
  )
}

export { BlogCard }