const fs = require('fs');

const $file = fs.readFileSync('./input/day1.input');

const data = $file
  .toString()
  .split('\n')
  .map((n) => Number(n));

const findIncreasingPoints = (input) => {
  let count = 0;
  let lastVal = 0;
  for (let i = 0; i < input.length; i++) {
    if (i > 0 && lastVal < input[i]) {
      count++;
    }
    lastVal = input[i];
  }
  return count - 1;
};

console.log(findIncreasingPoints(data));
