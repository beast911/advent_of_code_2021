const fs = require('fs');

const $file = fs.readFileSync('./input/day1.input');

const data = $file
  .toString()
  .split('\n')
  .map((n) => Number(n));

const processSlider = (input) => {
  let start = 0;
  let end = 0;
  let result = 0;
  let prev = 0;
  let curr = 0;
  while (end < input.length) {
    curr += input[end];
    if (end - start === 2) {
      // evaluate here
      if (curr > prev) {
        result++;
      }
      prev = curr;
      curr -= input[start];
      start++;
    }
    end++;
  }
  return result - 1;
};

console.log(processSlider(data));
