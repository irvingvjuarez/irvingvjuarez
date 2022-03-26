import { BlogCard } from "../../components/BlogCard";
import { data } from "../../data";

const Blog: React.FC = (): JSX.Element => {
  return(
    <article className="blog">

      <section className="blog__wrapper">
        <h2>Recent blog posts.</h2>

        <section className="blog__cards">
          {data.blogposts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              tags={post.tags}
            />
          ))}
        </section>

      </section>

      <a href={data.medium} target="_blank" className="blog__cta">
        See Blog
      </a>
    </article>
  )
}

export { Blog }