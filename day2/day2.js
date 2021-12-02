const fs = require('fs');

const $file = fs.readFileSync('./input/day1.input');

const data = $file
  .toString()
  .split('\n')
  .map((n) => Number(n));
