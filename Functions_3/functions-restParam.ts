/**==============================================
 **    ☠️☠️ Using Rest Parameers in TS☠️☠️
 *===============================================**/

//Example 1:

function greetings(a: number, b: number, ...c: number[]) {
  let sumOfArray = c.reduce((a, b) => a + b);
  return a + b + sumOfArray;
}

const newLocal = greetings(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("🚀 ~ newLocal:", newLocal);

//Example 2:

type F1 = (
  a: number,
  b: number,
  ...c: Array<number | string>
) => (string | number)[];

let f1: F1 = (a, b, ...c) => {
  let temparr: Array<string | number> = [];
  temparr.push(a);
  temparr.push(b);
  c.forEach((c) => temparr.push(c));
  return temparr;
};

console.log(f1(22, 33, 44, 55, 66, 77));

//===========================================================================================

//! Summary

//1. Rest parameters allow a function to accept any number of arguments after the fixed parameters.
//2. They are defined using ... and always come at the end of the parameter list.
//3. A rest parameter must always be the last parameter in the function signature.
//4. Only one rest parameter is allowed per function.
//5. Rest parameters cannot appear before required/default/optional parameters.
//6. A rest parameter is always typed as an array type (e.g., ...nums: number[]).
//7. When defining a function type, the rest parameter MUST include ... as well.
//           Example: (a: number, ...rest: string[]) => void
//8. The implementation must match this signature and also use ...rest.
//9. Rest parameter type must be compatible with all extra arguments.
//10.When no extra arguments are passed, TypeScript treats the rest param as an empty array.

//===========================================================================================
