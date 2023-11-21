/**==============================================
 **    ☠️☠️ Function Overloading☠️☠️
 *===============================================**/

//! The function overloading is not available in JavaScript.

//! TS allows function overloading.

//Example : We want to create a print function which can
// 1. Print sum of 2 numbers. OR
// 2. Print the sum of all elements of number[].

//* Individual implementations with different names:

function giveSum1(d1: number, d2: number) {
  return d1 + d2;
}

function giveSum2(d1: number[]) {
  const total = d1.reduce((a, b) => {
    return a + b;
  });
  return total;
}

//! JavaScript does allow us to create multiple functions with the same name.
//! But it overrides the previously written function.
//! It always calls the last declared function irrespective of how many functions you have declared.

//! While Typescript does not allow us to same name for multiple functions.
//!  It throws a Duplicate function implementation error if we try to do so.

//* Now, we need to overload these two functions:

//* Step 1: Create Overload signatures without body(i.e. Implementations)

function giveSum(d1: number, d2: number): number;
function giveSum(d1: number[]): number;

//* Step 2: We place the overload signatures directly above the implementation function.
//* Otherwise, we will get error @ line 38
//! ERROR : Function implementation is missing or not immediately following the declaration.

function giveSum(d1: unknown, d2?: number) {
  if (Array.isArray(d1)) {
    const total = d1.reduce((a, b) => {
      return a + b;
    });
    return total;
  } else if (typeof d1 === "number" && typeof d2 === "number") {
    return d1 + d2;
  } else {
    throw new Error("Give correct Input...");
  }
}

console.log(giveSum(22, 22));
console.log(giveSum([22, 33, 44, 55]));
//console.log(giveSum(true, 22)); //! ERROR: as function signature does not match to either overloads.
//console.log(giveSum(true)); //! ERROR: as function signature does not match to either overloads.
