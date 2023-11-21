/**================================================
 **  ☠️☠️ Intersection - '&' ☠️☠️
 *================================================**/

//? https://www.tektutorialshub.com/typescript/typescript-intersection-types/

//! An intersection type lets us combine multiple types or interfaces into one.

//! The structure of an object that has an intersection type has
//! to have STRUCTURE OF ALL THE TYPES that form the intersection types.

//! It’s denoted by an & sign.

//! All members of all the types are required in the object of an intersection type.

//example-1 : (see type-alias and functions beforing seeing this example)

type employee = {
  empDept: string;
  empId: string | number;
};

type person = {
  fname: string;
  age: number;
};

type employedPerson = employee & person;

const emp1: employedPerson = {
  empDept: "HR",
  empId: "1001",
  fname: "Chola Motwani",
  age: 99,
};

//* If you leave out of any one of the property in the above code,
//* the compiler will throw an error.

//-----------------------------------------------------------------------------------------------

/**===============================
 **   COMMON PRIMITIVE PROPERTIES
 *================================**/

//! It is allowed to have primitive property with same name & type
//! BUT, they should not differ in type,then resulting property will
//! HAVE THE TYPE- never, and you won’t be able to create the intersection until you fix the problem.

type Person = {
  name: string;
  age: number;
};

type Student = {
  studentCode: string;
  division: string;
  age: string; //* age is common primitive property having different types.
};

// let student: Student & Person= {
//     studentCode:"1",
//     division: "10",
//     name:"rahul",
//     age:20                    //! ERROR
// }

//-----------------------------------------------------------------------------------------------

/**=====================================
 **   COMMON NON-PRIMITIVE PROPERTIES
 *======================================**/

//! If you have a common non primitive property,
//! then the typescripts creates an intersection of them also.

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
  age: number;
  address: Homeaddress;
};

type Manager = {
  managerCode: string;
  division: string;
  age: number;
  address: Officeaddress;
};

let someone: Joker & Manager = {
  managerCode: "1",
  division: "10",
  name: "rahul",
  age: 20,
  address: {
    //! Intersection of Homeaddress & Officeaddress
    Home1: "",
    Home2: "",
    Office1: "",
    Office2: "",
  },
};

//-----------------------------------------------------------------------------------------------

/**================================================
 **   COMMON FUNCTIONS WITH DIFFERENT RETURN TYPE
 *=================================================**/

interface stringconverter {
  convert: (data: number) => string;
}

interface numberconverter {
  convert: (data: string) => number;
}

type biconverter = stringconverter & numberconverter;

const bidirectionalConverter: biconverter  = {
  convert: (data: string | number) => {
    return (typeof data === "number" ? String(data) : Number(data)) as string & number;
  },
};

console.log(typeof bidirectionalConverter.convert(22)); //string
console.log(typeof bidirectionalConverter.convert('222')); //number
