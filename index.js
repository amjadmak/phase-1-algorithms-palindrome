function isPalindrome(word) {
  let reversedWord = []
  for (letter of word) {
    reversedWord.unshift(letter)
  }
  return reversedWord.join('') === word? true: false
}
/* 
  Add your pseudocode here
  1. bring the word into the function
  2. reverse the word
  3. compare the two words
  4. return true or false
*/

/*
  Add written explanation of your solution here

  1. The function takes in a word and reverses it.
  2. The function then compares the two words.
  3. If the two words are the same, the function returns true.
  4. If the two words are not the same, the function returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
