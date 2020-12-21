import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './models/ListTemplate.js';

// Input Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// rendering a html template on DOM
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let document: HasFormatter;
  if (type.value === 'invoice') {
    document = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    document = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  //   console.log(document);

  // rendering a html template on DOM
  list.render(document, type.value, 'end');
});
