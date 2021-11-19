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
  projectPreview,
  html,
  css,
  javaScript,
  react,
  bootstrap,
  github,
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
          className="projectTitleMediaQuery"
        >
          {title}:
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
          className="projectNameMediaQuery"
        >
          {nameOfProject}
        </Typography>
        <Typography
          paragraph
          sx={{ textAlign: "center", mt: 3, color: "white" }}
          className="projectDetailMediaQuery"
        >
          {projectInfoTop}
        </Typography>
        <Typography
          paragraph
          sx={{ textAlign: "center", color: "white" }}
          className="projectDetailMediaQuery"
        >
          {projectInfoBottom}
        </Typography>

        <div className="icons">
          <span className="htmlIcon">{html}</span>
          <span className="cssIcon">{css}</span>
          <span className="javaScriptIcon">{javaScript}</span>
          <span className={bootstrap ? "bootstrapIcon" : "reactIcon"}>
            {bootstrap || react}
          </span>
        </div>
      </div>

      <div className="projectScreenshot">
        <iframe
          src={projectPreview}
          title="youtube_proj"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        ></iframe>
        <a href={linkToGithub} target="_blank" className="linkToGithub">
          {github}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
