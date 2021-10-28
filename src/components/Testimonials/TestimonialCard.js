import Typography from "@mui/material/Typography";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import "./TestimonialCard.css";

const TestimonialCard = ({ testimony, author, credentials, theme }) => {
  const bgColor = {
    color: theme,
  };
  return (
    <div className="testimonialContainer">
      <div className="testimonials">
        <ImQuotesLeft className="quoteLeft" style={bgColor} />
        <div className="testimonyText">
          <Typography
            variant="h5"
            sx={{
              color: `${theme}`,
              fontWeight: 300,
              width: "95%",
              textAlign: "center",
            }}
          >
            {testimony}
          </Typography>
        </div>

        <ImQuotesRight className="quoteRight" style={bgColor} />
      </div>
      <div className="author">
        <Typography
          variant="subtitle1"
          sx={{
            color: `${theme}`,
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
            color: `${theme}`,
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
