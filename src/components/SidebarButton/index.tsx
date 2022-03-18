import { useNavigate } from "react-router-dom";

interface SidebarButtonProps {
  route: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ children, route }): JSX.Element => {
  const navigate = useNavigate()
  route = route === "/" ? "" : route;

  return(
    <button className="sidebar-btn" title="" onClick={() => navigate(`/${route}`)}>
      <span className="sidebar-btn__bar"></span>

      {children}
    </button>
  )
}

export { SidebarButton }