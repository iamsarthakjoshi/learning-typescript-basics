import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
import { ListTemplate } from './models/ListTemplate.js';
// Input Form
var form = document.querySelector('.new-item-form');
// input fields
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// rendering a html template on DOM
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var document;
    if (type.value === 'invoice') {
        document = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        document = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    //   console.log(document);
    // rendering a html template on DOM
    list.render(document, type.value, 'end');
});
