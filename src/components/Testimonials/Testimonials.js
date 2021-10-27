import Typography from "@mui/material/Typography";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonials.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    vertical: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const husseinTestimonyObj = {
    testimony: "lets hope this works, yikes",
    author: "Hussein O.",
    credentials: "Showroom Partner, Sofas & Stuff",
  };

  const emmanuelTestimonyObj = {
    testimony: "THIS BETTER WORK I NEED TO GO MAGHREB",
    author: "Emmanuel Di.",
    credentials: "Manager, GEOX Respira (Sloane Sq. branch)",
  };

  const ahmedTestimonyObj = {
    testimony:
      "One of the best react projects I've seen on a Junior Developers portfolio",
    author: "Ahmed A. Gadir",
    credentials: "Mid-Level JS Developer, AG Grid",
  };

  const aliTestimonyObj = {
    testimony: "NEED THIS TESTIMONY",
    author: "Ali Muhammad",
    credentials: "Teacher, Quba Education Centre",
  };

  const TESTIMONY_ARR = [
    husseinTestimonyObj,
    emmanuelTestimonyObj,
    ahmedTestimonyObj,
    aliTestimonyObj,
  ];

  // beforeChange: function(currentSlide, nextSlide) {
  //   console.log("before change", currentSlide, nextSlide);
  // },
  // afterChange: function(currentSlide) {
  //   console.log("after change", currentSlide);
  // }
  return (
    <div id="testimonials">
      <Typography
        variant="h2"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          color: "#0a1929",
          fontWeight: "bolder",
          letterSpacing: "10px",
          mt: 10,
          mb: 3,
        }}
      >
        TESTIMONIALS
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: "#0a1929",
          fontWeight: "bolder",
          mb: 10,
          fontStyle: "italic",
        }}
      >
        Here's what people had to say about me...
      </Typography>
      <div className="testimonials">
        <Slider {...settings}>
          {TESTIMONY_ARR.map(([testimony, author, credentials]) => (
            <div>
              <TestimonialCard
                key={author}
                testimony={testimony}
                author={author}
                credentials={credentials}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

//   <div>
//     <TestimonialCard />
//   </div>

//   <div>
//     <TestimonialCard />
//   </div>
//   <div>
//     <TestimonialCard />
//   </div>

//   <div>
//     <TestimonialCard />
//   </div>
//   <div>
//     <TestimonialCard />
//   </div>
