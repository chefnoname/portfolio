import Typography from "@mui/material/Typography";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  MoveOut,
} from "react-scroll-motion";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import ContactCard from "./ContactCard";
import "./Contact.css";
import jsCertificate from "./cardSnippets/jsCertificate.png";
import codeQuestion1 from "./cardSnippets/codeQuestion1.png";
import firebase from "./cardSnippets/firebase.png";
const Contact = ({ theme }) => {
  return (
    <div id="contact">
      <div className="seeMore">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: theme,
            fontWeight: "bolder",
            width: "400px",
          }}
        >
          Want to see more? Get in Touch
        </Typography>
        <div className="contactLinks">
          <a
            href="https://github.com/chefnoname"
            target="_blank"
            className="githubPageLink"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdiwali-jama-71524a163/"
            target="_blank"
            className="linkedInPageLink"
          >
            <BsLinkedin />
          </a>
          <a href="mailto:abdijama21@gmail.com" className="emailLink">
            <SiGmail />
          </a>
        </div>
      </div>
      <ScrollContainer>
        <ScrollPage page={8}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <br />

              <Animator animation={MoveOut(600, 500)}>
                <ContactCard img={jsCertificate} />
              </Animator>
              <Animator animation={MoveOut(500, 500)}>
                <ContactCard img={codeQuestion1} />
              </Animator>
              <Animator animation={MoveOut(-350, -100)}>
                <ContactCard img={firebase} />
              </Animator>
              <Animator animation={MoveOut(-350, -100)}>
                <ContactCard img={jsCertificate} />
              </Animator>
              <br />
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Contact;
