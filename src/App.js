import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Algorithims from "./components/Algorithims/Algorithims";
import Contact from "./components/Contact/Contact";

import "./App.css";

const aliTestimonyObj = {
  testimony: "NEED THIS TESTIMONY",
  author: "Ali Muhammad",
  credentials: "Teacher, Quba Education Centre",
};

const App = () => {
  return (
    <>
      <NavTabs />
      <AboutMe />
      <Projects />
      <Algorithims />
      <Contact />
    </>
  );
};

export default App;
