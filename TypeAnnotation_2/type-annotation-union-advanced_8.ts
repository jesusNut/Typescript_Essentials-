/**==========================================================
 **    ☠️☠️ TYPE ANNOTATIONS- UNION TYPE - ARRAYS & OBJECTS ☠️☠️
 *===========================================================**/

/**=======================
 **     🧟‍♀️🧟‍♀️ ARRAYS 🧟‍♀️🧟‍♀️
 *========================**/

//scenario 1: Create array which can hold either string or numbers.

//way 1
let mixedArr1: (string | number)[] = [
  "apple",
  70,
  "hutch",
  90,
  "vodafone",
  100,
];

//   mixedArr1.push(true) //not-valid : Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   mixedArr1.push(null) //not-valid : Argument of type 'null' is not assignable to parameter of type 'string | number'.
//   mixedArr1.push(undefined) //not-valid : Argument of type 'undefined' is not assignable to parameter of type 'string | number'.

mixedArr1.push("Airvoice");
mixedArr1[0] = 9999;
console.log("🚀 ~ mixedArr1:", mixedArr1);

//way2

let mixedArr2: Array<string | number> = [
  "apple",
  70,
  "hutch",
  90,
  "vodafone",
  100,
];

console.log(mixedArr2[3]); //90

//------------------------------------------------------------------------

//scenario-2 : reassign array references

let myMix1: (string | boolean)[] = ["abc", true, "def", false, true];

let myMix2: (string | boolean | number)[] = [
  "abc",
  true,
  "def",
  false,
  true,
  123,
  456,
];

//allowed re-assignment:
myMix2 = myMix1;

//not-allowed re-assignment:
//myMix1 = myMix2; //error

//Type '(string | number | boolean)[]' is not assignable to type '(string | boolean)[]'.
// Type 'string | number | boolean' is not assignable to type 'string | boolean'.
// Type 'number' is not assignable to type 'string | boolean'.

//------------------------------------------------------------------------

//scenario -3 : 2 dimensional array - single Type

// [[123, 456],[789,10,11,12, 13]] i.e. only numbers should be allowed in any inner array

let twod1: number[][] = [
  [123, 456],
  [789, 10, 11, 12, 13],
];
console.log("🚀 ~ twod1:", twod1);

//twod1 = [[123, 456 ,'abc'],[789,10,11,12, 13]] //invalid : Type 'string' is not assignable to type 'number'

//twod1 = [[123, 456 ,null],[789,10,11,12, 13]]  //invalid : Type 'null' is not assignable to type 'number'.

twod1.push([99, 999, 9999]);
console.log("🚀 ~ twod1:", twod1);

//------------------------------------------------------------------------

//scenario -4 : 2 dimensional array - Multi Types

// [[123, 456, 'abc', true],[true, true, true],[1,2,3]] i.e. only numbers should be allowed in any inner array

let twod3: (string | number | boolean)[][] = [
  [123, 456, "abc", true],
  [true, true, true],
  [1, 2, 3],
];
console.log("🚀 ~ twod3:", twod3);

twod3.push(["kkk", "mmm", "jjj"]);
console.log("🚀 ~ twod3:", twod3);

twod3[0][0] = true;
console.log("🚀 ~ twod3:", twod3);

//twod3[0][0] = null; //invalid : Type 'null' is not assignable to type 'string | number | boolean'.

//re-assignment

let twod4: (string | number)[][] = [
  ["chacha", "fufa"],
  [-880, -990],
];

//twod4 = twod3; //not-allowed

twod3 = twod4; //allowed
console.log("🚀 ~ twod3:", twod3);

/**==========================================
 **     🧟‍♀️🧟‍♀️ UNION IN OBJECT PROPERTIES 🧟‍♀️🧟‍♀️
 *============================================**/

//scenario-1 : a complex object

let student1: {
  id: number;
  firstName: string;
  lastName: string;
  age: number | string;
  doj: string | boolean;
  address: {
    city: string;
    state: string;
  };
  skills: string[];
} = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
  age: 99,
  doj: "20-02-1879",
  address: {
    city: "Los Angeles",
    state: "California",
  },
  skills: ["php", "c++", "gossip"],
};

