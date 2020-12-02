import fs from 'fs';

const numInput = fs.readFileSync(`${process.cwd()}/input/day1`).toString();

const num1 = numInput.split('\n').map((a) => parseInt(a, 10));
const num2 = numInput.split('\n').map((a) => parseInt(a, 10));

num1.map((n1) => {
  num2.map((n2) => {
    if (n1 + n2 === 2020) {
      console.log(n1 * n2);
    }
  });
});

// Output: 918339
