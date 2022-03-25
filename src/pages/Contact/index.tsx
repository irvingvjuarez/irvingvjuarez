import Github from "../../assets/icons/github.png";
import Twitter from "../../assets/icons/twitter.png";
import Linkedin from "../../assets/icons/linkedin.png";

const Contact: React.FC = (): JSX.Element => {
  return (
    <article className="contact">

      <section className="contact__content">

        <div className="contact__text">
          <h2>Get in touch!</h2>
          <p>
            I am always looking for new challenging and exciting opportunities. So, don't hesitate sending me an email.
          </p>
          <p>
            Following me on my media to keep track of me!
          </p>
        </div>

        <div className="contact__media">
          <a href="" className="contact__media--linkedin" title="Linkedin">
            <img src={Linkedin} alt="" />
          </a>
          <a href="" className="contact__media--github" title="Github">
            <img src={Github} alt="" />
          </a>
          <a href="" className="contact__media--twitter" title="Twitter">
            <img src={Twitter} alt="" />
          </a>
        </div>

        <button>
          Say Hi!
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Contact</title><g id="mail"><path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"/></g></svg>
        </button>

        <span>
          Designed and built by <a href="" title="Irving's twitter">Irving Juárez</a>.
        </span>
      </section>

    </article>
  )
}

export { Contact }