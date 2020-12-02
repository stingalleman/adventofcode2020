import fs from 'fs';

const input = fs.readFileSync(`${process.cwd()}/input/day2`).toString().split('\n');

const valid: string[] = [];

input.map((i) => {
  const min = parseInt(i.replace(/(^\d+)-(\d+) (\w+): (\w+)/i, '$1'), 10);
  const max = parseInt(i.replace(/(^\d+)-(\d+) (\w+): (\w+)/i, '$2'), 10);
  const letter = i.replace(/(^\d+)-(\d+) (\w+): (\w+)/i, '$3');
  const password = i.replace(/(^\d+)-(\d+) (\w+): (\w+)/i, '$4');
  if (password.includes(letter)) {
    const occurrences = password.length - password.replace(new RegExp(letter, 'g'), '').length;

    if (min <= occurrences && max >= occurrences) {
      valid.push(password);
    }
  }
});

console.log(valid.length);
// Result: 414 valid passwords
