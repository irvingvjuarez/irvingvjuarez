import { StateInterface } from "../../globalTypes";

import Blog from "../../assets/images/blog.png";
import Contact from "../../assets/images/contact.png";
import Github from "../../assets/images/github.png";
import Projects from "../../assets/images/projects.png";
import Home from "../../assets/images/root.png";
import Settings from "../../assets/images/settings.png";
import User from "../../assets/images/user.png";

export const getCurrentInfo = (state: StateInterface) => {
  const { current } = state
  const response = {
    image: "",
    extension: ""
  }

  switch(current){
    case "home":
      response.image = Home
      response.extension = "tsx"
    break;
    case "github":
      response.image = Github
      response.extension = "css"
    break;
    case "projects":
      response.image = Projects
      response.extension = "ts"
    break;
    case "blog":
      response.image = Blog
      response.extension = "js"
    break;
    case "contact":
      response.image = Contact
      response.extension = "html"
    break;
    case "user":
      response.image = User
      response.extension = "cc"
    break;
    case "settings":
      response.image = Settings
      response.extension = "py"
    break;
  }

  return response
}