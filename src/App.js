import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Algorithims from "./components/Algorithims/Algorithims";

// import { ThemeProvider } from "@mui/material/styles";
// import { createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";
import "./App.css";

const App = () => {
  return (
    <>
      <NavTabs />
      <AboutMe />
      <Projects />
      <Algorithims />
    </>
  );
};

export default App;
