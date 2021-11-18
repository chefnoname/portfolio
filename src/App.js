import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Algorithims from "./components/Algorithims/Algorithims";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#262f35"];

  const randomColor = colors[Math.floor(Math.random() * 4)];

  console.log(randomColor);

  return (
    <>
      <NavTabs theme={randomColor} />
      <AboutMe theme={randomColor} />
      <Projects theme={randomColor} />
      <Algorithims theme={randomColor} />
      <Footer theme={randomColor} />
    </>
  );
};

export default App;
