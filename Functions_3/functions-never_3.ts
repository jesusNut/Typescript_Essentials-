/**======================================================================
 **    ☠️☠️ FUNCTION TYPE - RETURN TYPES & NEVER & UNKNOWN KEYWORD ☠️☠️
 *=======================================================================**/

//* Type inference to detect the return type.

let sumOne = (a: number, b: number) => {
  return true;
};

let sumTwo = (a: number, b: number) => {
  return 123;
};

let sumThree = (a: number, b: number) => {
  return "abc";
};

let sumFour = (a: number, b: number) => {
  return null;
};

let sumFive = (a: number, b: number) => {
  return [1, 2];
};

let sumSix = (a: number, b: number) => {
  return { a: a, b: b };
};

let sumSeven = (a: number, b: number) => {
  return;
};

//hover over the function names to see its type inferences.

//* Explicitly defining return types of functions  *******************************************************************

//example-1
let addOne = (num1: number, num2: number): number[] => {
  let myArray: number[] = [];
  myArray.push(num1);
  myArray.push(num2);

  return myArray;
};

//calling function and storing its value

const var1 = addOne(22, 11);
const var4: number[] = addOne(22, 11);
// const var2:number = addOne(22, 11); //invalid : Type 'number[]' is not assignable to type 'number'.
// const var3:null = addOne(22, 11); //invalid : Type 'number[]' is not assignable to type 'null'.

//! ## CONCEPT: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

// let addTwo = ():number=>{

// }

//* Void type *******************************************************************************************************

//example-1
let nothinger = function (a: number, b: number): void {
  return; //explicitly writing return
};

//example-2
let nothinger2 = function (a: number, b: number): void {
  return undefined; //explicitly writing return with undefined
};

//example-3
let nothinger3 = function (a: number, b: number): void {
  //writing no return statement
};

//! by default void type always returns undefined.
console.log(nothinger(22, 11)); //undefined
console.log(nothinger2(22, 11)); //undefined
console.log(nothinger3(22, 11)); //undefined

//example-4
let nothinger4 = function (a: number, b: number): void {
  console.log(a * b);
};

nothinger4(22, 11);

//* Never type ******************************************************************************************************

//! By default void type always returns undefined.
//! We use never type as return type in functions which we know will never reach the end of the function.

//* example 1: with type inference - TS automatically knows when the execution will never reach the end of function.

let errorOne = (message: string) => {
  //hover over to see the return type as 'never'

  throw new Error(message);
};

//* example-2

let errorTwo = (message: string): never => {
  let temp :number = 1;
  while (true) {
    console.log("hawa");
  }
};

//* example-3

//! ## CONCEPT: A function returning 'never' cannot have a reachable end point.

// let errorThree = (a: number, b: number): never => {
//   let c = a + b;
// };


//! ERROR: A function returning 'never' cannot have a reachable end point.

//? never vs void : https://www.youtube.com/watch?v=ysvfJokNz58

//* Any type ********************************************************************************************************

let anyer = function (a: number, b: number): any {
  //return {}; //valid
  //return []; //valid
  //return 200; //valid
  //return null; //valid
  //return undefined; //valid
};

let stringVarr: string = anyer(22, 11); //possible- no type safety
let numVarr: number = anyer(22, 11); //possible -no type safety
let booleanVarr: boolean = anyer(22, 11); //possible - no type safety
let nullVarr: null = anyer(22, 11); //possible - no type safety
let undefinedVarr: undefined = anyer(22, 11); //possible - no type safety
let arrayVarr: number[] = anyer(22, 11); //possible - no type safety
let objectVarr: {} = anyer(22, 11); //possible - no type safety

//* Unknown type ***************************************************************************************************

//! unknown type is a safer alternative to 'any' type because unknown type enforces
//!  type checking and type-safety.

let unknower = function (a: number, b: number): unknown {
  //return {}; //valid
  //return []; //valid
  //return 200; //valid
  //return null; //valid
  return "undefined"; //valid
  // one of the return statements must be there otherwise we will get error
  // error: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
};

let undefinedVar1: undefined;
//undefinedVar1 = unknower(22, 11); //! not-possible : Type 'unknown' is not assignable to type 'undefined'.

//* THEN HOW TO USE VALUES RETURNED FROM A FUNCTION WITH RETURN TYPE- UNKNOWN?

let somevar: unknown = unknower(22, 11); //step 1

if (typeof somevar === "undefined") {
  //step-2

  undefinedVar1 = somevar; //! possible - step-3
}
