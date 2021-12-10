const fs = require('fs');

const file = fs.readFileSync('./input/day3.test.input');

const data = file
  .toString()
  .split('\n')
  .map((str) => str.split('').map((n) => Number(n)));

const calcLifeSupportRating = (input) => {
  let width = 0;

  while (width < input[0].length) {
    console.log(input[width])
    width++;
  }
};

console.log(calcLifeSupportRating(data));
