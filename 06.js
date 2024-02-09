//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

function isInteresting(number, awesomePhrases) {
  if (number >= 100) {
    let numberPlus1 = number + 1;
    let numberPlus2 = number + 2;

    let strings = [number + "", numberPlus1 + "", numberPlus2 + ""];

    let allZeroes = strings.every((string) => {
      let restDigits = string.slice(1).split("").map(Number);
      return restDigits.every((digit) => digit === 0);
    });

    let ascendingOrDescending = strings.every((string) => {
      for (let i = 0; i < string.length; i++) {
        if (
          string[i] + 1 === string[i + 1] ||
          string[i] - 1 === string[i + 1]
        ) {
          return true;
        } else return false;
      }
    });

    let isPalindrome = strings.every((string) => {
      let reversedString = string.split("").reverse().join("");
      if (string === reversedString) return true;
    });

    if (allZeroes || isPalindrome) {
      return 2;
    } else if (ascendingOrDescending) {
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