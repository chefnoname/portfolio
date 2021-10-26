import Typography from "@mui/material/Typography";

import "./AboutMe.css";
import img from "./assets/IMG_1566.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe">
        <div className="descriptionOfMe">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", color: "white", mb: 2 }}
          >
            Who is AbdiWali?
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            Roselle aims to bridge hoomans and technology. She is a Software
            Engineer. She writes upon waking and reads prior to resting. Every
            second and fourth Tuesday nights,
            <br />
            <br />
            she sneaks out of work (secretly) and watches (or delivers) speeches
            at a local Toastmasters Club. She does a lot of things, so it’s
            quite difficult to put what she does in a few words.
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
