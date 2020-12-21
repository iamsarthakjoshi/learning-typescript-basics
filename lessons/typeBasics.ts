console.log('Hello from typescript');

// interface Joshi {
//   name: string;
//   age: number;
//   hobbies?: (string | object)[];
// }

// type Joshi = {
//   name: string;
//   age: number;
//   //   hobbies?: Array<string>;
//   hobbies: (string | object)[];
// };

let joshi: { name: string; age: number; hobbies?: string[] } = {
  name: 'sarthak',
  age: 27,
  hobbies: ['Asdf'],
};

// recommended way if ? (optional) type is used
if (joshi.hobbies) joshi.hobbies.push('asdf');
// @ts-ignore
joshi.hobbies.push('asdf');
// error
// joshi.hobbies.push('asdf');

joshi = {
  name: 'sarthak',
  age: 20,
  hobbies: ['Asdf'],
};

// explicit types - string, number, boolean
let cat: string;
cat = 'meow';

let count: number = 10;
count = 100;

let isBoolean: boolean = true;
isBoolean = false;

// explicit types - arrays
let doggy: string[] = [];
doggy.push('asdf');

// any object type
let myObj: object;
myObj = {
  what: 'the hell',
};
myObj = ['seriously?'];
myObj = [{ oh: 'no' }];

// explicit object
let myObj2: { thisIs: string };
myObj2 = {
  thisIs: 'better',
};
// myObj2 = ['nice', 'try'];

console.log(myObj2);

//  union types - arrays
let spagetti: (string | object | [])[] = [];
spagetti.push('tomato');
spagetti.push({ ing: 'tomato' });
spagetti.push(['tomato']);
console.log(spagetti);

let uid: string | number = 'asdfasdfsd1223234';

console.log(uid);
