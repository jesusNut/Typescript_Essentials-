/**==============================================
 **    ☠️☠️ TYPE GUARDS☠️☠️
 *===============================================**/

//! Type guards are used to help in type-narrrowing.

//There are different kinds of type guards available.

/**======================
 ** 1.  type of
 *========================**/

//!  typeof can only detect primitives types like number, string, boolean, symbol, undefined, function.
//! For everything else, it returns object.

function formatAmount<T>(money: T) {
  let formattedAmount: string;

  if (typeof money === "string") {
    formattedAmount = "Rs. " + parseInt(money);
  } else if (typeof money === "number") {
    formattedAmount = "Rs. " + money;
  } else {
    throw new Error("Please input amount in numbers and strings only.");
  }

  console.log(formattedAmount);
  return formattedAmount;
}

formatAmount("100"); //Rs. 100
formatAmount(800); //Rs. 800
// formatAmount(true); //error - Please input amount in numbers and strings only.
// formatAmount(null); //error - Please input amount in numbers and strings only.
// formatAmount(undefined); //error - Please input amount in numbers and strings only.

/**======================
 ** 2. instanceof [applicable for classes and abstrct classes only]
 *========================**/

//* Example 1:

class Parent {
  fnamen: string;
  age: number;
}

class Child extends Parent {}

console.log(new Child() instanceof Parent); //true
console.log(new Parent() instanceof Child); //false
console.log(new Parent() instanceof Parent); //true
console.log(new Child() instanceof Parent); //true

//* Example 2:
export class Person {
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }
}

class Customer extends Person {
  code() {
    console.log("Customer Code named : " + this.name);
  }
  buy() {
    console.log("Bought");
  }
}
class SalesPerson extends Person {
  code() {
    console.log("SalesPerson Code named : " + this.name);
  }
  sell() {
    console.log("Sold");
  }
}

//usage:

function getData(obj: Person) {
  if (obj instanceof Customer) {
    obj.code();
    obj.buy();
  } else if (obj instanceof SalesPerson) {
    obj.code();
    obj.sell();
  }
}

getData(new Customer("Abhishek"));
getData(new SalesPerson("Krimi"));

/**======================
 ** 3. in Operator
 *========================**/

//! The in operator does not check the type,
//! but it checks if a property exists on an object.

//using the same Person, Customer and SalesPerson class rom above example here.

function getDataUsingIN(obj: Customer | SalesPerson) {
  if ("buy" in obj) {
    obj.code();
    obj.buy();
  } else if ("sell" in obj) {
    obj.code();
    obj.sell();
  }
}

/**============================================================
 ** 4. Custom type guard with predicate - usage of is keyword
 *=============================================================**/

//  The is operator in TypeScript is a type predicate.
//  It's a special syntax used within a function's return type annotation to narrow down the type of a value within a specific scope.
//  It essentially tells the TypeScript compiler that if a function returns true,
//     then a certain variable or expression must be of a particular type.

//example 1 :

type human = {
  fname: string;
  age: number;
  food: Array<string>;
};


function isHuman(obj: unknown): obj is human {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "fname" in obj &&
    typeof (obj as any).fname === "string" &&
    "age" in obj &&
    typeof (obj as any).age === "number" &&
    "food" in obj &&
    Array.isArray((obj as any).food) &&
    (obj as any).food.every((item: any) => typeof item === "string")
  );
}

 // 👇 A simple function using the type guard
function greetIfHuman(entity: unknown) {
  if (isHuman(entity)) { //! ✅ At this point, TypeScript knows entity is of type `human`
    console.log(`Hello ${entity.fname}, age ${entity.age}. Favorite food: ${entity.food.join(", ")}`);
  } else {
    console.log("Not a human!");
  }
}

//? https://blog.logrocket.com/how-to-use-type-guards-typescript/#equality-narrowing-typeguard

//🤑🤑🤑🤑 other examples: 🤑🤑🤑🤑

interface User {
  name: string;
  age: number;
}

function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    typeof obj.name === "string" &&
    "age" in obj &&
    typeof obj.age === "number"
  );
}

function greet(person: string | User) {
  if (isUser(person)) {
    // TypeScript now knows 'person' is of type 'User' within this block
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  } else {
    // TypeScript knows 'person' is of type 'string' here
    console.log(`Hello, ${person}!`);
  }
}

greet("Alice"); // Output: Hello, Alice!
greet({ name: "Bob", age: 30 }); // Output: Hello, Bob! You are 30 years old.
//greet({ name: "Charlie" });

//? ALSO SEE : example 2 of Handling-Types_8\type-casting-assertion.ts
//? https://mainawycliffe.dev/blog/custom-type-guards-in-typescript/
//? https://www.tektutorialshub.com/typescript/typescript-type-guards/

/**========================================
 ** 4. Discriminated Unions
 *=========================================**/

// discussed separately.

//todo ::  Usage of 'is' keyword while creating custom type predicates

//see the example code below:

function isString(test: any): test is string {
  return typeof test === "string";
}

function example(foo: any) {
  if (isString(foo)) {
    console.log("it is a string -" + foo);
    console.log(foo.length); // string function
  }
}
example("hello world");

//* Explanation:

//! Using the type predicate 'test is string' in the above format
//! (instead of just using boolean for the return type), after isString() is called,
//! if the function returns true, TYPESCRIPT WILL NARROW THE TYPE TO "string"
//! in any block guarded by a call to the function.
//! The compiler will think that foo is string in the below-guarded block (and ONLY in the below-guarded block).

//! BELOW IS THE SCOPE INSIDE WHICH COMPILER WILL THINK THAT FOO (arg) is a string.

// {
//     console.log("it is a string" + foo);
//     console.log(foo.length); // string function
// }

//? https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript
