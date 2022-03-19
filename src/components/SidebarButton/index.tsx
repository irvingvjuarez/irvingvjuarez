import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";

interface SidebarButtonProps {
  route: string;
  onclick: Function;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ children, route, onclick }): JSX.Element => {
  const navigate = useNavigate()
  const state: StateInterface = useContext(ctx) as StateInterface
  const to: string = route === "/" ? "" : route
  const newRoute: string = route === "/" ? "home" : route
  const handleClick = () => {
    navigate(`/${to}`)
    onclick(newRoute)
  }

  return(
    <button className={`sidebar-btn ${newRoute === state.current && "selected"}`} title="" onClick={handleClick}>
      <span className="sidebar-btn__bar"></span>

      {children}
    </button>
  )
}

export { SidebarButton }