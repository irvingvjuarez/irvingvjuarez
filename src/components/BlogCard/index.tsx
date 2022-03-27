import { Tags } from "../../containers/Tags"

interface BlogCardProps {
  title: string;
  description: string;
  tags: Array<string>;
  img: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, tags, img, url }): JSX.Element => {
  return(
    <a className="blog-card" href={url} target="_blank" rel="noreferrer">
      <section className="blog-card__thumbnail">
        <img src={img} alt={title} />
      </section>

      <section className="blog-card__content">
        <Tags data={tags}/>

        <div  className="blog-card__description">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>
      </section>
    </a>
  )
}

export { BlogCard }