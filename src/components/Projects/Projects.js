import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "./Projects.css";

import techDoc from "./codeSnippets/techDoc.png";
import tributePage from "./codeSnippets/tributePage.png";
import productLanding from "./codeSnippets/productLanding.png";
import qubaEdu from "./codeSnippets/qubaEdu.png";
import youtube from "./codeSnippets/youtube.png";

const Projects = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const techDocObject = {
    title: "Technical Documentation",
    nameOfProject: "MDN Docs (Reverse Engineered)",
    projectInfoTop:
      "This was one of the assignments needed to complete freeCodeCamp's Responsive Web Design Course.",
    projectInfoBottom:
      "I drew inspiration from the numerous amount of times I've visited the MDN website.",
    projectScreenshot: techDoc,
  };

  const tributePageObject = {
    title: "Tribute Page",
    nameOfProject: "Holy Sites in Islam",
    projectInfoTop:
      "As a proud Muslim, I wanted to pay homage to some of the well known holy sites of Islam.",
    projectInfoBottom:
      "Each site has a video tour and shows where in the world they are (using the GoogleMaps API).",
    projectScreenshot: tributePage,
  };

  const productLandingObject = {
    title: "Product Landing Page",
    nameOfProject: "Mercedes Benz (Reverse Engineered)",
    projectInfoTop:
      "I chose to reverse engineer the Mercedes Benz homepage as it seemed very challenging and I thought it would really up my skills as a developer",
    projectInfoBottom:
      "This was very fun to do, as there was a lot put into the actual homepage I wanted to get as close a replica as possible.",
    projectScreenshot: productLanding,
  };

  const qubaEduObject = {
    title: "Commissioned Work",
    nameOfProject: "Quba Education Centre",
    projectInfoTop:
      "My first client! I was commisioned to make a website for their weekday and weekends after school program.",
    projectInfoBottom:
      "This showed me a different side to developing, I wasn't in the driving seat this time and I had to listen to instructions. ",
    projectScreenshot: qubaEdu,
  };

  const youtubeObject = {
    title: "React Project",
    nameOfProject: "YouTube (Reverse Engineered)",
    projectInfoTop:
      "This is the largest app I've written. My Magnum Opus. writing this app I got to apply almost everything I've learnt so far in React.js",
    projectInfoBottom:
      "It felt really rewarding that at first glance, friends couldn't tell that this was a clone!",
    projectScreenshot: youtube,
  };

  const PROJECT_ARR = [
    youtubeObject,
    techDocObject,
    productLandingObject,
    qubaEduObject,
    tributePageObject,
  ];

  //   projectInfoTop: "This was one of the assignments needed to complete freeCodeCamps Responsive Web Design Course.',
  //   projectInfoBottom: 'I drew inspiration from the numerous amount of times Ive visited The MDN website.",
  //   projectScreenshot: techDoc,

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
        {PROJECT_ARR.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            nameOfProject={project.nameOfProject}
            projectInfoTop={project.projectInfoTop}
            projectInfoBottom={project.projectInfoBottom}
            projectScreenshot={project.projectScreenshot}
          />
        ))}
      </div>
      <div className="emptySpace"></div>
    </div>
  );
};

export default Projects;
