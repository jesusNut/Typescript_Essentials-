/**================================
 **    ☠️☠️ CLASS- constructors ☠️☠️
 *=================================**/

//? https://www.tektutorialshub.com/typescript/constructor-in-typescript/

//! In order to write constructor, use keyword 'constructor'[Not like java where its equal to classname]
//! Constructors are used to initialize objects.
//! If you don't provide your own constructor,
//! then AN EMPTY DEFAULT CONSTRUCTOR WILL BE SUPPLIED FOR YOU.

class Cow {
  legs: number;
  horns: number;

  giveDetails(name: string): string {
    return `Hi Cow named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
  }
}

//? INITIALIZING THE CLASS WITH DEFAULT CONSTRUCTOR

const rambha = new Cow();
console.log(rambha.giveDetails("Rambha Madhuri"));

//Hi Cow named Rambha Madhuri, you have undefined legs and undefined horns

//===================================================================================================================

//! A class cannot have more than one constructor method.
//todo SO, CONSTRUCTOR OVERLOADING IS NOT POSSIBLE IN JS.[Not like Java]

//! 🤨 BUT 🤨 TypeScript allows you to declare overloads but you can only have one implementation and that implementation
//!             must have a signature that is compatible with all overloads.

class Dog {
  legs: number;
  horns: number;

  //constructor

  constructor(legs: number, horns: number) {
    this.legs = legs;
    this.horns = horns;
  }

  //   constructor(legs: number) { //! ERROR : Multiple constructor implementations are not allowed.
  //     this.legs = legs;
  //   }

  giveDetails(name: string): string {
    return `Hi Dog named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
  }
}

let tommy = new Dog(4, 0);
console.log(tommy.giveDetails("Tommy Hilfiger"));

//Hi Dog named Tommy Hilfiger, you have 4 legs and 0 horns

//! ======= 🤨 CONST. OVERLOADING 🤨============================================================================================

class Farakka {
  private fname: string;
  private age: number;

  constructor(fname: string, age: number);
  constructor(fname: string, age: string);
  constructor(fname: unknown, age: unknown) {
    if (typeof fname === "string" && typeof age === "number") {
      this.fname = fname;
      this.age = age;
    } else if (typeof fname === "string" && typeof age === "string") {
      this.fname = fname;
      this.age = parseInt(age);
    }
  }

  getData() {
    return `${this.fname}----${this.age}`;
  }
}

const mystud = new Farakka("Anishek", "999");
console.log(mystud.getData());

//! ======= 🤨USING OPTIONAL PARAM IN CONST. 🤨============================================================================================

class Mohana {
  fname: string;
  lname: string;
  age: number;

  constructor(fname?: string, lname?: string, age?: number) {
    this.fname = fname || "Default First Name";
    this.lname = lname || "Default Last Name";
    this.age = age || 0;
  }

  displayInfo(): void {
    console.log(`Name: ${this.fname} ${this.lname}, Age: ${this.age}`);
  }
}

const mohana1 = new Mohana("Alice", "Wonderland", 30);
const mohana2 = new Mohana("Bob", "Smith");
const mohana3 = new Mohana("Charlie");
const mohana4 = new Mohana(); // Uses all default values

//===================================================================================================================

//! If we have written even a single constructor explicitly in the class,
//! then, the default constructor cannot be used.

class Pig {
  legs: number;
  horns: number;

  //explictly written constructor

  constructor(legs: number, horns: number) {
    this.legs = legs;
    this.horns = horns;
  }

  giveDetails(name: string): string {
    return `Hi Pig named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
  }
}

const piggy1 = new Pig(3, -1); //*OK
//const piggy2 = new Pig(); //! ERROR

//===================================================================================================================

//! Concept of Parameter Properties.

//! TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value.
//! These are called parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly.

class fook {
  constructor(
    public bar1: string,
    private bar2: string,
    readonly bar3: number
  ) {} //* NOTICE NO ASSIGNMENT LIKE 'this.abc = abc;'

  getDetails() {
    console.log(
      `bar1 is ${this.bar1}--- bar2 is ${this.bar2}--- bar3 is ${this.bar3}`
    );
  }
}

const fookObject = new fook("saturn", "dancer", 22);
fookObject.getDetails();
//======= accesing public class property =========
fookObject.bar1 = "neptune";
//fookObject.bar2 ="clear"; //ERROR: Property 'bar2' is private and only accessible within class 'fook'.
//fookObject.bar3 = 55; //ERROR: Cannot assign to 'bar3' because it is a read-only property.

//? https://stackoverflow.com/questions/48571592/private-parameters-in-typescript
