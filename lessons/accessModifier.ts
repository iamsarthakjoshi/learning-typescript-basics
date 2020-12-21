// Class

class Invoice {
  /*
    public client: string;
    private details: string;
    readonly amount: number;
  
    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    }
  */

  // a better way compared to above code
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes Nrs.${this.amount} for ${this.details}`;
  }
}

// instantiate

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
