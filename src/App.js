import NavTabs from "./components/NavTabs/NavTabs";
import AboutMe from "./components/AboutMe/AboutMe";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavTabs />
      <AboutMe />
    </ThemeProvider>
  );
};

export default App;
