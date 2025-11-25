/**===============================================
 **    ☠️☠️ TYPE ANNOTATIONS - PRIMITIVES☠️☠️

//! For type safety, we can EXPLICITLY annotate the variables
//! OR function parameter type 
//! OR function Return type with types.
 *================================================**/

//! We can use var/let & const to declare variables. (Concept is same as in JS)

let num: number = 123;

//! If we try to give type annotation without declaration , then we will get error

//num : number = 999; //error

//! We can define variables in 4 different ways :

//? https://www.tutorialspoint.com/typescript/typescript_variables.htm

/**===================================
 **   BUILTIN/PRIMITIVE DATA TYPES - boolean, string, number, null, undefined, void
 *====================================**/

//* number

let num1: number = 22;
console.log("🚀 ~ num1:", num1);
let num2: number = 22.22;
console.log("🚀 ~ num2:", num2);
let num3: number = -22.22;
console.log("🚀 ~ num3:", num3);

//* string

let str1: string = "abc";
console.log("🚀 ~ str1:", str1);

//* boolean

let hasMoney: boolean = false;
console.log("🚀 ~ hasMoney:", hasMoney);

//* void

//Example 1:

//used as return type of a method below
function grettings(): void {
  console.log("Hi Sexy...you gonnna die one day...");
}

grettings();

//Example 2:(below code will give issue)

// let print = function (param1: string, param2: string): void {
//   let newdata: string = param1 + param2;
//   return newdata;
// }; error:Type 'string' is not assignable to type 'void'

// You declared the return type as void, which means:
// => “This function must NOT return a value.”
// => TypeScript expects no return value.
// => But inside the function we tried to returna string. Hence error.


/**======================================================
 *?    https://github.com/Microsoft/TypeScript/pull/7140
 *=======================================================**/

//* null

let somestring: null = null;
console.log("🚀 ~ somestring:", somestring);

//* undefined

let undefvar: undefined = undefined;
console.log("🚀 ~ undefvar:", undefvar);

//************ USING const variable************** */

const man: boolean = true;

//man = false; //not-allowed : Cannot assign to 'man' because it is a constant
