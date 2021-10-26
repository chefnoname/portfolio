import Typography from "@mui/material/Typography";

import "./AboutMe.css";
import img from "./assets/IMG_1566.jpg";

const AboutMe = () => {
  return (
    <div>
      <div id="aboutMe">
        <div className="descriptionOfMe">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", color: "white", mb: 2 }}
          >
            Who is AbdiWali?
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "white", fontSize: "16px" }}
          >
            Hi, my name is AbdiWali, or you can call me Abs! I'm a young,
            bubbly, energetic individual who started his development journey in
            the cool, breezy autumn of 2020.
            <br />
            <br />
            Being a self-taught developer, I had no structured way of learning
            other than opening my laptop and cracking straight on. There's been
            many ups and downs during this journey but I've climbed many hills
            and have come out of the depths of Darius victorious (I hope).
            <br />
            <br />I like to think of myself as someone who is very comfortable
            with being uncomfortable and I find discomfort in comfort.
          </Typography>

          <div className="downloadCV">
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
              DOWNLOAD CV +
            </Typography>
          </div>
        </div>
        <div className="pictureOfMe">
          <img src={img} alt="me and samira" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
