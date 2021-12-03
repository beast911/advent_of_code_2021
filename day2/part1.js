const fs = require('fs');

const file = fs.readFileSync('./input/drive.input');

const data = file
  .toString()
  .split('\n')
  .map((command) => {
    const [com, unit] = command.split(' ');
    return [com, Number(unit)];
  });

const driveSubmarine = (input) => {
  let hPos = 0;
  let depth = 0;

  for (let i = 0; i < input.length; i++) {
    const [command, unit] = input[i];
    if (command === 'forward') {
      hPos += unit;
    }
    if (command === 'up') {
      depth -= unit;
    }
    if (command === 'down') {
      depth += unit;
    }
  }
  return hPos * depth;
};

console.log(driveSubmarine(data));
