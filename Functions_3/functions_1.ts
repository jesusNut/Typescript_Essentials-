/**==============================================================
 **    ☠️☠️ FUNCTIONS BASICS & FUNCTION TYPE EXPRESSIONS ☠️☠️
 *===============================================================*/

//! we can define a variable with a type as 'Function' to restrict it to contain only
//! function implementations.

let function2: Function;

//function2 = true; //invalid : Type 'boolean' is not assignable to type 'Function'.

//function2 = [1,2,4,4]; //invalid : Type 'number[]' is missing the following properties from type 'Function': apply, call, bind, prototype, and 4 more.

//function2 = {}; //invalid : Type '{}' is missing the following properties from type 'Function': apply, call, bind, prototype, and 5 more.

//function2 = null; //invalid : Type 'null' is not assignable to type 'Function'.

function2 = () => {
  console.log("hi hooman");
};

function2(); //hi hooman

//reassiging a function with other implementation

function2 = () => {
  return "Hey sexy..";
};

console.log(function2()); //Hey sexy..

//reassiging a function with other implementation having params

function2 = (fname: string) => {
  return `${fname} is a great man...liker really bro !!!`;
};

console.log(function2("Advait kalra")); //Advait kalra is a great man...liker really bro !!!

//! so function2 variable with type as 'Function' can have any kind of (but ONLY) function implementation.

//!------------------------------- FUNCTION TYPE EXPRESSIONS --------------------------------

//defining function type expressions which will restrict the parameters and return type also.

export type funcType = (a: number, b: number) => number[];

//implementing function type with arrow function

let doSum: funcType = (a, b) => {
  let tempArray: number[] = [];
  tempArray.push(a);
  tempArray.push(b);

  return tempArray;
};

console.log(doSum(22, 33));
console.log(doSum(222, 333));

//? https://www.tektutorialshub.com/typescript/function-types-in-typescript/
//? https://www.youtube.com/watch?v=to_rpFMR0q4

//!   🧟🧟🧟🧟 CONCEPT WHILE DEFINING A FUNCTION TYPE AND ASSIGNING IT TO A VAR.🧟🧟🧟🧟

//step 1: Defining a function type expression:

type funcTypeAjeeb = (a: string, b: string) => string;

// Step 2: Understanding assigning variables with the type that was created above::::

// 🚩🚩🚩 CASE 1: Notice below implementation - it has 2 params and a return type: [💚VALID💚]

let concatinator1: funcTypeAjeeb = (a, b) => {
  return a + b;
}; //* VALID

// 🚩🚩🚩 CASE 2: Notice below implementation - it has 3 params and a return type: [💔INVALID💔]

// let concatinator2 : funcTypeAjeeb = (a,b,c)=>{
//   return a+b;
//   } //! INVALID

// Error : Type '(a: any, b: any, c: any) => any' is not assignable to type 'funcTypeAjeeb'.
//Target signature provides too few arguments. Expected 3 or more, but got 2.

// 🚩🚩🚩 SPECIAL CASE 3 : 🚩🚩🚩 : Notice below implementation -
// it has 1 param (less than 2) and a return type: [💚💚BUT STILL VALID💚💚]

let concatinator3: funcTypeAjeeb = (a) => {
  return a ;
}; //* VALID

//? https://stackoverflow.com/questions/28252843/typescript-dont-really-check-function-type
