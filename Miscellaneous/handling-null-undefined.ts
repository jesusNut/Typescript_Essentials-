/**===========================================================================
 **   ☠️☠️ How to detect and handle null and undefined in TS code... ☠️☠️
 *===========================================================================**/

//todo : TOPIC 1: What is difference between null and undefined in JS/TS?

//? https://www.tektutorialshub.com/typescript/null-undefined-in-typescript/

//todo : TOPIC 2: What is StrictNullChecks in TS?

//? https://www.tektutorialshub.com/typescript/strictnullchecks-in-typescript/

//todo: TOPIC 3: How to handle null?

//! Way 1: Using the equality operator ===

function sender() {
  //   return null;
  return undefined;
}

export const data = sender();

if (data === null) console.log("The data is null");
if (data === undefined) console.log("The data is undefined");

//! Way 2: Using the equality operator == [Notice its difference with === operator]

function checkValue(value: number | null | undefined) {
  if (value == null) console.log("Null!");
  if (value == undefined) console.log("Undefined!");
}

checkValue(null);

//Null!
//Undefined!

checkValue(undefined);

//Null!
//Undefined!

//todo : DIFFERENCE : == operator treats null and undefined as same.
//todo   so, code : 'null == undefined' will give you 'true' BUT  code : 'null === undefined' gives 'false'.

console.log(null == undefined); // 👉️ true

//* In a lot of scenarios this might not matter, you might just be checking if a variable has a truthy value.
//* So, if our intention is to check that a data is either undefined or null in one go,
//* we can use == equality operator.
//* Also, the above code can be shortened as below.

function checkValue1(value: number | null | undefined) {
  if (value == null) console.log("value is equal to null or undefined");
}

//! Way 3: Using the optional chaining (?.) operator in TypeScript

export type Person = {
  kname: string | null;
};

const someMan: Person = {
  kname: null,
};

const otherMan: Person = {
  kname: "anshul",
};

const fetchedName1: string = someMan.kname?.toUpperCase() as string;
console.log(fetchedName1); //undefined

const fetchedName2: string = otherMan.kname?.toUpperCase() as string;
console.log(fetchedName2); //ANSHUL

//* Check other use case in - Nested Properties & Array Indexes in Miscellaneous\operation-chaining.ts

//! Way 4: Null Coalescing Operator

function sender_one() {
  return {};
  //return null;
  //return undefined;
}

const getter = sender_one() ?? "Assign getter with some default value";
console.log(getter); //check for all return type combos in sender_one()


//todo: TOPIC 4: How to Set a default value if Null or Undefined in TypeScript?

//! Way 1: Using logical nullish assignment (??=) operator 

//* A logical nullish assignment (??=) operator assigns the provided value to the variable
//*  if it's equal to null or undefined.

let role: string | null | undefined = null;

role ??= 'developer';
console.log(role); // 👉️ "developer"


let other_role: string | null | undefined = 'accountant';

other_role ??= 'developer';
console.log(other_role); // 👉️ "accountant"


//! Way 2: using Null Coalescing Operator.

//as explained above.
