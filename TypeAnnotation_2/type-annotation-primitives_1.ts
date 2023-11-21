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

//used as return type of a method below
function grettings(): void {
  console.log("Hi Sexy...you gonnna die one day...");
}

grettings();

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
