//Generics

// generics - 1
// const insertUid = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

//.name would NOT work because type 'object' has no specific object
// console.log(userOne.name);

// generics - 2
// const insertUid = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// this type of generics would create problem like below
// let userTwo = insertUid('hello');
// console.log(userTwo); // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", uid: 0}

//.name would work because type <T> accpets any type
// console.log(userOne.name);
// console.log(userOne.name);

// generics - 3
// const insertUid = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let userOne = insertUid({ name: 'sarthak', age: 36 });
// console.log(userOne);

// generics - 4 (making object type more specific)
const insertUid = <T extends { name: string; age: number }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let userOne = insertUid({ name: 'sarthak', age: 36 });
console.log(userOne);

// generics with interface

// here data could be any type,
// so we make generic type for data with <T>
interface Resource<T> {
  uid: number;
  resName: string;
  data: T;
}

let docTwo: Resource<string> = { uid: 1, resName: 'sathak', data: 'asdf' };
let docThree: Resource<object> = {
  uid: 1,
  resName: 'sathak',
  data: { hi: 'hello' },
};
let docFour: Resource<string[]> = { uid: 1, resName: 'sathak', data: ['asdf'] };
