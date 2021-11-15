import { UnControlled as CodeMirror } from "react-codemirror2";
import Typography from "@mui/material/Typography";
import Pill from "../Pill/Pill";
import ReactCardFlipper from "react-card-flipper";
import Aos from "aos";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive'
// import { attachToElement } from "codemirror-console-ui";


import "./AlgorithimCard.css";

require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/javascript/javascript.js");

const AlgorithimCard = ({
  img,
  exerciseName,
  exerciseDetail,
  githubLink,
  theme,
}) => {
  const [newThemeClass, setNewThemeClass] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 760px)' });

  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#262f35"];
  const themeClass = [
    "algorithimBlue",
    "algorithimGreen",
    "algorithimPink",
    "algorithimConcrete",
  ];

  const buttonThemeClass = [
    "pillHighlightBlue",
    "pillHighlightGreen",
    "pillHighlightPink",
    "pillHighlightConcrete",
  ];


  useEffect(() => {
    Aos.init({ duration: 1500 });

    setNewThemeClass(themeClass[colors.indexOf(theme)]);
  }, []);


  return (
    <div data-aos="fade-up" className="algorithimCardContainer">
      <ReactCardFlipper
        width={isTabletOrMobile ? "300px" : "500px"}
        height="400px"
        behavior="click"
        innerCardClass={`algorithimCard ${newThemeClass}`}
      >
        <div className="frontCard">


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
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              color: "white",
              textAlign: "center",
              ml: 7,
              width: "400px"
            }}
            marginTop={isTabletOrMobile ? '10px' : '50px'}
            marginBottom={isTabletOrMobile ? '-10px' : '50px'}
            className='exerciseDetail'
          >
            {exerciseDetail}
          </Typography>

          <div className='algorithimPill'>


            <Pill theme={theme} pillTxt="SEE SOLUTION" />
          </div>

        </div>
        <div className="backCard">

          <CodeMirror
            value={img}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: false,
            }}
            className="react-codemirror2 console"
          />

          <div className="githubLink">
            <a href={githubLink} target="_blank">
              <BsGithub className="linkToGithub" />
            </a>
          </div>



        </div>
      </ReactCardFlipper>
    </div>
  );
};

export default AlgorithimCard;
