import ContactForm from "./ContactForm";
import Typography from "@mui/material/Typography";
import logo from "../../logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

import "./Footer.css";

const Footer = ({ theme }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 760px)" });

  const boxColor = {
    background: theme,
  };
  return (
    <div className="footerContainer" id="contact" style={boxColor}>
      <div className="formContainer">
        <div className="contactMe">
          {!isTabletOrMobile && (
            <div className="motto">
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "light",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                Contact
              </Typography>
            </div>
          )}
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
          <div clasName="App-logo">
            <img className="logo" src={logo} alt="" />
          </div>
        </div>
        <div className="contactForm">
          <ContactForm />
        </div>
      </div>
      <div className="copyright">
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
  );
};

export default Footer;

//   <div className="motto">
//     <Typography
//       variant="h5"
//       sx={{
//         color: "white",
//         // mt: 4,
//         //   textAlign: "center",
//       }}
//     >
//       Everyday Growing
//     </Typography>
//   </div>
//   <div className="linksToLinkedIn">
//     <a
//       className="linkToPage"
//       href="https://github.com/chefnoname"
//       target="_blank"
//     >
//       <BsGithub />
//     </a>
//     <a
//       className="linkToPage"
//       href="https://www.linkedin.com/in/abdiwali-jama-71524a163/"
//       target="_blank"
//     >
//       <BsLinkedin />
//     </a>
//   </div>
