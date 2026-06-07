// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[]; // Type: string or array of strings

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// Type alias: for more complex types
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true  --> error
// }

let peopl: Person[]; // Type: an array of Person type objects

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics: for both flexible and type safe functions

// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

// const demoArray = [1, 2, 3];

// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray[0].split(""); // TS doesn't show error because it infers that the updatedArray is any[] value (because of the function)

// That's where generics comes in to place

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning<string>(["a", "b", "c"], "d");

// updatedArray[0].split('') --> Now the error works, because generics "told" TS to look at the concrete type of the function parameters
// stringArray[0].split('') --> no error
