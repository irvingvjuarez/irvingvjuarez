import Avatar from "../../assets/images/avatar7.jpg";
import { RepoCard } from "../../components/RepoCard";

import { data } from "../../data";

const Github: React.FC = (): JSX.Element => {
  return(
    <article className="github">
      <section className="github__wrapper">

        <a className="github__header" href={data.github} target="_blank">
          <hr className="github__header--bar"/>

          <div className="github__header--profile">
            <img src={Avatar} alt="" />
            <div>
              <h2>Irving Juárez</h2>
              <span>@irvingvjuarez</span>
            </div>

          </div>

          <div className="github__header--company">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.342 321.342">
            <g>
              <path d="M282.279,302.463V25.306h13.355V6.025H25.707v19.281h9.942v277.157H0v12.854h321.342v-12.854H282.279z M158.813,240.605
                c-9.981,0-18.072,7.911-18.072,17.674h-0.006v43.381H48.503V30.531h220.922v271.135h-92.54v-43.381
                C176.886,248.522,168.801,240.605,158.813,240.605z M81.936,63.969h29.287v29.287H81.936
                C81.936,93.257,81.936,63.969,81.936,63.969z M144.321,63.969h29.287v29.287h-29.287C144.321,93.257,144.321,63.969,144.321,63.969
                z M235.993,93.257h-29.281V63.969h29.281V93.257z M81.936,120.506h29.287v29.281H81.936
                C81.936,149.787,81.936,120.506,81.936,120.506z M144.321,120.506h29.287v29.281h-29.287
                C144.321,149.787,144.321,120.506,144.321,120.506z M235.993,149.787h-29.281v-29.281h29.281V149.787z M81.936,177.358h29.287
                v29.287H81.936C81.936,206.645,81.936,177.358,81.936,177.358z M144.321,177.358h29.287v29.287h-29.287
                C144.321,206.645,144.321,177.358,144.321,177.358z M235.993,206.639h-29.281v-29.287h29.281V206.639z M81.936,232.912h29.287
                v29.287H81.936C81.936,262.199,81.936,232.912,81.936,232.912z M235.993,262.199h-29.281v-29.287h29.281V262.199z"/>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
            <span>{data.currentCompany}</span>
          </div>
        </a>

        <article className="github__content">
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </article>
      </section>
    </article>
  )
}

export { Github }