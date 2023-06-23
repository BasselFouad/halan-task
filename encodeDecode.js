function runLengthEncode(str) {
  let encoded = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      encoded += str[i - 1] + count;
      count = 1;
    }
  }

  return encoded;
}

const runLengthDecode = (encodedStr) => {
  let decoded = "";
  let count = "";

  let currentChar;
  for (let i = 0; i < encodedStr.length; i++) {
    currentChar = encodedStr[i];

    if (isNaN(currentChar)) {
      let j = i + 1;
      while (j < encodedStr.length && !isNaN(encodedStr[j])) {
        count += encodedStr[j];
        j++;
      }
      decoded += currentChar.repeat(parseInt(count, 10));
      i = j - 1;
      count = "";
    }
  }

  return decoded;
};

const encoded = runLengthEncode("aaaaaaaaaabbbaxxxxyyyzyx");
console.log(encoded); // returns "a10b3a1x4y3z1y1x1"

const decoded = runLengthDecode(encoded);
console.log(decoded); // returns "aaaaaaaaaabbbaxxxxyyyzyx"
