/**
 * String Reversal
 * @example
 * abcd => dcba
 * apple => elppa
 */

// Solution 1
function reverse1(str) {
  return str.split("").reverse().join("");
}

// Solution 2
function reverse2(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution 3
function reverse3(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

// Solution 4
function reverse4(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

// Solution 5
function reverse5(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = { reverse1, reverse2, reverse3, reverse4, reverse5 };
