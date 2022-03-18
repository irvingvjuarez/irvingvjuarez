import { useNavigate } from "react-router-dom";

interface SidebarButtonProps {
  route: string;
  onclick: Function;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ children, route, onclick }): JSX.Element => {
  const navigate = useNavigate()
  route = route === "/" ? "" : route;
  const handleClick = () => {
    navigate(`/${route}`)
    onclick(route === "" ? "root" : route)
  }

  return(
    <button className="sidebar-btn" title="" onClick={handleClick}>
      <span className="sidebar-btn__bar"></span>

      {children}
    </button>
  )
}

export { SidebarButton }