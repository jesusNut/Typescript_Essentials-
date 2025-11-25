/**==========================================================================
 **    ☠️☠️ Inheritence - method overriding and property overriding &☠️☠️

 **   ☠️☠️ accessing base class methods & properties in child class ☠️☠️
 *==========================================================================**/

 /**================================================================================================
 * todo ********************* SUMMARY ABOUT ACCESSING BASE CLASS MEMEBRS *************************
 * 
 * todo 1.) super keyword used to access  static properties and methods on BASE CLASS PROTOTYPE.
 * todo 2.) super() & super(args) is used for calling parent class constructors from child class.
 * todo 3.) super CAN be used to access parent instance methods.
 * !    4.) super cannot be used to access instance variables of parent class, in child class.
 *   
 *================================================================================================**/

//! Concept 1 : Overriding method.

export class Person {
  greet(name: string): void {
    console.log("Hello from Parent " + name);
  }
}

class Employee extends Person {
  //! overrides greet() from baseclass
  greet(name: string): void {
    console.log("Hello from Child " + name);
  }
}

let e = new Employee();
e.greet("Jon Snow");
//! If the greet() not present in the derived class then,
//! the greet() from base class will be called.

//=============================================================================================

//! Concept 2: While overriding method, we cannot:
//! 1. Increase the parameter OR 
//! 2. Change the sequence of parameters IN derived Class.

// ~~~~~~~~~~~~~~~~~~~~~ example 1:

export class Person1 {
  greet(name: string): void { //1 param
    console.log("Hello from Parent " + name);
  }
}

class Employee1 extends Person1 {
  //! we will get errors if we change the number of params as shown below:
  // greet(name:string, message : string) :void { //2 params
  //   console.log("Hello from Child "+ name)
  // }
}

// ~~~~~~~~~~~~~~~~~~~~~ example 2:

class Hooman {
  greet(data : string, age : number) { //return string
    return "Hi I am greet() - instance  method";
  }
}

class Student extends Hooman {
  //! we will get errors if we change the sequence of params as shown below:
    // greet(age : number,data : string) { //return string
    //     return "Hi I am greet() - instance  method";
    //   }
}
//=============================================================================================

//! Concept 3: While overriding method, we cannot change the method return type in derived class.

export class Person2 {
  greet(name: string): string {
    return `Hi my name from parent class is : ${name}`;
  }
}

class Employee2 extends Person2 {
  //! ERROR if we change the method return type.
  // greet(name:string) : number {
  //     return 123;
  // }
  //ERROR:
  // Property 'greet' in type 'Employee2' is not assignable to the same property in base type 'Person2'.
  // Type '(name: string) => number' is not assignable to type '(name: string) => string'.
  // Type 'number' is not assignable to type 'string'.
}

let emp2 = new Employee2();
console.log(emp2.greet("abc"));

//=============================================================================================

//! Concept 4: Accessing base class methods in child class.

export class Security {
  fname: string;
  constructor(fname: string) {
    this.fname = fname;
  }
  greet(): void {
    console.log("I am papa security : " + this.fname);
  }
}

class MallSecurity extends Security {
  greet(): void {
    console.log("Accessing from Child security........");
    //! Accessing base class methods in child class
    super.greet();
  }
}

const mallsec = new MallSecurity("Abhishek");
mallsec.greet();

//=============================================================================================

//! Concept 5:  Accessing base class properties in child class.

export class Security1 {
  fname: string;
  constructor(fname: string) {
    this.fname = fname;
  }
  greet(): void {
    console.log("I am BIGG security : " + this.fname);
  }
}

class MallSecurity1 extends Security1 {
  age: number;

  constructor(fname: string, age: number) {
    super(fname);
    this.age = age;
  }
  greet(): void {
    //! accessing base class method using super:
    super.greet();
    //! accessing base class property using this:
    console.log(`${this.fname}------${this.age}`);
    //! using 'super.fname' will give undefined.
    //console.log(`${super.fname}`); //undefined
  }
}

const mallsec1 = new MallSecurity1('Maru', 88);
mallsec1.greet();


//=============================================================================================

//! Concept 6: You can override a property, as long as the data types are compatible.

//! WE CANNOT SIMPLY CALL INSTANCE VARIABLES/PROPERTIES OF BASE CLASS USING SUPER KEYWORD (LIKE METHODS).

export class Person3 {
  age: number = 55;
  greet(): string {
    return `I am ${this.age} years young`;
  }
}

class Employee3 extends Person3 {
  age: number = 99;
  // greet(): string {

  //   //! using 'super.age' will give undefined.
  //   return `I am ${this.age} years young in child and ${super.age} years old in Parent`;
  // }
}

let emp3 = new Employee3();
console.log(emp3.greet());

//I am 99 years young in child and undefined years old in Parent.

//? https://stackoverflow.com/questions/13121431/accessing-member-of-base-class
//? https://stackoverflow.com/questions/73052000/unable-to-access-get-value-of-abstract-base-class-properties-from-derived-clas
//? https://stackoverflow.com/questions/64418755/super-keyword-cannot-access-parent-property-in-javascript
//? https://www.tektutorialshub.com/typescript/inheritance-in-typescript/


