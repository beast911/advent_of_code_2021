const fs = require('fs');

const file = fs.readFileSync('./input/day3.test.input');

const data = file
  .toString()
  .split('\n')
  .map((str) => str.split('').map((n) => Number(n)));

const processConsumption = (input) => {
  const baseMap = { zero: 0, ones: 0 };
  const map = new Array(input[0].length).fill().map((u) => ({ ...baseMap }));
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      const element = input[j][i];
      if (element === 0) {
        map[i]['zero']++;
      } else {
        map[i]['ones']++;
      }
    }
  }
  // process the map
  let gammaRate = '';
  let epsilonRate = '';

  map.forEach((factor) => {
    if (factor['zero'] > factor['ones']) {
      gammaRate += '0';
      epsilonRate += '1';
    } else {
      gammaRate += '1';
      epsilonRate += '0';
    }
  });
  console.log(map);
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};
console.log(processConsumption(data));
