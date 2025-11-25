/**===================================================
 **    ☠️☠️ Inheritence - Access Modifiers☠️☠️
 *====================================================**/

//! Private members are not inherited or accessible in child class.
//! Public members and protected members are accessible in child class.

export class Security {
  public fname: string;
  private age: number;
  protected skill: string;

  constructor(fname: string, age: number, skill: string) {
    this.fname = fname;
    this.age = age;
    this.skill = skill;
  }

  //private method

  private fprivate() {
    console.log(`I am Private method of base class`);
  }

  //public method

  public fpublic() {
    console.log(`I am Public method of base class`);
  }

  //protected method

  protected fprotected() {
    console.log(`I am Protected method of base class`);
  }
}

class Bahadur extends Security {
  someMethod() {
    //console.log(`${this.age}`);    //! ERROR
    //ERROR :Property 'age' is private and only accessible within class 'Security'.
    console.log(`${this.fname}`); //OK
    console.log(`${this.skill}`); //OK
    //super.fprivate(); //! ERROR
    //ERROR : Property 'fprivate' is private and only accessible within class 'Security'.
    super.fprotected();
    super.fpublic();
  }
}

const bahadurObj1 = new Bahadur("Binod", 99, "Karate");

bahadurObj1.someMethod();
bahadurObj1.fpublic(); //OK
//bahadurObj1.fprotected(); //! ERROR - Property 'fprotected' is protected and only accessible within class 'Security' and its subclasses.

//==========================================================================================

//! Overriding Access Modifier in the Derived Class

//! 😤😤 You cannot decrease the scope (visibility) of an access modifier when overriding a method in a child class in JavaScript 😤😤

//* Example 1:

export class Person {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(): string {
    return this.firstName + " " + this.lastName + "from Person class";
  }

  protected printHello() {
    console.log("Hello boy from Person");
  }
}

class Employee extends Person {
  firstName: string;
  lastName: string;
  designation: string;

  constructor(firstName: string, lastName: string, designation: string) {
    super(firstName, lastName);
    this.designation = designation;
  }

  changeName(firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //method overriding and changing modifier
  public printHello() { //! private modifier here, will give error. Public and Protected works fine.
    console.log("Hello boy from Employee");
  }
}

//Created from the Employee Class
let e = new Employee("Jon", "Snow", "Manager");

//Ok
console.log(e.firstName);
console.log(e.lastName);
e.printHello();

//Created from the Person class
let p = new Person("Jon", "Snow");

//Error
// console.log(p.firstName); //Property 'firstName' is protected and only accessible within class 'Person' and its subclasses.
// console.log(p.lastName); //Property 'lastName' is protected and only accessible within class 'Person' and its subclasses.
// p.printHello(); //Property 'printHello' is protected and only accessible within class 'Person' and its subclasses.

//* Example 2:


class Money {
  public getChillar() {
    console.log("2 rupess people....");
  }
}

class Dollor extends Money {
  getChillar() { //protected or private here, will give issues.
    console.log("2 rupess people....");
  }
}
