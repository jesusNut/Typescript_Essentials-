/**=========================================================
 **    ☠️☠️ CLASS- optional and readonly properties☠️☠️
 *=========================================================*/

//! Optional property : Optional Properties are those properties that are not mandatory.

export class Person {
  name: string;
  age?: number;

  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("Eric J. Cerda");
console.log(person.age); //undefined

//! Note that we did not include age in the class constructor function.
//!If you want to include that then make sure you mark it as an optional parameter.

class Person1 {
  name: string;
  age?: number; //optional parameter

  constructor(name: string, age?: number) {
    this.name = name;
    if(age )this.age = age;
  }
}

let person1Object1 = new Person1("Eric J. Cerda"); //OK
let person1Object2 = new Person1("Eric J. Cerda", 99); //OK

console.log(person1Object1.age); //undefined
console.log(person1Object2.age); //99

//! Note that  the above is same as :

class Person2 {
  name: string;
  age: number; //not using optional '?' here

  constructor(name: string, age?: number) {
    this.name = name;
    if (age) this.age = age;
  }
}

let person2Object3 = new Person1("Eric J. Cerda"); //OK
let person2Object4 = new Person1("Eric J. Cerda", 99); //OK

console.log(person2Object3.age); //undefined
console.log(person2Object4.age); //99

//=====================================================================================
