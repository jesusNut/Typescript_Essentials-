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
 ** 2. instanceof
 *========================**/

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

//example 1 :

interface Necklace {
  kind: string;
  brand: string;
}
interface bracelet {
  brand: string;
  year: number;
}

type Accessory = Necklace | bracelet;

//🥴 Creating a predicate (true-false/boolean based) custom function for type checking:

function isNecklace(b: any): b is Necklace {
  //* Here we can write any custom logic:
  //Our custom logic checks if the property 'Kind' exists in the arg 'b'.
  //If yes then we return true.

  //* logic 1:

  // if ("kind" in b) {
  //   return true;
  // }
  // return false;

  //* logic 2:

  return (b as Necklace).kind !== undefined;
}

//🥴 Creating a function which will use the custom type - predicate.

function printData(obj: Accessory) {
  if (isNecklace(obj)) {
    console.log("I am necklace baby...");
  } else {
    console.log("I am something else baby...");
  }
}

// 🥴 Calling function which has used the custom type - predicate.

printData({ kind: "Bronze", brand: "Gupta Jwellers" });

//? https://blog.logrocket.com/how-to-use-type-guards-typescript/#equality-narrowing-typeguard

//🤑🤑🤑🤑 other examples: 🤑🤑🤑🤑

//? ALSO SEE : example 2 of Handling-Types_8\type-casting-assertion.ts
//? https://mainawycliffe.dev/blog/custom-type-guards-in-typescript/
//? https://www.tektutorialshub.com/typescript/typescript-type-guards/


/**========================================
 ** 4. Discriminated Unions
 *=========================================**/

// discussed separately.


//todo ::  Usage of 'is' keyword while creating custom type predicates

//see the example code below:

function isString(test: any): test is string{
  return typeof test === "string";
}

function example(foo: any){
  if(isString(foo)){
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