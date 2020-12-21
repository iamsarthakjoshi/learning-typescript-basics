// const anchor = document.querySelector('a');
// console.log(anchor);

// const anchor = document.querySelector('a');
// if (anchor) console.log(anchor.href);

// const anchor = document.querySelector('a');
// console.log(anchor?.href)

// const anchor = document.querySelector('a')!;
// console.log(anchor.href)

/* prevent html class */
// in this case form is of type HTMLFormElement, since form is native html element
const form = document.querySelector('form')!;

// in this case form is of type Element, since .new-item-form is a class name of a form element. So typescript may not if it's a form but some kind of element
const formThroughClass = document.querySelector('.new-item-form')!;

// to prevent ☝️ use type cast
const formThroughClass2 = document.querySelector(
  '.new-item-form'
) as HTMLFormElement;

console.log(formThroughClass2.children);

// input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

formThroughClass2.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
