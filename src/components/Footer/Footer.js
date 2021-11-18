import Typography from "@mui/material/Typography";
import logo from "../../logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import "./Footer.css";

const Footer = ({ theme }) => {
  const boxColor = {
    background: theme,
  };
  return (
    <div className="footerContainer" id="contact">
      <div className="footerStartProj">
        <div className="startProject">
          <Typography
            variant="h4"
            paragraph
            sx={{ fontWeight: "bold", color: "white" }}
          >
            Start a Project
          </Typography>
        </div>
        <div className="needFreelance">
          <Typography
            variant="h6"
            paragraph
            sx={{ color: "white", textAlign: "center" }}
          >
            Need some freelance work done? Let's get a conversation going.
          </Typography>
        </div>
        <div className="letsDoThis">
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bolder",
              textAlign: "center",
              position: "relative",
              top: "13px",
              //   "&:hover": { color: "#4d5a6f" },
            }}
            className="letsDoThisFont"
          >
            Let's do this
          </Typography>
        </div>
      </div>
      <div className="footerBackground" style={boxColor}>
        <div className="contactMe">
          <div clasName="App-logo">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="motto">
            <Typography
              variant="h5"
              sx={{
                color: "white",
                // mt: 4,
                //   textAlign: "center",
              }}
            >
              Everyday Growing
            </Typography>
          </div>
          <div className="linksToLinkedIn">
            <a
              className="linkToPage"
              href="https://github.com/chefnoname"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              className="linkToPage"
              href="https://www.linkedin.com/in/abdiwali-jama-71524a163/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
          <Typography
            variant="subtitle2"
            sx={{
              color: "white",
              mb: 3,
              //   textAlign: "center",
            }}
          >
            Hand-coded by me &copy; 2021
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
