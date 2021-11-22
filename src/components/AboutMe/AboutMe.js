import Typography from "@mui/material/Typography";
import TestimonialCard from "../Testimonials/TestimonialCard";
import ParticlesBg from "../ParticlesBg/ParticlesBg";
import "./AboutMe.css";
import img from "./assets/IMG_1566.jpg";

const AboutMe = ({ theme }) => {
  const bgColor = {
    background: `linear-gradient(90deg, ${theme} 80%, rgba(100, 120, 124, 1) 100%)`,
  };

  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#262f35"];

  const themeClass = [
    "pillHighlightBlue",
    "pillHighlightGreen",
    "pillHighlightPink",
    "pillHighlightConcrete",
  ];

  const handleMouseEnter = () => {
    let pill = document.getElementById("pill");
    pill.classList.add(themeClass[colors.indexOf(theme)]);
  };

  const handleMouseLeave = () => {
    let pill = document.getElementById("pill");
    pill.classList.remove(themeClass[colors.indexOf(theme)]);
  };

  const ahmedTestimonyObj = {
    testimony:
      "One of the best React projects I've seen on a Junior Developers portfolio",
    author: "Ahmed A. Gadir",
    credentials: "Mid-Level JS Developer, AG Grid",
  };

  return (
    <>
      <ParticlesBg />

      <div id="aboutMe" style={bgColor}>
        <div className="descriptionOfMe">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", color: "white", mb: 1 }}
            className="title"
          >
            Who is <pre>abdiWali</pre>?
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "white", fontSize: "16px" }}
            className="introOfMe"
          >
            Hi, my name is AbdiWali, or you can call me Abs! I'm a self-taught
            developer who started his journey in the cool, breezy autumn of
            2020.
            <br />
            <br />
            In life things get tough, but the get going and Front-end
            development was no easy task. With no support of a teacher or
            classmates I had to pull myself up by my bootstraps, climb in the
            depths of Darius and emerge atop victorious.
            <br />
            <br />
            I like to think of myself as someone who is very comfortable with
            being uncomfortable and I find discomfort in comfort.
            <br />
            <br />
            Here's my portfolio showcasing some of my best work so far, from
            React applications to JavaScript algorithms, feel free to leave me a
            message so we can get a conversation going!
          </Typography>
          <div className="aboutMePill">
            <a href="./assets/IMG_1566.jpg" download>
              <div
                id="pill"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: `${theme}`,
                    fontWeight: "bolder",
                    textAlign: "center",
                    position: "relative",
                    top: "5px",
                    "&:hover": { color: "white" },
                  }}
                  className="downloadCV"
                >
                  DOWNLOAD CV +
                </Typography>
              </div>
            </a>
          </div>
        </div>
        <div className="pictureOfMe">
          <img src={img} alt="me and samira" />
        </div>
      </div>
      <div className="testimonyAhmed">
        <TestimonialCard
          testimony={ahmedTestimonyObj.testimony}
          author={ahmedTestimonyObj.author}
          credentials={ahmedTestimonyObj.credentials}
          theme={theme}
        />
      </div>
    </>
  );
};

export default AboutMe;
