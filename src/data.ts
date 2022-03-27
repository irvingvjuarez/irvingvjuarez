import Yardsale from "./assets/images/yardsale.jpg";
import Weather from "./assets/images/weather.png";
import Plugin from "./assets/images/plugin.png";

import First from "./assets/images/first.jpg";
import Second from "./assets/images/second.jpeg";
import Third from "./assets/images/third.jpg";
import Fourth from "./assets/images/fourth.jpg";
import Fifth from "./assets/images/fifth.png";
import Sixth from "./assets/images/sixth.png";

const data = {
  twitter: "https://twitter.com/irvingvjuarez1",
  linkedin: "https://www.linkedin.com/in/irvingvjuarez/",
  github: "https://github.com/irvingvjuarez",
  email: "irvingjuarez274@gmail.com",
  currentCompany: "Lyfbridge",
  reposUrl: "https://github.com/irvingvjuarez?tab=repositories",
  medium: "https://medium.com/@irvingvjuarez",
  blogposts: [
    {
      id: 0,
      title: "How a computer works?",
      description: "We (human beings) are constantly looking for better ways to improve our work and activities in the daily basis",
      tags: ["Computer Science"],
      img: First,
    },
    {
      id: 1,
      title: "Build a Shopping Cart using React and TypeScript",
      description: "By the end of this tutorial, you will have the key-concepts to build a Shopping Cart App using React.js with TypeScript.",
      tags: ["React.js"],
      img: Second,
    },
    {
      id: 2,
      title: "How useful a bachelor’s degree is in 2022?",
      description: "Obtaining a bachelor’s degree used to be a way for students to stand out from others in a highly competitive job market.",
      tags: ["Education"],
      img: Third,
    },
    {
      id: 3,
      title: "Critical review of the book that changed my life",
      description: "This book is about an experiment made by the US government where 2 scientists traveled to the past to meet Jesús of Nazareth.",
      tags: ["Reading"],
      img: Fourth,
    },
    {
      id: 4,
      title: "Understanding command line in 6 minutes",
      description: "The command line ( also known as shell, bash, console or prompt) is a powerful tool able to give orders to the Operating System or applications in our computer without a graphic user interface (GUI).",
      tags: ["Linux"],
      img: Fifth,
    },
    {
      id: 5,
      title: "How to install Windows Subsystem for Linux (WSL) in Windows 10?",
      description: "Windows Subsystem for Linux lets developers run a GNU/Linux environment, including most command-line tools, utilities, and applications directly on Windows",
      tags: ["Wsl 2"],
      img: Sixth,
    },
  ],
  projects: [
    {
      id: 0,
      status: "Personal Project",
      title: "Yard Sale",
      achievements: [
        "Build and deploy a SPA using React.js and TypeScript",
        "Consuming and printing data from fakestore API",
        "Dynamic routing",
        "Implementation of SEO increasing site visibility by 50%"
      ],
      technologies: ["TypeScript", "SCSS", "HTML", "React.js"],
      repo: "https://github.com/irvingvjuarez/yard-sale",
      online: "https://shopping-cart-juarez.netlify.app/",
      img: Yardsale
    },
    {
      id: 1,
      status: "Featured Project",
      title: "Get Hired Code Tracker",
      achievements: [
        "Leading the UI team and contributing the creation of the design system",
        "Presenting the project to an audience of +10,000 non-technical people",
        "Working with vscode API using TypeScript and Next.js to build and deploy a plugin in the Microsoft Marketplace",
        "User authentication with three social media platforms using Auth0"
      ],
      technologies: ["Next.js", "TypeScript", "VSCode API", "Auth0"],
      repo: "https://github.com/Platzi-Master-C8/VSC-Plugins",
      online: "https://marketplace.visualstudio.com/items?itemName=GetHiredCodeTracker.gethired-code-tracker",
      img: Plugin
    },
    {
      id: 2,
      status: "Personal Project",
      title: "Weather App",
      achievements: [
        "Build and deploy a SPA using React.js",
        "Consuming and printing data from a weather API",
        "Implementation of a dynamic map with +3 layers of visibility",
      ],
      technologies: ["JavaScript", "React.js", "SASS", "HTML"],
      repo: "https://github.com/irvingvjuarez/weatherApp",
      online: "https://irvingjuarezweatherapp.netlify.app/",
      img: Weather
    }
  ],
  repos: [
    {
      id: 0,
      title: "Yard Sale",
      repo: "https://github.com/irvingvjuarez/yard-sale",
      online: "https://shopping-cart-juarez.netlify.app/",
      description: "Yard Sale emulates an e-commerce app flow. This project was based on React Practical course on Platzi and was created to simulate an shopping cart.",
      technologies: ["React.js", "SASS", "HTML", "Fakestore API", "TypeScript"]
    },
    {
      id: 1,
      title: "Memes generator",
      repo: "https://github.com/irvingvjuarez/memes-generator",
      online: "https://memeconstructor.netlify.app/",
      description: "Create plenty of memes with this open-source app. Choose the size and positions of the text as well as the image.",
      technologies: ["JavaScript", "SCSS", "HTML", "React.js"]
    },
    {
      id: 2,
      title: "Weather App",
      repo: "https://github.com/irvingvjuarez/weatherApp",
      online: "https://irvingjuarezweatherapp.netlify.app/",
      description: "Figure out what the weather will be within 24 hrs or for the next 7 days. Enjoy an awesome UI while checking the time out.",
      technologies: ["JavaScript", "Weather API", "SCSS", "HTML", "React.js"]
    },
    {
      id: 3,
      title: "Qwerty Keyboard ",
      repo: "https://github.com/irvingvjuarez/qwerty-keyboard",
      online: "https://irvingjuarez.github.io/qwerty-keyboard/",
      description: "Algorithmia challenge. Enter an input and the keyboard will emulate the typing in the screen. DOM manipulation in action for this app.",
      technologies: ["JavaScript", "CSS", "HTML", "Dynamic Programming"]
    },
    {
      id: 4,
      title: "To-Do App",
      repo: "https://github.com/irvingvjuarez/todoApp",
      online: "https://todostask.netlify.app/",
      description: "CRUD To-do app with sections and a minimalistic UI. Create, Remove, Update and Delete tasks and categories for these in just one place.",
      technologies: ["JavaScript", "SCSS", "HTML", "React.js"]
    },
    {
      id: 5,
      title: "GraphiCal",
      repo: "https://github.com/irvingvjuarez/GraphiCal",
      online: "https://graphical.netlify.app/",
      description: "Graphing Calculator used to print dots in the canvas.",
      technologies: ["JavaScript", "SCSS", "HTML", "React.js", "Canvas"]
    }
  ]
}

export { data }