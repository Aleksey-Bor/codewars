// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let wordArray = str.split(" ");
  let newStr = "";
  let newWord;

  for (let i = 0; i < wordArray.length; i++) {
    let firstLetter = wordArray[i][0];
    let lastChar = wordArray[i][wordArray[i].length - 1];
    let isLetter = /[a-zA-Zа-яА-Я]$/.test(lastChar);

    if (isLetter && wordArray[i].length === 1) {
      newWord = wordArray[i] + "ay";
    } else {
      if (!isLetter && wordArray[i].length > 1) {
        newWord = wordArray[i].substring(1, wordArray[i].length - 1);
        wordArray[i] = newWord + firstLetter + "ay" + lastChar;
      } else if (isLetter && wordArray[i].length > 1) {
        newWord = wordArray[i].substring(1) + firstLetter + "ay";
        wordArray[i] = newWord;
      } else {
        newWord = wordArray[i];
      }
    }

    newStr = newStr + newWord + " ";
  }

  // console.log(newStr.trim());
  return newStr.trim();
}

//or
function pigIt2(str) {
  /*   console.log(str.split(" ").map(word => {
    if (/^\w+$/.test(word)) {
      return word.slice(1) + word[0] + "ay";
    } else {
      return word;
    }
  }).join(" ")); */

  return str
    .split(" ")
    .map((word) => {
      if (/^\w+$/.test(word)) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
pigIt("Hello, Nastya !"); // elloHay orldway !
pigIt("O tempora o mores !"); // 'O emporatay o oresmay !'

pigIt2("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt2("Hello world !"); // elloHay orldway !
pigIt2("Hello, Nastya !"); // elloHay orldway !
pigIt2("O tempora o mores !"); // 'O emporatay o oresmay !'
