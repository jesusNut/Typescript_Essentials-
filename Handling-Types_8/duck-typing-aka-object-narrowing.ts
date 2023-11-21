/**=================================================================
 **    ☠️☠️ STRUCTURAL TYPING - 🦆🦆 DUCK 🦆🦆 TYPING ☠️☠️
//*    ☠️☠️ aka OBJECT NARROWING ☠️☠️
 *==================================================================**/

//! duck typing example - 1 ********************************************

type laptopType = {
  config: string; //semicolons
  price: number;
  "screen-size": string;
  hasBattery: boolean;
};

//  pcType has just one more extra property called  'cpufan' compared to 'laptopType'

type pcType = {
  config: string; //semicolons
  price: number;
  "screen-size": string;
  hasBattery: boolean;
  cpufan: number;
};

let ownPCOne: pcType = {
  config: "32 GB", //commas
  price: 200000,
  "screen-size": "ultra",
  hasBattery: true,
  cpufan: 8,
};

let laptopOne: laptopType = {
  config: "32 GB", //commas
  price: 200000,
  "screen-size": "ultra",
  hasBattery: true,
};

//todo:: assignments of direct object literals VS its reference

//ownPCOne = laptopOne; //💔💔 NOT possible : Property 'cpufan' is missing in type 'laptopType' but required in type 'pcType'.
laptopOne = ownPCOne; //💌💌 duck typing

//VS

// laptopOne = {
//   config: "32 GB", //commas
//   price: 200000,
//   "screen-size": "ultra",
//   hasBattery: true,
//   cpufan: 8,
// };

//! Error : Object literal may only specify known properties, and 'cpufan' does not exist in type 'laptopType'.

//! duck typing example - 2 ********************************************

//todo:: Difference between passing in an object directly VS as a reference in TS functions

//? https://stackoverflow.com/questions/67722258/difference-between-passing-in-an-object-directly-and-as-a-reference-in-ts-functi

let obj1 = {
  fname: "Abhishek",
  age: 22,
  rich: false,
};

let printer = function (data: typeof obj1) {
  console.log(data.fname);
  console.log(data.age);
  console.log(data.rich);
};

let mohanObj = {
  fname: "Mohan",
  age: 99,
  rich: true,
  car: "bmw",
};

printer(mohanObj); //* WORKS FINE

// printer({
//   fname : 'Mohan',
//   age : 99,
//   rich : true,
//   car : 'bmw'
// }); //! GIVES ERROR

//! duck typing example - 3 ********************************************

type employee = { id: string; role: number };

function printEmployee<T extends employee>(emp: T) {
  console.log(emp.id + "---" + emp.role);
}

//!  duck typing :

printEmployee({ id: "101", role: 999 }); //perfect employee type object passed as param
printEmployee({ id: "1001", role: 9999, data: 111 }); //OK
printEmployee({ id: "10001", role: 99999, data: 111, rich: true }); //OK
//printEmployee({ role : 999, data : 111, rich : true}) //ERROR as 'id' is missing

/**=======================
 * ?      OTHER EXAMPLES
 * ? https://www.youtube.com/watch?v=XscbEacQIRU
 * ? https://www.youtube.com/watch?v=udHYPeZzPGQ
 * ? https://www.denhox.com/posts/be-mindful-of-typescripts-excess-property-checking/
 *
 *========================**/

export {};
