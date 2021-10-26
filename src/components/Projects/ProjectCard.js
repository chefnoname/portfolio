import Typography from "@mui/material/Typography";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  nameOfProject,
  projectInfo,
  linkToGithub,
  projectScreenshot,
}) => {
  return (
    <div className="projectCard">
      <div className="projectDetails">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{nameOfProject}</Typography>
        <Typography paragraph>{projectInfo}</Typography>

        <div className="linkToGithubPill">
          <Typography
            variant="subtitle1"
            sx={{
              color: "#0a1929",
              fontWeight: "bolder",
              textAlign: "center",
              position: "relative",
              top: "5px",
              "&:hover": { color: "white" },
            }}
          >
            LIVE DEMO 'ARR'
          </Typography>
        </div>
      </div>

      <div className="projectScreenshot">
        <img src={projectScreenshot} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
