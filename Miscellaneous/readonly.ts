/**======================================
 **    ☠️☠️ READONLY PROPERTIES ☠️☠️
 *======================================**/

//* Readonly properties can be used in below places:
//* 1. Objects.
//* 2. Interfaces.
//* 3. Types.
//* 4. Classes

//! Readonly properties cannot be used in function/method parameters.

//* 1. Usage in Objects:

let student: { fname: string; age: number; readonly school: string } = {
  fname: "Abhishek",
  age: 999,
  school: "DAV",
};

//now we can access BUT cannot modify the readonly property.

console.log(student.school); //* OK
//student.school = 'DPS'; //! Error : Cannot assign to school because it is a read-only property.

//* 2. Usage in Interface + Usage in classes.

interface Iperson {
  fname: string;
  age: number;
  readonly legs: number;
}

export let garbage: Iperson = {
  fname: "Ankush",
  age: 111,
  legs: 2,
};

console.log(garbage.legs); //* OK
//garbage.legs = 112; //! Error : Cannot assign to school because it is a read-only property.

class EliteClub implements Iperson {
  fname: string;
  age: number;
  readonly legs: number; //* In order to make 'legs' as readonly, put 'readonly' here also.

  constructor(fname: string, age: number, legs: number) {
    this.fname = fname;
    this.age = age;
    this.legs = legs;
  }
}

const rich1 = new EliteClub("Manish", 77, 2);
console.log("The rich man has " + rich1.legs + " legs."); //*OK
//rich1.legs = 4; //! Error : Cannot assign to school because it is a read-only property.

//* 3. Usage in Types

type Iemployee = {
  fname: string;
  age: number;
  readonly salary: number;
};

let gareeb: Iemployee = {
  fname: "Saharsha",
  age: 71,
  salary: 99000,
};

console.log(gareeb.salary); //* OK
//gareeb.salary = 88000; //! Error : Cannot assign to school because it is a read-only property.

//* Readonly properties cannot be used in function/method parameters.[Gives error below:]

// function adder(d1: number, readonly d2: number) {
//   return d1 + d2;
// }


//TODO interview question: readonly VS const KEYWORD VS as const.

//* 1. The const keyword is used for variables ONLY while
//*    the readonly keyword is used for properties within the members of a class.

//* 2. The const value is initialized during the time of declaration only,
//*    while the readonly can be declared without assigned values.


//? https://medium.com/lean-coders/understand-const-as-const-and-readonly-in-typescript-a-comprehensive-explanation-1b54f24b35d6
//? https://www.scaler.com/topics/typescript/typescript-readonly/

