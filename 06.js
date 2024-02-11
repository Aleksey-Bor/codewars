//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
/*"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.**/

function isInteresting(number, awesomePhrases) {
  if (number > 99) {
    let numberPlus1 = number + 1;
    let numberPlus2 = number + 2;

    function stringMaker(digits) {
      return digits + "";
    }

    let sameDigits = (digits) => {
      let string = stringMaker(digits);
      return string.split("").every((digit) => digit === string[0]);
    };

    let allZeroes = (digits) => {
      let string = stringMaker(digits);
      let restDigits = string.slice(1).split("").map(Number);
      return restDigits.every((digit) => digit === 0);
    };

    let ascendingOrDescending = (digits) => {
      let string = stringMaker(digits);

      let isAscending = true;
      let isDescending = true;
      let isCycle = true;

      for (let i = 0; i < string.length - 1; i++) {
        if (Number(string[i]) !== Number(string[i + 1]) - 1) {
          isAscending = false;
        }
        if (Number(string[i]) !== Number(string[i + 1]) + 1) {
          isDescending = false;
        }
        if (
          !(
            (Number(string[i]) === 9 && Number(string[i + 1]) === 0) ||
            Number(string[i]) === Number(string[i + 1]) - 1
          )
        ) {
          isCycle = false;
        }
      }

      return isAscending || isDescending || isCycle;
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
  } else if (number === 98 || number === 99) {
    return 1;
  } else {
    return 0;
  }
  return 0;
}

/* isInteresting(3, [1337, 256]); // 0
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
isInteresting(11208, [1337, 256]); // 0
isInteresting(11209, [1337, 256]); // 1
isInteresting(11211, [1337, 256]); // 2 */

/* isInteresting(11207, []); // 0
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11, []); // 2 */
// console.log(isInteresting(12, []));
// console.log(isInteresting(99, []));
console.log(isInteresting(101, [1337, 256]));
// console.log(isInteresting(123, []));
// console.log(isInteresting(122, []));
// console.log(isInteresting(121, []));
// console.log(isInteresting(132, []));
// console.log(isInteresting(321, [])); // 2
