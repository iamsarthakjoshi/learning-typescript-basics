import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

let documentOne: HasFormatter;
let documentTwo: HasFormatter;

documentOne = new Invoice('Sarthak', 'Doing Typescript Porting', 1000);
documentTwo = new Payment('Joshi', 'Doing Javascript Porting', 1000);

let documents: HasFormatter[] = [];
documents.push(documentOne);
documents.push(documentTwo);

console.log(documents);

// interface

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Sarthak',
  age: 27,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('Spent', amount);
    return amount;
  },
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log('Hello', person.name);
};

console.log(greetPerson(me));

// instantiate class
const invOne = new Invoice('sarthak', 'work on typescript', 50000);
const invTwo = new Invoice('sarthak', 'work on typescript', 20000);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// updating inovice object's values
invOne.client = 'maggy'; // public
// invTwo.details = 'work on javascript'; // private
// invTwo.amount = 3000 // readonly

// looping over invoices

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format()); // inv.details would not work because of private access modifier
});

// Inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

// input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
  let document: HasFormatter;
  if (type.value === 'invoice') {
    document = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    document = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(document);
});
