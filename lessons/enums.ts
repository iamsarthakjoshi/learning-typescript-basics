// Enums

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,

  // you can also specify number of id for each type explicitly
  //   BOOK = 4,
  //   AUTHOR = 6,
  //   FILM = 7,
  //   DIRECTOR = 11,
  //   PERSON = 567,
}
// here data could be any type,
// so we make generic type for data with <T>
interface Resource<T> {
  uid: number;
  resType: ResourceType;
  data: T;
}

let docTwo: Resource<string> = {
  uid: 1,
  resType: ResourceType.AUTHOR,
  data: 'asdf',
};
let docThree: Resource<object> = {
  uid: 1,
  resType: ResourceType.PERSON,
  data: { hi: 'hello' },
};
let docFour: Resource<string[]> = {
  uid: 1,
  resType: ResourceType.DIRECTOR,
  data: ['asdf'],
};

console.log(docTwo, docThree, docFour);
