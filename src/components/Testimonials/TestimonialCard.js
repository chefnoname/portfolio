import Typography from "@mui/material/Typography";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import "./TestimonialCard.css";

const TestimonialCard = ({ testimony, author, credentials }) => {
  return (
    <div className="testimonialContainer">
      <div className="testimonials">
        <ImQuotesLeft className="quoteLeft" />
        <div className="testimonyText">
          <Typography
            variant="h5"
            sx={{
              fontColor: "#0a1929",
              fontWeight: 300,
              width: "95%",
              textAlign: "center",
            }}
          >
            {testimony}
          </Typography>
        </div>

        <ImQuotesRight className="quoteRight" />
      </div>
      <div className="author">
        <Typography
          variant="subtitle1"
          sx={{
            fontColor: "#0a1929",
            fontStyle: "italic",
            ml: 100,
            mt: 3,
            fontSize: "18px",
          }}
        >
          - {author}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontColor: "#0a1929",
            fontStyle: "italic",
            ml: 90,
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        >
          {credentials}
        </Typography>
      </div>
    </div>
  );
};

export default TestimonialCard;
