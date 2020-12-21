// Class

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes Nrs.${this.amount} for ${this.details}`;
  }
}

// instantiate

const invOne = new Invoice('sarthak', 'work on typescript', 50000);
const invTwo = new Invoice('sarthak', 'work on typescript', 20000);

// console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// updating inovice object's values
invOne.client = 'maggy';
invTwo.details = 'work on javascript';

console.log(invoices);
