/**==========================================================
 **    ☠️☠️ TYPE ALIAS ☠️☠️
 *===========================================================**/

//* used for code reusability.

//!--------------example 1------------------------------------------------------------------

//without type-alias

function adder(
  a: string | number, //repeating type annotation for each parameter
  b: string | number,
  c: string | number,
  d: string | number
) {
  return "something...";
}

//with type-alias

//* define a type alias

type paramType = string | number;

function typeAliasAdder(
  a: paramType,
  b: paramType,
  c: paramType,
  d: paramType
) {
  return "something....";
}

console.log(typeAliasAdder(1, 2, 3, 4));
console.log(typeAliasAdder("1", 2, "3", 4));
// console.log(typeAliasAdder('1',2,'3',true)); // invalid : Argument of type 'boolean' is not assignable to parameter of type 'paramType'.
// console.log(typeAliasAdder(2,1, undefined,'5')); // invalid : Argument of type 'undefined' is not assignable to parameter of type 'paramType'.

//!---------------------example 2: define type alias for an array------------------------------

// [
//   [123, 456, "abc", true],
//   [true, true, true],
//   [1, 2, 3],
// ];

type myArrayType = (string | number | boolean)[][];

let someArray: myArrayType = [
  [123, 456, "abc", true],
  [true, true, true],
  [1, 2, 3],
];

//!-------------------example 3: define type alias for objects--------------------------------

type myObject = {
  config: string; //semicolons
  price: number;
  "screen-size": string;
  hasBattery: boolean;
  perks: string[];
};

let myPC: myObject = {
  perks: ["camera", "bag", "anti-virus"],
  config: "32 GB", //commas
  price: 200000,
  "screen-size": "ultra",
  hasBattery: true,
};

//console.log("🚀 ~ pc:", pc);

//pc.config = 16; //invalid : type 'number' is not assignable to type 'string'.
//pc.perks = {}; //invalid
myPC.perks = []; //valid

//myPC.newprop = 22; // Error on adding a new property not present in type alias
//Error message : Property 'newprop' does not exist on type 'myObject'.

console.log("🚀 ~ pc:", myPC);

/**================================================================================================
 * ?    SUMMARY (Just like Interfaces with objects)
 * ?-------------------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *
 * ! 1. All the properties should be present in the object as per the Type Alias defined.
 * ! 2. All the properties should have exact name & type as defined in Type Alias.
 * ! 3. Cannot add a new property which is not already defined in Type Alias.
 * ! 4. Order of proprties does not matter until all properties are defined
 * !    as per the Type Alias with correct data types.
 *================================================================================================**/

//!-------------------example 4: define type alias for array of objects--------------------------------

type arrayOfEmployees = {
  emp_id: number;
  emp_name: string;
  emp_desg: string;
}[];

let employee: arrayOfEmployees = [
  { emp_id: 0, emp_name: "Saideep", emp_desg: "Tech Lead" },
  { emp_id: 1, emp_name: "Karthik", emp_desg: "Manager" },
  { emp_id: 2, emp_name: "Kiran", emp_desg: "Senior Systems Engineer" },
  { emp_id: 3, emp_name: "Revanth", emp_desg: "Technology Analyst" },
  { emp_id: 4, emp_name: "Ravi", emp_desg: "Systems Engineer" },
];
console.log(
  "Employee " +
    employee[0].emp_name +
    " with ID " +
    employee[0].emp_id +
    " works as a " +
    employee[0].emp_desg
);
console.log(
  "Employee " +
    employee[1].emp_name +
    " with ID " +
    employee[1].emp_id +
    " works as a " +
    employee[1].emp_desg
);
console.log(
  "Employee " +
    employee[2].emp_name +
    " with ID " +
    employee[2].emp_id +
    " works as a " +
    employee[2].emp_desg
);
console.log(
  "Employee " +
    employee[3].emp_name +
    " with ID " +
    employee[3].emp_id +
    " works as a " +
    employee[3].emp_desg
);
console.log(
  "Employee " +
    employee[4].emp_name +
    " with ID " +
    employee[4].emp_id +
    " works as a " +
    employee[4].emp_desg
);

//!-------example 4: define type alias for Functions (called Function Type) --------------------------------

//defining function type

type funcType = (a: number, b: number) => number[];

//implementing function type with arrow function

let doSum: funcType = (a, b) => {
  let tempArray: number[] = [];
  tempArray.push(a);
  tempArray.push(b);

  return tempArray;
};

console.log(doSum(22, 33));
console.log(doSum(222, 333));
