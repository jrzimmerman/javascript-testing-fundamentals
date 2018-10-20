// sum is intentionally broken to see the results of the test
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}