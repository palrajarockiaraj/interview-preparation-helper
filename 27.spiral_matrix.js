/**
  Spiral matrix
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]

  Expected output : [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10] 
 */

function spiralTraversal(input, result) {
  // return null if empty
  if (input.length === 0) return result;

  // take the first row
  result = result.concat(input.shift());

  // take the last value of the remaining rows
  input.forEach((rightEnd) => {
    result.push(rightEnd.pop());
  });

  // take the last row and reverse it
  result = result.concat((input.pop() || []).reverse());

  // take the first value of the rows
  let tmp = [];
  input.forEach((leftEnd) => tmp.push(leftEnd.shift()));
  result = result.concat(tmp.reverse());

  return spiralTraversal(input, result);
}

let input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

let result = spiralTraversal(input, []);

console.log(JSON.stringify(result));
