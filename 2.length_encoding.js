/**
 * Run Length Encoding Example
 * A string for example : AAAAABBBCCCCDD has to be converted into A5B3C4D2
 */

const runLengthEncoding = (str) => {
  if (!str || str.length < 0) return;

  let n = str.length,
    encodedStr = "";

  for (let i = 0; i < n; i++) {
    let counter = 1;
    while (i < n - 1 && str.charAt(i) == str.charAt(i + 1)) {
      counter++;
      i++;
    }
    encodedStr += str[i] + counter;
  }

  return encodedStr;
};

let encodedString = runLengthEncoding("AAAAABBBCCCCDDAA");
console.log(encodedString);
