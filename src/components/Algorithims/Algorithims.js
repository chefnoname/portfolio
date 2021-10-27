import Typography from "@mui/material/Typography";
import AlgorithimCard from "./AlgorithimCard";
import "./Algorithims.css";

import caesarsCipher from "./codeSnippets/caesarsCipher.png";
import palindromeChecker from "./codeSnippets/palindromeChecker.png";
import romanNumeralConverter from "./codeSnippets/romanNumeralConverter.png";
import sumOfAllPrime from "./codeSnippets/sumOfAllPrime.png";
import sumOfFibNum from "./codeSnippets/sumOfFibNum.png";

const Algorithims = () => {
  const caesarsCipherObj = {
    img: caesarsCipher,
    exerciseName: "Caesars Cipher",
    exerciseDetail:
      "Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.",
    githubLink:
      "https://github.com/chefnoname/codingChallenges/blob/main/FCC_Algorithms/caesarsCipher.js",
  };

  const palindromCheckerObj = {
    img: palindromeChecker,
    exerciseName: "Palindrome Checker",
    exerciseDetail:
      "Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.",
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
      "A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.",
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

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          color: "#0a1929",
          fontWeight: "bolder",
          letterSpacing: "10px",
          mb: 10,
        }}
      >
        ALGORITHIMS
      </Typography>
      <div className="algorithimCardDisplay" id="algorithims">
        {ALGORITHIM_ARR.map((algorithim) => (
          <AlgorithimCard
            key={algorithim.githubLink}
            img={algorithim.img}
            exerciseName={algorithim.exerciseName}
            exerciseDetail={algorithim.exerciseDetail}
            githubLink={algorithim.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Algorithims;
