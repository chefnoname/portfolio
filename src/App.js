import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

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
    </>
  );
};

export default App;