student1.age = "999";
console.log();
//student1.age = true; //not allowed : Type 'boolean' is not assignable to type 'string | number'.
student1.doj = false;
//student1.doj = null; //not-allowed : Type 'null' is not assignable to type 'string | boolean'
console.log("🚀 ~ student1:", student1);

//scenario-2 : array of objects

let colors: {
  color: string | number;
  value: string;
}[] = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
];

colors[0].color = "black"; //allowed
colors[0].color = 5366; //allowed
//colors[0].color = true; //not-allowed : Type 'boolean' is not assignable to type 'string'.
//colors[0].color = null; //not-allowed : Type 'null' is not assignable to type 'string'.
console.log("🚀 ~ colors:", colors);

//colors.push({color: 'magenta',value:'#770',data: true} ); //not-allowed

//Argument of type '{ color: string; value: string; data: boolean; }' is not assignable to parameter of type '{ color: string; value: string; }'.
//Object literal may only specify known properties, and 'data' does not exist in type '{ color: string; value: string; }'

colors.push({ color: "magenta", value: "#770" });
console.log("🚀 ~ colors:", colors);

/**===========================
 **      UNION OF OBJECTS
 *============================**/

//! If 2 object types are in union, we can have
//! 1. All properties of both types.
//! 2. All properties of either type.
//! 3. All properties of either type + any property of remaining type.

//! BUT CANNOT HAVE : some property of either type.

type nonveg = {
  fname: string;
  masala: string[];
};

type cuisine = {
  garnisher: string;
  sidedrink: string;
};

type mydish = nonveg | cuisine;

const ghostBhuna1: mydish = {
  fname: "goshtBhuna",
  masala: ["ginger", "garlic"],
  garnisher: "curd",
  sidedrink: "masala tea",
};

const ghostBhuna2: mydish = {
  fname: "goshtBhuna",
  masala: ["ginger", "garlic"],
};

const ghostBhuna3: mydish = {
  garnisher: "curd",
  sidedrink: "masala tea",
};

const ghostBhuna4: mydish = {
  fname: "goshtBhuna",
  masala: ["ginger", "garlic"],
  sidedrink: "masala tea",
};
const ghostBhuna5: mydish = {
  fname: "goshtBhuna",
  garnisher: "Curd",
  sidedrink: "masala tea",
};

// const ghostBhuna6: mydish = { //! ERROR
//   fname : 'goshtBhuna', //one property from 'nonveg' type
//   sidedrink : 'masala tea' //one property from 'cuisine' type
// }

/**===========================================================
 **      UNION OF OBJECTS HAVING COMMON PRIMITIVE PROPERTIES
 *============================================================**/

 //! It is allowed to have primitive property with same name & same type OR different type.
 //! If the common property has different types, it is inferred as union of both types.

 type myobj1 = {
  fname: string;
  age: number;
};

type myobj2 = {
  fname: number;
  salary: number;
};

type myobj3 = myobj1 | myobj2; // fname property is common


// export let abhishek : myobj3 = {

//     fname : true, //! ERROR : Type 'boolean' is not assignable to type 'string | number'.
//     age : 99,
//     salary : 999
// }


/**=================================================================
 **      UNION OF OBJECTS HAVING COMMON NON-PRIMITIVE PROPERTIES
 *==================================================================**/

 //Example 1 

 type Homeaddress = {
  Home1: string;
  Home2: string;
};

type Officeaddress = {
  Office1: string;
  Office2: string;
};

type Joker = {
  name: string;
  age: number; //common primitive
  address: Homeaddress; //common non-primitive
};

type Manager = {
  managerCode: string;
  division: string;
  age: string; //common primitive
  address: Officeaddress; //common non-primitive
};

type jokermanager = Joker | Manager;

export let abhishek: jokermanager = {
  name: "Abhi",
  age: 999, //! if we make age as string here, we have to give address as office only, so that all proprties of 
            //! 'Manager' types gets covered. Right now all props of 'Joker' is covered with 2 add. prop from 'Manager'
  address: {
    Home1: "Serbia",
    Home2: "Srilanka",
  },
  managerCode: 'baddy',
  // address: {  //! ERROR : An object literal cannot have multiple properties with the same name.
  //   Office1: "Pakistan",
  //   Office2: "Islamabad",
  // },
  division: 'Finance'
  //age: 999

};
