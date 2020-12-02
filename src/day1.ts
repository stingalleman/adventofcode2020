import fs from 'fs';

const numInput = fs.readFileSync(`${process.cwd()}/input/day1`).toString();

const num1 = numInput.split('\n').map((a) => parseInt(a, 10));
const num2 = numInput.split('\n').map((a) => parseInt(a, 10));
const num3 = numInput.split('\n').map((a) => parseInt(a, 10));

function part1() {
  return num1.map((n1) => {
    num2.map((n2) => {
      if (n1 + n2 === 2020) {
        console.log(`Answer of part 1: ${n1 * n2}`);
      }
    });
  });
// Output: 918339
}

function part2() {
  return num1.map((n1) => {
    num2.map((n2) => {
      num3.map((n3) => {
        if (n1 + n2 + n3 === 2020) {
          console.log(`Answer of part 2: ${n1 * n2 * n3}`);
        }
      });
    });
  });
// Output: 918339
}

part1();
part2();
