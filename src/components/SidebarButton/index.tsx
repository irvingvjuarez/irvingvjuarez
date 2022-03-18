interface SidebarButtonProps {
  stroke?: boolean;
}

const SidebarButton: React.FC = ({ children }): JSX.Element => {
  return(
    <button className="sidebar-btn" title="">
      <span className="sidebar-btn__bar"></span>

      {children}
    </button>
  )
}

export { SidebarButton }