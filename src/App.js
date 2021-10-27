import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Algorithims from "./components/Algorithims/Algorithims";
import Testimonials from "./components/Testimonials/Testimonials";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
      <Testimonials />
    </>
  );
};

export default App;
