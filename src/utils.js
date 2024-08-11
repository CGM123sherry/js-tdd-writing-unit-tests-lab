// Your code here
function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Invalid input: input must be a string");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input: only alphabetic characters are allowed");
  }
  const cleanedWord = word.toLowerCase();
  return cleanedWord === cleanedWord.split("").reverse().join("");
}

module.exports = { isPalindrome };
