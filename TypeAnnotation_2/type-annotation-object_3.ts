/**=================================================================
 **    ☠️☠️ TYPE ANNOTATIONS- Object type [Simple scenarios] ☠️☠️
 *==================================================================**/

//* Defining an object where we dont know what object & with which properties &
//* with which value types we will store in the future.- Way 1 [Not-recommended]

let anyObj: object;

anyObj = {};
anyObj = [] //allowed - as array is also an object
anyObj = { jug: "steel", mug: "plastic" }; //allowed
//! 👻👻👻 issue with way -1
// console.log(anyObj.jug); //error : Property 'jug' does not exist on type 'object'.
// console.log(anyObj.mug); //error: Property 'mug' does not exist on type 'object'.
console.log(anyObj)

//* Defining an object where we dont know what object & with which properties &
//* with which value types we will store in the future.- Way 2  [Not-recommended]

let anyObj1: {};

anyObj1 = {}; //allowed
anyObj1 = { jug: "steel", mug: "plastic" }; //allowed
//! 👻👻👻 issue with way -2
//console.log(anyObj1.jug); //error : Property 'jug' does not exist on type 'object'.
//console.log(anyObj1.mug); //error: Property 'mug' does not exist on type 'object'.
console.log(anyObj1)

//? https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type



//* Defining an object with fixed set of properties and its specific value types.
//! 👻👻👻 Important point to note is that:
//! the Object type is recommended to have semicolons between properties.
//! BUT, commas also work

let pc: {
  config: string; //semicolons
  price: number;
  "screen-size": string;
  hasBattery: boolean;
} = {
  config: "32 GB", //commas
  price: 200000,
  "screen-size": "ultra",
  hasBattery: true,
};

console.log("🚀 ~ pc:", pc);

//! accessing object types - array notation type and dot operator

console.log(pc.config);
console.log(pc.price);
console.log(pc["screen-size"]);
console.log(pc.hasBattery);

//! updating object property externally

pc.config = '16 GB';
console.log("🚀 ~ config: updated ::", pc.config) 


//! adding a new property externally

//pc.graphics = 'abc'; //not-allowed

//Property 'graphics' does not exist on type '{ config: string; price: number; "screen-size": string; hasBattery: boolean; }'


//! reassignment - 

//allowed with ALL keys and its appropriate value types.
pc = {
  hasBattery: false,
  price: 10000,
  config: "8 GB", //commas
  "screen-size": "small",
}


//not-allowed : with partial keys.
// pc = {
//   config: "8 GB", //commas
//   price: 10000,
//   "screen-size": "small",
// }

//! reassigning : allowed with exact property names and types (no more property, no less)
//! BUT, order of properties does not matter.
//? https://www.denhox.com/posts/be-mindful-of-typescripts-excess-property-checking/

//! Deleting a required property

let datas: {
  fname: string;
  experience: number;
  isFunctional: boolean;
  knowledge: {
    primary: string;
    secondary: string;
  };
};

datas = {
  fname: "Abhishek",
  experience: 10,
  isFunctional: false,
  knowledge: {
    primary: "Playwright",
    secondary: "Jmeter",
  },
};


//delete datas.fname; //Error : The operand of a 'delete' operator must be optional.

//Error is coming because Deleting a required property would break the type contract.



/**================================================================================================
 * ?    SUMMARY
 * ?----------------
 * 
 * ! 1. All the properties should be present in the object as per the type defined.
 * ! 2. All the properties should have exact name & type as defined in type.
 * ! 3. Cannot add a new property which is not already defined in type BUT
 * !    can be updated externally if the property already exists.
 * ! 4. Order of proprties does not matter until all properties are defined 
 * !    as per the type with correct data types.
 * ! 5. Cannot delete a required property (defined in type)extrenally using 'delete' keyword.
 *================================================================================================**/