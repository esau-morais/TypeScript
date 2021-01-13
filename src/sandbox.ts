// 1️⃣3️⃣ Lesson 13 -> Modules
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// 1️⃣ Lesson 1 -> Compiling TypeScript
const character = 'Esaú';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => console.log(input))

// 2️⃣ Lesson 2 -> Type Basics
let characterTwo = 'Esaú';
let age = 15;
let isBlackedBelt = false;
// characterTwo = 30
// ❌ Type 'number' is not assignable to type 'string'.
characterTwo = 'Esdras';
// age = '18'
// ❌ Type 'string' is not assignable to type 'number'.
age = 18;
// isBlackedBelt = 'yes'
// ❌ Type 'string' is not assignable to type 'boolean'.
isBlackedBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI
}
// ❌ console.log(circ('hello')); -> Before defining the arg type
// NaN
// console.log(circ('hello')); -> After defining the arg type
// ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(10));

// 3️⃣ Lesson 3 -> Objects & Arrays
let names = ['Esaú', 'Esdras', 'Carla'];
names.push('Pablo');
// names.push(4) || names[0] = 15
// ❌ Argument of type 'number' is not assignable to parameter of type 'string'.
let numbers = [15, 18, 37];
numbers.push(15);
let mixed = ['Esaú', 15, 'Esdras', 18];
mixed.push('Pablo');
mixed.push(15);
mixed[0] = 2005;

let dev = {
  age: 15,
  belt: 'black',
  name: 'Esaú'
}
dev.age = 37;
dev.name = 'Carla';
// dev.age = 'Thirty seven';
// ❌ Type 'string' is not assignable to type 'number'.

// 4️⃣ Lesson 4 -> Explicit Types
let characterThree: string;
let ageTwo: number;
let isLoggedIn: boolean;
// ageTwo = 'one'
// ❌ Type 'string' is not assignable to type 'number'.
ageTwo = 30;

let ninjas: string[] = [];

// ninjas = [1, 2, 3]
// ❌ Type 'number' is not assignable to type 'string'.

// ninjas.push('Esau') -> Before defining an empty array
// ❌ Uncaught TypeError: Cannot read property 'push' of undefined

ninjas.push('Esau'); // After defining an empty array

let mixedNinjas: (string | number)[] = [];
mixedNinjas.push('Esau');
mixedNinjas.push(15);

let uid: string | number;
uid = 'one';
uid = 1;

let ninjaOne: object;
ninjaOne = { name: 'Esau', age: 15 };
let ninjaTwo: {
  name: string,
  age: number
}
ninjaTwo = {
  name: 'Esau',
  age: 15
}

// 5️⃣ Lesson 5 -> Dynamic (any) Types
let ageThree: any = 15;
ageThree = 'twenty five';
ageThree = { year: 2005 };

let mixedTwo: any[] = [];
mixedTwo.push('Esau');
mixedTwo.push(15);
mixedTwo.push('A 15yo guy that 💜 coding');

let ninjaThree: {
  name: string,
  age: number
}
ninjaThree = {
  name: 'Esau',
  age: 15
}

// 6️⃣ Lesson 6 -> Better Workflow & tsconfig

// 7️⃣ Lesson 7 -> Function Basics
// let greeting = () => console.log('Hello, world 👋');
let greeting: Function;
greeting = () => console.log('Hello, world 👋');

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
}
// add('ten', 10);
// ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
// add(10, 10); -> Before using the optional chaining
// ❌ Expected 3 arguments, but got 2.
add(10, 10); // Infers that it is returning automatically a void

const minus = (a: number, b: number) => {
  return a + b;
}
let result = minus(10, 10); // Infers the result automatically as a number

// 8️⃣ Lesson 8 -> Type Aliases
type StringOrNumb = string | number;
type UserObj = {
  name: string;
  uid: StringOrNumb
};

const logDetails = (uid: StringOrNumb, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}
const greetingTwo = (user: UserObj) => {
  console.log(`Hello, ${user.name} 👋`);
}

// 9️⃣ Lesson 9 -> Function Signatures
let logNinjaDetails: (obj: { name: string, age: number }) => void;

type NinjaObj = {
  name: string,
  age: number
}

logNinjaDetails = (ninja: NinjaObj) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}

// 🔟 Lesson 10 -> The DOM & Type Casting
// const anchor = document.querySelector('a'); // HTMLAnchorElement | null
// ❌ console.log(anchor.href); // Possibly null
const anchor = document.querySelector('a')!; // HTMLAnchorElement
console.log(anchor.href); // TypeScripts gets all the possible props

// const form = document.querySelector('form')!; // HTMLFormElement
// const form = document.querySelector('.new-item-form')!; // Element
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber // Turn into a number
  )
})

// 1️⃣1️⃣ Lesson 11 -> Classes
const invoiceOne = new Invoice('Esau', 'Travel to the UK', 1000);
const invoiceTwo = new Invoice('Esdras', 'Travel to EU', 1000);
console.log(invoiceOne);
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);

// 1️⃣2️⃣ Lesson 12 -> Public, Private & Readonly
invoices.forEach(invoice => 
  console.log(invoice.client, invoice.details, invoice.amount, invoice.format())
)

// 1️⃣4️⃣ Lesson 14 -> Interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Esau',
  age: 15,
  speak(text: string) {
    console.log(text)
  },
  spend(amount: number) {
    console.log(`I spent ${amount}`);
    return amount;
  }
}
console.log(me);

const greetSomeone = (person: IsPerson) => {
  console.log(`Hello, ${person.name} 👋`)
}
greetSomeone(me); 

// 1️⃣5️⃣ Lesson 15 -> Interfaces with Classes
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
let docOne, docTwo: HasFormatter;

docOne = new Invoice('Esau', 'Laptop', 540);
docTwo = new Payment('Esdras', 'Kindle', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

// 1️⃣7️⃣ Lesson 17 -> Generics
const addUid = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}
let userOne = addUid({ name: 'Esau', age: 15 });
console.log(userOne);
// console.log(userOne.name); -> Before using generics
// ❌ Property 'name' does not exist on type '{ uid: number; }'.
console.log(`Hello, ${userOne.name} 👋`); // -> After using generics
// let userTwo = addUid('Esau'); -> Before extending as a object
// ❌ Argument of type 'string' is not assignable to parameter of type 'object'.
let userTwo = addUid({ name: 'Esdras', age: 18 });
console.log(`Hello, ${userTwo.name} 👋`);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const resourceOne: Resource<string | object> = {
  uid: 1,
  resourceName: 'React.js',
  data: 'Library'
}
console.log(resourceOne);
const resourceTwo: Resource<string[]> = {
  uid: 1,
  resourceName: 'React.js',
  data: ['Library', 'Facebook']
}
console.log(resourceTwo);

// 1️⃣8️⃣ Lesson 18 -> Enums
enum ResourceType {
  PROGRAMMING_LANGUAGE,
  LIBRARY,
  FRAMEWORK
}
interface ResourceTwo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}
const resourceThree: ResourceTwo<string[]> = {
  uid: 1,
  resourceType: ResourceType.LIBRARY,
  data: ['React.js', 'Facebook']
}
console.log(resourceThree);
const resourceFour: ResourceTwo<string[]> = {
  uid: 2,
  resourceType: ResourceType.PROGRAMMING_LANGUAGE,
  data: ['JavaScript', 'Brendan Eich']
}
console.log(resourceFour);

// 1️⃣9️⃣ Lesson 19 -> Tuples
let tuple: [string, number] = ['Esau', 15];
tuple[0] = 'Esdras';
tuple[1] = 18;
