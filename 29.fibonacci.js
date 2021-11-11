/**
 * Find the fibonacci series for the given number.
 */

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(fib(i));
}
