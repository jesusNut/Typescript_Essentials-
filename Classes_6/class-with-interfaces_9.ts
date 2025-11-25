/**=========================================================
 **    ☠️☠️ CLASS can implement interfaces☠️☠️
 *=========================================================*/

//! Difference between interfaces and abstract classes?

//todo          😈 1. WE CANNOT USE 'instanceof' type-guard with interfaces.
//todo          😈 2. A class can extend only one class/abstract class and
//todo                 can implement any number of the interfaces.

//! The Fundamental Rule of Interface Implementation:

//1.  When a class implements an interface, it must provide implementations for all the properties and methods declared in that interface.
//2.  This means that if an interface defines a property, the class implementing it must have a property with the same name and compatible type.

//* Example 1:

interface Personal {
  name: string; // Property declared in the interface
  age: number; // Another property declared in the interface
  greet(): void; // Method declared in the interface
}

class Employee implements Personal {
  name: string; // Must implement 'name'
  age: number; // Must implement 'age'
  employeeId: string; // Class can have additional properties
  constructor(name: string, age: number, employeeId: string) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and my employee id is ${this.employeeId}.`);
  }
}

const emp = new Employee("Alice", 30, "12345");
emp.greet();
console.log(emp.name);
console.log(emp.age);


//===============================================================================================================================================


//* Exampe 2:


interface Lamp {
  bulb: number; 
  lumen: string | number;
  turnOn: () => string;
}

interface IStore {
  Read: () => void;
  Write: () => void;
}

class TableLamp implements Lamp, IStore {
  //implementing 2 interfaces
  bulb: number;
  lumen: string | number;
  constructor(bulb: number, lumen: string | number) {
    this.bulb = bulb;
    this.lumen = lumen;
  }
  Read(): void {
    console.log("Reading now.....");
  }
  Write(): void {
    console.log("Writing now......");
  }
  turnOn() {
    return "Plug me and put your fingers in the socket please.";
  }
}

const tl1 = new TableLamp(5, 800);

console.log(tl1.turnOn());
tl1.Read();
tl1.Write();
