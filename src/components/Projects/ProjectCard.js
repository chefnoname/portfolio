import Typography from "@mui/material/Typography";
import Pill from "../Pill/Pill";

import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  nameOfProject,
  projectInfoTop,
  projectInfoBottom,
  linkToGithub,
  projectScreenshot,
  html,
  css,
  javaScript,
  react,
  bootstrap,
  theme,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const bgColor = {
    background: theme,
  };

  return (
    <div data-aos="fade-up" className="projectCard" style={bgColor}>
      <div className="projectDetails">
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mt: 2,
            fontSize: "30px",
            fontWeight: 700,
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {nameOfProject}
        </Typography>
        <Typography
          paragraph
          sx={{ textAlign: "center", mt: 3, color: "white" }}
        >
          {projectInfoTop}
        </Typography>
        <Typography paragraph sx={{ textAlign: "center", color: "white" }}>
          {projectInfoBottom}
        </Typography>

        <div className="icons">
          <span className="htmlIcon">{html}</span>
          <span className="cssIcon">{css}</span>
          <span className="javaScriptIcon">{javaScript}</span>
          <span className="reactIcon">{react}</span>
          <span className="bootstrapIcon">{bootstrap}</span>
        </div>

        <a href={linkToGithub} target="_blank">
          <div id="projectCardPill">
            <Pill theme={theme} pillTxt="VIEW PROJECT" />
          </div>
        </a>
      </div>

      <div className="projectScreenshot">
        <img src={projectScreenshot} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
