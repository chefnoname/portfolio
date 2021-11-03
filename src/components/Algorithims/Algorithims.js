import Typography from "@mui/material/Typography";
import AlgorithimCard from "./AlgorithimCard";
import TestimonialCard from "../Testimonials/TestimonialCard";

import questions from "./Questions/questions";

import Aos from "aos";
import { useEffect } from "react";

import "./Algorithims.css";

const Algorithims = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const {
    caesarsCipher,
    palindromeChecker,
    romanNumeralConverter,
    sumOfAllPrime,
    sumOfFibNum,
  } = questions;

  const caesarsCipherObj = {
    img: caesarsCipher,
    exerciseName: "Caesars Cipher",
    exerciseDetail:
      "Write a function which takes a ROT13 encoded string as input and returns a decoded string.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/FCC_Algorithms/caesarsCipher.js",
  };

  const palindromCheckerObj = {
    img: palindromeChecker,
    exerciseName: "Palindrome Checker",
    exerciseDetail:
      "A palindrome is a word or sentence that's spelled the same way both forward and backward.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/FCC_Algorithms/palindromeChecker.js",
  };

  const romanNumeralConverterObj = {
    img: romanNumeralConverter,
    exerciseName: "Roman Numeral Converter",
    exerciseDetail:
      "Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/FCC_Algorithms/romanNumeralConverter.js",
  };

  const sumOfAllPrimeObj = {
    img: sumOfAllPrime,
    exerciseName: "Sum of all Prime Number",
    exerciseDetail:
      "Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/intermediateAlgorithims/sumOfAllPrime.js",
  };

  const sumOfFibNumObj = {
    img: sumOfFibNum,
    exerciseName: "Sum of odd Fibbonacci Numbers",
    exerciseDetail:
      "Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/intermediateAlgorithims/fibonacciNumbers.js",
  };

  const ALGORITHIM_ARR = [
    sumOfAllPrimeObj,
    sumOfFibNumObj,
    caesarsCipherObj,
    palindromCheckerObj,
    romanNumeralConverterObj,
  ];

  const husseinTestimonyObj = {
    testimony:
      "Abs has both passion and dynamism. No challenge was too great. No target was too high. No amount of work hours was too much. whichever organisation he seeks to be a part of, they should relish the opportunity to have him on-board.",
    author: "Hussein O.",
    credentials: "Showroom Partner, Sofas & Stuff",
  };

  return (
    <div data-aos="fade-up" id="algorithims">
      <Typography
        variant="h2"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          color: `${theme}`,
          fontWeight: "bolder",
          letterSpacing: "10px",
          mb: 10,
        }}
      >
        ALGORITHIMS
      </Typography>
      <div className="algorithimCardDisplay">
        {ALGORITHIM_ARR.map((algorithim, i) => (
          <AlgorithimCard
            key={algorithim.githubLink}
            img={algorithim.img}
            exerciseName={algorithim.exerciseName}
            exerciseDetail={algorithim.exerciseDetail}
            githubLink={algorithim.githubLink}
            theme={theme}
          />
        ))}
      </div>
      <div className="testimonyHussein">
        <TestimonialCard
          testimony={husseinTestimonyObj.testimony}
          author={husseinTestimonyObj.author}
          credentials={husseinTestimonyObj.credentials}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Algorithims;
