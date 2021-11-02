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
          <span className="linkToGithub">
            <a href={linkToGithub} target="_blank">
              {github}
            </a>
          </span>
        </div>

        <div></div>
      </div>

      <div className="projectScreenshot">
        <iframe
          src={projectPreview}
          title="youtube_proj"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;

//  https://codesandbox.io/embed/github/chefnoname/youtube_clone/tree/main/?fontsize=14&theme=dark&view=preview
