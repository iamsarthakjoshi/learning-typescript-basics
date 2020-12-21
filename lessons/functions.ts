// let greet: Function;

// ()=> void

// example 1

let greet: (a: string, b: string) => void;

greet = (first: string, second: string) => {
  console.log(first + second);
  return 'Asdf';
};

greet('hello ', 'world');

// example 2
let calc: (n1: number, n2: number, action: string) => number;

calc = (num1: number, num2: number, act: string): number => {
  if (act === 'add') {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

console.log(calc(1, 2, 'add'));

// example 3
type Person = { name: string; age: number };

let logDetails: (obj: Person) => void;

logDetails = (log: Person) => {
  console.log(`${log.name} is ${log.age}`);
};

logDetails({ name: 'Saarthak', age: 25 });
