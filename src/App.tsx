import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Github } from "./pages/Github";
import { Projects } from "./pages/Projects";
import { Settings } from "./pages/Settings";
import { User } from "./pages/User";

import { Layout } from "./containers/Layout";
import './App.scss';
import { useReducer } from "react";

import { reducerFn, initialState } from "./reducer";
import { ctx } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <BrowserRouter>
      <ctx.Provider value={state}>
        <Layout dispatch={dispatch}>
          <Routes>
            <Route path="/" element={<Home dispatch={dispatch} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/github" element={<Github />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ctx.Provider>
    </BrowserRouter>
  );
}

export default App;
