// interfaces

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