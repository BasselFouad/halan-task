function palindrome(str) {
  const length = str.length;
  const halfLength = length >> 1;

  let leftChar, rightChar;
  for (let i = 0; i < halfLength; i++) {
    leftChar = str[i].toLowerCase();
    rightChar = str[length - 1 - i].toLowerCase();

    if (leftChar !== rightChar) {
      return false;
    }
  }

  return true;
}
console.log(palindrome("anna")); // returns true
console.log(palindrome("apple")); // returns false
console.log(palindrome("dad")); // returns true
console.log(palindrome("civic")); // returns true
console.log(palindrome("bassel")); // returns false
