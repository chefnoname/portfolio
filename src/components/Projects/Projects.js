import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";

import "./Projects.css";
import img from "../AboutMe/assets/IMG_1566.jpg";

const Projects = () => {
  // const PROJECT_ARR = [[]]

  const lorem = "The Cat Sat On THe Hat";

  return (
    <div id="projects">
      <Typography
        variant="h2"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          color: "#0a1929",
          fontWeight: "bolder",
          letterSpacing: "10px",
          mb: 10,
        }}
      >
        PROJECTS
      </Typography>

      <div className="projectCards">
        <ProjectCard
          title="Technical Documentation"
          nameOfProject="MDN Reverse Engineer"
          projectInfo={lorem}
          projectScreenshot={img}
        />
      </div>
      <div className="emptySpace"></div>
    </div>
  );
};

export default Projects;
