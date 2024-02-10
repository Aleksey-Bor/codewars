//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

function isInteresting(number, awesomePhrases) {
  if (number >= 100) {
    let numberPlus1 = number + 1;
    let numberPlus2 = number + 2;

    function stringMaker(digits) {
      return digits + "";
    }

    let sameDigits = (digits) => {
      let string = stringMaker(digits);
      string.split("").every((digit) => digit === string[0]);
    };

    let allZeroes = (digits) => {
      let string = stringMaker(digits);
      let restDigits = string.slice(1).split("").map(Number);
      return restDigits.every((digit) => digit === 0);
    };

    let ascendingOrDescending = (digits) => {
      let string = stringMaker(digits);

      for (let i = 0; i < string.length; i++) {
        if (
          string[i] + 1 === string[i + 1] ||
          string[i] - 1 === string[i + 1]
        ) {
          return true;
        } else return false;
      }
    };

    let isPalindrome = (digits) => {
      let string = stringMaker(digits);
      let reversedString = string.split("").reverse().join("");
      if (string === reversedString) {
        return true;
      } else return false;
    };

    let isAwesomePhrases = (number) => {
      return awesomePhrases.some((digit) => digit === number);
    };

    if (
      allZeroes(number) ||
      sameDigits(number) ||
      ascendingOrDescending(number) ||
      isPalindrome(number) ||
      isAwesomePhrases(number)
    ) {
      return 2;
    } else if (
      allZeroes(numberPlus1) ||
      allZeroes(numberPlus2) ||
      sameDigits(numberPlus1) ||
      sameDigits(numberPlus2) ||
      ascendingOrDescending(numberPlus1) ||
      ascendingOrDescending(numberPlus2) ||
      isPalindrome(numberPlus1) ||
      isPalindrome(numberPlus2) ||
      isAwesomePhrases(numberPlus1) ||
      isAwesomePhrases(numberPlus2)
    ) {
      return 1;
    }
  }
  return 0;
}

isInteresting(3, [1337, 256]); // 0
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
isInteresting(11208, [1337, 256]); // 0
isInteresting(11209, [1337, 256]); // 1
isInteresting(11211, [1337, 256]); // 2
