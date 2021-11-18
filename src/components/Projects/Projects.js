import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";
import TestimonialCard from "../Testimonials/TestimonialCard";

import { DiHtml5, DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact } from "react-icons/si";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import "./Projects.css";

const Projects = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const techDocObject = {
    title: "Technical Documentation",
    nameOfProject: "MDN Web Docs (Clone)",
    projectInfoTop:
      "This was one of the assignments needed to complete freeCodeCamp's Responsive Web Design Course.",
    projectInfoBottom:
      "I drew inspiration from the numerous amount of times I've visited the MDN website.",
    linkToGithub: "https://github.com/chefnoname/TechDocFCC",
    HTMLIcon: <DiHtml5 />,
    CSS3Icon: <DiCss3 />,
    JSIcon: <SiJavascript />,
    githubIcon: <BsGithub />,
  };

  const tributePageObject = {
    title: "Tribute Page",
    nameOfProject: "Holy Sites in Islam",
    projectInfoTop:
      "As a proud Muslim, I wanted to pay homage to some of the well known holy sites of my faith. Each image links to a separate page.",
    projectInfoBottom:
      "Using the GoogleMaps API, I was able to pin the location of each Holy Site. I also linked to the official Wikipedia document of the site.",
    projectPreview:
      "https://codesandbox.io/embed/blissful-austin-5ic4y?fontsize=14&hidenavigation=1&theme=dark",
    linkToGithub: "https://github.com/chefnoname/FCC-Tribute-Page1",
    HTMLIcon: <DiHtml5 />,
    CSS3Icon: <DiCss3 />,
    JSIcon: <SiJavascript />,
    githubIcon: <BsGithub />,
  };

  const productLandingObject = {
    title: "Product Landing Page",
    nameOfProject: "Mercedes Benz Homepage (Clone)",
    projectInfoTop:
      "I chose to clone the Mercedes Benz homepage as it seemed very challenging and I thought it would really up my skills as a developer",
    projectInfoBottom:
      "This was very fun to do, as there was a lot put into the actual homepage I wanted to get as close a replica as possible.",
    projectPreview:
      "https://codesandbox.io/embed/great-noether-9eo6l?fontsize=14&hidenavigation=1&theme=dark",
    linkToGithub: "https://github.com/chefnoname/productLandingPage",
    HTMLIcon: <DiHtml5 />,
    CSS3Icon: <DiCss3 />,
    JSIcon: <SiJavascript />,
    githubIcon: <BsGithub />,
  };

  const qubaEduObject = {
    title: "Commissioned Work",
    nameOfProject: "Quba Education Centre",
    projectInfoTop:
      "My first client! I was commisioned to make a website for their after school, extra-curricular program.",
    projectInfoBottom:
      "I was shown a different side to developing, I wasn't in the driving seat this time and I had to bring the client's idea to life.",
    projectPreview:
      "https://codesandbox.io/embed/admiring-breeze-0oecj?fontsize=14&hidenavigation=1&theme=dark",
    linkToGithub: "https://github.com/AhmedAGadir/masjid-project",
    HTMLIcon: <DiHtml5 />,
    CSS3Icon: <DiCss3 />,
    JSIcon: <SiJavascript />,
    BSIcon: <BsFillBootstrapFill />,
    githubIcon: <BsGithub />,
  };

  const youtubeObject = {
    title: "Demonstrating Skills",
    nameOfProject: "YouTube (Clone)",
    projectInfoTop:
      "This is the largest app I've written. My Magnum Opus. writing this app I got to apply almost everything I've learnt so far in React.js",
    projectInfoBottom:
      "It felt really rewarding that at first glance, friends couldn't tell that this was a clone!",
    projectPreview:
      "https://codesandbox.io/embed/github/chefnoname/youtube_clone/tree/main/?fontsize=14&theme=dark&view=preview",
    linkToGithub: "https://github.com/chefnoname/youtube_clone",
    HTMLIcon: <DiHtml5 />,
    CSS3Icon: <DiCss3 />,
    JSIcon: <SiJavascript />,
    githubIcon: <BsGithub />,
    ReactIcon: <SiReact />,
  };

  const PROJECT_ARR = [
    youtubeObject,
    techDocObject,
    productLandingObject,
    qubaEduObject,
    tributePageObject,
  ];

  const emmanuelTestimonyObj = {
    testimony:
      "Abs is a very funny and intelligent person, he has charisma & knows how to relate well with people. He is sincere and has no problem saying what he thinks.",
    author: "Emmanuel D'Arpe",
    credentials: "Manager, GEOX Respira, Sloane Sq.",
  };

  return (
    <div data-aos="fade-up" id="projects">
      <Typography
        variant="h2"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          color: `${theme}`,
          fontWeight: "bolder",
          letterSpacing: "10px",
          mb: 10,
        }}
        className="titleMediaQuery"
      >
        PROJECTS
      </Typography>

      <div className="projectCards">
        {PROJECT_ARR.map((project, i) => (
          <>
            <ProjectCard
              key={i}
              title={project.title}
              nameOfProject={project.nameOfProject}
              projectInfoTop={project.projectInfoTop}
              projectInfoBottom={project.projectInfoBottom}
              projectPreview={project.projectPreview}
              linkToGithub={project.linkToGithub}
              html={project.HTMLIcon}
              css={project.CSS3Icon}
              javaScript={project.JSIcon}
              react={project.ReactIcon}
              bootstrap={project.BSIcon}
              github={project.githubIcon}
              theme={theme}
            />
          </>
        ))}
      </div>
      <div className="testimonyEmmanuel">
        <TestimonialCard
          testimony={emmanuelTestimonyObj.testimony}
          author={emmanuelTestimonyObj.author}
          credentials={emmanuelTestimonyObj.credentials}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Projects;
