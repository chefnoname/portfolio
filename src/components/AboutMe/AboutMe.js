import Typography from "@mui/material/Typography";
import TestimonialCard from "../Testimonials/TestimonialCard";
import Pill from "../Pill/Pill";
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
      "One of the best react projects I've seen on a Junior Developers portfolio",
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
            sx={{ fontWeight: "bolder", color: "white", mb: 2 }}
          >
            Who is abdiWali?
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Hi, my name is AbdiWali, or you can call me Abs! I'm a young,
            friendly, energetic individual who started his development journey
            in the cool, breezy autumn of 2020.
            <br />
            <br />
            Being a self-taught developer, I had no structured way of learning
            other than opening my laptop and cracking straight on. There's been
            many ups and downs during this journey but I've climbed many hills
            and have come out of the depths of Darius victorious.
            <br />
            <br />I like to think of myself as someone who is very comfortable
            with being uncomfortable and I find discomfort in comfort.
          </Typography>
          {/* <Pill theme={theme} pillTxt="DOWNLOAD CV +" /> */}
          <div
            id="pill"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="aboutMePill"
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
            >
              DOWNLOAD CV +
            </Typography>
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
