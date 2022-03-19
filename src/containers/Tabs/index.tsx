import { useContext } from "react"
import { ctx } from "../../context"

import Blog from "../../assets/images/blog.png";
import Contact from "../../assets/images/contact.png";
import Github from "../../assets/images/github.png";
import Projects from "../../assets/images/projects.png";
import Root from "../../assets/images/root.png";
import Settings from "../../assets/images/settings.png";
import User from "../../assets/images/user.png";

const Tabs: React.FC = (): JSX.Element => {
  const state = useContext(ctx)

  return(
    <section className="tabs">
      <article>
        <img src={Blog} alt={state?.current} />
        <p>{`${state?.current}.js`}</p>

        <hr />
      </article>
    </section>
  )
}

export { Tabs }