import Typography from "@mui/material/Typography";

import "./Pill.css";

const Pill = ({ theme, pillTxt }) => {
  const colors = ["#0a1929", "#161C14", "#4F2F2F", "#7D1F00"];

  const themeClass = [
    "pillHighlightBlue",
    "pillHighlightGreen",
    "pillHighlightPink",
    "pillHighlightOrange",
  ];

  const handleMouseEnter = () => {
    let pill = document.getElementById("pill");
    pill.classList.add(themeClass[colors.indexOf(theme)]);
    console.log(pill, "entered pill");
  };

  const handleMouseLeave = () => {
    let pill = document.getElementById("pill");
    pill.classList.remove(themeClass[colors.indexOf(theme)]);
    console.log(pill, "left pill");
  };
  return (
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
      >
        {pillTxt}
      </Typography>
    </div>
  );
};

export default Pill;
