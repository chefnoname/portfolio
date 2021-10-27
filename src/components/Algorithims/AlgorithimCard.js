import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactCardFlipper from "react-card-flipper";
import Aos from "aos";
import { useEffect } from "react";

import "./AlgorithimCard.css";

const AlgorithimCard = ({ img, exerciseName, exerciseDetail, githubLink }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="algorithimCardContainer">
      <ReactCardFlipper
        width="500px"
        height="350px"
        behavior="hover"
        innerCardClass="algorithimCard"
      >
        <div className="frontCard">
          <img src={img} alt="" />
          <Typography
            variant="subtitle1"
            sx={{
              textDecoration: "underline",
              color: "white",
              fontWeight: "bolder",
              textAlign: "center",
              mt: 3,
              fontSize: "20px",
            }}
          >
            {exerciseName}
          </Typography>
        </div>
        <div className="backCard">
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              color: "white",
              textAlign: "center",
              mt: 5,
              ml: 7,
              mb: 3,
              width: "400px",
            }}
          >
            {exerciseDetail}
          </Typography>
          <a href={githubLink} className="githubLink" target="_blank">
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
                VIEW CODE
              </Typography>
              <ArrowRightAltIcon
                sx={{
                  color: "#0a1929",
                  fontSize: "50px",
                  ml: 2,
                  position: "relative",
                  top: "-5px",
                  right: "20px",
                }}
                className="pillChild"
              />
            </div>
          </a>
        </div>
      </ReactCardFlipper>
    </div>
  );
};

export default AlgorithimCard;
