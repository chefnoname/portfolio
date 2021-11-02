import Typography from "@mui/material/Typography";

import "./Pill.css";

const Pill = ({ theme, pillTxt }) => {
  // const colors = ["#0a1929", "#161C14", "#4F2F2F", "#262f35"];

  // const themeClass = [
  //   "pillHighlightBlue",
  //   "pillHighlightGreen",
  //   "pillHighlightPink",
  //   "pillHighlightConcrete",
  // ];

  // const handleMouseEnter = () => {
  //   let pill = document.getElementById("algorithimPill");
  //   pill.classList.add(themeClass[colors.indexOf(theme)]);
  // };

  // const handleMouseLeave = () => {
  //   let pill = document.getElementById("algorithimPill");
  //   pill.classList.remove(themeClass[colors.indexOf(theme)]);
  // };

  return (
    <div id="algorithimPill">
      <Typography
        variant="subtitle1"
        sx={{
          color: `${theme}`,
          fontWeight: "bolder",
          textAlign: "center",
          position: "relative",
          top: "5px",
        }}
      >
        {pillTxt}
      </Typography>
    </div>
  );
};

export default Pill;
