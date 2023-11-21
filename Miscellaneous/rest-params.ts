/**======================================
 **    ☠️☠️ Rest Parameters ☠️☠️
 *=======================================**/

/**
 *  * Rest parameter and 'arguments' object
 *
 *   @definition
 *
 *  * 1. The rest param is denoted by ...<paramName>
 *  * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 *
 *  * 2. 'arguments' object made available within the function body only
 *  * 3. The 'arguments' can be access by array-like notation arguments[i]
 *  * 4. It has a length property
 *  ! 5. We must provide an array type to the rest parameter.
 *  ! 6. The Rest Parameters must appear last in the Parameter list.
 *  ! 7. There can be only one rest parameter in a function.
 */

function addNumbers(numOne: number, numTwo: number, ...anynum: number[]) {
  let sum = 0;

  for (let index = 0; index < arguments.length; index++) {
    sum = sum + arguments[index];
  }
  return sum;
}

//console.log(addNumbers()) //!error : Expected at least 2 arguments, but got 0.
//console.log(addNumbers(1)) //!error : Expected at least 2 arguments, but got 1.
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4, 5));

//todo:: CONCEPT 1: Even if there is just one extra argument, it will be saved as a single element of an array.
//todo::            If there is no argument provided then we get an empty array.

function addNumbers1(numOne: number, numTwo: number, ...anynum: number[]) {
  console.log(arguments); //[Arguments] { '0': 89, '1': 67, '2': 98 }
  console.log(anynum); //[ 98 ]
  console.log(anynum[0]); //98
  console.log(anynum[1]); //undefined
}

addNumbers1(89, 67, 98);





