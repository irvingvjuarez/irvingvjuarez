import { useContext } from "react"
import { ctx } from "../../context"
import { StateInterface } from "../../globalTypes";
import { getCurrentInfo } from "./utils";

const Tabs: React.FC = (): JSX.Element => {
  const state = useContext(ctx) as StateInterface;
  const data = getCurrentInfo(state);

  return(
    <section className="tabs">
      <article>
        <img src={data.image} alt={state?.current} />
        <p>{`${state?.current}.${data.extension}`}</p>

        <hr />
      </article>
    </section>
  )
}

export { Tabs }