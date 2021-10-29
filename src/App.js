import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Algorithims from "./components/Algorithims/Algorithims";
import Contact from "./components/Contact/Contact";

import "./App.css";

const App = () => {
  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#7D1F00"];

  const randomColor = colors[Math.floor(Math.random() * 4)];

  console.log(randomColor);

  return (
    <>
      <NavTabs theme={randomColor} />
      <AboutMe theme={randomColor} />
      <Projects theme={randomColor} />
      <Algorithims theme={randomColor} />
      <Contact theme={randomColor} />
    </>
  );
};

export default App;
