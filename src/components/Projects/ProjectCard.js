import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Aos from "aos";
import "aos/dist/aos.css";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  nameOfProject,
  projectInfoTop,
  projectInfoBottom,
  linkToGithub,
  projectScreenshot,
}) => {
  return (
    <div className="projectCard">
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

        <div className="linkToGithubPill">
          <Typography
            variant="subtitle1"
            sx={{
              color: "#0a1929",
              fontWeight: "bolder",
              textAlign: "center",
              position: "relative",
              top: "6px",
              left: "30px",
            }}
            className="pillChild"
          >
            VIEW DEMO
          </Typography>
          <ArrowRightAltIcon
            sx={{
              color: "#0a1929",
              fontSize: "50px",
              ml: 2,
              position: "relative",
              top: "-5px",
              right: "30px",
            }}
            className="pillChild"
          />
        </div>
      </div>

      <div className="projectScreenshot">
        <img src={projectScreenshot} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
