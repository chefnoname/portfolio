const questions = {
  sumOfAllPrime: `  
  function sumPrimes(num) {

    let primeNumSum = 0;
    
    for (let i = 2; i <= num; i++) {
      // console.log(i);
          if (isPrimeNumber(i)) {
            primeNumSum += i;
          }
        }
      
        return primeNumSum;
      }
      
      sumPrimes(10); 
      
      function isPrimeNumber(num) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
      
        return true;
      }`,
  sumOfFibNum: `
  function sumFibs(num){
    let fibbonacciSequence = [0,1];
    let sumOfOddFibbonacciNumbers = 1;
    let counter = iterateFibbonacciSequence(counter)
        
  function iterateFibbonacciSequence(counter){
    return fibbonacciSequence[fibbonacciSequence.length - 2] 
         + fibbonacciSequence[fibbonacciSequence.length - 1];
    
      }
    
  function isOdd(counter){ return counter % 2 != 0 }
    
    while(counter <= num){
      fibbonacciSequence.push(counter)
    
      if(isOdd(counter)) { sumOfOddFibbonacciNumbers += counter}
      counter = iterateFibbonacciSequence(counter)
        }
        return sumOfOddFibbonacciNumbers
    }`,

  caesarsCipher: `
  const rot13 = str => str.split('')
                          .map(letter => getROTI13(letter))
                          .join('');

  rot13('SERR PBQR PNZC');

  function getROTI13(str) {
    let newStr;
    // alpahbetArr cut short to fit screen //
    let alphabetArr = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
  if (str === 'N') {
    newStr = 'A';
  } else if (alphabetArr.includes(str)) {
    let adder = alphabetArr.indexOf(str) > 13 ? -13 : 13;
    return alphabetArr[alphabetArr.indexOf(str) + adder];
  } else {
    return str;
  }

  return newStr;
}`,

  palindromeChecker: `
  function palindrome(str) {
    let arrOfStr = str.replace(/[_\W]/g, '')
                      .toLowerCase()
                      .split('');

    let firstSlice = arrOfStr.slice(0, arrOfStr.length / 2);

    let secondSlice = arrOfStr.slice((arrOfStr.length + 1) / 2)
                              .reverse();
  
    for (let i = 0; i < firstSlice.length; i++) {
      let item1 = firstSlice[i];
      let item2 = secondSlice[i];
  
      if (item1 !== item2) {
        return false;
      }
    }
  
    return true;
  }
  
  palindrome('never odd or even');
  
  palindrome('not a palindrome');`,
  romanNumeralConverter: `
  function convertToRoman(num) {
    let splitNumber = splitNumberIntoUnits(num);
  
    switch (splitNumber.length) {
      case 1:
        return unitsToRNumeralMap(splitNumber[0]);
      case 2:
        return (
          tensToRNumeralMap(splitNumber[0]) + 
          unitsToRNumeralMap(splitNumber[1])
        );
      case 3:
        return (
          hundredsToRNumeralMap(splitNumber[0]) +
          tensToRNumeralMap(splitNumber[1]) +
          unitsToRNumeralMap(splitNumber[2])
        );
      case 4:
        return (
          thousandsToRNumerals(splitNumber[0]) +
          hundredsToRNumeralMap(splitNumber[1]) +
          tensToRNumeralMap(splitNumber[2]) +
          unitsToRNumeralMap(splitNumber[3])
        );
    }
  }
  
  function splitNumberIntoUnits(num) {
    let numToArr = num.toString().split('');
    let tensPlace = [];
  
    let multiplier = 1;
    for (let i = numToArr.length - 1; i >= 0; i--) {
      let result = multiplier * Number(numToArr[i]);
      multiplier *= 10;
  
      tensPlace.unshift(result);
    }
    return tensPlace;
  }
  
  const unitsToRNumeralMap = (n) => {
    const unitMap = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
    };
    return unitMap[n];
  };
  
  const tensToRNumeralMap = (n) => {
    const tensMap = {
      0: '',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXXX',
      90: 'XC',
    };
  
    return tensMap[n];
  };
  
  const hundredsToRNumeralMap = (n) => {
    const hundredsMap = {
      0: '',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM',
    };
    return hundredsMap[n];
  };
  
  function thousandsToRNumerals(num) {
    let str = '';
    let counter = 0;
    while (num > counter) {
      counter += 1000;
      str += 'M';
    }
    return str;
  }`,
};

export default questions;
