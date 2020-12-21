import { Invoice } from './../src/models/Invoice';
// Tuples
// fixed types in an array

let tup: [string, number, boolean] = ['luff', 25, true];
// let wrongTup: [string, number, boolean] = [false, 'luff', 23];

tup[0] = 'sarthak';
// tup[0] = ['sarthak']
tup[1] = 27;
// tup[1] = "27"
tup[2] = false;
// tup[2] = {}
console.log(tup);

let student: [string, number, boolean] = ['luff', 25, true];

// Implementation Example (taken from renderHTML.ts)

/* declaration is just for demo please ignore them */
let form;
interface HasFormatter {}
let type, tofrom, details, amount;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let document: HasFormatter;

  // ✨ tuple example 👇
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  document = new Invoice(...values);
});
