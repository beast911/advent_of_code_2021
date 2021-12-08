const fs = require('fs');

const file = fs.readFileSync('./input/drive.input');

const data = file
  .toString()
  .split('\n')
  .map((command) => {
    const [com, unit] = command.split(' ');
    return [com, Number(unit)];
  });

const targetPractice = (input) => {
  let aim = 0;
  let depth = 0;
  let hPos = 0;

  for (let i = 0; i < input.length; i++) {
    const [commName, unit] = input[i];
    if (commName === 'forward') {
      hPos += unit;
      depth += aim * unit;
    }
    if (commName === 'up') {
      aim -= unit;
    }
    if (commName === 'down') {
      aim += unit;
    }
  }

  return hPos * depth;
};

console.log(targetPractice(data));
