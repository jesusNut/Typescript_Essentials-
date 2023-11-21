/**=====================================
 **    ☠️☠️ ABSTRACT CLASS ☠️☠️
 *======================================**/

//! 🤓 The most common use of abstract classes in TypeScript
//!     is to locate some common behavior to share within related subclasses.
//! 🤓 An abstract class cannot be instantiated.
//! 🤓 To declare an abstract class, we use the abstract keyword.
//! 🤓 Abstract classes MAY contain one or more abstract methods &/OR properties.
//! 🤓 The class which EXTENDS an abstract class must define all its abstract method.
//! 🤓 If a class which EXTENDS an abstract class fails to define any of its abstract method,
//!     then, that class must also be declared abstract OR we will get error.
//! 🤓 We cannot use 'private' modifier with abstract methods.
//! 🤓 Cannot reduce the scope of abstract methods in derived class.

//===========================================================================================================

//* ********************* example-1 : Abstract class with abstract method

abstract class Book {
  private author: string;
  private title: string;

  constructor(author: string, title: string) {
    this.author = author;
    this.title = title;
  }
  greetBook(): string {
    return "Welcome to the world of Books!!!";
  }

  //! defining an abstract method. (private can't be used as access modifier)

  protected abstract getBookType(): string; //! No implementation.
}

class Kindle extends Book {
  //! implementing  abstract method
  getBookType(): string {
    return `This is an E-book`;
  }
  //override base class method
  greetBook(): string {
    return `${super.greetBook()}. ${this.getBookType()}`;
  }
}

//let book1 = new Book(); //! ERROR: Cannot create an instance of an abstract class.

let kindle1 = new Kindle("Abhishek", "The art of nail biting");
console.log(kindle1.greetBook());
console.log(kindle1.getBookType()); //this method was made public in derived class

//===========================================================================================================

//* ******************* example 2: abstract class with abstract property

export abstract class Person {
  abstract name: string; //! abstract property

  display(): void {
    console.log(this.name);
  }
}

class Employee extends Person {
  name: string; //commenting this property out will give error
  empCode: number;

  constructor(name: string, code: number) {
    super(); // must call super()

    this.empCode = code;
    this.name = name;
  }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

//===========================================================================================================

//! If a class which EXTENDS an abstract class fails to define any of its abstract method,
//! then, that class must also be declared abstract OR we will get error.

abstract class Money {
  abstract getValue(): number;
}

abstract class Dollor extends Money {
  //since the abstract method 'getValue()' is not implemented here, so
  //this class must be declared abstract or we will get error:
  //Non-abstract class 'Dollor' does not implement all abstract members of 'Money'
}

class UagndanDollor extends Dollor {
  getValue(): number {
    return 500; //this class implements the abstract method
  }
}


//===========================================================================================================

//! An abstract class can implement one or more interface.

interface Name {
   firstName: string
   lastName: string;
}

interface Work {
    doWork(): void;
}

abstract class BaseEmployee implements Name, Work {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
     // this.firstName = firstName;
      this.lastName = lastName;
  }

  abstract doWork(): void;
}