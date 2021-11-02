import Typography from "@mui/material/Typography";
import Pill from "../Pill/Pill";
import ReactCardFlipper from "react-card-flipper";
import Aos from "aos";
import { useEffect, useState } from "react";

import "./AlgorithimCard.css";

const AlgorithimCard = ({
  img,
  exerciseName,
  exerciseDetail,
  githubLink,
  theme,
}) => {
  const [newThemeClass, setNewThemeClass] = useState("");

  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#262f35"];
  const themeClass = [
    "algorithimBlue",
    "algorithimGreen",
    "algorithimPink",
    "algorithimConcrete",
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });

    setNewThemeClass(themeClass[colors.indexOf(theme)]);
  }, []);

  console.log("this is the newThemeClass", newThemeClass);

  return (
    <div data-aos="fade-up" className="algorithimCardContainer">
      <ReactCardFlipper
        width="500px"
        height="350px"
        behavior="click"
        innerCardClass={`algorithimCard ${newThemeClass}`}
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
              <Pill theme={theme} pillTxt="VIEW CODE" />
            </div>
          </a>
        </div>
      </ReactCardFlipper>
    </div>
  );
};

export default AlgorithimCard;
